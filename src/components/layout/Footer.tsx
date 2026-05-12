import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative z-10 mt-24 overflow-hidden border-t border-white/10 bg-[var(--color-bg)] pt-24">
      <div className="pointer-events-none absolute -bottom-20 left-1/3 h-72 w-2/3 rounded-full bg-[var(--color-primary)]/20 blur-[140px]" />
      <div className="container-site mb-20 flex flex-col items-start justify-between gap-12 md:flex-row md:items-end">
        <h2 className="display-title text-[var(--color-primary)] opacity-90">
          READY TO
          <br />
          DISRUPT?
        </h2>
        <div className="grid gap-3 text-right">
          {["Privacy", "Terms", "Careers", "Press"].map((item) => (
            <Link key={item} href="#" className="headline-title text-[var(--color-text-muted)] transition hover:-translate-x-2 hover:text-[var(--color-secondary)]">
              {item}
            </Link>
          ))}
        </div>
      </div>
      <div className="container-site border-t border-white/10 py-8">
        <div className="flex flex-col justify-between gap-4 text-xs uppercase tracking-[0.14em] text-[var(--color-text-muted)] md:flex-row">
          <span>©2026 Agency_Studio — Boldly Digital</span>
          <span className="text-[var(--color-secondary)]">Sys.Stat: Online</span>
        </div>
      </div>
    </footer>
  );
}
