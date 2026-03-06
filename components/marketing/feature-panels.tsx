import { ReactNode } from "react";

type FeaturePanel = {
  title: string;
  body: string;
  icon: ReactNode;
};

type FeaturePanelsProps = {
  items: FeaturePanel[];
};

export function FeaturePanels({ items }: FeaturePanelsProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((item) => (
        <article
          key={item.title}
          className="group rounded-2xl border border-base-mid bg-white p-7 transition hover:-translate-y-1 hover:shadow-soft"
        >
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-brand-purple/30 bg-brand-purple/10 text-base-black">
            {item.icon}
          </div>
          <h3 className="text-xl font-semibold text-base-black">{item.title}</h3>
          <p className="mt-3 text-base leading-7 text-base-dark">{item.body}</p>
        </article>
      ))}
    </div>
  );
}
