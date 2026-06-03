import type { Metadata } from 'next'
import ServicesClient from '@/components/ServicesClient'
import FAQ, { type FAQItem } from '@/components/FAQ'
import ContactSection from '@/components/ContactSection'

export const metadata: Metadata = {
  title: 'Services | Atlantis Dental & Aesthetic Clinic Dubai',
  description: 'Explore our comprehensive range of dental and aesthetic services at Atlantis Clinic Dubai. From general dentistry to advanced skin care treatments.',
}

const faqItems: FAQItem[] = [
  {
    q: 'What services does Atlantis Clinic offer?',
    a: 'Atlantis Clinic offers a comprehensive range of dental and aesthetic services including general dentistry, cosmetic dentistry, orthodontics, dental implants, teeth whitening, facial aesthetics, dermal fillers, Botox, skin rejuvenation treatments, and more.',
  },
  {
    q: 'How do I book an appointment?',
    a: 'You can book an appointment by calling us directly, filling out the contact form on our website, or visiting our clinic in person.',
  },
  {
    q: 'What are the payment options available for dental treatments?',
    a: 'We accept cash, credit/debit cards, and most major insurance providers in the UAE. We also offer flexible payment plans for larger treatments.',
  },
  {
    q: 'How long does it take to schedule an appointment?',
    a: 'Most appointments can be scheduled within 24-48 hours. Emergency cases are prioritized and we strive to see urgent patients on the same day.',
  },
  {
    q: 'What should I know about dental insurance coverage?',
    a: 'We work with most major insurance providers in the UAE. Our team will verify your coverage before your appointment and help you understand your benefits.',
  },
  {
    q: 'How can you replace your old dental fillings with new coverage?',
    a: 'Old amalgam or worn fillings can be safely replaced with modern tooth-colored composite restorations. We assess each case individually to recommend the best approach.',
  },
]

export default function ServicesPage() {
  return (
    <>
      <ServicesClient />

      <section className="faq" id="faq">
        <div className="faq__container">
          <div className="faq__header animate-on-scroll">
            <p className="section-label">FAQ</p>
            <h2 className="section-title">
              <span>Frequently Asked </span><span className="text-accent">Questions</span>
            </h2>
            <p className="section-description">Find answers to the most commonly asked questions about our clinic and services.</p>
          </div>
          <FAQ items={faqItems} />
        </div>
      </section>

      <ContactSection />
    </>
  )
}
