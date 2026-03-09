import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { Breadcrumb } from "@/components/marketing/breadcrumb";
import { MosaicGallery } from "@/components/marketing/mosaic-gallery";
import { RelatedLinks } from "@/components/marketing/related-links";
import { SectionHeading } from "@/components/marketing/section-heading";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { getDictionary, getServerLocale } from "@/lib/i18n-server";
import { pageMetadata } from "@/lib/metadata";
import { articleSchema, breadcrumbSchema, projectSchema } from "@/lib/seo-schema";
import { postsData } from "@/posts/data";
import { projectsBySlug, projectsData } from "@/projects/data";
import { servicesBySlug } from "@/services/data";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projectsData.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projectsBySlug[slug];

  if (!project) {
    return pageMetadata("Proyecto", "Proyecto de Dosmas Grup.", `/proyectos/${slug}`);
  }

  return pageMetadata(project.title, project.summary, `/proyectos/${project.slug}`, {
    image: project.image,
    type: "article"
  });
}

export default async function ProyectoDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projectsBySlug[slug];
  const locale = await getServerLocale();
  const t = getDictionary(locale);

  if (!project) {
    notFound();
  }

  const relatedServices = project.relatedServices
    .map((serviceSlug) => servicesBySlug[serviceSlug])
    .filter(Boolean)
    .map((service) => ({
      title: service.title,
      href: `/servicios/${service.slug}`
    }));

  const relatedPosts = postsData
    .filter((post) => post.relatedProjects.includes(project.slug))
    .slice(0, 3)
    .map((post) => ({
      title: post.title,
      href: `/noticias/${post.slug}`,
      meta: `${post.category} · ${post.date}`
    }));

  return (
    <>
      <JsonLd
        id={`breadcrumb-proyecto-${slug}`}
        data={breadcrumbSchema([
          { name: t.common.home, path: "/" },
          { name: t.common.projects, path: "/proyectos" },
          { name: project.title, path: `/proyectos/${project.slug}` }
        ])}
      />
      <JsonLd
        id={`schema-proyecto-${slug}`}
        data={projectSchema({
          name: project.title,
          description: project.summary,
          path: `/proyectos/${project.slug}`,
          image: project.image,
          location: project.location
        })}
      />
      <JsonLd
        id={`schema-proyecto-articulo-${slug}`}
        data={articleSchema({
          title: project.title,
          description: project.summary,
          path: `/proyectos/${project.slug}`,
          image: project.image,
          datePublished: `${project.year}-01-10`,
          author: "Dosmas Grup"
        })}
      />

      <PageHero title={project.title} subtitle={project.summary} image={project.image} />

      <section className="bg-white py-20">
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <Breadcrumb
              items={[
                { label: t.common.home, href: "/" },
                { label: t.common.projects, href: "/proyectos" },
                { label: project.title }
              ]}
            />
            <SectionHeading
              eyebrow={project.category}
              title={project.title}
              description={`${project.location} · ${project.year}`}
            />
            <div className="mt-5 space-y-5 text-base leading-8 text-base-dark">
              {project.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {project.kpis.map((kpi) => (
                <article key={kpi.label} className="rounded-xl border border-base-mid bg-base-light p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-base-dark">{kpi.label}</p>
                  <p className="mt-2 text-2xl font-bold text-base-black">{kpi.value}</p>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="space-y-6">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-base-mid shadow-soft">
                <Image src={project.image} alt={project.title} fill className="object-cover" priority sizes="(min-width: 1024px) 42vw, 100vw" />
              </div>

              <article className="rounded-2xl border border-base-mid bg-white p-6 shadow-soft">
                <h3 className="text-xl font-semibold text-base-black">{t.pages.projects.caseStudy}</h3>
                <dl className="mt-4 space-y-4 text-sm leading-7 text-base-dark">
                  <div>
                    <dt className="font-semibold text-base-black">{t.pages.projects.challenge}</dt>
                    <dd>{project.caseStudy.reto}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-base-black">{t.pages.projects.solution}</dt>
                    <dd>{project.caseStudy.solucion}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-base-black">{t.pages.projects.execution}</dt>
                    <dd>{project.caseStudy.ejecucion}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-base-black">{t.pages.projects.result}</dt>
                    <dd>{project.caseStudy.resultado}</dd>
                  </div>
                </dl>
              </article>

              <div className="rounded-2xl border border-base-mid bg-base-light p-6">
                <p className="text-sm text-base-dark">{t.pages.projects.needSimilarProject}</p>
                <Link
                  href="/solicite-presupuesto"
                  className="mt-3 inline-flex rounded-full bg-brand-yellow px-5 py-2 text-sm font-semibold text-base-black transition hover:bg-brand-yellow/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
                >
                  {t.common.requestQuote}
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-base-mid bg-base-light py-20">
        <Container>
          <Reveal>
            <MosaicGallery images={project.gallery} label={project.title} />
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <RelatedLinks title={t.common.relatedServices} items={relatedServices} />
          </Reveal>
          <Reveal>
            <RelatedLinks title={t.common.relatedNews} items={relatedPosts} />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
