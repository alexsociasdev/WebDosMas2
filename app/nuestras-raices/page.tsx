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

const rootsCopyByLocale = {
  es: {
    title: "NUESTRAS RAÍCES",
    breadcrumb: "Nuestras Raíces",
    subtitle: "Álbum fotográfico histórico de DOSMAS GRUP.",
    altPrefix: "Nuestras raíces"
  },
  ca: {
    title: "LES NOSTRES ARRELS",
    breadcrumb: "Les nostres arrels",
    subtitle: "Àlbum fotogràfic històric de DOSMAS GRUP.",
    altPrefix: "Les nostres arrels"
  },
  en: {
    title: "OUR ROOTS",
    breadcrumb: "Our roots",
    subtitle: "Historical photographic archive of DOSMAS GRUP.",
    altPrefix: "Our roots"
  },
  de: {
    title: "UNSERE WURZELN",
    breadcrumb: "Unsere Wurzeln",
    subtitle: "Historisches Fotoarchiv von DOSMAS GRUP.",
    altPrefix: "Unsere Wurzeln"
  }
} as const;

export async function generateMetadata() {
  const locale = await getServerLocale();
  const copy = rootsCopyByLocale[locale];

  return pageMetadata(copy.breadcrumb, copy.subtitle, "/nuestras-raices", {
    image: "/images/heritage/foto-02.jpg"
  });
}

export default async function NuestrasRaicesPage() {
  const locale = await getServerLocale();
  const t = getDictionary(locale);
  const copy = rootsCopyByLocale[locale];

  return (
    <>
      <JsonLd
        id="breadcrumb-nuestras-raices"
        data={breadcrumbSchema([
          { name: t.common.home, path: "/" },
          { name: copy.breadcrumb, path: "/nuestras-raices" }
        ])}
      />

      <PageHero
        title={copy.title}
        subtitle={copy.subtitle}
        image="/images/heritage/foto-02.jpg"
      />

      <section className="bg-white py-20">
        <Container>
          <Reveal>
            <Breadcrumb items={[{ label: t.common.home, href: "/" }, { label: copy.breadcrumb }]} />
            <SectionHeading title={copy.title} />
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {heritagePhotos.map((photo, index) => (
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
                      alt={`${copy.altPrefix} ${index + 1}`}
                      fill
                      sizes="(min-width: 1280px) 28vw, (min-width: 768px) 44vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 ring-0 ring-brand-yellow/80 transition group-hover:ring-4" />
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
