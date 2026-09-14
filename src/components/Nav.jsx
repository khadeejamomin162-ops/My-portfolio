import { useState } from "react";
import { Link } from "react-router-dom";

const links = [
  { href: "/work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#process", label: "Process" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-charcoal/80 backdrop-blur-md border-b border-line">
      <div className="max-w-content mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-display text-xl italic tracking-tight">
          Khadija
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-stone hover:text-ivory transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/#contact"
            className="text-sm bg-blue-dark text-ivory px-4 py-2 rounded-full hover:bg-blue transition-colors"
          >
            Book a Free Strategy Call
          </a>
        </nav>

        <button
          className="md:hidden text-ivory"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-line px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-stone hover:text-ivory transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/#contact"
            onClick={() => setOpen(false)}
            className="text-sm bg-blue-dark text-ivory px-4 py-2.5 rounded-full text-center"
          >
            Book a Free Strategy Call
          </a>
        </nav>
      )}
    </header>
  );
}
