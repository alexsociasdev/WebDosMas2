"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navigationLinks } from "@/content/site-content";
import { cn } from "@/lib/utils";
import { Container } from "@/components/container";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-transparent transition-all duration-300",
        scrolled
          ? "border-base-mid bg-white/95 shadow-soft backdrop-blur"
          : "bg-white/85 backdrop-blur"
      )}
    >
      <div className="hidden border-b border-base-mid bg-base-light/90 lg:block">
        <Container className="flex min-h-10 items-center justify-between text-xs text-base-dark">
          <p className="font-medium">Carretera Petra – Santa Margalida, S/N, Parcela km 1,3 · 07520 Petra</p>
          <div className="flex items-center gap-4">
            <a
              href="tel:+34971096012"
              className="font-semibold hover:text-base-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
            >
              971 09 60 12
            </a>
            <a
              href="mailto:info@dosmasgrup.com"
              className="font-semibold hover:text-base-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
            >
              info@dosmasgrup.com
            </a>
          </div>
        </Container>
      </div>

      <Container className="flex min-h-20 items-center justify-between gap-6">
        <Link
          href="/"
          aria-label="Ir a la página de inicio"
          className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
        >
          <span className="inline-block h-10 w-10 rounded-full border border-base-mid bg-base-light p-1.5">
            <span className="flex h-full w-full items-center justify-center rounded-full border border-brand-purple/40 text-xs font-bold text-base-black">
              DM
            </span>
          </span>
          <span className="text-lg font-semibold tracking-tight text-base-black group-hover:text-base-dark">
            Dosmas Grup
          </span>
        </Link>

        <button
          type="button"
          className="inline-flex items-center rounded-md border border-base-mid px-3 py-2 text-sm font-medium text-base-black hover:border-brand-yellow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-main-menu"
          aria-label="Abrir o cerrar el menú principal"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          Menú
        </button>

        <nav className="hidden lg:block" aria-label="Menú principal">
          <ul className="flex items-center gap-6 text-sm font-medium text-base-dark">
            {navigationLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="relative whitespace-nowrap py-2 transition-colors duration-200 hover:text-base-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/solicite-presupuesto"
                className="inline-flex rounded-full bg-brand-yellow px-4 py-2 text-xs font-semibold uppercase tracking-wide text-base-black transition hover:bg-brand-yellow/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
              >
                Presupuesto
              </Link>
            </li>
          </ul>
        </nav>
      </Container>

      <nav
        id="mobile-main-menu"
        aria-label="Menú principal móvil"
        className={cn(
          "overflow-hidden border-t border-base-mid bg-white transition-all duration-300 lg:hidden",
          menuOpen ? "max-h-screen" : "max-h-0"
        )}
      >
        <Container>
          <ul className="flex flex-col gap-1 py-4">
            {navigationLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-base-dark transition-colors hover:bg-base-light hover:text-base-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </nav>
    </header>
  );
}
