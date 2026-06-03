'use client'

import { useState } from 'react'

export interface FAQItem {
  q: string
  a: string
}

export default function FAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="faq__list">
      {items.map((item, i) => (
        <div key={i} className={`faq__item animate-on-scroll${openIndex === i ? ' active' : ''}`}>
          <button
            className="faq__question"
            aria-expanded={openIndex === i}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span>{item.q}</span>
            <svg className="faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          <div className="faq__answer">
            <p>{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
