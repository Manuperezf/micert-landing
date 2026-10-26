import ActividadesActions from "./ActividadesActions";
import styles from "./actividades.module.css";

export default function ActividadesFinalCta() {
  return (
    <section className={`${styles.shell} ${styles.final}`}>
      <div className={styles.finalInner}>
        <h2 className={styles.h2}>
          Lleva el control de tu próxima clase con MiCert.
        </h2>
        <ActividadesActions />
      </div>
    </section>
  );
}
