import { siteContent } from '../data/siteContent'

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
      <path d="M19.2 4.8A9.81 9.81 0 0 0 12.03 2C6.6 2 2.18 6.41 2.18 11.85c0 1.74.45 3.44 1.3 4.94L2 22l5.36-1.4a9.8 9.8 0 0 0 4.67 1.2h.01c5.43 0 9.85-4.42 9.85-9.86 0-2.63-1.03-5.1-2.69-7.14Zm-7.17 15.3h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.18.84.85-3.1-.2-.32A8.17 8.17 0 0 1 3.86 11.85c0-4.5 3.66-8.16 8.17-8.16 2.17 0 4.2.84 5.74 2.39a8.1 8.1 0 0 1 2.38 5.76c0 4.5-3.66 8.17-8.13 8.17Zm4.48-6.12c-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.19-.7-.62-1.18-1.4-1.32-1.64-.14-.24-.02-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.68 2.57 4.08 3.6.57.25 1.01.4 1.36.51.57.18 1.08.15 1.49.09.46-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  )
}

export function WhatsAppButton() {
  const href = `https://wa.me/${siteContent.whatsappNumber}?text=${encodeURIComponent(siteContent.whatsappMessage)}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed right-5 bottom-5 z-50 inline-flex h-[3.75rem] w-[3.75rem] items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_45px_rgba(37,211,102,0.35)] transition hover:scale-105"
    >
      <WhatsAppIcon />
    </a>
  )
}
