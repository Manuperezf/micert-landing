import styles from "./actividades.module.css";

const CLASS_QUESTIONS = [
  "Objetivos y temas anunciados",
  "Utilidad para el trabajo",
  "Organización de la plataforma o la sala",
];

const RELATOR_QUESTIONS = [
  "Dominio del tema",
  "Claridad",
  "Puntualidad y manejo del tiempo",
];

const DETAILS = [
  {
    title: "Resultados al cerrar",
    text: "Aparecen cuando termina el registro, no mientras la gente responde.",
  },
  {
    title: "Mínimo de 5 respuestas",
    text: "Un grupo con menos no se muestra, para que nadie adivine quién respondió qué.",
  },
  {
    title: "Sin nombre ni hora",
    text: "Las respuestas se guardan sin datos de quién respondió ni cuándo.",
  },
  {
    title: "Sola o con asistencia",
    text: "En cada actividad eliges si registra asistencia, encuesta o las dos.",
  },
];

const CLASS_BARS = ["3", "3", "3", "8", "14", "38", "60"];
const RELATOR_BARS = ["3", "3", "3", "3", "10", "30", "62"];

function Bars({ heights }: { heights: string[] }) {
  return (
    <div className={styles.bars}>
      {heights.map((height, index) => {
        const value = Number(height);
        const tone = value > 14 ? styles.high : value > 3 ? styles.mid : undefined;
        return (
          <span
            key={`${height}-${index}`}
            className={tone}
            style={{ height: `${height}px` }}
          />
        );
      })}
    </div>
  );
}

export default function ActividadesSurvey() {
  return (
    <section className={styles.survey}>
      <div className={styles.shell}>
        <div className={styles.surveyLayout}>
          <div className={styles.copy}>
            <p className={styles.kicker}>
              <span className={styles.kickerMark} aria-hidden="true" />
              Encuesta de calidad
            </p>
            <h2 className={styles.h2}>
              Encuesta de satisfacción anónima sobre la clase y el relator.
            </h2>
            <p className={styles.surveyIntro}>
              Siete preguntas con nota de 1 a 7: tres sobre la clase, tres sobre
              cada relator y una nota general. Al final, espacio para un
              comentario.
            </p>
            <div className={styles.questionCols}>
              <div>
                <h3>Sobre la clase</h3>
                <ul>
                  {CLASS_QUESTIONS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Sobre cada relator</h3>
                <ul>
                  {RELATOR_QUESTIONS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.results} aria-hidden="true">
            <div className={styles.resultsLabel}>
              Resultados · Trabajo en altura física
            </div>
            <div className={styles.resultsTitle}>Sesión del 24 de octubre</div>
            <div className={styles.resultsMeta}>18 de 22 respondieron</div>
            <div className={styles.score}>
              <div>
                <div className={styles.scoreName}>La clase</div>
                <div className={styles.scoreValue}>6,4</div>
              </div>
              <Bars heights={CLASS_BARS} />
            </div>
            <div className={styles.score}>
              <div>
                <div className={styles.scoreName}>Juan González · Relator</div>
                <div className={styles.scoreValue}>6,6</div>
              </div>
              <Bars heights={RELATOR_BARS} />
            </div>
            <div className={styles.quote}>
              «Muy claro el ejercicio con el arnés y la línea de vida.»
            </div>
            <div className={styles.quoteNote}>
              Comentarios en orden aleatorio y sin fecha.
            </div>
          </div>
        </div>
        <div className={styles.details}>
          {DETAILS.map((item) => (
            <div key={item.title} className={styles.detail}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
