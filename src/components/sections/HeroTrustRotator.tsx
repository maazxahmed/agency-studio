"use client";

import { useEffect, useState } from "react";

export type HeroTrustStat = {
  figure: string;
  caption: string;
};

type HeroTrustRotatorProps = {
  stats: HeroTrustStat[];
  intervalMs?: number;
};

export function HeroTrustRotator({ stats, intervalMs = 4200 }: HeroTrustRotatorProps) {
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false,
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reducedMotion || stats.length < 2) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % stats.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [reducedMotion, stats.length, intervalMs]);

  const item = stats[reducedMotion ? 0 : index] ?? stats[0];

  return (
    <div className="max-w-[min(100%,15rem)] md:max-w-[16rem]" aria-live="polite" aria-atomic="true">
      <p
        key={item.figure + item.caption}
        className="hero-trust-rotator-item accent-word font-black tabular-nums tracking-tight text-[clamp(2.25rem,6vw,3.75rem)] leading-none"
      >
        {item.figure}
      </p>
      <p className="mono-label mt-3 text-left text-white/70">{item.caption}</p>
    </div>
  );
}
