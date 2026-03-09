"use client";

import { useMemo, useState } from "react";
import type { ServiceItem } from "@/services/data";
import { serviceMetaBySlug } from "@/services/data";
import { getDictionary, type Locale } from "@/lib/i18n";

type ServiceIndexProps = {
  services: ServiceItem[];
  locale: Locale;
};

export function ServiceIndex({ services, locale }: ServiceIndexProps) {
  const t = getDictionary(locale);
  const categories = useMemo(
    () => [t.common.all, ...Array.from(new Set(services.map((service) => serviceMetaBySlug[service.slug]?.category || "General")))],
    [services, t.common.all]
  );

  const [selectedCategory, setSelectedCategory] = useState(t.common.all);

  const items = useMemo(() => {
    return services.filter((service) => {
      if (selectedCategory === t.common.all) {
        return true;
      }

      return (serviceMetaBySlug[service.slug]?.category || "General") === selectedCategory;
    });
  }, [services, selectedCategory, t.common.all]);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setSelectedCategory(category)}
            className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow ${
              selectedCategory === category
                ? "border-brand-purple bg-brand-purple/10 text-base-black"
                : "border-base-mid bg-white text-base-dark hover:border-brand-yellow"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <nav aria-label={t.pages.services.indexAria} className="rounded-2xl border border-base-mid bg-white p-5">
        <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((service) => (
            <li key={service.slug}>
              <a
                href={`#${service.slug}`}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-base-dark transition hover:bg-base-light hover:text-base-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
              >
                {service.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
