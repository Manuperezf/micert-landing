import Link from "next/link";
import type { ResourceArticle } from "../lib/recursos";

type ResourceCardProps = {
  article: ResourceArticle;
};

export default function ResourceCard({ article }: ResourceCardProps) {
  const href = `/recursos/${article.slug}`;

  return (
    <article className="resource-list-item">
      <Link href={href} className="resource-list-row">
        <div className="resource-list-copy">
          <span className="resource-tag">{article.tipo}</span>
          <h3>{article.title}</h3>
          <p>{article.excerpt}</p>
        </div>
        <div className="resource-list-thumb ph" aria-hidden="true">
          <span className="lbl">{article.tipo}</span>
          <span className="dim">Imagen próximamente</span>
        </div>
      </Link>
    </article>
  );
}
