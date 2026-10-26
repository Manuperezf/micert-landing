import Link from "next/link";
import { WHATSAPP_ACTIVIDADES_URL } from "../home/links";
import {
  ACTIVIDADES_FEATURES,
  ACTIVIDADES_PRICES,
  formatClp,
} from "../../lib/actividades";
import styles from "./actividades.module.css";

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

export default function ActividadesPricing() {
  return (
    <section className={`${styles.shell} ${styles.block} ${styles.prices}`}>
      <h2 className={styles.h2}>Cuánto cuesta MiCert Actividades.</h2>
      <p className={styles.priceNote}>
        Un precio fijo, mensual o anual. El anual trae 2 meses gratis. Valores
        + IVA.
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
      <p className={styles.plansLine}>
        ¿Ya emites tus certificados en otra plataforma? Puedes usar solo
        Actividades.{" "}
        <Link className={styles.arrowLink} href="/precios">
          Ver planes de certificados
        </Link>
      </p>
    </section>
  );
}
