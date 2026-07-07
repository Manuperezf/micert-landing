import Image from "next/image";
import Link from "next/link";
import DemoBanner from "./DemoBanner";
import ArticleShare from "./ArticleShare";
import ArticleFeedback from "./ArticleFeedback";
import type { ResourceArticle } from "../lib/recursos";
import { getRelatedArticles } from "../lib/recursos";

type ArticleLayoutProps = {
  article: ResourceArticle;
};

export default function ArticleLayout({ article }: ArticleLayoutProps) {
  const related = getRelatedArticles(article.slug);

  return (
    <article className="article-page">
      <div className="article-shell">
        <header className="article-header">
          <div className="article-header-grid">
            <h1>{article.title}</h1>
            <p className="article-deck">{article.excerpt}</p>
          </div>
        </header>

        <div className="article-byline-row">
          <div className="article-byline-meta">
            <span>{article.tipo}</span>
            <span className="article-byline-sep" aria-hidden="true">
              ·
            </span>
            <time dateTime={article.dateISO}>{article.date}</time>
          </div>
        </div>

        {article.coverImage && (
          <div className="article-cover">
            <Image
              src={article.coverImage}
              alt={article.title}
              width={1200}
              height={630}
              priority
              className="article-cover-img"
            />
          </div>
        )}

        <div className="article-layout">
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
                {section.table && (
                  <div className="article-table-wrap">
                    <table className="article-table">
                      <thead>
                        <tr>
                          {section.table.headers.map((header) => (
                            <th key={header || "feature"} scope="col">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row, i) => (
                          <tr key={i}>
                            {row.map((cell, j) => (
                              <td key={j}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {section.paragraphs?.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
                {section.faq && (
                  <div className="article-faq">
                    {section.faq.map((item) => (
                      <details key={item.question} name={`faq-${section.id}`}>
                        <summary>
                          {item.question}
                          <span className="article-faq-toggle" aria-hidden="true">
                            +
                          </span>
                        </summary>
                        <p>{item.answer}</p>
                      </details>
                    ))}
                  </div>
                )}
              </section>
            ))}

            <div className="article-inline-cta">
              <p>
                ¿Quieres ver cómo funciona con un curso real?{" "}
                <Link href="/demo">Agenda una demo</Link> o revisa los{" "}
                <Link href="/precios">planes y precios</Link>.
              </p>
            </div>

            <ArticleShare slug={article.slug} />
            <ArticleFeedback />
          </div>
        </div>

        <section className="article-related">
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

        <div className="article-demo">
          <DemoBanner />
        </div>
      </div>
    </article>
  );
}
