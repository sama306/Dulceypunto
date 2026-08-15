# 🧭 Registro de decisiones

> Anotar acá decisiones relevantes (técnicas o de diseño) junto con la
> razón, para no tener que volver a discutirlas en cada sesión.

---

### 2026-08-14 — Hero: diseño "Vitrina dulce" e implementación

**Decisión:** hero de 2 columnas en desktop (texto a la izquierda, collage de fotos
reales a la derecha) y apilado en mobile, sobre gradiente crema → blanco con blobs
radiales sutiles. Texto solo con datos reales: eyebrow Caveat ("repostería 100%
casera · Burzaco, PBA"), **H1** único con el tagline real en Fraunces, párrafo con
las categorías reales, CTA primario WhatsApp (`waLink()`) y secundario ghost "Ver
productos" → `#productos`, y chips de confianza confirmados (100% casero · Pedidos
por WhatsApp · Burzaco, PBA). Collage con 3 fotos reales (`producto-12` central,
`producto-04` y `producto-13`) con rotaciones suaves, ring blanco y sello Caveat
flotante "hecho con amor". Animación de entrada con CSS keyframes (fade-up
escalonado) sin librerías, respetando `prefers-reduced-motion`; sello con flotado
lento. Imágenes con `<img>` directo (la central con `fetchpriority="high"`).
**Razón:** sigue la identidad real (paleta crema/rosa + Fraunces + Caveat) y la
conversión vía WhatsApp del modelo de negocio; el collage usa material fotográfico
real sin inventar; animación CSS pura por convención del proyecto (Fase 3 recién
autoriza Framer Motion si hace falta); el `scroll-padding-top` global corrige los
anclas bajo el navbar sticky.

### 2026-08-14 — Navbar: diseño e implementación

**Decisión:** navbar sticky con fondo translúcido (`--color-surface` al 70 % +
`backdrop-blur`) que al hacer scroll se vuelve más opaco y agrega sombra suave
(clase `nav-scrolled` toggled por un `<script>` liviano). Composición: logo
circular (la foto de perfil `perfil-1024.jpg`) + wordmark "Dulce & Punto" en
Fraunces con acento Caveat "hecho con amor". Links ancla a las secciones de la
landing (Inicio, Productos, Galería, Sobre nosotros, Contacto) con subrayado en
marrón-mauve en hover y **scrollspy** (IntersectionObserver) que marca el link
activo con `aria-current`. CTA de WhatsApp en pill verde usando `waLink()` de
`src/data/site.ts`. El menú móvil es una **isla React** (`MobileMenu.tsx`,
`client:load`) con toggle hamburguesa ↔ X, panel full-width, cierre con `Esc` y
al navegar (`aria-expanded`/`aria-controls`).
**Razón:** sigue la identidad real (paleta crema/rosa + Fraunces); el fondo
translúcido con blur funciona sobre cualquier hero futuro (evita re-trabajo);
scrollspy con IntersectionObserver es liviano y sin librerías; el menú móvil usa
React según la convención de interactividad del proyecto. El logo usa `<img>`
directo (no Astro `<Image>`) porque `sharp` todavía no está instalado; la
optimización de imágenes (WebP/AVIF) queda para Fase 3 como indica el roadmap.

### 2026-08-14 — Tipografía: combinación "Boutique dulce" (Fraunces + Mulish + Caveat)

**Decisión:** no hay fuente oficial de la marca (confirmado). Se eligió una
combinación tipográfica propia, sin afirmar que sea "la de la marca":
- **Títulos:** Fraunces Variable (serif display, variante `soft`) → `--font-display`
- **Texto:** Mulish Variable → `--font-body`
- **Acentos/taglines (uso dosificado):** Caveat Variable → `--font-hand`

Se cargan **self-hosted** vía `@fontsource-variable` (no Google Fonts CDN):
`fraunces/soft.css`, `mulish/index.css`, `caveat/index.css`.
**Razón:** Fraunces `soft` eleva lo casero a "artesanal de regalo" y combina con la
paleta crema/rosa/marrón; evita el cliché de script gigante de repostería. Mulish
da legibilidad y Caveat aporta el toque "escrito a mano" solo en acentos.

### 2026-08-14 — Variables de color en Tailwind v4 (`@theme`)

**Decisión:** las variables de `03-STACK-Y-ESTRUCTURA.md` se definen en el bloque
`@theme` de `src/styles/global.css`, mapeando la paleta real extraída del logo:
`--color-primary #F0E0E0`, `--color-secondary #F0E0C0`, `--color-accent #A09090`,
`--color-background #F8F8F8`, `--color-surface #FFFFFF` (neutro), `--color-text
#504040`, `--color-text-muted #A09090`. Se agrega `--color-whatsapp #25D366`
(color oficial de WhatsApp para el CTA, no es color de marca).
**Razón:** Tailwind v4 genera utilidades (`bg-primary`, `text-text`, etc.)
directamente desde `@theme`; acorde a la paleta real sin inventar colores.

### 2026-08-14 — Excluir `docs/` del escaneo de Tailwind

**Decisión:** se agrega `@source not "../../docs";` en `global.css` (el path es
relativo al stylesheet en `src/styles/`).
**Razón:** Tailwind v4 escanea por defecto todo el repo no gitignoreado; la
carpeta `docs/` contiene clases de ejemplo en markdown (ej. `text-sky-600`) que
generaban utilidades fantasma en el CSS de producción.

---

### 2026-08-14 — Config de sitio y WhatsApp centralizada en `src/data/site.ts`

**Decisión:** se centraliza la información de contacto/negocio en
`src/data/site.ts` (`siteConfig` + helper `waLink(message)`), según la
convención de `03-STACK-Y-ESTRUCTURA.md` de no hardcodear el link `wa.me`
en cada componente. El catálogo va en `src/data/products.ts` (interface
`Product` + `categories` confirmadas + `products` vacío hasta que el dueño
cargue precios).
**Razón:** un solo lugar para tocar contacto/WhatsApp y el modelo de
producto, reutilizable en Fase 3.

### 2026-08-14 — `Layout.astro` base en Fase 0 (esqueleto)

**Decisión:** se crea `src/layouts/Layout.astro` como parte de la
estructura de carpetas (Fase 0), con un mínimo viable: `lang="es"`, charset,
viewport, props `title`/`description` y el import formal de `global.css`.
**Razón:** el esqueleto necesita el layout para existir como estructura;
los SEO tags avanzados (OG, schema, etc.) se completan en Fase 4.

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
