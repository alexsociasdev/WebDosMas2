import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { Breadcrumb } from "@/components/marketing/breadcrumb";
import { SectionHeading } from "@/components/marketing/section-heading";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/seo-schema";
import { postsData } from "@/posts/data";

export const metadata = pageMetadata(
  "Noticias",
  "NOTICIAS: este apartado sería como un blog.",
  "/noticias",
  { image: "/images/brand/portada.webp", keywords: ["blog", "noticias", "obra civil"] }
);

export default function NoticiasPage() {
  const [featured, ...rest] = postsData;

  return (
    <>
      <JsonLd
        id="breadcrumb-noticias"
        data={breadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Noticias", path: "/noticias" }
        ])}
      />

      <PageHero title="Noticias" subtitle="NOTICIAS: este apartado sería como un blog." image="/images/brand/portada.webp" />

      <section className="bg-white py-20">
        <Container className="space-y-10">
          <Reveal>
            <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "Noticias" }]} />
            <SectionHeading
              eyebrow="Blog"
              title="Actualidad y conocimiento técnico"
              description="NOTICIAS: este apartado sería como un blog."
            />
          </Reveal>

          <Reveal>
            <article className="grid gap-6 overflow-hidden rounded-3xl border border-base-mid bg-base-light p-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-base-mid">
                <Image src={featured.image} alt={featured.title} fill className="object-cover" priority sizes="(min-width: 1024px) 52vw, 100vw" />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-base-dark">{featured.category}</p>
                <h2 className="mt-2 text-3xl font-semibold text-base-black">{featured.title}</h2>
                <p className="mt-3 text-base leading-7 text-base-dark">{featured.excerpt}</p>
                <p className="mt-3 text-xs text-base-dark">
                  {featured.date} · {featured.author} · {featured.readingTime}
                </p>
                <Link
                  href={`/noticias/${featured.slug}`}
                  className="mt-6 inline-flex w-fit rounded-full bg-brand-yellow px-5 py-2 text-sm font-semibold text-base-black transition hover:bg-brand-yellow/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
                >
                  Leer artículo
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
                    <p className="mt-2 text-sm leading-7 text-base-dark">{post.excerpt}</p>
                    <p className="mt-2 text-xs text-base-dark">
                      {post.date} · {post.readingTime}
                    </p>
                    <Link
                      href={`/noticias/${post.slug}`}
                      className="mt-4 inline-flex rounded-full border border-base-mid px-4 py-2 text-sm font-semibold text-base-black transition hover:border-brand-yellow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
                    >
                      Leer noticia
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
