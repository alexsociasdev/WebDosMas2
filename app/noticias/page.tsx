import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { Breadcrumb } from "@/components/marketing/breadcrumb";
import { SectionHeading } from "@/components/marketing/section-heading";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { getDictionary, getServerLocale } from "@/lib/i18n-server";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/seo-schema";
import { postsData } from "@/posts/data";

export const metadata = pageMetadata(
  "Noticias",
  "Noticias de Dosmas Grup.",
  "/noticias",
  { image: "/images/projects/casa-en-son-vida/08.webp", keywords: ["blog", "noticias", "obra civil"] }
);

export default async function NoticiasPage() {
  const locale = await getServerLocale();
  const t = getDictionary(locale);
  const text = t.pages.news;
  const [featured, ...rest] = postsData;

  return (
    <>
      <JsonLd
        id="breadcrumb-noticias"
        data={breadcrumbSchema([
          { name: t.common.home, path: "/" },
          { name: t.common.news, path: "/noticias" }
        ])}
      />

      <PageHero
        title={text.pageTitle}
        subtitle={text.pageSubtitle}
        image="/images/projects/casa-en-son-vida/08.webp"
      />

      <section className="bg-brand-yellow py-20">
        <Container className="space-y-10">
          <Reveal>
            <Breadcrumb items={[{ label: t.common.home, href: "/" }, { label: t.common.news }]} />
            <SectionHeading
              eyebrow={text.eyebrow}
              title={text.heading}
              description={text.description}
            />
          </Reveal>

          <Reveal>
            <article className="grid gap-6 overflow-hidden rounded-3xl border border-base-mid bg-white p-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-base-mid">
                <Image src={featured.image} alt={featured.title} fill className="object-cover" priority sizes="(min-width: 1024px) 52vw, 100vw" />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-base-dark">{featured.category}</p>
                <h2 className="mt-2 text-3xl font-semibold text-base-black">{featured.title}</h2>
                <Link
                  href={`/noticias/${featured.slug}`}
                  className="mt-6 inline-flex w-fit rounded-full bg-brand-purple px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
                >
                  {t.common.readArticle}
                </Link>
              </div>
            </article>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {rest.map((post) => (
              <Reveal key={post.slug}>
                <article className="grid gap-5 overflow-hidden rounded-2xl border border-base-mid bg-white p-5 sm:grid-cols-[0.9fr_1.1fr]">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-base-mid">
                    <Image src={post.image} alt={post.title} fill className="object-cover" loading="lazy" sizes="(min-width: 768px) 28vw, 100vw" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-base-dark">{post.category}</p>
                    <h3 className="mt-2 text-xl font-semibold text-base-black">{post.title}</h3>
                    <Link
                      href={`/noticias/${post.slug}`}
                      className="mt-4 inline-flex rounded-full bg-brand-purple px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
                    >
                      {t.common.readNews}
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
