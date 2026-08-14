# 🧭 Registro de decisiones

> Anotar acá decisiones relevantes (técnicas o de diseño) junto con la
> razón, para no tener que volver a discutirlas en cada sesión.

---

### 2026-08-14 — Tailwind v4 vía plugin de Vite (`astro add tailwind`)

**Decisión:** se agregó Tailwind con `pnpm astro add tailwind` (Astro 7.2.2).
Quedó **Tailwind v4** (`tailwindcss@4.3.3` + `@tailwindcss/vite@4.3.3`) como
plugin de Vite en `astro.config.mjs` (`vite.plugins: [tailwindcss()]`), con
`src/styles/global.css` (`@import "tailwindcss";`). **No** se usa
`@astrojs/tailwind` ni `tailwind.config` (v4 no lo requiere). Sin variables
de color personalizadas todavía: se definen en Fase 2 con la paleta real
(ver `02-INFO-PENDIENTE.md`).
**Razón:** `astro add` es la vía oficial; para Astro ≥ 5.2 instala Tailwind v4
sin configuración manual. La importación formal de `global.css` queda para
`Layout.astro` (Fase 3).

### 2026-08-14 — Integración de React vía `astro add`

**Decisión:** se agregó React con `pnpm astro add react` (sin configuración
manual ni extras). Quedó `@astrojs/react` + React 19, `jsx: "react-jsx"` en
`tsconfig.json`, y la integración `react()` en `astro.config.mjs`. Sin SWC ni
`experimentalReactCompiler` por ahora.
**Razón:** `astro add` es la vía oficial y mantiene la configuración mínima
que pide el stack. Los tipos de React quedaron en `dependencies` (comportamiento
por defecto de `astro add`); no afecta el resultado final del build.

### 2026-08-14 — Template minimal + TypeScript strict para el scaffold

**Decisión:** se inicializó Astro con el template `minimal`, TypeScript `strict`,
git y `--no-ai`. Se usa `pnpm` siempre.
**Razón:** el stack objetivo no necesita la plantilla `basics` (los componentes
se construyen a mano en Fase 3); `minimal` deja la base más limpia. TS `strict`
es la configuración recomendada por Astro para proyectos con tipos estrictos.

### 2026-08-14 — Workaround de directorio no vacío en create-astro

**Decisión:** `create-astro` rechaza carpetas que no estén vacías. Como
`src/assets/` ya existía con las 18 fotos reales, se movió `src/` a un respaldo
temporal en `D:\Temp\opencode\` durante el scaffold y se restauró después.
**Razón:** garantizar que las fotos reales del negocio nunca se pierdan y que
el proyecto se genere en la raíz (`/Dulceypunto`) y no en una subcarpeta.

---

### 2026-08-14 — Acceso a Facebook con navegador real

**Decisión:** para extraer datos de la página (DulceyPunto.lovd) se usa un
navegador real (Chrome DevTools). El scraping directo (`webfetch`) falla con
error 400.
**Razón:** Facebook bloquea los clientes HTTP simples; el navegador renderiza
la página pública y permite leer los datos e imágenes.

### 2026-08-14 — El logo es la foto de perfil

**Decisión:** el logo oficial del negocio es la foto de perfil de Facebook
(`src/assets/logo/perfil-1024.jpg`). La paleta de colores se deriva de él.
**Razón:** lo confirmó el dueño.

### 2026-08-14 — Paleta de colores del logo (análisis de píxeles)

**Decisión:** los colores de marca se obtienen analizando los píxeles del
logo (muestreo 128×128, cuantizado) y no a ojo. Resultado: blanco `#F8F8F8`,
crema/rosa empolvado `#F0E0E0` (tono principal), beige `#F0E0C0`,
marrón-mauve `#A09090`, marrón oscuro `#504040`.
**Razón:** el modelo de IA no puede "ver" imágenes, así que el método
programático garantiza que los colores sean reales y objetivos.

### 2026-08-14 — Horario de atención no se publica

**Decisión:** la web no muestra horarios de atención (aunque Facebook diga
"Siempre abierto").
**Razón:** lo definió el cliente.

### 2026-08-14 — Fotos actuales como material base

**Decisión:** se usan las 16 fotos descargadas de Facebook como material
real del catálogo. Cuando el dueño consiga fotos de mejor calidad, se
reemplazan (misma ruta/nombre para no romper referencias).
**Razón:** son las únicas fotos disponibles; se marca en `02` que están
sujetas a reemplazo.

### 2026-08-14 — Precios, pagos y zonas: a cargo del dueño

**Decisión:** precios, métodos de pago y detalle de zonas de entrega los
provee el dueño más adelante; no se inventan ni se cargan.
**Razón:** no están publicados y el proyecto prohíbe inventar datos.

### 2026-08-14 — Gestor de paquetes: pnpm

**Decisión:** usar `pnpm` en todo el proyecto, siempre.
**Razón:** requerimiento explícito del usuario.

### 2026-08-14 — Identidad visual real obligatoria

**Decisión:** no se van a fijar colores, fotos ni textos definitivos
de marca hasta contar con material real del negocio (logo, fotos,
capturas de redes). Se trabaja con placeholders explícitos mientras
tanto.
**Razón:** el brief original es explícito en que no hay que inventar
identidad de marca, y Facebook no es accesible por scraping para
extraer esos datos automáticamente.

### 2026-08-14 — Sin e-commerce en v1

**Decisión:** la conversión de la v1 es 100% vía WhatsApp (sin
carrito, login, pagos ni base de datos).
**Razón:** simplifica el alcance inicial; definido en el brief
original como suficiente para una primera versión.
