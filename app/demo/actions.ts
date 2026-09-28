"use server";

import { createClient } from "@supabase/supabase-js";
import { CONSENT_VERSION } from "../lib/consent";

export type DemoField =
  | "nombre"
  | "apellidos"
  | "email"
  | "organizacion"
  | "telefono"
  | "certificados_mes"
  | "mensaje"
  | "acepta_tratamiento";

export type DemoFormState = {
  status: "idle" | "success" | "error";
  email?: string;
  saved?: boolean;
  fieldErrors?: Partial<Record<DemoField, string>>;
  formError?: string;
};

const VOLUME_VALUES = ["menos_50", "50_150", "150_400", "mas_400"] as const;

type Volume = (typeof VOLUME_VALUES)[number];

const VOLUME_LABELS: Record<Volume, string> = {
  menos_50: "Menos de 50",
  "50_150": "50 a 150",
  "150_400": "150 a 400",
  mas_400: "Más de 400",
};

const LIMITS = {
  nombre: 80,
  apellidos: 80,
  emailMin: 5,
  emailMax: 160,
  organizacion: 120,
  mensaje: 2000,
  origen: 300,
} as const;

const EMAIL_ERROR = "Revisa el correo";
const PHONE_ERROR = "Ingresa un teléfono válido";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_CODE = /^\+\d{1,3}$/;

const FORM_ERROR =
  "No pudimos enviar tu solicitud. Intenta de nuevo o escríbenos a hola@micert.cl.";

const MIN_ELAPSED_MS = 3000;
const RATE_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT = 3;

function text(formData: FormData, name: string) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
}

function fakeSuccess(email: string): DemoFormState {
  return { status: "success", email, saved: false };
}

function generalError(): DemoFormState {
  return { status: "error", formError: FORM_ERROR };
}

function isVolume(value: string): value is Volume {
  return (VOLUME_VALUES as readonly string[]).includes(value);
}

function validPhone(code: string, numero: string): string | null {
  if (!PHONE_CODE.test(code) || !/^\d+$/.test(numero)) return null;
  if (code === "+56") {
    if (numero.length !== 9) return null;
  } else if (numero.length < 6 || numero.length > 12) {
    return null;
  }
  return `${code} ${numero}`;
}

export async function submitDemo(
  _prev: DemoFormState,
  formData: FormData,
): Promise<DemoFormState> {
  const honeypot = text(formData, "empresa_web");
  const loadedAt = Number(text(formData, "cargado_en"));
  const elapsed = Date.now() - loadedAt;
  const emailDraft = text(formData, "email").toLowerCase();

  if (honeypot || !Number.isFinite(loadedAt) || elapsed < MIN_ELAPSED_MS) {
    return fakeSuccess(emailDraft);
  }

  const nombre = text(formData, "nombre");
  const apellidos = text(formData, "apellidos");
  const email = emailDraft;
  const organizacion = text(formData, "organizacion");
  const parsedPhone = validPhone(
    text(formData, "telefono_codigo"),
    text(formData, "telefono_numero"),
  );
  const certificados = text(formData, "certificados_mes");
  const mensaje = text(formData, "mensaje");
  const aceptaTratamiento = formData.get("acepta_tratamiento") === "si";
  const aceptaMarketing = formData.get("acepta_marketing") === "si";
  const origen = "/demo";

  const fieldErrors: Partial<Record<DemoField, string>> = {};

  if (nombre.length < 1 || nombre.length > LIMITS.nombre) {
    fieldErrors.nombre = nombre
      ? "El nombre es demasiado largo."
      : "Ingresa tu nombre.";
  }

  if (apellidos.length > LIMITS.apellidos) {
    fieldErrors.apellidos = "Los apellidos son demasiado largos.";
  }

  if (
    email.length < LIMITS.emailMin ||
    email.length > LIMITS.emailMax ||
    !EMAIL_PATTERN.test(email)
  ) {
    fieldErrors.email = EMAIL_ERROR;
  }

  if (organizacion.length < 1 || organizacion.length > LIMITS.organizacion) {
    fieldErrors.organizacion = organizacion
      ? "El nombre de la organización es demasiado largo."
      : "Ingresa el nombre de tu OTEC o empresa.";
  }

  if (!parsedPhone) fieldErrors.telefono = PHONE_ERROR;

  if (certificados && !isVolume(certificados)) {
    fieldErrors.certificados_mes = "Elige una opción válida.";
  }

  if (mensaje.length > LIMITS.mensaje) {
    fieldErrors.mensaje = "El mensaje es demasiado largo.";
  }

  if (!aceptaTratamiento) {
    fieldErrors.acepta_tratamiento = "Debes aceptar el tratamiento de datos.";
  }

  if (Object.keys(fieldErrors).length > 0 || !parsedPhone) {
    return { status: "error", fieldErrors };
  }

  const telefono = parsedPhone;

  if (origen.length > LIMITS.origen) return generalError();

  const url = process.env.SUPABASE_URL;
  const secret = process.env.SUPABASE_SECRET_KEY;
  if (!url || !secret) {
    console.error("demo submit missing supabase config");
    return generalError();
  }

  const supabase = createClient(url, secret, {
    auth: { persistSession: false },
  });

  const since = new Date(Date.now() - RATE_WINDOW_MS).toISOString();
  const { count, error: countError } = await supabase
    .from("solicitudes_prueba")
    .select("id", { count: "exact", head: true })
    .eq("email", email)
    .gte("created_at", since);

  if (countError) {
    console.error("demo rate limit failed", countError.code);
    return generalError();
  }

  if ((count ?? 0) >= RATE_LIMIT) return generalError();

  const { error: insertError } = await supabase.from("solicitudes_prueba").insert({
    nombre,
    apellidos: apellidos || null,
    email,
    organizacion,
    telefono,
    certificados_mes: certificados ? certificados : null,
    mensaje: mensaje || null,
    acepta_tratamiento: true,
    acepta_marketing: aceptaMarketing,
    version_consentimiento: CONSENT_VERSION,
    origen,
  });

  if (insertError) {
    console.error("demo insert failed", insertError.code);
    return generalError();
  }

  await notify(email, {
    nombre,
    apellidos,
    organizacion,
    telefono,
    certificados: certificados && isVolume(certificados) ? certificados : null,
    mensaje,
    aceptaMarketing,
  });

  return { status: "success", email, saved: true };
}

type Lead = {
  nombre: string;
  apellidos: string;
  organizacion: string;
  telefono: string;
  certificados: Volume | null;
  mensaje: string;
  aceptaMarketing: boolean;
};

async function notify(email: string, lead: Lead) {
  const apiKey = process.env.RESEND_API_KEY;
  const notifyTo = process.env.LEAD_NOTIFY_EMAIL;
  if (!apiKey || !notifyTo) {
    console.error("demo email skipped: missing config");
    return;
  }

  const volume = lead.certificados
    ? VOLUME_LABELS[lead.certificados]
    : "No indicado";
  const internal = [
    `Nombre: ${lead.nombre}`,
    `Apellidos: ${lead.apellidos || "—"}`,
    `Correo: ${email}`,
    `OTEC o empresa: ${lead.organizacion}`,
    `Teléfono o WhatsApp: ${lead.telefono}`,
    `Certificados al mes: ${volume}`,
    `Mensaje: ${lead.mensaje || "—"}`,
    `Acepta novedades: ${lead.aceptaMarketing ? "sí" : "no"}`,
  ].join("\n");

  const confirmation = [
    `Hola ${lead.nombre}, recibimos tu solicitud para probar MiCert con 5 certificados. Te escribimos dentro de 24 horas hábiles con los datos de acceso. Si tienes dudas, responde este correo.`,
    "",
    "Equipo MiCert",
  ].join("\n");

  await Promise.all([
    sendEmail(apiKey, {
      to: notifyTo,
      reply_to: email,
      subject: `Nueva solicitud de prueba: ${lead.organizacion}`,
      text: internal,
      label: "internal",
    }),
    sendEmail(apiKey, {
      to: email,
      subject: "Recibimos tu solicitud de prueba",
      text: confirmation,
      label: "confirmation",
    }),
  ]);
}

async function sendEmail(
  apiKey: string,
  message: {
    to: string;
    reply_to?: string;
    subject: string;
    text: string;
    label: string;
  },
) {
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "MiCert <hola@micert.cl>",
        to: [message.to],
        reply_to: message.reply_to,
        subject: message.subject,
        text: message.text,
      }),
    });
    if (!response.ok) {
      console.error("demo email failed", message.label, response.status);
    }
  } catch {
    console.error("demo email failed", message.label);
  }
}
