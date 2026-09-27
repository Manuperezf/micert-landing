"use client";

import { useState, type ReactNode } from "react";
import { buildFaqPageSchema } from "../../lib/faq-schema";
import styles from "../precios/precios.module.css";

export type FaqAccordionItem = {
  question: string;
  answer: ReactNode;
  schemaText: string;
};

type FaqAccordionProps = {
  title: string;
  items: FaqAccordionItem[];
  id: string;
};

export default function FaqAccordion({ title, items, id }: FaqAccordionProps) {
  const [open, setOpen] = useState<boolean[]>(() => items.map(() => false));
  const schema = buildFaqPageSchema(
    items.map((item) => ({ question: item.question, answer: item.schemaText })),
  );

  return (
    <section className={styles.faq} aria-labelledby={id}>
      {schema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ) : null}
      <div className={styles.faqLayout}>
        <h2 className={styles.faqTitle} id={id}>
          {title}
        </h2>
        <div className={styles.faqList}>
          {items.map((item, index) => {
            const panelId = `${id}-panel-${index}`;
            const expanded = open[index];
            return (
              <div className={styles.faqItem} key={item.question}>
                <button
                  type="button"
                  className={styles.faqButton}
                  aria-expanded={expanded}
                  aria-controls={panelId}
                  onClick={() =>
                    setOpen((current) =>
                      current.map((value, i) => (i === index ? !value : value)),
                    )
                  }
                >
                  {item.question}
                  <span
                    className={`${styles.faqPlus} ${expanded ? styles.faqPlusOpen : ""}`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <div
                  className={styles.faqPanel}
                  id={panelId}
                  role="region"
                  hidden={!expanded}
                >
                  <p className={styles.faqAnswer}>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
