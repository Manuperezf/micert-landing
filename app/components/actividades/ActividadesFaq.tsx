import { ACTIVIDADES_FAQ } from "../../lib/actividades";
import styles from "./actividades.module.css";

export default function ActividadesFaq() {
  return (
    <section className={`${styles.shell} ${styles.faq}`}>
      <h2 className={styles.h2}>
        Preguntas frecuentes sobre asistencia y encuestas.
      </h2>
      <div className={styles.faqGrid}>
        {ACTIVIDADES_FAQ.map((item) => (
          <article key={item.question} className={styles.faqItem}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
