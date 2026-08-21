import { useEffect, useState } from 'react';

interface NavLink {
  href: string;
  label: string;
}

interface MobileMenuProps {
  links: NavLink[];
  ctaHref: string;
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.86 9.86 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.23 8.23zm4.52-6.16c-.25-.13-1.47-.72-1.7-.81-.22-.08-.39-.13-.55.13-.16.25-.63.8-.77.97-.14.16-.28.18-.53.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.44-.06-.13-.55-1.32-.76-1.81-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.13.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29z" />
    </svg>
  );
}

export default function MobileMenu({ links, ctaHref }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    function onChange(e: MediaQueryListEvent) {
      setReducedMotion(e.matches);
    }
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false);
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  function close() {
    setOpen(false);
  }

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-primary bg-surface text-text transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        {open ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-5 w-5" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-5 w-5" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        )}
      </button>

      <div
        id="mobile-menu"
        className={`absolute inset-x-0 top-full origin-top border-b border-primary bg-surface/95 shadow-lg shadow-text/10 backdrop-blur-md ${
          reducedMotion ? '' : 'transition duration-200 ease-out'
        } ${
          open ? 'visible scale-y-100 opacity-100' : 'invisible scale-y-95 opacity-0'
        }`}
      >
        <nav className="flex flex-col px-6 py-4" aria-label="Principal (móvil)">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              className="flex items-center justify-between border-b border-primary/60 py-4 font-display text-xl text-text transition-colors last:border-b-0 hover:text-accent focus-visible:text-accent"
            >
              {link.label}
              <span className="font-hand text-2xl text-accent" aria-hidden="true">
                →
              </span>
            </a>
          ))}
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 font-semibold text-white shadow-md shadow-whatsapp/25 transition hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-whatsapp"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Consultar por WhatsApp
          </a>
        </nav>
      </div>
    </div>
  );
}