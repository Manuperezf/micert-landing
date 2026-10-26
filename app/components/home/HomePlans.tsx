import Link from "next/link";
import PlanCards from "../site/PlanCards";
import { ACTIVIDADES_PRICES, formatClp } from "../../lib/actividades";
import homeStyles from "./home.module.css";
import styles from "../site/plans.module.css";

export default function HomePlans() {
  const price = formatClp(ACTIVIDADES_PRICES.withPlan.monthly);

  return (
    <PlanCards
      eyebrow="Planes"
      title="Pagas según lo que emites al mes."
      titleAs="h2"
      id="precios"
      footer={
        <div className={homeStyles.plansFoot}>
          <div className={homeStyles.plansFootRow}>
            <p>
              Packs de 25, 50 o 100 certificados desde $17.990 + IVA, con
              vigencia de 3 meses, para sumar a tu plan.
            </p>
            <Link className={styles.arrowLink} href="/precios">
              Comparar planes en detalle <span className={styles.arrow}>→</span>
            </Link>
          </div>
          <div className={homeStyles.plansStrip}>
            <div className={homeStyles.plansStripCopy}>
              <span className={homeStyles.plansPill}>Actividades</span>
              <p>
                Asistencia y encuesta para tus clases: <strong>{price}</strong>{" "}
                + IVA al mes, sumado a tu plan de certificados.
              </p>
            </div>
            <Link className={homeStyles.arrowLink} href="/actividades">
              Ver Actividades <span className={homeStyles.arrow}>→</span>
            </Link>
          </div>
        </div>
      }
    />
  );
}
