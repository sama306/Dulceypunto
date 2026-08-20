import type { ImageMetadata } from 'astro';

import producto01 from '../assets/products/producto-01.jpg';
import producto02 from '../assets/products/producto-02.jpg';
import producto03 from '../assets/products/producto-03.jpg';
import producto04 from '../assets/products/producto-04.jpg';
import producto05 from '../assets/products/producto-05.jpg';
import producto06 from '../assets/products/producto-06.jpg';
import producto07 from '../assets/products/producto-07.jpg';
import producto08 from '../assets/products/producto-08.jpg';
import producto09 from '../assets/products/producto-09.jpg';
import producto10 from '../assets/products/producto-10.jpg';
import producto12 from '../assets/products/producto-12.jpg';
import producto13 from '../assets/products/producto-13.jpg';
import producto14 from '../assets/products/producto-14.jpg';
import producto15 from '../assets/products/producto-15.jpg';
import producto16 from '../assets/products/producto-16.jpg';

export interface GalleryImage {
  id: string;
  image: ImageMetadata;
  alt: string;
  category: string;
}

// Galería con las fotos reales de src/assets/products/ (todas menos
// producto-11.jpg). Las categorías salen del origen real de cada post
// (ver docs/02-INFO-PENDIENTE.md).
export const galleryImages: GalleryImage[] = [
  {
    id: 'g-01',
    image: producto01,
    alt: 'Tarta 100% casera de Dulce & Punto',
    category: 'Tartas caseras',
  },
  {
    id: 'g-02',
    image: producto02,
    alt: 'Tarta 100% casera de Dulce & Punto',
    category: 'Tartas caseras',
  },
  {
    id: 'g-03',
    image: producto03,
    alt: 'Tarta 100% casera de Dulce & Punto',
    category: 'Tartas caseras',
  },
  {
    id: 'g-04',
    image: producto04,
    alt: 'Box para el día del amigo de Dulce & Punto',
    category: 'Box día del amigo',
  },
  {
    id: 'g-05',
    image: producto05,
    alt: 'Box para el día del amigo de Dulce & Punto',
    category: 'Box día del amigo',
  },
  {
    id: 'g-06',
    image: producto06,
    alt: 'Box para el día del amigo de Dulce & Punto',
    category: 'Box día del amigo',
  },
  {
    id: 'g-07',
    image: producto07,
    alt: 'Box para el día del amigo de Dulce & Punto',
    category: 'Box día del amigo',
  },
  {
    id: 'g-08',
    image: producto08,
    alt: 'Box para el día del amigo de Dulce & Punto',
    category: 'Box día del amigo',
  },
  {
    id: 'g-09',
    image: producto09,
    alt: 'Cajita para regalar en el día del amigo de Dulce & Punto',
    category: 'Opciones día del amigo',
  },
  {
    id: 'g-10',
    image: producto10,
    alt: 'Cajita para regalar en el día del amigo de Dulce & Punto',
    category: 'Opciones día del amigo',
  },
  {
    id: 'g-12',
    image: producto12,
    alt: 'Box para mates con dulces de Dulce & Punto',
    category: 'Box para mates',
  },
  {
    id: 'g-13',
    image: producto13,
    alt: 'Combo de dulces caseros de Dulce & Punto',
    category: 'Combos',
  },
  {
    id: 'g-14',
    image: producto14,
    alt: 'Combo de dulces caseros de Dulce & Punto',
    category: 'Combos',
  },
  {
    id: 'g-15',
    image: producto15,
    alt: 'Combo de dulces caseros de Dulce & Punto',
    category: 'Combos',
  },
  {
    id: 'g-16',
    image: producto16,
    alt: 'Combo de dulces caseros de Dulce & Punto',
    category: 'Combos',
  },
];