"use client";

import { OPEN_PREFERENCES_EVENT } from "./cookie-consent";

export default function CookiePreferencesLink({
  className,
}: {
  className?: string;
}) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new Event(OPEN_PREFERENCES_EVENT))}
    >
      Preferencias de cookies
    </button>
  );
}
