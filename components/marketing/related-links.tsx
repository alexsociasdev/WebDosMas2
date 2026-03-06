import Link from "next/link";

type RelatedItem = {
  title: string;
  href: string;
  meta?: string;
};

type RelatedLinksProps = {
  title: string;
  items: RelatedItem[];
};

export function RelatedLinks({ title, items }: RelatedLinksProps) {
  if (!items.length) {
    return null;
  }

  return (
    <section className="rounded-2xl border border-base-mid bg-white p-6 shadow-soft">
      <h3 className="text-lg font-semibold text-base-black">{title}</h3>
      <ul className="mt-4 grid gap-3">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="block rounded-xl border border-base-mid bg-base-light px-4 py-3 transition hover:-translate-y-0.5 hover:border-brand-yellow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
            >
              <p className="text-sm font-semibold text-base-black">{item.title}</p>
              {item.meta ? <p className="mt-1 text-xs text-base-dark">{item.meta}</p> : null}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
