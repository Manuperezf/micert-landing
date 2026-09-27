import styles from "./home.module.css";

const ITEMS = [
  {
    title: "Cada OTEC ve solo lo suyo",
    text: "La separación entre organizaciones se aplica en la base de datos, no solo en la pantalla.",
  },
  {
    title: "Preparado para la Ley 21.719",
    text: "MiCert opera como encargado de tratamiento, con Contrato de servicios y DPA firmados con cada OTEC.",
  },
  {
    title: "Hablas con personas",
    text: "Te acompañamos en la puesta en marcha y respondemos por correo y WhatsApp.",
  },
];

export default function DataCompliance() {
  return (
    <section className={styles.compliance}>
      <div className={`${styles.shell} ${styles.complianceInner}`}>
        <div className={styles.complianceHead}>
          <span className={`${styles.kicker} ${styles.kickerLight}`}>
            <span className={styles.kickerMark} aria-hidden="true" />
            Datos y cumplimiento
          </span>
          <h2 className={`${styles.h2} ${styles.complianceTitle}`}>
            Los datos de tus participantes son tuyos. Nosotros los cuidamos.
          </h2>
        </div>
        <div className={styles.complianceGrid}>
          {ITEMS.map((item) => (
            <article key={item.title} className={styles.complianceCell}>
              <span className={styles.complianceName}>{item.title}</span>
              <span className={styles.complianceText}>{item.text}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
