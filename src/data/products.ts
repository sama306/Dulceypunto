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

export const categories = [
  'Tartas caseras',
  'Cajitas / boxes personalizados',
  'Desayunos y meriendas',
  'Combos para mate',
  'Cajitas por ocasión',
] as const;

export const products: Product[] = [];