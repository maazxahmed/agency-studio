"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export function AiOrbLottie() {
  const dpr =
    typeof window !== "undefined" ? Math.min(2.75, Math.max(2, window.devicePixelRatio * 1.25)) : 2;

  const renderConfig = {
    autoResize: true,
    quality: 100,
    devicePixelRatio: dpr,
  } as const;

  return (
    <div
      className="hero-element-motion relative mx-auto aspect-square w-full max-w-[28rem]"
      role="img"
      aria-label="AI systems visualization"
    >
      <div className="orb-glow absolute inset-[22%] rounded-full bg-[radial-gradient(circle,var(--accent-purple)_0%,transparent_70%)]" />
      <DotLottieReact
        src="/ai-orb.lottie"
        loop
        autoplay
        renderConfig={renderConfig}
        className="relative z-10 block h-full w-full opacity-90"
      />
    </div>
  );
}
