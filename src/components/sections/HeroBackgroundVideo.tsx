"use client";

import { useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const revision = process.env.NEXT_PUBLIC_HERO_ELEMENT_REVISION;
const cacheQuery = revision ? `?v=${encodeURIComponent(revision)}` : "";

const heroVideoWebm = `/hero-video.webm${cacheQuery}`;
const heroVideoMov = `/hero-video.mov${cacheQuery}`;
const heroFallbackPng = revision
  ? `/hero-element.png?v=${encodeURIComponent(revision)}`
  : "/hero-element.png";

export function HeroBackgroundVideo({ className }: { className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || useFallback || prefersReducedMotion) return;

    const play = () => {
      void video.play().catch(() => setUseFallback(true));
    };

    const onError = () => setUseFallback(true);

    play();
    video.addEventListener("loadeddata", play);
    video.addEventListener("error", onError);
    return () => {
      video.removeEventListener("loadeddata", play);
      video.removeEventListener("error", onError);
    };
  }, [prefersReducedMotion, useFallback]);

  if (useFallback || prefersReducedMotion) {
    return (
      <Image
        src={heroFallbackPng}
        alt=""
        width={1600}
        height={1200}
        unoptimized
        className={`${className ?? ""} opacity-[0.36] sm:opacity-[0.4]`}
      />
    );
  }

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      aria-hidden
    >
      <source src={heroVideoWebm} type="video/webm" />
      <source src={heroVideoMov} type='video/quicktime; codecs="ap4h"' />
    </video>
  );
}
