import Link from "next/link";
import DemoBanner from "./DemoBanner";
import type { ResourceArticle } from "../lib/recursos";
import { getRelatedArticles } from "../lib/recursos";

type ArticleLayoutProps = {
  article: ResourceArticle;
};

export default function ArticleLayout({ article }: ArticleLayoutProps) {
  const related = getRelatedArticles(article.slug);

  return (
    <article className="article-page">
      <header className="article-header wrap">
        <div className="article-meta">
          <Link href="/recursos" className="article-back">
            ← Recursos
          </Link>
          <span className="resource-tag">{article.tipo}</span>
        </div>
        <h1>{article.title}</h1>
        <p className="lead article-deck">{article.excerpt}</p>
        <div className="article-byline">
          <span>{article.author}</span>
          <span className="article-byline-sep">·</span>
          <time dateTime={article.dateISO}>{article.date}</time>
        </div>
      </header>

      <div className="article-layout wrap">
        <aside className="article-toc" aria-label="En esta entrada">
          <p className="article-toc-title">En esta entrada</p>
          <nav>
            <ol>
              {article.sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>{section.title}</a>
                </li>
              ))}
            </ol>
          </nav>
          <div className="article-toc-links">
            <Link href="/precios">Ver precios</Link>
            <Link href="/recursos">Más recursos</Link>
          </div>
        </aside>

        <div className="article-content">
          {article.sections.map((section) => (
            <section key={section.id} id={section.id}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </section>
          ))}

          <div className="article-inline-cta">
            <p>
              ¿Quieres ver cómo funciona con un curso real?{" "}
              <Link href="/demo">Agenda una demo</Link> o revisa los{" "}
              <Link href="/precios">planes y precios</Link>.
            </p>
          </div>
        </div>
      </div>

      <section className="article-related wrap">
        <h2>Sigue leyendo</h2>
        <div className="article-related-grid">
          {related.map((item) => (
            <Link
              key={item.slug}
              href={`/recursos/${item.slug}`}
              className="article-related-card"
            >
              <span className="resource-tag">{item.tipo}</span>
              <h3>{item.title}</h3>
              <p>{item.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      <div className="wrap article-demo">
        <DemoBanner />
      </div>
    </article>
  );
}
