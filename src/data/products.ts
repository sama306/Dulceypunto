import type { ImageMetadata } from 'astro';

import producto01 from '../assets/products/producto-01.jpg';
import producto04 from '../assets/products/producto-04.jpg';
import producto05 from '../assets/products/producto-05.jpg';
import producto09 from '../assets/products/producto-09.jpg';
import producto12 from '../assets/products/producto-12.jpg';
import producto13 from '../assets/products/producto-13.jpg';

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  price?: number;
  image: ImageMetadata;
  featured?: boolean;
  badge?: string;
}

export const categories = [
  'Tartas caseras',
  'Cajitas / boxes personalizados',
  'Desayunos y meriendas',
  'Combos para mate',
  'Cajitas por ocasión',
] as const;

// Catálogo parcial: nombres y descripciones inferidos de fotos/posts reales
// (ver docs/02-INFO-PENDIENTE.md). Precios pendientes (los provee el dueño).
export const products: Product[] = [
  {
    id: 'tartas-caseras',
    slug: 'tartas-100-caseras',
    name: 'Tartas 100% caseras',
    category: 'Tartas caseras',
    description:
      'Tartas 100% caseras, hechas con mucho amor y pensadas para compartir. Ideal para festejar o regalar.',
    image: producto01,
    featured: true,
  },
  {
    id: 'box-mates',
    slug: 'box-para-mates',
    name: 'Box para mates',
    category: 'Combos para mate',
    description:
      'El box ideal para tus mates: un combo irresistible que tiene un poquito de todo para endulzar tus tardes.',
    image: producto12,
    featured: true,
  },
  {
    id: 'box-dia-del-amigo',
    slug: 'box-dia-del-amigo',
    name: 'Box día del amigo',
    category: 'Cajitas / boxes personalizados',
    description:
      'El box perfecto para sorprender en el día del amigo: un regalo dulce, lindo y hecho con todo el corazón.',
    image: producto04,
    featured: true,
  },
  {
    id: 'opciones-dia-del-amigo',
    slug: 'opciones-dia-del-amigo',
    name: 'Opciones para el día del amigo',
    category: 'Cajitas por ocasión',
    description:
      'Bellas opciones de cajitas para regalar en el día del amigo. Elegí la que más le guste a esa persona especial.',
    image: producto09,
    featured: true,
  },
  {
    id: 'combo-dulces',
    slug: 'combo-para-compartir',
    name: 'Combo para compartir',
    category: 'Desayunos y meriendas',
    description:
      'Un combo con un poquito de todo, perfecto para desayunar, merendar o regalar. Hacemos todo con amor.',
    image: producto13,
    featured: true,
  },
  {
    id: 'cajitas-personalizadas',
    slug: 'cajitas-personalizadas',
    name: 'Cajitas personalizadas',
    category: 'Cajitas / boxes personalizados',
    description:
      'Cajitas personalizadas armadas a tu gusto: elegí colores, dulces y detalles para la ocasión que quieras.',
    image: producto05,
    featured: true,
  },
];