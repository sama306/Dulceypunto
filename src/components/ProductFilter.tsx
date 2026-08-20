import { useMemo, useState } from 'react';
import ProductCard from './ProductCard';
import type { Product } from '../data/products';
import './ProductFilter.css';

interface Props {
  products: Product[];
  categories: string[];
}

const ALL = 'Todos';

export default function ProductFilter({ products, categories }: Props) {
  const [active, setActive] = useState(ALL);

  const counts = useMemo(() => {
    const map = new Map<string, number>();
    for (const product of products) {
      map.set(product.category, (map.get(product.category) ?? 0) + 1);
    }
    return map;
  }, [products]);

  const filtered = active === ALL ? products : products.filter((product) => product.category === active);
  const pills = [ALL, ...categories];

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-2.5" role="group" aria-label="Filtrar productos por categoría">
        {pills.map((category) => {
          const isActive = category === active;
          const count = category === ALL ? products.length : (counts.get(category) ?? 0);
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              aria-pressed={isActive}
              className={
                isActive
                  ? 'inline-flex items-center gap-2 rounded-full bg-text px-5 py-2.5 text-sm font-semibold text-surface shadow-md shadow-text/20 transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'
                  : 'inline-flex items-center gap-2 rounded-full border border-accent/30 bg-surface/70 px-5 py-2.5 text-sm font-semibold text-text/80 transition hover:border-accent hover:bg-secondary/40 hover:text-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'
              }
            >
              {category}
              <span
                className={
                  isActive
                    ? 'rounded-full bg-surface/20 px-2 py-0.5 text-xs font-bold leading-none text-surface'
                    : 'rounded-full bg-accent/15 px-2 py-0.5 text-xs font-bold leading-none text-accent'
                }
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <p className="mt-6 text-center text-sm text-text-muted" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? 'producto' : 'productos'}
      </p>

      {filtered.length > 0 ? (
        <div key={active} className="product-filter-grid mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product, index) => (
            <div
              key={product.id}
              className="product-filter-item"
              style={index < 6 ? { animationDelay: `${index * 50}ms` } : undefined}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-[1.5rem] border border-dashed border-accent/40 bg-surface/60 px-6 py-14 text-center">
          <p className="font-hand text-2xl text-accent">¡Uy!</p>
          <p className="mt-1 text-text-muted">
            Todavía no tenemos productos en esta categoría. Consultanos por WhatsApp y lo armamos.
          </p>
        </div>
      )}
    </div>
  );
}