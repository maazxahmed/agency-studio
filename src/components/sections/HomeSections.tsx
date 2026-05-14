import Image from "next/image";
import { SlideIn } from "@/components/motion/SlideIn";
import { AiOrbLottie } from "@/components/sections/AiOrbLottie";
import { CaseStudiesScrollRail } from "@/components/sections/CaseStudiesScrollRail";
import { HomeFaqAccordion } from "@/components/sections/HomeFaqAccordion";
import { HeroTrustRotator } from "@/components/sections/HeroTrustRotator";
import { HeroTypewriterHeadline } from "@/components/sections/HeroTypewriterHeadline";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

type ProblemIconName = "chart" | "gear" | "people" | "shield";

function ProblemIcon({ name, className }: { name: ProblemIconName; className?: string }) {
  const stroke = className ?? "currentColor";
  const common = { fill: "none" as const, stroke, strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "chart":
      return (
        <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden {...common}>
          <path d="M4 19V5M4 19h16M8 17V11M12 17V9M16 17v-6" />
        </svg>
      );
    case "gear":
      return (
        <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden {...common}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
        </svg>
      );
    case "people":
      return (
        <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden {...common}>
          <circle cx="9" cy="8" r="2.5" />
          <circle cx="16" cy="9" r="2" />
          <path d="M3 20c0-3 3-5 6-5s6 2 6 5M11 20c.5-2.5 3-4 5-4 2 0 4.5 1.5 5 4" />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden {...common}>
          <path d="M12 3l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V7l8-4z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    default:
      return null;
  }
}

type BusinessImpactIconName = "trending-up" | "zap" | "settings" | "layers";

function BusinessImpactIcon({ name, className }: { name: BusinessImpactIconName; className?: string }) {
  const stroke = "currentColor";
  const common = { fill: "none" as const, stroke, strokeWidth: 1.65, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const cls = className ?? "h-6 w-6";
  switch (name) {
    case "trending-up":
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden {...common}>
          <path d="M22 7l-8.5 8.5-5-5L2 17" />
          <path d="M16 7h6v6" />
        </svg>
      );
    case "zap":
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden {...common}>
          <path d="M13 2L4 14h7l-1 8 9-11h-6l3-9z" />
        </svg>
      );
    case "settings":
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden {...common}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      );
    case "layers":
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden {...common}>
          <path d="m12.83 2.18-.82-.36-.82.36-7.93 3.6a1 1 0 0 0 0 1.83l7.93 3.6a2 2 0 0 0 1.64 0l7.93-3.6a1 1 0 0 0 0-1.83l-7.93-3.6Z" />
          <path d="M2 12.08 12 16.63l10-4.55" />
          <path d="M2 17 12 21.55 22 17" />
        </svg>
      );
    default:
      return null;
  }
}

type AutomateListIconName = "routing" | "workflow" | "support";

function AutomateListIcon({ name, className }: { name: AutomateListIconName; className?: string }) {
  const stroke = "currentColor";
  const common = { fill: "none" as const, stroke, strokeWidth: 1.65, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const cls = className ?? "h-5 w-5 shrink-0";
  switch (name) {
    case "routing":
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden {...common}>
          <circle cx="12" cy="5" r="2.25" />
          <path d="M12 7.25v3.5" />
          <path d="M12 10.75c-3.25 0-5.5 1.75-5.5 5.25V19M12 10.75c3.25 0 5.5 1.75 5.5 5.25V19" />
          <circle cx="6.5" cy="20" r="2" />
          <circle cx="17.5" cy="20" r="2" />
        </svg>
      );
    case "workflow":
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden {...common}>
          <rect x="2" y="4" width="9" height="9" rx="1.5" />
          <rect x="13" y="11" width="9" height="9" rx="1.5" />
          <path d="M11 8.5h2l2 2.5v2.5" />
        </svg>
      );
    case "support":
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden {...common}>
          <path d="M4 14a4 4 0 0 1 4-4h1" />
          <path d="M20 14a4 4 0 0 0-4-4h-1" />
          <path d="M4 14v3a2 2 0 0 0 2 2h1M20 14v3a2 2 0 0 1-2 2h-1" />
          <path d="M9 10V8a3 3 0 0 1 6 0v2" />
        </svg>
      );
    default:
      return null;
  }
}

type IndustryIconId = "health" | "home" | "legal" | "construction" | "cart" | "saas" | "education" | "finance";

function IndustryIcon({ id, className }: { id: IndustryIconId; className?: string }) {
  const cls = className ?? "h-5 w-5";
  const common = { fill: "none" as const, stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (id) {
    case "health":
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      );
    case "home":
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden {...common}>
          <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9.5Z" />
        </svg>
      );
    case "legal":
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden {...common}>
          <path d="M12 3v18M7 8h10M9 8a3 3 0 0 0 6 0" />
          <path d="M8 21h8" />
        </svg>
      );
    case "construction":
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden {...common}>
          <path d="M4 20h16M6 20V10l6-5 6 5v10" />
          <path d="M9 20v-6h6v6" />
        </svg>
      );
    case "cart":
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden {...common}>
          <circle cx="9" cy="20" r="1" />
          <circle cx="18" cy="20" r="1" />
          <path d="M3 4h2l.4 2M7 13h10l4-8H5.4" />
        </svg>
      );
    case "saas":
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden {...common}>
          <path d="M4 6h7v7H4V6Zm9 0h7v7h-7V6ZM4 15h7v7H4v-7Zm9 0h7v7h-7v-7Z" />
        </svg>
      );
    case "education":
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden {...common}>
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
          <path d="M8 7h8M8 11h6" />
        </svg>
      );
    case "finance":
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden {...common}>
          <path d="M3 3v18h18" />
          <path d="M7 15l4-4 4 4 5-6" />
        </svg>
      );
    default:
      return null;
  }
}

type IndustryGridEntry = {
  label: string;
  slug: string;
  icon: IndustryIconId;
  /** Row-specific purple–pink gradient for hover label (no `text-transparent` on the live copy). */
  labelGradient: readonly [string, string, string];
  iconHover: string;
  chevronHover: string;
};

function IndustryGridRow({ row }: { row: IndustryGridEntry }) {
  const [gFrom, gVia, gTo] = row.labelGradient;
  const labelGradientStyle = {
    backgroundImage: `linear-gradient(to right, ${gFrom}, ${gVia}, ${gTo})`,
    WebkitBackgroundClip: "text" as const,
    backgroundClip: "text" as const,
    color: "transparent",
  };

  return (
    <Link
      href={`/industries/${row.slug}`}
      className="group flex items-center gap-3.5 px-3 py-4 sm:gap-4 sm:px-5 sm:py-5"
    >
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center text-[var(--color-text)]/80 transition-colors duration-300 sm:h-11 sm:w-11 ${row.iconHover}`}
      >
        <IndustryIcon id={row.icon} className="h-5 w-5" />
      </span>
      <span className="mono-label relative block min-w-0 flex-1 text-left text-[0.65rem] tracking-[0.16em] sm:text-[0.68rem] sm:tracking-[0.18em]">
        <span className="relative z-0 block text-[var(--color-text)] transition-opacity duration-200 ease-out group-hover:opacity-0 motion-reduce:transition-none">
          {row.label.toUpperCase()}
        </span>
        <span
          className="pointer-events-none absolute left-0 top-0 z-[1] block w-full opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100 motion-reduce:transition-none"
          style={labelGradientStyle}
          aria-hidden
        >
          {row.label.toUpperCase()}
        </span>
      </span>
      <span className={`shrink-0 text-sm text-white/35 transition-colors duration-300 ${row.chevronHover}`} aria-hidden>
        →
      </span>
    </Link>
  );
}

export function HomeSections() {
  /** Below hero: alternate pink-forward and violet-forward headline accents (purple–pink only). */
  const sectionAccentGradientPink =
    "bg-gradient-to-r from-[#fbcfe8] via-[#f9a8d4] to-[#f472b6] bg-clip-text italic text-transparent";
  const sectionAccentGradientViolet =
    "bg-gradient-to-r from-[#ddd6fe] via-[#c084fc] to-[#f0abfc] bg-clip-text italic text-transparent";

  const trustStats = [
    { figure: "120+", caption: "Systems launched" },
    { figure: "11", caption: "Industries served" },
    { figure: "24/5", caption: "Delivery coverage" },
    { figure: "ONE", caption: "AI + product + growth in one team" },
  ];
  const problemCards = [
    {
      icon: "chart" as const,
      accent: "#f472b6",
      lines: ["Traffic is up.", "Qualified demand is not."],
      body: "You're attracting visitors, but your systems aren't turning interest into qualified pipeline.",
    },
    {
      icon: "gear" as const,
      accent: "#a78bfa",
      lines: ["Ops is manual.", "Revenue is paying the delay tax."],
      body: "Manual processes, handoffs and operational gaps are slowing growth.",
    },
    {
      icon: "people" as const,
      accent: "#e879f9",
      lines: ["Teams are shipping.", "Systems are still fragmented."],
      body: "Disconnected tools and silos create friction, rework and missed opportunities.",
    },
    {
      icon: "shield" as const,
      accent: "#f0a0c8",
      lines: ["Brand looks premium.", "Buying journey still leaks trust."],
      body: "Inconsistent experience and weak conversion architecture are costing you deals.",
    },
  ];
  const businessImpactCards = [
    {
      num: "01",
      icon: "trending-up" as const,
      accent: "#a78bfa",
      title: "INCREASE QUALIFIED PIPELINE",
      body: "Attract the right prospects with better targeting, positioning and conversion architecture.",
    },
    {
      num: "02",
      icon: "zap" as const,
      accent: "#b89cff",
      title: "IMPROVE CONVERSIONS ACROSS TOUCHPOINTS",
      body: "Eliminate friction. Optimize every step of the journey to turn interest into action.",
    },
    {
      num: "03",
      icon: "settings" as const,
      accent: "#e879f9",
      title: "REDUCE OPERATIONAL DRAG WITH AUTOMATION",
      body: "Streamline workflows, integrate systems and automate repetitive tasks.",
    },
    {
      num: "04",
      icon: "layers" as const,
      accent: "#f0a0c8",
      title: "BUILD INFRASTRUCTURE THAT SCALES",
      body: "Create future-ready systems designed to scale with your business.",
    },
  ];
  const clusters = [
    ["REVENUE SYSTEMS", "SEO, digital marketing, and ecommerce architecture built like one commercial engine."],
    ["EXPERIENCE SYSTEMS", "UX + conversion messaging that turns attention into confident buying decisions."],
    ["INFRASTRUCTURE", "Software, mobile, and cloud operations engineered for control, speed, and reliability."],
    ["AUTOMATION SYSTEMS", "AI and workflow orchestration that removes repetitive load and response lag."],
  ];
  const ecosystemClusterImages = [
    "/revenue-element-new.png",
    "/experience-element-new.png",
    "/infrastructure-element-new.png",
    "/automation-element-new.png",
  ] as const;
  /** Watermark in case-study charcoal panel (same language as ecosystem cards). */
  const caseStudyCharcoalSculptures = [
    "/automation-element-new.png",
    "/infrastructure-element-new.png",
    "/revenue-element-new.png",
    "/business-impact-element-old.png",
  ] as const;
  const industryGrid: IndustryGridEntry[] = [
    {
      label: "Healthcare",
      slug: "healthcare",
      icon: "health",
      labelGradient: ["#fda4cf", "#d8b4fe", "#a855f7"],
      iconHover: "group-hover:text-[#fda4cf]",
      chevronHover: "group-hover:text-[#a855f7]",
    },
    {
      label: "Real Estate",
      slug: "real-estate",
      icon: "home",
      labelGradient: ["#fce7f3", "#e879f9", "#c084fc"],
      iconHover: "group-hover:text-[#e879f9]",
      chevronHover: "group-hover:text-[#c084fc]",
    },
    {
      label: "Legal",
      slug: "legal",
      icon: "legal",
      labelGradient: ["#e9d5ff", "#d946ef", "#a855f7"],
      iconHover: "group-hover:text-[#e9d5ff]",
      chevronHover: "group-hover:text-[#a855f7]",
    },
    {
      label: "Construction",
      slug: "construction",
      icon: "construction",
      labelGradient: ["#fbcfe8", "#f9a8d4", "#ec4899"],
      iconHover: "group-hover:text-[#fbcfe8]",
      chevronHover: "group-hover:text-[#ec4899]",
    },
    {
      label: "Ecommerce",
      slug: "ecommerce",
      icon: "cart",
      labelGradient: ["#ffafd3", "#f0abfc", "#c084fc"],
      iconHover: "group-hover:text-[#ffafd3]",
      chevronHover: "group-hover:text-[#c084fc]",
    },
    {
      label: "SaaS",
      slug: "saas",
      icon: "saas",
      labelGradient: ["#e9d5ff", "#a78bfa", "#f472b6"],
      iconHover: "group-hover:text-[#e9d5ff]",
      chevronHover: "group-hover:text-[#f472b6]",
    },
    {
      label: "Education",
      slug: "education",
      icon: "education",
      labelGradient: ["#fae8ff", "#e879f9", "#d946ef"],
      iconHover: "group-hover:text-[#fae8ff]",
      chevronHover: "group-hover:text-[#d946ef]",
    },
    {
      label: "Finance",
      slug: "finance",
      icon: "finance",
      labelGradient: ["#f5d0fe", "#f0abfc", "#c084fc"],
      iconHover: "group-hover:text-[#f5d0fe]",
      chevronHover: "group-hover:text-[#c084fc]",
    },
  ];
  const featuredCaseStudies = [
    {
      slug: "saas-funnel-rebuild",
      title: "SaaS funnel rebuild",
      sector: "B2B SaaS",
      tags: ["Acquisition", "Product", "RevOps"],
      coverImage: "/case-study-saas-funnel.png",
      stat: "+41%",
      statLabel: "qualified demo pipeline",
      stat2: "3×",
      statLabel2: "faster MQL-to-booked demo velocity",
      excerpt:
        "Rebuilt routing, scoring, and nurture so enterprise demos compound instead of leaking at MQL—without adding headcount to sales development.",
      scope: "Strategy · UX · Engineering",
      timeline: "18 weeks",
      href: "/work",
    },
    {
      slug: "healthcare-conversion-ops",
      title: "Healthcare conversion ops",
      sector: "Healthcare",
      tags: ["Compliance", "CRM", "Automation"],
      coverImage: "/case-study-healthcare.png",
      stat: "+63%",
      statLabel: "consultation request quality",
      stat2: "52%",
      statLabel2: "reduction in intake handling time",
      excerpt: "Unified intake, eligibility checks, and scheduling so the clinical team spends time on patients—not chasing forms.",
      scope: "Operations · Integrations",
      timeline: "14 weeks",
      href: "/work",
    },
    {
      slug: "real-estate-growth-stack",
      title: "Real estate growth stack",
      sector: "PropTech",
      tags: ["Lead routing", "CRM", "Analytics"],
      coverImage: "/case-study-real-estate.png",
      stat: "2.1×",
      statLabel: "high-intent booked meetings",
      stat2: "+34%",
      statLabel2: "clearer attribution to closed deals",
      excerpt: "Connected MLS, ads, and follow-up sequences into one pipeline with clear attribution from first click to closing desk.",
      scope: "Growth stack · Data",
      timeline: "12 weeks",
      href: "/work",
    },
    {
      slug: "dummy-fintech-onboarding",
      title: "Fintech onboarding velocity",
      sector: "Finance",
      tags: ["KYC", "Product", "Risk"],
      coverImage: "/case-study-fintech.png",
      stat: "−38%",
      statLabel: "drop-off before first funded transfer",
      stat2: "4.2×",
      statLabel2: "completion rate on mobile",
      excerpt:
        "Tightened identity flows, progressive disclosure, and status messaging so approvals feel fast while risk controls stay invisible to good actors.",
      scope: "Product · Compliance UX",
      timeline: "10 weeks",
      href: "/work",
    },
    {
      slug: "dummy-ecommerce-retention",
      title: "E‑commerce retention loops",
      sector: "Retail",
      tags: ["Email", "Loyalty", "Data"],
      coverImage: "/case-study-ecommerce.png",
      stat: "+27%",
      statLabel: "repeat purchase rate in 90 days",
      stat2: "−21%",
      statLabel2: "discount reliance on win-backs",
      excerpt:
        "Wired behavioral triggers and cohort dashboards so lifecycle campaigns react to margin, not just opens—without bloating the martech stack.",
      scope: "Lifecycle · Analytics",
      timeline: "16 weeks",
      href: "/work",
    },
    {
      slug: "dummy-ops-automation",
      title: "Ops automation pilot",
      sector: "Logistics",
      tags: ["Workflows", "Integrations", "AI"],
      coverImage: "/case-study-automation.png",
      stat: "120+",
      statLabel: "hours/week returned to ops leads",
      stat2: "99.2%",
      statLabel2: "exception-free handoffs to ERP",
      excerpt:
        "Replaced spreadsheet triage with routed queues, SLAs, and human-in-the-loop review so dispatch scales before the next facility opens.",
      scope: "Automation · Systems",
      timeline: "20 weeks",
      href: "/work",
    },
  ] as const;
  const caseStudyStatGradient =
    "bg-gradient-to-r from-[#ffafd3] via-[#d8b4fe] to-[#a855f7] bg-clip-text text-transparent";
  const metrics = [
    { figure: "$18M+", label: "Pipeline influenced" },
    { figure: "87", label: "Systems launched" },
    { figure: "36%", label: "Avg. conversion lift" },
    { figure: "99.95%", label: "Infra uptime" },
  ] as const;
  const techStripLogos = Array.from({ length: 15 }, (_, i) => `/${i + 1}.webp`);

  return (
    <>
      <section className="relative isolate -mt-24 min-h-screen overflow-hidden bg-black pt-24 text-white md:pt-28">
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_45%,rgba(148,86,249,0.12),transparent_55%)]" />
          <div className="hero-bg-sculpture absolute left-1/2 top-[44%] z-0 -translate-x-1/2 -translate-y-1/2 opacity-[0.36] sm:opacity-[0.4]">
            <Image
              src={
                process.env.NEXT_PUBLIC_HERO_ELEMENT_REVISION
                  ? `/hero-element.png?v=${encodeURIComponent(process.env.NEXT_PUBLIC_HERO_ELEMENT_REVISION)}`
                  : "/hero-element.png"
              }
              alt=""
              width={1600}
              height={1200}
              priority
              sizes="100vw"
              unoptimized
              className="h-full w-full select-none object-contain object-center"
            />
          </div>
        </div>

        <SlideIn className="relative z-10 flex min-h-[calc(100svh-5rem)] flex-col px-5 pb-10 pt-2 md:px-8 md:pb-14 md:pt-4" direction="up">
          <div className="container-site flex flex-1 flex-col">
            <div className="flex flex-1 flex-col items-center justify-center px-1 pb-12 pt-6 md:pb-16 md:pt-8">
              <HeroTypewriterHeadline className="display-title-hero text-balance text-center" />
            </div>

            <div className="mt-auto grid w-full max-w-6xl grid-cols-1 gap-10 pt-10 md:mx-auto md:grid-cols-3 md:items-end md:gap-8 md:pt-12">
              <div className="order-2 md:order-1 md:justify-self-start">
                <HeroTrustRotator stats={trustStats} intervalMs={4000} />
              </div>
              <p className="body-copy order-1 max-w-xl text-pretty text-center text-[var(--text-secondary)] md:order-2 md:justify-self-center md:text-center">
                We design and deploy digital systems that align growth, product, automation, and operations so your next stage actually scales.
              </p>
              <div className="order-3 flex justify-end md:justify-self-end">
                <Link
                  href="/contact"
                  className="hero-cta-outline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-violet)]"
                >
                  <span className="hero-cta-outline-inner mono-label text-white">Contact us</span>
                </Link>
              </div>
            </div>
          </div>
        </SlideIn>
      </section>

      <section className="relative isolate overflow-hidden bg-black text-[var(--color-text)]">
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
          <div
            className="absolute inset-0 opacity-[0.5] mix-blend-screen"
            style={{
              background:
                "radial-gradient(ellipse 75% 65% at 82% 42%, rgba(167,139,250,0.38), transparent 55%), radial-gradient(ellipse 55% 45% at 96% 58%, rgba(244,114,182,0.16), transparent 52%)",
            }}
          />
          <div className="absolute inset-0">
            <Image
              src={
                process.env.NEXT_PUBLIC_MARKETING_ELEMENT_REVISION
                  ? `/marketing-element.png?v=${encodeURIComponent(process.env.NEXT_PUBLIC_MARKETING_ELEMENT_REVISION)}`
                  : "/marketing-element.png"
              }
              alt=""
              fill
              unoptimized
              className="object-contain object-right scale-[1.05] sm:scale-[1.1] md:scale-[1.14] lg:scale-[1.2] -translate-x-[min(22vw,11rem)] sm:-translate-x-[min(26vw,13rem)] md:-translate-x-[min(30vw,15rem)] lg:-translate-x-[min(34vw,17rem)]"
              sizes="100vw"
            />
          </div>
        </div>

        <SlideIn className="relative z-10 w-full" direction="right">
        <div className="container-site py-section">
          <div className="max-w-3xl">
            <p className="mono-label text-[var(--color-secondary)]">The diagnosis</p>
            <h2 className="mt-2 text-balance headline-title text-[var(--color-text)] [text-shadow:0_2px_28px_rgba(0,0,0,0.72)]">
              THE PROBLEM ISN&apos;T
              <br />
              <span className={sectionAccentGradientPink}>JUST MARKETING.</span>
            </h2>
            <p className="body-copy mt-8 max-w-2xl text-lg leading-relaxed text-[var(--color-text-muted)]">
              Most brands don&apos;t have an ads issue. They have disconnected systems: weak conversion architecture, fragmented journeys, manual operations, and slow execution loops.
            </p>
          </div>

          <div className="relative z-10 mt-14 md:mt-16">
            <div className="relative z-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {problemCards.map((card) => (
                  <article
                    key={card.lines[0]}
                    className="problem-glass-card group relative isolate overflow-hidden rounded-2xl border border-white/[0.1] bg-white/[0.04] p-8 text-left backdrop-blur-xl"
                    style={{ "--problem-accent": card.accent } as React.CSSProperties}
                  >
                    <div className="problem-card-ambient" aria-hidden />
                    <div className="problem-card-sheen" aria-hidden />
                    <div className="relative z-10">
                      <div
                        className="problem-card-icon mb-6 flex h-12 w-12 items-center justify-center rounded-full border bg-white/[0.03]"
                        style={{ borderColor: `${card.accent}66`, color: card.accent }}
                      >
                        <ProblemIcon name={card.icon} />
                      </div>
                      <h3 className="text-lg font-bold leading-snug tracking-tight text-[var(--color-text)] md:text-xl">
                        {card.lines[0]}
                        <br />
                        <span className="text-[var(--color-text)]">{card.lines[1]}</span>
                      </h3>
                      <div
                        className="problem-card-rule my-5 h-px w-12 rounded-full opacity-90"
                        style={{ backgroundColor: card.accent }}
                        aria-hidden
                      />
                      <p className="text-sm font-normal leading-relaxed text-[var(--color-text)]/70 transition-colors duration-500 group-hover:text-[var(--color-text)]/90 md:text-[0.9375rem]">
                        {card.body}
                      </p>
                    </div>
                  </article>
                ))}
            </div>
          </div>
        </div>
        </SlideIn>
      </section>

      <section className="relative isolate overflow-hidden bg-black text-[var(--color-text)]">
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
          <div
            className="absolute inset-0 opacity-[0.55] mix-blend-screen"
            style={{
              background:
                "radial-gradient(ellipse 80% 70% at 85% 45%, rgba(167,139,250,0.35), transparent 55%), radial-gradient(ellipse 60% 50% at 100% 60%, rgba(244,114,182,0.18), transparent 50%)",
            }}
          />
          <div className="absolute inset-y-0 top-0 right-0 bottom-0 left-[8%] md:left-[14%] lg:left-[22%]">
            <Image
              src={
                process.env.NEXT_PUBLIC_BUSINESS_IMPACT_REVISION
                  ? `/business-impact-element.png?v=${encodeURIComponent(process.env.NEXT_PUBLIC_BUSINESS_IMPACT_REVISION)}`
                  : "/business-impact-element.png"
              }
              alt=""
              fill
              unoptimized
              className="object-contain object-right scale-[1.05] sm:scale-[1.1] md:scale-[1.14] lg:scale-[1.2] translate-x-[min(18vw,12rem)] sm:translate-x-[min(22vw,14rem)] md:translate-x-[min(26vw,16rem)] lg:translate-x-[min(30vw,18rem)]"
              sizes="100vw"
            />
          </div>
        </div>

        <SlideIn className="relative z-10 w-full" direction="down">
        <div className="container-site py-12 md:py-16 lg:py-20">
          <p className="mono-label text-[var(--color-secondary)]">Outcomes over output</p>
          <h2 className="relative z-10 mt-3 max-w-4xl text-balance font-[family-name:var(--font-display)] text-[clamp(2.1rem,5.8vw,3.65rem)] font-bold uppercase leading-[0.95] tracking-[0.02em] [text-shadow:0_2px_28px_rgba(0,0,0,0.75)]">
            <span className="block text-white">BUSINESS IMPACT. NOT SERVICE</span>
            <span className={`mt-0.5 block ${sectionAccentGradientViolet}`}>CHECKLISTS.</span>
          </h2>
          <p className="body-copy relative mt-4 max-w-2xl text-[var(--color-text-muted)] md:mt-5">
            <span className="relative z-10">We focus on the metrics that move the needle. Everything we do is engineered for compounding results.</span>
            <span
              className="pointer-events-none absolute -inset-x-6 -inset-y-3 z-0 rounded-lg bg-gradient-to-r from-black via-black/90 to-transparent md:-inset-x-10 md:-inset-y-4 md:via-black/80 lg:from-black lg:via-black/65"
              aria-hidden
            />
          </p>

          <div className="relative mt-8 lg:mt-10">
            <span
              className="pointer-events-none absolute -inset-x-8 -bottom-4 -top-2 z-0 bg-gradient-to-r from-black from-40% via-black/92 to-transparent md:-inset-x-12 md:from-35% lg:max-w-[min(52rem,100%)] lg:from-30% lg:via-black/88"
              aria-hidden
            />
            <div className="relative z-10 max-w-xl lg:max-w-[min(100%,28rem)]">
              <div className="border-t border-white/[0.12]">
                {businessImpactCards.map((card) => (
                  <article
                    key={card.num}
                    className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-0 border-b border-white/[0.12] py-5 md:gap-x-5 md:py-6"
                  >
                    <div className="pt-0.5">
                      <div
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md p-px md:h-10 md:w-10"
                        style={{
                          background: `linear-gradient(135deg, ${card.accent}, rgba(244,114,182,0.85))`,
                        }}
                        aria-hidden
                      >
                        <span className="flex h-full w-full items-center justify-center rounded-[calc(0.375rem-1px)] bg-black">
                          <BusinessImpactIcon name={card.icon} className="h-4 w-4 text-white/90 md:h-[1.05rem] md:w-[1.05rem]" />
                        </span>
                      </div>
                    </div>
                    <div className="min-w-0">
                      <p className="mono-label text-[0.6rem] text-white/40">{card.num}</p>
                      <h3 className="mt-1 text-[0.75rem] font-bold uppercase leading-snug tracking-[0.14em] text-white md:text-[0.8125rem] md:tracking-[0.15em]">
                        {card.title}
                      </h3>
                      <p className="mt-2 max-w-md text-[0.8125rem] leading-snug text-white/60 md:text-[0.875rem] md:leading-relaxed">
                        {card.body}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
              <div className="mt-5 md:mt-6">
                <Link
                  href="/solutions"
                  className="mono-label inline-flex items-center gap-2 text-[var(--color-primary)] transition hover:gap-3 hover:text-[var(--color-primary-strong)]"
                >
                  Explore solutions
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        </SlideIn>
      </section>

      <section className="bg-black py-section">
        <SlideIn className="w-full" direction="left">
        <div className="container-site">
          <p className="mono-label mb-2 text-center text-[var(--color-secondary)]">How we work</p>
          <h2 className="headline-title text-center text-[var(--color-text)]">
            A DELIVERY MODEL DESIGNED TO
            <br />
            <span className={sectionAccentGradientPink}>
              REDUCE RISK.
            </span>
          </h2>
          <div className="mt-16 grid gap-10 py-4 md:grid-cols-4 md:items-start md:gap-8 md:py-8">
            {(
              [
                {
                  num: "01",
                  title: "Diagnose",
                  desc: "Auditing systems, identifying friction, mapping outcomes.",
                  accent: "#a78bfa",
                },
                {
                  num: "02",
                  title: "Architect",
                  desc: "Structuring foundations for scale and velocity.",
                  accent: "#b89cff",
                },
                {
                  num: "03",
                  title: "Mutate",
                  desc: "Designing the kinetic brand and experience layer.",
                  accent: "#e879f9",
                },
                {
                  num: "04",
                  title: "Deploy",
                  desc: "Shipping resilient systems into production.",
                  accent: "#f0a0c8",
                },
              ] as const
            ).map((phase, index) => {
              const stagger = index % 2 === 0 ? "-translate-y-3 md:-translate-y-7" : "translate-y-3 md:translate-y-7";
              return (
                <article key={phase.title} className={`relative text-center ${stagger}`}>
                  <span
                    className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 text-8xl font-black tabular-nums"
                    style={{ color: phase.accent, opacity: 0.14 }}
                    aria-hidden
                  >
                    {phase.num}
                  </span>
                  <h3
                    className="relative text-xs font-bold uppercase leading-tight tracking-[0.2em] md:text-[0.8125rem]"
                    style={{ color: phase.accent, fontFamily: "var(--font-geist-mono), monospace" }}
                  >
                    {phase.title}
                  </h3>
                  <p className="mt-6 text-sm text-[var(--color-text-muted)] md:mt-7">{phase.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
        </SlideIn>
      </section>

      <section className="bg-black py-section">
        <SlideIn className="w-full" direction="up">
          <div className="container-site">
            <p className="mono-label mb-2 text-center text-[var(--color-secondary)]">Capabilities</p>
            <h2 className="display-title overflow-visible px-2 text-center sm:px-3">
              <span className="text-white/15">OUR </span>
              <span className={`inline-block pb-[0.04em] pr-[0.14em] ${sectionAccentGradientViolet}`}>
                ECOSYSTEM
              </span>
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-12 lg:grid-cols-4 lg:items-stretch lg:gap-6">
              {clusters.map(([title, desc], index) => {
                const num = String(index + 1).padStart(2, "0");
                return (
                  <article
                    key={title}
                    className="relative flex h-full min-h-0 flex-col overflow-hidden rounded-none border border-white/[0.08] bg-[#141414] pb-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] md:pb-7"
                  >
                    <p className="absolute left-5 top-4 z-10 font-mono text-xs tabular-nums tracking-[0.2em] text-white/35 md:left-6 md:top-5">
                      {num}
                    </p>
                    {/* Full-bleed graphic on card (no inner fill); shifted up so the top ~half clips at the card edge */}
                    <div className="relative h-[min(44vw,10rem)] w-full shrink-0 overflow-hidden sm:h-[min(30vw,9.25rem)] md:h-[min(24vw,9.5rem)] lg:h-[min(19vw,9rem)]">
                      <div className="absolute bottom-0 left-1/2 h-[200%] w-[min(100%,18rem)] -translate-x-1/2 md:w-[min(100%,17rem)]">
                        <Image
                          src={ecosystemClusterImages[index]}
                          alt=""
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-contain object-bottom select-none"
                          priority={index === 0}
                        />
                      </div>
                    </div>
                    <div className="flex min-h-0 flex-1 flex-col px-5 pt-5 md:px-6 md:pt-6">
                      <h3 className="text-balance text-base font-bold uppercase leading-snug tracking-[0.08em] text-white md:text-lg">
                        {title}
                      </h3>
                      <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-[var(--color-text-muted)] md:text-[0.9375rem]">
                        {desc}
                      </p>
                      <Link
                        href="/start-a-project"
                        className="mt-8 inline-flex self-start text-xs font-bold uppercase tracking-[0.22em] transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-secondary)]"
                      >
                        <span className="bg-gradient-to-r from-[#ddd6fe] via-[#c084fc] to-[#ffafd3] bg-clip-text text-transparent">
                          GET STARTED
                        </span>
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </SlideIn>
      </section>

      <section className="relative overflow-hidden bg-black py-section">
        <div
          className="pointer-events-none absolute bottom-[2%] left-[-6%] h-[min(58vw,20rem)] w-[min(58vw,20rem)] rounded-full opacity-[0.22] blur-[80px] sm:h-[min(48vw,17rem)] sm:w-[min(48vw,17rem)] md:blur-[92px]"
          style={{
            background:
              "radial-gradient(circle at 38% 42%, rgba(216, 180, 254, 0.48), rgba(147, 51, 234, 0.2) 42%, rgba(236, 72, 153, 0.14) 58%, transparent 72%)",
          }}
          aria-hidden
        />
        <SlideIn className="relative z-10 w-full" direction="right">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
            <div className="flex max-w-xl flex-col lg:col-span-5">
              <p className="mono-label text-[var(--color-secondary)]">Vertical depth</p>
              <h2 className="headline-title mt-2 text-balance text-[var(--color-text)]">
                INDUSTRY CONTEXT CHANGES{" "}
                <span className={sectionAccentGradientPink}>
                  EVERYTHING.
                </span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[var(--color-text-muted)] md:mt-7 md:text-lg">
                Same services, different execution logic. We adapt systems to market constraints, buyer behavior, and compliance pressure.
              </p>
              <div className="mt-10 self-start">
                <Button href="/industries">Explore Industries</Button>
              </div>
            </div>

            <div className="relative lg:col-span-7">
              <div className="grid min-h-0 grid-cols-2">
                <div className="min-w-0">
                  {industryGrid.slice(0, 4).map((row) => (
                    <IndustryGridRow key={row.slug} row={row} />
                  ))}
                </div>
                <div className="relative min-w-0">
                  <span
                    className="pointer-events-none absolute -left-px top-[12%] bottom-[12%] w-px bg-gradient-to-b from-transparent via-[var(--color-primary)] to-transparent opacity-90"
                    style={{ boxShadow: "0 0 20px rgba(208, 188, 255, 0.45)" }}
                    aria-hidden
                  />
                  {industryGrid.slice(4, 8).map((row) => (
                    <IndustryGridRow key={row.slug} row={row} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        </SlideIn>
      </section>

      <section className="relative z-[1] overflow-x-hidden bg-black py-section">
        <SlideIn className="w-full" direction="down">
        <div className="container-site text-center">
          <p className="mono-label mb-2 text-[var(--color-secondary)]">Stack & integrations</p>
          <h2 className="headline-title text-[var(--color-text)]">
            MODERN TECHNOLOGY
            <br />
            <span className={sectionAccentGradientViolet}>
              FOUNDATIONS.
            </span>
          </h2>
        </div>
        <div
          className="relative left-1/2 mt-10 w-[100vw] max-w-[100vw] -translate-x-1/2 overflow-hidden"
          aria-label="Technology stack logos"
        >
          <div className="tech-marquee-track">
            <div className="tech-marquee-strip">
              {techStripLogos.map((src) => (
                <div
                  key={`marquee-a-${src}`}
                  className="relative flex shrink-0 items-center justify-center transition-transform duration-300 ease-out will-change-transform hover:-translate-y-2.5"
                >
                  <Image
                    src={src}
                    alt=""
                    width={320}
                    height={320}
                    className="h-28 w-auto object-contain opacity-85 select-none sm:h-36 md:h-44 lg:h-52"
                    draggable={false}
                    sizes="(max-width: 640px) 112px, (max-width: 1024px) 144px, 208px"
                  />
                </div>
              ))}
            </div>
            <div className="tech-marquee-strip" aria-hidden>
              {techStripLogos.map((src) => (
                <div
                  key={`marquee-b-${src}`}
                  className="relative flex shrink-0 items-center justify-center transition-transform duration-300 ease-out will-change-transform hover:-translate-y-2.5"
                >
                  <Image
                    src={src}
                    alt=""
                    width={320}
                    height={320}
                    className="h-28 w-auto object-contain opacity-85 select-none sm:h-36 md:h-44 lg:h-52"
                    draggable={false}
                    sizes="(max-width: 640px) 112px, (max-width: 1024px) 144px, 208px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        </SlideIn>
      </section>

      <section className="bg-black py-section">
        <SlideIn className="w-full" direction="left">
        <div className="container-site grid gap-12 md:grid-cols-12 md:items-center md:gap-x-10 md:gap-y-12 lg:gap-x-14">
          <div className="md:col-span-5">
            <p className="mono-label text-[var(--color-secondary)]">Intelligent operations</p>
            <h2 className="headline-title mt-2">
              AUTOMATE THE
              <br />
              <span className={sectionAccentGradientPink}>DRAG.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg text-[var(--color-text-muted)]">
            Keep humans focused where judgment matters. We deploy AI and workflow orchestrations that reduce manual load and improve operational consistency.
            </p>
            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-3 text-[var(--color-secondary)]">
                <AutomateListIcon name="routing" className="mt-0.5 h-5 w-5 text-[var(--color-secondary)]" />
                <span className="mono-label leading-snug">Lead Routing & Qualification</span>
              </li>
              <li className="flex items-start gap-3 text-[var(--color-secondary)]">
                <AutomateListIcon name="workflow" className="mt-0.5 h-5 w-5 text-[var(--color-secondary)]" />
                <span className="mono-label leading-snug">Workflow Orchestration</span>
              </li>
              <li className="flex items-start gap-3 text-[var(--color-secondary)]">
                <AutomateListIcon name="support" className="mt-0.5 h-5 w-5 text-[var(--color-secondary)]" />
                <span className="mono-label leading-snug">Support Assistants</span>
              </li>
            </ul>
          </div>
          <div className="relative flex w-full min-h-0 items-center justify-center md:col-span-7 md:justify-center">
            <div className="relative w-full max-w-full">
              <div
                className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center p-2 sm:p-4"
                aria-hidden
              >
                <Image
                  src={
                    process.env.NEXT_PUBLIC_HERO_ELEMENT_REVISION
                      ? `/hero-element.png?v=${encodeURIComponent(process.env.NEXT_PUBLIC_HERO_ELEMENT_REVISION)}`
                      : "/hero-element.png"
                  }
                  alt=""
                  width={1600}
                  height={1200}
                  unoptimized
                  className="h-full max-h-[min(100%,26rem)] w-full select-none object-contain object-center opacity-[0.28] sm:max-h-[min(100%,28rem)] sm:opacity-[0.34] md:opacity-[0.38]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 28rem"
                />
              </div>
              <div className="relative z-[5]">
                <AiOrbLottie />
              </div>
              <span className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center text-[clamp(5rem,18vw,9rem)] font-black leading-none text-[var(--color-primary)]/40 md:text-[clamp(7rem,14vw,11rem)] lg:text-[clamp(8rem,12vw,13rem)]">
                AI
              </span>
            </div>
          </div>
        </div>
        </SlideIn>
      </section>

      <section className="bg-black py-section">
        <SlideIn className="w-full" direction="up">
          <div className="container-site">
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="mono-label text-[var(--color-secondary)]">Case studies</p>
                <h2 className="headline-title mt-2">
                  OUTCOMES YOU CAN
                  <br />
                  <span className={sectionAccentGradientViolet}>TRACE.</span>
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-[var(--color-text-muted)]">
                  Each engagement ships with measurable baselines, instrumentation, and a narrative your board can repeat—not vanity redesigns.
                </p>
              </div>
              <Button href="/work" variant="secondary">
                View all work
              </Button>
            </div>
          </div>
        </SlideIn>

        <CaseStudiesScrollRail className="mt-10 md:mt-12">
              <div className="w-4 shrink-0 snap-none sm:w-5 md:w-0" aria-hidden />
              {featuredCaseStudies.map((study, index) => (
                <Link
                  key={study.slug}
                  href={study.href}
                  className="group flex h-full min-h-0 w-full flex-col self-stretch shrink-0 snap-start snap-always focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-secondary)]"
                  aria-label={`Open case study: ${study.title}`}
                >
                  <article className="relative flex min-h-0 w-[min(88vw,22.5rem)] flex-1 flex-col overflow-hidden rounded-none border border-white/[0.08] bg-black shadow-[0_24px_80px_-28px_rgba(0,0,0,0.65)] transition-[border-color] duration-300 hover:border-white/[0.14] sm:w-[min(86vw,24rem)] md:w-[min(72vw,28rem)] lg:w-[min(56vw,36rem)]">
                    <div className="relative z-0 aspect-[16/11] w-full shrink-0 bg-black">
                      <Image
                        src={study.coverImage}
                        alt=""
                        fill
                        className="object-cover transition duration-700 ease-out group-hover:scale-[1.02]"
                        sizes="(max-width: 768px) 88vw, (max-width: 1024px) 72vw, 36rem"
                      />
                    </div>
                    <div className="relative flex min-h-0 w-full flex-1 flex-col overflow-hidden bg-[#141414]">
                      {/* Ecosystem-style sculpt: oversized graphic anchored to bottom, behind copy */}
                      <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden" aria-hidden>
                        <div className="absolute bottom-0 left-1/2 h-[200%] w-[min(100%,22rem)] -translate-x-1/2 opacity-[0.2] sm:w-[min(100%,24rem)] md:w-[min(100%,26rem)] md:opacity-[0.24]">
                          <Image
                            src={caseStudyCharcoalSculptures[index % caseStudyCharcoalSculptures.length]}
                            alt=""
                            fill
                            sizes="(max-width: 768px) 88vw, (max-width: 1024px) 72vw, 36rem"
                            className="object-contain object-bottom select-none"
                          />
                        </div>
                      </div>
                      <div
                        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[70%] bg-gradient-to-t from-[#141414] via-[#141414]/88 to-transparent"
                        aria-hidden
                      />
                      <div className="relative z-10 flex min-h-0 flex-1 flex-col gap-6 px-5 pb-6 pt-5 sm:px-6 sm:pb-7 sm:pt-6">
                        <div className="shrink-0 space-y-1">
                          <p className="mono-label text-white/45">{study.sector}</p>
                          <h3 className="text-balance text-xl font-bold leading-snug tracking-tight text-white md:text-2xl">
                            {study.title}
                          </h3>
                        </div>
                        <div className="flex min-h-0 flex-1 flex-col gap-6 md:flex-row md:items-stretch md:justify-between md:gap-8">
                          <div className="flex min-h-0 min-w-0 flex-1 flex-col">
                            <p className="min-h-0 flex-1 text-pretty text-sm leading-relaxed text-[var(--color-text-muted)] md:text-base">
                              {study.excerpt}
                            </p>
                            <p className="mt-4 shrink-0 font-mono text-[0.65rem] uppercase leading-relaxed tracking-[0.12em] text-white/40 md:mt-4">
                              {study.scope}
                              <span className="text-white/25"> · </span>
                              <span className="text-[var(--color-secondary)]">{study.timeline}</span>
                            </p>
                          </div>
                          <div className="grid shrink-0 grid-cols-2 gap-6 sm:gap-8 md:flex md:w-[min(100%,11.5rem)] md:flex-col md:justify-end md:gap-8 md:self-stretch">
                            <div className="text-left md:text-right">
                              <p
                                className={`text-3xl font-black tabular-nums tracking-tight sm:text-4xl ${caseStudyStatGradient}`}
                              >
                                {study.stat}
                              </p>
                              <p className="mt-1 text-xs font-medium leading-snug text-white/75 md:max-w-[11rem] md:ml-auto">
                                {study.statLabel}
                              </p>
                            </div>
                            <div className="text-left md:text-right">
                              <p
                                className={`text-3xl font-black tabular-nums tracking-tight sm:text-4xl ${caseStudyStatGradient}`}
                              >
                                {study.stat2}
                              </p>
                              <p className="mt-1 text-xs font-medium leading-snug text-white/75 md:max-w-[11rem] md:ml-auto">
                                {study.statLabel2}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
              <div className="w-4 shrink-0 snap-none sm:w-5 md:w-6" aria-hidden />
        </CaseStudiesScrollRail>
      </section>

      <section className="bg-black py-section">
        <SlideIn className="w-full" direction="right">
        <div className="container-site">
          <p className="mono-label text-[var(--color-secondary)]">By the numbers</p>
          <h2 className="headline-title mt-2 text-[var(--color-text)]">
            METRICS.{" "}
            <span className={`inline-block ${sectionAccentGradientPink}`}>
              NOT VIBES.
            </span>
          </h2>
          <div className="relative mt-12 md:mt-14">
            <ul className="relative z-10 m-0 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
              {metrics.map((metric, index) => (
                <li key={metric.label} className="m-0 aspect-square min-h-0 p-0">
                  <article className="group relative flex h-full min-h-0 w-full flex-col overflow-hidden rounded-none border border-white/[0.08] bg-[#141414] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04),0_24px_80px_-40px_rgba(0,0,0,0.75)] transition-[border-color,transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-white/[0.16] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_28px_90px_-36px_rgba(0,0,0,0.85)]">
                    <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden" aria-hidden>
                      <div className="absolute bottom-0 left-1/2 h-[200%] w-[min(130%,11rem)] -translate-x-1/2 opacity-[0.16] transition-opacity duration-300 group-hover:opacity-[0.22] sm:w-[min(130%,12rem)] md:w-[min(130%,13rem)]">
                        <Image
                          src={ecosystemClusterImages[index % ecosystemClusterImages.length]}
                          alt=""
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-contain object-bottom select-none"
                        />
                      </div>
                    </div>
                    <div
                      className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[72%] bg-gradient-to-t from-[#141414] via-[#141414]/92 to-transparent"
                      aria-hidden
                    />
                    <div
                      className="pointer-events-none absolute inset-0 z-[3] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{
                        background:
                          "linear-gradient(145deg, rgba(255, 255, 255, 0.04) 0%, transparent 45%, rgba(255, 255, 255, 0.02) 100%)",
                      }}
                      aria-hidden
                    />
                    <div className="pointer-events-none absolute inset-x-0 top-0 z-[4] h-px bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-70" aria-hidden />
                    <div className="relative z-10 flex h-full min-h-0 flex-col p-5 sm:p-6 md:p-7">
                      <p className="mono-label shrink-0 text-[0.6rem] text-white/30 sm:text-[0.62rem]">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <div className="mt-auto min-w-0 shrink-0">
                        <p
                          className={`font-black tabular-nums tracking-[-0.04em] ${caseStudyStatGradient}`}
                          style={{ fontSize: "clamp(1.85rem, 5.5vw, 2.75rem)", lineHeight: 0.92 }}
                        >
                          {metric.figure}
                        </p>
                        <p className="mono-label mt-4 max-w-[14rem] text-[0.6rem] leading-relaxed tracking-[0.16em] text-[var(--color-text-muted)] transition-colors duration-300 group-hover:text-[var(--color-text)]/85 sm:mt-5 sm:text-[0.62rem] sm:tracking-[0.18em]">
                          {metric.label.toUpperCase()}
                        </p>
                      </div>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </div>
        </SlideIn>
      </section>

      <section className="bg-black py-section">
        <SlideIn className="w-full" direction="down">
        <div className="container-site">
          <p className="mono-label text-[var(--color-secondary)]">Client voice</p>
          <h2 className="display-title mb-10 mt-2 text-white/10">EVIDENCE</h2>
          <div className="grid gap-16 md:grid-cols-2">
            <blockquote className="text-2xl leading-tight md:text-4xl">
              “They didn&apos;t just redesign our interface; they re-architected how we acquire and convert enterprise leads.”
              <footer className="mono-label mt-4 text-[var(--color-secondary)]">CTO, Global SaaS Platform</footer>
            </blockquote>
            <blockquote className="text-2xl leading-tight md:mt-20 md:text-4xl">
              “The aesthetic is wild, but the infrastructure underneath impressed our engineering team.”
              <footer className="mono-label mt-4 text-[var(--color-tertiary)]">Founder, Boutique Ecommerce</footer>
            </blockquote>
          </div>
        </div>
        </SlideIn>
      </section>

      <section className="bg-black py-section">
        <SlideIn className="w-full" direction="left">
        <div className="container-site">
          <p className="mono-label mb-4 text-[var(--color-secondary)]">Resources</p>
          <div className="relative overflow-visible rounded-none border border-white/[0.08] bg-[#141414] p-8 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04),0_24px_80px_-40px_rgba(0,0,0,0.75)] md:p-10 lg:p-12">
            <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" aria-hidden />
            <div className="relative z-[2] grid gap-10 md:grid-cols-12 md:items-stretch md:gap-6 lg:gap-8">
              <div className="md:col-span-7">
                <h2 className="headline-title">GET THE GROWTH READINESS SCORECARD.</h2>
                <p className="mt-4 max-w-2xl text-[var(--color-text-muted)]">
                  Fast diagnostic for your acquisition quality, conversion friction, automation gaps, and delivery bottlenecks.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href="/get-an-audit">Get an Audit</Button>
                  <Button href="/insights" variant="secondary">
                    Download Playbook
                  </Button>
                </div>
              </div>
              <div className="relative min-h-[min(52vw,13rem)] overflow-visible md:col-span-5 md:min-h-0 md:h-full">
                <div
                  className="relative z-[3] mx-auto mt-2 h-[min(64vw,16rem)] w-[min(100%,22rem)] overflow-visible sm:h-[min(56vw,18rem)] sm:w-[min(100%,26rem)] md:absolute md:inset-y-0 md:-right-6 md:left-auto md:mx-0 md:mt-0 md:h-[min(125%,28rem)] md:w-[min(155%,34rem)] md:max-w-[min(100vw-2rem,36rem)] md:translate-x-[4%] md:-translate-y-[8%] lg:-right-10 lg:h-[min(130%,32rem)] lg:w-[min(175%,40rem)] lg:max-w-[min(100vw-2rem,44rem)] lg:translate-x-[8%] lg:-translate-y-[10%]"
                  aria-hidden
                >
                  <Image
                    src={
                      process.env.NEXT_PUBLIC_MARKETING_ELEMENT_REVISION
                        ? `/marketing-element.png?v=${encodeURIComponent(process.env.NEXT_PUBLIC_MARKETING_ELEMENT_REVISION)}`
                        : "/marketing-element.png"
                    }
                    alt=""
                    fill
                    className="origin-bottom scale-[1.22] object-contain object-bottom select-none drop-shadow-[0_28px_60px_rgba(0,0,0,0.55)] sm:scale-125 md:origin-bottom-right md:scale-[1.42] md:object-right lg:scale-[1.52]"
                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 560px"
                    priority={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        </SlideIn>
      </section>

      <HomeFaqAccordion />

      <section className="bg-black pb-20">
        <SlideIn className="w-full" direction="right">
        <div className="container-site">
          <p className="mono-label text-[var(--color-secondary)]">Partnership</p>
          <h2 className="display-title mt-2 text-[var(--color-primary)]">LET&apos;S BUILD YOUR NEXT STAGE.</h2>
          <p className="mt-4 max-w-2xl text-[var(--color-text-muted)]">
            Strategy, systems, execution, and scale - aligned into one digital engine.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/book-strategy-call">Book a Strategy Call</Button>
            <Button href="/request-proposal" variant="secondary">
              Request Proposal
            </Button>
          </div>
        </div>
        </SlideIn>
      </section>
    </>
  );
}
