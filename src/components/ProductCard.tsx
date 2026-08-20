import type { Product } from '../data/products';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const detailHref = `/productos/${product.slug}`;

  return (
    <article
      aria-label={product.name}
      className="group flex flex-col overflow-hidden rounded-[1.5rem] bg-surface shadow-md shadow-text/10 ring-1 ring-accent/15 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-text/15 focus-within:ring-2 focus-within:ring-accent"
    >
      <a
        href={detailHref}
        tabIndex={-1}
        aria-hidden="true"
        className="relative block aspect-[4/3] overflow-hidden bg-secondary/40"
      >
        <img
          src={product.image.src}
          alt={product.name}
          width={product.image.width}
          height={product.image.height}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-contain transition duration-500 ease-out group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-surface/85 px-3 py-1 font-hand text-lg leading-none text-text backdrop-blur-sm">
            {product.badge}
          </span>
        )}
      </a>

      <div className="flex flex-1 flex-col gap-1.5 p-5">
        <span className="font-hand text-xl leading-none text-accent">{product.category}</span>
        <h3 className="font-display text-xl font-semibold leading-snug text-text">
          <a
            href={detailHref}
            className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {product.name}
          </a>
        </h3>
        <p className="mt-1 line-clamp-3 text-sm leading-relaxed text-text-muted">{product.description}</p>
        <div className="mt-auto pt-4">
          <a
            href={detailHref}
            className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 px-4 py-2 text-sm font-semibold text-text transition hover:border-accent hover:bg-secondary/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Ver detalle
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}