import { Container } from "@/components/container";
import { Breadcrumb } from "@/components/marketing/breadcrumb";
import { SectionHeading } from "@/components/marketing/section-heading";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { getSiteContent } from "@/content/site-content";
import { getDictionary, getServerLocale } from "@/lib/i18n-server";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/seo-schema";

export async function generateMetadata() {
  const locale = await getServerLocale();
  const { legalDataContent } = getSiteContent(locale);

  return pageMetadata(legalDataContent.title, legalDataContent.title, "/legal/datos-legales", {
    image: "/images/brand/portada.webp"
  });
}

export default async function DatosLegalesPage() {
  const locale = await getServerLocale();
  const t = getDictionary(locale);
  const { legalDataContent } = getSiteContent(locale);

  return (
    <>
      <JsonLd
        id="breadcrumb-datos-legales"
        data={breadcrumbSchema([
          { name: t.common.home, path: "/" },
          { name: t.pages.legal.legalData, path: "/legal/datos-legales" }
        ])}
      />

      <PageHero title={legalDataContent.title} image="/images/brand/portada.webp" />
      <section className="bg-brand-gray py-20">
        <Container>
          <Reveal>
            <Breadcrumb items={[{ label: t.common.home, href: "/" }, { label: t.pages.legal.legalData }]} />
            <SectionHeading title={legalDataContent.title} />
            <article className="mt-6 rounded-2xl border border-base-mid bg-white p-7">
              <div className="space-y-4 text-base leading-8 text-base-dark">
                {legalDataContent.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
