import styles from "./actividades.module.css";

const DETAILS = [
  {
    title: "Ventana de registro",
    text: "Abre 10 minutos antes del término y cierra 20 minutos después. La ajustas por actividad o la abres y cierras a mano.",
  },
  {
    title: "Código de la clase",
    text: "Lo da el relator durante la sesión, así que solo lo tiene quien está conectado o en la sala.",
  },
  {
    title: "Teléfono conocido",
    text: "Si alguien vuelve desde el mismo teléfono, lo reconoce sin mostrar su nombre completo. Si no es esa persona, toca «No soy yo».",
  },
  {
    title: "Conteo en vivo",
    text: "La pantalla del relator muestra la cuenta regresiva y cuántos ya marcaron.",
  },
];

const SCALE = ["1", "2", "3", "4", "5", "6", "7"];

export default function ActividadesHow() {
  return (
    <section className={`${styles.shell} ${styles.block}`}>
      <div className={styles.blockHead}>
        <h2 className={styles.h2}>
          Cómo se registra la asistencia en una clase online.
        </h2>
        <p className={styles.aside}>
          Creas la actividad una vez. Al final de cada clase, el relator solo
          tiene que mostrar el QR.
        </p>
      </div>
      <ol className={styles.steps}>
        <li className={styles.step}>
          <div className={styles.illustration} aria-hidden="true">
            <div className={styles.mock}>
              <div className={styles.mockTitle}>Nueva actividad</div>
              <div className={styles.mockField}>Trabajo en altura física</div>
              <div className={styles.mockRowFields}>
                <span>24 oct · 18:00</span>
                <span>Online</span>
              </div>
              <div className={styles.mockField}>Relator: Juan González</div>
              <div className={styles.mockGhost}>
                Participantes
                <span className={styles.mockLink}>Importar Excel</span>
              </div>
            </div>
          </div>
          <div className={styles.stepNum}>01</div>
          <h3>Crea la actividad</h3>
          <p>
            Nombre, fecha, horario y relatores. Los participantes se cargan
            desde Excel o de a uno.
          </p>
        </li>
        <li className={styles.step}>
          <div className={styles.illustration} aria-hidden="true">
            <div className={styles.mockRow}>
              <img
                className={styles.qrSmall}
                src="/landing/actividades/qr-actividades.svg"
                alt=""
                width={84}
                height={84}
              />
              <div>
                <div className={styles.miniLabel}>Código</div>
                <div className={styles.miniCode}>4821</div>
                <div className={styles.miniOk}>23 asistencias</div>
              </div>
            </div>
          </div>
          <div className={styles.stepNum}>02</div>
          <h3>El relator muestra el QR</h3>
          <p>
            Al cierre de la clase proyecta o comparte la pantalla con el QR, el
            enlace y el código. No necesita cuenta en MiCert.
          </p>
        </li>
        <li className={styles.step}>
          <div className={styles.illustration} aria-hidden="true">
            <div className={styles.surveyMock}>
              <div className={styles.miniLabel}>
                Encuesta anónima · Pregunta 2
              </div>
              <div className={styles.mockTitle}>
                ¿Qué tan útil fue la clase para tu trabajo?
              </div>
              <div className={styles.scale}>
                {SCALE.map((n) => (
                  <span key={n} className={n === "6" ? styles.scaleOn : undefined}>
                    {n}
                  </span>
                ))}
              </div>
              <div className={styles.mockNext}>Siguiente</div>
            </div>
          </div>
          <div className={styles.stepNum}>03</div>
          <h3>Marcan y responden</h3>
          <p>
            Cada participante registra su asistencia desde su teléfono y
            responde una encuesta corta, con nota de 1 a 7.
          </p>
        </li>
      </ol>
      <div className={styles.details}>
        {DETAILS.map((item) => (
          <div key={item.title} className={styles.detail}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
