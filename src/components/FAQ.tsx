'use client'

import { useState } from 'react'

export interface FAQItem {
  q: string
  a: string
}

export default function FAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="max-w-[840px] mx-auto border border-stroke rounded-2xl overflow-hidden">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div key={i} className={`${i < items.length - 1 ? 'border-b border-stroke' : ''}`}>
            <button
              className="flex items-center gap-4 w-full px-6 py-5 bg-transparent text-left hover:bg-[#fafaf9] transition-colors"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <span className="w-9 h-9 min-w-[36px] flex items-center justify-center bg-brown text-white rounded-[10px] font-bold text-sm">
                {i + 1}
              </span>
              <span className="flex-1 text-[15px] font-medium text-ink leading-relaxed">
                {item.q}
              </span>
              <span className={`w-10 h-10 min-w-[40px] flex items-center justify-center rounded-[10px] transition-colors ${isOpen ? 'bg-sepia' : 'bg-[#F2F2F0]'}`}>
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`transition-transform duration-[350ms] ${isOpen ? 'rotate-180' : ''}`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </button>
            <div className={`overflow-hidden transition-[max-height] ease-in-out duration-[350ms] ${isOpen ? 'max-h-[400px]' : 'max-h-0'}`}>
              <p className="px-6 pb-5 pl-[76px] text-[15px] leading-relaxed text-muted">
                {item.a}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
