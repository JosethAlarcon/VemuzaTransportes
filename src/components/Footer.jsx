import logo from '../assets/logo-vemuza.png'
import { siteContent } from '../data/siteContent'

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="section-shell py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <img src={logo} alt={siteContent.companyName} className="h-12 w-auto" />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white">
                {siteContent.companyName}
              </p>
              <p className="text-sm text-[var(--color-muted)]">{siteContent.tagline}</p>
            </div>
          </div>

          <div className="space-y-2 text-sm text-[var(--color-muted)] md:text-right">
            <p>{siteContent.serviceArea}</p>
            <a href={`mailto:${siteContent.email}`} className="transition hover:text-white">
              {siteContent.email}
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-[var(--color-muted)]">
          <p>{siteContent.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
