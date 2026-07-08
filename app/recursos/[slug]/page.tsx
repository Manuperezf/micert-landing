import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import ArticleLayout from "../../components/ArticleLayout";
import { buildFaqPageSchema } from "../../lib/faq-schema";
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
    alternates: { canonical: `/recursos/${article.slug}` },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: `https://micert.cl/recursos/${article.slug}`,
      type: "article",
      publishedTime: article.dateISO,
      ...(article.coverImage && {
        images: [
          {
            url: article.coverImage,
            width: 1200,
            height: 630,
            alt: article.title,
          },
        ],
      }),
    },
  };
}

export default function RecursoArticlePage({ params }: PageProps) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const faqItems = article.sections.flatMap((section) => section.faq ?? []);
  const faqSchema = buildFaqPageSchema(faqItems);

  return (
    <>
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <Nav />
      <ArticleLayout article={article} />
      <Footer />
    </>
  );
}
