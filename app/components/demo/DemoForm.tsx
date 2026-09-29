"use client";

import { useEffect, useRef, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import Link from "next/link";
import { sendGAEvent } from "@next/third-parties/google";
import { AR, CL, CO, ES, MX, PE } from "country-flag-icons/react/3x2";
import { submitDemo, type DemoFormState } from "../../demo/actions";
import {
  CONSENT_MARKETING,
  CONSENT_TERMS,
  CONSENT_TREATMENT,
  PRIVACY_LINK_PHRASE,
  TERMS_LINK_PHRASE,
} from "../../lib/consent";
import styles from "./demo.module.css";

const initialState: DemoFormState = { status: "idle" };

const VOLUMES = [
  { value: "menos_50", label: "Menos de 50" },
  { value: "50_150", label: "50 a 150" },
  { value: "150_400", label: "150 a 400" },
  { value: "mas_400", label: "Más de 400" },
] as const;

const COUNTRY_CODES = [
  { value: "+56", label: "Chile +56", Flag: CL },
  { value: "+51", label: "Perú +51", Flag: PE },
  { value: "+54", label: "Argentina +54", Flag: AR },
  { value: "+57", label: "Colombia +57", Flag: CO },
  { value: "+52", label: "México +52", Flag: MX },
  { value: "+34", label: "España +34", Flag: ES },
] as const;

function GlobeIcon() {
  return (
    <svg className={styles.globe} viewBox="0 0 20 14" aria-hidden="true">
      <circle
        cx="10"
        cy="7"
        r="5.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <ellipse
        cx="10"
        cy="7"
        rx="2.4"
        ry="5.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M4.8 7h10.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function CountryFlag({ code }: { code: string }) {
  const selected = COUNTRY_CODES.find((country) => country.value === code);
  const Flag = selected?.Flag;
  if (!Flag) return <GlobeIcon />;
  return <Flag className={styles.flag} aria-hidden="true" />;
}

function Chevron() {
  return (
    <svg className={styles.chevron} viewBox="0 0 12 12" aria-hidden="true">
      <path
        d="M2.5 4.25 6 7.75 9.5 4.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function digitsOnly(value: string, max: number) {
  return value.replace(/\D/g, "").slice(0, max);
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className={`${styles.btn} ${styles.btnPrimary} ${styles.submit}`}
      disabled={pending}
    >
      {pending ? "Enviando…" : "Solicitar prueba gratis"}
    </button>
  );
}

function TreatmentLabel() {
  const index = CONSENT_TREATMENT.indexOf(PRIVACY_LINK_PHRASE);
  if (index === -1) return CONSENT_TREATMENT;
  return (
    <>
      {CONSENT_TREATMENT.slice(0, index)}
      <Link
        className={styles.privacyLink}
        href="/privacidad"
        target="_blank"
        rel="noopener noreferrer"
      >
        {PRIVACY_LINK_PHRASE}
      </Link>
      {CONSENT_TREATMENT.slice(index + PRIVACY_LINK_PHRASE.length)}
    </>
  );
}

function TermsLabel() {
  const index = CONSENT_TERMS.indexOf(TERMS_LINK_PHRASE);
  if (index === -1) return CONSENT_TERMS;
  return (
    <>
      {CONSENT_TERMS.slice(0, index)}
      <Link
        className={styles.privacyLink}
        href="/terminos"
        target="_blank"
        rel="noopener noreferrer"
      >
        {TERMS_LINK_PHRASE}
      </Link>
      {CONSENT_TERMS.slice(index + TERMS_LINK_PHRASE.length)}
    </>
  );
}

export default function DemoForm() {
  const [state, formAction] = useFormState(submitDemo, initialState);
  const [loadedAt, setLoadedAt] = useState("");
  const [codeMode, setCodeMode] = useState("+56");
  const [customCode, setCustomCode] = useState("+");
  const [phone, setPhone] = useState("");
  const [volumeEmpty, setVolumeEmpty] = useState(true);
  const statusRef = useRef<HTMLParagraphElement>(null);
  const codeInputRef = useRef<HTMLInputElement>(null);

  const activeCode = codeMode === "otro" ? customCode : codeMode;
  const chile = activeCode === "+56";
  const phoneMax = chile ? 9 : 12;

  useEffect(() => {
    setLoadedAt(String(Date.now()));
  }, []);

  useEffect(() => {
    if (state.status !== "success") return;
    statusRef.current?.focus();
    if (state.saved) {
      sendGAEvent("event", "generate_lead", { form: "prueba_gratis" });
    }
  }, [state]);

  useEffect(() => {
    if (codeMode === "otro") codeInputRef.current?.focus();
  }, [codeMode]);

  useEffect(() => {
    setPhone((current) => current.slice(0, phoneMax));
  }, [phoneMax]);

  if (state.status === "success") {
    return (
      <p ref={statusRef} className={styles.success} role="status" tabIndex={-1}>
        Listo, recibimos tu solicitud. Te escribimos a {state.email} dentro de
        24 horas hábiles.
      </p>
    );
  }

  const errors = state.fieldErrors ?? {};
  const phoneErrorId = errors.telefono ? "demo-telefono-error" : undefined;

  return (
    <form className={styles.form} action={formAction} noValidate>
      <div className={styles.honeypot} aria-hidden="true">
        <input
          type="text"
          name="empresa_web"
          tabIndex={-1}
          autoComplete="off"
          defaultValue=""
        />
      </div>
      <input type="hidden" name="cargado_en" value={loadedAt} />

      <div className={styles.row}>
        <Field
          id="demo-nombre"
          name="nombre"
          label="Nombre"
          autoComplete="given-name"
          required
          error={errors.nombre}
        />
        <Field
          id="demo-apellidos"
          name="apellidos"
          label="Apellidos"
          autoComplete="family-name"
          error={errors.apellidos}
        />
      </div>

      <div className={styles.row}>
        <Field
          id="demo-email"
          name="email"
          label="Correo de trabajo"
          type="email"
          autoComplete="email"
          required
          error={errors.email}
        />
        <div className={styles.field}>
          <label className={styles.label} htmlFor="demo-telefono">
            Teléfono o WhatsApp
          </label>
          <div className={styles.phoneControls}>
            {codeMode === "otro" ? (
              <div className={styles.codeField}>
                <GlobeIcon />
                <input
                  ref={codeInputRef}
                  className={styles.codeInput}
                  name="telefono_codigo"
                  aria-label="Código de país"
                  inputMode="tel"
                  autoComplete="tel-country-code"
                  value={customCode}
                  onChange={(event) => {
                    const digits = digitsOnly(event.target.value, 3);
                    setCustomCode(`+${digits}`);
                  }}
                  aria-invalid={errors.telefono ? true : undefined}
                  aria-describedby={phoneErrorId}
                />
              </div>
            ) : (
              <div className={styles.codeField}>
                <span className={styles.codeFace} aria-hidden="true">
                  <CountryFlag code={codeMode} />
                  <span className={styles.codeValue}>{codeMode}</span>
                  <Chevron />
                </span>
                <select
                  className={styles.codeSelect}
                  name="telefono_codigo"
                  aria-label="Código de país"
                  value={codeMode}
                  onChange={(event) => {
                    const next = event.target.value;
                    if (next === "otro") {
                      setCodeMode("otro");
                      setCustomCode("+");
                      return;
                    }
                    setCodeMode(next);
                  }}
                  aria-invalid={errors.telefono ? true : undefined}
                  aria-describedby={phoneErrorId}
                >
                  {COUNTRY_CODES.map((country) => (
                    <option key={country.value} value={country.value}>
                      {country.label}
                    </option>
                  ))}
                  <option value="otro">Otro</option>
                </select>
              </div>
            )}
            <input
              className={`${styles.input} ${styles.phoneNumber}`}
              id="demo-telefono"
              name="telefono_numero"
              type="tel"
              inputMode="numeric"
              autoComplete="tel-national"
              placeholder={chile ? "9 1234 5678" : "Número"}
              maxLength={phoneMax}
              required
              aria-required="true"
              value={phone}
              onChange={(event) => {
                setPhone(digitsOnly(event.target.value, phoneMax));
              }}
              aria-invalid={errors.telefono ? true : undefined}
              aria-describedby={phoneErrorId}
            />
          </div>
          {errors.telefono ? (
            <p className={styles.error} id="demo-telefono-error">
              {errors.telefono}
            </p>
          ) : null}
        </div>
      </div>

      <Field
        id="demo-organizacion"
        name="organizacion"
        label="OTEC o empresa"
        autoComplete="organization"
        required
        error={errors.organizacion}
      />

      <div className={styles.field}>
        <label className={styles.label} htmlFor="demo-volumen">
          ¿Cuántos certificados emites al mes?
        </label>
        <select
          className={
            volumeEmpty
              ? `${styles.input} ${styles.selectEmpty}`
              : styles.input
          }
          id="demo-volumen"
          name="certificados_mes"
          defaultValue=""
          onChange={(event) => setVolumeEmpty(event.target.value === "")}
          aria-invalid={errors.certificados_mes ? true : undefined}
          aria-describedby={
            errors.certificados_mes ? "demo-volumen-error" : undefined
          }
        >
          <option value="">Selecciona una opción</option>
          {VOLUMES.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.certificados_mes ? (
          <p className={styles.error} id="demo-volumen-error">
            {errors.certificados_mes}
          </p>
        ) : null}
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="demo-mensaje">
          Mensaje
        </label>
        <textarea
          className={`${styles.input} ${styles.textarea}`}
          id="demo-mensaje"
          name="mensaje"
          rows={3}
          aria-invalid={errors.mensaje ? true : undefined}
          aria-describedby={errors.mensaje ? "demo-mensaje-error" : undefined}
        />
        {errors.mensaje ? (
          <p className={styles.error} id="demo-mensaje-error">
            {errors.mensaje}
          </p>
        ) : null}
      </div>

      <div className={styles.checks}>
        <div className={styles.check}>
          <input
            className={styles.checkbox}
            id="demo-tratamiento"
            name="acepta_tratamiento"
            type="checkbox"
            value="si"
            required
            aria-required="true"
            aria-invalid={errors.acepta_tratamiento ? true : undefined}
            aria-describedby={
              errors.acepta_tratamiento ? "demo-tratamiento-error" : undefined
            }
          />
          <label className={styles.checkLabel} htmlFor="demo-tratamiento">
            <TreatmentLabel />
          </label>
        </div>
        {errors.acepta_tratamiento ? (
          <p className={styles.error} id="demo-tratamiento-error">
            {errors.acepta_tratamiento}
          </p>
        ) : null}

        <div className={styles.check}>
          <input
            className={styles.checkbox}
            id="demo-terminos"
            name="acepta_terminos"
            type="checkbox"
            value="si"
            required
            aria-required="true"
            aria-invalid={errors.acepta_terminos ? true : undefined}
            aria-describedby={
              errors.acepta_terminos ? "demo-terminos-error" : undefined
            }
          />
          <label className={styles.checkLabel} htmlFor="demo-terminos">
            <TermsLabel />
          </label>
        </div>
        {errors.acepta_terminos ? (
          <p className={styles.error} id="demo-terminos-error">
            {errors.acepta_terminos}
          </p>
        ) : null}

        <div className={styles.check}>
          <input
            className={styles.checkbox}
            id="demo-marketing"
            name="acepta_marketing"
            type="checkbox"
            value="si"
          />
          <label className={styles.checkLabel} htmlFor="demo-marketing">
            {CONSENT_MARKETING}
          </label>
        </div>
      </div>

      {state.formError ? (
        <p className={styles.formError} role="alert">
          {state.formError}
        </p>
      ) : null}

      <SubmitButton />
      <p className={styles.reassure}>
        Sin costo · Sin tarjeta de crédito · Con tus propias plantillas
      </p>
    </form>
  );
}

function Field({
  id,
  name,
  label,
  type = "text",
  autoComplete,
  required,
  error,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  autoComplete: string;
  required?: boolean;
  error?: string;
}) {
  const errorId = `${id}-error`;
  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        className={styles.input}
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        aria-required={required ? true : undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
      />
      {error ? (
        <p className={styles.error} id={errorId}>
          {error}
        </p>
      ) : null}
    </div>
  );
}
