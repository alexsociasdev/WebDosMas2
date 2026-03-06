import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { Breadcrumb } from "@/components/marketing/breadcrumb";
import { RelatedLinks } from "@/components/marketing/related-links";
import { SectionHeading } from "@/components/marketing/section-heading";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { pageMetadata } from "@/lib/metadata";
import { articleSchema, breadcrumbSchema } from "@/lib/seo-schema";
import { postsBySlug, postsData } from "@/posts/data";
import { projectsBySlug } from "@/projects/data";
import { servicesBySlug } from "@/services/data";

type NewsDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return postsData.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: NewsDetailPageProps) {
  const { slug } = await params;
  const post = postsBySlug[slug];

  if (!post) {
    return pageMetadata("Noticia", "Noticia de Dosmas Grup.", `/noticias/${slug}`);
  }

  return pageMetadata(post.title, post.excerpt, `/noticias/${post.slug}`, {
    image: post.image,
    type: "article"
  });
}

export default async function NoticiaDetailPage({ params }: NewsDetailPageProps) {
  const { slug } = await params;
  const post = postsBySlug[slug];

  if (!post) {
    notFound();
  }

  const relatedServices = post.relatedServices
    .map((serviceSlug) => servicesBySlug[serviceSlug])
    .filter(Boolean)
    .map((service) => ({ title: service.title, href: `/servicios/${service.slug}` }));

  const relatedProjects = post.relatedProjects
    .map((projectSlug) => projectsBySlug[projectSlug])
    .filter(Boolean)
    .map((project) => ({
      title: project.title,
      href: `/proyectos/${project.slug}`,
      meta: `${project.category} · ${project.location}`
    }));

  return (
    <>
      <JsonLd
        id={`breadcrumb-noticia-${slug}`}
        data={breadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Noticias", path: "/noticias" },
          { name: post.title, path: `/noticias/${post.slug}` }
        ])}
      />
      <JsonLd
        id={`schema-noticia-${slug}`}
        data={articleSchema({
          title: post.title,
          description: post.excerpt,
          path: `/noticias/${post.slug}`,
          image: post.image,
          datePublished: post.date,
          author: post.author
        })}
      />

      <PageHero title={post.title} subtitle={post.excerpt} image={post.image} />

      <section className="bg-white py-20">
        <Container className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          <Reveal>
            <Breadcrumb
              items={[
                { label: "Inicio", href: "/" },
                { label: "Noticias", href: "/noticias" },
                { label: post.title }
              ]}
            />
            <SectionHeading eyebrow={post.category} title={post.title} description={`${post.date} · ${post.author} · ${post.readingTime}`} />
            <div className="mt-6 space-y-5 text-base leading-8 text-base-dark">
              {post.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <div className="space-y-6">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-base-mid shadow-soft">
                <Image src={post.image} alt={post.title} fill className="object-cover" priority sizes="(min-width: 1024px) 45vw, 100vw" />
              </div>
              <RelatedLinks title="Servicios relacionados" items={relatedServices} />
              <RelatedLinks title="Proyectos relacionados" items={relatedProjects} />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
