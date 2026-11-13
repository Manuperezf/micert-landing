"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

const GA_ID = "G-V9KQKJL8X7";
const STORAGE_KEY = "micert_cookies_analitica";
export const OPEN_PREFERENCES_EVENT = "micert:abrir-preferencias-cookies";

type Choice = "granted" | "denied";

function readChoice(): Choice | null {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

function saveChoice(choice: Choice) {
  try {
    window.localStorage.setItem(STORAGE_KEY, choice);
  } catch {
    // Sin almacenamiento disponible: la elección vale solo para esta visita.
  }
}

// Si alguien acepta y después rechaza, Google Analytics ya quedó cargado en la
// página: se desactiva y se borran sus cookies para que no siga midiendo.
function stopAnalytics() {
  (window as unknown as Record<string, unknown>)[`ga-disable-${GA_ID}`] = true;
  const parts = window.location.hostname.split(".");
  const domains = [window.location.hostname];
  if (parts.length > 2) domains.push(`.${parts.slice(-2).join(".")}`);
  else domains.push(`.${window.location.hostname}`);
  document.cookie.split(";").forEach((cookie) => {
    const name = cookie.split("=")[0].trim();
    if (name === "_ga" || name.startsWith("_ga_") || name === "_gid") {
      domains.forEach((domain) => {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${domain}`;
      });
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    }
  });
}

export default function CookieConsent() {
  const [ready, setReady] = useState(false);
  const [choice, setChoice] = useState<Choice | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = readChoice();
    setChoice(saved);
    setOpen(saved === null);
    setReady(true);

    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_PREFERENCES_EVENT, reopen);
    return () => window.removeEventListener(OPEN_PREFERENCES_EVENT, reopen);
  }, []);

  const decide = useCallback((next: Choice) => {
    saveChoice(next);
    setChoice(next);
    setOpen(false);
    if (next === "denied") stopAnalytics();
  }, []);

  if (!ready) return null;

  return (
    <>
      {choice === "granted" ? <GoogleAnalytics gaId={GA_ID} /> : null}
      {open ? (
        <div
          className="cookie-banner"
          role="dialog"
          aria-labelledby="cookie-banner-title"
          aria-describedby="cookie-banner-text"
        >
          <p id="cookie-banner-title" className="cookie-banner-title">
            Cookies de analítica
          </p>
          <p id="cookie-banner-text" className="cookie-banner-text">
            Usamos Google Analytics para medir de forma agregada cómo se usa este
            sitio y mejorarlo. Solo se activa si lo aceptas. Puedes cambiar tu
            elección cuando quieras desde &ldquo;Preferencias de cookies&rdquo;, al
            final de la página. Más detalle en la{" "}
            <Link href="/privacidad#cookies">Política de Privacidad</Link>.
          </p>
          <div className="cookie-banner-actions">
            <button
              type="button"
              className="cookie-banner-btn"
              onClick={() => decide("denied")}
            >
              Rechazar
            </button>
            <button
              type="button"
              className="cookie-banner-btn"
              onClick={() => decide("granted")}
            >
              Aceptar
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
