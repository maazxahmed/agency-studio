"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/** Horizontal scroll speed in pixels per second — raise to move faster. */
const MARQUEE_PIXELS_PER_SECOND = 110;

type TechMarqueeProps = {
  logos: readonly string[];
};

export function TechMarquee({ logos }: TechMarqueeProps) {
  const stripRef = useRef<HTMLDivElement>(null);
  const [marqueeStyle, setMarqueeStyle] = useState<React.CSSProperties>({
    ["--marquee-duration" as string]: "40s",
    ["--marquee-distance" as string]: "-50%",
  });

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;

    const sync = () => {
      const stripWidth = strip.offsetWidth;
      if (stripWidth <= 0) return;
      const durationSec = stripWidth / MARQUEE_PIXELS_PER_SECOND;
      setMarqueeStyle({
        ["--marquee-duration" as string]: `${durationSec}s`,
        ["--marquee-distance" as string]: `${-stripWidth}px`,
      });
    };

    sync();

    const ro = new ResizeObserver(sync);
    ro.observe(strip);

    window.addEventListener("load", sync);
    strip.querySelectorAll("img").forEach((img) => {
      if (!img.complete) img.addEventListener("load", sync, { once: true });
    });

    return () => {
      ro.disconnect();
      window.removeEventListener("load", sync);
    };
  }, [logos]);

  const logoCell = (src: string, key: string) => (
    <div
      key={key}
      className="relative flex shrink-0 items-center justify-center transition-transform duration-300 ease-out will-change-transform hover:-translate-y-2.5"
    >
      <Image
        src={src}
        alt=""
        width={320}
        height={320}
        className="h-20 w-auto object-contain opacity-85 select-none sm:h-28 md:h-44 lg:h-52"
        draggable={false}
        sizes="(max-width: 640px) 112px, (max-width: 1024px) 144px, 208px"
      />
    </div>
  );

  return (
    <div
      className="relative mt-10 w-full overflow-hidden md:left-1/2 md:w-[100vw] md:max-w-[100vw] md:-translate-x-1/2"
      aria-label="Technology stack logos"
    >
      <div className="tech-marquee-track" style={marqueeStyle}>
        <div ref={stripRef} className="tech-marquee-strip">
          {logos.map((src) => logoCell(src, `marquee-a-${src}`))}
        </div>
        <div className="tech-marquee-strip" aria-hidden>
          {logos.map((src) => logoCell(src, `marquee-b-${src}`))}
        </div>
      </div>
    </div>
  );
}
