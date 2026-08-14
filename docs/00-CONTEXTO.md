# 🍰 Contexto del Proyecto — Dulceypunto

> **Leer este documento primero en cada sesión de opencode.**
> Este archivo resume qué es el proyecto, cómo está organizado y dónde
> encontrar el resto de la información. Los demás docs de `/docs`
> amplían cada tema.

---

## ¿Qué es esto?

Sitio web tipo landing/catálogo para **Dulceypunto**, un emprendimiento
de cosas dulces (repostería/pastelería). La web funciona como
"vidriera digital": el usuario navega el catálogo, ve fotos, y termina
consultando/pidiendo por WhatsApp. No hay carrito ni pagos online en
esta primera versión.

- **Nombre del negocio:** Dulce & Punto (usuario de redes: `DulceyPunto.lovd`)
- **Tagline:** "Detalles dulces para regalar, sorprender o mimarte 💕"
- **Qué vende:** desayunos, meriendas, tartas 100 % caseras y cajitas/boxes
  personalizados (también combos para mate)
- **Facebook:** https://www.facebook.com/people/DulceyPuntolovd/61577830802142/
  (accesible con navegador real; el scraping directo devuelve 400)
- **Contacto:** WhatsApp `011 6515-9776` · Instagram `@dulceypunto.love` ·
  TikTok `@DulceyPunto.love❤️` · zona: Burzaco, PBA (ver `02-INFO-PENDIENTE.md`)

## Stack

- Astro + React + TypeScript
- Tailwind CSS
- Animaciones: CSS / Framer Motion / GSAP según necesidad
- Gestor de paquetes: **pnpm siempre** (nunca npm/yarn)
- Sin backend/DB en v1. Conversión vía WhatsApp.

## Cómo está organizado `/docs`

| Archivo | Para qué sirve |
|---|---|
| `00-CONTEXTO.md` | Este archivo. Punto de entrada. |
| `01-ROADMAP.md` | Fases del proyecto y qué incluye cada una. |
| `02-INFO-PENDIENTE.md` | Datos reales del negocio que faltan (logo, colores, catálogo, contacto, etc.) y su estado. |
| `03-STACK-Y-ESTRUCTURA.md` | Detalle técnico: estructura de carpetas, modelo de datos, convenciones de código. |
| `04-ESTADO-PROYECTO.md` | **Se actualiza en cada sesión.** Qué se hizo, qué falta, próximo paso. |
| `05-DECISIONES.md` | Registro de decisiones de diseño/técnicas y su justificación. |

## Regla de trabajo por sesiones

Cada sesión de opencode debería:

1. Leer `00-CONTEXTO.md` (este archivo).
2. Leer `04-ESTADO-PROYECTO.md` para saber en qué quedó la sesión anterior.
3. Revisar `01-ROADMAP.md` para ubicar en qué fase se está parado.
4. Trabajar la tarea puntual de esa sesión (una fase o una parte de fase, no todo junto).
5. Antes de cerrar, **actualizar `04-ESTADO-PROYECTO.md`** con lo hecho y el próximo paso, y `05-DECISIONES.md` si se tomó alguna decisión relevante.

## Principio rector del proyecto

> No inventar colores, fotos, ni información de la marca. Todo se
> construye a partir de la identidad real del negocio. Si un dato real
> no está disponible todavía, se usa un placeholder claramente
> marcado como tal (nunca datos inventados que puedan pasar como
> reales) y se anota en `02-INFO-PENDIENTE.md`.
