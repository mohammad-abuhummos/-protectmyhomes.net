import { useState } from "react";
import { Link, NavLink } from "react-router";
import { Logo } from "~/components/logo";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/partners", label: "Our Partners" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" aria-label="ProtectMyHomes.net home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-semibold transition ${
                  isActive
                    ? "text-brand-600"
                    : "text-slate-600 hover:text-navy-950"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/quote"
            className="rounded-lg bg-accent-500 px-5 py-2.5 text-sm font-bold text-navy-950 shadow-sm transition hover:bg-accent-400"
          >
            Get My Free Quote
          </Link>
        </nav>

        <button
          type="button"
          className="rounded-md p-2 text-slate-600 hover:bg-slate-100 md:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
            {open ? (
              <path
                d="M6 6l12 12M18 6 6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-slate-100 bg-white px-4 pb-4 md:hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block border-b border-slate-50 py-3 text-sm font-semibold text-slate-700"
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/quote"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-lg bg-accent-500 px-5 py-3 text-center text-sm font-bold text-navy-950"
          >
            Get My Free Quote
          </Link>
        </nav>
      )}
    </header>
  );
}
