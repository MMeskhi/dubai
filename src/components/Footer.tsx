import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      {/* 4px top gradient divider */}
      <div
        className="h-1 w-full"
        style={{
          background:
            "linear-gradient(to right, #CB7266, #F6BC5E, #5F413D, #CB7266)",
        }}
      />

      {/* Main bar */}
      <div className="container mx-auto px-6 max-[1200px]:px-12 max-[600px]:px-5 flex items-center justify-between gap-6 min-h-[98px] py-6 max-[900px]:flex-col max-[900px]:text-center max-[900px]:gap-8 max-[480px]:py-8">
        {/* Brand left */}
        <div className="shrink-0">
          <Link
            href="/"
            className="flex flex-col leading-tight max-[900px]:items-center"
          >
            <span className="font-heading font-bold text-ink text-xl tracking-tight">
              Atlantis
            </span>
            <span className="text-xs text-muted">Geo Policlinic LLC</span>
          </Link>
        </div>

        {/* Center: copyright + links */}
        <div className="flex items-center flex-wrap justify-center gap-x-3 gap-y-2 text-sm text-ink/70 max-[600px]:flex-col max-[600px]:gap-2">
          <span className="max-[600px]:order-1">
            &copy; 2026 Atlantis, LLC. All rights reserved
          </span>
          <span className="text-ink/30 max-[600px]:hidden">|</span>
          <Link
            href="#"
            className="hover:text-ink transition-colors duration-300 max-[600px]:order-2"
          >
            Terms of service
          </Link>
          <span className="text-ink/30 max-[600px]:hidden">|</span>
          <Link
            href="#"
            className="hover:text-ink transition-colors duration-300 max-[600px]:order-3"
          >
            Privacy Policy
          </Link>
          <span className="text-ink/30 max-[600px]:hidden">|</span>
          <a
            href="tel:+971542040220"
            className="hover:text-ink transition-colors duration-300 max-[600px]:order-4"
          >
            +971 54 204 0220
          </a>
        </div>

        {/* Social links right */}
        <div className="flex items-center gap-3 shrink-0 max-[900px]:justify-center">
          <a
            href="#"
            aria-label="Facebook"
            className="flex items-center justify-center w-9 h-9 rounded-full bg-ink text-white hover:bg-brown transition-all duration-300"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="flex items-center justify-center w-9 h-9 rounded-full bg-ink text-white hover:bg-brown transition-all duration-300"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="flex items-center justify-center w-9 h-9 rounded-full bg-ink text-white hover:bg-brown transition-all duration-300"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
