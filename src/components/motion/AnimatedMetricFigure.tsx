"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

type ParsedMetric = {
  prefix: string;
  value: number;
  suffix: string;
  decimals: number;
};

function parseMetricFigure(figure: string): ParsedMetric {
  const match = figure.match(/^([^\d]*)([\d.]+)(.*)$/);
  if (!match) {
    return { prefix: "", value: 0, suffix: figure, decimals: 0 };
  }
  const [, prefix, numStr, suffix] = match;
  const value = Number.parseFloat(numStr);
  const decimals = numStr.includes(".") ? (numStr.split(".")[1]?.length ?? 0) : 0;
  return {
    prefix,
    value: Number.isFinite(value) ? value : 0,
    suffix,
    decimals,
  };
}

function formatMetricValue(
  value: number,
  { prefix, suffix, decimals }: ParsedMetric,
): string {
  const n =
    decimals > 0
      ? value.toFixed(decimals)
      : String(Math.round(value));
  return `${prefix}${n}${suffix}`;
}

type AnimatedMetricFigureProps = {
  figure: string;
  className?: string;
  style?: React.CSSProperties;
  /** Stagger when multiple metrics enter view together */
  delay?: number;
};

export function AnimatedMetricFigure({
  figure,
  className,
  style,
  delay = 0,
}: AnimatedMetricFigureProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.45, margin: "0px 0px -8% 0px" });
  const prefersReducedMotion = useReducedMotion();
  const parsed = useMemo(() => parseMetricFigure(figure), [figure]);
  const [display, setDisplay] = useState(() =>
    formatMetricValue(0, parsed),
  );

  useEffect(() => {
    if (!isInView) return;

    if (prefersReducedMotion) {
      setDisplay(formatMetricValue(parsed.value, parsed));
      return;
    }

    let controls: ReturnType<typeof animate> | undefined;
    const timeout = window.setTimeout(() => {
      controls = animate(0, parsed.value, {
        duration: 1.65,
        ease: [0.22, 1, 0.36, 1],
        onUpdate: (latest) => {
          setDisplay(formatMetricValue(latest, parsed));
        },
      });
    }, delay);

    return () => {
      window.clearTimeout(timeout);
      controls?.stop();
    };
  }, [isInView, prefersReducedMotion, parsed, delay]);

  return (
    <span ref={ref} className={className} style={style}>
      {display}
    </span>
  );
}
