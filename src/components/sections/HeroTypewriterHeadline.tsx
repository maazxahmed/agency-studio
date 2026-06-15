"use client";

import { useEffect, useState } from "react";

const WORDS = ["GROWTH", "SCALE", "MOMENTUM", "IMPACT", "VELOCITY"] as const;
/** Reserves width so static copy never shifts when words change length. */
const CAROUSEL_WIDTH_WORD = "MOMENTUM.";
const TYPE_MS = 72;
const DELETE_MS = 44;
const PAUSE_TYPED_MS = 1200;
const PAUSE_BLANK_MS = 480;

type Phase = "type" | "delete";

type CarouselWordProps = {
  word: string;
  visible: number;
  showCaret: boolean;
};

function CarouselWord({ word, visible, showCaret }: CarouselWordProps) {
  const typed = word.slice(0, visible);

  return (
    <span className="hero-typewriter-carousel-slot">
      <span className="hero-typewriter-carousel-sizer hero-title-gradient" aria-hidden>
        {CAROUSEL_WIDTH_WORD}
      </span>
      <span className="hero-typewriter-carousel-active hero-title-gradient">
        {typed}
        {showCaret ? (
          <span
            className="inline-block w-[0.45ch] font-light text-[var(--accent-teal)] opacity-90"
            aria-hidden
          >
            |
          </span>
        ) : null}
        {!showCaret && visible === word.length ? "." : ""}
      </span>
    </span>
  );
}

export function HeroTypewriterHeadline({ className }: { className?: string }) {
  const [reducedMotion, setReducedMotion] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false,
  );
  const [wordIdx, setWordIdx] = useState(0);
  const [visible, setVisible] = useState(0);
  const [phase, setPhase] = useState<Phase>("type");

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const word = WORDS[wordIdx];

  useEffect(() => {
    if (reducedMotion) return;

    let delay: number;
    let next: () => void;

    if (phase === "type") {
      if (visible < word.length) {
        delay = TYPE_MS;
        next = () => setVisible((v) => v + 1);
      } else {
        delay = PAUSE_TYPED_MS;
        next = () => setPhase("delete");
      }
    } else {
      if (visible > 0) {
        delay = DELETE_MS;
        next = () => setVisible((v) => v - 1);
      } else {
        delay = PAUSE_BLANK_MS;
        next = () => {
          setWordIdx((i) => (i + 1) % WORDS.length);
          setPhase("type");
        };
      }
    }

    const id = window.setTimeout(next, delay);
    return () => window.clearTimeout(id);
  }, [phase, visible, word, word.length, reducedMotion]);

  const headlineClass = ["hero-typewriter-headline text-balance text-center", className]
    .filter(Boolean)
    .join(" ");

  if (reducedMotion) {
    return (
      <h1 className={headlineClass}>
        <span className="hero-typewriter-line text-white">BUSINESS SOLUTIONS</span>
        <span className="hero-typewriter-power-row">
          <span className="hero-typewriter-line text-white">THAT POWER</span>
          <span className="hero-typewriter-line hero-typewriter-carousel-line">
            <CarouselWord word="GROWTH" visible={5} showCaret={false} />
          </span>
        </span>
      </h1>
    );
  }

  const showCaret = phase === "type" && visible < word.length;

  return (
    <h1
      className={headlineClass}
      aria-label="Business solutions that power growth, with rotating emphasis on scale, momentum, impact, and velocity."
    >
      <span className="hero-typewriter-line text-white">BUSINESS SOLUTIONS</span>
      <span className="hero-typewriter-power-row">
        <span className="hero-typewriter-line text-white">THAT POWER</span>
        <span className="hero-typewriter-line hero-typewriter-carousel-line">
          <CarouselWord word={word} visible={visible} showCaret={showCaret} />
        </span>
      </span>
    </h1>
  );
}
