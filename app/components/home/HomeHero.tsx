import Link from "next/link";
import { DEMO_URL, MEET_URL } from "./links";
import styles from "./home.module.css";

const CHECKS = [
  "5 certificados gratis",
  "Sin tarjeta de crédito",
  "Con tus propias plantillas",
];

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M7.5 12.5l3 3 6-6" />
    </svg>
  );
}

export default function HomeHero() {
  return (
    <section className={`${styles.shell} ${styles.hero}`}>
      <h1 className={styles.h1}>Todo el curso certificado, en minutos.</h1>
      <p className={styles.lead}>
        Cargas el Excel, emites y cada participante recibe su certificado con
        QR único, verificable por cualquier empresa.
      </p>
      <div className={styles.heroActions}>
        <Link className={`${styles.btn} ${styles.btnPrimary}`} href={DEMO_URL}>
          Prueba con 5 certificados
        </Link>
        <Link
          className={`${styles.btn} ${styles.btnSecondary}`}
          href={MEET_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Agenda una reunión por Meet
        </Link>
      </div>
      <div className={styles.checks}>
        {CHECKS.map((label) => (
          <span key={label} className={styles.check}>
            <CheckIcon />
            {label}
          </span>
        ))}
      </div>
    </section>
  );
}
