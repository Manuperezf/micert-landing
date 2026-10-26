import Link from "next/link";
import ActividadesPhone from "../actividades/ActividadesPhone";
import { ACTIVIDADES_PRICES, formatClp } from "../../lib/actividades";
import styles from "./home.module.css";

const CHECKS = [
  "Pensada para clases online, funciona igual en sala",
  "El relator no necesita cuenta en MiCert",
  "Con o sin plan de certificados",
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

export default function ActividadesHome() {
  const price = formatClp(ACTIVIDADES_PRICES.withPlan.monthly);

  return (
    <section className={`${styles.shell} ${styles.actividadesHome}`}>
      <div className={styles.actividadesPanel}>
        <div className={styles.actividadesCopy}>
          <span className={styles.kicker}>
            <span className={styles.kickerMark} aria-hidden="true" />
            Actividades
          </span>
          <h2 className={`${styles.h2} ${styles.actividadesTitle}`}>
            Además del certificado, la asistencia y la encuesta de tus clases.
          </h2>
          <p className={styles.actividadesLead}>
            Al terminar la clase, cada participante marca su asistencia desde
            el teléfono con un código y responde una encuesta anónima sobre la
            clase y el relator. Tú descargas el registro de asistencia y el
            informe de satisfacción en PDF.
          </p>
          <ul className={styles.actividadesChecks}>
            {CHECKS.map((label) => (
              <li key={label}>
                <CheckIcon />
                {label}
              </li>
            ))}
          </ul>
          <div className={styles.actividadesActions}>
            <Link
              className={`${styles.btn} ${styles.btnPrimary}`}
              href="/actividades"
            >
              Conoce Actividades
            </Link>
            <p className={styles.actividadesPrice}>
              Para clientes MiCert, {price} + IVA al mes
            </p>
          </div>
        </div>
        <div className={styles.actividadesVisual} aria-hidden="true">
          <ActividadesPhone />
          <div className={styles.registro}>
            <div className={styles.registroHead}>
              <span>Registro de asistencia</span>
              <span className={styles.registroPdf}>PDF</span>
            </div>
            <p className={styles.registroCourse}>Trabajo en altura física</p>
            <p className={styles.registroFolio}>Folio RA-000318</p>
            <div className={styles.registroBar}>
              <span className={styles.registroDone} />
              <span className={styles.registroRest} />
            </div>
            <p className={styles.registroCount}>22 de 26 asistieron</p>
          </div>
        </div>
      </div>
    </section>
  );
}
