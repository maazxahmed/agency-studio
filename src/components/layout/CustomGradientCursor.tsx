"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Fine-pointer only: tiny brand-gradient dot follows the pointer.
 * Disabled when `prefers-reduced-motion: reduce` so the system cursor stays available.
 */
export function CustomGradientCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    const enabled = () => fine.matches && !reduce.matches;

    const onMove = (e: MouseEvent) => {
      const el = dotRef.current;
      if (!el) return;
      el.style.opacity = "1";
      el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
    };

    const hide = () => {
      if (dotRef.current) dotRef.current.style.opacity = "0";
    };

    const unbind = () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("blur", hide);
      document.removeEventListener("mouseleave", hide);
    };

    const bind = () => {
      unbind();
      if (enabled()) {
        setActive(true);
        document.documentElement.classList.add("custom-cursor-active");
        window.addEventListener("mousemove", onMove, { passive: true });
        window.addEventListener("blur", hide);
        document.addEventListener("mouseleave", hide);
      } else {
        setActive(false);
        document.documentElement.classList.remove("custom-cursor-active");
      }
    };

    bind();
    fine.addEventListener("change", bind);
    reduce.addEventListener("change", bind);

    return () => {
      fine.removeEventListener("change", bind);
      reduce.removeEventListener("change", bind);
      unbind();
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, []);

  if (!active) return null;

  return (
    <div
      ref={dotRef}
      aria-hidden
      className="custom-gradient-cursor pointer-events-none fixed left-0 top-0 z-[200] h-[var(--cursor-dot-size)] w-[var(--cursor-dot-size)] rounded-full opacity-0 will-change-transform"
    />
  );
}
