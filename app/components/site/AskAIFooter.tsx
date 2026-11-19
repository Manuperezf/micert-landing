"use client";

import { sendGAEvent } from "@next/third-parties/google";
import styles from "./site.module.css";

const PROMPT =
  "Explícame qué es MiCert (micert.cl): cómo funciona la emisión masiva de certificados de capacitación desde Excel, la validación con QR y qué planes tiene.";

const encodedPrompt = encodeURIComponent(PROMPT);

const links = [
  { name: "ChatGPT", href: `https://chatgpt.com/?q=${encodedPrompt}` },
  { name: "Claude", href: `https://claude.ai/new?q=${encodedPrompt}` },
  {
    name: "Perplexity",
    href: `https://www.perplexity.ai/search?q=${encodedPrompt}`,
  },
  {
    name: "Google AI",
    href: `https://www.google.com/search?udm=50&q=${encodedPrompt}`,
  },
] as const;

export default function AskAIFooter() {
  return (
    <div className={styles.footerAsk}>
      <p className={styles.footerAskLabel}>Pregunta a la IA por MiCert</p>
      <ul className={styles.footerAskList}>
        {links.map((link) => (
          <li key={link.name}>
            <a
              className={styles.footerAskLink}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                sendGAEvent("event", "ask_ai_click", { ai: link.name })
              }
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
