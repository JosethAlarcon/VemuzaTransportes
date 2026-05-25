import truck4k from '../assets/camion-4mil-vemuza.png'
import truck5k from '../assets/camion-5mil-vemuza.png'
import truck7k from '../assets/camion-7mil-vemuza.png'
import truck11k from '../assets/camion-11mil-vemuza.png'
import truckSmall from '../assets/camion-pequeno-vemuza.png'
import { siteContent } from '../data/siteContent'
import { SectionHeading } from './SectionHeading'

const imageMap = {
  small: truckSmall,
  k4: truck4k,
  k5: truck5k,
  k7: truck7k,
  k11: truck11k,
}

export function Fleet() {
  return (
    <section id="flota" className="py-10 md:py-14">
      <div className="section-shell space-y-8">
        <SectionHeading
          kicker="Flota y capacidad"
          title={siteContent.fleet.title}
          description={siteContent.fleet.description}
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {siteContent.fleet.trucks.map((truck) => (
            <article key={truck.name} className="card-surface overflow-hidden">
              <img
                src={imageMap[truck.image]}
                alt={truck.name}
                className="h-72 w-full object-cover"
              />
              <div className="grid gap-5 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-brand-orange)]">
                      {truck.name}
                    </p>
                    <h3 className="mt-3 text-3xl font-semibold text-white">{truck.capacity}</h3>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-right">
                    <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]">
                      Carga
                    </p>
                    <p className="mt-2 text-lg font-semibold text-white">{truck.pallets}</p>
                  </div>
                </div>
                <p className="text-base leading-7 text-[var(--color-copy)]">{truck.use}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
