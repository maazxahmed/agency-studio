"use client";

import { useEffect, useState } from "react";

const WORDS = ["BUILD", "ARE"] as const;
const TYPE_MS = 72;
const DELETE_MS = 44;
const PAUSE_TYPED_MS = 1200;
const PAUSE_BLANK_MS = 480;

type Phase = "type" | "delete";

export function HeroTypewriterHeadline({ className }: { className?: string }) {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [wordIdx, setWordIdx] = useState(0);
  const [visible, setVisible] = useState(0);
  const [phase, setPhase] = useState<Phase>("type");

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
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

  if (reducedMotion) {
    return (
      <h1 className={className}>
        <span className="block whitespace-nowrap">WE BUILD</span>
        <span className="block">THE FUTURE.</span>
      </h1>
    );
  }

  const mid = word.slice(0, visible);
  const showCaret = phase === "type" && visible < word.length;

  return (
    <h1
      className={className}
      aria-label="We build the future, alternating with we are the future."
    >
      <span className="block whitespace-nowrap">
        WE {mid}
        <span className={`inline-block w-[0.45ch] font-light transition-opacity duration-150 ${showCaret ? "opacity-90" : "opacity-0"}`} aria-hidden>
          |
        </span>
      </span>
      <span className="block">THE FUTURE.</span>
    </h1>
  );
}
