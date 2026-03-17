import Image from "next/image";
import { Container } from "@/components/container";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  image?: string;
};

export function PageHero({ title, subtitle, image = "/images/projects/excavacion-en-son-vida/01.webp" }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-base-mid bg-base-light">
      <Image
        src={image}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,17,17,0.78)_0%,rgba(17,17,17,0.58)_38%,rgba(255,255,255,0.18)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(241,171,0,0.28),transparent_22%),radial-gradient(circle_at_86%_16%,rgba(136,94,128,0.22),transparent_26%)]" />
      <Container className="relative py-20 md:py-24">
        <div className="max-w-4xl rounded-[2rem] border border-white/20 bg-white/10 p-8 backdrop-blur-sm md:p-10">
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white md:text-5xl">{title}</h1>
          {subtitle ? <p className="mt-4 max-w-3xl text-lg text-white/88">{subtitle}</p> : null}
        </div>
      </Container>
    </section>
  );
}
