'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function AnimateOnScroll() {
  const pathname = usePathname()

  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll')
    if (!('IntersectionObserver' in window)) {
      elements.forEach(el => el.classList.add('visible'))
      return
    }
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )
    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [pathname])

  return null
}
