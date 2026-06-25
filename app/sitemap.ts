import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: "https://micert.cl/",
      lastModified,
      priority: 1.0,
    },
    {
      url: "https://micert.cl/demo",
      lastModified,
      priority: 0.8,
    },
  ];
}
