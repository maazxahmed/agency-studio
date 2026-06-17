"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const whyColumnBridgeCards = [
  {
    title: "Comprehensive Expertise",
    description:
      "Technology, operations, finance, workforce management, and growth solutions delivered through one trusted partner.",
    tags: ["TECHNOLOGY", "OPERATIONS", "FINANCE", "GROWTH"],
    image: "/infrastructure-element-new.png",
  },
  {
    title: "Business-First Approach",
    description: "We focus on solving business challenges and delivering measurable outcomes.",
    tags: ["OUTCOMES", "STRATEGY", "EXECUTION", "MEASUREMENT"],
    image: "/revenue-element-new.png",
  },
  {
    title: "Scalable Solutions",
    description: "Our solutions are designed to grow alongside your organization.",
    tags: ["STARTUPS", "ENTERPRISE", "CLOUD", "INTEGRATIONS"],
    image: "/experience-element-new.png",
  },
  {
    title: "Global Reach",
    description: "Supporting businesses across industries and international markets.",
    tags: ["INDUSTRIES", "INTERNATIONAL", "MULTI-MARKET", "LOCAL TEAMS"],
    image: "/automation-element-new.png",
  },
  {
    title: "Long-Term Partnerships",
    description:
      "Focused on continuous improvement, operational excellence, and sustainable growth.",
    tags: ["IMPROVEMENT", "EXCELLENCE", "SUSTAINABILITY", "SUPPORT"],
    image: "/infrastructure-element-new.png",
  },
] as const;

const MD_BREAKPOINT = 768;

function getActiveCardIndex(progress: number, total: number) {
  const step = 1 / total;
  const last = total - 1;
  if (progress >= 1) return last;
  return Math.min(Math.floor(progress / step), last);
}

function enterEase(t: number) {
  return 1 - Math.pow(1 - Math.min(Math.max(t, 0), 1), 3);
}

function WhyBridgeCardFace({
  card,
  index,
  total,
}: {
  card: (typeof whyColumnBridgeCards)[number];
  index: number;
  total: number;
}) {
  const counter = `${String(index + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;

  return (
    <>
      <div className="why-bridge-card-visual relative min-h-[14rem] overflow-hidden border-b border-white/[0.08] md:min-h-0 md:border-b-0 md:border-r">
        <div className="why-bridge-card-visual-grain pointer-events-none absolute inset-0 z-[1]" aria-hidden />
        <div className="relative flex h-full min-h-[14rem] items-center justify-center p-6 md:min-h-[22rem] md:p-10">
          <div className="relative aspect-square w-full max-w-[min(100%,18rem)] md:max-w-[min(100%,20rem)]">
            <Image
              src={card.image}
              alt=""
              fill
              unoptimized
              sizes="(max-width: 768px) 80vw, 40vw"
              className="object-contain object-center select-none"
            />
          </div>
        </div>
      </div>
      <div className="flex min-h-0 flex-col justify-between gap-8 p-6 md:p-10 lg:p-12">
        <div>
          <p className="mono-label text-[var(--color-secondary)]">{counter}</p>
          <h3 className="why-bridge-card-title mt-4">{card.title}</h3>
          <p className="why-bridge-card-description mt-4">{card.description}</p>
        </div>
        <ul className="why-bridge-card-tags">
          {card.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

function WhyBridgeStackCard({
  card,
  index,
  total,
  scrollYProgress,
}: {
  card: (typeof whyColumnBridgeCards)[number];
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const step = 1 / total;

  const zIndex = useTransform(scrollYProgress, (v) => {
    const active = getActiveCardIndex(v, total);
    if (index === active) return total + 2;
    if (index < active) return index + 1;
    return 0;
  });

  const visibility = useTransform(scrollYProgress, (v) => {
    const enter = index * step;
    if (index === 0 && v < step) return "visible";
    if (v < enter) return "hidden";
    return "visible";
  });

  const y = useTransform(scrollYProgress, (v) => {
    const active = getActiveCardIndex(v, total);
    const enter = index * step;

    if (index === 0 && v < step) return "0%";
    if (index > active) return "108%";

    if (index === active && index > 0 && v < enter + step) {
      const local = (v - enter) / step;
      return `${(1 - enterEase(local)) * 108}%`;
    }

    if (index < active) {
      return `${-18 * (active - index)}px`;
    }

    return "0%";
  });

  return (
    <motion.article
      style={{ y, zIndex, visibility }}
      className="why-bridge-card absolute inset-x-0 top-0 grid w-full grid-cols-1 md:grid-cols-2"
      aria-hidden={false}
    >
      <WhyBridgeCardFace card={card} index={index} total={total} />
    </motion.article>
  );
}

function WhyBridgeStaticList() {
  const total = whyColumnBridgeCards.length;

  return (
    <div className="container-site mt-14 flex flex-col gap-5 md:mt-20">
      {whyColumnBridgeCards.map((card, index) => (
        <article
          key={card.title}
          className="why-bridge-card grid grid-cols-1 md:grid-cols-2"
        >
          <WhyBridgeCardFace card={card} index={index} total={total} />
        </article>
      ))}
    </div>
  );
}

function WhyBridgeScrollStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const total = whyColumnBridgeCards.length;
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: `${total * 88}vh` }}
    >
      <p className="sr-only">
        Scroll to move through reasons to partner with Column Bridge.
      </p>
      <div className="sticky top-0 flex min-h-[100dvh] items-center overflow-hidden py-10 md:py-14">
        <div className="container-site relative w-full min-h-[min(32rem,70dvh)]">
          {whyColumnBridgeCards.map((card, index) => (
            <WhyBridgeStackCard
              key={card.title}
              card={card}
              index={index}
              total={total}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

type WhyColumnBridgeStackProps = {
  sectionAccentClass: string;
};

export function WhyColumnBridgeStack({ sectionAccentClass }: WhyColumnBridgeStackProps) {
  const prefersReducedMotion = useReducedMotion();
  const [desktopStack, setDesktopStack] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${MD_BREAKPOINT}px)`);
    const sync = () => setDesktopStack(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const useStack = desktopStack && !prefersReducedMotion;

  return (
    <section className="relative isolate overflow-x-clip bg-black py-section text-[var(--color-text)]">
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <div
          className="absolute inset-0 opacity-[0.28] mix-blend-screen"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 22% 42%, rgba(15,237,198,0.18), transparent 58%), radial-gradient(ellipse 55% 45% at 88% 68%, rgba(3,181,167,0.12), transparent 52%)",
          }}
        />
      </div>

      <div className="container-site relative z-10">
        <div className="section-heading-wrap">
          <p className="mono-label text-[var(--color-secondary)]">Why Column Bridge</p>
          <h2 className="mt-2 text-balance headline-title text-[var(--color-text)]">
            WHY{" "}
            <span className={sectionAccentClass}>COLUMN BRIDGE</span>
          </h2>
        </div>
      </div>

      <div className="relative z-10 mt-14 md:mt-20">
        {useStack ? <WhyBridgeScrollStack /> : <WhyBridgeStaticList />}
      </div>
    </section>
  );
}
