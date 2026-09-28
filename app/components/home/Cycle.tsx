import Link from "next/link";
import styles from "./home.module.css";

const iconProps = {
  width: 52,
  height: 52,
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function WebinarIcon() {
  return (
    <svg {...iconProps} className={styles.cycleIcon}>
      <rect x="6" y="10" width="36" height="26" rx="2" />
      <path d="M18 42h12M24 36v6" />
      <circle className={styles.cycleAccent} cx="24" cy="23" r="6" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg {...iconProps} className={styles.cycleIcon}>
      <circle cx="24" cy="24" r="17" />
      <path className={styles.cycleAccent} d="M24 13v11l7 5" />
    </svg>
  );
}

function RevokeIcon() {
  return (
    <svg {...iconProps} className={styles.cycleIcon}>
      <rect x="10" y="6" width="28" height="36" rx="2" />
      <path d="M16 16h16M16 22h10" />
      <path className={styles.cycleAccent} d="M18 32l12-6" />
    </svg>
  );
}

function AuditIcon() {
  return (
    <svg {...iconProps} className={styles.cycleIcon}>
      <rect x="6" y="8" width="36" height="32" rx="3" />
      <path className={styles.cycleAccent} d="M13 32l7-8 6 5 9-11" />
    </svg>
  );
}

const ITEMS = [
  {
    title: "Webinars y charlas",
    text: "Certificados de asistencia con duración en horas y minutos. El RUT es opcional: quien no lo trae se identifica por su correo.",
    icon: <WebinarIcon />,
  },
  {
    title: "Vigencia y vencimiento",
    text: "Una regla por curso. La validez queda fija al emitir y el estado cambia solo: vigente, por vencer o vencido.",
    icon: <ClockIcon />,
  },
  {
    title: "Anulaciones con respaldo",
    text: "Anula uno o todo un lote. Nada se borra: queda registro de qué se anuló y cuándo, y la ficha pública lo refleja al instante.",
    icon: <RevokeIcon />,
  },
  {
    title: "Registro para auditorías",
    text: "Qué se emitió, a quién y cuándo, en un dashboard con indicadores. Listo cuando SENCE o un cliente pregunta.",
    icon: <AuditIcon />,
  },
];

export default function Cycle() {
  return (
    <section id="ciclo" className={styles.cycle}>
      <div className={`${styles.shell} ${styles.cycleInner}`}>
        <div className={styles.cycleIntro}>
          <span className={styles.kicker}>
            <span className={styles.kickerMark} aria-hidden="true" />
            Todo el ciclo del certificado
          </span>
          <h2 className={`${styles.h2} ${styles.cycleTitle}`}>
            Emitir es el comienzo. Lo que viene después también está resuelto.
          </h2>
        </div>
        <div className={styles.cycleGrid}>
          {ITEMS.map((item) => (
            <article key={item.title} className={styles.cycleCell}>
              {item.icon}
              <div className={styles.cycleCopy}>
                <span className={styles.cycleName}>{item.title}</span>
                <span className={styles.cycleText}>{item.text}</span>
                {item.title === "Webinars y charlas" ? (
                  <Link className={styles.arrowLink} href="/eventos">
                    Ver certificados para eventos{" "}
                    <span className={styles.arrow}>→</span>
                  </Link>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
