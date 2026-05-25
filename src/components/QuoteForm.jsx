import { SectionHeading } from './SectionHeading'
import { siteContent } from '../data/siteContent'

function InputField({ label, name, type = 'text', placeholder, required = true }) {
  return (
    <label className="flex flex-col gap-2 text-sm font-medium text-white">
      <span>{label}</span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="rounded-2xl border border-white/10 bg-[rgba(255,255,255,0.05)] px-4 py-4 text-[var(--color-copy)] outline-none transition placeholder:text-[var(--color-muted)] focus:border-[rgba(105,187,255,0.5)] focus:bg-[rgba(255,255,255,0.08)]"
      />
    </label>
  )
}

export function QuoteForm() {
  return (
    <section id="cotizacion" className="py-10 md:py-14">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="space-y-6">
            <SectionHeading
              kicker="Formulario de cotizacion"
              title={siteContent.quoteForm.title}
              description={siteContent.quoteForm.description}
            />

            <div className="card-surface p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-brand-orange)]">
                Lo que mas valoran nuestros clientes
              </p>
              <div className="mt-5 space-y-4">
                {[
                  'Atención personalizada para empresas, mudanzas, fletes y cargas especiales.',
                  'Puntualidad, experiencia y cuidado real en cada traslado.',
                  'Opciones flexibles con ayudantes y servicios dentro o fuera de Santiago.',
                ].map((step, index) => (
                  <div key={step} className="flex items-start gap-4">
                    <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-white">
                      {index + 1}
                    </span>
                    <p className="text-base leading-7 text-[var(--color-copy)]">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <form
            name="cotizacion-vemuza"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            action="/"
            className="card-surface grid gap-5 p-6 md:grid-cols-2 md:p-8"
          >
            <input type="hidden" name="form-name" value="cotizacion-vemuza" />
            <input type="hidden" name="bot-field" />

            <InputField label="Nombre" name="nombre" placeholder="Tu nombre" />
            <InputField label="Empresa" name="empresa" placeholder="Nombre de empresa" />
            <InputField
              label="Telefono"
              name="telefono"
              type="tel"
              placeholder="+56 9 1234 5678"
            />
            <InputField
              label="Email"
              name="email"
              type="email"
              placeholder="contacto@empresa.cl"
            />

            <label className="flex flex-col gap-2 text-sm font-medium text-white">
              <span>Servicio</span>
              <select
                name="servicio"
                required
                defaultValue=""
                className="rounded-2xl border border-white/10 bg-[rgba(255,255,255,0.05)] px-4 py-4 text-[var(--color-copy)] outline-none transition focus:border-[rgba(105,187,255,0.5)] focus:bg-[rgba(255,255,255,0.08)]"
              >
                <option value="" disabled>
                  Selecciona una opcion
                </option>
                {siteContent.quoteForm.services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </label>

            <InputField label="Fecha estimada" name="fecha" type="date" placeholder="" />
            <InputField label="Origen" name="origen" placeholder="Ciudad o direccion de retiro" />
            <InputField
              label="Destino"
              name="destino"
              placeholder="Ciudad o direccion de entrega"
            />
            <InputField
              label="Comuna o ciudad"
              name="cobertura"
              placeholder="Santiago o destino fuera de Santiago"
            />

            <div className="md:col-span-2">
              <InputField
                label="Tipo de carga"
                name="tipoCarga"
                placeholder="Paqueteria, pallets, insumos, muebles, cajas, otro"
              />
            </div>

            <label className="md:col-span-2 flex flex-col gap-2 text-sm font-medium text-white">
              <span>Detalle del requerimiento</span>
              <textarea
                name="detalle"
                rows="5"
                placeholder="Cuentanos volumen, urgencia, si necesitas ayudantes, embalaje, pisos o cualquier dato util para cotizar mejor."
                required
                className="rounded-2xl border border-white/10 bg-[rgba(255,255,255,0.05)] px-4 py-4 text-[var(--color-copy)] outline-none transition placeholder:text-[var(--color-muted)] focus:border-[rgba(105,187,255,0.5)] focus:bg-[rgba(255,255,255,0.08)]"
              />
            </label>

            <div className="md:col-span-2 flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-md text-sm leading-6 text-[var(--color-muted)]">
                El formulario queda listo para capturar leads en Netlify sin agregar librerias extras.
              </p>
              <button
                type="submit"
                className="rounded-full bg-gradient-to-r from-[var(--color-brand-orange)] to-[var(--color-brand-red)] px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(240,42,0,0.28)] transition hover:-translate-y-0.5"
              >
                Enviar solicitud
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
