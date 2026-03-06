import { Container } from "@/components/container";
import { Breadcrumb } from "@/components/marketing/breadcrumb";
import { MosaicGallery } from "@/components/marketing/mosaic-gallery";
import { ProjectsFilterGrid } from "@/components/projects/projects-filter-grid";
import { SectionHeading } from "@/components/marketing/section-heading";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/seo-schema";
import { projectsData } from "@/projects/data";

export const metadata = pageMetadata(
  "Proyectos",
  "PROYECTOS fotos de obras con pequeña descripción de cada obra.",
  "/proyectos",
  { image: "/images/brand/portada.webp", keywords: ["proyectos", "obra civil", "Mallorca"] }
);

export default function ProyectosPage() {
  return (
    <>
      <JsonLd
        id="breadcrumb-proyectos"
        data={breadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Proyectos", path: "/proyectos" }
        ])}
      />

      <PageHero
        title="Proyectos"
        subtitle="PROYECTOS fotos de obras con pequeña descripción de cada obra."
        image="/images/brand/portada.webp"
      />

      <section className="bg-white py-20">
        <Container>
          <Reveal>
            <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "Proyectos" }]} />
            <SectionHeading
              eyebrow="Proyectos"
              title="Casos de estudio y obras ejecutadas"
              description="PROYECTOS fotos de obras con pequeña descripción de cada obra."
            />
          </Reveal>

          <div className="mt-10">
            <Reveal>
              <ProjectsFilterGrid projects={projectsData} />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-y border-base-mid bg-base-light py-20">
        <Container>
          <Reveal>
            <MosaicGallery
              images={projectsData.flatMap((project) => project.gallery.slice(0, 2)).slice(0, 10)}
              label="Proyectos Dosmas Grup"
            />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
