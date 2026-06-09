'use client'

import { useState, useRef, useCallback } from 'react'
import Link from 'next/link'

const CalendarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 18 18" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M6 1a1 1 0 00-2 0v1c-.46 0-.86.003-1.195.031-.395.032-.788.103-1.167.296A3 3 0 00.327 3.638C.134 4.016.063 4.41.031 4.805A9.31 9.31 0 00.003 5.5.5.5 0 00.5 6h17a.5.5 0 00.5-.5 9.31 9.31 0 00-.031-.695 3.78 3.78 0 00-.296-1.167 3 3 0 00-1.311-1.311 3.78 3.78 0 00-1.167-.296A13.36 13.36 0 0014 2V1a1 1 0 10-2 0v1H6V1zm12 7.5a.5.5 0 00-.5-.5H.5a.5.5 0 00-.5.5v5.339c0 .527 0 .982.031 1.356.032.395.103.788.296 1.167a3 3 0 001.311 1.311c.378.193.772.264 1.167.296.376.031.83.031 1.357.031h9.677c.527 0 .982 0 1.356-.031a3.78 3.78 0 001.167-.296 3 3 0 001.311-1.311c.193-.379.264-.772.296-1.167.031-.374.031-.829.031-1.356V8.5z" />
  </svg>
)

export default function SmileGallery() {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    setPosition(Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100)))
  }, [])

  return (
    <section className="bg-white py-[100px]" id="gallery">
      <div className="max-w-[1440px] mx-auto px-[100px] flex items-center gap-[72px] max-[768px]:flex-col max-[768px]:px-8 max-[768px]:gap-10">
        <div className="w-[420px] flex flex-col items-start gap-6 shrink-0 max-[768px]:w-full max-[768px]:max-w-full">
          <div className="section-badge">
            <span style={{ fontSize: '18px' }}>🙂</span>
            <span>Smile Gallery</span>
          </div>
          <h2 className="font-heading text-[2.25rem] font-extrabold text-ink leading-tight m-0">
            <span className="text-accent">Smile Gallery:</span> Real Transformations, Visible Results
          </h2>
          <p className="text-[15px] leading-relaxed text-muted">
            Explore real patient transformations through interactive before and after visuals.
            Compare results side by side to see how precision dentistry, advanced technology,
            and personalized care come together to create natural, confident smiles.
          </p>
          <Link href="/#contact" className="btn-pill">
            <span>Book Consultation</span>
            <CalendarIcon />
          </Link>
        </div>

        <div className="flex-1">
          <div
            ref={containerRef}
            className="gallery__slider"
            onMouseMove={e => { if (isDragging.current) updatePosition(e.clientX) }}
            onMouseUp={() => { isDragging.current = false }}
            onMouseLeave={() => { isDragging.current = false }}
            onTouchMove={e => { if (isDragging.current) updatePosition(e.touches[0].clientX) }}
            onTouchEnd={() => { isDragging.current = false }}
          >
            <img src="/images/gallery/after.png" alt="After treatment" className="gallery__img" />
            <div className="gallery__before" style={{ width: `${position}%` }}>
              <img src="/images/gallery/before.png" alt="Before treatment" className="gallery__img" />
            </div>
            <div className="gallery__divider" style={{ left: `${position}%` }}>
              <button
                className="gallery__handle"
                onMouseDown={() => { isDragging.current = true }}
                onTouchStart={() => { isDragging.current = true }}
                aria-label="Drag to compare before and after"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 16l-4-4 4-4M17 8l4 4-4 4" />
                </svg>
              </button>
            </div>
            <span className="gallery__label gallery__label--before">Before</span>
            <span className="gallery__label gallery__label--after">After</span>
          </div>
        </div>
      </div>
    </section>
  )
}
