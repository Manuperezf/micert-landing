import styles from "./home.module.css";

function SheetIcon() {
  return (
    <svg
      className={styles.lineIcon}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 3v18" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      className={styles.lineIcon}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      className={styles.lineIcon}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3l7 3v6c0 4-3 7.5-7 9-4-1.5-7-5-7-9V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

const COLUMNS = [
  {
    title: "Emisión masiva desde Excel",
    text: "Un certificado por participante, con su código y QR, en una sola pasada.",
    icon: <SheetIcon />,
  },
  {
    title: "Envío automático por correo",
    text: "Cada participante lo recibe sin que escribas un correo, y ves el estado de envío.",
    icon: <MailIcon />,
  },
  {
    title: "Verificación pública con QR",
    text: "Cualquier empresa comprueba si es real y si está vigente, sin llamarte.",
    icon: <ShieldIcon />,
  },
];

export default function Statement() {
  return (
    <section className={`${styles.shell} ${styles.statement}`}>
      <p className={styles.statementText}>
        Emite, <span className={styles.wordAzul}>envía</span> y{" "}
        <span className={styles.wordVerde}>verifica</span> tus certificados en
        un solo lugar, para que cada curso cierre en{" "}
        <span className={styles.wordAzul}>minutos</span> y con{" "}
        <span className={styles.wordVerde}>respaldo</span> frente a SENCE y a
        tus clientes.
      </p>
      <div className={styles.cols}>
        {COLUMNS.map((column) => (
          <div key={column.title} className={styles.col}>
            {column.icon}
            <div className={styles.colCopy}>
              <span className={styles.colTitle}>{column.title}</span>
              <span className={styles.colText}>{column.text}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
