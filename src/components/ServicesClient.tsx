'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

interface ServiceCard {
  img: string
  label: string
}

interface ServiceCategory {
  titleAccent: string
  titleRest?: string
  cards: ServiceCard[]
}

const CAT_DESC = "At our clinic, we take pride in our highly skilled and efficient team of dental specialists who are always ready to meet your dental & derma needs."

const dentalCategories: ServiceCategory[] = [
  {
    titleAccent: 'General', titleRest: 'and Preventive Dentistry',
    cards: [
      { img: '/images/services/general-1.png', label: 'General & Preventive Dentistry' },
      { img: '/images/services/general-2.png', label: 'Fluoride treatments and preventive care' },
      { img: '/images/services/general-3.png', label: 'Digital X-rays and diagnostic imaging' },
      { img: '/images/services/general-4.png', label: 'Professional teeth cleaning and polishing' },
    ],
  },
  {
    titleAccent: 'Cosmetic', titleRest: 'Dentistry',
    cards: [
      { img: '/images/services/cosmetic-1.png', label: 'Teeth whitening (in-clinic and take-home options)' },
      { img: '/images/services/cosmetic-2.png', label: 'Porcelain veneers and laminate veneers' },
      { img: '/images/services/cosmetic-3.png', label: 'Cosmetic bonding and contouring' },
      { img: '/images/services/cosmetic-4.png', label: 'Tooth-colored (composite) fillings' },
    ],
  },
  {
    titleAccent: 'Restorative', titleRest: 'Dentistry',
    cards: [
      { img: '/images/services/restorative-1.png', label: 'Dental fillings (composite and aesthetic restorations)' },
      { img: '/images/services/restorative-2.png', label: 'Dental crowns (ceramic, zirconia, porcelain-fused)' },
      { img: '/images/services/restorative-3.png', label: 'Dental bridges' },
      { img: '/images/services/restorative-4.png', label: 'Inlays and onlays' },
    ],
  },
  {
    titleAccent: 'Endodontics', titleRest: '(Root Canal Treatment)',
    cards: [
      { img: '/images/services/endodontics-1.png', label: 'Single and multi-root canal treatments' },
      { img: '/images/services/endodontics-2.png', label: 'Re-root canal treatment' },
      { img: '/images/services/endodontics-3.png', label: 'Treatment of infected or damaged teeth' },
      { img: '/images/services/endodontics-4.png', label: 'Pain management and infection control' },
    ],
  },
  {
    titleAccent: 'Periodontics', titleRest: '(Gum Care)',
    cards: [
      { img: '/images/services/periodontics-1.png', label: 'Scaling and root planing (deep cleaning)' },
      { img: '/images/services/periodontics-2.png', label: 'Gum infection management' },
      { img: '/images/services/periodontics-3.png', label: 'Periodontal maintenance and follow-up care' },
      { img: '/images/services/periodontics-4.png', label: 'Treatment of gum disease (gingivitis and periodontitis)' },
    ],
  },
  {
    titleAccent: 'Prosthodontics', titleRest: '(Teeth Replacement)',
    cards: [
      { img: '/images/services/prosthodontics-1.png', label: 'Full & partial dentures' },
      { img: '/images/services/prosthodontics-2.png', label: 'Smile and bite rehabilitation' },
      { img: '/images/services/prosthodontics-3.png', label: 'Fixed and removable prosthetics' },
      { img: '/images/services/prosthodontics-4.png', label: 'Implant-supported dentures' },
    ],
  },
  {
    titleAccent: 'Implant', titleRest: 'Dentistry',
    cards: [
      { img: '/images/services/implant-1.png', label: 'Dental implant placement' },
      { img: '/images/services/implant-2.png', label: 'Implant-supported crowns and bridges' },
      { img: '/images/services/implant-3.png', label: 'Full-arch implant solutions' },
      { img: '/images/services/implant-4.png', label: 'Implant planning and consultation & treatment planning' },
    ],
  },
  {
    titleAccent: 'Oral', titleRest: 'and Minor Dental Surgery',
    cards: [
      { img: '/images/services/oral-1.png', label: 'Simple tooth extractions' },
      { img: '/images/services/oral-2.png', label: 'Surgical extractions' },
      { img: '/images/services/oral-3.png', label: 'Wisdom tooth removal' },
      { img: '/images/services/oral-4.png', label: 'Management of impacted teeth' },
    ],
  },
  {
    titleAccent: 'Pediatric', titleRest: 'Dentistry',
    cards: [
      { img: '/images/services/pediatric-1.png', label: 'Gentle, child-friendly dental care' },
      { img: '/images/services/pediatric-2.png', label: 'Dental sealants for children' },
      { img: '/images/services/pediatric-3.png', label: 'Pediatric fillings and restorations' },
      { img: '/images/services/pediatric-4.png', label: 'Fluoride treatments for children' },
    ],
  },
  {
    titleAccent: 'Orthodontics',
    cards: [
      { img: '/images/services/orthodontics-1.png', label: 'Traditional metal braces' },
      { img: '/images/services/orthodontics-2.png', label: 'Ceramic braces' },
      { img: '/images/services/orthodontics-3.png', label: 'Clear aligner orthodontic treatments' },
      { img: '/images/services/orthodontics-4.png', label: 'Bite correction and teeth alignment' },
    ],
  },
  {
    titleAccent: 'Emergency', titleRest: 'Dental Care',
    cards: [
      { img: '/images/services/emergency-1.png', label: 'Dental pain management' },
      { img: '/images/services/emergency-2.png', label: 'Treatment of dental infections and abscesses' },
      { img: '/images/services/emergency-3.png', label: 'Broken or chipped tooth repair' },
      { img: '/images/services/emergency-4.png', label: 'Urgent dental consultations' },
    ],
  },
]

const skinCategories: ServiceCategory[] = [
  {
    titleAccent: 'Injectable', titleRest: 'and Advanced Skin Treatments',
    cards: [
      { img: '/images/services/injectable-1.png', label: 'Botulinum toxin (Botox) for wrinkle reduction and facial rejuvenation' },
      { img: '/images/services/injectable-2.png', label: 'Dermal fillers for lips, cheeks, chin, and facial contouring' },
      { img: '/images/services/injectable-3.png', label: 'Lip and Skin Boosters for Hydration, Volume, and Radiant Glow' },
      { img: '/images/services/injectable-4.png', label: 'Exosome therapy for advanced skin regeneration' },
    ],
  },
  {
    titleAccent: 'Microneedling', titleRest: 'and RF Microneedling',
    cards: [
      { img: '/images/services/microneedling-1.png', label: 'Standard microneedling for collagen stimulation and scar improvement' },
      { img: '/images/services/microneedling-2.png', label: 'RF (radiofrequency) microneedling for skin tightening and anti-aging' },
      { img: '/images/services/microneedling-3.png', label: 'Combination treatments with PRP (platelet-rich plasma) for enhanced rejuvenation' },
      { img: '/images/services/microneedling-4.png', label: 'Microneedling for hair regrowth (scalp microneedling)' },
    ],
  },
  {
    titleAccent: 'Mesotherapy', titleRest: 'Treatments',
    cards: [
      { img: '/images/services/mesotherapy-1.png', label: '3-meso treatments for hydration, anti-aging, and skin revitalization' },
      { img: '/images/services/mesotherapy-2.png', label: 'Targeted facial, neck, and hand mesotherapy treatments' },
      { img: '/images/services/mesotherapy-3.png', label: 'Under eye mesotherapy for dark circles and hydration' },
      { img: '/images/services/mesotherapy-4.png', label: 'Lip and perioral mesotherapy for fine lines' },
    ],
  },
  {
    titleAccent: 'Laser', titleRest: 'and Energy-Based Treatments',
    cards: [
      { img: '/images/services/laser-1.png', label: 'Fractional laser for skin resurfacing, pigmentation, acne scars, and fine lines' },
      { img: '/images/services/laser-2.png', label: 'Laser hair removal for safe, long-term hair reduction' },
      { img: '/images/services/laser-3.png', label: 'Advanced skin tightening and texture improvement' },
      { img: '/images/services/laser-4.png', label: 'IPL photo rejuvenation for redness & pigmentation' },
    ],
  },
  {
    titleAccent: 'Facials', titleRest: 'and Rejuvenation Treatments',
    cards: [
      { img: '/images/services/facials-1.png', label: 'HydraFacial for deep cleansing, hydration, and glow' },
      { img: '/images/services/facials-2.png', label: 'Sculptra facial treatments for collagen stimulation and volume restoration' },
      { img: '/images/services/facials-3.png', label: 'Salomon treatments for anti-aging and skin revitalization' },
      { img: '/images/services/facials-4.png', label: 'Chemical peels for acne, pigmentation, and overall skin rejuvenation' },
    ],
  },
  {
    titleAccent: 'Hair', titleRest: 'and Scalp Treatments',
    cards: [
      { img: '/images/services/hair-1.png', label: 'Hair loss assessment' },
      { img: '/images/services/hair-2.png', label: 'PRP for hair regeneration' },
      { img: '/images/services/hair-3.png', label: 'Scalp rejuvenation therapies' },
      { img: '/images/services/hair-4.png', label: 'Hair mesotherapy for hair strengthening and density' },
    ],
  },
]

function CategoryBlock({ cat, query }: { cat: ServiceCategory; query: string }) {
  const title = (cat.titleAccent + ' ' + (cat.titleRest || '')).toLowerCase()
  const filteredCards = query
    ? cat.cards.filter(c => c.label.toLowerCase().includes(query) || title.includes(query))
    : cat.cards

  if (query && filteredCards.length === 0 && !title.includes(query)) return null

  return (
    <div className="svc-category animate-on-scroll">
      <div className="svc-category__header">
        <h2 className="svc-category__title">
          <span className="text-accent">{cat.titleAccent}</span>
          {cat.titleRest ? <> <span>{cat.titleRest}</span></> : null}
        </h2>
        <p className="svc-category__desc">{CAT_DESC}</p>
      </div>
      <div className="svc-grid">
        {(query ? filteredCards : cat.cards).map((card, i) => (
          <div key={i} className="svc-card">
            <img src={card.img} alt={card.label} className="svc-card__img" />
            <div className="svc-card__gradient" />
            <div className="svc-card__label"><p>{card.label}</p></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ServicesClient() {
  const [filter, setFilter] = useState<'all' | 'dental' | 'skin'>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const query = searchQuery.toLowerCase().trim()
  const showDental = filter === 'all' || filter === 'dental' || !!query
  const showSkin = filter === 'all' || filter === 'skin' || !!query

  return (
    <>
      {/* Hero */}
      <section className="svc-hero">
        <div className="svc-hero__bg">
          <img src="/images/services/header-bg.png" alt="" className="svc-hero__bg-img" />
          <div className="svc-hero__overlay" />
        </div>
        <div className="svc-hero__container">
          <div className="svc-hero__content">
            <div className="svc-hero__breadcrumb">
              <Link href="/">Home Page</Link>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 6l6 6-6 6" />
              </svg>
              <span>Services</span>
            </div>
            <h1 className="svc-hero__title">Services and Treatments</h1>
            <p className="svc-hero__desc">Our wide range of dental services covers all your needs and concerns. Whether it&apos;s a regular check-up or a complex surgery.</p>
          </div>
          <div className="svc-hero__controls">
            <div className="svc-hero__search">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
              </svg>
              <input
                type="text"
                placeholder="Start searching"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="svc-hero__filters">
              {(['all', 'dental', 'skin'] as const).map(f => (
                <button
                  key={f}
                  className={`svc-filter${filter === f && !query ? ' active' : ''}`}
                  onClick={() => { setFilter(f); setSearchQuery('') }}
                >
                  {f === 'all' ? 'All Services' : f === 'dental' ? 'Dental Services' : 'Skin Care'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dental */}
      {showDental && (
        <div className="svc-section" data-category="dental">
          <div className="svc-section__container">
            {dentalCategories.map((cat, i) => (
              <CategoryBlock key={i} cat={cat} query={query} />
            ))}
          </div>
        </div>
      )}

      {/* Skin */}
      {showSkin && (
        <div className="svc-section" data-category="skin">
          <div className="svc-section__container">
            {skinCategories.map((cat, i) => (
              <CategoryBlock key={i} cat={cat} query={query} />
            ))}
          </div>
        </div>
      )}

      {/* Consultation Banner */}
      <section className="consultation">
        <div className="consultation__container">
          <div className="consultation__card">
            <div className="consultation__text">
              <h2 className="consultation__title">Not Sure What Treatment You Need?</h2>
              <p className="consultation__desc">Book a consultation with one of our experts and we&apos;ll help you out!</p>
              <Link href="/contact" className="consultation__btn">
                <span>Book Consultation</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
              </Link>
            </div>
            <div className="consultation__image">
              <img src="/images/services/consultation-woman.png" alt="Book a consultation" />
            </div>
          </div>
          <div className="consultation__stripe">
            <div className="consultation__stripe-yellow" />
            <div className="consultation__stripe-red" />
            <div className="consultation__stripe-brown" />
          </div>
        </div>
      </section>
    </>
  )
}
