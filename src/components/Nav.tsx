'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'

const CalendarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 18 18" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M6 1a1 1 0 00-2 0v1c-.46 0-.86.003-1.195.031-.395.032-.788.103-1.167.296A3 3 0 00.327 3.638C.134 4.016.063 4.41.031 4.805A9.31 9.31 0 00.003 5.5.5.5 0 00.5 6h17a.5.5 0 00.5-.5 9.31 9.31 0 00-.031-.695 3.78 3.78 0 00-.296-1.167 3 3 0 00-1.311-1.311 3.78 3.78 0 00-1.167-.296A13.36 13.36 0 0014 2V1a1 1 0 10-2 0v1H6V1zm12 7.5a.5.5 0 00-.5-.5H.5a.5.5 0 00-.5.5v5.339c0 .527 0 .982.031 1.356.032.395.103.788.296 1.167a3 3 0 001.311 1.311c.378.193.772.264 1.167.296.376.031.83.031 1.357.031h9.677c.527 0 .982 0 1.356-.031a3.78 3.78 0 001.167-.296 3 3 0 001.311-1.311c.193-.379.264-.772.296-1.167.031-.374.031-.829.031-1.356V8.5z" />
  </svg>
)

const navLinks = [
  { href: '/', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/media', label: 'Media' },
  { href: '/contact', label: 'Contact Us' },
]

export default function Nav() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [lang, setLang] = useState<'en' | 'ar'>('en')
  const langRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const stored = localStorage.getItem('lang') as 'en' | 'ar' | null
    if (stored) setLang(stored)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
    localStorage.setItem('lang', lang)
  }, [lang])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false)
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  const closeMenu = () => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }

  const toggleMenu = () => {
    setMenuOpen(prev => {
      document.body.style.overflow = !prev ? 'hidden' : ''
      return !prev
    })
  }

  const switchLang = (l: 'en' | 'ar') => {
    setLang(l)
    setLangOpen(false)
  }

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}`} id="nav">
      <div className="nav__container">
        <Link href="/" className="nav__logo">
          <div className="nav__logo-icon">
            <img src="/images/logo.svg" alt="Atlantis Logo" width={48} height={48} />
          </div>
          <div className="nav__logo-info">
            <span className="nav__logo-text">Atlantis Geo</span>
            <span className="nav__logo-sub">Policlinic LLC</span>
          </div>
        </Link>

        <button
          className={`nav__hamburger${menuOpen ? ' active' : ''}`}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span /><span /><span />
        </button>

        <nav className={`nav__menu${menuOpen ? ' active' : ''}`} id="navMenu">
          <ul className="nav__list">
            {navLinks.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`nav__link${isActive(link.href) ? ' nav__link--active' : ''}`}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/contact" className="nav__cta" onClick={closeMenu}>
            <span>Book Appointment</span>
            <CalendarIcon />
          </Link>

          <div ref={langRef} className={`nav__lang${langOpen ? ' open' : ''}`}>
            <button
              className="nav__lang-btn"
              aria-label="Language"
              aria-expanded={langOpen}
              onClick={() => setLangOpen(v => !v)}
            >
              <img src={lang === 'en' ? '/images/flag-en.svg' : '/images/flag-ae.svg'} alt="" width={22} height={18} className="nav__flag" />
              <span>{lang.toUpperCase()}</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="nav__lang-dropdown">
              <button className={`nav__lang-option${lang === 'en' ? ' nav__lang-option--active' : ''}`} onClick={() => switchLang('en')}>
                <img src="/images/flag-en.svg" alt="" width={22} height={18} className="nav__flag" />
                <span>English</span>
              </button>
              <button className={`nav__lang-option${lang === 'ar' ? ' nav__lang-option--active' : ''}`} onClick={() => switchLang('ar')}>
                <img src="/images/flag-ae.svg" alt="" width={22} height={18} className="nav__flag" />
                <span>العربية</span>
              </button>
            </div>
          </div>

          <div className="nav__mobile-bottom">
            <div className="nav__lang-switcher">
              <button className={`nav__lang-pill${lang === 'en' ? ' nav__lang-pill--active' : ''}`} onClick={() => switchLang('en')}>
                <img src="/images/flag-en.svg" alt="" width={22} height={18} className="nav__flag" />
                <span>English (US)</span>
              </button>
              <button className={`nav__lang-pill${lang === 'ar' ? ' nav__lang-pill--active' : ''}`} onClick={() => switchLang('ar')}>
                <img src="/images/flag-ae.svg" alt="" width={22} height={18} className="nav__flag" />
                <span>العربية (الإمارات)</span>
              </button>
            </div>
            <Link href="/contact" className="nav__mobile-cta" onClick={closeMenu}>
              <span>Book Appointment</span>
              <CalendarIcon />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
