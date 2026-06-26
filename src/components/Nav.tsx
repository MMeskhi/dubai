"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

const CalendarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 18 18" fill="currentColor">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 1a1 1 0 00-2 0v1c-.46 0-.86.003-1.195.031-.395.032-.788.103-1.167.296A3 3 0 00.327 3.638C.134 4.016.063 4.41.031 4.805A9.31 9.31 0 00.003 5.5.5.5 0 00.5 6h17a.5.5 0 00.5-.5 9.31 9.31 0 00-.031-.695 3.78 3.78 0 00-.296-1.167 3 3 0 00-1.311-1.311 3.78 3.78 0 00-1.167-.296A13.36 13.36 0 0014 2V1a1 1 0 10-2 0v1H6V1zm12 7.5a.5.5 0 00-.5-.5H.5a.5.5 0 00-.5.5v5.339c0 .527 0 .982.031 1.356.032.395.103.788.296 1.167a3 3 0 001.311 1.311c.378.193.772.264 1.167.296.376.031.83.031 1.357.031h9.677c.527 0 .982 0 1.356-.031a3.78 3.78 0 001.167-.296 3 3 0 001.311-1.311c.193-.379.264-.772.296-1.167.031-.374.031-.829.031-1.356V8.5z"
    />
  </svg>
);

const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "/#services", label: "Services" },
  { href: "/#media", label: "Media" },
  { href: "/#contact", label: "Contact Us" },
];

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<"en" | "ar">("en");
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem("lang") as "en" | "ar" | null;
    if (stored) setLang(stored);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    localStorage.setItem("lang", lang);
  }, [lang]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => {
      document.body.style.overflow = !prev ? "hidden" : "";
      return !prev;
    });
  };

  const switchLang = (l: "en" | "ar") => {
    setLang(l);
    setLangOpen(false);
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      id="nav"
      className={`fixed top-0 left-0 right-0 z-50 h-[88px] bg-white border-b border-stroke transition-all duration-300${scrolled ? " shadow-md" : ""}`}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 no-underline">
          <div className="w-12 h-12 shrink-0">
            <img
              src="/images/logo.svg"
              alt="Atlantis Logo"
              width={48}
              height={48}
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-heading font-semibold text-base text-ink">
              Atlantis Geo
            </span>
            <span className="text-sm text-muted">Geo Policlinic LLC</span>
          </div>
        </Link>

        {/* Hamburger — mobile only */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] z-50"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span
            className={`block h-[2px] w-6 bg-ink rounded-full transition-all duration-300 origin-center${menuOpen ? " translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`block h-[2px] w-6 bg-ink rounded-full transition-all duration-300${menuOpen ? " opacity-0 scale-x-0" : ""}`}
          />
          <span
            className={`block h-[2px] w-6 bg-ink rounded-full transition-all duration-300 origin-center${menuOpen ? " -translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>

        {/* Desktop nav + Mobile overlay */}
        <nav
          id="navMenu"
          className={`
            fixed top-[88px] left-0 right-0 bottom-0 bg-white flex flex-col px-6 pt-8 pb-8 transition-all duration-300
            lg:static lg:flex-row lg:items-center lg:gap-2 lg:p-0 lg:bg-transparent lg:opacity-100 lg:pointer-events-auto
            ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
          `}
        >
          {/* Nav links */}
          <ul className="flex flex-col gap-1 lg:flex-row lg:gap-1 lg:items-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`flex items-center px-4 py-2 rounded-full text-base font-medium transition-all duration-300 no-underline
                    hover:bg-sepia hover:text-brown
                    ${isActive(link.href) ? "text-brown" : "text-ink"}`}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA — hidden on mobile (shown only in mobile-bottom area) */}
          <Link
            href="/#contact"
            className="btn-pill hidden lg:inline-flex ml-4"
            onClick={closeMenu}
          >
            <span>Book Appointment</span>
            <CalendarIcon />
          </Link>

          {/* Desktop language picker — hidden on mobile */}
          <div ref={langRef} className="relative hidden lg:block ml-2">
            <button
              className="flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium text-ink hover:bg-sepia transition-all duration-300"
              aria-label="Language"
              aria-expanded={langOpen}
              onClick={() => setLangOpen((v) => !v)}
            >
              <img
                src={
                  lang === "en" ? "/images/flag-en.svg" : "/images/flag-ae.svg"
                }
                alt=""
                width={22}
                height={18}
                className="rounded-sm shrink-0"
              />
              <span>{lang.toUpperCase()}</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className={`transition-transform duration-300${langOpen ? " rotate-180" : ""}`}
              >
                <path
                  d="M4 6l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Dropdown */}
            <div
              className={`absolute top-full right-0 mt-2 w-40 bg-white border border-stroke rounded-2xl overflow-hidden shadow-lg transition-all duration-300
                ${langOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-1"}`}
            >
              <button
                className={`flex items-center gap-3 w-full px-4 py-3 text-sm font-medium transition-all duration-300 hover:bg-sepia
                  ${lang === "en" ? "text-brown bg-sepia" : "text-ink"}`}
                onClick={() => switchLang("en")}
              >
                <img
                  src="/images/flag-en.svg"
                  alt=""
                  width={22}
                  height={18}
                  className="rounded-sm shrink-0"
                />
                <span>English</span>
              </button>
              <button
                className={`flex items-center gap-3 w-full px-4 py-3 text-sm font-medium transition-all duration-300 hover:bg-sepia
                  ${lang === "ar" ? "text-brown bg-sepia" : "text-ink"}`}
                onClick={() => switchLang("ar")}
              >
                <img
                  src="/images/flag-ae.svg"
                  alt=""
                  width={22}
                  height={18}
                  className="rounded-sm shrink-0"
                />
                <span>العربية</span>
              </button>
            </div>
          </div>

          {/* Mobile bottom area — CTA + language switcher pills */}
          <div className="mt-auto flex flex-col gap-4 lg:hidden">
            {/* Language switcher pills */}
            <div className="flex gap-3">
              <button
                className={`flex items-center gap-2 flex-1 justify-center px-4 py-3 rounded-full border text-sm font-medium transition-all duration-300
                  ${lang === "en" ? "bg-sepia border-brown text-brown" : "bg-white border-stroke text-ink"}`}
                onClick={() => switchLang("en")}
              >
                <img
                  src="/images/flag-en.svg"
                  alt=""
                  width={22}
                  height={18}
                  className="rounded-sm shrink-0"
                />
                <span>English (US)</span>
              </button>
              <button
                className={`flex items-center gap-2 flex-1 justify-center px-4 py-3 rounded-full border text-sm font-medium transition-all duration-300
                  ${lang === "ar" ? "bg-sepia border-brown text-brown" : "bg-white border-stroke text-ink"}`}
                onClick={() => switchLang("ar")}
              >
                <img
                  src="/images/flag-ae.svg"
                  alt=""
                  width={22}
                  height={18}
                  className="rounded-sm shrink-0"
                />
                <span>العربية (الإمارات)</span>
              </button>
            </div>

            {/* Mobile CTA */}
            <Link
              href="/#contact"
              className="btn-pill justify-center"
              onClick={closeMenu}
            >
              <span>Book Appointment</span>
              <CalendarIcon />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
