"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const STEPS = [
  {
    num: "01",
    title: "Discover",
    desc: "We assess your business goals, challenges, systems, and opportunities.",
    accent: "#03B5A7",
  },
  {
    num: "02",
    title: "Strategize",
    desc: "We create a tailored roadmap aligned with your objectives.",
    accent: "#0FEDC6",
  },
  {
    num: "03",
    title: "Implement",
    desc: "Our specialists design, build, integrate, and deploy solutions.",
    accent: "#5EEAD4",
  },
  {
    num: "04",
    title: "Optimize",
    desc: "We continuously improve performance and operational efficiency.",
    accent: "#7AF8E8",
  },
  {
    num: "05",
    title: "Scale",
    desc: "We support long-term growth through technology, automation, outsourcing, and strategic guidance.",
    accent: "#023E3E",
  },
] as const;

const STEP_REVEAL_MS = 520;

export function HowWeWorkSteps() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.25, margin: "0px 0px -10% 0px" });
  const prefersReducedMotion = useReducedMotion();
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    if (prefersReducedMotion) {
      setVisibleCount(STEPS.length);
      return;
    }

    setVisibleCount(0);
    const timeouts = STEPS.map((_, index) =>
      window.setTimeout(() => setVisibleCount(index + 1), 180 + index * STEP_REVEAL_MS),
    );

    return () => {
      timeouts.forEach((id) => window.clearTimeout(id));
    };
  }, [isInView, prefersReducedMotion]);

  return (
    <div
      ref={ref}
      className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-10 lg:grid-cols-5 lg:gap-8"
    >
      {STEPS.map((phase, index) => {
        const isVisible = index < visibleCount;
        const stagger = index % 2 === 0 ? "max-lg:translate-y-0 lg:-translate-y-7" : "max-lg:translate-y-0 lg:translate-y-7";

        return (
          <motion.article
            key={phase.title}
            className={`relative text-center ${stagger}`}
            initial={false}
            animate={
              isVisible
                ? { opacity: 1, y: 0, filter: "blur(0px)" }
                : { opacity: 0, y: 28, filter: "blur(6px)" }
            }
            transition={{
              duration: prefersReducedMotion ? 0 : 0.65,
              ease: [0.16, 1, 0.3, 1],
            }}
            aria-hidden={!isVisible}
          >
            <span
              className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 text-6xl font-black tabular-nums transition-opacity duration-500 md:-top-10 md:text-8xl"
              style={{ color: phase.accent, opacity: isVisible ? 0.14 : 0 }}
              aria-hidden
            >
              {phase.num}
            </span>
            <h3
              className="relative text-xs font-bold uppercase leading-tight tracking-[0.2em] md:text-[0.8125rem]"
              style={{ color: phase.accent, fontFamily: "var(--font-geist-mono), monospace" }}
            >
              {phase.title}
            </h3>
            <p className="mt-6 text-sm text-[var(--color-text-muted)] md:mt-7">{phase.desc}</p>
          </motion.article>
        );
      })}
    </div>
  );
}
