# MiCert — Landing (micert.cl)

Landing de MiCert hecha en Next.js 14 (App Router). Proyecto separado de la
aplicación (app.micert.cl), según la Opción A.

## Requisitos
- Node 18 o superior.

## Trabajar en local
    npm install
    npm run dev      # vista previa en http://localhost:3000
    npm run build    # verificar SIEMPRE antes de subir (igual que la app)

## Dónde van las cosas
- Imágenes/capturas: carpeta `public/`. Ej: `public/landing/panel-principal.png`
  se referencia en el código como `/landing/panel-principal.png`.
- Logo: deja el archivo en `public/logo.svg` y en `app/page.tsx` reemplaza
  `<span className="seal"></span>` por `<img className="logo" src="/logo.svg" alt="MiCert" />`.
- QR del hero: `public/qr-demo.png`. Hoy apunta a la demo; reemplázalo por el QR
  de un certificado real de muestra cuando la DEMO esté lista.

## Capturas pendientes (4 marcos grises en el sitio)
1. Panel principal (dashboard) — ~1440×810
2. Importar Excel — ~960×720
3. Editor de diseño — ~960×720
4. Certificados emitidos — ~960×720
Cada marco tiene un comentario en `app/page.tsx` que indica cómo cambiarlo por la imagen.

## Publicar
1. Crear repositorio en GitHub y hacer push (ver pasos en el chat).
2. Importar el repo en Vercel.
3. En Vercel → Settings → Domains, agregar `micert.cl` y cargar en NIC Chile
   los registros DNS que Vercel indique.
