import { siteContent } from '../data/siteContent'

export function FinalCta() {
  const whatsappHref = `https://wa.me/${siteContent.whatsappNumber}?text=${encodeURIComponent(siteContent.whatsappMessage)}`

  return (
    <section className="pb-10 md:pb-14">
      <div className="section-shell">
        <div className="card-surface relative overflow-hidden px-6 py-8 md:px-10 md:py-10">
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(15,94,168,0.12),transparent_45%,rgba(240,42,0,0.14))]" />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="section-kicker">COTIZA CON NOSOTROS</p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
                {siteContent.finalCta.title}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--color-copy)]">
                {siteContent.finalCta.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-[var(--color-copy)]">
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2">
                  Empresas
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2">
                  Mudanzas
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2">
                  Dentro y fuera de Santiago
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#cotizacion"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[var(--color-brand-orange)] to-[var(--color-brand-red)] px-6 py-4 text-center text-sm font-semibold text-white shadow-[0_18px_45px_rgba(240,42,0,0.28)] transition hover:-translate-y-0.5"
              >
                Ir al formulario
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[rgba(243,139,0,0.45)] bg-[rgba(243,139,0,0.14)] px-6 py-4 text-center text-sm font-semibold text-white transition hover:border-[rgba(240,42,0,0.65)] hover:bg-[rgba(240,42,0,0.18)]"
              >
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
