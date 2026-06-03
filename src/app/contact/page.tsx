import type { Metadata } from 'next'
import ContactPageForm from '@/components/ContactPageForm'

export const metadata: Metadata = {
  title: 'Contact Us | Atlantis Dental & Aesthetic Clinic Dubai',
  description: 'Get in touch with Atlantis Clinic. Contact us for appointments, inquiries, or to learn more about our dental and aesthetic services in Dubai.',
}

export default function ContactPage() {
  return (
    <section className="contact-page">
      <div className="contact-page__container">
        <div className="contact-page__content">

          {/* Form Side */}
          <div className="contact-page__form-side">
            <h1 className="contact-page__title">
              <span className="text-accent">Contact</span> <span>us</span>
            </h1>
            <p className="contact-page__desc">provide a brief summary of your needs and we&apos;ll support you</p>
            <ContactPageForm />
          </div>

          {/* Map Side */}
          <div className="contact-page__map-side">
            <div className="contact-page__map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1500!2d55.2630387!3d25.2319362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEzJzU1LjAiTiA1NcKwMTUnNDYuOSJF!5e0!3m2!1sen!2sae!4v1700000000000"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Atlantis Clinic Location"
              />
            </div>
            <a
              href="https://maps.app.goo.gl/xyBBtZf3sFhwu11RA?g_st=iw"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-page__map-link"
            >
              <span>View on Google Maps</span>
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
            </a>

            <div className="contact-page__info">
              <div className="contact-page__info-item">
                <div className="contact-page__info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12" y2="18.01" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="contact-page__info-text">
                  <a href="tel:+971454579754">+971 4 547 9754</a>&nbsp;|&nbsp;<a href="tel:+971542040220">+971 54 204 0220</a>
                </span>
              </div>
              <div className="contact-page__info-item">
                <div className="contact-page__info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="M22 6l-10 7L2 6" />
                  </svg>
                </div>
                <span className="contact-page__info-text">
                  <a href="mailto:ana.javelidze@atlantisgeo.ae">ana.javelidze@atlantisgeo.ae</a>
                </span>
              </div>
              <div className="contact-page__info-item">
                <div className="contact-page__info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2.5" />
                  </svg>
                </div>
                <span className="contact-page__info-text">58b Jumeira St, Jumeirah 1, Dubai, UAE</span>
              </div>
              <div className="contact-page__info-item">
                <div className="contact-page__info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <span className="contact-page__info-text">Mon - Sun, 9:00 - 21:00</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
