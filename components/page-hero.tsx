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
        className="scale-[1.01] object-cover"
      />
      <div className="absolute inset-0 bg-base-black/40 backdrop-blur-[0.75px]" />
      <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(136,94,128,0.34)_0%,rgba(17,17,17,0.14)_35%,rgba(17,17,17,0.48)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-base-black/28 to-transparent" />
      <Container className="relative py-20 md:py-28 xl:py-32">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white shadow-soft backdrop-blur-md">
            <span className="h-2.5 w-2.5 rounded-full bg-brand-yellow" />
            DOSMAS GRUP
          </div>
          <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[0.92] tracking-tight text-white sm:text-5xl md:text-6xl xl:text-7xl">
            {title}
          </h1>
          {subtitle ? (
            <div className="mt-6 max-w-3xl rounded-[1.75rem] border border-white/20 bg-white/12 px-5 py-4 shadow-soft backdrop-blur-md md:px-6 md:py-5">
              <div className="mb-4 h-1.5 w-20 rounded-full bg-brand-yellow" />
              <p className="text-base leading-7 text-white/95 md:text-xl md:leading-8">{subtitle}</p>
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
