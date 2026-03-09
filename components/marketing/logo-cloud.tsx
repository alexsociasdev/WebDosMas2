import Image from "next/image";

type LogoItem = {
  name: string;
  src: string;
};

type LogoCloudProps = {
  title: string;
  logos: LogoItem[];
};

export function LogoCloud({ title, logos }: LogoCloudProps) {
  return (
    <section className="rounded-3xl border border-base-mid bg-white p-8 shadow-soft">
      <h3 className="text-center text-sm font-semibold uppercase tracking-[0.24em] text-base-dark">{title}</h3>
      <div className="mt-6 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {logos.map((logo) => (
          <article
            key={logo.name}
            className="group flex min-h-[220px] flex-col items-center justify-center rounded-2xl border border-base-mid bg-white p-5 transition hover:-translate-y-1 hover:border-brand-yellow"
          >
            <div className="relative h-20 w-full">
              <Image src={logo.src} alt={logo.name} fill className="object-contain" loading="lazy" />
            </div>
            <p className="mt-4 text-center text-base font-medium text-base-dark">{logo.name}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
