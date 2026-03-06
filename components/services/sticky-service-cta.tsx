import Link from "next/link";

type StickyServiceCtaProps = {
  title: string;
  ctaLabel: string;
};

export function StickyServiceCta({ title, ctaLabel }: StickyServiceCtaProps) {
  return (
    <aside className="sticky top-28 rounded-2xl border border-base-mid bg-white p-6 shadow-soft">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-base-dark">Servicio</p>
      <h2 className="mt-2 text-xl font-semibold text-base-black">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-base-dark">
        Nuestro equipo técnico puede revisar su necesidad y proponer la solución más adecuada para su obra.
      </p>
      <Link
        href="/solicite-presupuesto"
        className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-brand-yellow px-5 py-3 text-sm font-semibold text-base-black transition hover:bg-brand-yellow/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
      >
        {ctaLabel}
      </Link>
      <Link
        href="/contacto"
        className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-base-mid px-5 py-3 text-sm font-semibold text-base-black transition hover:border-brand-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
      >
        Contactar ahora
      </Link>
    </aside>
  );
}
