import Image from "next/image";
import Link from "next/link";
import { getArticleBySlug } from "../../lib/recursos";
import styles from "./home.module.css";

const SLUG = "caso-ceprever-otec";

export default function CasosClientes() {
  const article = getArticleBySlug(SLUG);
  const quote = article?.sections.find((section) => section.id === "la-solucion")
    ?.quote;
  if (!article?.client || !quote) return null;

  return (
    <section className={styles.casos}>
      <div className={`${styles.shell} ${styles.casosInner}`}>
        <div className={styles.howHead}>
          <div className={styles.howIntro}>
            <span className={styles.kicker}>
              <span className={styles.kickerMark} aria-hidden="true" />
              Casos de clientes
            </span>
            <h2 className={styles.h2}>
              Lo que cambia cuando un OTEC deja el Word.
            </h2>
          </div>
          <p className={styles.howNote}>
            Casos contados por los propios OTEC, con sus cifras y en sus
            palabras.
          </p>
        </div>

        <div className={styles.casosBody}>
          <article className={styles.casoBox}>
            <div className={styles.casoMedia}>
              <div className={styles.casoFrame}>
                <Image
                  src="/landing/producto/ficha-verificacion.png"
                  alt=""
                  width={724}
                  height={440}
                  sizes="(max-width: 900px) calc(100vw - 88px), 640px"
                  className={styles.casoImg}
                />
              </div>
            </div>
            <div className={styles.casoCopy}>
              <p className={styles.casoTag}>Caso de cliente</p>
              <blockquote className={styles.casoQuote}>
                {`«${quote.text}»`}
              </blockquote>
              <div className={styles.casoClient}>
                <img
                  className={styles.casoLogo}
                  src={article.client.logo}
                  alt={article.client.name}
                />
                <span className={styles.casoName}>{article.client.name}</span>
              </div>
              <div className={styles.casoFoot}>
                <div className={styles.casoStats}>
                  <p className={styles.casoStat}>
                    <span className={styles.casoStatLabel}>Antes</span>
                    <span className={styles.casoStatValue}>
                      4 h
                      <span className={styles.casoStatUnit}> por curso</span>
                    </span>
                  </p>
                  <p className={styles.casoStat}>
                    <span className={styles.casoStatLabel}>Con MiCert</span>
                    <span
                      className={`${styles.casoStatValue} ${styles.casoStatValueNow}`}
                    >
                      5 min
                      <span className={styles.casoStatUnit}> por curso</span>
                    </span>
                  </p>
                </div>
                <div className={styles.casoLinks}>
                  <Link
                    className={styles.arrowLink}
                    href={`/recursos/${article.slug}`}
                  >
                    Leer el caso <span className={styles.arrow}>→</span>
                  </Link>
                  <Link className={styles.casoAll} href="/recursos/categoria/caso">
                    Ver todos los casos
                  </Link>
                </div>
              </div>
            </div>
          </article>
          <p className={styles.casoNote}>
            Tiempos estimados por CEPREVER OTEC. Ficha de ejemplo con datos de
            muestra.
          </p>
        </div>
      </div>
    </section>
  );
}
