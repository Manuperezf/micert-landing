import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RecursosListing from "../../../components/recursos/RecursosListing";
import SiteFooter from "../../../components/site/SiteFooter";
import SiteHeader from "../../../components/site/SiteHeader";
import {
  CATEGORY_CONTENT,
  getCategoryArticles,
  getCategoryParams,
  isCategorySlug,
  pageCountFor,
  slicePage,
  type CategorySlug,
} from "../../../lib/recursos";

export const dynamicParams = false;

type PageProps = {
  params: { categoria: string };
};

function pageHref(slug: CategorySlug, page: number) {
  return page === 1
    ? `/recursos/categoria/${slug}`
    : `/recursos/categoria/${slug}/pagina/${page}`;
}

export function generateStaticParams() {
  return getCategoryParams();
}

export function generateMetadata({ params }: PageProps): Metadata {
  if (!isCategorySlug(params.categoria)) return {};
  const content = CATEGORY_CONTENT[params.categoria];
  const canonical = `/recursos/categoria/${params.categoria}`;
  return {
    title: content.title,
    description: content.lede,
    alternates: { canonical },
    openGraph: {
      title: content.title,
      description: content.lede,
      url: `https://micert.cl${canonical}`,
    },
  };
}

export default function CategoriaPage({ params }: PageProps) {
  if (!isCategorySlug(params.categoria)) notFound();
  const slug = params.categoria;
  const content = CATEGORY_CONTENT[slug];
  const articles = getCategoryArticles(slug);

  return (
    <>
      <SiteHeader />
      <RecursosListing
        heading={content.h1}
        lede={content.lede}
        articles={slicePage(articles, 1)}
        page={1}
        pageCount={pageCountFor(articles.length)}
        active={slug}
        pageHref={(page) => pageHref(slug, page)}
      />
      <SiteFooter />
    </>
  );
}
