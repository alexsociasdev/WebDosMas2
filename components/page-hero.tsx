import Image from "next/image";
import { Container } from "@/components/container";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  image?: string;
};

export function PageHero({ title, subtitle, image = "/images/projects/excavacion-en-son-vida/01.webp" }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-brand-gray/35 bg-brand-gray">
      <Image
        src={image}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="scale-[1.02] object-cover blur-[2px]"
      />
      <div className="absolute inset-0 bg-base-black/42" />
      <Container className="relative py-24 md:py-32">
        <div className="max-w-4xl rounded-[2rem] border border-white/30 bg-base-black/30 p-8 shadow-soft backdrop-blur-sm md:p-10">
          <span className="mb-4 block h-1.5 w-20 rounded-full bg-brand-yellow" />
          <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white md:text-6xl xl:text-7xl">{title}</h1>
          {subtitle ? <p className="mt-5 max-w-3xl text-xl leading-8 text-white md:text-2xl">{subtitle}</p> : null}
        </div>
      </Container>
    </section>
  );
}
