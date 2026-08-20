# 🗺️ Roadmap — Dulceypunto

Marcar con `[x]` a medida que se completan tareas. Cada fase puede
dividirse en varias sesiones de opencode; no hace falta terminar una
fase entera en una sola sesión.

---

## Fase 0 — Setup inicial (previa a todo)

- [x] Inicializar proyecto Astro en `/Dulceypunto` (`pnpm create astro@latest`)
- [x] Agregar integración de React (`pnpm astro add react`)
- [x] Agregar Tailwind (`pnpm astro add tailwind`)
- [x] Configurar estructura de carpetas (ver `03-STACK-Y-ESTRUCTURA.md`)
- [x] Crear `/docs` con estos documentos (✅ hecho)
- [x] Primer commit

## Fase 1 — Investigación

- [x] Recopilar logo real (PNG/SVG) — foto de perfil de Facebook → `src/assets/logo/perfil-1024.jpg`
- [x] Recopilar fotos reales de productos — 16 fotos → `src/assets/products/`
- [x] Identificar paleta de colores real — extraída del logo (ver `02-INFO-PENDIENTE.md`)
- [x] Identificar tipografía / estilo visual real (no hay fuente oficial → decidir en Fase 2)
- [x] Completar `02-INFO-PENDIENTE.md` con datos del negocio (nombre, contacto, categorías, descripción)
- [ ] Cargar precios y métodos de pago (los provee el dueño)

## Fase 2 — Diseño

- [x] Definir variables de color (`--color-primary`, etc.) en base a datos reales
- [x] Definir combinación tipográfica (título + texto)
- [x] Diseñar Navbar
- [x] Diseñar Hero
- [x] Diseñar cards de producto
- [x] Diseñar sección de catálogo/filtros
- [x] Diseñar galería (bento/masonry)
- [x] Diseñar sección de contacto

## Fase 3 — Desarrollo

- [x] `Layout.astro` base + SEO tags genéricos
- [x] `Navbar.astro` (sticky, responsive, botón WhatsApp)
- [x] `Hero.astro` (con animación de entrada)
- [x] `FeaturedProducts.astro` (reemplazada por `ProductCatalog.astro` en la sesión 11)
- [x] `ProductCard` (implementada como `.tsx` en la sesión 11 — vive dentro del island de filtros)
- [x] `ProductCategories.astro` (filtro por categoría — implementado como `ProductCatalog.astro` + island `ProductFilter.tsx`)
- [x] `Gallery.astro` (lightbox al hacer click)
- [x] `About.astro` (sobre la marca)
- [x] `CustomOrders.astro` (pedidos personalizados)
- [x] `Contact.astro`
- [x] `Footer.astro`
- [ ] Carga de productos desde `src/data/products.ts`
- [ ] Integración de botones WhatsApp (deep link `wa.me`)
- [ ] Responsive completo (mobile-first)
- [ ] Animaciones (fade/scroll/hover) sin afectar performance
- [ ] Optimización de imágenes (Astro Image, WebP/AVIF, lazy loading)

## Fase 4 — SEO y rendimiento

- [ ] `<title>` y meta description por página
- [ ] Open Graph tags
- [ ] Favicon
- [ ] URLs limpias
- [ ] Alt text en todas las imágenes
- [ ] Sitemap
- [ ] Robots.txt
- [ ] Schema.org LocalBusiness/FoodEstablishment
- [ ] Auditoría Lighthouse (performance, accesibilidad, SEO)

## Fase 5 — Deploy

- [ ] Elegir hosting (Vercel / Netlify / Cloudflare Pages)
- [ ] Configurar dominio
- [ ] HTTPS
- [ ] Google Analytics (si el cliente lo pide)
- [ ] Google Search Console

---

## Backlog / mejoras futuras (fuera de v1)

Catálogo administrable, panel admin, base de datos, carrito, checkout,
pagos online, gestión de pedidos, login admin, promociones/cupones,
favoritos, integración avanzada con Instagram, reservas, emails
automáticos, PWA.
