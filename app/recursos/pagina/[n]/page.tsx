import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RecursosListing from "../../../components/recursos/RecursosListing";
import SiteFooter from "../../../components/site/SiteFooter";
import SiteHeader from "../../../components/site/SiteHeader";
import {
  RECURSOS_HUB_METADATA,
  getGeneralArticles,
  getGeneralPageParams,
  pageCountFor,
  slicePage,
} from "../../../lib/recursos";

export const dynamicParams = false;

type PageProps = {
  params: { n: string };
};

function pageHref(page: number) {
  return page === 1 ? "/recursos" : `/recursos/pagina/${page}`;
}

function pageNumber(n: string) {
  if (!/^[0-9]+$/.test(n)) return null;
  const page = Number(n);
  const pageCount = pageCountFor(getGeneralArticles().length);
  if (page < 2 || page > pageCount) return null;
  return page;
}

export function generateStaticParams() {
  return getGeneralPageParams();
}

export function generateMetadata({ params }: PageProps): Metadata {
  const page = pageNumber(params.n);
  if (!page) return {};
  const title = `Recursos de certificación digital para OTEC — Página ${page} | MiCert`;
  const description = RECURSOS_HUB_METADATA.description;
  const canonical = `/recursos/pagina/${page}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: `https://micert.cl${canonical}`,
    },
  };
}

export default function RecursosPaginaPage({ params }: PageProps) {
  const page = pageNumber(params.n);
  if (!page) notFound();
  const articles = getGeneralArticles();

  return (
    <>
      <SiteHeader />
      <RecursosListing
        heading="Guías para emitir con confianza"
        lede="Artículos sobre producto, comparativas y normativa para los OTEC que quieren modernizar la emisión de certificados."
        articles={slicePage(articles, page)}
        page={page}
        pageCount={pageCountFor(articles.length)}
        active="todos"
        pageHref={pageHref}
      />
      <SiteFooter />
    </>
  );
}
