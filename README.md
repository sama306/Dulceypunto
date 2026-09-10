# Dulce & Punto

> Detalles dulces para regalar, sorprender o mimarte 💕

Landing page / catálogo online para **Dulce & Punto**, un emprendimiento de repostería casera ubicado en Burzaco, Buenos Aires. El sitio funciona como "vidriera digital": el usuario navega el catálogo, ve fotos y termina consultando o pidiendo por WhatsApp. No hay carrito ni pagos online.

🔗 **Demo:** [dulceypunto.vercel.app](https://dulceypunto.vercel.app)

---

## Stack

- **Framework:** [Astro](https://astro.build) v7 + [React](https://react.dev) v19
- **Lenguaje:** TypeScript (strict)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com) v4 (vía plugin de Vite)
- **Imágenes:** [Sharp](https://sharp.pixelplumbing.com) — optimización WebP/AVIF, lazy loading
- **Fuentes:** Fraunces Variable (títulos) + Mulish Variable (texto) + Caveat Variable (acentos), self-hosted vía `@fontsource-variable`
- **Gestor de paquetes:** `pnpm`

## Features

- **Catálogo filtrable** — 5 categorías con conteo, animación de transición, estado vacío
- **Galería masonry** — 15 fotos reales, lightbox con navegación por teclado, focus trap y `prefers-reduced-motion`
- **Pedidos personalizados** — sección dedicada con CTA a WhatsApp
- **WhatsApp CTA** — deep links `wa.me` centralizados en `src/data/site.ts`
- **Responsive** — mobile-first (Tailwind `sm:`, `md:`, `lg:`)
- **Animaciones** — scroll-triggered (fade/scroll/hover) con CSS puro + IntersectionObserver, sin librerías externas
- **SEO completo** — `<title>`, meta description, Open Graph, Schema.org (LocalBusiness/FoodEstablishment/Bakery), sitemap, robots.txt, canonical, favicon personalizado
- **Accesibilidad** — `aria-current` en navbar, `aria-modal` en lightbox, focus trap, `prefers-reduced-motion`, contraste WCAG

## Estructura del proyecto

```text
Dulceypunto/
├── docs/                        # documentación interna (contexto, roadmap, decisiones)
├── public/                      # estáticos: favicons, og-home.jpg, robots.txt
├── src/
│   ├── assets/
│   │   ├── decorations/
│   │   ├── gallery/
│   │   ├── logo/                # logo oficial + portada
│   │   └── products/            # 16 fotos reales de productos
│   ├── components/
│   │   ├── Navbar.astro         # sticky, scrollspy, CTA WhatsApp
│   │   ├── MobileMenu.tsx       # isla React — menú móvil
│   │   ├── Hero.astro           # collage de fotos, animación de entrada
│   │   ├── ProductCatalog.astro # sección catálogo con filtros
│   │   ├── ProductFilter.tsx    # isla React — pills de categoría
│   │   ├── ProductCard.tsx      # card de producto (React)
│   │   ├── CustomOrders.astro   # pedidos personalizados
│   │   ├── Gallery.astro        # galería masonry
│   │   ├── GalleryGrid.tsx      # isla React — masonry + lightbox
│   │   ├── About.astro          # sobre la marca
│   │   ├── Contact.astro        # contacto + redes
│   │   ├── Footer.astro         # pie de página
│   │   └── SchemaOrg.astro      # JSON-LD (LocalBusiness)
│   ├── data/
│   │   ├── site.ts              # config centralizada + helper waLink()
│   │   ├── products.ts          # catálogo de productos (6 ítems)
│   │   └── gallery.ts           # datos de la galería (15 fotos)
│   ├── layouts/
│   │   └── Layout.astro         # shell HTML, SEO tags, Open Graph
│   ├── pages/
│   │   ├── index.astro          # landing page
│   │   └── productos/
│   │       └── [slug].astro     # detalle de producto (SSG)
│   ├── scripts/
│   │   └── scroll-reveal.ts     # IntersectionObserver global
│   └── styles/
│       ├── global.css           # Tailwind @theme, paleta, fuentes
│       └── animations.css       # keyframes reutilizables
├── scripts/
│   └── generate-favicons.mjs    # generador de favicons desde el logo
├── astro.config.mjs
├── package.json
├── pnpm-lock.yaml
└── tsconfig.json
```

## Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando | Acción |
|:---|:---|
| `pnpm install` | Instala dependencias |
| `pnpm dev` | Servidor local en `localhost:4321` |
| `pnpm build` | Build de producción en `./dist/` |
| `pnpm preview` | Preview del build local |
| `pnpm generate-favicons` | Regenera favicons desde el logo |

## Configuración

Las variables de color y fuentes se definen en `src/styles/global.css` dentro del bloque `@theme` de Tailwind v4:

| Variable | Color | Uso |
|:---|:---|:---|
| `--color-primary` | `#F0E0E0` | Crema / rosa empolvado |
| `--color-secondary` | `#F0E0C0` | Beige cálido |
| `--color-accent` | `#6b5b5b` | Marrón-mauve (texto sutil) |
| `--color-text` | `#504040` | Marrón oscuro (texto principal) |
| `--color-whatsapp` | `#25D366` | Verde WhatsApp |

La configuración del negocio (nombre, WhatsApp, redes) está centralizada en `src/data/site.ts`.

## Datos del negocio

| Dato | Valor |
|:---|:---|
| Nombre | Dulce & Punto |
| Zona | Burzaco, PBA, Argentina |
| WhatsApp | [011 6515-9776](https://wa.me/5491165159776) |
| Instagram | [@dulceypunto.love](https://www.instagram.com/dulceypunto.love) |
| TikTok | [@DulceyPunto.love](https://www.tiktok.com/@DulceyPunto.love❤️) |
| Facebook | [DulceyPunto.lovd](https://www.facebook.com/people/DulceyPuntolovd/61577830802142/) |

## Roadmap

| Fase | Estado |
|:---|:---|
| 0 — Setup inicial | ✅ Completa |
| 1 — Investigación | ✅ Completa |
| 2 — Diseño | ✅ Completa |
| 3 — Desarrollo | ✅ Completa |
| 4 — SEO y rendimiento | ✅ Completa |
| 5 — Deploy | 🔄 En progreso (hosting + dominio configurados) |

Ver `docs/01-ROADMAP.md` para el detalle completo de cada fase.

## Backlog (fuera de v1)

Catálogo administrable, panel admin, base de datos, carrito, checkout, pagos online, gestión de pedidos, login admin, promociones/cupones, favoritos, integración avanzada con Instagram, reservas, emails automáticos, PWA.

---

Desarrollado con 💕 para Dulce & Punto.
