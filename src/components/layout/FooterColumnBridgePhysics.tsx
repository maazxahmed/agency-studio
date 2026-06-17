"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const BRAND_TEXT = "COLUMN BRIDGE";
const MOBILE_BRIDGE_MQ = "(max-width: 767px)";
const STACKED_SECOND_LINE_SCALE = 0.84;

const headlineClass =
  "footer-bridge-3d font-[family-name:var(--font-display)] font-bold uppercase leading-[0.9] tracking-[0.02em]";

const GRAVITY_PX_S2 = 460;
const AIR_DRAG = 0.997;
const ANGULAR_DRAG = 0.94;
const MAX_FRAME_DT = 1 / 30;
const ASSEMBLE_MS = 2600;
const ASSEMBLE_STAGGER_MS = 55;
const PAUSE_BEFORE_ASSEMBLE_MS = 30;
const FALL_RELEASE_STAGGER_MS = 0;

function useStackedBridgeLayout() {
  const [isStacked, setIsStacked] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_BRIDGE_MQ);
    const update = () => setIsStacked(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return isStacked;
}

function fitBridgeFontSize(
  containerWidth: number,
  fontStyle: CSSStyleDeclaration,
  letters: string[],
  options?: { maxSize?: number; widthRatio?: number },
): number {
  const widthRatio = options?.widthRatio ?? 0.98;
  const maxSize = options?.maxSize ?? 220;
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx || containerWidth < 40) return 48;

  const fontTemplate = `${fontStyle.fontStyle} ${fontStyle.fontWeight} %SIZE%px ${fontStyle.fontFamily}`;

  const sumAt = (size: number) => {
    ctx.font = fontTemplate.replace("%SIZE%", String(size));
    return letters.reduce(
      (total, char) => total + ctx.measureText(char === " " ? "\u00A0" : char).width,
      0,
    );
  };

  let low = 16;
  let high = Math.min(Math.floor(containerWidth * 0.45), maxSize);
  let best = low;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (sumAt(mid) <= containerWidth * widthRatio) {
      best = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return best;
}

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

type LetterTarget = {
  homeX: number;
  homeY: number;
};

type LetterAnim = LetterTarget & {
  x: number;
  y: number;
  vx: number;
  vy: number;
  angle: number;
  va: number;
  floorY: number;
  phase: "falling" | "waiting" | "assembling" | "done";
  assembleAt: number;
  assembleFromX: number;
  assembleFromY: number;
  assembleFromAngle: number;
  fallStartAt: number;
};

function FooterBridgeStatic({
  isStacked,
  className = "",
}: {
  isStacked: boolean;
  className?: string;
}) {
  const letters = BRAND_TEXT.split("");

  return (
    <h2
      className={`flex w-full ${isStacked ? "flex-col items-center gap-0 text-center" : "justify-between"} ${headlineClass} ${className}`}
      style={{
        fontSize: isStacked ? "clamp(1.75rem, 9vw, 3.5rem)" : "clamp(2.5rem, 12vw, 8rem)",
      }}
    >
      {isStacked ? (
        <>
          <span className="block">COLUMN</span>
          <span className="block" style={{ fontSize: `${STACKED_SECOND_LINE_SCALE}em` }}>
            BRIDGE
          </span>
        </>
      ) : (
        letters.map((char, index) => (
          <span key={index} className="inline-block">
            {char === " " ? "\u00A0" : char}
          </span>
        ))
      )}
    </h2>
  );
}

export function FooterColumnBridgePhysics() {
  const prefersReducedMotion = useReducedMotion();
  const isStacked = useStackedBridgeLayout();
  const useStaticLayout = isStacked || prefersReducedMotion;

  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const bootedRef = useRef(false);
  const fontReadyRef = useRef(false);

  const [fontSize, setFontSize] = useState<number | null>(null);
  const [showLetters, setShowLetters] = useState(false);

  useEffect(() => {
    if (useStaticLayout) return;

    const container = containerRef.current;
    const measure = measureRef.current;
    if (!container || !measure) return;

    let cancelled = false;
    let rafId = 0;
    let letters: LetterAnim[] = [];
    let allLandedAt = 0;
    let animationStart = 0;
    let lastTickAt = 0;

    const fitFont = async () => {
      if (bootedRef.current) return;

      await document.fonts.ready;
      if (cancelled || bootedRef.current) return;

      await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
      if (cancelled || bootedRef.current) return;

      const sample = measure.querySelector<HTMLElement>("[data-letter]");
      if (!sample) return;

      const next = fitBridgeFontSize(
        container.clientWidth,
        getComputedStyle(sample),
        BRAND_TEXT.split(""),
        { maxSize: 220, widthRatio: 0.98 },
      );

      fontReadyRef.current = true;
      setFontSize(next);
    };

    const measureTargets = (): LetterTarget[] => {
      const containerRect = container.getBoundingClientRect();
      const spans = measure.querySelectorAll<HTMLElement>("[data-letter]");

      return Array.from(spans).map((span) => {
        const rect = span.getBoundingClientRect();
        return {
          homeX: rect.left - containerRect.left + rect.width / 2,
          homeY: rect.top - containerRect.top + rect.height / 2,
        };
      });
    };

    const syncLetters = () => {
      letters.forEach((letter, index) => {
        const el = letterRefs.current[index];
        if (!el) return;
        el.style.transform = `translate3d(${letter.x}px, ${letter.y}px, 0) rotate(${letter.angle}rad) translate(-50%, -50%)`;
      });
    };

    const waitForLayout = async () => {
      for (let i = 0; i < 24; i++) {
        if (cancelled) return false;
        if (container.clientHeight > 40 && measureTargets().length > 0) return true;
        await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
      }
      return container.clientHeight > 40;
    };

    const startAnimation = async () => {
      if (cancelled || bootedRef.current) return;

      while (!fontReadyRef.current && !cancelled) {
        await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
      }
      if (cancelled || bootedRef.current) return;

      await document.fonts.ready;
      if (!(await waitForLayout()) || cancelled || bootedRef.current) return;

      const targets = measureTargets();
      if (targets.length === 0 || container.clientWidth < 40) return;

      bootedRef.current = true;

      const width = container.clientWidth;
      const containerTop = container.getBoundingClientRect().top;
      const spawnBase = -(containerTop - 12);

      letters = targets.map((target, index) => {
        const floorY = target.homeY + (Math.random() - 0.5) * 10;
        return {
          ...target,
          x: target.homeX + (Math.random() - 0.5) * 22,
          y: spawnBase - Math.random() * 56 - index * 22,
          vx: (Math.random() - 0.5) * 16,
          vy: 120 + Math.random() * 90,
          angle: (Math.random() - 0.5) * 0.14,
          va: (Math.random() - 0.5) * 0.2,
          floorY,
          phase: "falling" as const,
          assembleAt: 0,
          assembleFromX: 0,
          assembleFromY: 0,
          assembleFromAngle: 0,
          fallStartAt: index * FALL_RELEASE_STAGGER_MS,
        };
      });

      setShowLetters(true);
      syncLetters();

      const tick = (now: number) => {
        if (cancelled) return;

        if (animationStart === 0) {
          animationStart = now;
          lastTickAt = now;
        }

        const dt = Math.min(MAX_FRAME_DT, (now - lastTickAt) / 1000);
        lastTickAt = now;

        let animating = false;

        for (let i = 0; i < letters.length; i++) {
          const letter = letters[i];
          if (!letter) continue;

          if (letter.phase === "falling") {
            animating = true;

            if (now - animationStart < letter.fallStartAt) continue;

            letter.vy += GRAVITY_PX_S2 * dt;
            letter.vx *= AIR_DRAG ** (dt * 60);
            letter.vy *= AIR_DRAG ** (dt * 60);
            letter.va *= ANGULAR_DRAG ** (dt * 60);
            letter.x += letter.vx * dt;
            letter.y += letter.vy * dt;
            letter.angle += letter.va * dt;

            if (letter.y >= letter.floorY) {
              letter.y = letter.floorY;
              letter.vy *= -0.16;
              letter.vx *= 0.45;
              letter.va *= 0.4;

              if (Math.abs(letter.vy) < 18 && Math.abs(letter.vx) < 8) {
                letter.vy = 0;
                letter.vx = 0;
                letter.va = 0;
              }
            }

            letter.x = Math.max(12, Math.min(width - 12, letter.x));
            letter.x += (letter.homeX - letter.x) * 1.1 * dt;
          } else if (letter.phase === "waiting") {
            animating = true;
            if (now >= letter.assembleAt) {
              letter.phase = "assembling";
              letter.assembleAt = now;
              letter.assembleFromX = letter.x;
              letter.assembleFromY = letter.y;
              letter.assembleFromAngle = letter.angle;
            }
          } else if (letter.phase === "assembling") {
            animating = true;
            const t = Math.min(1, (now - letter.assembleAt) / ASSEMBLE_MS);
            const eased = easeOutCubic(t);
            letter.x = letter.assembleFromX + (letter.homeX - letter.assembleFromX) * eased;
            letter.y = letter.assembleFromY + (letter.homeY - letter.assembleFromY) * eased;
            letter.angle = letter.assembleFromAngle * (1 - eased);

            if (t >= 1) {
              letter.x = letter.homeX;
              letter.y = letter.homeY;
              letter.angle = 0;
              letter.phase = "done";
            }
          }
        }

        const allSettledOnFloor = letters.every(
          (l) =>
            !l ||
            l.phase !== "falling" ||
            (now - animationStart >= l.fallStartAt &&
              l.y >= l.floorY - 0.5 &&
              Math.abs(l.vy) < 22 &&
              Math.abs(l.vx) < 10 &&
              Math.abs(l.va) < 0.01),
        );

        if (allSettledOnFloor && letters.some((l) => l?.phase === "falling")) {
          if (allLandedAt === 0) allLandedAt = now;

          if (now >= allLandedAt + PAUSE_BEFORE_ASSEMBLE_MS) {
            letters.forEach((letter, index) => {
              if (letter?.phase === "falling") {
                letter.phase = "waiting";
                letter.assembleAt = now + index * ASSEMBLE_STAGGER_MS;
              }
            });
          }
        }

        syncLetters();

        if (animating) {
          rafId = requestAnimationFrame(tick);
        }
      };

      rafId = requestAnimationFrame(tick);
    };

    const tryStart = () => {
      const rect = container.getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < window.innerHeight) void startAnimation();
    };

    void fitFont().then(() => {
      if (!cancelled) tryStart();
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) void startAnimation();
      },
      { threshold: 0 },
    );
    observer.observe(container);

    const resizeObserver = new ResizeObserver(() => {
      if (bootedRef.current) return;
      void fitFont();
    });
    resizeObserver.observe(container);

    return () => {
      cancelled = true;
      observer.disconnect();
      resizeObserver.disconnect();
      cancelAnimationFrame(rafId);
      bootedRef.current = false;
      fontReadyRef.current = false;
      setShowLetters(false);
      setFontSize(null);
    };
  }, [useStaticLayout]);

  const letters = BRAND_TEXT.split("");
  const bandHeight = fontSize ? `${fontSize * 1.55}px` : "clamp(5.5rem, 20vw, 12rem)";

  if (useStaticLayout) {
    return (
      <div className="w-full">
        <FooterBridgeStatic isStacked={isStacked} />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="footer-bridge-arena pointer-events-none relative isolate z-[2] w-full overflow-visible"
      style={{
        fontSize: fontSize ? `${fontSize}px` : undefined,
        height: bandHeight,
      }}
    >
      <h2 className="sr-only">{BRAND_TEXT}</h2>

      <div
        ref={measureRef}
        className={`pointer-events-none absolute bottom-0 left-0 right-0 flex w-full select-none justify-between invisible ${headlineClass}`}
        aria-hidden
      >
        {letters.map((char, index) => (
          <span key={`measure-${index}`} data-letter className="inline-block">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>

      {letters.map((char, index) => (
        <span
          key={`letter-${index}`}
          ref={(el) => {
            letterRefs.current[index] = el;
          }}
          className={`footer-bridge-letter pointer-events-none absolute left-0 top-0 inline-block whitespace-pre will-change-transform ${headlineClass}`}
          style={{
            visibility: showLetters ? "visible" : "hidden",
            transformOrigin: "center center",
          }}
          aria-hidden
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
}
