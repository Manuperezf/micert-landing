import Link from "next/link";
import type { ResourceArticle } from "../lib/recursos";

type ResourceCardProps = {
  article: ResourceArticle;
  featured?: boolean;
};

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="resource-card-img ph wide" aria-hidden="true">
      <span className="lbl">{label}</span>
      <span className="dim">Imagen próximamente</span>
    </div>
  );
}

export default function ResourceCard({ article, featured }: ResourceCardProps) {
  const href = `/recursos/${article.slug}`;

  if (featured) {
    return (
      <article className="resource-card resource-card-featured">
        <Link href={href} className="resource-card-featured-link">
          <ImagePlaceholder label={article.tipo} />
          <div className="resource-card-body">
            <span className="resource-tag">{article.tipo}</span>
            <h2>{article.title}</h2>
            <p>{article.excerpt}</p>
            <span className="resource-read">
              Leer entrada <span className="arr">→</span>
            </span>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article className="resource-card">
      <Link href={href} className="resource-card-link">
        <ImagePlaceholder label={article.tipo} />
        <div className="resource-card-body">
          <span className="resource-tag">{article.tipo}</span>
          <h3>{article.title}</h3>
          <p>{article.excerpt}</p>
        </div>
      </Link>
    </article>
  );
}
