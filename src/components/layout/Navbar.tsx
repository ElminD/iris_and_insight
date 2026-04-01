import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { routes } from '../../data/navigation';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-brand-charcoal" ref={menuRef}>
      <nav className="mx-auto flex h-[68px] max-w-[1200px] items-center justify-between px-6">
        <Link to="/" className="font-display text-xl font-medium tracking-wide">
          <span className="text-white">Iris</span>
          <span className="italic text-brand-teal"> + Insight</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {routes.map((route) => (
            <li key={route.path}>
              <Link
                to={route.path}
                className={`font-body text-sm font-medium px-3 py-1.5 rounded transition-colors ${
                  location.pathname === route.path
                    ? 'text-brand-teal bg-brand-teal/10'
                    : 'text-white/75 hover:text-white'
                }`}
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-brand-charcoal border-t border-white/10">
          <ul className="flex flex-col px-6 py-4 gap-1">
            {routes.map((route) => (
              <li key={route.path}>
                <Link
                  to={route.path}
                  className={`block font-body text-sm font-medium px-3 py-2 rounded transition-colors ${
                    location.pathname === route.path
                      ? 'text-brand-teal bg-brand-teal/10'
                      : 'text-white/75 hover:text-white'
                  }`}
                >
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
