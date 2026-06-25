import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import ArticleLayout from "../../components/ArticleLayout";
import {
  RESOURCE_ARTICLES,
  getArticleBySlug,
} from "../../lib/recursos";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return RESOURCE_ARTICLES.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: `https://micert.cl/recursos/${article.slug}`,
      type: "article",
      publishedTime: article.dateISO,
    },
  };
}

export default function RecursoArticlePage({ params }: PageProps) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  return (
    <>
      <Nav />
      <ArticleLayout article={article} />
      <Footer />
    </>
  );
}
