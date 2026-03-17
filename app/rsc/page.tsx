import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { Breadcrumb } from "@/components/marketing/breadcrumb";
import { SectionHeading } from "@/components/marketing/section-heading";
import { StatsStrip } from "@/components/marketing/stats-strip";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { rscContent } from "@/content/site-content";
import { getDictionary, getServerLocale } from "@/lib/i18n-server";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/seo-schema";
import { rscInitiatives } from "@/rsc/data";

export const metadata = pageMetadata("RSC", "Responsabilidad Social Corporativa", "/rsc", {
  image: "/images/team/foto-grupo-puente.jpg",
  keywords: ["RSC", "sostenibilidad", "responsabilidad social", "Dosmas Grup"]
});

export default async function RscPage() {
  const locale = await getServerLocale();
  const t = getDictionary(locale);
  const text = t.pages.rsc;

  return (
    <>
      <JsonLd
        id="breadcrumb-rsc"
        data={breadcrumbSchema([
          { name: t.common.home, path: "/" },
          { name: text.pageTitle, path: "/rsc" }
        ])}
      />

      <PageHero title={text.pageTitle} subtitle={text.pageSubtitle} image="/images/team/foto-grupo-puente.jpg" />

      <section className="bg-white py-20">
        <Container className="space-y-10">
          <Reveal>
            <Breadcrumb items={[{ label: t.common.home, href: "/" }, { label: text.pageTitle }]} />
            <SectionHeading eyebrow={text.eyebrow} title={rscContent.title} />
            <div className="mt-6 space-y-5 text-base leading-8 text-base-dark">
              {rscContent.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <StatsStrip
              stats={[
                { label: text.activePrograms, value: "12" },
                { label: text.annualTrainingHours, value: "2.400" },
                { label: text.solidarityActions, value: "18" },
                { label: text.partnerEntities, value: "26" }
              ]}
            />
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rscInitiatives.map((item) => (
              <Reveal key={item.title}>
                <article className="overflow-hidden rounded-2xl border border-base-mid bg-base-light transition hover:-translate-y-1 hover:shadow-soft">
                  <div className="relative aspect-[4/3]">
                    <Image src={item.image} alt={item.title} fill className="object-cover" loading="lazy" sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw" />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-base-dark">{item.year}</p>
                    <h3 className="mt-2 text-lg font-semibold text-base-black">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-base-dark">{item.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <article className="rounded-2xl border border-base-mid bg-base-light p-8">
              <h3 className="text-2xl font-semibold text-base-black">{text.collaborateTitle}</h3>
              <p className="mt-3 text-base leading-8 text-base-dark">
                {text.collaborateBody}
              </p>
              <Link
                href="/contacto"
                className="mt-6 inline-flex rounded-full bg-brand-yellow px-5 py-3 text-sm font-semibold text-base-black transition hover:bg-brand-yellow/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
              >
                {text.collaborateCta}
              </Link>
            </article>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
