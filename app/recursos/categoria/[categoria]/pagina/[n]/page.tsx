import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RecursosListing from "../../../../../components/recursos/RecursosListing";
import SiteFooter from "../../../../../components/site/SiteFooter";
import SiteHeader from "../../../../../components/site/SiteHeader";
import {
  CATEGORY_CONTENT,
  getCategoryArticles,
  getCategoryPageParams,
  isCategorySlug,
  pageCountFor,
  slicePage,
  type CategorySlug,
} from "../../../../../lib/recursos";

export const dynamicParams = false;

type PageProps = {
  params: { categoria: string; n: string };
};

function pageHref(slug: CategorySlug, page: number) {
  return page === 1
    ? `/recursos/categoria/${slug}`
    : `/recursos/categoria/${slug}/pagina/${page}`;
}

function resolve(categoria: string, n: string) {
  if (!isCategorySlug(categoria) || !/^[0-9]+$/.test(n)) return null;
  const page = Number(n);
  const pageCount = pageCountFor(getCategoryArticles(categoria).length);
  if (page < 2 || page > pageCount) return null;
  return { slug: categoria, page, pageCount };
}

export function generateStaticParams() {
  return getCategoryPageParams();
}

export function generateMetadata({ params }: PageProps): Metadata {
  const resolved = resolve(params.categoria, params.n);
  if (!resolved) return {};
  const content = CATEGORY_CONTENT[resolved.slug];
  const title = content.title.replace(
    " | MiCert",
    ` — Página ${resolved.page} | MiCert`,
  );
  const canonical = `/recursos/categoria/${resolved.slug}/pagina/${resolved.page}`;
  return {
    title,
    description: content.lede,
    alternates: { canonical },
    openGraph: {
      title,
      description: content.lede,
      url: `https://micert.cl${canonical}`,
    },
  };
}

export default function CategoriaPaginaPage({ params }: PageProps) {
  const resolved = resolve(params.categoria, params.n);
  if (!resolved) notFound();
  const content = CATEGORY_CONTENT[resolved.slug];
  const articles = getCategoryArticles(resolved.slug);

  return (
    <>
      <SiteHeader />
      <RecursosListing
        heading={content.h1}
        lede={content.lede}
        articles={slicePage(articles, resolved.page)}
        page={resolved.page}
        pageCount={resolved.pageCount}
        active={resolved.slug}
        pageHref={(page) => pageHref(resolved.slug, page)}
      />
      <SiteFooter />
    </>
  );
}
