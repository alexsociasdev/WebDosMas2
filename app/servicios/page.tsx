import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/marketing/section-heading";
import { ServiceIndex } from "@/components/services/service-index";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { getDictionary, getServerLocale } from "@/lib/i18n-server";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/seo-schema";
import { serviceMetaBySlug, servicesData } from "@/services/data";

export const metadata = pageMetadata(
  "Servicios",
  "Servicios de DOSMAS GRUP.",
  "/servicios",
  { image: "/images/projects/excavacion-en-son-vida/01.webp", keywords: ["excavaciones", "demoliciones", "obra civil", "Mallorca"] }
);

export default async function ServiciosPage() {
  const locale = await getServerLocale();
  const t = getDictionary(locale);
  const text = t.pages.services;

  return (
    <>
      <JsonLd
        id="breadcrumb-servicios"
        data={breadcrumbSchema([
          { name: t.common.home, path: "/" },
          { name: t.common.services, path: "/servicios" }
        ])}
      />

      <PageHero
        title={text.pageTitle}
        subtitle={text.pageSubtitle}
        image="/images/projects/excavacion-en-son-vida/01.webp"
      />

      <section className="bg-brand-gray py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={text.eyebrow}
              title={text.heading}
              description={text.description}
              action={
                <Link
                  href="/solicite-presupuesto"
                  className="inline-flex rounded-full bg-brand-yellow px-5 py-3 text-sm font-semibold text-base-black transition hover:bg-brand-yellow/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
                >
                  {text.requestQuote}
                </Link>
              }
            />
          </Reveal>

          <div className="mt-10">
            <Reveal>
              <ServiceIndex services={servicesData} locale={locale} />
            </Reveal>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {servicesData.map((service) => {
              const meta = serviceMetaBySlug[service.slug];
              return (
                <Reveal key={service.slug}>
                  <article
                    id={service.slug}
                    className="group h-full overflow-hidden rounded-3xl border border-base-mid bg-white transition hover:-translate-y-1 hover:shadow-soft"
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={service.gallery[0]}
                        alt={service.title}
                        fill
                        className="object-cover"
                        loading="lazy"
                        sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 text-white">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em]">{meta?.category ?? t.common.services}</p>
                      </div>
                    </div>
                    <div className="space-y-3 p-6">
                      <h2 className="text-xl font-semibold text-base-black">{service.title}</h2>
                      <p className="line-clamp-4 text-base leading-7 text-base-dark">{service.paragraphs[0]}</p>
                      <div className="flex flex-wrap gap-2">
                        <Link
                          href={`/servicios/${service.slug}`}
                          className="inline-flex rounded-full border border-base-mid px-4 py-2 text-sm font-semibold text-base-black transition hover:border-brand-yellow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
                        >
                          {t.common.viewService}
                        </Link>
                        <Link
                          href="/solicite-presupuesto"
                          className="inline-flex rounded-full border border-base-mid bg-white px-4 py-2 text-sm font-semibold text-base-black transition hover:border-brand-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
                        >
                          {t.nav.budgetShort}
                        </Link>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
