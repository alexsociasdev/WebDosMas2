"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { ProjectItem } from "@/projects/data";

type ProjectsFilterGridProps = {
  projects: ProjectItem[];
};

export function ProjectsFilterGrid({ projects }: ProjectsFilterGridProps) {
  const categories = useMemo(
    () => ["Todas", ...Array.from(new Set(projects.map((project) => project.category)))],
    [projects]
  );
  const years = useMemo(
    () => ["Todos", ...Array.from(new Set(projects.map((project) => project.year))).sort().reverse()],
    [projects]
  );

  const [category, setCategory] = useState("Todas");
  const [year, setYear] = useState("Todos");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return projects.filter((project) => {
      const categoryOk = category === "Todas" || project.category === category;
      const yearOk = year === "Todos" || project.year === year;
      const searchOk =
        search.trim().length === 0 ||
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.location.toLowerCase().includes(search.toLowerCase());

      return categoryOk && yearOk && searchOk;
    });
  }, [projects, category, year, search]);

  return (
    <div className="space-y-8">
      <div className="grid gap-4 rounded-2xl border border-base-mid bg-white p-5 md:grid-cols-3">
        <label className="space-y-2 text-sm font-medium text-base-dark">
          Categoría
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="w-full rounded-lg border border-base-mid px-3 py-2 text-base-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
            aria-label="Filtrar por categoría"
          >
            {categories.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-2 text-sm font-medium text-base-dark">
          Año
          <select
            value={year}
            onChange={(event) => setYear(event.target.value)}
            className="w-full rounded-lg border border-base-mid px-3 py-2 text-base-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
            aria-label="Filtrar por año"
          >
            {years.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-2 text-sm font-medium text-base-dark">
          Buscar
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Título o ubicación"
            className="w-full rounded-lg border border-base-mid px-3 py-2 text-base-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
            aria-label="Buscar proyecto"
          />
        </label>
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
                Ver proyecto
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
