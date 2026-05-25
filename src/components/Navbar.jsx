import logo from '../assets/logo-vemuza.png'
import { siteContent } from '../data/siteContent'

const navItems = [
  { label: 'Flota', href: '#flota' },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(7,17,31,0.82)] backdrop-blur-xl">
      <div className="section-shell flex items-center justify-between gap-6 py-4">
        <a href="#inicio" className="flex items-center gap-3">
          <img src={logo} alt={siteContent.companyName} className="h-12 w-auto md:h-14" />
          <div className="hidden sm:block">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white">
              Vemuza
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
              Transporte y logistica
            </p>
          </div>
        </a>

        <div className="flex items-center gap-4 md:gap-5">
          <nav className="hidden items-center gap-4 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[var(--color-copy)] transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#cotizacion"
            className="rounded-full bg-gradient-to-r from-[var(--color-brand-orange)] to-[var(--color-brand-red)] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(240,42,0,0.24)] transition hover:-translate-y-0.5"
          >
            Cotizar ahora
          </a>
        </div>
      </div>
    </header>
  )
}
