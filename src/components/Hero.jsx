import heroFleet from '../assets/hero-flota-vemuza.png'
import { siteContent } from '../data/siteContent'

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.8]">
      <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Hero() {
  const whatsappHref = `https://wa.me/${siteContent.whatsappNumber}?text=${encodeURIComponent(siteContent.whatsappMessage)}`

  return (
    <section id="inicio" className="relative overflow-hidden py-10 md:py-14">
      <div className="section-shell space-y-6">
        <div className="card-surface hero-pulse relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0.22),rgba(7,17,31,0.08)_38%,rgba(7,17,31,0.46)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,94,168,0.18),transparent_42%,rgba(240,42,0,0.12))]" />

          <img
            src={heroFleet}
            alt="Flota completa de Vemuza Transportes"
            className="h-[260px] w-full object-cover object-center md:h-[420px]"
          />

          <div className="absolute inset-x-0 top-0 p-5 md:p-8">
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-brand-orange)] md:text-sm">
                Flota Vemuza
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex max-w-4xl flex-col items-start gap-5">
          <span className="section-kicker">{siteContent.hero.badge}</span>
          <div className="space-y-4">
            <h1
              className="max-w-5xl text-5xl leading-[0.95] font-semibold tracking-[-0.06em] text-white md:text-7xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {siteContent.hero.title}
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-[var(--color-copy)] md:text-xl">
              {siteContent.hero.description}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#cotizacion"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-brand-orange)] to-[var(--color-brand-red)] px-6 py-4 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(240,42,0,0.28)] transition hover:-translate-y-0.5"
            >
              {siteContent.hero.primaryCta}
              <ArrowIcon />
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[rgba(243,139,0,0.45)] bg-[rgba(243,139,0,0.14)] px-6 py-4 text-sm font-semibold text-white transition hover:border-[rgba(240,42,0,0.65)] hover:bg-[rgba(240,42,0,0.18)]"
            >
              {siteContent.hero.secondaryCta}
            </a>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {siteContent.hero.highlights.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm leading-6 text-[var(--color-copy)]"
            >
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-[var(--color-brand-orange)]" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
