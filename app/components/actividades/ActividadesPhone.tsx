import styles from "./actividades.module.css";

const DIGITS = ["4", "8", "2", "1"];

export default function ActividadesPhone() {
  return (
    <div className={styles.phone} aria-hidden="true">
      <div className={styles.phoneScreen}>
        <p className={styles.phoneOrg}>Norte Capacita</p>
        <p className={styles.phoneCourse}>Trabajo en altura física</p>
        <p className={styles.phoneSub}>Registra tu asistencia</p>
        <p className={styles.phoneField}>Código de la clase</p>
        <div className={styles.digits}>
          {DIGITS.map((digit, index) => (
            <span
              key={digit}
              className={`${styles.digit} ${index === DIGITS.length - 1 ? styles.digitActive : ""}`}
            >
              {digit}
            </span>
          ))}
        </div>
        <p className={styles.phoneField}>RUT</p>
        <div className={styles.rut}>12.345.678-5</div>
        <div className={styles.phoneButton}>Registrar asistencia</div>
      </div>
    </div>
  );
}
