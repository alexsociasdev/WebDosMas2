import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { Breadcrumb } from "@/components/marketing/breadcrumb";
import { SectionHeading } from "@/components/marketing/section-heading";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/seo-schema";
import { serviceMetaBySlug, servicesData } from "@/services/data";

export const metadata = pageMetadata(
  "Areas de trabajo",
  "Areas de trabajo",
  "/areas-de-trabajo",
  { image: "/images/brand/portada.webp" }
);

export default function AreasTrabajoPage() {
  return (
    <>
      <JsonLd
        id="breadcrumb-areas"
        data={breadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Areas de trabajo", path: "/areas-de-trabajo" }
        ])}
      />

      <PageHero title="Areas de trabajo" subtitle="Areas de trabajo" image="/images/brand/portada.webp" />

      <section className="bg-base-light py-20">
        <Container>
          <Reveal>
            <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "Areas de trabajo" }]} />
            <SectionHeading title="Areas de trabajo" description="Areas de trabajo" />
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service) => (
              <Reveal key={service.slug}>
                <article className="overflow-hidden rounded-2xl border border-base-mid bg-white p-5 transition hover:-translate-y-1 hover:shadow-soft">
                  <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-xl border border-base-mid">
                    <Image src="/images/fondo.webp" alt={service.title} fill className="object-cover" loading="lazy" sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-base-dark">{serviceMetaBySlug[service.slug]?.category || "Servicios"}</p>
                  <h2 className="mt-2 text-lg font-semibold text-base-black">{service.title}</h2>
                  <p className="mt-3 line-clamp-3 text-sm leading-7 text-base-dark">{service.paragraphs[0]}</p>
                  <div className="mt-5 flex gap-2">
                    <Link
                      href={`/servicios/${service.slug}`}
                      className="inline-flex rounded-full border border-base-mid px-4 py-2 text-xs font-semibold uppercase tracking-wide text-base-black transition hover:border-brand-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
                    >
                      Ver detalle
                    </Link>
                    <Link
                      href="/solicite-presupuesto"
                      className="inline-flex rounded-full bg-brand-yellow px-4 py-2 text-xs font-semibold uppercase tracking-wide text-base-black transition hover:bg-brand-yellow/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
                    >
                      Presupuesto
                    </Link>
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
