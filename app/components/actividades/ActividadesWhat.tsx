import styles from "./actividades.module.css";

const STATS = [
  ["1", "marca por clase, al final de la sesión"],
  ["4", "dígitos tiene el código que da el relator"],
  ["1 a 7", "es la escala de la encuesta de satisfacción"],
  ["5", "respuestas como mínimo para mostrar resultados"],
];

export default function ActividadesWhat() {
  return (
    <section className={`${styles.shell} ${styles.split}`}>
      <div className={styles.copy}>
        <h2 className={`${styles.h2} ${styles.whatTitle}`}>
          ¿Qué es MiCert Actividades?
        </h2>
        <p>
          Es el apartado de MiCert para llevar el control de tus clases: quién
          asistió y qué le pareció la clase y el relator. Cada actividad tiene
          su enlace, su QR y su código, y al cerrar el registro te deja el
          respaldo en PDF y en Excel.
        </p>
        <p>
          No es una plataforma de clases ni se conecta con Zoom, Meet o Teams.
          Funciona al lado de la que ya usas: el relator muestra el QR y el
          código, y cada participante marca desde su teléfono.
        </p>
      </div>
      <dl className={styles.stats}>
        {STATS.map(([value, text]) => (
          <div key={value} className={styles.stat}>
            <dt>{value}</dt>
            <dd>{text}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
