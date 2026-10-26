import Link from "next/link";
import ActividadesActions from "./ActividadesActions";
import styles from "./actividades.module.css";

const CHECKS = [
  "Sin aplicaciones que instalar",
  "El relator no necesita cuenta",
  "Con o sin plan de certificados",
];

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      aria-hidden="true"
    >
      <circle
        cx="7"
        cy="7"
        r="6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M4.3 7.2 L6.2 9 L9.8 5.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ActividadesHero() {
  return (
    <section className={`${styles.shell} ${styles.hero}`}>
      <nav className={styles.breadcrumb} aria-label="Ruta">
        <Link href="/">Inicio</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">Actividades</span>
      </nav>
      <p className={styles.kicker}>
        <span className={styles.kickerMark} aria-hidden="true" />
        MiCert Actividades
      </p>
      <h1 className={styles.h1}>
        Asistencia y encuesta de satisfacción para las clases de tu OTEC.
      </h1>
      <p className={styles.lede}>
        MiCert Actividades registra la asistencia con un QR y un código de 4
        dígitos al final de cada clase, y aplica una encuesta anónima sobre la
        clase y el relator. Funciona en clases online y presenciales, desde el
        teléfono del participante.
      </p>
      <ActividadesActions />
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
