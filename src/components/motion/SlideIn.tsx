"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export type SlideDirection = "up" | "down" | "left" | "right";

/** Cycle for alternating section entrances: up → right → down → left. */
export const SLIDE_DIRECTION_CYCLE: SlideDirection[] = ["up", "right", "down", "left"];

export function slideDirectionAt(index: number): SlideDirection {
  return SLIDE_DIRECTION_CYCLE[index % SLIDE_DIRECTION_CYCLE.length]!;
}

function isHorizontal(direction: SlideDirection) {
  return direction === "left" || direction === "right";
}

function offset(direction: SlideDirection, distance: number) {
  const map: Record<SlideDirection, { x: number; y: number }> = {
    up: { x: 0, y: distance },
    down: { x: 0, y: -distance },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
  };
  return map[direction];
}

/** Slight overshoot-free deceleration — reads as a deliberate slide, not a fade pop. */
const SLIDE_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

type SlideInProps = {
  children: ReactNode;
  className?: string;
  direction?: SlideDirection;
  /** Travel in px; omit for direction-aware defaults (taller on horizontal). */
  distance?: number;
  delay?: number;
  duration?: number;
  once?: boolean;
  /** Portion of element visible before triggering */
  amount?: number | "some" | "all";
};

export function SlideIn({
  children,
  className,
  direction = "up",
  distance: distanceProp,
  delay = 0,
  duration: durationProp,
  once = true,
  amount = 0.12,
}: SlideInProps) {
  const prefersReducedMotion = useReducedMotion();
  const distance =
    distanceProp ?? (isHorizontal(direction) ? 220 : 140);
  const duration = durationProp ?? (isHorizontal(direction) ? 1.35 : 1.22);
  const from = offset(direction, distance);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  /* Transform-only: animating parent opacity breaks descendant backdrop-filter until opacity hits 1. */
  return (
    <motion.div
      className={className}
      initial={{ x: from.x, y: from.y }}
      whileInView={{ x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: SLIDE_EASE,
      }}
    >
      {children}
    </motion.div>
  );
}
