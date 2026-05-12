import Image from "next/image";
import { AiOrbLottie } from "@/components/sections/AiOrbLottie";
import { HomeFaqAccordion } from "@/components/sections/HomeFaqAccordion";
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
  labelHover: string;
  iconHover: string;
  chevronHover: string;
};

function IndustryGridRow({ row }: { row: IndustryGridEntry }) {
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
      <span
        className={`mono-label min-w-0 flex-1 text-left text-[0.65rem] tracking-[0.16em] text-[var(--color-text)] duration-300 sm:text-[0.68rem] sm:tracking-[0.18em] ${row.labelHover}`}
      >
        {row.label.toUpperCase()}
      </span>
      <span className={`shrink-0 text-sm text-white/35 transition-colors duration-300 ${row.chevronHover}`} aria-hidden>
        →
      </span>
    </Link>
  );
}

export function HomeSections() {
  /** Below hero: alternate warm (pink) and cool (blue) headline accents. Hero is unchanged. */
  const sectionAccentGradientPink =
    "bg-gradient-to-r from-[#f5cdbf] via-[#ffafd3] to-[#e8a0c8] bg-clip-text italic text-transparent";
  const sectionAccentGradientBlue =
    "bg-gradient-to-r from-[#9dc8ff] via-[#b8a8ff] to-[#d8a8f0] bg-clip-text italic text-transparent";

  const trustStats = [
    { figure: "120+", caption: "Systems launched" },
    { figure: "11", caption: "Industries served" },
    { figure: "24/5", caption: "Delivery coverage" },
    { figure: "ONE", caption: "AI + product + growth in one team" },
  ];
  const problemCards = [
    {
      icon: "chart" as const,
      accent: "#e89588",
      lines: ["Traffic is up.", "Qualified demand is not."],
      body: "You're attracting visitors, but your systems aren't turning interest into qualified pipeline.",
    },
    {
      icon: "gear" as const,
      accent: "#9b8edb",
      lines: ["Ops is manual.", "Revenue is paying the delay tax."],
      body: "Manual processes, handoffs and operational gaps are slowing growth.",
    },
    {
      icon: "people" as const,
      accent: "#5ecfe8",
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
      accent: "#6eb5ff",
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
      accent: "#5ecfe8",
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
    "/revenue-system-element.png",
    "/experience-systems-element.png",
    "/infrastructure-systems-element.png",
    "/automation-systems-element.png",
  ] as const;
  const industryGrid: IndustryGridEntry[] = [
    {
      label: "Healthcare",
      slug: "healthcare",
      icon: "health",
      labelHover:
        "group-hover:bg-gradient-to-r group-hover:from-[#ffafd3] group-hover:via-[#d0bcff] group-hover:to-[#4cd7f6] group-hover:bg-clip-text group-hover:text-transparent",
      iconHover: "group-hover:text-[#ffafd3]",
      chevronHover: "group-hover:text-[#4cd7f6]",
    },
    {
      label: "Real Estate",
      slug: "real-estate",
      icon: "home",
      labelHover:
        "group-hover:bg-gradient-to-r group-hover:from-[#f5cdbf] group-hover:via-[#4cd7f6] group-hover:to-[#d0bcff] group-hover:bg-clip-text group-hover:text-transparent",
      iconHover: "group-hover:text-[#4cd7f6]",
      chevronHover: "group-hover:text-[#d0bcff]",
    },
    {
      label: "Legal",
      slug: "legal",
      icon: "legal",
      labelHover:
        "group-hover:bg-gradient-to-r group-hover:from-[#b89cff] group-hover:via-[#d0bcff] group-hover:to-[#e4ddff] group-hover:bg-clip-text group-hover:text-transparent",
      iconHover: "group-hover:text-[#b89cff]",
      chevronHover: "group-hover:text-[#e4ddff]",
    },
    {
      label: "Construction",
      slug: "construction",
      icon: "construction",
      labelHover:
        "group-hover:bg-gradient-to-r group-hover:from-[#e8a57a] group-hover:via-[#f0a0c8] group-hover:to-[#ffb4ab] group-hover:bg-clip-text group-hover:text-transparent",
      iconHover: "group-hover:text-[#e8a57a]",
      chevronHover: "group-hover:text-[#f0a0c8]",
    },
    {
      label: "Ecommerce",
      slug: "ecommerce",
      icon: "cart",
      labelHover:
        "group-hover:bg-gradient-to-r group-hover:from-[#ffafd3] group-hover:via-[#f5cdbf] group-hover:to-[#d0bcff] group-hover:bg-clip-text group-hover:text-transparent",
      iconHover: "group-hover:text-[#ffafd3]",
      chevronHover: "group-hover:text-[#d0bcff]",
    },
    {
      label: "SaaS",
      slug: "saas",
      icon: "saas",
      labelHover:
        "group-hover:bg-gradient-to-r group-hover:from-[#4cd7f6] group-hover:via-[#7dd3fc] group-hover:to-[#d0bcff] group-hover:bg-clip-text group-hover:text-transparent",
      iconHover: "group-hover:text-[#4cd7f6]",
      chevronHover: "group-hover:text-[#d0bcff]",
    },
    {
      label: "Education",
      slug: "education",
      icon: "education",
      labelHover:
        "group-hover:bg-gradient-to-r group-hover:from-[#c4b0ff] group-hover:via-[#4cd7f6] group-hover:to-[#a5f3fc] group-hover:bg-clip-text group-hover:text-transparent",
      iconHover: "group-hover:text-[#c4b0ff]",
      chevronHover: "group-hover:text-[#4cd7f6]",
    },
    {
      label: "Finance",
      slug: "finance",
      icon: "finance",
      labelHover:
        "group-hover:bg-gradient-to-r group-hover:from-[#d0bcff] group-hover:via-[#fde68a] group-hover:to-[#4cd7f6] group-hover:bg-clip-text group-hover:text-transparent",
      iconHover: "group-hover:text-[#fde68a]",
      chevronHover: "group-hover:text-[#d0bcff]",
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
      excerpt: "Connected MLS, ads, and follow-up sequences into one pipeline with clear attribution from first click to closing desk.",
      scope: "Growth stack · Data",
      timeline: "12 weeks",
      href: "/work",
    },
  ] as const;
  const [featuredCaseStudy, ...caseStudyPreviews] = featuredCaseStudies;
  const metrics = [
    { figure: "$18M+", label: "Pipeline influenced" },
    { figure: "87", label: "Systems launched" },
    { figure: "36%", label: "Avg. conversion lift" },
    { figure: "99.95%", label: "Infra uptime" },
  ] as const;
  const techStripLogos = Array.from({ length: 15 }, (_, i) => `/${i + 1}.webp`);

  return (
    <>
      <section className="relative isolate min-h-screen overflow-hidden pt-20 pb-16 md:pt-24 md:pb-20 lg:pt-28">
        <div className="hero-blob-track" aria-hidden>
          <div className="hero-blob-visual blob-shape" />
        </div>
        <div className="container-site relative z-10">
          <div className="grid gap-10 md:grid-cols-12 md:items-center md:gap-12 lg:gap-14">
            <div className="text-left md:col-span-7 lg:col-span-6">
              <HeroTypewriterHeadline className="display-title-hero hero-title-gradient text-balance" />
              <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--color-text-muted)] md:mt-8 md:text-xl">
                We design and deploy digital systems that align growth, product, automation, and operations so your next stage actually scales.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3 md:mt-10">
                <Button href="/book-strategy-call">Book a Strategy Call</Button>
                <Button href="/solutions" variant="secondary">
                  Explore Capabilities
                </Button>
              </div>
            </div>
            <div className="relative flex min-h-0 justify-center md:col-span-5 md:justify-end lg:col-span-6">
              <div
                className="pointer-events-none absolute inset-[-8%] z-0 rounded-[55%] opacity-95 blur-[56px] sm:blur-[68px] md:inset-[-12%] md:blur-[80px]"
                style={{
                  background:
                    "radial-gradient(ellipse 62% 58% at 42% 46%, rgba(148, 170, 255, 0.5), transparent 64%), radial-gradient(ellipse 54% 52% at 74% 40%, rgba(76, 215, 246, 0.32), transparent 60%), radial-gradient(ellipse 48% 48% at 52% 72%, rgba(208, 188, 255, 0.22), transparent 58%)",
                }}
                aria-hidden
              />
              <div className="hero-element-motion relative z-10 w-full max-w-[min(100%,440px)] md:max-w-[min(100%,520px)] lg:max-w-[min(100%,600px)]">
                <Image
                  src="/hero-element.png"
                  alt=""
                  width={900}
                  height={700}
                  priority
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="h-auto w-full object-contain select-none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-12 md:py-16">
        <div className="container-site">
          <div className="grid grid-cols-2 gap-0 divide-x divide-y divide-white/[0.06] md:grid-cols-4 md:divide-y-0">
            {trustStats.map((item) => (
              <div key={item.figure} className="group px-5 py-8 text-center md:px-8 md:py-6">
                <p className="font-black tracking-tight text-[clamp(2rem,5vw,3.25rem)] leading-none text-[var(--color-text)] transition duration-300 group-hover:text-transparent group-hover:bg-gradient-to-br group-hover:from-[var(--color-text)] group-hover:via-[var(--color-primary)] group-hover:to-[var(--color-secondary)] group-hover:bg-clip-text">
                  {item.figure}
                </p>
                <p className="mono-label mx-auto mt-3 max-w-[15rem] text-[var(--color-text-muted)] transition group-hover:text-[var(--color-text)]">
                  {item.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section">
        <div className="container-site">
          <div className="grid gap-12 md:grid-cols-12 md:items-start md:gap-14">
            <div className="md:col-span-7">
              <p className="mono-label text-[var(--color-secondary)]">The diagnosis</p>
              <h2 className="headline-title mt-2 text-[var(--color-text)]">
                THE PROBLEM ISN&apos;T
                <br />
                <span className={sectionAccentGradientPink}>
                  JUST MARKETING.
                </span>
              </h2>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--color-text-muted)]">
                Most brands don&apos;t have an ads issue. They have disconnected systems: weak conversion architecture, fragmented journeys, manual operations, and slow execution loops.
              </p>
            </div>
            <div className="relative mx-auto w-full max-w-md md:col-span-5">
              <div className="blob-shape relative z-0 aspect-square w-full bg-gradient-to-tr from-[var(--color-primary)]/20 via-[var(--color-secondary)]/15 to-transparent" />
              <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center p-4">
                <Image
                  src="/marketing-element.png"
                  alt=""
                  width={640}
                  height={640}
                  className="h-auto w-[min(100%,88%)] max-w-[300px] object-contain opacity-[0.92] select-none sm:max-w-[340px]"
                  sizes="(max-width: 768px) 90vw, 340px"
                  aria-hidden
                />
              </div>
            </div>
            <div className="md:col-span-12">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {problemCards.map((card) => (
                  <article
                    key={card.lines[0]}
                    className="problem-glass-card group relative overflow-hidden rounded-2xl border border-white/[0.1] bg-white/[0.04] p-8 text-left backdrop-blur-xl"
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
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-[4.5rem]">
        <div className="container-site">
          <div className="border-b border-white/10 pb-8 md:pb-10">
            <div className="grid gap-8 md:grid-cols-12 md:items-center md:gap-10">
              <div className="md:col-span-6 lg:col-span-7">
                <p className="mono-label text-[var(--color-secondary)]">Outcomes over output</p>
                <h2 className="headline-title mt-2 max-w-xl text-[var(--color-text)]">
                  BUSINESS IMPACT. NOT SERVICE
                  <br />
                  <span className={sectionAccentGradientBlue}>
                    CHECKLISTS.
                  </span>
                </h2>
                <p className="mt-4 max-w-xl text-xl leading-relaxed text-[var(--color-text-muted)] md:text-[1.35rem] md:leading-relaxed">
                  We focus on the metrics that move the needle. Everything we do is engineered for compounding results.
                </p>
              </div>
              <div className="relative md:col-span-6 lg:col-span-5">
                <div
                  className="pointer-events-none absolute -inset-4 rounded-[45%] opacity-90 blur-3xl md:-inset-8"
                  style={{
                    background:
                      "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(120, 160, 255, 0.22), transparent 65%), radial-gradient(ellipse 55% 50% at 70% 40%, rgba(180, 140, 255, 0.14), transparent 60%)",
                  }}
                  aria-hidden
                />
                <div className="relative z-10 flex justify-center md:justify-end">
                  <Image
                    src="/business-impact-element.png"
                    alt=""
                    width={720}
                    height={560}
                    className="h-auto w-full max-w-[min(100%,420px)] object-contain select-none md:max-w-[min(100%,480px)]"
                    sizes="(max-width: 768px) 100vw, 480px"
                    aria-hidden
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 pt-8 md:grid-cols-2 md:gap-x-0 md:gap-y-10 lg:grid-cols-4 lg:gap-y-0 lg:pt-12">
            {businessImpactCards.map((card, index) => {
              const borders =
                index === 1
                  ? "md:border-l md:border-white/10 md:pl-6 lg:pl-6 xl:pl-8"
                  : index === 2
                    ? "md:border-t md:border-white/10 md:pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-6 xl:pl-8"
                    : index === 3
                      ? "md:border-t md:border-l md:border-white/10 md:pt-8 md:pl-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-6 xl:pl-8"
                      : "";
              return (
              <article
                key={card.num}
                className={`relative flex flex-col ${borders}`}
              >
                <span
                  className="pointer-events-none absolute -left-6 -top-8 z-0 h-36 w-36 rounded-full opacity-[0.34] blur-3xl sm:-left-8 sm:-top-10 sm:h-40 sm:w-40 md:opacity-[0.38]"
                  style={{ backgroundColor: card.accent }}
                  aria-hidden
                />
                <div className="relative z-10 flex w-full flex-1 flex-col">
                  <span
                    className="text-4xl font-black tabular-nums tracking-tight"
                    style={{ color: card.accent, fontFamily: "var(--font-geist-mono), monospace" }}
                  >
                    {card.num}
                  </span>
                  <div className="relative mt-4 inline-flex">
                    <span
                      className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white/[0.14] bg-[var(--color-bg)]/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                      style={{ color: card.accent }}
                    >
                      <BusinessImpactIcon name={card.icon} className="h-7 w-7" />
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-bold uppercase leading-snug tracking-[0.1em] text-[var(--color-text)] md:text-[0.95rem] lg:text-[1.05rem]">
                    {card.title}
                  </h3>
                  <p className="mt-3 flex-1 text-base leading-relaxed text-[var(--color-text-muted)] md:text-[1.0625rem]">{card.body}</p>
                  <Link
                    href="/solutions"
                    className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-[var(--color-text-muted)] transition-colors hover:border-white/35 hover:text-[var(--color-text)]"
                    aria-label={`Explore solutions — ${card.title}`}
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </Link>
                </div>
              </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-section">
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
                  accent: "#6eb5ff",
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
                  accent: "#5ecfe8",
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
      </section>

      <section className="py-section">
        <div className="container-site">
          <p className="mono-label mb-2 text-center text-[var(--color-secondary)]">Capabilities</p>
          <h2 className="display-title overflow-visible px-2 text-center sm:px-3">
            <span className="text-white/15">OUR </span>
            <span className={`inline-block pb-[0.04em] pr-[0.14em] ${sectionAccentGradientBlue}`}>
              ECOSYSTEM
            </span>
          </h2>
          <div className="mt-10 space-y-6 md:mt-12 md:space-y-7">
            {clusters.map(([title, desc], index) => {
              const accentVar =
                index % 3 === 0
                  ? "var(--color-primary)"
                  : index % 3 === 1
                    ? "var(--color-secondary)"
                    : "var(--color-tertiary)";
              const asym = [
                {
                  blobSpan: "md:col-span-5",
                  textSpan: "md:col-span-7",
                  blobShift: "-translate-y-0.5 md:-translate-y-1",
                  textShift: "",
                },
                {
                  blobSpan: "md:col-span-6",
                  textSpan: "md:col-span-6",
                  blobShift: "translate-y-0.5 md:translate-y-2",
                  textShift: "",
                },
                {
                  blobSpan: "md:col-span-7",
                  textSpan: "md:col-span-5",
                  blobShift: "md:translate-y-1",
                  textShift: "",
                },
                {
                  blobSpan: "md:col-span-5",
                  textSpan: "md:col-span-7",
                  blobShift: "translate-y-0.5 md:-translate-y-1",
                  textShift: "",
                },
              ][index % 4];
              const blobOrder = index % 2 === 0 ? "order-1" : "order-2";
              const textOrder = index % 2 === 0 ? "order-2" : "order-1";
              const blobMdOrder = index % 2 === 0 ? "md:order-1" : "md:order-2";
              const textMdOrder = index % 2 === 0 ? "md:order-2" : "md:order-1";
              /** Pull copy toward the gutter next to the blob (LTR). */
              const textEdge =
                index % 2 === 0 ? "md:justify-self-start" : "md:justify-self-end";
              /** Centered in the column so blob + heading aren’t glued together. */
              const blobPlacement = "justify-center md:justify-self-center";
              return (
                <div key={title} className="grid grid-cols-1 items-center gap-4 md:grid-cols-12 md:gap-x-6 md:gap-y-0 lg:gap-x-8">
                  <div
                    className={`relative flex min-h-0 ${blobPlacement} ${blobOrder} ${blobMdOrder} ${asym.blobSpan} ${asym.blobShift}`}
                  >
                    <div className="relative flex h-[min(64vw,15rem)] w-[min(64vw,15rem)] items-center justify-center sm:h-64 sm:w-64 md:h-[17rem] md:w-[17rem] lg:h-80 lg:w-80">
                      <div className="blob-shape relative z-10 h-full w-full min-h-0 min-w-0 overflow-hidden bg-gradient-to-tr from-[var(--color-primary)]/20 via-[var(--color-secondary)]/15 to-transparent md:min-h-[6rem]">
                        <Image
                          src={ecosystemClusterImages[index]}
                          alt=""
                          fill
                          sizes="(max-width: 640px) 64vw, (max-width: 1024px) 17rem, 20rem"
                          className="object-contain p-[8%] select-none sm:p-[10%] md:p-[12%]"
                          priority={index === 0}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className={`flex min-w-0 w-full max-w-full flex-col md:w-fit ${textOrder} ${textMdOrder} ${asym.textSpan} ${asym.textShift} ${textEdge}`}
                  >
                    <div className="w-fit max-w-full">
                      <h3
                        className="text-balance text-[clamp(1.5rem,4.2vw,2.45rem)] font-extrabold uppercase leading-tight tracking-[0.04em] md:text-[clamp(1.7rem,3.4vw,2.85rem)]"
                        style={{ color: accentVar }}
                      >
                        {title}
                      </h3>
                      <div className="w-full min-w-0">
                        <p className="mt-2 text-pretty text-lg leading-relaxed text-[var(--color-text-muted)] md:mt-3 break-words">
                          {desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-10 flex justify-center">
            <Button href="/solutions">
              Explore Solutions Architecture
            </Button>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-section">
        <div
          className="pointer-events-none absolute bottom-[2%] left-[-6%] h-[min(58vw,20rem)] w-[min(58vw,20rem)] rounded-full opacity-[0.22] blur-[80px] sm:h-[min(48vw,17rem)] sm:w-[min(48vw,17rem)] md:blur-[92px]"
          style={{
            background:
              "radial-gradient(circle at 38% 42%, rgba(208, 188, 255, 0.5), rgba(120, 90, 200, 0.18) 42%, rgba(76, 215, 246, 0.14) 58%, transparent 72%)",
          }}
          aria-hidden
        />
        <div className="container-site relative z-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
            <div className="flex max-w-xl flex-col lg:col-span-5">
              <p className="mono-label text-[var(--color-secondary)]">Vertical depth</p>
              <h2 className="mt-2 text-[clamp(2rem,4.8vw,3.35rem)] font-bold uppercase leading-[1.08] tracking-[-0.035em] text-[var(--color-text)]">
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
      </section>

      <section className="relative z-[1] overflow-x-hidden py-section">
        <div className="container-site text-center">
          <p className="mono-label mb-2 text-[var(--color-secondary)]">Stack & integrations</p>
          <h2 className="headline-title text-[var(--color-text)]">
            MODERN TECHNOLOGY
            <br />
            <span className={sectionAccentGradientBlue}>
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
      </section>

      <section className="py-section">
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
              <AiOrbLottie />
              <span className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center text-[clamp(5rem,18vw,9rem)] font-black leading-none text-[var(--color-primary)]/40 md:text-[clamp(7rem,14vw,11rem)] lg:text-[clamp(8rem,12vw,13rem)]">
                AI
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-section">
        <div className="container-site">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="mono-label text-[var(--color-secondary)]">Case studies</p>
              <h2 className="headline-title mt-2">
                OUTCOMES YOU CAN
                <br />
                <span className={sectionAccentGradientBlue}>TRACE.</span>
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[var(--color-text-muted)]">
                Each engagement ships with measurable baselines, instrumentation, and a narrative your board can repeat—not vanity redesigns.
              </p>
            </div>
            <Button href="/work" variant="secondary">
              View all work
            </Button>
          </div>

          <article className="mt-12 overflow-hidden rounded-2xl border border-white/[0.08] bg-[var(--color-surface)] shadow-[0_24px_80px_-24px_rgba(0,0,0,0.55)] md:grid md:min-h-[22rem] md:grid-cols-12 md:rounded-3xl">
            <Link
              href={featuredCaseStudy.href}
              className="group/media relative block aspect-[16/11] min-h-[14rem] md:col-span-7 md:aspect-auto md:min-h-0"
              aria-label={`Open case study: ${featuredCaseStudy.title}`}
            >
              <Image
                src={featuredCaseStudy.coverImage}
                alt=""
                fill
                className="object-cover transition duration-700 ease-out group-hover/media:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 58vw"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/25 to-transparent md:bg-gradient-to-r md:from-transparent md:via-[var(--color-bg)]/50 md:to-[var(--color-bg)]"
                aria-hidden
              />
              <div className="pointer-events-none absolute left-4 top-4 flex flex-wrap gap-2 md:left-6 md:top-6" aria-hidden>
                {featuredCaseStudy.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 bg-black/35 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-[var(--color-text)] backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="pointer-events-none absolute bottom-4 left-4 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-[var(--color-secondary)] md:bottom-6 md:left-6">
                {featuredCaseStudy.sector}
              </span>
            </Link>

            <div className="flex flex-col justify-center border-t border-white/[0.06] p-6 sm:p-8 md:col-span-5 md:border-l md:border-t-0 md:p-10">
              <p className="mono-label text-[var(--color-text-muted)]">Featured</p>
              <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="text-4xl font-black tabular-nums tracking-tight text-[var(--color-text)] sm:text-5xl">{featuredCaseStudy.stat}</span>
                <span className="max-w-[12rem] text-sm font-medium leading-snug text-[var(--color-text-muted)]">{featuredCaseStudy.statLabel}</span>
              </div>
              <h3 className="mt-5 text-2xl font-bold capitalize leading-tight tracking-tight text-[var(--color-text)] sm:text-3xl">
                {featuredCaseStudy.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[var(--color-text-muted)]">{featuredCaseStudy.excerpt}</p>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/[0.06] pt-6 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                <span>{featuredCaseStudy.scope}</span>
                <span className="text-[var(--color-secondary)]">{featuredCaseStudy.timeline}</span>
              </div>
              <Link
                href={featuredCaseStudy.href}
                className="group/cta mt-8 inline-flex items-center gap-2 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)] transition hover:text-[var(--color-primary-strong)]"
              >
                Read case study
                <span className="transition-transform duration-300 group-hover/cta:translate-x-1" aria-hidden>
                  →
                </span>
              </Link>
            </div>
          </article>

          <div className="mt-6 grid gap-6 md:grid-cols-2 md:gap-8">
            {caseStudyPreviews.map((study) => (
              <article
                key={study.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[var(--color-surface)] shadow-[0_16px_48px_-20px_rgba(0,0,0,0.45)] transition hover:border-white/[0.12]"
              >
                <Link
                  href={study.href}
                  className="group/media relative aspect-[16/10] w-full overflow-hidden"
                  aria-label={`Open case study: ${study.title}`}
                >
                  <Image
                    src={study.coverImage}
                    alt=""
                    fill
                    className="object-cover transition duration-700 ease-out group-hover/media:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 45vw"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-transparent opacity-90"
                    aria-hidden
                  />
                  <div className="pointer-events-none absolute left-4 top-4 flex flex-wrap gap-2" aria-hidden>
                    {study.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/12 bg-black/40 px-2.5 py-0.5 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-[var(--color-text)] backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <p className="mono-label text-[var(--color-secondary)]">{study.sector}</p>
                    <span className="shrink-0 text-right font-mono text-[0.65rem] uppercase tracking-[0.14em] text-[var(--color-text-muted)]">
                      {study.timeline}
                    </span>
                  </div>
                  <div className="mt-3 flex flex-wrap items-baseline gap-2">
                    <span className="text-3xl font-black tabular-nums text-[var(--color-text)]">{study.stat}</span>
                    <span className="text-xs font-medium leading-snug text-[var(--color-text-muted)]">{study.statLabel}</span>
                  </div>
                  <h3 className="mt-3 text-xl font-bold capitalize leading-snug tracking-tight text-[var(--color-text)]">{study.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-text-muted)]">{study.excerpt}</p>
                  <p className="mt-4 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-[var(--color-text-muted)]">{study.scope}</p>
                  <Link
                    href={study.href}
                    className="group/cta mt-5 inline-flex items-center gap-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-primary)] transition hover:text-[var(--color-primary-strong)]"
                  >
                    View case study
                    <span className="transition-transform duration-300 group-hover/cta:translate-x-1" aria-hidden>
                      →
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section">
        <div className="container-site">
          <p className="mono-label text-[var(--color-secondary)]">By the numbers</p>
          <h2 className="headline-title mt-2 text-[var(--color-text)]">
            METRICS.{" "}
            <span className={`inline-block ${sectionAccentGradientPink}`}>
              NOT VIBES.
            </span>
          </h2>
          <div className="mt-12 overflow-hidden rounded-2xl border border-white/[0.1] bg-[var(--color-surface)]/40 shadow-[0_24px_80px_-32px_rgba(0,0,0,0.65)] backdrop-blur-sm md:mt-14">
            <div className="grid grid-cols-2 divide-x divide-y divide-white/[0.08] md:grid-cols-4 md:divide-y-0">
              {metrics.map((metric) => (
                <article
                  key={metric.label}
                  className="group flex flex-col items-center justify-center bg-[var(--color-bg)]/90 px-4 py-12 text-center transition-colors duration-300 hover:bg-[var(--color-surface-hi)]/35 sm:px-8 sm:py-14 md:min-h-[13rem] md:py-16"
                >
                  <span
                    className="font-black tabular-nums tracking-[-0.045em] text-[var(--color-text)] transition duration-300 group-hover:text-transparent group-hover:bg-gradient-to-br group-hover:from-[var(--color-text)] group-hover:via-[var(--color-primary)] group-hover:to-[var(--color-secondary)] group-hover:bg-clip-text"
                    style={{ fontSize: "clamp(2.35rem, 7vw, 4rem)", lineHeight: 0.9 }}
                  >
                    {metric.figure}
                  </span>
                  <p className="mono-label mt-5 max-w-[13rem] text-[0.62rem] leading-relaxed text-[var(--color-text-muted)] transition group-hover:text-[var(--color-text)]/88 sm:text-[0.65rem]">
                    {metric.label}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-section">
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
      </section>

      <section className="py-section">
        <div className="container-site">
          <p className="mono-label mb-4 text-[var(--color-secondary)]">Resources</p>
          <div className="overflow-hidden rounded-3xl border border-[var(--color-primary)]/35 bg-[var(--color-primary)]/10 p-8 md:p-10 lg:p-12">
            <div className="grid gap-10 md:grid-cols-12 md:items-center md:gap-12">
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
              <div className="flex justify-center md:col-span-5 md:justify-end">
                <div className="relative w-full max-w-[min(100%,400px)]">
                  <Image
                    src="/resources-element.png"
                    alt=""
                    width={720}
                    height={560}
                    className="h-auto w-full object-contain select-none"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HomeFaqAccordion />

      <section className="pb-20">
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
      </section>
    </>
  );
}
