import Image from "next/image";
import Link from "next/link";
import { getArticleBySlug } from "../../lib/recursos";
import styles from "./home.module.css";

const SLUG = "caso-ceprever-otec";

export default function CasosClientes() {
  const article = getArticleBySlug(SLUG);
  const result = article?.results?.[0];
  if (!article?.client || !article.coverImage || !article.pullQuote || !result) {
    return null;
  }

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
            Historias contadas por los propios OTEC, con sus cifras y en sus
            palabras.
          </p>
        </div>

        <div className={styles.casosBody}>
          <Link
            className={styles.casoCard}
            href={`/recursos/${article.slug}`}
          >
            <div className={styles.casoPhoto}>
              <Image
                src={article.coverImage}
                alt=""
                fill
                sizes="(max-width: 767px) calc(100vw - 40px), 640px"
                className={styles.casoPhotoImg}
              />
            </div>
            <div className={styles.casoPanel}>
              <img
                className={styles.casoLogo}
                src={article.client.logo}
                alt={article.client.name}
              />
              <blockquote className={styles.casoPull}>
                {`“${article.pullQuote}”`}
              </blockquote>
              <p className={styles.casoSummary}>
                Armaban cada certificado en Word, uno por uno. Hoy emiten el
                curso completo desde su Excel y cada certificado sale con su
                QR.
              </p>
              <div className={styles.casoResult}>
                <p className={styles.casoResultValue}>
                  {result.from ? (
                    <>
                      <span>{result.from}</span>
                      <span className={styles.casoResultArrow} aria-hidden="true">
                        →
                      </span>
                      <span className={styles.casoResultTo}>{result.to}</span>
                    </>
                  ) : (
                    <span>{result.to}</span>
                  )}
                </p>
                <p className={styles.casoResultAside}>
                  por curso, según su estimación
                </p>
              </div>
              <span className={styles.casoCta}>Leer la historia completa →</span>
            </div>
          </Link>
          <Link className={styles.casoAll} href="/recursos/categoria/caso">
            Ver todos los casos
          </Link>
        </div>
      </div>
    </section>
  );
}
