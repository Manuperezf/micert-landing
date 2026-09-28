import type { MetadataRoute } from "next";
import {
  RESOURCE_ARTICLES,
  getCategoryArticles,
  getFilterCategories,
  getGeneralArticles,
  newestDateISO,
  pageCountFor,
  slicePage,
} from "./lib/recursos";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-08-23");
  const generalArticles = getGeneralArticles();
  const generalPages = pageCountFor(generalArticles.length);

  const listingPages: MetadataRoute.Sitemap = [];
  for (let page = 2; page <= generalPages; page += 1) {
    const articles = slicePage(generalArticles, page);
    const newest = newestDateISO(articles);
    if (!newest) continue;
    listingPages.push({
      url: `https://micert.cl/recursos/pagina/${page}`,
      lastModified: new Date(newest),
      priority: 0.5,
    });
  }

  for (const category of getFilterCategories()) {
    const articles = getCategoryArticles(category.slug);
    const pages = pageCountFor(articles.length);
    for (let page = 1; page <= pages; page += 1) {
      const slice = slicePage(articles, page);
      const newest = newestDateISO(slice);
      if (!newest) continue;
      const path =
        page === 1
          ? `/recursos/categoria/${category.slug}`
          : `/recursos/categoria/${category.slug}/pagina/${page}`;
      listingPages.push({
        url: `https://micert.cl${path}`,
        lastModified: new Date(newest),
        priority: 0.5,
      });
    }
  }

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
      url: "https://micert.cl/eventos",
      lastModified,
      priority: 0.8,
    },
    {
      url: "https://micert.cl/recursos",
      lastModified,
      priority: 0.85,
    },
    ...listingPages,
    ...RESOURCE_ARTICLES.map((article) => ({
      url: `https://micert.cl/recursos/${article.slug}`,
      lastModified: new Date(article.dateISO),
      priority: 0.7,
    })),
  ];
}
