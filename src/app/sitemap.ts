import type { MetadataRoute } from "next";
import { abs, areas, services } from "@/lib/site";

// `output: export` requires metadata routes to be explicitly static.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: [string, number, MetadataRoute.Sitemap[number]["changeFrequency"]][] = [
    ["/", 1, "weekly"],
    ["/services", 0.9, "monthly"],
    ["/products", 0.8, "monthly"],
    ["/service-areas", 0.8, "monthly"],
    ["/about", 0.6, "yearly"],
    ["/contact", 0.7, "yearly"],
    ["/privacy", 0.2, "yearly"],
    ["/terms", 0.2, "yearly"],
  ];

  return [
    ...staticRoutes.map(([path, priority, changeFrequency]) => ({
      url: abs(path),
      lastModified: now,
      changeFrequency,
      priority,
    })),
    ...services.map((s) => ({
      url: abs(`/services/${s.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...areas.map((a) => ({
      url: abs(`/ro-service/${a.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
