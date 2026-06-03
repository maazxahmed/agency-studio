"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { MegaMenu } from "@/components/layout/MegaMenu";
import { SiteLogo } from "@/components/layout/SiteLogo";
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
        className="pointer-events-none absolute inset-0 z-[1] block bg-gradient-to-r from-[#0FEDC6] via-[#03B5A7] to-[#023E3E] bg-clip-text text-transparent opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100 motion-reduce:transition-none"
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
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex h-[var(--header-height)] w-full items-center overflow-visible bg-transparent shadow-none">
        {isHome ? (
          <div className="container-site relative flex h-full w-full items-center">
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-none border-0 bg-transparent text-white shadow-none transition hover:text-white/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-teal)]"
              aria-expanded={menuOpen}
              aria-controls="site-nav-drawer"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <HamburgerIcon open={menuOpen} />
            </button>
            <SiteLogo
              variant="nav"
              className="pointer-events-auto absolute left-1/2 top-1/2 z-[1] -translate-x-1/2 -translate-y-1/2"
            />
            <Link
              href="/start-a-project"
              className="mono-label relative z-10 ml-auto shrink-0 whitespace-nowrap text-[0.6rem] uppercase leading-none tracking-[0.12em] text-white transition hover:opacity-90 sm:text-[0.68rem] md:text-[0.72rem]"
            >
              Get started
            </Link>
          </div>
        ) : (
          <div className="container-site flex h-full w-full items-center justify-between gap-3">
            <SiteLogo variant="nav" />
            <nav className="hidden items-center gap-8 md:flex">
              {primaryNav.map((item) => {
                const isMega = item.label === "Solutions" || item.label === "Industries";
                return (
                  <div className="group relative" key={item.href}>
                    <Link
                      href={item.href}
                      className={`mono-label text-sm transition ${pathname.startsWith(item.href) ? "text-[var(--accent-teal)]" : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"}`}
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
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              className="flex items-center justify-center rounded-none border-0 bg-transparent text-white shadow-none transition hover:text-white/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-teal)] md:hidden"
              aria-expanded={menuOpen}
              aria-controls="site-nav-drawer"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <HamburgerIcon open={menuOpen} />
            </button>
          </div>
        )}
      </header>

      {menuOpen ? (
        <div
          id="site-nav-drawer"
          className="fixed inset-0 z-[60] flex flex-col bg-black/97 px-4 pb-12 pt-[calc(var(--header-height)+1rem)] sm:px-6 md:px-12"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <div className="container-site flex justify-end">
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="flex h-11 w-11 items-center justify-center rounded-none border-0 bg-transparent text-white/90 shadow-none transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-teal)]"
              aria-label="Close menu"
            >
              <CrossIcon className="h-5 w-5" />
            </button>
          </div>
          <nav className="container-site mt-8 flex flex-col gap-6 md:mt-16 md:gap-8" aria-label="Primary">
            {primaryNav.map((item) => (
              <DrawerNavLink key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </DrawerNavLink>
            ))}
            <DrawerNavLink href="/book-strategy-call" muted className="mt-4" onClick={() => setMenuOpen(false)}>
              Book a call
            </DrawerNavLink>
            {!isHome
              ? utilityNav.map((item) => (
                  <DrawerNavLink
                    key={item.href}
                    href={item.href}
                    muted
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </DrawerNavLink>
                ))
              : null}
          </nav>
        </div>
      ) : null}
    </>
  );
}
