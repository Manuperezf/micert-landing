import Image from "next/image";
import styles from "./home.module.css";

const STEPS = [
  {
    n: "01",
    title: "Importa desde Excel",
    text: "Sube la planilla con RUT, nombre, correo y nota.",
    src: "/landing/producto/paso-1-importar.png",
    alt: "Importar participantes desde Excel",
  },
  {
    n: "02",
    title: "Diseña una vez",
    text: "Campos arrastrables, firmas, logos y QR. Lo reutilizas en cada curso.",
    src: "/landing/producto/paso-2-editor.png",
    alt: "Editor de certificados",
  },
  {
    n: "03",
    title: "Emite y envía",
    text: "Todo el curso de una vez. Llega al correo de cada participante.",
    src: "/landing/producto/paso-3-verificar.png",
    alt: "Certificado emitido y verificado",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className={styles.how}>
      {/* Alias para los enlaces /#como del menú compartido. */}
      <div id="como" className={styles.legacyAnchor} />
      <div className={`${styles.shell} ${styles.howInner}`}>
        <div className={styles.howHead}>
          <div className={styles.howIntro}>
            <span className={styles.kicker}>
              <span className={styles.kickerMark} aria-hidden="true" />
              Cómo funciona
            </span>
            <h2 className={styles.h2}>
              De Excel a certificado emitido, en tres pasos.
            </h2>
          </div>
          <p className={styles.howNote}>
            El diseño se define una sola vez. Después, cada curso es cargar,
            revisar y emitir.
          </p>
        </div>
        <div className={styles.steps}>
          {STEPS.map((step) => (
            <article key={step.n} className={styles.step}>
              <div className={styles.stepShot}>
                <Image
                  src={step.src}
                  alt={step.alt}
                  width={960}
                  height={720}
                  sizes="(max-width: 767px) 90vw, 340px"
                  className={styles.stepImg}
                />
              </div>
              <div className={styles.stepBody}>
                <span className={styles.stepNum}>{step.n}</span>
                <span className={styles.stepTitle}>{step.title}</span>
                <span className={styles.stepText}>{step.text}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
