"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./home.module.css";

const RUBROS = [
  {
    src: "/landing/fotos/mineria.jpg",
    alt: "Curso de trabajo en altura en una faena minera",
    title: "Minería",
    desc: "Inducción de faena, trabajo en altura, aislamiento y bloqueo.",
  },
  {
    src: "/landing/fotos/construccion.jpg",
    alt: "Charla de seguridad en una obra",
    title: "Construcción",
    desc: "Montaje de andamios, prevención de riesgos, operación de maquinaria.",
  },
  {
    src: "/landing/fotos/salud.jpg",
    alt: "Curso de RCP con maniquíes",
    title: "Salud",
    desc: "RCP y primeros auxilios, IAAS, atención de urgencias.",
  },
  {
    src: "/landing/fotos/logistica.jpg",
    alt: "Curso de grúa horquilla con conos",
    title: "Logística y transporte",
    desc: "Grúa horquilla, manejo defensivo, carga y descarga.",
  },
  {
    src: "/landing/fotos/energia.jpg",
    alt: "Curso de riesgo eléctrico en un taller",
    title: "Industria y energía",
    desc: "Riesgo eléctrico, sustancias peligrosas, espacios confinados.",
  },
] as const;

function ArrowIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export default function Industries() {
  const [active, setActive] = useState(0);

  return (
    <section className={styles.industries}>
      <div className={`${styles.shell} ${styles.industriesInner}`}>
        <div className={styles.howHead}>
          <div className={styles.howIntro}>
            <span className={styles.kicker}>
              <span className={styles.kickerMark} aria-hidden="true" />
              Por industria
            </span>
            <h2 className={`${styles.h2} ${styles.industriesTitle}`}>
              Tus clientes están en faena, en obra o en el hospital. Sus
              certificados también se verifican ahí.
            </h2>
          </div>
          <p className={styles.howNote}>
            Cada OTEC certifica con su propio diseño, sea cual sea el rubro que
            capacita.
          </p>
        </div>
        <div className={styles.rubroTrack}>
          {RUBROS.map((rubro, index) => {
            const isActive = index === active;
            return (
              <div
                key={rubro.title}
                className={`${styles.rubro} ${isActive ? styles.rubroActive : ""}`}
                onMouseEnter={() => setActive(index)}
              >
                <Image
                  src={rubro.src}
                  alt={rubro.alt}
                  fill
                  sizes="(max-width: 1023px) 256px, 30vw"
                  className={styles.rubroImg}
                />
                <div className={styles.rubroTint} aria-hidden="true" />
                <div className={styles.rubroShade} aria-hidden="true" />
                <button
                  type="button"
                  className={styles.rubroBtn}
                  aria-label={`Ver ${rubro.title}`}
                  aria-pressed={isActive}
                  onClick={() => setActive(index)}
                  onFocus={() => setActive(index)}
                >
                  {isActive ? <ArrowIcon /> : <PlusIcon />}
                </button>
                <div className={styles.rubroCopy}>
                  <span className={styles.rubroTitle}>{rubro.title}</span>
                  {isActive ? (
                    <span className={styles.rubroDesc}>{rubro.desc}</span>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.rubroMobile}>
        <div className={styles.rubroScroller}>
          {RUBROS.map((rubro) => (
            <article key={rubro.title} className={styles.rubroCard}>
              <Image
                src={rubro.src}
                alt={rubro.alt}
                fill
                sizes="256px"
                className={styles.rubroCardImg}
              />
              <div className={styles.rubroShade} aria-hidden="true" />
              <div className={styles.rubroCardCopy}>
                <span className={styles.rubroCardTitle}>{rubro.title}</span>
                <span className={styles.rubroCardDesc}>{rubro.desc}</span>
              </div>
            </article>
          ))}
        </div>
        <p className={styles.rubroHint}>Desliza para ver los cinco rubros →</p>
      </div>
    </section>
  );
}
