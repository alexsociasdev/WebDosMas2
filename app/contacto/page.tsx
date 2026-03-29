import { Container } from "@/components/container";
import { ContactForm } from "@/components/forms/contact-form";
import { Breadcrumb } from "@/components/marketing/breadcrumb";
import { SectionHeading } from "@/components/marketing/section-heading";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { officeLocations } from "@/content/site-content";
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
        <Container className="grid gap-10 xl:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <Breadcrumb items={[{ label: t.common.home, href: "/" }, { label: text.breadcrumb }]} />
            <SectionHeading title={text.heading} />
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <article id="oficina-central-petra" className="scroll-mt-32 rounded-2xl border border-brand-purple/20 bg-brand-yellow p-6 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-base-dark">{officeLocations.petra.label}</p>
                <div className="mt-4 space-y-2 text-sm leading-7 text-base-dark">
                  {officeLocations.petra.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                  <p>{text.phoneLabel}: {officeLocations.petra.phone}</p>
                  <p>{text.emailLabel}: {officeLocations.petra.email}</p>
                </div>
                <div className="mt-5 rounded-2xl bg-white p-5">
                  <h3 className="text-base font-semibold text-base-black">{text.scheduleTitle}</h3>
                  {text.scheduleBody.split("\n").map((line) => (
                    <p key={line} className="mt-2 text-sm leading-7 text-base-dark">
                      {line}
                    </p>
                  ))}
                </div>
              </article>

              <article id="delegacion-palma" className="scroll-mt-32 rounded-2xl border border-brand-purple/20 bg-brand-purple p-6 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white">{officeLocations.palma.label}</p>
                <div className="mt-4 space-y-2 text-sm leading-7 text-white">
                  {officeLocations.palma.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                  <p>{text.phoneLabel}: {officeLocations.palma.phone}</p>
                  <p>{text.emailLabel}: {officeLocations.palma.email}</p>
                </div>
              </article>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <article className="overflow-hidden rounded-2xl border border-base-mid bg-white shadow-soft">
                <div className="relative aspect-[16/10]">
                  <iframe
                    title={`${text.mapTitle} Petra`}
                    src={`https://www.google.com/maps?q=${encodeURIComponent(officeLocations.petra.mapQuery)}&output=embed`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full w-full"
                  />
                </div>
              </article>

              <article className="overflow-hidden rounded-2xl border border-base-mid bg-white shadow-soft">
                <div className="relative aspect-[16/10]">
                  <iframe
                    title={`${text.mapTitle} Palma`}
                    src={`https://www.google.com/maps?q=${encodeURIComponent(officeLocations.palma.mapQuery)}&output=embed`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full w-full"
                  />
                </div>
              </article>
            </div>
          </Reveal>
          <Reveal>
            <ContactForm locale={locale} />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
