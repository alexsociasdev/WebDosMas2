import { Container } from "@/components/container";
import { Breadcrumb } from "@/components/marketing/breadcrumb";
import { SectionHeading } from "@/components/marketing/section-heading";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { cookiePolicyContent } from "@/content/site-content";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/seo-schema";

export const metadata = pageMetadata(
  "Política cookies",
  "POLÍTICA DE COOKIES",
  "/legal/politica-cookies",
  { image: "/images/brand/portada.webp" }
);

export default function PoliticaCookiesPage() {
  return (
    <>
      <JsonLd
        id="breadcrumb-cookies"
        data={breadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Política cookies", path: "/legal/politica-cookies" }
        ])}
      />

      <PageHero title="POLÍTICA DE COOKIES" image="/images/brand/portada.webp" />
      <section className="bg-white py-20">
        <Container className="space-y-10">
          <Reveal>
            <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "Política cookies" }]} />
            <SectionHeading title={cookiePolicyContent.title} />
            <article className="mt-6 rounded-2xl border border-base-mid bg-base-light p-7">
              <div className="space-y-4 text-base leading-8 text-base-dark">
                {cookiePolicyContent.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          </Reveal>

          <Reveal>
            <article className="rounded-2xl border border-base-mid bg-base-light p-7">
              <h2 className="text-2xl font-semibold text-base-black">{cookiePolicyContent.integratedPolicyTitle}</h2>
              <p className="mt-4 text-base leading-8 text-base-dark">{cookiePolicyContent.integratedPolicyIntro}</p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-8 text-base-dark">
                {cookiePolicyContent.integratedPolicyAreas.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="mt-4 space-y-4 text-base leading-8 text-base-dark">
                {cookiePolicyContent.integratedPolicyParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-8 text-base-dark">
                {cookiePolicyContent.integratedPolicyCommitments.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
