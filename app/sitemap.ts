import type { MetadataRoute } from "next";
import { postsData } from "@/posts/data";
import { projectsData } from "@/projects/data";
import { servicesData } from "@/services/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.dosmasgrup.com";

  const staticRoutes = [
    "",
    "/nuestras-raices",
    "/nosotros",
    "/servicios",
    "/proyectos",
    "/areas-de-trabajo",
    "/noticias",
    "/rsc",
    "/solicite-presupuesto",
    "/contacto",
    "/legal/datos-legales",
    "/legal/politica-privacidad",
    "/legal/politica-cookies"
  ];

  const now = new Date();

  const staticEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8
  }));

  const serviceEntries = servicesData.map((service) => ({
    url: `${baseUrl}/servicios/${service.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  const projectEntries = projectsData.map((project) => ({
    url: `${baseUrl}/proyectos/${project.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  const postEntries = postsData.map((post) => ({
    url: `${baseUrl}/noticias/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6
  }));

  return [...staticEntries, ...serviceEntries, ...projectEntries, ...postEntries];
}
