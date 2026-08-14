# 📍 Estado del proyecto

> Actualizar este archivo al final de cada sesión de opencode.
> Formato: agregar entrada nueva arriba (más reciente primero).

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
