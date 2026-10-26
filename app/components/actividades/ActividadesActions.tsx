import { MEET_URL, WHATSAPP_ACTIVIDADES_URL } from "../home/links";
import styles from "./actividades.module.css";

export default function ActividadesActions({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={className ?? styles.actions}>
      <a
        className={`${styles.btn} ${styles.btnPrimary}`}
        href={WHATSAPP_ACTIVIDADES_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        Pide una demo
      </a>
      <a
        className={`${styles.btn} ${styles.btnSecondary}`}
        href={MEET_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agenda una reunión por Meet
      </a>
    </div>
  );
}
