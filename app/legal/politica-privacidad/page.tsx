import { Container } from "@/components/container";
import { Breadcrumb } from "@/components/marketing/breadcrumb";
import { SectionHeading } from "@/components/marketing/section-heading";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { getDictionary, getServerLocale } from "@/lib/i18n-server";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/seo-schema";
import { privacyPolicyContent } from "@/content/site-content";

export const metadata = pageMetadata(
  "Política privacidad",
  "POLÍTICA DE PRIVACIDAD",
  "/legal/politica-privacidad",
  { image: "/images/brand/portada.webp" }
);

export default async function PoliticaPrivacidadPage() {
  const locale = await getServerLocale();
  const t = getDictionary(locale);

  return (
    <>
      <JsonLd
        id="breadcrumb-privacidad"
        data={breadcrumbSchema([
          { name: t.common.home, path: "/" },
          { name: t.pages.legal.privacyPolicy, path: "/legal/politica-privacidad" }
        ])}
      />

      <PageHero title="POLÍTICA DE PRIVACIDAD" image="/images/brand/portada.webp" />
      <section className="bg-white py-20">
        <Container>
          <Reveal>
            <Breadcrumb items={[{ label: t.common.home, href: "/" }, { label: t.pages.legal.privacyPolicy }]} />
            <SectionHeading title={privacyPolicyContent.title} />
            <article className="mt-6 rounded-2xl border border-base-mid bg-base-light p-7">
              <div className="space-y-4 text-base leading-8 text-base-dark">
                {privacyPolicyContent.paragraphs.map((paragraph) => (
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
