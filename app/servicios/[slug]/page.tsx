import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { ImageGallery } from "@/components/image-gallery";
import { Breadcrumb } from "@/components/marketing/breadcrumb";
import { RelatedLinks } from "@/components/marketing/related-links";
import { SectionHeading } from "@/components/marketing/section-heading";
import { StickyServiceCta } from "@/components/services/sticky-service-cta";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo-schema";
import { projectsBySlug } from "@/projects/data";
import { serviceMetaBySlug, servicesBySlug, servicesData } from "@/services/data";

type ServiceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return servicesData.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = servicesBySlug[slug];

  if (!service) {
    return pageMetadata("Servicio", "Servicio de Dosmas Grup.", `/servicios/${slug}`);
  }

  return pageMetadata(service.title, service.paragraphs[0], `/servicios/${service.slug}`, {
    type: "website",
    image: "/images/fondo.webp"
  });
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = servicesBySlug[slug];

  if (!service) {
    notFound();
  }

  const serviceIndex = servicesData.findIndex((item) => item.slug === slug);
  const prev = serviceIndex > 0 ? servicesData[serviceIndex - 1] : servicesData[servicesData.length - 1];
  const next = serviceIndex < servicesData.length - 1 ? servicesData[serviceIndex + 1] : servicesData[0];

  const meta = serviceMetaBySlug[slug];

  const relatedProjects = (meta?.relatedProjects || [])
    .map((projectSlug) => projectsBySlug[projectSlug])
    .filter(Boolean)
    .map((project) => ({
      title: project.title,
      href: `/proyectos/${project.slug}`,
      meta: `${project.category} · ${project.location}`
    }));

  return (
    <>
      <JsonLd
        id={`breadcrumb-servicio-${slug}`}
        data={breadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Servicios", path: "/servicios" },
          { name: service.title, path: `/servicios/${service.slug}` }
        ])}
      />
      <JsonLd
        id={`schema-servicio-${slug}`}
        data={serviceSchema({
          name: service.title,
          description: service.paragraphs[0],
          path: `/servicios/${service.slug}`
        })}
      />

      <PageHero title={service.title} subtitle="SERVICIOS. Cada servicio irá acompañado de tres o cuatro fotos." />

      <section className="bg-white py-20">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <Breadcrumb
              items={[
                { label: "Inicio", href: "/" },
                { label: "Servicios", href: "/servicios" },
                { label: service.title }
              ]}
            />
            <SectionHeading eyebrow={meta?.category ?? "Servicio"} title={service.title} />

            <div className="mt-6 space-y-5 text-base leading-8 text-base-dark">
              {service.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {service.bullets ? (
                <ul className="list-disc space-y-2 pl-6">
                  {service.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href={`/servicios/${prev.slug}`}
                className="rounded-full border border-base-mid px-4 py-2 text-sm font-semibold text-base-black transition hover:border-brand-yellow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
              >
                ← {prev.title}
              </Link>
              <Link
                href={`/servicios/${next.slug}`}
                className="rounded-full border border-base-mid px-4 py-2 text-sm font-semibold text-base-black transition hover:border-brand-yellow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
              >
                {next.title} →
              </Link>
            </div>
          </Reveal>

          <Reveal>
            <div className="space-y-6">
              <StickyServiceCta title={service.title} ctaLabel={meta?.ctaLabel ?? "Solicitar presupuesto"} />
              <RelatedLinks title="Proyectos relacionados" items={relatedProjects} />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-base-mid bg-base-light py-20">
        <Container>
          <Reveal>
            <ImageGallery images={service.gallery} label={service.title} />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
