"use client";

import { useState } from "react";

type FeedbackOption = "low" | "mid" | "high";

const OPTIONS: { id: FeedbackOption; label: string; emoji: string }[] = [
  { id: "low", label: "No mucho", emoji: "🙁" },
  { id: "mid", label: "Más o menos", emoji: "😐" },
  { id: "high", label: "Muy útil", emoji: "🙂" },
];

export default function ArticleFeedback() {
  const [selected, setSelected] = useState<FeedbackOption | null>(null);

  return (
    <div className="article-feedback">
      <p className="article-feedback-title">¿Te fue útil este artículo?</p>
      <div className="article-feedback-options" role="group" aria-label="Valoración del artículo">
        {OPTIONS.map((option) => (
          <button
            key={option.id}
            type="button"
            className={`article-feedback-card${selected === option.id ? " is-selected" : ""}`}
            onClick={() => setSelected(option.id)}
            aria-pressed={selected === option.id}
          >
            <span className="article-feedback-emoji" aria-hidden="true">
              {option.emoji}
            </span>
            <span className="article-feedback-label">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
