import Image from "next/image";
import { Container } from "@/components/container";
import { Breadcrumb } from "@/components/marketing/breadcrumb";
import { CountUp } from "@/components/marketing/count-up";
import { FeaturePanels } from "@/components/marketing/feature-panels";
import { SectionHeading } from "@/components/marketing/section-heading";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { aboutUsContent, editorialSection, teamSection, valuesSection } from "@/content/site-content";
import { getDictionary, getServerLocale } from "@/lib/i18n-server";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/seo-schema";
import { teamMembers } from "@/team/data";

export const metadata = pageMetadata(
  "Nosotros",
  "Dosmas Grup es un grupo de empresas especializado en excavaciones, movimientos de tierra y obras integrales, con sede en Mallorca.",
  "/nosotros",
  { image: "/images/team/foto-grupo-puente.jpg" }
);

const icons = [
  <svg key="1" viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true"><path d="M5 12h14M12 5v14" stroke="currentColor" strokeWidth="1.8" /></svg>,
  <svg key="2" viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true"><path d="M4 17 9 12l4 3 7-8" stroke="currentColor" strokeWidth="1.8" /></svg>,
  <svg key="3" viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true"><path d="M12 3 4 7v6c0 5 3.5 7.5 8 8 4.5-.5 8-3 8-8V7l-8-4Z" stroke="currentColor" strokeWidth="1.8" /></svg>,
  <svg key="4" viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true"><path d="M6 18h12M8 18V7h8v11" stroke="currentColor" strokeWidth="1.8" /></svg>
];

export default async function NosotrosPage() {
  const locale = await getServerLocale();
  const t = getDictionary(locale);

  return (
    <>
      <JsonLd
        id="breadcrumb-nosotros"
        data={breadcrumbSchema([
          { name: t.common.home, path: "/" },
          { name: t.nav.about, path: "/nosotros" }
        ])}
      />

      <PageHero
        title={t.nav.about}
        subtitle="Dosmas Grup es un grupo de empresas especializado en excavaciones, movimientos de tierra y obras integrales, con sede en Mallorca."
        image="/images/team/foto-grupo-puente.jpg"
      />

      <section className="bg-white py-20">
        <Container className="space-y-10">
          <Reveal>
            <Breadcrumb items={[{ label: t.common.home, href: "/" }, { label: t.nav.about }]} />
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

          <Reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <article className="rounded-2xl border border-base-mid bg-white p-5"><p className="text-sm text-base-dark">{t.home.statsTrajectory}</p><p className="mt-2 text-3xl font-bold text-base-black"><CountUp to={70} suffix="+" /></p></article>
              <article className="rounded-2xl border border-base-mid bg-white p-5"><p className="text-sm text-base-dark">{t.home.statsProfessionals}</p><p className="mt-2 text-3xl font-bold text-base-black"><CountUp to={200} suffix="+" /></p></article>
              <article className="rounded-2xl border border-base-mid bg-white p-5"><p className="text-sm text-base-dark">{t.home.statsMachines}</p><p className="mt-2 text-3xl font-bold text-base-black"><CountUp to={250} suffix="+" /></p></article>
              <article className="rounded-2xl border border-base-mid bg-white p-5"><p className="text-sm text-base-dark">{t.home.statsVehicles}</p><p className="mt-2 text-3xl font-bold text-base-black"><CountUp to={50} suffix="+" /></p></article>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-base-mid bg-brand-purple py-20">
        <Container className="grid gap-6 md:grid-cols-3">
          {editorialSection.blocks.map((block) => (
            <Reveal key={block.title}>
              <article className="h-full rounded-2xl border border-base-mid bg-white p-7">
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
        </Container>
      </section>

      <section className="bg-brand-yellow py-20">
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
            <article className="mt-8 overflow-hidden rounded-3xl border border-base-mid bg-white shadow-soft">
              <div className="relative aspect-[16/7]">
                <Image src="/images/team/foto-grupo-puente.jpg" alt="Equipo de Dosmas Grup" fill className="object-cover" />
              </div>
            </article>
          </Reveal>

          <Reveal>
            <article className="mt-6 overflow-hidden rounded-3xl border border-base-mid bg-white shadow-soft">
              <div className="relative aspect-[16/7]">
                <Image src="/images/team/foto-grupo-dosmas.jpg" alt="Equipo de Dosmas Grup" fill className="object-cover" />
              </div>
            </article>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <Reveal key={member.email}>
                <article className="overflow-hidden rounded-2xl border border-base-mid bg-white transition hover:-translate-y-1 hover:shadow-soft">
                  <div className="relative aspect-[4/3]">
                    <Image src={member.image} alt={member.name} fill className="object-cover" loading="lazy" sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 100vw" />
                  </div>
                  <div className="space-y-1 p-5">
                    <h3 className="text-lg font-semibold text-base-black">{member.name}</h3>
                    <p className="text-sm text-base-dark">{member.role}</p>
                    <p className="text-sm font-medium text-base-black">{t.pages.contact.phoneLabel}: {member.phone}</p>
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

          <div className="mt-10">
            <Reveal>
              <FeaturePanels
                items={valuesSection.map((value, index) => ({
                  title: value.title,
                  body: value.text,
                  icon: icons[index]
                }))}
              />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
