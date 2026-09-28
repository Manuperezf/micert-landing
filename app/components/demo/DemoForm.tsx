"use client";

import { useEffect, useRef, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import Link from "next/link";
import { sendGAEvent } from "@next/third-parties/google";
import { submitDemo, type DemoFormState } from "../../demo/actions";
import {
  CONSENT_MARKETING,
  CONSENT_TREATMENT,
  PRIVACY_LINK_PHRASE,
} from "../../lib/consent";
import styles from "./demo.module.css";

const initialState: DemoFormState = { status: "idle" };

const VOLUMES = [
  { value: "menos_50", label: "Menos de 50" },
  { value: "50_150", label: "50 a 150" },
  { value: "150_400", label: "150 a 400" },
  { value: "mas_400", label: "Más de 400" },
] as const;

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

export default function DemoForm() {
  const [state, formAction] = useFormState(submitDemo, initialState);
  const [loadedAt, setLoadedAt] = useState("");
  const statusRef = useRef<HTMLParagraphElement>(null);

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

  if (state.status === "success") {
    return (
      <p ref={statusRef} className={styles.success} role="status" tabIndex={-1}>
        Listo, recibimos tu solicitud. Te escribimos a {state.email} dentro de
        24 horas hábiles.
      </p>
    );
  }

  const errors = state.fieldErrors ?? {};

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

      <Field
        id="demo-nombre"
        name="nombre"
        label="Nombre*"
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
      <Field
        id="demo-email"
        name="email"
        label="Correo de trabajo*"
        type="email"
        autoComplete="email"
        required
        error={errors.email}
      />
      <Field
        id="demo-organizacion"
        name="organizacion"
        label="OTEC o empresa*"
        autoComplete="organization"
        required
        error={errors.organizacion}
      />
      <Field
        id="demo-telefono"
        name="telefono"
        label="Teléfono o WhatsApp*"
        type="tel"
        autoComplete="tel"
        placeholder="+56 9 1234 5678"
        required
        error={errors.telefono}
      />

      <div className={styles.field}>
        <label className={styles.label} htmlFor="demo-volumen">
          ¿Cuántos certificados emites al mes?
        </label>
        <select
          className={styles.input}
          id="demo-volumen"
          name="certificados_mes"
          defaultValue=""
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
          rows={4}
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
    </form>
  );
}

function Field({
  id,
  name,
  label,
  type = "text",
  autoComplete,
  placeholder,
  required,
  error,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  autoComplete: string;
  placeholder?: string;
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
        placeholder={placeholder}
        required={required}
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
