"use client";

import Link from "next/link";
import { getDictionary, type Locale } from "@/lib/i18n";

type FloatingCtaProps = {
  locale: Locale;
};

export function FloatingCta({ locale }: FloatingCtaProps) {
  const t = getDictionary(locale);

  return (
    <div className="fixed bottom-5 right-5 z-50 hidden flex-col gap-2 md:flex">
      <a
        href="tel:+34971096012"
        className="inline-flex items-center justify-center rounded-full border border-base-mid bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-base-black shadow-soft transition hover:-translate-y-0.5 hover:border-brand-yellow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
      >
        {t.floatingCta.callNow}
      </a>
      <Link
        href="/solicite-presupuesto"
        className="inline-flex items-center justify-center rounded-full bg-brand-yellow px-4 py-2 text-xs font-semibold uppercase tracking-wide text-base-black shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-yellow/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
      >
        {t.floatingCta.requestQuote}
      </Link>
    </div>
  );
}
