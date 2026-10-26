import Link from "next/link";
import { WHATSAPP_ACTIVIDADES_URL } from "../home/links";
import {
  ACTIVIDADES_FEATURES,
  ACTIVIDADES_PRICES,
  formatClp,
} from "../../lib/actividades";
import preciosStyles from "../precios/precios.module.css";
import styles from "./actividades.module.css";

const DEFAULT_TITLE = "Cuánto cuesta MiCert Actividades.";
const DEFAULT_INTRO =
  "Un precio fijo, mensual o anual. El anual trae 2 meses gratis. Valores + IVA.";

type ActividadesPricingProps = {
  title?: string;
  intro?: string;
  showLink?: boolean;
};

const CARDS = [
  {
    name: "Si ya usas MiCert para tus certificados",
    note: "Se suma a tu plan Básico, Estándar o Pro.",
    monthly: ACTIVIDADES_PRICES.withPlan.monthly,
    annual: ACTIVIDADES_PRICES.withPlan.annual,
    featured: true,
  },
  {
    name: "Si solo necesitas Actividades",
    note: "Sin plan de certificados.",
    monthly: ACTIVIDADES_PRICES.solo.monthly,
    annual: ACTIVIDADES_PRICES.solo.annual,
    featured: false,
  },
];

export default function ActividadesPricing({
  title = DEFAULT_TITLE,
  intro = DEFAULT_INTRO,
  showLink = false,
}: ActividadesPricingProps) {
  const embedded = title !== DEFAULT_TITLE || intro !== DEFAULT_INTRO || showLink;

  return (
    <section
      className={
        embedded
          ? `${preciosStyles.shell} ${preciosStyles.section}`
          : `${styles.shell} ${styles.block} ${styles.prices}`
      }
    >
      <h2 className={embedded ? preciosStyles.h2 : styles.h2}>{title}</h2>
      <p className={embedded ? preciosStyles.actividadesIntro : styles.priceNote}>
        {intro}
      </p>
      <div className={styles.priceGrid}>
        {CARDS.map((card) => (
          <article
            key={card.name}
            className={`${styles.card} ${card.featured ? styles.cardFeatured : ""}`}
          >
            <div className={styles.cardName}>{card.name}</div>
            <p className={styles.cardNote}>{card.note}</p>
            <div className={styles.cardPrice}>
              <span className={styles.amount}>{formatClp(card.monthly)}</span>
              <span className={styles.period}>+ IVA / mes</span>
            </div>
            <p className={styles.annual}>
              o {formatClp(card.annual)} + IVA al año
            </p>
            <ul className={styles.features}>
              {ACTIVIDADES_FEATURES.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <a
              className={`${styles.btn} ${card.featured ? styles.btnPrimary : styles.btnSecondary}`}
              href={WHATSAPP_ACTIVIDADES_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Pide una demo
            </a>
          </article>
        ))}
      </div>
      {showLink ? (
        <p className={styles.plansLine}>
          <Link className={styles.arrowLink} href="/actividades">
            Ver Actividades
          </Link>
        </p>
      ) : (
        <p className={styles.plansLine}>
          ¿Ya emites tus certificados en otra plataforma? Puedes usar solo
          Actividades.{" "}
          <Link className={styles.arrowLink} href="/precios">
            Ver planes de certificados
          </Link>
        </p>
      )}
    </section>
  );
}
