import { Container } from "@/components/container";
import { ContactForm } from "@/components/forms/contact-form";
import { Breadcrumb } from "@/components/marketing/breadcrumb";
import { SectionHeading } from "@/components/marketing/section-heading";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { getDictionary, getServerLocale } from "@/lib/i18n-server";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/seo-schema";

export const metadata = pageMetadata("Contacto", "CONTACTA.", "/contacto", {
  image: "/images/team/foto-grupo-puente.jpg"
});

export default async function ContactoPage() {
  const locale = await getServerLocale();
  const t = getDictionary(locale);
  const text = t.pages.contact;

  return (
    <>
      <JsonLd
        id="breadcrumb-contacto"
        data={breadcrumbSchema([
          { name: t.common.home, path: "/" },
          { name: text.breadcrumb, path: "/contacto" }
        ])}
      />

      <PageHero title={text.pageTitle} subtitle={text.pageSubtitle} image="/images/team/foto-grupo-puente.jpg" />

      <section className="bg-white py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal>
            <Breadcrumb items={[{ label: t.common.home, href: "/" }, { label: text.breadcrumb }]} />
            <SectionHeading title={text.heading} />
            <div className="mt-4 space-y-3 text-base leading-8 text-base-dark">
              <p>Carretera Petra – Santa Margalida, S/N, Parcela km 1,3 · 07520 Petra, Illes Balears, España</p>
              <p>{text.phoneLabel}: 971 09 60 12</p>
              <p>{text.emailLabel}: info@dosmasgrup.com</p>
            </div>

            <article className="mt-8 overflow-hidden rounded-2xl border border-base-mid bg-white shadow-soft">
              <div className="relative aspect-[16/9]">
                <iframe
                  title={text.mapTitle}
                  src="https://www.google.com/maps?q=Carretera+Petra+-+Santa+Margalida,+Petra,+Illes+Balears&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full"
                />
              </div>
            </article>

            <article className="mt-8 rounded-2xl border border-base-mid bg-white p-6">
              <h3 className="text-lg font-semibold text-base-black">{text.scheduleTitle}</h3>
              <p className="mt-2 text-sm leading-7 text-base-dark">{text.scheduleBody}</p>
            </article>
          </Reveal>
          <Reveal>
            <ContactForm locale={locale} />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
