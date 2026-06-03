import Link from "next/link";
import { SlideIn } from "@/components/motion/SlideIn";
import { SiteLogo } from "@/components/layout/SiteLogo";

const footerQuickLinks = [
  { label: "Privacy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms-and-conditions" },
  { label: "Careers", href: "#" },
  { label: "Press", href: "#" },
] as const;

export function Footer() {
  return (
    <footer className="relative z-10 overflow-hidden bg-black pt-section pb-[calc(5.75rem+env(safe-area-inset-bottom,0px))] md:pb-[var(--section-spacing)]">
      <div
        className="pointer-events-none absolute -bottom-24 left-1/2 h-[min(18rem,50vw)] w-[min(100%,28rem)] max-w-[90vw] -translate-x-1/2 rounded-full bg-[var(--color-primary)]/20 blur-[100px] sm:-bottom-20 sm:h-72 sm:w-[min(100%,36rem)] md:left-1/3 md:h-72 md:w-2/3 md:translate-x-0"
        aria-hidden
      />
      <SlideIn className="w-full min-w-0" direction="up">
        <div className="container-site grid w-full min-w-0 grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-14 xl:gap-20">
          <div className="min-w-0 max-w-full overflow-x-clip lg:pr-4">
            <h2 className="w-full max-w-full text-balance font-[family-name:var(--font-display)] text-[clamp(2.75rem,min(10vw,11dvh),7rem)] font-bold uppercase leading-[0.9] tracking-[0.01em] text-[var(--color-primary)] opacity-90">
              READY TO
              <br />
              <span className="whitespace-nowrap">DISRUPT?</span>
            </h2>
          </div>
          <nav
            className="relative z-10 flex w-full min-w-0 flex-col gap-1 sm:gap-2 lg:w-auto lg:justify-self-end lg:items-end lg:gap-1 lg:text-right"
            aria-label="Footer"
          >
            {footerQuickLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block w-full font-[family-name:var(--font-display)] text-2xl font-bold uppercase leading-none tracking-[0.01em] text-[var(--color-text-muted)] transition-colors duration-200 hover:text-[var(--color-secondary)] max-md:text-xl md:headline-title lg:ml-auto lg:w-max lg:max-w-none lg:whitespace-nowrap lg:text-right lg:hover:-translate-x-1"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </SlideIn>
      <SlideIn className="w-full" direction="left" delay={0.06}>
        <div className="container-site border-t border-white/[0.06] pt-8 md:pt-10">
          <div className="flex w-full min-w-0 flex-col gap-6 text-left sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <div className="flex min-w-0 flex-col gap-2">
              <SiteLogo variant="footer" />
              <span className="max-w-prose text-[0.65rem] uppercase leading-relaxed tracking-[0.14em] text-[var(--color-text-muted)] sm:text-xs">
                ©2026 Column Bridge — Boldly Digital
              </span>
            </div>
            <span className="shrink-0 text-[0.65rem] uppercase tracking-[0.14em] text-[var(--color-secondary)] sm:text-xs">
              Sys.Stat: Online
            </span>
          </div>
        </div>
      </SlideIn>
    </footer>
  );
}
