import { Container } from "@/components/container";
import { ContactForm } from "@/components/forms/contact-form";
import { Breadcrumb } from "@/components/marketing/breadcrumb";
import { SectionHeading } from "@/components/marketing/section-heading";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/seo-schema";

export const metadata = pageMetadata("Contacto", "CONTACTA.", "/contacto", {
  image: "/images/brand/portada.webp"
});

export default function ContactoPage() {
  return (
    <>
      <JsonLd
        id="breadcrumb-contacto"
        data={breadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Contacto", path: "/contacto" }
        ])}
      />

      <PageHero title="Contacto" subtitle="CONTACTA." image="/images/brand/portada.webp" />

      <section className="bg-white py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal>
            <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "Contacto" }]} />
            <SectionHeading title="CONTACTA. PÁGINA SIMILAR A ESTA" />
            <div className="mt-4 space-y-3 text-base leading-8 text-base-dark">
              <p>Carretera Petra – Santa Margalida, S/N, Parcela km 1,3 · 07520 Petra, Illes Balears, España</p>
              <p>Teléfono: 971 09 60 12</p>
              <p>Email: info@dosmasgrup.com</p>
            </div>

            <article className="mt-8 rounded-2xl border border-base-mid bg-base-light p-6">
              <h3 className="text-lg font-semibold text-base-black">Horario de atención</h3>
              <p className="mt-2 text-sm leading-7 text-base-dark">Lunes a viernes de 8:00 a 18:00. Respuesta prioritaria para solicitudes urgentes de obra y logística.</p>
            </article>
          </Reveal>
          <Reveal>
            <ContactForm />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
