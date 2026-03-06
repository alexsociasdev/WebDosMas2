import { Container } from "@/components/container";
import { QuoteForm } from "@/components/forms/quote-form";
import { Breadcrumb } from "@/components/marketing/breadcrumb";
import { SectionHeading } from "@/components/marketing/section-heading";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/seo-schema";

export const metadata = pageMetadata(
  "Solicite presupuesto",
  "SOLICITE PRESUPUESTO.",
  "/solicite-presupuesto",
  { image: "/images/brand/portada.webp" }
);

export default function SolicitePresupuestoPage() {
  return (
    <>
      <JsonLd
        id="breadcrumb-presupuesto"
        data={breadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Solicite presupuesto", path: "/solicite-presupuesto" }
        ])}
      />

      <PageHero title="Solicite presupuesto" subtitle="SOLICITE PRESUPUESTO." image="/images/brand/portada.webp" />

      <section className="bg-base-light py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "Solicite presupuesto" }]} />
            <SectionHeading title="Página similar a esta:" />
            <div className="mt-4 space-y-3 text-base leading-8 text-base-dark">
              <p>Indíquenos el alcance de su obra y prepararemos una propuesta técnica y económica ajustada a su necesidad.</p>
              <p>Cuanta más información incluya, más precisa será la estimación inicial.</p>
            </div>

            <article className="mt-8 rounded-2xl border border-base-mid bg-white p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-base-black">Compromiso de respuesta</h3>
              <p className="mt-2 text-sm leading-7 text-base-dark">Confirmación de recepción inmediata y primera valoración técnica en 24-48 horas laborables.</p>
            </article>
          </Reveal>
          <Reveal>
            <QuoteForm />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
