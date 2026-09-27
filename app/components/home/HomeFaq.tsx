import Link from "next/link";
import FaqAccordion from "../site/FaqAccordion";
import styles from "../precios/precios.module.css";

type FaqLink = {
  phrase: string;
  href: string;
};

type FaqItem = {
  question: string;
  text: string;
  link?: FaqLink;
};

const FAQ: FaqItem[] = [
  {
    question: "¿MiCert es una plataforma de cursos (LMS)?",
    text: "No. MiCert no dicta ni gestiona cursos en lo pedagógico. Hace una cosa y la hace bien: emitir, diseñar y validar certificados. Convive sin problema con el LMS o el sistema que ya uses. Si dudas entre tu LMS y una herramienta dedicada, revisa Moodle vs MiCert.",
    link: {
      phrase: "Moodle vs MiCert",
      href: "/recursos/certificados-moodle-vs-micert",
    },
  },
  {
    question: "¿Necesito saber de tecnología para usarlo?",
    text: "No. Si sabes manejar una planilla de Excel, sabes usar MiCert. Cargas la lista, eliges el diseño y emites. El QR, el código y la página de verificación se generan solos.",
  },
  {
    question: "¿Cómo reciben los participantes su certificado?",
    text: "Cuando emites el curso, cada participante recibe un correo con el enlace a su certificado verificable, desde donde lo descarga en PDF y lo puede agregar a LinkedIn. Tú ves el estado de envío de cada uno.",
  },
  {
    question: "¿Cómo se valida un certificado?",
    text: "Cada certificado lleva un QR y un código corto. Al escanearlo o ingresar el código se abre una página pública con el estado actual y los datos del curso. No hace falta crear cuenta.",
  },
  {
    question: "¿Sirve para auditorías de SENCE?",
    text: "MiCert está pensado con la trazabilidad en mente: nada se borra. Los cursos se archivan, los certificados se anulan y la vigencia queda fija desde la emisión. Tienes un registro claro de qué se emitió, a quién y cuándo.",
  },
  {
    question: "¿Qué pasa si emito un certificado con un error?",
    text: "Lo anulas. La anulación es definitiva y queda registrada; luego emites el corregido. La página de verificación deja de mostrar el anulado como válido al instante.",
  },
  {
    question: "¿Cuánto cuesta?",
    text: "Tres planes según el volumen mensual: Básico ($29.990 + IVA, 80 certificados), Estándar ($49.990 + IVA, 200) y Pro ($89.990 + IVA, 500). El plan anual incluye 2 meses gratis: pagas 10 meses y usas 12. Además, una demo sin costo de 5 certificados para partir. ¿Comparando opciones? Te ayuda esta guía para elegir un software de certificados.",
    link: {
      phrase: "elegir un software de certificados",
      href: "/recursos/como-elegir-software-certificados-otec",
    },
  },
];

function Answer({ item }: { item: FaqItem }) {
  if (!item.link) return item.text;
  const index = item.text.indexOf(item.link.phrase);
  const before = item.text.slice(0, index);
  const after = item.text.slice(index + item.link.phrase.length);
  return (
    <>
      {before}
      <Link className={styles.faqLink} href={item.link.href}>
        {item.link.phrase}
      </Link>
      {after}
    </>
  );
}

export default function HomeFaq() {
  return (
    <FaqAccordion
      id="faq-title"
      title="Lo que más nos preguntan."
      items={FAQ.map((item) => ({
        question: item.question,
        schemaText: item.text,
        answer: <Answer item={item} />,
      }))}
    />
  );
}
