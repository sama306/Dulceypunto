import { useEffect, useRef, useState } from 'react';
import type { GalleryImage } from '../data/gallery';
import './GalleryGrid.css';

interface Props {
  images: GalleryImage[];
}

export default function GalleryGrid({ images }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const lastOpenedRef = useRef<HTMLButtonElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const close = () => setActiveIndex(null);
  const prev = () => setActiveIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
  const next = () => setActiveIndex((i) => (i === null ? i : (i + 1) % images.length));

  useEffect(() => {
    if (activeIndex !== null) {
      lastOpenedRef.current = itemRefs.current[activeIndex] ?? null;
      closeRef.current?.focus();
    } else if (lastOpenedRef.current) {
      lastOpenedRef.current.focus();
      lastOpenedRef.current = null;
    }
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        close();
        return;
      }
      if (event.key === 'ArrowRight') {
        next();
        return;
      }
      if (event.key === 'ArrowLeft') {
        prev();
        return;
      }
      if (event.key === 'Tab') {
        const focusables = [closeRef.current, prevRef.current, nextRef.current].filter(
          (el): el is HTMLButtonElement => Boolean(el)
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const active = document.activeElement;
        if (event.shiftKey && active === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && active === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeIndex, images.length]);

  const current = activeIndex !== null ? images[activeIndex] : null;

  return (
    <>
      <div className="columns-2 gap-3 sm:gap-4 md:columns-3 lg:columns-4">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="gallery-item mb-3 break-inside-avoid sm:mb-4"
            style={index < 12 ? { animationDelay: `${index * 40}ms` } : undefined}
          >
            <button
              type="button"
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              onClick={() => setActiveIndex(index)}
              aria-label={`Ver foto en grande: ${image.alt}`}
              className="group relative block w-full overflow-hidden rounded-2xl ring-1 ring-accent/15 transition duration-300 hover:ring-accent/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <img
                src={image.image.src}
                alt={image.alt}
                width={image.image.width}
                height={image.image.height}
                loading="lazy"
                decoding="async"
                className="w-full object-cover transition duration-500 ease-out group-hover:scale-[1.04]"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-text/45 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-surface/85 px-3 py-1 font-hand text-lg leading-none text-text opacity-0 backdrop-blur-sm transition duration-300 group-hover:opacity-100"
              >
                {image.category}
              </span>
            </button>
          </div>
        ))}
      </div>

      {current && activeIndex !== null && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
          <div
            aria-hidden="true"
            onClick={close}
            className="gallery-backdrop absolute inset-0 bg-text/85 backdrop-blur-sm"
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-label="Galería de fotos"
            className="gallery-modal relative z-10 flex max-h-[92svh] w-full max-w-3xl flex-col overflow-hidden rounded-[1.5rem] bg-surface shadow-2xl shadow-text/30"
          >
            <div className="flex items-center justify-between gap-3 border-b border-accent/15 px-4 py-3 sm:px-5">
              <p className="truncate font-hand text-2xl leading-none text-accent">{current.category}</p>
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                aria-label="Cerrar galería"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/30 text-text transition hover:border-accent hover:bg-secondary/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex min-h-0 flex-1 items-center justify-center bg-background/70 p-3 sm:p-5">
              <button
                ref={prevRef}
                type="button"
                onClick={prev}
                aria-label="Foto anterior"
                className="absolute left-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-surface/90 text-text shadow-lg shadow-text/20 ring-1 ring-accent/20 transition hover:bg-secondary/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:left-5 sm:h-12 sm:w-12"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  aria-hidden="true"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <img
                key={current.id}
                src={current.image.src}
                alt={current.alt}
                width={current.image.width}
                height={current.image.height}
                className="h-auto max-h-[calc(92svh-8rem)] w-auto max-w-full rounded-xl object-contain shadow-lg shadow-text/10"
              />

              <button
                ref={nextRef}
                type="button"
                onClick={next}
                aria-label="Foto siguiente"
                className="absolute right-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-surface/90 text-text shadow-lg shadow-text/20 ring-1 ring-accent/20 transition hover:bg-secondary/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:right-5 sm:h-12 sm:w-12"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  aria-hidden="true"
                >
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </div>

            <div className="border-t border-accent/15 px-4 py-3 text-center">
              <p className="text-sm text-text-muted">
                {activeIndex + 1} de {images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}