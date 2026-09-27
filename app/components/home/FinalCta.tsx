import Link from "next/link";
import { DEMO_URL, MEET_URL } from "./links";
import styles from "./home.module.css";

export default function FinalCta() {
  return (
    <section className={styles.finalCta}>
      <div className={`${styles.shell} ${styles.finalInner}`}>
        <h2 className={styles.finalTitle}>Emite tu próximo curso con MiCert.</h2>
        <div className={styles.finalActions}>
          <Link className={`${styles.btn} ${styles.btnPrimary}`} href={DEMO_URL}>
            Prueba con 5 certificados
          </Link>
          <Link
            className={`${styles.btn} ${styles.btnSecondary}`}
            href={MEET_URL}
          >
            Agenda una reunión por Meet
          </Link>
        </div>
        <p className={styles.finalNote}>
          5 certificados gratis · Sin tarjeta de crédito · Activamos tu cuenta y
          te enviamos las credenciales
        </p>
      </div>
    </section>
  );
}
