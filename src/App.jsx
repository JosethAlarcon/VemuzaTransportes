import { FinalCta } from './components/FinalCta'
import { Fleet } from './components/Fleet'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { QuoteForm } from './components/QuoteForm'
import { WhatsAppButton } from './components/WhatsAppButton'

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-ink)] text-white">
      <Navbar />
      <main>
        <Hero />
        <Fleet />
        <QuoteForm />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
