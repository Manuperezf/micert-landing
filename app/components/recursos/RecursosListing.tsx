import Image from "next/image";
import Link from "next/link";
import FinalCta from "../site/FinalCta";
import site from "../site/site.module.css";
import {
  RESOURCE_ARTICLES,
  getFilterCategories,
  type CategorySlug,
  type ResourceArticle,
} from "../../lib/recursos";
import styles from "./recursos.module.css";

type RecursosListingProps = {
  heading: string;
  lede: string;
  articles: ResourceArticle[];
  featured?: ResourceArticle;
  page: number;
  pageCount: number;
  active: CategorySlug | "todos";
  pageHref: (page: number) => string;
};

export default function RecursosListing({
  heading,
  lede,
  articles,
  featured,
  page,
  pageCount,
  active,
  pageHref,
}: RecursosListingProps) {
  const filters = getFilterCategories();

  return (
    <div className={styles.listing}>
      <div className={styles.inner}>
        <p className={styles.kicker}>
          <span className={styles.kickerMark} aria-hidden="true" />
          Recursos
        </p>
        <h1 className={styles.h1}>{heading}</h1>
        <p className={styles.lede}>{lede}</p>

        <div className={styles.filters}>
          <Link
            href="/recursos"
            className={styles.filter}
            aria-current={active === "todos" ? "page" : undefined}
          >
            Todos ({RESOURCE_ARTICLES.length})
          </Link>
          {filters.map((filter) => (
            <Link
              key={filter.slug}
              href={`/recursos/categoria/${filter.slug}`}
              className={styles.filter}
              aria-current={active === filter.slug ? "page" : undefined}
            >
              {filter.label} ({filter.count})
            </Link>
          ))}
        </div>

        {featured ? (
          <article className={styles.featured}>
            <Link
              href={`/recursos/${featured.slug}`}
              className={styles.featuredMedia}
            >
              {featured.coverImage ? (
                <Image
                  src={featured.coverImage}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 1023px) calc(100vw - 40px), 760px"
                  className={styles.featuredImg}
                  priority
                />
              ) : null}
            </Link>
            <div className={styles.featuredCopy}>
              <p className={styles.category}>{featured.tipo}</p>
              <h2 className={styles.featuredTitle}>{featured.title}</h2>
              <p className={styles.featuredExcerpt}>{featured.excerpt}</p>
              <p className={styles.featuredDate}>{featured.date}</p>
              <Link
                className={site.arrowLink}
                href={`/recursos/${featured.slug}`}
              >
                Leer guía <span className={site.arrow}>→</span>
              </Link>
            </div>
          </article>
        ) : null}

        <div className={styles.grid}>
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/recursos/${article.slug}`}
              className={styles.card}
            >
              {article.coverImage ? (
                <span className={styles.cardMedia}>
                  <Image
                    src={article.coverImage}
                    alt=""
                    fill
                    sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) 46vw, 400px"
                    className={styles.cardImg}
                  />
                </span>
              ) : null}
              <p className={styles.category}>{article.tipo}</p>
              <h2 className={styles.cardTitle}>{article.title}</h2>
              <p className={styles.cardExcerpt}>{article.excerpt}</p>
              <p className={styles.cardDate}>{article.date}</p>
            </Link>
          ))}
        </div>

        {pageCount > 1 ? (
          <nav className={styles.pagination} aria-label="Paginación">
            {page > 1 ? (
              <Link className={styles.pageStep} href={pageHref(page - 1)}>
                ← Anterior
              </Link>
            ) : null}
            {Array.from({ length: pageCount }, (_, index) => {
              const number = index + 1;
              const current = number === page;
              return (
                <Link
                  key={number}
                  href={pageHref(number)}
                  className={styles.pageNum}
                  aria-current={current ? "page" : undefined}
                >
                  {number}
                </Link>
              );
            })}
            {page < pageCount ? (
              <Link className={styles.pageStep} href={pageHref(page + 1)}>
                Siguiente →
              </Link>
            ) : null}
          </nav>
        ) : null}
      </div>
      <FinalCta />
    </div>
  );
}
