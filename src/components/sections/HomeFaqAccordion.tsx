"use client";

import { useId, useState } from "react";

const faqs = [
  {
    question: "Do you handle both strategy and execution?",
    answer:
      "Yes. We align roadmap, technical design, and delivery in one operating model so strategy does not stall at the slide deck—your team gets working systems, not another PDF.",
  },
  {
    question: "Can you support complex backend integrations?",
    answer:
      "Yes. Legacy APIs, auth flows, data sync, and performance constraints are normal for us. We document contracts, harden error paths, and ship integrations your engineers can own.",
  },
  {
    question: "How do you approach AI automation for legacy systems?",
    answer:
      "We start with an audit and clear guardrails, then add automation where risk is controlled—humans stay in the loop for judgment, and we instrument everything so you can tune or roll back safely.",
  },
  {
    question: "Do you work with internal product teams?",
    answer:
      "Yes. We embed with your engineers and PMs, share repos and rituals, and transfer ownership so your team can run, extend, and monitor what we ship long after the engagement.",
  },
] as const;

export function HomeFaqAccordion() {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-section">
      <div className="container-site max-w-[min(100%,85rem)]">
        <p className="mono-label mb-2 text-center text-[var(--color-secondary)]">FAQ</p>
        <h2 className="headline-title mt-2 text-center">CLARITY</h2>
        <div className="mx-auto mt-12 w-full space-y-0 md:mt-14">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `${baseId}-panel-${index}`;
            const buttonId = `${baseId}-button-${index}`;
            return (
              <div key={item.question} className="border-b border-white/10 last:border-b-0">
                <h3 className="text-base font-semibold md:text-lg">
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(index)}
                    className="flex w-full items-start justify-between gap-4 py-5 text-left text-xl leading-snug text-[var(--color-text)] transition hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] md:py-6 md:text-2xl"
                  >
                    <span className="min-w-0 flex-1 text-pretty">{item.question}</span>
                    <span
                      className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-lg text-[var(--color-primary)] transition duration-300 md:h-10 md:w-10 ${
                        isOpen ? "rotate-45 border-[var(--color-primary)]/40 bg-[var(--color-primary)]/10" : ""
                      }`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none motion-reduce:duration-0 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden" aria-hidden={!isOpen}>
                    <p className="pb-5 pr-4 text-base leading-relaxed text-[var(--color-text-muted)] sm:pr-10 md:pb-6 md:pr-14 md:text-lg md:leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
