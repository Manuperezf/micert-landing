import Image from "next/image";
import Link from "next/link";
import FinalCta from "./site/FinalCta";
import ArticleShare from "./ArticleShare";
import ArticleFeedback from "./ArticleFeedback";
import type { ArticleQuote, ResourceArticle } from "../lib/recursos";
import { getRelatedArticles, tipoLabel } from "../lib/recursos";

type ArticleLayoutProps = {
  article: ResourceArticle;
};

function readingMinutes(article: ResourceArticle) {
  const parts: string[] = [];
  for (const section of article.sections) {
    if (section.intro) parts.push(section.intro);
    if (section.paragraphs) parts.push(...section.paragraphs);
    if (section.bullets) {
      parts.push(
        ...section.bullets.map((item) => `${item.lead ?? ""} ${item.text}`),
      );
    }
    if (section.steps) {
      parts.push(...section.steps.map((step) => `${step.lead} ${step.text}`));
    }
    if (section.quote) parts.push(section.quote.text);
    if (section.table) parts.push(...section.table.rows.flat());
    if (section.tableNote) parts.push(section.tableNote);
    if (section.faq) parts.push(...section.faq.map((item) => item.answer));
  }
  if (article.closingQuote) parts.push(article.closingQuote.text);
  const words = parts.join(" ").trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

function SectionQuote({ quote }: { quote: ArticleQuote }) {
  return (
    <figure className="article-quote">
      <blockquote>{`“${quote.text}”`}</blockquote>
      {quote.author ? <figcaption>{quote.author}</figcaption> : null}
    </figure>
  );
}

export default function ArticleLayout({ article }: ArticleLayoutProps) {
  const related = getRelatedArticles(article.slug);
  const isCase = article.tipo === "Caso";
  const minutes = readingMinutes(article);

  return (
    <article className={isCase ? "article-page case-page" : "article-page"}>
      {isCase ? (
        <header className="case-hero">
          <div className="case-wide">
            <div className="case-hero-grid">
              <div className="case-hero-copy">
                <p className="case-kicker">
                  <span className="case-kicker-mark" aria-hidden="true" />
                  Caso de cliente
                </p>
                {article.client ? (
                  <img
                    className="case-logo"
                    src={article.client.logo}
                    alt={article.client.name}
                  />
                ) : null}
                <h1>{article.title}</h1>
                <p className="case-deck">{article.excerpt}</p>
                <p className="case-meta">
                  <time dateTime={article.dateISO}>{article.date}</time>
                  {` · ${minutes} min de lectura`}
                </p>
              </div>
              {article.coverImage ? (
                <div className="case-hero-photo">
                  <Image
                    src={article.coverImage}
                    alt=""
                    fill
                    priority
                    sizes="(max-width: 767px) calc(100vw - 48px), 560px"
                    className="case-hero-img"
                  />
                </div>
              ) : null}
            </div>
            {article.results && article.results.length > 0 ? (
              <dl className="case-results">
                {article.results.map((item) => (
                  <div key={`${item.to}-${item.label}`}>
                    <dt>
                      {item.from ? (
                        <>
                          <span>{item.from}</span>
                          <span className="case-result-arrow" aria-hidden="true">
                            →
                          </span>
                          <span className="case-result-to">{item.to}</span>
                        </>
                      ) : (
                        <span>{item.to}</span>
                      )}
                    </dt>
                    <dd>{item.label}</dd>
                  </div>
                ))}
              </dl>
            ) : null}
          </div>
        </header>
      ) : null}

      <div className={isCase ? "article-shell case-body" : "article-shell"}>
        {isCase ? null : (
          <>
            <header className="article-header">
              <div className="article-header-grid">
                <h1>{article.title}</h1>
                <p className="article-deck">{article.excerpt}</p>
              </div>
            </header>

            <div className="article-byline-row">
              <div className="article-byline-meta">
                <span>{tipoLabel(article.tipo)}</span>
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
          </>
        )}

        <div className="article-layout">
          <aside
            className="article-toc"
            aria-label={isCase ? "En esta historia" : "En esta entrada"}
          >
            <p className="article-toc-title">
              {isCase ? "En esta historia" : "En esta entrada"}
            </p>
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
                {section.intro ? <p>{section.intro}</p> : null}
                {section.quote && section.quoteFirst ? (
                  <SectionQuote quote={section.quote} />
                ) : null}
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
                {section.tableNote ? (
                  <p className="article-table-note">{section.tableNote}</p>
                ) : null}
                {section.paragraphs?.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
                {section.bullets && section.bullets.length > 0 ? (
                  <ul className="article-bullets">
                    {section.bullets.map((item, i) => (
                      <li key={i}>
                        {item.lead ? (
                          <strong className="article-bullet-lead">
                            {item.lead}
                          </strong>
                        ) : null}
                        {item.lead ? " " : null}
                        {item.text}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {section.steps && section.steps.length > 0 ? (
                  <ol className="article-steps">
                    {section.steps.map((step, i) => (
                      <li key={step.lead}>
                        <span className="article-step-num">{i + 1}</span>
                        <span className="article-step-copy">
                          <strong className="article-step-lead">{step.lead}</strong>
                          <span className="article-step-text">{step.text}</span>
                        </span>
                      </li>
                    ))}
                  </ol>
                ) : null}
                {section.quote && !section.quoteFirst ? (
                  <SectionQuote quote={section.quote} />
                ) : null}
                {section.figure ? (
                  <figure className="article-figure">
                    <Image
                      src={section.figure.src}
                      alt={section.figure.alt}
                      width={section.figure.width}
                      height={section.figure.height}
                      sizes="(max-width: 900px) 100vw, 640px"
                      className="article-figure-img"
                    />
                    <figcaption>{section.figure.caption}</figcaption>
                  </figure>
                ) : null}
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
      </div>

      {isCase && article.closingQuote ? (
        <div className="case-wide">
          <figure className="case-closing">
            <blockquote>{`“${article.closingQuote.text}”`}</blockquote>
            <figcaption>
              {article.client ? (
                <img
                  className="case-closing-logo"
                  src={article.client.logo}
                  alt={article.client.name}
                />
              ) : null}
              <span>{article.closingQuote.author}</span>
            </figcaption>
          </figure>
        </div>
      ) : null}

      <div className="article-shell">
        <section className="article-related">
          <h2>Sigue leyendo</h2>
          <div className="article-related-grid">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/recursos/${item.slug}`}
                className="article-related-card"
              >
                <span className="resource-tag">{tipoLabel(item.tipo)}</span>
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
      <FinalCta />
    </article>
  );
}
