"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { ProjectItem } from "@/projects/data";
import { getDictionary, type Locale } from "@/lib/i18n";

type ProjectsFilterGridProps = {
  projects: ProjectItem[];
  locale: Locale;
};

export function ProjectsFilterGrid({ projects, locale }: ProjectsFilterGridProps) {
  const t = getDictionary(locale);
  const categories = useMemo(
    () => [t.common.all, ...Array.from(new Set(projects.map((project) => project.category)))],
    [projects, t.common.all]
  );
  const years = useMemo(
    () => [t.common.allMasc, ...Array.from(new Set(projects.map((project) => project.year))).sort().reverse()],
    [projects, t.common.allMasc]
  );

  const [category, setCategory] = useState(t.common.all);
  const [year, setYear] = useState(t.common.allMasc);
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return projects.filter((project) => {
      const categoryOk = category === t.common.all || project.category === category;
      const yearOk = year === t.common.allMasc || project.year === year;
      const searchOk =
        search.trim().length === 0 ||
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.location.toLowerCase().includes(search.toLowerCase());

      return categoryOk && yearOk && searchOk;
    });
  }, [projects, category, year, search, t.common.all, t.common.allMasc]);

  return (
    <div className="space-y-8">
      <div className="rounded-3xl border-2 border-brand-purple/20 bg-gradient-to-br from-brand-yellow/10 via-white to-brand-purple/10 p-6 shadow-soft">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-base-black">{t.pages.projects.filterTitle}</p>
        <div className="grid gap-4 md:grid-cols-3">
        <label className="space-y-2 text-sm font-medium text-base-dark">
          {t.pages.projects.filterCategory}
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="w-full rounded-lg border border-base-mid bg-white px-3 py-2 text-base-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
            aria-label={t.pages.projects.filterCategory}
          >
            {categories.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-2 text-sm font-medium text-base-dark">
          {t.pages.projects.filterYear}
          <select
            value={year}
            onChange={(event) => setYear(event.target.value)}
            className="w-full rounded-lg border border-base-mid bg-white px-3 py-2 text-base-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
            aria-label={t.pages.projects.filterYear}
          >
            {years.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-2 text-sm font-medium text-base-dark">
          {t.pages.projects.filterSearch}
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder={t.pages.projects.searchPlaceholder}
            className="w-full rounded-lg border border-base-mid bg-white px-3 py-2 text-base-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
            aria-label={t.pages.projects.filterSearch}
          />
        </label>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((project) => (
          <article
            key={project.slug}
            className="group overflow-hidden rounded-3xl border border-base-mid bg-base-light transition hover:-translate-y-1 hover:shadow-soft"
          >
            <div className="relative aspect-[4/3]">
              <Image src={project.image} alt={project.title} fill className="object-cover" loading="lazy" sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-5 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.2em]">{project.category}</p>
                <p className="mt-1 text-sm">{project.location}</p>
              </div>
            </div>
            <div className="space-y-3 p-6">
              <h2 className="text-xl font-semibold text-base-black">{project.title}</h2>
              <p className="line-clamp-4 text-base leading-7 text-base-dark">{project.summary}</p>
              <Link
                href={`/proyectos/${project.slug}`}
                className="inline-flex rounded-full border border-base-mid px-4 py-2 text-sm font-semibold text-base-black transition hover:border-brand-yellow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
              >
                {t.common.viewProject}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
