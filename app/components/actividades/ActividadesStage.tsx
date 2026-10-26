import ActividadesPhone from "./ActividadesPhone";
import styles from "./actividades.module.css";

export default function ActividadesStage() {
  return (
    <section className={`${styles.shell} ${styles.stageWrap}`}>
      <div className={styles.stage}>
        <div className={styles.stageRow}>
          <figure className={styles.screen}>
            <div className={styles.window}>
              <div className={styles.chrome} aria-hidden="true">
                <span className={styles.dot} />
                <span className={styles.dot} />
                <span className={styles.dot} />
                <span className={styles.chromeLabel}>Pantalla del relator</span>
              </div>
              <div className={styles.windowBody}>
                <div className={styles.qrFrame}>
                  <img
                    className={styles.qr}
                    src="/landing/actividades/qr-actividades.svg"
                    alt="Código QR de la actividad"
                    width={196}
                    height={196}
                  />
                </div>
                <div>
                  <p className={styles.courseMeta}>
                    Norte Capacita · Trabajo en altura física
                  </p>
                  <p className={styles.screenTitle}>
                    Registro de asistencia abierto
                  </p>
                  <p className={styles.codeLabel}>Código de la clase</p>
                  <p className={styles.code}>4821</p>
                  <div className={styles.pills}>
                    <span className={`${styles.pill} ${styles.pillTime}`}>
                      Cierra en 18:42
                    </span>
                    <span className={`${styles.pill} ${styles.pillCount}`}>
                      23 asistencias
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <figcaption className={styles.caption}>
              El relator proyecta esta pantalla al cierre de la clase, o la
              comparte en la videollamada.
            </figcaption>
          </figure>

          <ActividadesPhone />
        </div>
      </div>
    </section>
  );
}
