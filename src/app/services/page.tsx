import type { Metadata } from 'next'
import ServicesClient from '@/components/ServicesClient'

export const metadata: Metadata = {
  title: 'Services & Treatments | Atlantis Clinic Dubai',
  description:
    'Explore our full range of dental and skincare treatments including cosmetic dentistry, implants, orthodontics, facials, laser treatments, and more.',
}

export default function ServicesPage() {
  return <ServicesClient />
}
