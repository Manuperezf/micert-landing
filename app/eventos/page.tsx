import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FaqAccordion from "../components/site/FaqAccordion";
import FinalCta from "../components/site/FinalCta";
import SiteFooter from "../components/site/SiteFooter";
import SiteHeader from "../components/site/SiteHeader";
import { DEMO_URL, MEET_URL } from "../components/home/links";
import { PACKS, PLANS } from "../lib/plans";
import styles from "../components/eventos/eventos.module.css";

export const metadata: Metadata = {
  title: "Certificados de asistencia para webinars y charlas | MiCert",
  description:
    "Emite certificados de asistencia con QR para tus webinars, charlas y seminarios. RUT opcional, duración en horas y minutos, online o presencial.",
  alternates: { canonical: "/eventos" },
};

const CHECKS = ["Sin costo adicional", "RUT opcional", "Con tu propio diseño"];

const EVENT_TYPES = [
  {
    title: "Webinars",
    text: "Transmitidos por la plataforma que ya usas.",
    icon: "webinar",
  },
  {
    title: "Charlas",
    text: "De seguridad, de inducción o de actualización.",
    icon: "charla",
  },
  {
    title: "Seminarios",
    text: "De media jornada o jornada completa.",
    icon: "seminario",
  },
  {
    title: "Congresos y jornadas",
    text: "Cientos de asistentes, emitidos de una vez.",
    icon: "congreso",
  },
  {
    title: "Talleres",
    text: "Breves y prácticos, sin la estructura de un curso.",
    icon: "taller",
  },
] as const;

const FEATURES = [
  {
    title: "Documento de identidad opcional",
    text: "Pide RUT o pasaporte si lo necesitas. Si no, basta con el nombre y el correo de cada asistente.",
    icon: "id",
  },
  {
    title: "Duración en horas y minutos",
    text: "Una charla de 1 h 30 min queda registrada así, sin redondear.",
    icon: "clock",
  },
  {
    title: "Modalidad del evento",
    text: "Indicas si fue Online o presencial al crear el evento.",
    icon: "mode",
  },
  {
    title: "Descripción del evento",
    text: "Un texto opcional para contar de qué trató.",
    icon: "text",
  },
] as const;

const STEPS = [
  {
    n: "01",
    title: "Crea el evento",
    text: "Nombre, fecha, duración y modalidad. Eliges el diseño del certificado.",
  },
  {
    n: "02",
    title: "Carga a los asistentes",
    text: "Desde Excel o uno por uno, igual que en tus cursos.",
  },
  {
    n: "03",
    title: "Emite y envía",
    text: "Cada asistente recibe su certificado por correo, con QR y botón para agregarlo a LinkedIn.",
  },
] as const;

const AUDIENCE = [
  {
    title: "OTEC",
    text: "Webinars abiertos para dar a conocer tus cursos, con certificado para cada asistente.",
  },
  {
    title: "Colegios profesionales y gremios",
    text: "Charlas y jornadas para tus socios, con respaldo verificable.",
  },
  {
    title: "Universidades y centros de extensión",
    text: "Seminarios y ciclos de charlas abiertos a la comunidad.",
  },
  {
    title: "Empresas",
    text: "Charlas internas de RR.HH., inducciones y prevención de riesgos.",
  },
] as const;

const CARD_ROWS = [
  ["Evento", "Webinar · Ley 21.719 para OTEC"],
  ["Duración", "1 h 30 min"],
  ["Modalidad", "Online"],
  ["Emitido por", "Norte Capacita"],
] as const;

function clp(value: number) {
  const formatted = Math.round(value)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `$${formatted}`;
}

function packSizesPhrase(sizes: readonly number[]) {
  const labels = sizes.map(String);
  if (labels.length <= 1) return labels[0] ?? "";
  if (labels.length === 2) return `${labels[0]} o ${labels[1]}`;
  return `${labels.slice(0, -1).join(", ")} o ${labels[labels.length - 1]}`;
}

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M7.5 12.5l3 3 6-6" />
    </svg>
  );
}

function Kicker({
  children,
  light = false,
}: {
  children: string;
  light?: boolean;
}) {
  return (
    <p className={`${styles.kicker} ${light ? styles.kickerLight : ""}`}>
      <span className={styles.kickerMark} aria-hidden="true" />
      {children}
    </p>
  );
}

const icon32 = {
  width: 32,
  height: 32,
  viewBox: "0 0 32 32",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true as const,
};

const icon52 = {
  width: 52,
  height: 52,
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true as const,
};

function TypeIcon({ name }: { name: (typeof EVENT_TYPES)[number]["icon"] }) {
  if (name === "webinar") {
    return (
      <svg {...icon32} className={styles.typeIcon}>
        <rect x="4" y="6" width="24" height="16" rx="2" />
        <path className={styles.accent} d="M13 14h6" />
        <path d="M12 26h8M16 22v4" />
      </svg>
    );
  }
  if (name === "charla") {
    return (
      <svg {...icon32} className={styles.typeIcon}>
        <rect x="12" y="4" width="8" height="13" rx="4" />
        <path className={styles.accent} d="M8 14a8 8 0 0 0 16 0" />
        <path d="M16 22v4M12 26h8" />
      </svg>
    );
  }
  if (name === "seminario") {
    return (
      <svg {...icon32} className={styles.typeIcon}>
        <rect x="5" y="6" width="22" height="20" rx="2" />
        <path className={styles.accent} d="M5 12h22" />
        <path d="M11 4v4M21 4v4" />
      </svg>
    );
  }
  if (name === "congreso") {
    return (
      <svg {...icon32} className={styles.typeIcon}>
        <circle cx="11" cy="11" r="3" />
        <circle className={styles.accent} cx="21" cy="12" r="3" />
        <path d="M5 24c.8-3.6 3.2-5.5 6-5.5s5.2 1.9 6 5.5" />
        <path d="M17 24c.5-2.8 2.2-4.5 4.2-4.5 2 0 3.6 1.6 4.4 4.5" />
      </svg>
    );
  }
  return (
    <svg {...icon32} className={styles.typeIcon}>
      <path d="M7 25l3.2-.6L24 10.6 21.2 7.8 7.4 21.6z" />
      <path className={styles.accent} d="M18.4 10.4l3.2 3.2" />
      <path d="M6 26h6" />
    </svg>
  );
}

function FeatureIcon({ name }: { name: (typeof FEATURES)[number]["icon"] }) {
  if (name === "id") {
    return (
      <svg {...icon52} className={styles.featureIcon}>
        <rect x="8" y="10" width="32" height="28" rx="3" />
        <circle cx="20" cy="22" r="4" />
        <path className={styles.accent} d="M28 20h6M28 26h6" />
        <path d="M14 32c1.2-2.4 3-3.6 6-3.6s4.8 1.2 6 3.6" />
      </svg>
    );
  }
  if (name === "clock") {
    return (
      <svg {...icon52} className={styles.featureIcon}>
        <circle cx="24" cy="24" r="16" />
        <path className={styles.accent} d="M24 14v10l7 4" />
      </svg>
    );
  }
  if (name === "mode") {
    return (
      <svg {...icon52} className={styles.featureIcon}>
        <rect x="8" y="10" width="32" height="22" rx="2" />
        <path className={styles.accent} d="M20 21h8" />
        <path d="M18 38h12M24 32v6" />
      </svg>
    );
  }
  return (
    <svg {...icon52} className={styles.featureIcon}>
      <rect x="10" y="8" width="28" height="32" rx="2" />
      <path d="M16 18h16M16 24h16" />
      <path className={styles.accent} d="M16 30h10" />
    </svg>
  );
}

export default function EventosPage() {
  const basic = PLANS.find((plan) => plan.id === "basico") ?? PLANS[0];
  const packPhrase = packSizesPhrase(PACKS.map((pack) => pack.size));
  const faqItems = [
    {
      question: "¿Tengo que pedirles el RUT a los asistentes?",
      answer:
        "No. En los eventos el documento de identidad es opcional. Si lo pides, puede ser RUT o pasaporte.",
    },
    {
      question: "¿Los certificados de eventos se cobran aparte?",
      answer:
        "No. Descuentan de la misma cuota de tu plan que los certificados de tus cursos.",
    },
    {
      question: "¿Necesito un plan para certificar un evento?",
      answer: `No. Puedes comprar un pack de ${packPhrase} certificados sin suscripción, con vigencia de 3 meses.`,
    },
    {
      question: "¿Cómo reciben el certificado los asistentes?",
      answer:
        "Por correo, con un enlace a su ficha de verificación. Desde ahí lo descargan en PDF y pueden agregarlo a LinkedIn.",
    },
    {
      question: "¿Puedo usar el diseño de mi organización?",
      answer:
        "Sí. Usas el mismo editor que para los cursos, con tus logos, firmas y el QR donde prefieras.",
    },
    {
      question: "No soy OTEC. ¿Puedo usar MiCert igual?",
      answer:
        "Sí. Cualquier organización que realice eventos puede certificar la asistencia con MiCert.",
    },
  ];

  return (
    <div className={styles.page}>
      <SiteHeader />
      <main>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <Kicker>Eventos</Kicker>
            <h1 className={styles.h1}>
              Certificados para tus webinars, charlas y seminarios.
            </h1>
            <p className={styles.lede}>
              Terminado el evento, cargas la lista de asistentes y cada uno
              recibe su certificado de asistencia con QR. Sin pedir RUT si tu
              evento no lo necesita.
            </p>
            <div className={styles.heroActions}>
              <Link
                className={`${styles.btn} ${styles.btnPrimary}`}
                href={DEMO_URL}
              >
                Prueba con 5 certificados
              </Link>
              <Link
                className={`${styles.btn} ${styles.btnSecondary}`}
                href={MEET_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Agenda una reunión por Meet
              </Link>
            </div>
            <div className={styles.checks}>
              {CHECKS.map((label) => (
                <span key={label} className={styles.check}>
                  <CheckIcon />
                  {label}
                </span>
              ))}
            </div>
          </div>
          <div className={styles.visual}>
            <div className={styles.photoWrap}>
              <Image
                src="/landing/fotos/webinar.jpg"
                alt="Persona participando en un webinar desde su casa"
                fill
                priority
                sizes="(max-width: 767px) 350px, 640px"
                className={styles.photo}
              />
            </div>
            <figure
              className={styles.card}
              aria-label="Ejemplo de ficha de verificación de un certificado de asistencia"
            >
              <div className={styles.cardTop}>
                <span className={styles.badge}>
                  <CheckIcon />
                  Certificado vigente
                </span>
                <span className={styles.code}>EV-7K2Q</span>
              </div>
              <p className={styles.cardKind}>Certificado de asistencia</p>
              <p className={styles.cardName}>Daniela Muñoz Tapia</p>
              <dl className={styles.meta}>
                {CARD_ROWS.map(([label, value]) => (
                  <div key={label} className={styles.metaRow}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </figure>
          </div>
        </section>

        <section className={`${styles.shell} ${styles.section}`}>
          <div className={styles.head}>
            <div className={styles.headCopy}>
              <Kicker>Tipos de evento</Kicker>
              <h2 className={styles.h2}>
                Para cualquier evento donde quieras dejar constancia de quién
                asistió.
              </h2>
            </div>
            <p className={styles.aside}>
              Online o presencial, con diez asistentes o con quinientos.
            </p>
          </div>
          <div className={styles.types}>
            {EVENT_TYPES.map((item) => (
              <article key={item.title} className={styles.type}>
                <TypeIcon name={item.icon} />
                <div>
                  <h3 className={styles.typeTitle}>{item.title}</h3>
                  <p className={styles.typeText}>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={`${styles.shell} ${styles.section}`}>
          <div className={styles.head}>
            <div className={styles.headCopy}>
              <Kicker>Pensado para eventos</Kicker>
              <h2 className={styles.h2}>
                Un evento no es un curso. MiCert lo trata distinto.
              </h2>
            </div>
            <p className={styles.aside}>
              Los eventos tienen su propio apartado en la plataforma, separado
              de tus cursos.
            </p>
          </div>
          <div className={styles.features}>
            {FEATURES.map((item) => (
              <article key={item.title} className={styles.feature}>
                <FeatureIcon name={item.icon} />
                <div>
                  <h3 className={styles.featureTitle}>{item.title}</h3>
                  <p className={styles.featureText}>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={`${styles.shell} ${styles.section}`}>
          <div className={styles.head}>
            <div className={styles.headCopy}>
              <Kicker>Cómo funciona</Kicker>
              <h2 className={styles.h2}>
                Del último minuto del evento al certificado en el correo.
              </h2>
            </div>
          </div>
          <div className={styles.steps}>
            {STEPS.map((step) => (
              <article key={step.n} className={styles.step}>
                <span className={styles.stepNum}>{step.n}</span>
                <div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepText}>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.audience}>
          <div className={styles.shell}>
            <div className={styles.audienceHead}>
              <Kicker light>Para quién</Kicker>
              <h2 className={styles.audienceTitle}>
                Para el OTEC y para quien organiza eventos sin ser OTEC.
              </h2>
            </div>
            <div className={styles.audienceGrid}>
              {AUDIENCE.map((item) => (
                <article key={item.title} className={styles.audienceCell}>
                  <h3 className={styles.audienceName}>{item.title}</h3>
                  <p className={styles.audienceText}>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.shell} ${styles.price}`}>
          <div className={styles.priceCopy}>
            <Kicker>Precio</Kicker>
            <h2 className={styles.h2}>Sin costo adicional.</h2>
            <p className={styles.priceText}>
              Los certificados de eventos descuentan de la misma cuota mensual
              de tu plan, igual que los de tus cursos. Los planes parten en{" "}
              {clp(basic.priceMonthly)} + IVA al mes.
            </p>
            <Link className={styles.arrowLink} href="/precios">
              Ver planes y precios <span className={styles.arrow}>→</span>
            </Link>
          </div>
          <div className={styles.panel}>
            <h3 className={styles.panelTitle}>
              ¿Organizas pocos eventos al año?
            </h3>
            <p className={styles.panelText}>
              Compra un pack sin suscripción. Si ya tienes plan, también lo
              puedes sumar en un mes con más eventos. Vigencia de 3 meses.
            </p>
            <ul className={styles.packList}>
              {PACKS.map((pack) => (
                <li key={pack.size}>
                  <span>Pack {pack.size} certificados</span>
                  <span>
                    {clp(pack.price)} + IVA
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className={styles.faqFrame}>
          <p className={styles.faqKicker}>
            <span className={styles.kickerMark} aria-hidden="true" />
            Preguntas frecuentes
          </p>
          <FaqAccordion
            id="eventos-faq"
            title="Lo que suelen preguntar antes de certificar un evento."
            items={faqItems.map((item) => ({
              question: item.question,
              answer: item.answer,
              schemaText: item.answer,
            }))}
          />
        </div>
        <FinalCta title="Certifica tu próximo evento con MiCert." />
      </main>
      <SiteFooter />
    </div>
  );
}
