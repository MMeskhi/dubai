'use client'

import { useState } from 'react'
import Link from 'next/link'

type Filter = 'all' | 'dental' | 'skin'

interface Card { img: string; label: string }

const ALL_FEATURED: Card[] = [
  { img: '/images/services/cosmetic-1.png', label: 'Teeth whitening (in-clinic and take-home options)' },
  { img: '/images/services/cosmetic-2.png', label: 'Porcelain veneers and laminate veneers' },
  { img: '/images/services/cosmetic-3.png', label: 'Cosmetic bonding and contouring' },
  { img: '/images/services/cosmetic-4.png', label: 'Tooth-colored (composite) fillings' },
  { img: '/images/services/injectable-1.png', label: 'Botulinum toxin (Botox) for wrinkle reduction and facial rejuvenation' },
  { img: '/images/services/injectable-2.png', label: 'Dermal fillers for lips, cheeks, chin, and facial contouring' },
  { img: '/images/services/injectable-3.png', label: 'Lip and Skin Boosters for Hydration, Volume, and Radiant Glow' },
  { img: '/images/services/injectable-4.png', label: 'Exosome therapy for advanced skin regeneration' },
]

const DENTAL_FEATURED: Card[] = [
  { img: '/images/services/general-1.png', label: 'General & Preventive Dentistry' },
  { img: '/images/services/cosmetic-1.png', label: 'Teeth whitening (in-clinic and take-home)' },
  { img: '/images/services/cosmetic-2.png', label: 'Porcelain veneers and laminate veneers' },
  { img: '/images/services/restorative-2.png', label: 'Dental crowns (ceramic, zirconia, porcelain-fused)' },
  { img: '/images/services/implant-1.png', label: 'Dental implant placement' },
  { img: '/images/services/orthodontics-3.png', label: 'Clear aligner orthodontic treatments' },
  { img: '/images/services/oral-3.png', label: 'Wisdom tooth removal' },
  { img: '/images/services/pediatric-1.png', label: 'Gentle, child-friendly dental care' },
]

const SKIN_FEATURED: Card[] = [
  { img: '/images/services/injectable-1.png', label: 'Botulinum toxin (Botox) for wrinkle reduction and facial rejuvenation' },
  { img: '/images/services/injectable-2.png', label: 'Dermal fillers for lips, cheeks, chin, and facial contouring' },
  { img: '/images/services/microneedling-1.png', label: 'Standard microneedling for collagen stimulation and scar improvement' },
  { img: '/images/services/mesotherapy-1.png', label: '3-meso treatments for hydration, anti-aging, and skin revitalization' },
  { img: '/images/services/laser-1.png', label: 'Fractional laser for skin resurfacing, pigmentation, acne scars, and fine lines' },
  { img: '/images/services/facials-1.png', label: 'HydraFacial for deep cleansing, hydration, and glow' },
  { img: '/images/services/hair-2.png', label: 'PRP for hair regeneration' },
  { img: '/images/services/laser-2.png', label: 'Laser hair removal for safe, long-term hair reduction' },
]

const CARDS: Record<Filter, Card[]> = {
  all: ALL_FEATURED,
  dental: DENTAL_FEATURED,
  skin: SKIN_FEATURED,
}

const FILTERS: { key: Filter; label: string }[] = [
  { key: 'all', label: 'All Services' },
  { key: 'dental', label: 'Dental' },
  { key: 'skin', label: 'Skincare' },
]

export default function ServicesPreview() {
  const [filter, setFilter] = useState<Filter>('all')
  const cards = CARDS[filter]

  return (
    <section className="bg-white py-[100px]" id="services">
      <div className="max-w-[1440px] mx-auto px-[100px] max-[1200px]:px-12 max-[600px]:px-5">

        {/* Header row */}
        <div className="flex items-start justify-between gap-12 mb-10 max-[900px]:flex-col max-[900px]:gap-6">
          <div className="flex flex-col gap-5">
            <h2 className="font-heading text-[2.5rem] font-extrabold text-ink leading-tight m-0">
              Our Range of <span className="text-accent">Services</span>
            </h2>
            {/* Filter pills */}
            <div className="flex gap-2 flex-wrap">
              {FILTERS.map(f => (
                <button
                  key={f.key}
                  onClick={() => setFilter(f.key)}
                  className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 cursor-pointer ${
                    filter === f.key
                      ? 'bg-ink text-white border-ink'
                      : 'bg-transparent text-ink border-stroke hover:border-ink/40'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
          <p className="text-base text-muted leading-relaxed max-w-[520px] max-[900px]:max-w-full">
            Our wide range of dental services covers all your needs and concerns. Whether it&apos;s a
            regular check-up or a complex surgery, we are here for you. With our team of leading
            dentists in Dubai, we are committed to providing you with the best treatment
            experience possible.
          </p>
        </div>

        {/* 4×2 card grid */}
        <div className="grid grid-cols-4 gap-4 mb-12 max-[900px]:grid-cols-2 max-[480px]:grid-cols-1">
          {cards.map((card, i) => (
            <div
              key={`${filter}-${i}`}
              className="relative rounded-[20px] overflow-hidden aspect-square cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={card.img}
                alt={card.label}
                className="w-full h-full object-cover block"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/25 pointer-events-none" />
              <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-white rounded-[12px] px-4 py-3">
                <p className="text-sm font-medium text-ink leading-snug">{card.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Link href="/services" className="btn-pill">
            <span>View All Services</span>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  )
}
