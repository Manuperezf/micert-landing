import Link from "next/link";
import PlanCards from "../site/PlanCards";
import styles from "../site/plans.module.css";

export default function HomePlans() {
  return (
    <PlanCards
      eyebrow="Planes"
      title="Pagas según lo que emites al mes."
      titleAs="h2"
      id="precios"
      footer={
        <>
          <p>
            Packs adicionales de 25, 50 o 100 certificados desde $17.990 + IVA,
            con vigencia de 3 meses. ¿Más volumen? Plan a medida.
          </p>
          <Link className={styles.arrowLink} href="/precios">
            Comparar planes en detalle <span className={styles.arrow}>→</span>
          </Link>
        </>
      }
    />
  );
}
