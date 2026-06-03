"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

const MD_BREAKPOINT = 768;

const trackClass =
  "grid w-max grid-flow-col auto-cols-max items-stretch gap-4 pb-4 md:gap-6";

const viewportClass =
  "case-studies-rail-viewport w-full min-w-0 max-w-full snap-x snap-mandatory overflow-x-auto overflow-y-visible overscroll-x-contain scroll-smooth touch-pan-x [-webkit-overflow-scrolling:touch] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden";

type CaseStudiesScrollRailProps = {
  children: ReactNode;
  className?: string;
};

function CaseStudiesOverflowRail({
  children,
  className,
}: CaseStudiesScrollRailProps) {
  return (
    <div
      className={[className, "w-full min-w-0 max-w-full"]
        .filter(Boolean)
        .join(" ")}
    >
      <div
        className={viewportClass}
        role="region"
        aria-label="Case studies"
      >
        <div className={trackClass}>{children}</div>
      </div>
    </div>
  );
}

/** Only mount when scroll-linked mode is active so `useScroll` always has a hydrated target ref. */
function CaseStudiesPinnedRail({
  children,
  className,
}: CaseStudiesScrollRailProps) {
  const pinRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [maxX, setMaxX] = useState(0);

  useLayoutEffect(() => {
    const track = trackRef.current;
    const view = viewportRef.current;
    if (!track || !view) return;

    const measure = () => {
      const w = Math.max(0, Math.round(track.scrollWidth - view.clientWidth));
      setMaxX(w);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    ro.observe(view);
    return () => ro.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: pinRef,
    offset: ["start start", "end end"],
  });

  const xTarget = useTransform(scrollYProgress, [0, 1], [0, -maxX]);
  /** Ease scroll-linked motion so the rail doesn’t feel mechanically locked to the wheel. */
  const x = useSpring(xTarget, {
    stiffness: 200,
    damping: 38,
    mass: 0.12,
    restDelta: 0.5,
    restSpeed: 0.5,
  });

  return (
    <div className={[className, "w-full min-w-0 overflow-x-clip"].filter(Boolean).join(" ")}>
      <p className="sr-only">
        Scroll down to move through case studies horizontally.
      </p>
      <div
        ref={pinRef}
        className="relative"
        style={{ height: `calc(100dvh + ${Math.max(0, maxX)}px)` }}
      >
        <div
          ref={viewportRef}
          className="sticky top-0 flex min-h-[100dvh] items-center overflow-hidden py-8 md:py-10"
        >
          <motion.div
            ref={trackRef}
            style={{ x }}
            className={`${trackClass} will-change-transform`}
            role="region"
            aria-label="Case studies"
          >
            {children}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export function CaseStudiesScrollRail({
  children,
  className,
}: CaseStudiesScrollRailProps) {
  const prefersReducedMotion = useReducedMotion();
  const [desktopPin, setDesktopPin] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${MD_BREAKPOINT}px)`);
    const sync = () => setDesktopPin(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const scrollLinked = desktopPin && !prefersReducedMotion;

  if (!scrollLinked) {
    return (
      <CaseStudiesOverflowRail className={className}>
        {children}
      </CaseStudiesOverflowRail>
    );
  }

  return (
    <CaseStudiesPinnedRail className={className}>{children}</CaseStudiesPinnedRail>
  );
}
