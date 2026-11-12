import type { ResourceArticle } from "./recursos";

const SITE = "https://micert.cl";

const organization = {
  "@type": "Organization",
  name: "MiCert",
  url: SITE,
  logo: `${SITE}/logo.svg`,
};

function articleUrl(slug: string) {
  return `${SITE}/recursos/${slug}`;
}

function absoluteUrl(path: string) {
  if (path.startsWith("https://") || path.startsWith("http://")) return path;
  return `${SITE}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildArticleSchema(article: ResourceArticle) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription || article.excerpt,
    datePublished: article.dateISO,
    ...(article.coverImage
      ? { image: absoluteUrl(article.coverImage) }
      : {}),
    author: organization,
    publisher: organization,
    mainEntityOfPage: articleUrl(article.slug),
    inLanguage: "es-CL",
  };
}

export function buildArticleBreadcrumbSchema(article: ResourceArticle) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: `${SITE}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Recursos",
        item: `${SITE}/recursos`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: articleUrl(article.slug),
      },
    ],
  };
}
