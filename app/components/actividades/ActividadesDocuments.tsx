import Link from "next/link";
import styles from "./actividades.module.css";

function AttendanceIcon() {
  return (
    <svg className={styles.docIcon} width="40" height="40" viewBox="0 0 40 40" aria-hidden="true">
      <rect x="9" y="4" width="22" height="32" rx="2" fill="none" stroke="var(--ink)" strokeWidth="1.6" />
      <path d="M14 13h12M14 19h12M14 25h7" stroke="var(--ink)" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M23 29l2.5 2.5 5-5" fill="none" stroke="var(--azul)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ReportIcon() {
  return (
    <svg className={styles.docIcon} width="40" height="40" viewBox="0 0 40 40" aria-hidden="true">
      <rect x="9" y="4" width="22" height="32" rx="2" fill="none" stroke="var(--ink)" strokeWidth="1.6" />
      <path d="M14 29V22M20 29V15M26 29V19" stroke="var(--azul)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function SheetIcon() {
  return (
    <svg className={styles.docIcon} width="40" height="40" viewBox="0 0 40 40" aria-hidden="true">
      <rect x="5" y="8" width="30" height="24" rx="2" fill="none" stroke="var(--ink)" strokeWidth="1.6" />
      <path d="M5 16h30M5 24h30M15 8v24" stroke="var(--ink)" strokeWidth="1.6" />
      <path d="M20 20h10" stroke="var(--azul)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function HistoryIcon() {
  return (
    <svg className={styles.docIcon} width="40" height="40" viewBox="0 0 40 40" aria-hidden="true">
      <circle cx="20" cy="20" r="14" fill="none" stroke="var(--ink)" strokeWidth="1.6" />
      <path d="M20 12v8l5 4" fill="none" stroke="var(--azul)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const DOCS = [
  {
    title: "Registro de asistencia en PDF",
    text: "Con el logo y la razón social de tu OTEC, un folio único y la firma de cada relator.",
    icon: <AttendanceIcon />,
  },
  {
    title: "Informe de satisfacción en PDF",
    text: "La clase y cada relator, con promedios, distribución de notas y comentarios. También con folio.",
    icon: <ReportIcon />,
  },
  {
    title: "Lista en Excel",
    text: "Todos los participantes con su estado, para tus reportes o para enviar al cliente.",
    icon: <SheetIcon />,
  },
  {
    title: "Historial de correcciones",
    text: "Registra a quien no alcanzó a marcar, corrige un dato o excluye a alguien, siempre con motivo.",
    icon: <HistoryIcon />,
  },
];

export default function ActividadesDocuments() {
  return (
    <section className={`${styles.shell} ${styles.block} ${styles.docs}`}>
      <h2 className={styles.h2}>
        Qué documentos te deja para reportes y auditorías.
      </h2>
      <div className={styles.docGrid}>
        {DOCS.map((item) => (
          <article key={item.title} className={styles.doc}>
            {item.icon}
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
      <div className={styles.band}>
        <div className={styles.bandCopy}>
          <h3>Y para cerrar el curso, el certificado.</h3>
          <p>
            Exporta a quienes asistieron en el formato de carga de MiCert y
            emite sus certificados con QR en el mismo lugar.
          </p>
        </div>
        <Link
          className={`${styles.btn} ${styles.btnOnDark}`}
          href="/#como-funciona"
        >
          Certificados para cursos →
        </Link>
      </div>
    </section>
  );
}
