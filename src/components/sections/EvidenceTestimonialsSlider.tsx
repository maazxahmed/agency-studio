"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const TESTIMONIALS = [
  {
    quote:
      "They didn't just redesign our interface; they re-architected how we acquire and convert enterprise leads.",
    author: "CTO, Global SaaS Platform",
    accent: "text-[var(--color-secondary)]",
  },
  {
    quote:
      "The aesthetic is wild, but the infrastructure underneath impressed our engineering team.",
    author: "Founder, Boutique Ecommerce",
    accent: "text-[var(--color-tertiary)]",
  },
  {
    quote:
      "Column Bridge connected our operations, finance, and customer data into one system—we finally operate from a single source of truth.",
    author: "Director of Operations, Logistics Company",
    accent: "text-[#0FEDC6]",
  },
  {
    quote:
      "Their team delivered ERP, automation, and support under one partner—scaling our business without adding internal complexity.",
    author: "Managing Director, Retail & E-Commerce",
    accent: "text-[#5EEAD4]",
  },
] as const;

const MD_BREAKPOINT = 768;

function StarRating() {
  return (
    <div className="flex gap-1" role="img" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          viewBox="0 0 20 20"
          className="h-4 w-4 shrink-0 text-[#0FEDC6] sm:h-[1.125rem] sm:w-[1.125rem]"
          aria-hidden
        >
          <path
            fill="currentColor"
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"
          />
        </svg>
      ))}
    </div>
  );
}

function ArrowIcon({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      {direction === "prev" ? (
        <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}

export function EvidenceTestimonialsSlider() {
  const prefersReducedMotion = useReducedMotion();
  const [perView, setPerView] = useState(1);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${MD_BREAKPOINT}px)`);
    const sync = () => {
      const nextPerView = mq.matches ? 2 : 1;
      setPerView(nextPerView);
      setSlide((current) => {
        const nextSlideCount = Math.ceil(TESTIMONIALS.length / nextPerView);
        return Math.min(current, Math.max(0, nextSlideCount - 1));
      });
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const slideCount = Math.ceil(TESTIMONIALS.length / perView);
  const visible = TESTIMONIALS.slice(slide * perView, slide * perView + perView);

  const goPrev = () => setSlide((current) => (current <= 0 ? slideCount - 1 : current - 1));
  const goNext = () => setSlide((current) => (current >= slideCount - 1 ? 0 : current + 1));

  return (
    <div className="evidence-slider">
      <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
        <button
          type="button"
          onClick={goPrev}
          className="evidence-slider-arrow shrink-0"
          aria-label="Previous testimonial"
        >
          <ArrowIcon direction="prev" />
        </button>

        <div className="min-w-0 flex-1 overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`${slide}-${perView}`}
              initial={prefersReducedMotion ? false : { opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, x: -28 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className={`grid gap-10 sm:gap-12 ${
                  perView === 2 ? "md:grid-cols-2 md:gap-16" : "grid-cols-1"
                }`}
              >
                {visible.map((item, index) => (
                  <blockquote
                    key={item.author}
                    className={`min-w-0 text-xl leading-tight sm:text-2xl md:text-4xl ${
                      perView === 2 && index === 1 ? "md:mt-20" : ""
                    }`}
                  >
                    <StarRating />
                    <p className="mt-4 text-pretty sm:mt-5">&ldquo;{item.quote}&rdquo;</p>
                    <footer className={`mono-label mt-4 sm:mt-5 ${item.accent}`}>{item.author}</footer>
                  </blockquote>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          type="button"
          onClick={goNext}
          className="evidence-slider-arrow shrink-0"
          aria-label="Next testimonial"
        >
          <ArrowIcon direction="next" />
        </button>
      </div>

      <p className="mono-label mt-6 text-center text-[0.65rem] tracking-[0.16em] text-white/35 sm:mt-8">
        {String(slide + 1).padStart(2, "0")} / {String(slideCount).padStart(2, "0")}
      </p>
    </div>
  );
}
