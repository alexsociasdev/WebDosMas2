import { Container } from "@/components/container";
import { Breadcrumb } from "@/components/marketing/breadcrumb";
import { ProjectsFilterGrid } from "@/components/projects/projects-filter-grid";
import { SectionHeading } from "@/components/marketing/section-heading";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { getDictionary, getServerLocale } from "@/lib/i18n-server";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/seo-schema";
import { projectsData } from "@/projects/data";

export const metadata = pageMetadata(
  "Proyectos",
  "Proyectos ejecutados por Dosmas Grup en Baleares.",
  "/proyectos",
  { image: "/images/brand/portada.webp", keywords: ["proyectos", "obra civil", "Mallorca"] }
);

export default async function ProyectosPage() {
  const locale = await getServerLocale();
  const t = getDictionary(locale);
  const text = t.pages.projects;

  return (
    <>
      <JsonLd
        id="breadcrumb-proyectos"
        data={breadcrumbSchema([
          { name: t.common.home, path: "/" },
          { name: t.common.projects, path: "/proyectos" }
        ])}
      />

      <PageHero
        title={text.pageTitle}
        subtitle={text.pageSubtitle}
        image="/images/brand/portada.webp"
      />

      <section className="bg-white py-20">
        <Container>
          <Reveal>
            <Breadcrumb items={[{ label: t.common.home, href: "/" }, { label: t.common.projects }]} />
            <SectionHeading
              eyebrow={text.eyebrow}
              title={text.heading}
              description={text.description}
            />
          </Reveal>

          <div className="mt-10">
            <Reveal>
              <ProjectsFilterGrid projects={projectsData} locale={locale} />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
