import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { HomeHeroSlider, type HeroSlide } from "@/components/marketing/home-hero-slider";
import { FeaturePanels } from "@/components/marketing/feature-panels";
import { LogoCloud } from "@/components/marketing/logo-cloud";
import { SectionHeading } from "@/components/marketing/section-heading";
import { StatsStrip } from "@/components/marketing/stats-strip";
import { Reveal } from "@/components/reveal";
import {
  aboutUsContent,
  brandDetails,
  brandsSection,
  dossierLink,
  editorialSection,
  homeIntroParagraphs,
  teamSection,
  trustSection,
  valuesSection
} from "@/content/site-content";
import { getDictionary, getServerLocale } from "@/lib/i18n-server";
import { pageMetadata } from "@/lib/metadata";
import { teamMembers } from "@/team/data";

export const metadata = pageMetadata(
  "Inicio",
  "Dosmas Grup es un referente en el sector de las excavaciones y obras en Mallorca.",
  "/",
  {
    image: "/images/brand/portada.webp",
    keywords: ["excavaciones", "obra civil", "movimiento de tierras", "Mallorca"]
  }
);
export const revalidate = 86400;

const startYear = 1954;

const brandLogoItems = [
  { name: "Dosmas Obras y Proyectos", src: "/images/brand/marques-02.webp" },
  { name: "Coexma Obres i Serveis", src: "/images/brand/marques-01.webp" },
  { name: "Tot Natura", src: "/images/brand/captura-01.webp" },
  { name: "Pintura 3V", src: "/images/brand/captura-02.webp" }
];

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
  const currentYear = new Date().getFullYear();
  const homeHeroSlides: HeroSlide[] = [
    {
      id: "slide-empresa",
      eyebrow: t.home.slide1.eyebrow,
      title: t.home.slide1.title,
      description: t.home.slide1.description,
      ctaHref: "/nosotros",
      ctaLabel: t.home.slide1.cta,
      image: "/images/fondo.webp",
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
      image: "/images/projects/aeropuerto-de-palma/08.webp",
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
      image: "/images/projects/son-ribotet/12.webp",
      metrics: [
        { label: t.home.slide3.metric1, value: t.home.slide3.value1 },
        { label: t.home.slide3.metric2, value: t.home.slide3.value2 },
        { label: t.home.slide3.metric3, value: t.home.slide3.value3 }
      ]
    }
  ];
  const homeTeamMembers = teamMembers.map((member, index) => ({
    ...member,
    name: `${t.home.worker} ${index + 1}`,
    email: `trabajador${index + 1}@dosmasgrup.com`
  }));

  return (
    <>
      <section className="relative overflow-hidden border-b border-base-mid bg-base-black">
        <Image src="/images/fondo.webp" alt="Fondo Dosmas Grup" fill priority sizes="100vw" className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,206,5,0.3),transparent_32%),radial-gradient(circle_at_85%_15%,rgba(155,57,237,0.38),transparent_35%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-base-black/70 via-base-black/60 to-base-black/70" />

        <Container className="relative space-y-10 py-8 lg:py-12">
          <Reveal>
            <HomeHeroSlider slides={homeHeroSlides} />
          </Reveal>

          <Reveal>
            <article className="grid gap-8 rounded-3xl border border-brand-purple/30 bg-white/[0.92] p-7 shadow-soft backdrop-blur lg:grid-cols-[1.15fr_0.85fr] lg:p-10">
              <div>
                <SectionHeading
                  eyebrow="WEB DOSMAS GRUP"
                  title="Dosmas Grup"
                  description="Dosmas Grup es un referente en el sector de las excavaciones y obras en Mallorca."
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
                <article className="mx-auto inline-flex h-56 w-56 items-center justify-center rounded-full border-2 border-brand-purple/40 bg-gradient-to-br from-brand-yellow via-[#ffe06b] to-brand-purple/20 text-center shadow-soft">
                  <p className="px-6 text-3xl font-extrabold leading-9 text-base-black">
                    + de 70 años ({startYear} – {currentYear})
                  </p>
                </article>

                <article className="overflow-hidden rounded-3xl border border-base-mid bg-base-light shadow-soft">
                  <div className="relative aspect-[5/4]">
                    <Image
                      src="/images/fondo.webp"
                      alt="Dosmas Grup"
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

      <section className="bg-gradient-to-b from-[#1d1d1d] to-[#111111] py-10">
        <Container>
          <Reveal>
            <StatsStrip
              stats={[
                { label: t.home.statsTrajectory, value: "+70 años" },
                { label: t.home.statsProfessionals, value: "+200" },
                { label: t.home.statsVehicles, value: "+50" },
                { label: t.home.statsMachines, value: "+250" }
              ]}
            />
          </Reveal>
        </Container>
      </section>

      <section className="bg-gradient-to-b from-[#f7f7f7] via-[#fffdf4] to-[#f5f5f5] py-20">
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
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-brand-purple/20 bg-gradient-to-b from-[#f3f3f3] to-[#ece9f6] py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {editorialSection.blocks.map((block) => (
              <Reveal key={block.title}>
                <article className="h-full rounded-2xl border border-base-mid bg-white p-8 shadow-soft">
                  <span className="block h-1 w-14 rounded-full bg-gradient-to-r from-brand-yellow to-brand-purple" />
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

      <section className="bg-gradient-to-b from-[#ececec] via-[#ede6fb] to-[#f3f3f3] py-20">
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
            <LogoCloud title="NUESTRAS MARCA" logos={brandLogoItems} />
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {brandDetails.map((brand) => (
              <Reveal key={brand.name}>
                <article className="h-full rounded-2xl border border-base-mid bg-white p-6 shadow-soft">
                  <div className="mb-5 overflow-hidden rounded-xl border border-base-mid">
                    <div className="relative aspect-[16/9]">
                      <Image
                        src="/images/fondo.webp"
                        alt={brand.name}
                        fill
                        sizes="(min-width: 768px) 45vw, 100vw"
                        className="object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-base-dark">{brand.name}</p>
                  <h3 className="mt-2 text-xl font-semibold text-base-black">{brand.title}</h3>
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

      <section className="bg-gradient-to-b from-[#ffffff] via-[#f8f8f8] to-[#f2eefb] py-20">
        <Container>
          <Reveal>
            <SectionHeading title={teamSection.title.toUpperCase()} />
            <div className="mt-6 space-y-4 text-base leading-8 text-base-dark">
              {teamSection.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <article className="mt-8 overflow-hidden rounded-3xl border border-base-mid bg-base-light shadow-soft">
              <div className="relative aspect-[16/7]">
                <Image src="/images/team/foto-grupo-dosmas.jpg" alt="Equipo de Dosmas Grup" fill className="object-cover" />
              </div>
            </article>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homeTeamMembers.map((member) => (
              <Reveal key={member.email}>
                <article className="overflow-hidden rounded-2xl border border-brand-purple/20 bg-gradient-to-b from-base-light to-white transition hover:-translate-y-1 hover:shadow-soft">
                  <div className="relative aspect-[4/3]">
                    <Image src={member.image} alt={member.name} fill className="object-cover" loading="lazy" />
                  </div>
                  <div className="space-y-1 p-5">
                    <h3 className="text-lg font-semibold text-base-black">{member.name}</h3>
                    <p className="text-sm text-base-dark">{member.role}</p>
                    <p className="text-sm font-medium text-base-black">Teléfono: {member.phone}</p>
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-block text-sm font-medium text-base-black underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
                    >
                      {member.email}
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-brand-purple/20 bg-gradient-to-b from-[#efefef] via-[#f8f1ff] to-[#f2f2f2] py-20">
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

      <section className="bg-gradient-to-b from-[#ffffff] via-[#f9f9f9] to-[#fff7de] py-20">
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <SectionHeading title={trustSection.title.toUpperCase()} />
            <ul className="mt-6 list-disc space-y-3 pl-6 text-base leading-8 text-base-dark">
              {trustSection.bullets.map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <div className="rounded-3xl border border-brand-purple/20 bg-gradient-to-br from-brand-yellow/20 via-base-light to-brand-purple/10 p-6 shadow-soft">
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-base-mid bg-white">
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
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-gradient-to-b from-[#1a1a1a] to-[#111111] pb-24 pt-12">
        <Container>
          <Reveal>
            <article className="overflow-hidden rounded-3xl border border-brand-purple/30 bg-gradient-to-r from-base-black via-[#1d1d1d] to-[#2f2153] p-10 text-white shadow-soft">
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
