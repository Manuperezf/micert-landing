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
            <div>
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
              <ol className={styles.steps}>
                {STEPS.map((step, index) => (
                  <li key={step} className={styles.step}>
                    <span className={styles.stepNum}>{index + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              <div className={styles.meet}>
                <p className={styles.meetTitle}>¿Prefieres que te lo mostremos?</p>
                <a
                  className={`${styles.btn} ${styles.btnSecondary}`}
                  href={MEET_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agenda una reunión por Meet
                </a>
              </div>
            </div>
            <div>
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
