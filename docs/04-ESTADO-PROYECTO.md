# 📍 Estado del proyecto

> Actualizar este archivo al final de cada sesión de opencode.
> Formato: agregar entrada nueva arriba (más reciente primero).

---

## Sesión — 2026-08-19 (11.ª)

**Fase actual:** Fase 2 (Diseño) — Sección de catálogo/filtros diseñada e implementada.

**Hecho en esta sesión:**
- Diseñada e implementada la **sección de catálogo con filtros por categoría**
  (item Fase 2 "Diseñar sección de catálogo/filtros" + Fase 3
  "`ProductCategories.astro` (filtro por categoría)"), reemplazando la anterior
  `FeaturedProducts.astro` (un solo grid en `#productos`, sin grids duplicados):
  - `src/components/ProductCard.tsx`: **convertido a React** (era `.astro`) porque
    ahora vive dentro del island de filtros. Mismo diseño exacto (imagen
    `aspect-4/3` con zoom hover, chip de categoría Caveat accent, nombre Fraunces,
    descripción `line-clamp-3`, CTA "Ver detalle →" → `/productos/{slug}`). Sin
    precio. `ProductCard.astro` eliminado.
  - `src/components/ProductFilter.tsx` (isla React `client:load`, patrón
    `MobileMenu`): pills "Todos" + las 5 categorías confirmadas con **conteo** por
    categoría (6/1/2/1/1/1), `aria-pressed`, active con `bg-text text-surface`
    (marrón oscuro de la paleta), contador de resultados en singular/plural
    (`aria-live="polite"`), grid `1/2/3` columnas con `ProductCard` y **animación
    fade-up escalonada** al cambiar de categoría (CSS keyframes + stagger por
    índice, respeta `prefers-reduced-motion`). Empty state amigable por si una
    categoría queda sin productos. Los pills reciben `categories` desde
    `src/data/products.ts`.
  - `src/components/ProductFilter.css`: keyframes `product-filter-rise` +
    `.product-filter-item` + media query `prefers-reduced-motion`. Se importa
    desde el island; el build lo inlinea en el HTML.
  - `src/components/ProductCatalog.astro`: sección `#productos` con header
    (eyebrow Caveat, H2 Fraunces, sub Mulish) y gradiente crema igual que antes,
    renderizando `<ProductFilter client:load products categories />`.
  - `src/pages/index.astro`: `<FeaturedProducts />` → `<ProductCatalog />`.
    Eliminado `FeaturedProducts.astro` y `ProductCard.astro`.
- Verificado: `pnpm build` correcto (7 páginas). Check en navegador (desktop 1440
  y móvil 390 emulado): pills con conteos correctos, filtros funcionando
  (Tartas → 1 producto, Cajitas/boxes → 2 productos, Todos → 6), contador
  singular/plural correcto, sin errores de consola, sin overflow horizontal en
  móvil ni desktop, animación aplicada y CSS (keyframes + reduced-motion)
  presente en el build. Capturas: `D:\Temp\opencode\catalogo-desktop.png` y
  `catalogo-movil.png`.

**Pendiente / próximo paso:**
- Fase 2: siguiente item **"Diseñar galería (bento/masonry)"**. Cargar precios
  sigue postergado (los provee el dueño).
- Detalle de producto (`[slug].astro`) es un scaffold mínimo; se completa en Fase 3.
- Pendiente de sesiones anteriores: re-descargar la portada
  (`portada-735x420.jpg`) que figura descargada en `02` pero no está en
  `src/assets/logo/`.

**Bloqueos:**
- Ninguno. **Nota:** los commits los hace el usuario manualmente.

---

## Sesión — 2026-08-19 (10.ª)

**Fase actual:** Fase 2 (Diseño) — Cards de producto diseñadas e implementadas.

**Hecho en esta sesión:**
- Diseñadas e implementadas las **cards de producto** (item Fase 2 "Diseñar cards de
  producto" + Fase 3 `ProductCard.astro` + `FeaturedProducts.astro`):
  - `src/components/ProductCard.astro`: card presentacional (recibe `Product`) con
    imagen arriba (`aspect-4/3`, `object-cover`, zoom suave en hover), chip de
    categoría en Caveat (accent), nombre en Fraunces, descripción muted con
    `line-clamp-3` y CTA **"Ver detalle →"** que enlaza a `/productos/{slug}`.
    Estética consistente con Hero/Navbar (surface, esquinas 1.5rem, ring acento
    sutil, sombra suave, hover `-translate-y-1`). `<img>` directo con
    `loading="lazy"` (sharp sigue sin instalarse). Sin precio visible.
  - `src/components/FeaturedProducts.astro`: sección `#productos` con eyebrow
    Caveat, heading Fraunces y grid responsive (`1/2/3` columnas) de cards
    destacadas (`featured`). Reemplaza el placeholder "en construcción" en
    `index.astro`. **No** incluye filtros (item aparte del roadmap).
  - `src/pages/productos/[slug].astro` (scaffold mínimo para que los links no
    queden muertos): `getStaticPaths` con los 6 productos, imagen, categoría,
    nombre, descripción, CTA WhatsApp vía `waLink()` (mensaje por producto) y
    "Volver a productos" → `/#productos`. Se completa en Fase 3.
- `src/data/products.ts`: se agregó el campo `slug: string` y se cargaron **6
  productos reales** (fotos reales + categorías confirmadas, nombres/descripciones
  **inferidos de posts reales**, sin precio). Catálogo marcado como **parcial** en
  el archivo y en `02-INFO-PENDIENTE.md`. El campo `image` pasó a ser
  `ImageMetadata` (imports directos de `src/assets/products/`, igual que el Hero).
- Verificado: `pnpm build` correcto (7 páginas: index + 6 productos). Check en
  navegador (desktop y móvil): grid de 6 cards, hover, click → página de detalle
  correspondiente, sin errores de consola, sin overflow horizontal.

**Pendiente / próximo paso:**
- Fase 2: siguiente item **"Diseñar sección de catálogo/filtros"**. Cargar precios
  sigue postergado (los provee el dueño).
- Detalle de producto (`[slug].astro`) es un scaffold mínimo; se completa en Fase 3
  (galería de fotos del producto, más info, etc.).
- Pendiente de sesiones anteriores: re-descargar la portada
  (`portada-735x420.jpg`) que figura descargada en `02` pero no está en
  `src/assets/logo/`.

**Bloqueos:**
- Ninguno. **Nota:** los commits los hace el usuario manualmente.

---

## Sesión — 2026-08-14 (9.ª)

**Fase actual:** Fase 2 (Diseño) — Hero diseñado e implementado.

**Hecho en esta sesión:**
- Diseñado e implementado el **Hero** (items Fase 2 "Diseñar Hero" y Fase 3
  "`Hero.astro`"):
  - `src/components/Hero.astro`: sección `#inicio` a pantalla completa (descontando
    el navbar sticky), 2 columnas en desktop (texto izquierda + collage de fotos
    reales derecha), apilado en mobile. Fondo gradiente crema → blanco con blobs
    radiales animados sutiles (beige/crema).
  - Texto 100% datos reales: eyebrow Caveat "repostería 100% casera · Burzaco, PBA",
    **H1** (único de la página, Fraunces) con el tagline real
    "Detalles dulces para regalar, sorprender o mimarte 💕", párrafo Mulish con las
    categorías reales, **CTAs** (primario pill verde WhatsApp vía `waLink()`,
    secundario ghost "Ver productos" → `#productos`) y chips de confianza
    (100% casero · Pedidos por WhatsApp · Burzaco, PBA).
  - **Collage** con 3 fotos reales de `src/assets/products/` (`producto-12` box
    para mates central, `producto-04` box día del amigo, `producto-13` combo),
    con rotaciones suaves, ring blanco, sombra y sello circular Caveat flotante
    "hecho con amor".
  - **Animación de entrada:** CSS keyframes (fade-up escalonado con delays) +
    flotado lento del sello, sin librerías, respetando `prefers-reduced-motion`.
    Imágenes con `<img>` directo (decisión sharp pendiente), la central con
    `fetchpriority="high"`.
- `src/pages/index.astro`: la sección placeholder `#inicio` se reemplazó por
  `<Hero />`; el resto de secciones siguen como placeholder.
- `src/styles/global.css`: agregado `scroll-padding-top: 4.5rem` en `html` para que
  los anclas no queden tapadas por el navbar sticky.
- Verificado: `pnpm build` correcto. Check en navegador (desktop 1440 y móvil 390
  con emulación): sin errores de consola, H1 en Fraunces, 3 imágenes cargadas
  (1160/1080/1152 px), animación de entrada completada (opacity 1), collage y
  sello dentro de límites, **sin overflow horizontal** en móvil. Captura de
  referencia: `D:\Temp\opencode\hero-preview.png`.

**Pendiente / próximo paso:**
- Fase 2: siguiente item **"Diseñar cards de producto"**. Cargar precios sigue
  postergado (los provee el dueño).
- Nota: la portada (`portada-735x420.jpg`) figura como descargada en
  `02-INFO-PENDIENTE.md` pero no está en `src/assets/logo/` (solo `perfil-1024.jpg`).
  No se usó en el hero; conviene re-descargarla.

**Bloqueos:**
- Ninguno. **Nota:** los commits los hace el usuario manualmente.

---

## Sesión — 2026-08-14 (8.ª)

**Fase actual:** Fase 2 (Diseño) — Navbar diseñado e implementado.

**Hecho en esta sesión:**
- Diseñado e implementado el **Navbar** (items Fase 2 "Diseñar Navbar" y Fase 3
  "`Navbar.astro`"):
  - `src/components/Navbar.astro`: sticky, fondo translúcido (`surface` 70 %) +
    `backdrop-blur`, borde inferior en acento sutil; al scrollear se vuelve más
    opaco y suma sombra (`nav-scrolled`). Logo circular (`perfil-1024.jpg`) +
    wordmark Fraunces + acento Caveat "hecho con amor". Links ancla (Inicio,
    Productos, Galería, Sobre nosotros, Contacto) con subrayado en hover y
    scrollspy (IntersectionObserver) que resalta el link activo con
    `aria-current`. CTA de WhatsApp pill verde vía `waLink()` de `site.ts`.
  - `src/components/MobileMenu.tsx` (isla React `client:load`): toggle
    hamburguesa ↔ X, panel full-width con links + CTA, cierra con `Esc` y al
    navegar. Accesible (`aria-expanded`/`aria-controls`).
  - `src/pages/index.astro`: reescrito para usar `Layout.astro` (carga paleta y
    fuentes) + `<Navbar />` + `<main>` con las 5 secciones ancla placeholder,
    marcadas claramente "en construcción (Fase 3)".
- El logo del navbar usa `<img>` directo (no Astro `<Image>`) porque `sharp` no
  está instalado y `pnpm build` fallaba en la optimización de imágenes. La
  optimización (WebP/AVIF, lazy) queda para Fase 3 según el roadmap.
- Verificado: `pnpm build` correcto. Check en navegador (desktop y móvil):
  hidratación React sin errores, menú móvil abre/cierra (y con `Esc`), scrollspy
  marca el link activo al hacer click, sombra al scrollear, estilos computados
  correctos (Fraunces/Caveat, blur, CTA verde, recorte circular del logo).
- **Incidente resuelto:** el dev server de la sesión anterior tenía el cache de
  Vite corrupto (`react/jsx-dev-runtime` pre-bundlado en modo production →
  `jsxDEV` undefined → la isla React no hidrataba). Se reinició `astro dev` con
  `node_modules/.vite` limpio.

**Pendiente / próximo paso:**
- Fase 2: siguiente item **"Diseñar Hero"**. Cargar precios sigue postergado
  (los provee el dueño).
- El dueño proveerá: precios, métodos de pago y detalle de zonas de entrega.

**Bloqueos:**
- Ninguno. **Nota:** los commits los hace el usuario manualmente.

---

**Fase actual:** Fase 1 (Investigación) — tipografía decidida. Transición a Fase 2 (Diseño).

**Hecho en esta sesión:**
- Decidida la **tipografía** ("Boutique dulce"): Fraunces Variable `soft`
  (títulos) + Mulish Variable (texto) + Caveat Variable (acentos). Sin fuente
  oficial de la marca → combinación elegida, no se afirma que sea "la de la marca".
- Instaladas las fuentes self-hosted: `@fontsource-variable/fraunces`,
  `@fontsource-variable/mulish`, `@fontsource-variable/caveat`.
- `src/styles/global.css`: bloque `@theme` de Tailwind v4 con las 3 familias
  (`--font-display`, `--font-body`, `--font-hand`) y variables de color mapeadas
  a la paleta real (`--color-primary #F0E0E0`, `--color-secondary #F0E0C0`,
  `--color-accent #A09090`, `--color-background #F8F8F8`, `--color-surface
  #FFFFFF`, `--color-text #504040`, `--color-text-muted #A09090`) + `--color-whatsapp #25D366`.
  Base layer: body con Mulish, headings con Fraunces, `scroll-behavior: smooth`.
- Descubierto y corregido: Tailwind v4 **escanea `docs/`** y generaba utilidades
  fantasma (`text-sky-600`, `text-3xl`) desde el markdown. Se agregó
  `@source not "../../docs";`. También se confirmó que Tailwind v4 **hace
  tree-shaking de variables de tema no usadas** (solo se emiten al usarse).
- Verificado con smoke test (import temporal de `global.css` + clases
  `font-hand`/`bg-whatsapp`/`text-primary`): fuentes y variables se emiten
  correctamente, sin utilidades fantasma. Luego `index.astro` revertido
  (árbol limpio). `pnpm build` correcto.

**Pendiente / próximo paso:**
- Fase 1 completa. Próximo: **Fase 2 (Diseño)** — Navbar, Hero, cards, galería,
  etc. (los items 1 y 2 de Fase 2 ya están hechos: colores y tipografía).
- El dueño proveerá: precios, métodos de pago y detalle de zonas de entrega.

**Bloqueos:**
- Ninguno. **Nota:** los commits los hace el usuario manualmente.

---

## Sesión — 2026-08-14 (6.ª)

**Fase actual:** Fase 0 (Setup inicial) — items 1 a 4 completados.

**Hecho en esta sesión:**
- Configurada la estructura de carpetas según `03-STACK-Y-ESTRUCTURA.md`
  (item 4 de Fase 0). Esqueleto creado, contenido real en Fase 3:
  - `src/data/products.ts`: `interface Product` (modelo del doc 03),
    `categories` (las 5 categorías ✅ confirmadas en `02`) y
    `products: Product[] = []` vacío (se completa cuando el dueño cargue
    catálogo/precios — no se inventan).
  - `src/data/site.ts`: config centralizado (`siteConfig`) con datos ✅
    confirmados (nombre, tagline, WhatsApp `5491165159776`, Instagram,
    TikTok, Facebook, zona) + helper `waLink(message)` → `https://wa.me/...`
    (convención de `03`: link centralizado, no hardcodeado).
  - `src/layouts/Layout.astro`: layout base mínimo (`lang="es"`, charset,
    viewport, props `title`/`description` con defaults, import formal de
    `global.css` — su lugar según decisión de Tailwind v4).
  - Carpetas vacías con `.gitkeep`: `src/assets/decorations/`,
    `src/assets/gallery/`, `src/pages/productos/`.
- NO se crearon aún los componentes de sección (`Navbar`, `Hero`, etc.)
  ni `[slug].astro` → son Fase 3 (se mantiene el alcance de esta sesión).
- Verificado: `pnpm build` correcto (1 página estática).

**Pendiente / próximo paso:**
- Fase 0 completa. Próximo: pasar a **Fase 1** (pendiente tipografía/estilo)
  o **Fase 2** (variables de color con paleta real, tipografía, diseño).
  Concretamente el próximo item pendiente del roadmap: identificar
  tipografía/estilo visual real (Fase 1).
- El dueño proveerá: precios, métodos de pago y detalle de zonas de entrega.

**Bloqueos:**
- Ninguno. **Nota:** los commits los hace el usuario manualmente.

---

## Sesión — 2026-08-14 (5.ª)

**Fase actual:** Fase 0 (Setup inicial) — items 1 a 3 completados.

**Hecho en esta sesión:**
- Se agregó Tailwind con `pnpm astro add tailwind --yes` (Astro 7.2.2).
  El comando terminó con exit code 1 en el paso final de re-ejecución del
  CLI (falla de ruta en Windows), pero todos los cambios reales se aplicaron
  correctamente (verificado):
  - Instalados `@tailwindcss/vite@4.3.3` y `tailwindcss@4.3.3`
    (Tailwind **v4**, vía plugin de Vite; sin `@astrojs/tailwind`).
  - `astro.config.mjs`: agregado `import tailwindcss from '@tailwindcss/vite'`
    y `vite: { plugins: [tailwindcss()] }`.
  - Creado `src/styles/global.css` con `@import "tailwindcss";`.
- Smoke test (como con la isla `_smoke.tsx`): se importó `global.css` en
  `index.astro` con utilidades (`text-3xl font-bold text-sky-600`),
  `pnpm build` correcto y el CSS emitido contenía esas clases
  (`.text-3xl`, `.text-sky-600`, `.font-bold`). Luego se revirtió
  `index.astro` a su estado original (árbol limpio, `git diff` vacío).
  La importación formal de `global.css` va en `Layout.astro` (Fase 3).
- Verificado: `pnpm build` correcto con el árbol limpio.

**Pendiente / próximo paso:**
- Configurar estructura de carpetas (item 4 de Fase 0) — ver `03-STACK-Y-ESTRUCTURA.md`.
- El dueño proveerá: precios, métodos de pago y detalle de zonas de entrega.

**Bloqueos:**
- Ninguno. **Nota:** los commits los hace el usuario manualmente.

---

## Sesión — 2026-08-14 (4.ª)

**Fase actual:** Fase 0 (Setup inicial) — items 1 y 2 completados.

**Hecho en esta sesión:**
- Se agregó la integración de React con `pnpm astro add react --yes`
  (Astro 7.2.2):
  - Instalados `@astrojs/react@6.0.2`, `react@19.2.8`, `react-dom@19.2.8`
    y tipos (`@types/react`, `@types/react-dom`).
  - `astro.config.mjs`: agregada la integración `react()`.
  - `tsconfig.json`: agregados `"jsx": "react-jsx"` y `"jsxImportSource": "react"`.
- Smoke test: se creó una isla React temporal (`_smoke.tsx`) renderizada con
  `client:load` en `index.astro`. `pnpm build` correcto y la isla se
  generó/hidrató (JS bundle emitido). El componente temporal se eliminó al
  verificar (árbol limpio; los componentes reales van en Fase 3).
- Verificado: `pnpm build` correcto con y sin la isla de prueba.

**Pendiente / próximo paso:**
- Agregar Tailwind (`pnpm astro add tailwind`) — item 3 de Fase 0.
- Luego configurar estructura de carpetas (item 4 de Fase 0).
- El dueño proveerá: precios, métodos de pago y detalle de zonas de entrega.

**Bloqueos:**
- Ninguno. **Nota:** los commits los hace el usuario manualmente.

---

## Sesión — 2026-08-14 (3.ª)

**Fase actual:** Fase 0 (Setup inicial) — item 1 completado.

**Hecho en esta sesión:**
- Se inicializó el proyecto Astro en `/Dulceypunto` con
  `pnpm create astro@latest . --template minimal --typescript strict --install --git --yes --no-ai`
  (Astro **7.2.2**, TypeScript strict, git inicializado, template `minimal`).
- Los assets reales (`src/assets/logo/` + `src/assets/products/`, 18 fotos)
  se preservaron: se movieron a respaldo temporal durante el scaffold
  (create-astro rechaza carpetas no vacías) y se restauraron intactos.
- Verificado: `pnpm build` correcto (1 página estática).

**Pendiente / próximo paso:**
- Agregar integración de React (`pnpm astro add react`) — item 2 de Fase 0.
- Luego Tailwind (`pnpm astro add tailwind`).
- El dueño proveerá: precios, métodos de pago y detalle de zonas de entrega.

**Bloqueos:**
- Ninguno. **Nota:** los commits los hace el usuario manualmente.

---

## Sesión — 2026-08-14 (2.ª)

**Fase actual:** Fase 1 (Investigación) — completada casi en su totalidad.

**Hecho en esta sesión:**
- Se accedió a la página de Facebook **DulceyPunto.lovd** con navegador
  real y se extrajo la información real del negocio:
  - Nombre: **Dulce & Punto** · tagline: "Detalles dulces para regalar…"
  - WhatsApp/teléfono `011 6515-9776` · Instagram `@dulceypunto.love` ·
    TikTok `@DulceyPunto.love❤️` · zona: Burzaco, PBA · "Siempre abierto"
  - Categorías: tartas caseras, cajitas/boxes personalizados, desayunos y
    meriendas, combos para mate
- Se descargó el **logo oficial** (foto de perfil, 1024×1024) y la portada
  → `src/assets/logo/`
- Se descargaron **16 fotos reales de productos** en máxima resolución
  disponible → `src/assets/products/`
- Se **extrajo la paleta de colores del logo** por análisis de píxeles
  (blanco `#F8F8F8`, crema rosa empolvado `#F0E0E0`, beige `#F0E0C0`,
  marrón-mauve `#A09090`, marrón oscuro `#504040`)
- Se actualizaron `00-CONTEXTO.md`, `01-ROADMAP.md`, `02-INFO-PENDIENTE.md`
  y `05-DECISIONES.md`

**Pendiente / próximo paso:**
- Inicializar el proyecto Astro en `/Dulceypunto` (Fase 0).
- El dueño proveerá: precios, métodos de pago y detalle de zonas de entrega.
- Definir tipografía/estilo en Fase 2 usando la paleta real.

**Bloqueos:**
- Ninguno para continuar. Precios y pagos no bloquean el desarrollo (se
  muestran como pendientes).

---

## Sesión — 2026-08-14

**Fase actual:** Fase 0 (Setup inicial)

**Hecho en esta sesión:**
- Se revisó el documento original de brief del proyecto.
- Se intentó acceder a la página de Facebook del negocio (dos links
  provistos) para extraer logo/colores/fotos — no fue posible por
  restricciones de scraping de Facebook.
- Se creó la carpeta `/Dulceypunto/docs` con el set completo de
  documentos de contexto (`00` a `05`).

**Pendiente / próximo paso:**
- Inicializar el proyecto Astro dentro de `/Dulceypunto` (Fase 0).
- Conseguir de forma manual (capturas/exportación) el logo, fotos y
  referencias de color reales — ver `02-INFO-PENDIENTE.md`.
- Confirmar nombre exacto de la marca y datos de contacto.

**Bloqueos:**
- Identidad visual real del negocio todavía no disponible → no se
  puede avanzar en Fase 2 (Diseño) hasta tener al menos logo + fotos + colores.
