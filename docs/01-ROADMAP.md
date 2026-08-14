# 🗺️ Roadmap — Dulceypunto

Marcar con `[x]` a medida que se completan tareas. Cada fase puede
dividirse en varias sesiones de opencode; no hace falta terminar una
fase entera en una sola sesión.

---

## Fase 0 — Setup inicial (previa a todo)

- [x] Inicializar proyecto Astro en `/Dulceypunto` (`pnpm create astro@latest`)
- [x] Agregar integración de React (`pnpm astro add react`)
- [x] Agregar Tailwind (`pnpm astro add tailwind`)
- [ ] Configurar estructura de carpetas (ver `03-STACK-Y-ESTRUCTURA.md`)
- [ ] Crear `/docs` con estos documentos (✅ hecho)
- [ ] Primer commit

## Fase 1 — Investigación

- [x] Recopilar logo real (PNG/SVG) — foto de perfil de Facebook → `src/assets/logo/perfil-1024.jpg`
- [x] Recopilar fotos reales de productos — 16 fotos → `src/assets/products/`
- [x] Identificar paleta de colores real — extraída del logo (ver `02-INFO-PENDIENTE.md`)
- [ ] Identificar tipografía / estilo visual real (no hay fuente oficial → decidir en Fase 2)
- [x] Completar `02-INFO-PENDIENTE.md` con datos del negocio (nombre, contacto, categorías, descripción)
- [ ] Cargar precios y métodos de pago (los provee el dueño)

## Fase 2 — Diseño

- [ ] Definir variables de color (`--color-primary`, etc.) en base a datos reales
- [ ] Definir combinación tipográfica (título + texto)
- [ ] Diseñar Navbar
- [ ] Diseñar Hero
- [ ] Diseñar cards de producto
- [ ] Diseñar sección de catálogo/filtros
- [ ] Diseñar galería (bento/masonry)
- [ ] Diseñar sección de contacto

## Fase 3 — Desarrollo

- [ ] `Layout.astro` base + SEO tags genéricos
- [ ] `Navbar.astro` (sticky, responsive, botón WhatsApp)
- [ ] `Hero.astro` (con animación de entrada)
- [ ] `FeaturedProducts.astro` + `ProductCard.astro`
- [ ] `ProductCategories.astro` (filtro por categoría)
- [ ] `Gallery.astro` (lightbox al hacer click)
- [ ] `About.astro` (sobre la marca)
- [ ] `Benefits.astro` (por qué elegirnos)
- [ ] `CustomOrders.astro` (pedidos personalizados)
- [ ] `SocialSection.astro` (Instagram/redes)
- [ ] `Contact.astro` + `Footer.astro`
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
