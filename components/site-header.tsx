"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/container";
import { officeLocations } from "@/content/site-content";
import { getDictionary, type Locale, locales } from "@/lib/i18n";

const languageLinks = {
  ca: { code: "CA", label: "Català", flag: "/images/flags/catalonia.svg" },
  es: { code: "ES", label: "Castellano", flag: "/images/flags/spain.png" },
  en: { code: "EN", label: "English", flag: "/images/flags/uk.svg" }
} as const;

type SiteHeaderProps = {
  locale: Locale;
};

export function SiteHeader({ locale }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const t = getDictionary(locale);

  const redirectPath = `${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ""}`;
  const navigationLinks = [
    { label: t.nav.about, href: "/nosotros" },
    { label: t.nav.projects, href: "/proyectos" },
    { label: t.nav.workAreas, href: "/areas-de-trabajo" },
    { label: t.nav.news, href: "/noticias" },
    { label: t.nav.rsc, href: "/rsc" },
    { label: t.nav.contact, href: "/contacto" }
  ];

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
          ? "border-brand-gray/40 bg-white shadow-soft"
          : "bg-white"
      )}
    >
      <div className="hidden border-b border-brand-yellow bg-brand-yellow lg:block">
        <Container className="flex min-h-12 items-center justify-between gap-4 text-xs text-base-black">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-white px-3 py-1 font-semibold text-base-black shadow-soft">
              {officeLocations.petra.label}
            </span>
            <span className="rounded-full bg-white px-3 py-1 font-semibold text-base-black shadow-soft">
              {officeLocations.palma.label}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="tel:+34971096012"
              className="rounded-full bg-brand-purple px-3 py-1 font-semibold text-white transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              971 09 60 12
            </a>
            <a
              href="mailto:info@dosmasgrup.com"
              className="rounded-full bg-white px-3 py-1 font-semibold text-base-black transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              info@dosmasgrup.com
            </a>
            <ul className="flex items-center gap-2">
              {locales.map((languageCode) => {
                const language = languageLinks[languageCode];
                return (
                <li key={language.code}>
                  <a
                    href={`/api/locale?lang=${languageCode}&redirect=${encodeURIComponent(redirectPath)}`}
                    aria-label={`${t.header.languagesAriaPrefix} ${language.label}`}
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full border px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
                      locale === languageCode
                        ? "border-brand-purple bg-brand-purple text-white"
                        : "border-brand-gray bg-white text-base-black hover:bg-brand-gray hover:text-white"
                    )}
                  >
                    <span className="relative block h-3.5 w-5 overflow-hidden rounded-sm border border-brand-gray/60">
                      <Image src={language.flag} alt="" aria-hidden="true" fill sizes="20px" className="object-cover" />
                    </span>
                    {language.code}
                  </a>
                </li>
              )})}
            </ul>
          </div>
        </Container>
      </div>

      <Container className="flex min-h-20 items-center justify-between gap-6">
        <Link
          href="/"
          aria-label="Ir a la página de inicio"
          className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
        >
          <span className="inline-flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-brand-gray/40 bg-white p-1 shadow-soft">
            <Image src="/images/logo-dosmas.png" alt="Logo DOSMAS GRUP" width={56} height={56} className="h-auto w-full object-contain" priority />
          </span>
          <span className="text-xl font-bold tracking-tight text-base-black transition-colors group-hover:text-base-dark">
            DOSMAS GRUP
          </span>
        </Link>

        <button
          type="button"
          className="inline-flex items-center rounded-md border border-brand-gray/40 bg-white px-3 py-2 text-sm font-medium text-base-black hover:border-brand-yellow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-main-menu"
          aria-label={t.nav.menuToggle}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {t.nav.menu}
        </button>

        <nav className="hidden lg:block" aria-label="Menú principal">
          <ul className="flex items-center gap-6 text-sm font-semibold uppercase tracking-[0.08em] text-base-dark">
            {navigationLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="relative whitespace-nowrap py-2 transition-colors duration-200 hover:text-brand-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/solicite-presupuesto"
                className="inline-flex rounded-full bg-brand-purple px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
              >
                {t.nav.budgetShort}
              </Link>
            </li>
          </ul>
        </nav>
      </Container>

      <nav
        id="mobile-main-menu"
        aria-label="Menú principal móvil"
        className={cn(
          "overflow-hidden border-t border-brand-gray/30 bg-white transition-all duration-300 lg:hidden",
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
                  className="block rounded-md px-3 py-2 text-sm font-semibold uppercase tracking-[0.08em] text-base-dark transition-colors hover:bg-brand-yellow hover:text-base-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mb-4 flex flex-wrap gap-2 border-t border-base-mid pt-3">
            <span className="rounded-full bg-brand-yellow px-3 py-1 text-xs font-semibold text-base-black">
              {officeLocations.petra.label}
            </span>
            <span className="rounded-full bg-brand-yellow px-3 py-1 text-xs font-semibold text-base-black">
              {officeLocations.palma.label}
            </span>
          </div>
          <div className="mb-4 flex items-center gap-2 border-t border-base-mid pt-3">
            {locales.map((languageCode) => {
              const language = languageLinks[languageCode];
              return (
                <a
                  key={language.code}
                  href={`/api/locale?lang=${languageCode}&redirect=${encodeURIComponent(redirectPath)}`}
                  aria-label={`${t.header.languagesAriaPrefix} ${language.label}`}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full border px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-base-black transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow",
                    locale === languageCode
                      ? "border-brand-purple bg-brand-purple text-white"
                      : "border-base-mid bg-white hover:border-brand-yellow"
                  )}
                >
                  <span className="relative block h-3.5 w-5 overflow-hidden rounded-sm border border-base-mid">
                    <Image src={language.flag} alt="" aria-hidden="true" fill sizes="20px" className="object-cover" />
                  </span>
                  {language.code}
                </a>
              );
            })}
          </div>
        </Container>
      </nav>
    </header>
  );
}
