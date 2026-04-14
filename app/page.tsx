import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { HomeHeroSlider, type HeroSlide } from "@/components/marketing/home-hero-slider";
import { FeaturePanels } from "@/components/marketing/feature-panels";
import { LogoCloud } from "@/components/marketing/logo-cloud";
import { SectionHeading } from "@/components/marketing/section-heading";
import { StatsStrip } from "@/components/marketing/stats-strip";
import { Reveal } from "@/components/reveal";
import { TeamOrganigram } from "@/components/team/team-organigram";
import {
  getSiteContent
} from "@/content/site-content";
import {
  COMPANY_MACHINES,
  COMPANY_PROFESSIONALS,
  COMPANY_START_YEAR,
  COMPANY_TRAJECTORY_YEARS,
  COMPANY_VEHICLES
} from "@/lib/company-stats";
import { getDictionary, getServerLocale } from "@/lib/i18n-server";
import { getTeamMembers } from "@/team/data";
import { pageMetadata } from "@/lib/metadata";

export const revalidate = 86400;

export async function generateMetadata() {
  const locale = await getServerLocale();
  const t = getDictionary(locale);

  return pageMetadata(t.common.home, t.home.slide1.description, "/", {
    image: "/images/brand/portada.webp",
    keywords: ["excavaciones", "obra civil", "movimiento de tierras", "Mallorca"]
  });
}

const brandLogoItems = [
  { name: "Dosmas Obras y Proyectos", src: "/images/brand/marques-02.webp" },
  { name: "Coexma Obres i Serveis", src: "/images/brand/marques-01.webp" },
  { name: "Tot Natura", src: "/images/brand/captura-01.webp" },
  { name: "Pintura 3V", src: "/images/brand/captura-02.webp" }
];

const brandPhotoByName: Record<string, string> = {
  "Dosmas Obras y Proyectos": "/images/brands/dosmas-obras-y-proyectos.jpg",
  "Coexma Obres i Serveis": "/images/brands/coexma-obres-i-serveis.jpg",
  "Tot Natura": "/images/brands/tot-natura.jpg",
  "Pintura 3V": "/images/brands/pintura-3v.jpg"
};

const valueIcons = [
  <svg key="clock" viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
    <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>,
  <svg key="team" viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
    <path d="M6 17c0-2.2 2.7-4 6-4s6 1.8 6 4" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.8" />
  </svg>,
  <svg key="leaf" viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
    <path d="M19 5c-8 .2-12 4-12 11 0 .9.1 1.8.4 2.6C15.7 18.2 19 12.8 19 5Z" stroke="currentColor" strokeWidth="1.8" />
    <path d="M8 15c1.5-2.2 3.5-3.7 6-4.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>,
  <svg key="star" viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
    <path
      d="m12 4 2.5 5.2 5.7.8-4.1 4 1 5.7-5.1-2.7-5.1 2.7 1-5.7-4.1-4 5.7-.8L12 4Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
  </svg>
];

export default async function HomePage() {
  const locale = await getServerLocale();
  const t = getDictionary(locale);
  const uiCopyByLocale = {
    es: {
      years: "años",
      trustEyebrow: "DESCÚBRENOS",
      sliderSummary: "Resumen destacado de DOSMAS GRUP",
      previousSlide: "Slide anterior",
      nextSlide: "Siguiente slide",
      companyIndicators: "Indicadores de empresa",
      slideSelector: "Selector de slides",
      showSlide: "Mostrar slide {n}"
    },
    ca: {
      years: "anys",
      trustEyebrow: "DESCOBREIX-NOS",
      sliderSummary: "Resum destacat de DOSMAS GRUP",
      previousSlide: "Diapositiva anterior",
      nextSlide: "Diapositiva següent",
      companyIndicators: "Indicadors d'empresa",
      slideSelector: "Selector de diapositives",
      showSlide: "Mostrar diapositiva {n}"
    },
    en: {
      years: "years",
      trustEyebrow: "DISCOVER US",
      sliderSummary: "Featured summary of DOSMAS GRUP",
      previousSlide: "Previous slide",
      nextSlide: "Next slide",
      companyIndicators: "Company indicators",
      slideSelector: "Slide selector",
      showSlide: "Show slide {n}"
    },
    de: {
      years: "Jahre",
      trustEyebrow: "ENTDECKEN SIE UNS",
      sliderSummary: "Hervorgehobene Übersicht von DOSMAS GRUP",
      previousSlide: "Vorherige Folie",
      nextSlide: "Nächste Folie",
      companyIndicators: "Unternehmenskennzahlen",
      slideSelector: "Folienauswahl",
      showSlide: "Folie {n} anzeigen"
    }
  } as const;
  const uiCopy = uiCopyByLocale[locale];
  const organigramButtonLabel =
    locale === "es"
      ? "VER ORGANIGRAMA GENERAL"
      : locale === "ca"
        ? "VEURE ORGANIGRAMA GENERAL"
        : locale === "en"
          ? "VIEW GENERAL ORGANIGRAM"
          : "GESAMTES ORGANIGRAMM ANSEHEN";
  const organigramEyebrow =
    locale === "es"
      ? "ORGANIGRAMA GENERAL"
      : locale === "ca"
        ? "ORGANIGRAMA GENERAL"
        : locale === "en"
          ? "GENERAL ORGANIGRAM"
          : "ALLGEMEINES ORGANIGRAMM";
  const {
    aboutUsContent,
    brandDetails,
    brandsSection,
    dossierLink,
    editorialSection,
    homeIntroParagraphs,
    rootsLink,
    teamSection,
    trustSection,
    valuesSection
  } = getSiteContent(locale);
  const teamMembers = getTeamMembers(locale);
  const currentYear = new Date().getFullYear();
  const homeHeroSlides: HeroSlide[] = [
    {
      id: "slide-empresa",
      eyebrow: t.home.slide1.eyebrow,
      title: t.home.slide1.title,
      description: t.home.slide1.description,
      ctaHref: "/nosotros",
      ctaLabel: t.home.slide1.cta,
      image: "/images/projects/son-ribotet/08.jpg",
      metrics: [
        { label: t.home.slide1.metric1, value: t.home.slide1.value1 },
        { label: t.home.slide1.metric2, value: t.home.slide1.value2 },
        { label: t.home.slide1.metric3, value: t.home.slide1.value3 }
      ]
    },
    {
      id: "slide-proyectos",
      eyebrow: t.home.slide2.eyebrow,
      title: t.home.slide2.title,
      description: t.home.slide2.description,
      ctaHref: "/proyectos",
      ctaLabel: t.home.slide2.cta,
      image: "/images/projects/excavacion-son-vida-2024/21.jpg",
      metrics: [
        { label: t.home.slide2.metric1, value: t.home.slide2.value1 },
        { label: t.home.slide2.metric2, value: t.home.slide2.value2 },
        { label: t.home.slide2.metric3, value: t.home.slide2.value3 }
      ]
    },
    {
      id: "slide-areas",
      eyebrow: t.home.slide3.eyebrow,
      title: t.home.slide3.title,
      description: t.home.slide3.description,
      ctaHref: "/areas-de-trabajo",
      ctaLabel: t.home.slide3.cta,
      image: "/images/projects/son-ribotet-nueva-vina/04.jpg",
      metrics: [
        { label: t.home.slide3.metric1, value: t.home.slide3.value1 },
        { label: t.home.slide3.metric2, value: t.home.slide3.value2 },
        { label: t.home.slide3.metric3, value: t.home.slide3.value3 }
      ]
    }
  ];

  return (
    <>
      <section className="border-b border-brand-gray/35 bg-white">
        <Container className="space-y-10 py-8 lg:py-12">
          <Reveal>
            <HomeHeroSlider
              slides={homeHeroSlides}
              labels={{
                summary: uiCopy.sliderSummary,
                previousSlide: uiCopy.previousSlide,
                nextSlide: uiCopy.nextSlide,
                companyIndicators: uiCopy.companyIndicators,
                slideSelector: uiCopy.slideSelector,
                showSlide: uiCopy.showSlide
              }}
            />
          </Reveal>

          <Reveal>
            <article className="grid gap-8 rounded-3xl border border-brand-gray/30 bg-white p-7 shadow-soft lg:grid-cols-[1.15fr_0.85fr] lg:p-10">
              <div>
                <SectionHeading
                  title="DOSMAS GRUP"
                  description={t.home.slide1.description}
                />
                <div className="mt-7 space-y-5 text-base leading-8 text-base-dark">
                  {homeIntroParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <Link
                  href="/nosotros"
                  className="mt-7 inline-flex rounded-full bg-brand-yellow px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-base-black transition hover:bg-brand-yellow/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
                >
                  {t.home.discoverMore}
                </Link>
              </div>

              <div className="flex flex-col justify-center gap-6">
                <article className="mx-auto inline-flex h-56 w-56 items-center justify-center rounded-full border-4 border-brand-purple bg-brand-yellow text-center shadow-soft">
                  <p className="px-6 text-center text-base-black">
                    <span className="block text-4xl font-bold leading-none">+</span>
                    <span className="block text-[5.4rem] font-extrabold leading-none">70</span>
                    <span className="block text-lg font-bold leading-5">{uiCopy.years}</span>
                    <span className="mt-2 block text-xs font-semibold uppercase tracking-[0.22em] leading-5">
                      ({COMPANY_START_YEAR} – {currentYear})
                    </span>
                  </p>
                </article>

                <article className="overflow-hidden rounded-3xl border border-base-mid bg-white shadow-soft">
                  <div className="relative aspect-[5/4]">
                    <Image
                      src="/images/team/foto-grupo-puente.jpg"
                      alt="DOSMAS GRUP"
                      fill
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </article>
              </div>
            </article>
          </Reveal>
        </Container>
      </section>

      <section className="bg-brand-yellow py-10">
        <Container>
          <Reveal>
            <StatsStrip
              stats={[
                { label: t.home.statsTrajectory, value: `+${COMPANY_TRAJECTORY_YEARS} ${uiCopy.years}` },
                { label: t.home.statsProfessionals, value: `+${COMPANY_PROFESSIONALS}` },
                { label: t.home.statsVehicles, value: `+${COMPANY_VEHICLES}` },
                { label: t.home.statsMachines, value: `+${COMPANY_MACHINES}` }
              ]}
            />
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <Reveal>
            <SectionHeading title={aboutUsContent.title.toUpperCase()} />
            <div className="mt-8 space-y-5 text-base leading-8 text-base-dark">
              {aboutUsContent.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <ul className="list-disc space-y-2 pl-6">
                {aboutUsContent.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link
                href={rootsLink.href}
                className="inline-flex rounded-full bg-brand-yellow px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-base-black transition hover:bg-brand-yellow/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
              >
                {rootsLink.label}
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-brand-purple/20 bg-brand-purple py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {editorialSection.blocks.map((block) => (
              <Reveal key={block.title}>
                <article className="h-full rounded-2xl border border-base-mid bg-white p-8 shadow-soft">
                  <span className="block h-1 w-14 rounded-full bg-brand-yellow" />
                  <h3 className="mt-3 text-xl font-semibold text-base-black">{block.title}</h3>
                  <p className="mt-4 text-base leading-7 text-base-dark">{block.text}</p>
                  {"bullets" in block && block.bullets ? (
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-7 text-base-dark">
                      {block.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                  {"text2" in block && block.text2 ? (
                    <p className="mt-4 text-base leading-7 text-base-dark">{block.text2}</p>
                  ) : null}
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-yellow py-20">
        <Container className="space-y-10">
          <Reveal>
            <SectionHeading title={brandsSection.title.toUpperCase()} description={brandsSection.subtitle} />
            <div className="mt-6 space-y-4 text-base leading-8 text-base-dark">
              {brandsSection.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <LogoCloud title={brandsSection.title.split(":")[0]} logos={brandLogoItems} />
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {brandDetails.map((brand) => (
              <Reveal key={brand.name}>
                <article className="h-full rounded-2xl border border-base-mid bg-white p-6 shadow-soft">
                  <div className="mb-5 overflow-hidden rounded-xl border border-base-mid">
                    <div className="relative aspect-[16/9]">
                      <Image
                        src={brandPhotoByName[brand.name] ?? "/images/fondo.webp"}
                        alt={brand.name}
                        fill
                        sizes="(min-width: 768px) 45vw, 100vw"
                        className="object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-base-black md:text-3xl">{brand.name}</h3>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-base-dark">{brand.title}</p>
                  <div className="mt-4 space-y-4 text-base leading-7 text-base-dark">
                    {brand.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {"bullets" in brand && brand.bullets ? (
                      <ul className="list-disc space-y-2 pl-5">
                        {brand.bullets.map((item: string) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <Reveal>
            <SectionHeading title={teamSection.title.toUpperCase()} />
            <div className="mt-6 space-y-4 text-base leading-8 text-base-dark">
              {teamSection.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <article className="overflow-hidden rounded-3xl border border-brand-purple/20 bg-white shadow-soft">
                <div className="relative aspect-[16/10]">
                  <Image
                    src="/images/team/equipo-general.jpg"
                    alt="Equipo DOSMAS GRUP"
                    fill
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </article>
            </Reveal>
            <Reveal>
              <article className="overflow-hidden rounded-3xl border border-brand-purple/20 bg-white shadow-soft">
                <div className="relative aspect-[16/10]">
                  <Image
                    src="/images/team/foto-grupo-dosmas.jpg"
                    alt="Equipo directivo y operativa DOSMAS GRUP"
                    fill
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </article>
            </Reveal>
          </div>

          <TeamOrganigram
            members={teamMembers}
            phoneLabel={t.pages.contact.phoneLabel}
            organigramLink={{
              href: "/docs/organigrama-general-marzo-2026.pdf",
              label: organigramButtonLabel,
              eyebrow: organigramEyebrow
            }}
          />
        </Container>
      </section>

      <section className="border-y border-brand-purple/20 bg-brand-gray py-20">
        <Container>
          <Reveal>
            <FeaturePanels
              items={valuesSection.map((value, index) => ({
                title: value.title,
                body: value.text,
                icon: valueIcons[index]
              }))}
            />
          </Reveal>
        </Container>
      </section>

      <section className="bg-brand-yellow py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <SectionHeading title={trustSection.title.toUpperCase()} />
            <div className="mt-6 space-y-4">
              {trustSection.bullets.map((reason, index) => (
                <p
                  key={reason}
                  className={`text-base leading-8 text-base-black md:text-lg ${
                    index < trustSection.bullets.length - 1 ? "font-semibold" : "font-bold"
                  }`}
                >
                  {reason}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-3xl border border-brand-purple/20 bg-brand-purple p-6 text-white shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-yellow">{uiCopy.trustEyebrow}</p>
              <div className="relative mt-4 aspect-video overflow-hidden rounded-2xl border border-white/20 bg-white shadow-soft">
                <iframe
                  src={trustSection.youtubeUrl}
                  title={trustSection.youtubeLabel}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <article className="rounded-2xl bg-white p-4">
                  <div className="relative mx-auto aspect-square max-w-[12rem]">
                    <Image
                      src="/images/certifications/eco-friendly.jpeg"
                      alt="Sello ECO FRIENDLY de DOSMAS GRUP"
                      fill
                      sizes="(min-width: 1024px) 16vw, 40vw"
                      className="object-contain"
                    />
                  </div>
                </article>
                <article className="rounded-2xl bg-white p-4">
                  <div className="relative mx-auto aspect-[3/4] max-w-[10rem]">
                    <Image
                      src="/images/certifications/reduzco-compenso-calculo-2022.jpeg"
                      alt="Distintivo Reduzco Compenso Calculo 2022"
                      fill
                      sizes="(min-width: 1024px) 16vw, 40vw"
                      className="object-contain"
                    />
                  </div>
                </article>
              </div>
              <div className="mt-4 rounded-2xl bg-white p-4">
                <div className="relative mx-auto aspect-[726/327] w-full max-w-[30rem]">
                  <Image
                    src="/images/brand/we-always-comply.png"
                    alt="We always comply"
                    fill
                    sizes="(min-width: 1024px) 28vw, 70vw"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-brand-gray pb-24 pt-12">
        <Container>
          <Reveal>
            <article className="overflow-hidden rounded-3xl border border-brand-purple/30 bg-brand-purple p-10 text-white shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-yellow">{dossierLink.title}</p>
              <a
                href={dossierLink.href}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex rounded-full bg-brand-yellow px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-base-black transition hover:bg-brand-yellow/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                {t.home.dossierButton}
              </a>
            </article>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
