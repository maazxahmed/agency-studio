"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { MegaMenu } from "@/components/layout/MegaMenu";
import { primaryNav, utilityNav } from "@/content/navigation";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-40 w-full bg-transparent [--mega-top:4.5rem] md:[--mega-top:4.75rem]">
      <div className="container-site flex items-center justify-between py-4">
        <Link href="/" className="relative text-lg font-black uppercase tracking-[0.18em] text-[var(--color-primary)]">
          Agency_Studio
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {primaryNav.map((item) => {
            const isMega = item.label === "Solutions" || item.label === "Industries";
            return (
              <div className="group" key={item.href}>
                <Link
                  href={item.href}
                  className={`mono-label text-sm transition ${pathname.startsWith(item.href) ? "text-[var(--color-secondary)]" : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"}`}
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
            <Link key={item.href} href={item.href} className="mono-label text-[var(--color-text-muted)] hover:text-[var(--color-text)]">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
