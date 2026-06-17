"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const STAGGER_S = 0.045;
const COLOR_DURATION = 0.22;
const EASE = [0.22, 1, 0.36, 1] as const;

export function SolutionCardTitle({ text, accent }: { text: string; accent: string }) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [hovered, setHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const chars = [...text];

  useEffect(() => {
    const card = titleRef.current?.closest("a");
    if (!card) return;

    const activate = () => setHovered(true);
    const deactivate = () => setHovered(false);

    card.addEventListener("mouseenter", activate);
    card.addEventListener("mouseleave", deactivate);
    card.addEventListener("focus", activate);
    card.addEventListener("blur", deactivate);

    return () => {
      card.removeEventListener("mouseenter", activate);
      card.removeEventListener("mouseleave", deactivate);
      card.removeEventListener("focus", activate);
      card.removeEventListener("blur", deactivate);
    };
  }, []);

  const activeColor = accent;
  const restColor = "rgb(255, 255, 255)";

  return (
    <h3 ref={titleRef} className="solution-card-title">
      {chars.map((char, index) => {
        const delay = prefersReducedMotion
          ? 0
          : hovered
            ? index * STAGGER_S
            : (chars.length - 1 - index) * STAGGER_S;

        return (
          <motion.span
            key={`${char}-${index}`}
            className="solution-card-title-char inline-block"
            animate={{ color: hovered ? activeColor : restColor }}
            transition={{
              duration: prefersReducedMotion ? 0.12 : COLOR_DURATION,
              delay,
              ease: EASE,
            }}
            aria-hidden
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        );
      })}
      <span className="sr-only">{text}</span>
    </h3>
  );
}
