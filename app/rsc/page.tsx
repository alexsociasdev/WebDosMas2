import Image from "next/image";
import { Container } from "@/components/container";
import { Breadcrumb } from "@/components/marketing/breadcrumb";
import { SectionHeading } from "@/components/marketing/section-heading";
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
  keywords: ["RSC", "sostenibilidad", "responsabilidad social", "DOSMAS GRUP"]
});

export default async function RscPage() {
  const locale = await getServerLocale();
  const t = getDictionary(locale);
  const text = t.pages.rsc;
  const highlightedMessages = [
    "PROGRAMAS ACTIVOS",
    "FORMACIÓN AL PERSONAL",
    "ACCIONES SOLIDARIAS",
    "COLABORACIÓN CON ENTIDADES"
  ];

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

      <section className="bg-brand-yellow py-20">
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

          <div className="grid gap-6 sm:grid-cols-2">
            {highlightedMessages.map((message, index) => (
              <Reveal key={message}>
                <article
                  className={`flex min-h-40 items-center justify-center rounded-3xl border px-6 py-10 text-center shadow-soft ${
                    index % 2 === 0
                      ? "border-brand-purple/20 bg-white text-base-black"
                      : "border-brand-purple/20 bg-brand-purple text-white"
                  }`}
                >
                  <p className="max-w-xs text-xl font-bold uppercase tracking-[0.18em] md:text-2xl">{message}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rscInitiatives.map((item) => (
              <Reveal key={item.title}>
                <article className="overflow-hidden rounded-2xl border border-base-mid bg-white transition hover:-translate-y-1 hover:shadow-soft">
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
        </Container>
      </section>
    </>
  );
}
