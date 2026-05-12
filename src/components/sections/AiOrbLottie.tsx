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
      className="relative mx-auto aspect-square w-[75%] max-w-[75%]"
      role="img"
      aria-label="AI systems visualization"
    >
      <DotLottieReact
        src="/ai-orb.lottie"
        loop
        autoplay
        renderConfig={renderConfig}
        className="block h-full w-full"
      />
    </div>
  );
}
