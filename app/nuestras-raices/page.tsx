import Image from "next/image";
import { Container } from "@/components/container";
import { Breadcrumb } from "@/components/marketing/breadcrumb";
import { SectionHeading } from "@/components/marketing/section-heading";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { heritagePhotos } from "@/content/site-content";
import { getDictionary, getServerLocale } from "@/lib/i18n-server";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/seo-schema";

export const metadata = pageMetadata(
  "Nuestras Raíces",
  "Álbum fotográfico histórico de DOSMAS GRUP.",
  "/nuestras-raices",
  { image: "/images/heritage/foto-01.jpg" }
);

export default async function NuestrasRaicesPage() {
  const locale = await getServerLocale();
  const t = getDictionary(locale);

  return (
    <>
      <JsonLd
        id="breadcrumb-nuestras-raices"
        data={breadcrumbSchema([
          { name: t.common.home, path: "/" },
          { name: "Nuestras Raíces", path: "/nuestras-raices" }
        ])}
      />

      <PageHero
        title="NUESTRAS RAÍCES"
        subtitle="Álbum fotográfico histórico de DOSMAS GRUP."
        image="/images/heritage/foto-01.jpg"
      />

      <section className="bg-white py-20">
        <Container>
          <Reveal>
            <Breadcrumb items={[{ label: t.common.home, href: "/" }, { label: "Nuestras Raíces" }]} />
            <SectionHeading title="NUESTRAS RAÍCES" />
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {heritagePhotos.map((photo) => (
              <Reveal key={photo.id}>
                <a
                  href={photo.image}
                  target="_blank"
                  rel="noreferrer"
                  className="group block overflow-hidden rounded-3xl border border-brand-gray/20 bg-white shadow-soft transition hover:-translate-y-1 hover:border-brand-yellow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={photo.image}
                      alt={photo.title}
                      fill
                      sizes="(min-width: 1280px) 28vw, (min-width: 768px) 44vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 ring-0 ring-brand-yellow/80 transition group-hover:ring-4" />
                  </div>
                  <div className="bg-white px-5 py-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-base-dark">{photo.title}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
