import Image from "next/image";
import { SolutionCardTitle } from "@/components/sections/SolutionCardTitle";
import { WhyColumnBridgeStack } from "@/components/sections/WhyColumnBridgeStack";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { AnimatedMetricFigure } from "@/components/motion/AnimatedMetricFigure";
import { SlideIn } from "@/components/motion/SlideIn";
import { AiOrbLottie } from "@/components/sections/AiOrbLottie";
import { CaseStudiesScrollRail } from "@/components/sections/CaseStudiesScrollRail";
import { EvidenceTestimonialsSlider } from "@/components/sections/EvidenceTestimonialsSlider";
import { HomeFaqAccordion } from "@/components/sections/HomeFaqAccordion";
import { HeroBackgroundVideo } from "@/components/sections/HeroBackgroundVideo";
import { HeroTrustRotator } from "@/components/sections/HeroTrustRotator";
import { HeroTypewriterHeadline } from "@/components/sections/HeroTypewriterHeadline";
import { HowWeWorkSteps } from "@/components/sections/HowWeWorkSteps";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

type SolutionIconName =
  | "code"
  | "layers"
  | "sparkles"
  | "signal"
  | "ledger"
  | "headset";

function SolutionIcon({ name, className }: { name: SolutionIconName; className?: string }) {
  const cls = className ?? "h-6 w-6";
  const common = {
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "code":
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden {...common}>
          <path d="M8 9l-3 3 3 3M16 9l3 3-3 3M13.5 6l-3 12" />
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
    case "sparkles":
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden {...common}>
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
          <circle cx="12" cy="12" r="3.25" />
        </svg>
      );
    case "signal":
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden {...common}>
          <circle cx="12" cy="12" r="2" />
          <path d="M7.5 7.5a7 7 0 0 0 0 9M16.5 7.5a7 7 0 0 1 0 9M4.5 4.5a11.5 11.5 0 0 0 0 15M19.5 4.5a11.5 11.5 0 0 1 0 15" />
        </svg>
      );
    case "ledger":
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden {...common}>
          <path d="M4 5h16v14H4V5z" />
          <path d="M8 9h8M8 13h5" />
          <path d="M16 3v4M8 3v4" />
        </svg>
      );
    case "headset":
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden {...common}>
          <path d="M4 14a4 4 0 0 1 4-4h1M20 14a4 4 0 0 0-4-4h-1" />
          <path d="M4 14v3a2 2 0 0 0 2 2h1M20 14v3a2 2 0 0 1-2 2h-1" />
          <path d="M9 10V8a3 3 0 0 1 6 0v2" />
        </svg>
      );
    default:
      return null;
  }
}

function SolutionTagIcon({ variant }: { variant: number }) {
  const common = {
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  const cls = "h-3 w-3";
  switch (variant % 4) {
    case 0:
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden {...common}>
          <path d="M4 7h16M4 12h16M4 17h10" />
        </svg>
      );
    case 1:
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden {...common}>
          <rect x="5" y="4" width="14" height="16" rx="1" />
          <path d="M9 9h6M9 13h4" />
        </svg>
      );
    case 2:
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden {...common}>
          <circle cx="11" cy="11" r="5" />
          <path d="M15 15l4 4" />
        </svg>
      );
    case 3:
    default:
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden {...common}>
          <rect x="4" y="4" width="7" height="7" />
          <rect x="13" y="4" width="7" height="7" />
          <rect x="4" y="13" width="7" height="7" />
          <path d="M16.5 16.5h3.5v3.5" />
        </svg>
      );
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

type IndustryIconId =
  | "home"
  | "legal"
  | "construction"
  | "cart"
  | "saas"
  | "education"
  | "finance"
  | "logistics"
  | "hospitality"
  | "nonprofit"
  | "manufacturing"
  | "enterprise"
  | "startup";

function IndustryIcon({ id, className }: { id: IndustryIconId; className?: string }) {
  const cls = className ?? "h-5 w-5";
  const common = { fill: "none" as const, stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (id) {
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
    case "logistics":
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden {...common}>
          <path d="M3 7h11v8H3V7zM14 10h4l3 3v2h-7v-5z" />
          <circle cx="7.5" cy="17.5" r="1.5" />
          <circle cx="17.5" cy="17.5" r="1.5" />
        </svg>
      );
    case "hospitality":
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden {...common}>
          <path d="M4 10V20h16V10M2 20h20M12 10V4M8 7h8" />
        </svg>
      );
    case "nonprofit":
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden {...common}>
          <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.5-7 10-7 10z" />
        </svg>
      );
    case "manufacturing":
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden {...common}>
          <path d="M2 20h20M5 20V9l5-4 4 3 5-4v16" />
          <path d="M9 13h2v7H9zM13 11h2v9h-2z" />
        </svg>
      );
    case "enterprise":
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden {...common}>
          <path d="M4 20V8l8-4 8 4v12H4z" />
          <path d="M9 20v-6h6v6M9 10h.01M15 10h.01" />
        </svg>
      );
    case "startup":
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden {...common}>
          <path d="M12 3l2.2 6.8H21l-5.5 4 2.1 6.7L12 16.5 6.4 20.5l2.1-6.7L3 9.8h6.8L12 3z" />
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
  /** Row-specific teal gradient for hover label (no `text-transparent` on the live copy). */
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
      className="group flex items-center gap-3 px-4 py-3.5 sm:gap-4 sm:px-5 sm:py-5"
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
  /** Below hero: alternate light-teal and deep-teal headline accents. */
  const sectionAccentGradientLight =
    "bg-gradient-to-r from-[#0FEDC6] via-[#03B5A7] to-[#5EEAD4] bg-clip-text italic text-transparent";
  const sectionAccentGradientDeep =
    "bg-gradient-to-r from-[#7AF8E8] via-[#03B5A7] to-[#023E3E] bg-clip-text italic text-transparent";

  const trustStats = [
    { figure: "120+", caption: "Systems launched" },
    { figure: "11", caption: "Industries served" },
    { figure: "24/7", caption: "Delivery coverage" },
    { figure: "ONE", caption: "AI + product + growth team" },
  ];
  const solutionCards = [
    {
      icon: "code" as const,
      accent: "#0FEDC6",
      shortTitle: "Technology",
      description:
        "Custom software, web and mobile apps, APIs, and cloud—infrastructure built for growth and scale.",
      tags: ["Custom Software", "Web & Mobile", "API Development", "Cloud Solutions"],
    },
    {
      icon: "layers" as const,
      accent: "#03B5A7",
      shortTitle: "Business Systems",
      description:
        "ERP, CRM, and HRM platforms that connect people, processes, and data across your organization.",
      tags: ["ERP Implementation", "CRM Systems", "HRM Platforms", "Business Reporting"],
    },
    {
      icon: "sparkles" as const,
      accent: "#5EEAD4",
      shortTitle: "AI & Automation",
      description:
        "Workflow automation, AI assistants, and analytics that reduce manual work and sharpen decisions.",
      tags: ["AI Chatbots", "Workflow Automation", "KPI Dashboards", "Data Analytics"],
    },
    {
      icon: "signal" as const,
      accent: "#7AF8E8",
      shortTitle: "Digital Growth",
      description:
        "Websites, ecommerce, SEO, and performance marketing—built for visibility, conversion, and speed.",
      tags: ["Website Development", "E-Commerce", "SEO & Performance", "Lead Generation"],
    },
    {
      icon: "ledger" as const,
      accent: "#2DD4BF",
      shortTitle: "Financial",
      description:
        "Bookkeeping, reporting, and cash-flow visibility that give leadership confidence to move faster.",
      tags: ["Financial Reporting", "Cash Flow", "Budgeting", "Management Reporting"],
    },
    {
      icon: "headset" as const,
      accent: "#99F6E4",
      shortTitle: "Outsourcing",
      description:
        "Managed support, back-office, and remote teams that scale operations without adding overhead.",
      tags: ["Customer Support", "Back Office", "Virtual Assistants", "Remote Teams"],
    },
  ];
  const businessImpactStyle = [
    { icon: "trending-up" as const, accent: "#03B5A7" },
    { icon: "zap" as const, accent: "#0FEDC6" },
    { icon: "settings" as const, accent: "#5EEAD4" },
    { icon: "layers" as const, accent: "#023E3E" },
  ];
  const businessImpactCards = [
    "Increased Operational Efficiency",
    "Reduced Costs",
    "Improved Productivity",
    "Stronger Customer Relationships",
    "Better Data Visibility",
    "Faster Decision-Making",
    "Improved Workforce Management",
    "Enhanced Scalability",
    "Increased Revenue Opportunities",
    "Sustainable Business Growth",
  ].map((title, index) => ({
    num: String(index + 1).padStart(2, "0"),
    title: title.toUpperCase(),
    ...businessImpactStyle[index % businessImpactStyle.length]!,
  }));
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
  const industryStylePresets: Pick<
    IndustryGridEntry,
    "labelGradient" | "iconHover" | "chevronHover"
  >[] = [
    {
      labelGradient: ["#7AF8E8", "#0FEDC6", "#03B5A7"],
      iconHover: "group-hover:text-[#7AF8E8]",
      chevronHover: "group-hover:text-[#03B5A7]",
    },
    {
      labelGradient: ["#0FEDC6", "#03B5A7", "#023E3E"],
      iconHover: "group-hover:text-[#0FEDC6]",
      chevronHover: "group-hover:text-[#023E3E]",
    },
    {
      labelGradient: ["#5EEAD4", "#03B5A7", "#0D6B63"],
      iconHover: "group-hover:text-[#5EEAD4]",
      chevronHover: "group-hover:text-[#0D6B63]",
    },
    {
      labelGradient: ["#99F6E4", "#2DD4BF", "#03B5A7"],
      iconHover: "group-hover:text-[#99F6E4]",
      chevronHover: "group-hover:text-[#03B5A7]",
    },
    {
      labelGradient: ["#7AF8E8", "#03B5A7", "#023E3E"],
      iconHover: "group-hover:text-[#7AF8E8]",
      chevronHover: "group-hover:text-[#023E3E]",
    },
    {
      labelGradient: ["#0FEDC6", "#03B5A7", "#029E92"],
      iconHover: "group-hover:text-[#0FEDC6]",
      chevronHover: "group-hover:text-[#029E92]",
    },
    {
      labelGradient: ["#5EEAD4", "#0FEDC6", "#03B5A7"],
      iconHover: "group-hover:text-[#5EEAD4]",
      chevronHover: "group-hover:text-[#03B5A7]",
    },
  ];
  const industryGrid: IndustryGridEntry[] = (
    [
      { label: "Technology", slug: "technology", icon: "saas" as const },
      { label: "Professional Services", slug: "professional-services", icon: "legal" as const },
      { label: "Retail", slug: "retail", icon: "cart" as const },
      { label: "E-Commerce", slug: "ecommerce", icon: "cart" as const },
      { label: "Manufacturing", slug: "manufacturing", icon: "manufacturing" as const },
      { label: "Logistics", slug: "logistics", icon: "logistics" as const },
      { label: "Construction", slug: "construction", icon: "construction" as const },
      { label: "Real Estate", slug: "real-estate", icon: "home" as const },
      { label: "Education", slug: "education", icon: "education" as const },
      { label: "Financial Services", slug: "financial-services", icon: "finance" as const },
      { label: "Hospitality", slug: "hospitality", icon: "hospitality" as const },
      { label: "Nonprofits", slug: "nonprofits", icon: "nonprofit" as const },
      { label: "Startups", slug: "startups", icon: "startup" as const },
      { label: "Enterprise Organizations", slug: "enterprise", icon: "enterprise" as const },
    ] as const
  ).map((item, index) => ({
    ...item,
    ...industryStylePresets[index % industryStylePresets.length]!,
  }));
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
    "bg-gradient-to-r from-[#0FEDC6] via-[#03B5A7] to-[#023E3E] bg-clip-text text-transparent";
  const metrics = [
    { figure: "$18M+", label: "Pipeline influenced" },
    { figure: "87", label: "Systems launched" },
    { figure: "36%", label: "Avg. conversion lift" },
    { figure: "99.95%", label: "Infra uptime" },
  ] as const;
  const techStripLogos = Array.from({ length: 15 }, (_, i) => `/${i + 1}.webp`);

  return (
    <>
      <section className="relative isolate min-h-screen overflow-hidden bg-black pb-section text-white">
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/25 to-black" />
          <div className="absolute inset-x-0 top-0 z-[1] h-[var(--header-height)] bg-gradient-to-b from-black via-black/85 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 z-[1] h-[clamp(8rem,28vh,14rem)] bg-gradient-to-t from-black via-black/85 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_48%,rgba(3,181,167,0.1),transparent_55%)]" />
          <div className="hero-bg-sculpture absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2">
            <HeroBackgroundVideo className="hero-bg-sculpture-video h-full w-full select-none object-contain object-[center_42%]" />
          </div>
          <div className="hero-video-tint absolute inset-0 z-[1]" aria-hidden />
          <div className="hero-film-grain absolute inset-0 z-[2]" aria-hidden />
        </div>

        <SlideIn className="relative z-10 flex min-h-screen flex-col px-4 pb-10 pt-[var(--header-height)] sm:px-5 md:px-8 md:pb-14" direction="up">
          <div className="container-site flex flex-1 flex-col">
            <div className="flex flex-1 flex-col items-center justify-center px-1 pb-12 pt-6 md:pb-16 md:pt-8">
              <HeroTypewriterHeadline />
            </div>

            <div className="mt-auto grid w-full max-w-6xl grid-cols-1 gap-10 pt-10 md:mx-auto md:grid-cols-3 md:items-end md:gap-8 md:pt-12">
              <p className="body-copy max-w-xl text-pretty text-center text-[var(--text-secondary)] md:order-2 md:justify-self-center md:text-center">
              Column Bridge helps businesses streamline operations, modernize technology, strengthen customer relationships, and accelerate growth through integrated business solutions.
              </p>
              <div className="flex w-full flex-col items-center md:contents">
                <div className="flex w-full max-w-md flex-col items-center gap-6 md:order-1 md:max-w-none md:items-start md:gap-3 md:justify-self-start">
                  <HeroTrustRotator stats={trustStats} intervalMs={4000} />
                  <Link
                    href="/contact"
                    className="hero-cta-outline inline-flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-teal)] md:hidden"
                  >
                    <span className="hero-cta-outline-inner mono-label text-white">Contact us</span>
                  </Link>
                </div>
                <div className="hidden shrink-0 md:order-3 md:flex md:justify-self-end">
                  <Link
                    href="/contact"
                    className="hero-cta-outline inline-flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-teal)]"
                  >
                    <span className="hero-cta-outline-inner mono-label text-white">Contact us</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SlideIn>
      </section>

      <section className="overflow-x-clip bg-black py-section">
        <SlideIn className="w-full" direction="up">
          <div className="container-site">
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div className="section-heading-wrap">
                <p className="mono-label text-[var(--color-secondary)]">Work</p>
                <h2 className="headline-title mt-2">
                  WORK WE{" "}
                  <span className={sectionAccentGradientDeep}>DID.</span>
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
                          <div className="grid shrink-0 grid-cols-1 gap-4 max-md:gap-5 sm:grid-cols-2 sm:gap-6 md:flex md:w-[min(100%,11.5rem)] md:flex-col md:justify-end md:gap-8 md:self-stretch">
                            <div className="text-left md:text-right">
                              <p
                                className={`text-3xl font-black tabular-nums tracking-tight sm:text-4xl ${caseStudyStatGradient}`}
                              >
                                {study.stat}
                              </p>
                              <p className="mt-1 text-xs font-medium leading-snug text-white/75 max-md:max-w-none md:max-w-[11rem] md:ml-auto">
                                {study.statLabel}
                              </p>
                            </div>
                            <div className="text-left md:text-right">
                              <p
                                className={`text-3xl font-black tabular-nums tracking-tight sm:text-4xl ${caseStudyStatGradient}`}
                              >
                                {study.stat2}
                              </p>
                              <p className="mt-1 text-xs font-medium leading-snug text-white/75 max-md:max-w-none md:max-w-[11rem] md:ml-auto">
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

      <section className="relative isolate overflow-x-clip bg-black py-section text-[var(--color-text)]">
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
          <div
            className="absolute inset-0 opacity-[0.35] mix-blend-screen"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 18% 48%, rgba(15,237,198,0.22), transparent 55%), radial-gradient(ellipse 55% 50% at 88% 62%, rgba(3,181,167,0.14), transparent 52%)",
            }}
          />
        </div>

        <SlideIn className="relative z-10 w-full min-w-0" direction="left">
        <div className="container-site min-w-0">
          <div className="section-heading-wrap">
            <p className="mono-label text-[var(--color-secondary)]">Our solutions</p>
            <h2 className="mt-2 text-balance headline-title text-[var(--color-text)]">
              OUR{" "}
              <span className={sectionAccentGradientDeep}>SOLUTIONS.</span>
            </h2>
          </div>

          <div className="relative z-10 mt-10 min-w-0 md:mt-16">
            <div className="solutions-cards-stack grid min-w-0 grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
              {solutionCards.map((card, index) => (
                <Link
                  key={card.shortTitle}
                  href="/solutions"
                  className="solution-glass-card problem-glass-card group relative isolate block min-w-0 max-w-full overflow-hidden rounded-xl border border-white/[0.1] bg-white/[0.04] text-left backdrop-blur-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-teal)]"
                  style={{ "--problem-accent": card.accent } as React.CSSProperties}
                >
                  <span className="solution-card-index" aria-hidden>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="solution-card-grain" aria-hidden />
                  <div className="problem-card-ambient" aria-hidden />
                  <div className="problem-card-sheen" aria-hidden />
                  <div className="solution-card-inner relative z-10">
                    <div
                      className="solution-card-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-md border bg-black/20"
                      style={{ borderColor: `${card.accent}55`, color: card.accent }}
                    >
                      <SolutionIcon name={card.icon} className="h-5 w-5" />
                    </div>
                    <div className="solution-card-body">
                      <SolutionCardTitle text={card.shortTitle} accent={card.accent} />
                      <p className="solution-card-description">{card.description}</p>
                    </div>
                    <div className="solution-card-footer">
                      <ul className="solution-card-tags">
                        {card.tags.map((tag, tagIndex) => (
                          <li key={tag} className="solution-card-tag">
                            <span
                              className="solution-card-tag-icon"
                              style={{ color: card.accent }}
                              aria-hidden
                            >
                              <SolutionTagIcon variant={tagIndex} />
                            </span>
                            <span>{tag}</span>
                          </li>
                        ))}
                      </ul>
                      <span className="solution-card-arrow" aria-hidden>
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-8 md:mt-12">
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
        </SlideIn>
      </section>

      <WhyColumnBridgeStack sectionAccentClass={sectionAccentGradientDeep} />

      {/* <section className="relative isolate overflow-hidden bg-black py-section text-[var(--color-text)]">
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
          <div
            className="absolute inset-0 opacity-[0.5] mix-blend-screen"
            style={{
              background:
                "radial-gradient(ellipse 75% 65% at 82% 42%, rgba(15,237,198,0.32), transparent 55%), radial-gradient(ellipse 55% 45% at 96% 58%, rgba(3,181,167,0.18), transparent 52%)",
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
        <div className="container-site">
          <div className="section-heading-wrap">
            <p className="mono-label text-[var(--color-secondary)]">The diagnosis</p>
            <h2 className="mt-2 text-balance headline-title text-[var(--color-text)] [text-shadow:0_2px_28px_rgba(0,0,0,0.72)]">
              TRUSTED PARTNER FOR
              <br />
              <span className={sectionAccentGradientLight}>BUSINESS TRANSFORMATION.</span>
            </h2>
            <div className="diagnosis-prose mt-10 md:mt-14">
              <p className="diagnosis-prose-opening">
                Modern businesses face increasing operational complexity, disconnected systems, inefficient processes, rising costs, and growing customer expectations.
              </p>
              <p className="diagnosis-prose-bridge">
                Column Bridge bridges the gap between business strategy and execution by delivering technology, automation, workforce, financial, and growth solutions that improve efficiency, visibility, and performance.
              </p>
              <p className="diagnosis-prose-closing">
                Whether you&apos;re building a startup, scaling an established company, or modernizing enterprise operations, our team delivers solutions designed to support long-term success.
              </p>
            </div>
          </div>
        </div>
        </SlideIn>
      </section> */}

      {/* <section className="relative isolate overflow-hidden bg-black py-section text-[var(--color-text)]">
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
          <div
            className="absolute inset-0 opacity-[0.55] mix-blend-screen"
            style={{
              background:
                "radial-gradient(ellipse 80% 70% at 85% 45%, rgba(15,237,198,0.3), transparent 55%), radial-gradient(ellipse 60% 50% at 100% 60%, rgba(3,181,167,0.2), transparent 50%)",
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
        <div className="container-site">
          <p className="mono-label text-[var(--color-secondary)]">Outcomes over output</p>
          <h2 className="relative z-10 mt-3 section-heading-wrap text-balance font-[family-name:var(--font-display)] text-[clamp(2.1rem,5.8vw,3.65rem)] font-bold uppercase leading-[1.02] tracking-[0.02em] [text-shadow:0_2px_28px_rgba(0,0,0,0.75)]">
            <span className="block text-white">RESULTS WE HELP</span>
            <span className={`mt-0.5 block ${sectionAccentGradientDeep}`}>DELIVER.</span>
          </h2>
          <p className="body-copy relative mt-4 max-w-2xl text-[var(--color-text-muted)] md:mt-5">
            <span className="relative z-10">
              Organizations partner with Column Bridge to achieve measurable gains across operations, customer experience, and long-term growth—not just project deliverables.
            </span>
            <span
              className="pointer-events-none absolute -inset-x-4 -inset-y-3 z-0 rounded-lg bg-gradient-to-r from-black via-black/90 to-transparent md:-inset-x-10 md:-inset-y-4 md:via-black/80 lg:from-black lg:via-black/65"
              aria-hidden
            />
          </p>

          <div className="relative mt-8 lg:mt-10">
            <span
              className="pointer-events-none absolute -inset-x-4 -bottom-4 -top-2 z-0 bg-gradient-to-r from-black from-40% via-black/92 to-transparent md:-inset-x-12 md:from-35% lg:max-w-[min(52rem,100%)] lg:from-30% lg:via-black/88"
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
                          background: `linear-gradient(135deg, ${card.accent}, rgba(15,237,198,0.85))`,
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
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
        </SlideIn>
      </section> */}

      <section className="bg-black py-section">
        <SlideIn className="w-full" direction="left">
        <div className="container-site">
          <p className="mono-label mb-2 text-center text-[var(--color-secondary)]">How we work</p>
          <h2 className="headline-title text-center text-[var(--color-text)]">
            A DELIVERY MODEL DESIGNED TO
            <br />
            <span className={sectionAccentGradientLight}>
              REDUCE RISK.
            </span>
          </h2>
          <HowWeWorkSteps />
        </div>
        </SlideIn>
      </section>

      <section className="bg-black py-section">
        <SlideIn className="w-full" direction="up">
          <div className="container-site">
            <p className="mono-label mb-2 text-center text-[var(--color-secondary)]">Capabilities</p>
            <h2 className="display-title px-2 text-center text-balance sm:px-3">
              <span className="text-white/15">OUR </span>
              <span className={`inline-block pb-[0.04em] pr-[0.14em] ${sectionAccentGradientDeep}`}>
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
                        <span className="bg-gradient-to-r from-[#0FEDC6] via-[#03B5A7] to-[#023E3E] bg-clip-text text-transparent">
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
              "radial-gradient(circle at 38% 42%, rgba(15, 237, 198, 0.4), rgba(3, 181, 167, 0.22) 42%, rgba(2, 62, 62, 0.16) 58%, transparent 72%)",
          }}
          aria-hidden
        />
        <SlideIn className="relative z-10 w-full" direction="right">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="flex min-w-0 max-w-2xl flex-col lg:col-span-5 lg:justify-center">
              <p className="mono-label text-[var(--color-secondary)]">Industries</p>
              <h2 className="industries-section-title mt-2 max-w-full text-balance text-[var(--color-text)]">
                INDUSTRIES WE{" "}
                <span className={sectionAccentGradientLight}>SERVE.</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[var(--color-text-muted)] md:mt-7 md:text-lg">
                We support organizations across a wide range of sectors, including:
              </p>
              <div className="mt-10 self-start">
                <Button href="/industries">Explore Industries</Button>
              </div>
            </div>

            <div className="relative lg:col-span-7">
              <div className="flex flex-col divide-y divide-white/[0.08] md:hidden">
                {industryGrid.map((row) => (
                  <IndustryGridRow key={row.slug} row={row} />
                ))}
              </div>
              <div className="hidden min-h-0 grid-cols-2 md:grid">
                <div className="min-w-0">
                  {industryGrid.slice(0, 7).map((row) => (
                    <IndustryGridRow key={row.slug} row={row} />
                  ))}
                </div>
                <div className="relative min-w-0">
                  <span
                    className="pointer-events-none absolute -left-px top-[12%] bottom-[12%] w-px bg-gradient-to-b from-transparent via-[var(--color-primary)] to-transparent opacity-90"
                    style={{ boxShadow: "0 0 20px rgba(15, 237, 198, 0.45)" }}
                    aria-hidden
                  />
                  {industryGrid.slice(7, 14).map((row) => (
                    <IndustryGridRow key={row.slug} row={row} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        </SlideIn>
      </section>

      <section className="relative z-[1] overflow-x-clip bg-black py-section md:overflow-x-hidden">
        <SlideIn className="w-full" direction="down">
        <div className="container-site text-center">
          <p className="mono-label mb-2 text-[var(--color-secondary)]">Stack & integrations</p>
          <h2 className="headline-title text-[var(--color-text)]">
            MODERN TECHNOLOGY
            <br />
            <span className={sectionAccentGradientDeep}>
              FOUNDATIONS.
            </span>
          </h2>
        </div>
        <TechMarquee logos={techStripLogos} />
        </SlideIn>
      </section>

      {/* <section className="overflow-x-clip bg-black py-section">
        <SlideIn className="w-full" direction="left">
        <div className="container-site grid gap-12 md:grid-cols-12 md:items-center md:gap-x-10 md:gap-y-12 lg:gap-x-14">
          <div className="md:col-span-5">
            <p className="mono-label text-[var(--color-secondary)]">Intelligent operations</p>
            <h2 className="headline-title mt-2">
              AUTOMATE THE
              <br />
              <span className={sectionAccentGradientLight}>DRAG.</span>
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
              <span className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center text-[clamp(3.5rem,14vw,9rem)] font-black leading-none text-[var(--color-primary)]/40 md:text-[clamp(7rem,14vw,11rem)] lg:text-[clamp(8rem,12vw,13rem)]">
                AI
              </span>
            </div>
          </div>
        </div>
        </SlideIn>
      </section> */}

      <section className="bg-black py-section">
        <SlideIn className="w-full" direction="right">
        <div className="container-site">
          <p className="mono-label text-[var(--color-secondary)]">By the numbers</p>
          <h2 className="headline-title mt-2 text-[var(--color-text)]">
            METRICS.{" "}
            <span className={`inline-block ${sectionAccentGradientLight}`}>
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
                        <AnimatedMetricFigure
                          figure={metric.figure}
                          delay={index * 120}
                          className={`metrics-card-figure block font-black tabular-nums ${caseStudyStatGradient}`}
                        />
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
          <EvidenceTestimonialsSlider />
        </div>
        </SlideIn>
      </section>

      <HomeFaqAccordion />

      <section className="bg-black py-section">
        <SlideIn className="w-full" direction="right">
        <div className="container-site">
          <p className="mono-label mb-4 text-[var(--color-secondary)]">Partnership</p>
          <div className="relative overflow-hidden rounded-none border border-white/[0.08] bg-[#141414] p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04),0_24px_80px_-40px_rgba(0,0,0,0.75)] sm:p-8 md:overflow-visible md:p-10 lg:p-12">
            <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" aria-hidden />
            <div className="relative z-[2] grid gap-10 md:grid-cols-12 md:items-stretch md:gap-6 lg:gap-8">
              <div className="md:col-span-7">
                <h2 className="headline-title text-balance">
                  READY TO BUILD A{" "}
                  <span className={sectionAccentGradientLight}>MORE EFFICIENT BUSINESS?</span>
                </h2>
                <p className="mt-4 max-w-2xl text-[var(--color-text-muted)]">
                  Whether you need software development, ERP implementation, CRM solutions, AI automation, marketing support, financial management, HRM systems, or outsourcing services, Column Bridge can help.
                </p>
                <div className="mt-8 flex flex-col gap-3 max-md:[&_a]:w-full sm:flex-row sm:flex-wrap">
                  <Button href="/book-strategy-call">Schedule a Consultation Today</Button>
                </div>
                <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/70 md:mt-6 md:text-base">
                  Let&apos;s build the systems, processes, and strategies that drive sustainable business growth.
                </p>
              </div>
              <div className="relative min-h-[min(52vw,13rem)] overflow-hidden md:col-span-5 md:min-h-0 md:h-full md:overflow-visible">
                <div
                  className="relative z-[3] mx-auto mt-2 h-[min(64vw,16rem)] w-[min(100%,22rem)] overflow-hidden sm:h-[min(56vw,18rem)] sm:w-[min(100%,26rem)] md:absolute md:inset-y-0 md:-right-6 md:left-auto md:mx-0 md:mt-0 md:h-[min(125%,28rem)] md:w-[min(155%,34rem)] md:max-w-[min(100vw-2rem,36rem)] md:overflow-visible md:translate-x-[4%] md:-translate-y-[8%] lg:-right-10 lg:h-[min(130%,32rem)] lg:w-[min(175%,40rem)] lg:max-w-[min(100vw-2rem,44rem)] lg:translate-x-[8%] lg:-translate-y-[10%]"
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
                    className="origin-bottom scale-100 object-contain object-bottom select-none drop-shadow-[0_28px_60px_rgba(0,0,0,0.55)] sm:scale-125 md:origin-bottom-right md:scale-[1.42] md:object-right lg:scale-[1.52]"
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
    </>
  );
}
