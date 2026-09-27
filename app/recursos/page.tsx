import type { Metadata } from "next";
import RecursosListing from "../components/recursos/RecursosListing";
import SiteFooter from "../components/site/SiteFooter";
import SiteHeader from "../components/site/SiteHeader";
import {
  RECURSOS_HUB_METADATA,
  getFeaturedArticle,
  getGeneralArticles,
  pageCountFor,
  slicePage,
} from "../lib/recursos";

export const metadata: Metadata = {
  title: RECURSOS_HUB_METADATA.title,
  description: RECURSOS_HUB_METADATA.description,
  alternates: { canonical: "/recursos" },
  openGraph: {
    title: RECURSOS_HUB_METADATA.title,
    description: RECURSOS_HUB_METADATA.description,
    url: "https://micert.cl/recursos",
  },
};

function pageHref(page: number) {
  return page === 1 ? "/recursos" : `/recursos/pagina/${page}`;
}

export default function RecursosPage() {
  const articles = getGeneralArticles();

  return (
    <>
      <SiteHeader />
      <RecursosListing
        heading="Guías para emitir con confianza"
        lede="Artículos sobre producto, comparativas y normativa para los OTEC que quieren modernizar la emisión de certificados."
        featured={getFeaturedArticle()}
        articles={slicePage(articles, 1)}
        page={1}
        pageCount={pageCountFor(articles.length)}
        active="todos"
        pageHref={pageHref}
      />
      <SiteFooter />
    </>
  );
}
