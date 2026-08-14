export const siteConfig = {
  name: 'Dulce & Punto',
  tagline: 'Detalles dulces para regalar, sorprender o mimarte 💕',
  whatsapp: '5491165159776',
  instagram: 'https://www.instagram.com/dulceypunto.love',
  tiktok: 'https://www.tiktok.com/@DulceyPunto.love❤️',
  facebook: 'https://www.facebook.com/people/DulceyPuntolovd/61577830802142/',
  zone: 'Burzaco, PBA',
} as const;

export function waLink(message?: string): string {
  const text = message ? `?text=${encodeURIComponent(message)}` : '';
  return `https://wa.me/${siteConfig.whatsapp}${text}`;
}