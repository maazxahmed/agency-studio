import Link from "next/link";
import { megaMenu } from "@/content/navigation";

function MenuArrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function MegaMenu({ section }: { section: "Solutions" | "Industries" }) {
  const groups = megaMenu[section];
  const isSolutions = section === "Solutions";
  const eyebrow = isSolutions ? "Capability lanes" : "Where we operate";
  const titleAccent = isSolutions ? "Solutions" : "Industries";
  const gridClass = groups.length > 1 ? "grid gap-6 sm:gap-8 lg:grid-cols-2" : "grid gap-6";

  return (
    <div
      className={[
        "pointer-events-none fixed inset-x-0 top-[var(--mega-top)] z-30 w-full translate-y-4 opacity-0",
        "transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        "group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100",
        "motion-reduce:duration-150 motion-reduce:group-hover:translate-y-0",
      ].join(" ")}
    >
      <div className="w-full border-b border-[var(--color-border)] bg-[var(--color-surface)] shadow-[0_16px_48px_-8px_rgba(0,0,0,0.45)]">
        <div className="container-site relative px-0 pb-10 pt-9 sm:pb-12 sm:pt-10">
          <div className="mb-8 flex flex-col gap-2 border-b border-[var(--color-border)] pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mono-label text-[0.68rem] text-[var(--color-text-muted)]">{eyebrow}</p>
              <p className="mt-2 font-black uppercase tracking-[0.12em] text-[var(--color-text)]">
                Explore <span className="italic text-[var(--color-primary)]">{titleAccent}</span>
              </p>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-[var(--color-text-muted)] sm:text-right">
              {isSolutions
                ? "Revenue engines and product foundations—picked to match how you grow."
                : "Deep context per vertical so systems feel native, not generic."}
            </p>
          </div>

          <div className={gridClass}>
            {groups.map((group, gi) => (
              <div
                key={group.title}
                className={[
                  "translate-y-3 opacity-0 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                  "group-hover:translate-y-0 group-hover:opacity-100",
                  "motion-reduce:duration-150 motion-reduce:group-hover:translate-y-0",
                  gi === 0 ? "delay-[60ms]" : "delay-[130ms]",
                ].join(" ")}
              >
                <div className="relative">
                  <div className="pointer-events-none absolute left-0 top-2 h-6 w-0.5 rounded-full bg-[var(--color-secondary)]" aria-hidden />
                  <div className="mb-5 flex items-baseline justify-between gap-3 pl-3 sm:pl-4">
                    <h4 className="mono-label text-[0.7rem] text-[var(--color-secondary)]">{group.title}</h4>
                    <span className="font-mono text-[0.65rem] tabular-nums text-[var(--color-text-muted)]/60">
                      {String(gi + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <ul className={groups.length === 1 ? "grid gap-1 sm:grid-cols-2 sm:gap-x-10" : "space-y-1"}>
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="group/link flex items-center justify-between gap-3 rounded-xl py-2.5 pl-3 pr-2 text-[0.9375rem] font-medium tracking-tight text-[var(--color-text-muted)] transition-colors duration-200 hover:text-[var(--color-text)]"
                        >
                          <span className="min-w-0 truncate">{link.label}</span>
                          <MenuArrow className="h-4 w-4 shrink-0 text-[var(--color-primary)] opacity-0 transition-all duration-200 group-hover/link:translate-x-0 group-hover/link:opacity-100 -translate-x-1" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
