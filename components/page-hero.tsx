import Image from "next/image";
import { Container } from "@/components/container";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  image?: string;
};

export function PageHero({ title, subtitle, image = "/images/fondo.webp" }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-base-mid bg-base-light">
      <Image
        src={image}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/60" />
      <Container className="relative py-20 md:py-24">
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-base-black md:text-5xl">{title}</h1>
        {subtitle ? <p className="mt-4 max-w-3xl text-lg text-base-dark">{subtitle}</p> : null}
      </Container>
    </section>
  );
}
