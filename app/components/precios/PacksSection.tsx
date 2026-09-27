import Link from "next/link";
import { PACKS } from "../../lib/plans";
import { MEET_URL } from "../home/links";
import styles from "./precios.module.css";

function clp(value: number) {
  const formatted = Math.round(value)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `$${formatted}`;
}

export default function PacksSection() {
  return (
    <section className={`${styles.shell} ${styles.section}`}>
      <div className={styles.head}>
        <span className={styles.kicker}>
          <span className={styles.kickerMark} aria-hidden="true" />
          Más certificados
        </span>
        <h2 className={styles.h2}>
          ¿Un mes con más cursos? Suma un pack sin cambiar de plan.
        </h2>
      </div>
      <div className={styles.grid4}>
        {PACKS.map((pack) => (
          <article key={pack.size} className={`${styles.cell} ${styles.packCell}`}>
            <span className={styles.packLabel}>Pack</span>
            <p className={styles.packSize}>{pack.size} certificados</p>
            <p className={styles.packPrice}>
              {clp(pack.price)} <span className={styles.packIva}>+ IVA</span>
            </p>
            <span className={styles.packValidity}>Vigencia de 3 meses</span>
          </article>
        ))}
        <article className={`${styles.cell} ${styles.packCell} ${styles.packCustom}`}>
          <span className={styles.packCustomLabel}>Plan a medida</span>
          <p className={styles.packCustomTitle}>Alto volumen o integraciones</p>
          <Link className={styles.converse} href={MEET_URL}>
            Conversemos
          </Link>
        </article>
      </div>
    </section>
  );
}
