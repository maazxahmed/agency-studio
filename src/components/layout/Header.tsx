"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { MegaMenu } from "@/components/layout/MegaMenu";
import { primaryNav, utilityNav } from "@/content/navigation";

/** Geometric X — two bars only, no ring/circle container. */
function CrossIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <span className={`relative inline-block shrink-0 ${className}`} aria-hidden>
      <span className="absolute left-1/2 top-1/2 block h-[1.5px] w-5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-current" />
      <span className="absolute left-1/2 top-1/2 block h-[1.5px] w-5 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-current" />
    </span>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  if (open) {
    return (
      <span className="flex h-10 w-10 items-center justify-center" aria-hidden>
        <CrossIcon className="h-5 w-5" />
      </span>
    );
  }
  return (
    <span className="flex h-10 w-10 flex-col items-center justify-center gap-[5px]" aria-hidden>
      <span className="block h-px w-5 bg-current" />
      <span className="block h-px w-5 bg-current" />
      <span className="block h-px w-5 bg-current" />
    </span>
  );
}

/** Hover gradient without toggling `text-transparent` on the main copy (avoids unhover flicker). */
function DrawerNavLink({
  href,
  children,
  onClick,
  muted = false,
  className,
}: {
  href: string;
  children: ReactNode;
  onClick: () => void;
  muted?: boolean;
  className?: string;
}) {
  const baseTone = muted ? "text-white/90" : "text-white";
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group relative block w-fit max-w-full text-left headline-title text-2xl md:text-3xl ${className ?? ""}`}
    >
      <span
        className={`relative z-0 block ${baseTone} transition-opacity duration-200 ease-out group-hover:opacity-0 motion-reduce:transition-none`}
      >
        {children}
      </span>
      <span
        className="pointer-events-none absolute inset-0 z-[1] block bg-gradient-to-r from-[#ffafd3] via-[#d8b4fe] to-[#a855f7] bg-clip-text text-transparent opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100 motion-reduce:transition-none"
        aria-hidden
      >
        {children}
      </span>
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen || !isHome) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen, isHome]);

  return (
    <>
      <header className="relative z-50 w-full overflow-visible bg-transparent shadow-none">
        {isHome ? (
          <div className="container-site grid grid-cols-[1fr_auto_1fr] items-center gap-3 bg-transparent py-4 md:gap-4 md:py-5">
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              className="justify-self-start rounded-none border-0 bg-transparent text-white shadow-none transition hover:text-white/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-violet)]"
              aria-expanded={menuOpen}
              aria-controls="home-nav-drawer"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <HamburgerIcon open={menuOpen} />
            </button>
            <Link
              href="/"
              className="justify-self-center text-center text-xs font-black uppercase tracking-[0.24em] text-white sm:text-sm md:text-base"
            >
              Agency_Studio
            </Link>
            <Link
              href="/start-a-project"
              className="mono-label justify-self-end text-white transition hover:opacity-90"
            >
              Get started
            </Link>
          </div>
        ) : (
          <div className="container-site flex items-center justify-between bg-transparent py-4">
            <Link href="/" className="relative text-lg font-black uppercase tracking-[0.18em] text-[var(--text-primary)]">
              Agency_Studio
            </Link>
            <nav className="hidden items-center gap-8 md:flex">
              {primaryNav.map((item) => {
                const isMega = item.label === "Solutions" || item.label === "Industries";
                return (
                  <div className="group relative" key={item.href}>
                    <Link
                      href={item.href}
                      className={`mono-label text-sm transition ${pathname.startsWith(item.href) ? "text-[var(--accent-coral)]" : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"}`}
                    >
                      {item.label}
                    </Link>
                    {isMega ? <MegaMenu section={item.label as "Solutions" | "Industries"} /> : null}
                  </div>
                );
              })}
            </nav>
            <div className="hidden items-center gap-3 md:flex">
              <Button href="/start-a-project" variant="secondary">
                Start a Project
              </Button>
              <Button href="/book-strategy-call">Book a Strategy Call</Button>
            </div>
            <div className="flex items-center gap-5 md:hidden">
              {utilityNav.slice(0, 1).map((item) => (
                <Link key={item.href} href={item.href} className="mono-label text-[var(--text-muted)] hover:text-[var(--text-primary)]">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {isHome && menuOpen ? (
        <div
          id="home-nav-drawer"
          className="fixed inset-0 z-[60] flex flex-col bg-black/97 px-6 pb-12 pt-20 md:px-12"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <div className="container-site flex justify-end">
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="flex h-11 w-11 items-center justify-center rounded-none border-0 bg-transparent text-white/90 shadow-none transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-violet)]"
              aria-label="Close menu"
            >
              <CrossIcon className="h-5 w-5" />
            </button>
          </div>
          <nav className="container-site mt-12 flex flex-col gap-6 md:mt-16 md:gap-8" aria-label="Primary">
            {primaryNav.map((item) => (
              <DrawerNavLink key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </DrawerNavLink>
            ))}
            <DrawerNavLink href="/book-strategy-call" muted className="mt-4" onClick={() => setMenuOpen(false)}>
              Book a call
            </DrawerNavLink>
          </nav>
        </div>
      ) : null}
    </>
  );
}
