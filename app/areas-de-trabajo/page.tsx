import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { Breadcrumb } from "@/components/marketing/breadcrumb";
import { SectionHeading } from "@/components/marketing/section-heading";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { getDictionary, getServerLocale } from "@/lib/i18n-server";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/seo-schema";
import { serviceMetaBySlug, servicesData } from "@/services/data";

export const metadata = pageMetadata(
  "Areas de trabajo",
  "Areas de trabajo",
  "/areas-de-trabajo",
  { image: "/images/projects/demolicion-en-santa-ponca/03.webp" }
);

export default async function AreasTrabajoPage() {
  const locale = await getServerLocale();
  const t = getDictionary(locale);
  const text = t.pages.workAreas;

  return (
    <>
      <JsonLd
        id="breadcrumb-areas"
        data={breadcrumbSchema([
          { name: t.common.home, path: "/" },
          { name: text.pageTitle, path: "/areas-de-trabajo" }
        ])}
      />

      <PageHero title={text.pageTitle} subtitle={text.pageSubtitle} image="/images/projects/demolicion-en-santa-ponca/03.webp" />

      <section className="bg-base-light py-20">
        <Container>
          <Reveal>
            <Breadcrumb items={[{ label: t.common.home, href: "/" }, { label: text.pageTitle }]} />
            <SectionHeading title={text.heading} description={text.description} />
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service) => (
              <Reveal key={service.slug}>
                <article className="overflow-hidden rounded-2xl border border-base-mid bg-white p-5 transition hover:-translate-y-1 hover:shadow-soft">
                  <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-xl border border-base-mid">
                    <Image src={service.gallery[0]} alt={service.title} fill className="object-cover" loading="lazy" sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-base-dark">{serviceMetaBySlug[service.slug]?.category || t.common.services}</p>
                  <h2 className="mt-2 text-lg font-semibold text-base-black">{service.title}</h2>
                  <p className="mt-3 line-clamp-3 text-sm leading-7 text-base-dark">{service.paragraphs[0]}</p>
                  <div className="mt-5 flex gap-2">
                    <Link
                      href={`/servicios/${service.slug}`}
                      className="inline-flex rounded-full border border-base-mid px-4 py-2 text-xs font-semibold uppercase tracking-wide text-base-black transition hover:border-brand-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
                    >
                      {t.common.viewDetail}
                    </Link>
                    <Link
                      href="/solicite-presupuesto"
                      className="inline-flex rounded-full bg-brand-yellow px-4 py-2 text-xs font-semibold uppercase tracking-wide text-base-black transition hover:bg-brand-yellow/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
                    >
                      {text.budget}
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
