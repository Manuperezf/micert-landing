import type { MetadataRoute } from "next";
import { RESOURCE_ARTICLES } from "./lib/recursos";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: "https://micert.cl/",
      lastModified,
      priority: 1.0,
    },
    {
      url: "https://micert.cl/precios",
      lastModified,
      priority: 0.9,
    },
    {
      url: "https://micert.cl/recursos",
      lastModified,
      priority: 0.85,
    },
    ...RESOURCE_ARTICLES.map((article) => ({
      url: `https://micert.cl/recursos/${article.slug}`,
      lastModified: new Date(article.dateISO),
      priority: 0.7,
    })),
  ];
}
