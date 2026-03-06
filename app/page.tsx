import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
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
  { name: "Dosmas Obras y Proyectos", src: "/images/brand/marques-01.webp" },
  { name: "Coexma Obres i Serveis", src: "/images/brand/marques-02.webp" },
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

export default function HomePage() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <section className="relative overflow-hidden border-b border-base-mid bg-white">
        <Image
          src="/images/brand/portada.webp"
          alt="Dosmas Grup"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white/95 to-white/70" />
        <Container className="relative grid gap-12 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="WEB DOSMAS GRUP"
              title="Dosmas Grup"
              description="Dosmas Grup es un referente en el sector de las excavaciones y obras en Mallorca."
              action={
                <Link
                  href="/nosotros"
                  className="inline-flex rounded-full bg-brand-yellow px-6 py-3 text-sm font-semibold uppercase tracking-wide text-base-black transition hover:bg-brand-yellow/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
                >
                  DESCUBRE MÁS SOBRE NOSOTROS
                </Link>
              }
            />

            <div className="mt-8 space-y-5 text-base leading-8 text-base-dark">
              {homeIntroParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal className="flex flex-col justify-center gap-7">
            <article className="mx-auto inline-flex h-48 w-48 items-center justify-center rounded-full border border-base-mid bg-base-mid/60 text-center shadow-soft lg:mx-0 lg:self-end">
              <p className="px-6 text-base font-semibold leading-6 text-base-black">
                + de 70 años ({startYear} – {currentYear})
              </p>
            </article>

            <article className="overflow-hidden rounded-3xl border border-base-mid bg-white shadow-soft">
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
          </Reveal>
        </Container>
      </section>

      <section className="-mt-8 pb-8">
        <Container>
          <Reveal>
            <StatsStrip
              stats={[
                { label: "Trayectoria", value: "+70 años" },
                { label: "Profesionales", value: "+200" },
                { label: "Vehículos", value: "+50" },
                { label: "Máquinas", value: "+250" }
              ]}
            />
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <Reveal>
            <SectionHeading title={aboutUsContent.title} />
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

      <section className="border-y border-base-mid bg-base-light py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {editorialSection.blocks.map((block, index) => (
              <Reveal key={block.title}>
                <article className="h-full rounded-2xl border border-base-mid bg-white p-8 shadow-soft">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-purple">0{index + 1}</p>
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

      <section className="bg-[#efefef] py-20">
        <Container className="space-y-10">
          <Reveal>
            <SectionHeading title={brandsSection.title} description={brandsSection.subtitle} />
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

      <section className="bg-white py-20">
        <Container>
          <Reveal>
            <SectionHeading title={teamSection.title} />
            <div className="mt-6 space-y-4 text-base leading-8 text-base-dark">
              {teamSection.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <Reveal key={member.email}>
                <article className="overflow-hidden rounded-2xl border border-base-mid bg-base-light transition hover:-translate-y-1 hover:shadow-soft">
                  <div className="relative aspect-[4/3]">
                    <Image src={member.image} alt={member.name} fill className="object-cover" loading="lazy" />
                  </div>
                  <div className="space-y-1 p-5">
                    <h3 className="text-lg font-semibold text-base-black">{member.name}</h3>
                    <p className="text-sm text-base-dark">{member.role}</p>
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

      <section className="border-y border-base-mid bg-base-light py-20">
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

      <section className="bg-white py-20">
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <SectionHeading title={trustSection.title} />
            <ul className="mt-6 list-disc space-y-3 pl-6 text-base leading-8 text-base-dark">
              {trustSection.bullets.map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <div className="rounded-3xl border border-base-mid bg-base-light p-6 shadow-soft">
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

      <section className="pb-24">
        <Container>
          <Reveal>
            <article className="overflow-hidden rounded-3xl border border-base-mid bg-gradient-to-r from-base-black via-[#1d1d1d] to-base-dark p-10 text-white shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-yellow">{dossierLink.title}</p>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-white/90">{dossierLink.text}</p>
              <a
                href={dossierLink.href}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex rounded-full bg-brand-yellow px-6 py-3 text-sm font-semibold text-base-black transition hover:bg-brand-yellow/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Abrir dossier corporativo
              </a>
            </article>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
