import DemoForm from "../components/demo/DemoForm";
import SiteFooter from "../components/site/SiteFooter";
import SiteHeader from "../components/site/SiteHeader";
import { MEET_URL } from "../components/home/links";
import styles from "../components/demo/demo.module.css";

const STEPS = [
  "Completas el formulario",
  "Activamos tu cuenta y te enviamos las credenciales",
  "Emites tus primeros certificados",
];

export default function DemoPage() {
  return (
    <>
      <SiteHeader />
      <main className={styles.page}>
        <div className={styles.shell}>
          <div className={styles.grid}>
            <div className={styles.left}>
              <div className={styles.intro}>
                <p className={styles.kicker}>
                  <span className={styles.kickerMark} aria-hidden="true" />
                  Prueba gratis
                </p>
                <h1 className={styles.h1}>
                  Prueba MiCert con 5 certificados reales.
                </h1>
                <p className={styles.lede}>
                  Activamos tu cuenta y te enviamos las credenciales. Emites con
                  tus propias plantillas, sin costo y sin tarjeta de crédito.
                </p>
              </div>
              <div className={styles.after}>
                <ol className={styles.steps}>
                  {STEPS.map((step, index) => (
                    <li key={step} className={styles.step}>
                      <span className={styles.stepNum}>{index + 1}</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
                <div className={styles.meet}>
                  <div className={styles.meetCopy}>
                    <svg
                      className={styles.meetIcon}
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <rect
                        x="3.5"
                        y="4.5"
                        width="17"
                        height="16"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M3.5 9.5h17"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M8 3v3.5M16 3v3.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div>
                      <p className={styles.meetTitle}>
                        ¿Prefieres que te lo mostremos?
                      </p>
                      <p className={styles.meetNote}>
                        Reunión por Meet de 30 minutos.
                      </p>
                    </div>
                  </div>
                  <a
                    className={`${styles.btn} ${styles.btnSecondary}`}
                    href={MEET_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Agenda una reunión
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.formPanel}>
              <h2 className={styles.formTitle}>Solicita tu prueba</h2>
              <p className={styles.formLede}>
                Te respondemos dentro de 24 horas hábiles.
              </p>
              <DemoForm />
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
