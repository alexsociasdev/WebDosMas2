import { Container } from "@/components/container";
import { QuoteForm } from "@/components/forms/quote-form";
import { Breadcrumb } from "@/components/marketing/breadcrumb";
import { SectionHeading } from "@/components/marketing/section-heading";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { getDictionary, getServerLocale } from "@/lib/i18n-server";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/seo-schema";

export const metadata = pageMetadata(
  "Solicite presupuesto",
  "SOLICITE PRESUPUESTO.",
  "/solicite-presupuesto",
  { image: "/images/brand/portada.webp" }
);

export default async function SolicitePresupuestoPage() {
  const locale = await getServerLocale();
  const t = getDictionary(locale);
  const text = t.pages.quote;

  return (
    <>
      <JsonLd
        id="breadcrumb-presupuesto"
        data={breadcrumbSchema([
          { name: t.common.home, path: "/" },
          { name: text.breadcrumb, path: "/solicite-presupuesto" }
        ])}
      />

      <PageHero title={text.pageTitle} subtitle={text.pageSubtitle} image="/images/brand/portada.webp" />

      <section className="bg-base-light py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <Breadcrumb items={[{ label: t.common.home, href: "/" }, { label: text.breadcrumb }]} />
            <SectionHeading title={text.heading} />
            <div className="mt-4 space-y-3 text-base leading-8 text-base-dark">
              <p>{text.intro1}</p>
              <p>{text.intro2}</p>
            </div>

            <article className="mt-8 rounded-2xl border border-base-mid bg-white p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-base-black">{text.commitmentTitle}</h3>
              <p className="mt-2 text-sm leading-7 text-base-dark">{text.commitmentBody}</p>
            </article>
          </Reveal>
          <Reveal>
            <QuoteForm locale={locale} />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
