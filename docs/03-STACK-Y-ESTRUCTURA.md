# 🧩 Stack técnico y estructura

## Stack

- **Framework:** Astro
- **UI interactiva:** React (islas, solo donde haga falta interactividad)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Animaciones:** CSS animations para casos simples; Framer Motion
  para componentes React; GSAP solo si se necesita algo avanzado
  (scroll-triggered, timelines complejos)
- **Imágenes:** Astro Image (WebP/AVIF, lazy loading, tamaños adecuados)
- **Package manager:** `pnpm` — **siempre**. No usar `npm install` ni `yarn add`.

## Comandos base

```bash
pnpm create astro@latest .
pnpm astro add react
pnpm astro add tailwind
pnpm install
pnpm dev
pnpm build
pnpm preview
```

## Estructura de carpetas objetivo

```text
Dulceypunto/
├── docs/                        # contexto para opencode (este set de docs)
├── src/
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Hero.astro
│   │   ├── FeaturedProducts.astro
│   │   ├── ProductCard.astro
│   │   ├── ProductCategories.astro
│   │   ├── Gallery.astro
│   │   ├── About.astro
│   │   ├── Benefits.astro
│   │   ├── CustomOrders.astro
│   │   ├── SocialSection.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── productos/
│   │       └── [slug].astro
│   ├── data/
│   │   └── products.ts
│   ├── assets/
│   │   ├── logo/
│   │   ├── products/
│   │   ├── gallery/
│   │   └── decorations/
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
└── pnpm-lock.yaml
```

## Modelo de datos de producto

```ts
export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price?: number;
  image: string;
  featured?: boolean;
  badge?: string;
}
```

## Variables de color (a completar con paleta real)

```css
:root {
  --color-primary: /* color principal de la marca */;
  --color-secondary: /* color secundario */;
  --color-accent: /* color de acento */;
  --color-background: /* fondo principal */;
  --color-surface: /* tarjetas/secciones */;
  --color-text: /* texto principal */;
  --color-text-muted: /* texto secundario */;
}
```

No fijar valores reales hasta tener la identidad visual confirmada
(ver `02-INFO-PENDIENTE.md`).

## Convenciones de código

- Componentes de una sola sección de página → `.astro` (sin lógica
  interactiva de cliente).
- Interactividad real (filtros, lightbox, animaciones con estado) →
  isla de React dentro del componente Astro correspondiente.
- Nombrado de archivos: PascalCase para componentes.
- Mobile-first en Tailwind (`sm:`, `md:`, `lg:` para escalar hacia arriba).
- Botón de WhatsApp: usar link `https://wa.me/<numero>?text=<mensaje>`
  centralizado en una constante/config, no hardcodeado en cada componente.
