import type { ReactNode } from "react";

type FaqSectionProps = {
  title?: string;
  items: Array<{ question: string; answer: ReactNode }>;
};

export default function FaqSection({
  title = "Preguntas frecuentes",
  items,
}: FaqSectionProps) {
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head">
          <h2>{title}</h2>
        </div>
        <div className="article-faq">
          {items.map((item) => (
            <details key={item.question} name="faq-section">
              <summary>
                {item.question}
                <span className="article-faq-toggle" aria-hidden="true">
                  +
                </span>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
