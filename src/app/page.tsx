import type { Metadata } from 'next'
import Link from 'next/link'
import FAQ, { type FAQItem } from '@/components/FAQ'
import ContactSection from '@/components/ContactSection'

export const metadata: Metadata = {
  title: 'About Us | Atlantis Dental & Aesthetic Clinic Dubai',
  description: "Learn about Atlantis, Dubai's premier dental and aesthetic clinic. Meet our expert team and discover our mission to deliver world-class care.",
}

const StarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="#f6bc5e">
    <path d="M12 2l2.47 5.01L20 7.86l-4 3.9.94 5.5L12 14.47l-4.94 2.8.94-5.5-4-3.9 5.53-.85L12 2z" />
  </svg>
)

const faqItems: FAQItem[] = [
  {
    q: 'What services does Atlantis Clinic offer?',
    a: 'Atlantis Clinic offers a comprehensive range of dental and aesthetic services including general dentistry, cosmetic dentistry, orthodontics, dental implants, teeth whitening, facial aesthetics, dermal fillers, Botox, skin rejuvenation treatments, and more. We tailor every treatment plan to meet your individual needs.',
  },
  {
    q: 'How do I book an appointment?',
    a: 'You can book an appointment by calling us directly, filling out the contact form on our website, or visiting our clinic in person. We also offer online booking through our scheduling system for your convenience.',
  },
  {
    q: 'What are your clinic hours?',
    a: 'Our clinic is open every day from Monday to Sunday, 9:00 AM to 9:00 PM. Emergency dental services are available outside regular hours — please call our emergency line for assistance.',
  },
  {
    q: 'Do you accept insurance?',
    a: 'Yes, we accept a wide range of insurance providers in the UAE. Please contact our reception team with your insurance details and we will verify your coverage before your appointment. We also offer flexible payment plans for treatments not covered by insurance.',
  },
  {
    q: 'Is the clinic suitable for children?',
    a: 'Absolutely. We provide paediatric dentistry services in a child-friendly environment. Our team is experienced in working with young patients and ensuring they feel comfortable and safe throughout their visit.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero / About */}
      <section className="hero" id="about">
        <div className="hero__container">
          <div className="hero__content animate-on-scroll">
            <h1 className="hero__title">
              <span>Welcome to</span> <span className="text-accent">Atlantis Geo</span> <span>clinic</span>
            </h1>
            <p className="hero__description">
              An idea born from years of Georgian professional experience has evolved into a premium dental and aesthetic clinic guided by international standards and modern excellence. Our team consists of highly qualified specialists with extensive experience in leading international clinics and active membership in global professional organizations. Continuous education, advanced methodologies, and strict adherence to international protocols shape every aspect of our work. Aesthetics are at the core of our philosophy. We believe that a healthy smile and harmonious appearance are essential expressions of confidence and quality of life. By combining medical precision with an artistic vision, we deliver results that are natural, balanced, and enduring. Using state-of-the-art technologies, high-quality materials, and a fully personalized approach, we create an experience that goes beyond clinical care, one defined by comfort, discretion, and uncompromising quality.
            </p>
          </div>

          <div className="hero__image animate-on-scroll">
            <img src="/images/clinic/hero.png" alt="Atlantis Clinic exterior view" className="hero__img" />
          </div>

          <div className="hero__mission animate-on-scroll">
            <div className="hero__mission-text">
              <h2 className="hero__subtitle">Our Mission</h2>
              <p className="hero__body">
                To provide premium dental and aesthetic care through international standards, advanced technology, and a highly skilled team, while ensuring safety, comfort, and personalized treatment for every patient. We are committed to delivering natural, long-lasting results that enhance both health and confidence.
              </p>
            </div>
            <div className="hero__mission-image">
              <img src="/images/clinic/mission.png" alt="Dental care close-up" className="hero__section-img" />
            </div>
          </div>

          <div className="hero__vision animate-on-scroll">
            <div className="hero__vision-image">
              <img src="/images/clinic/vision.png" alt="Doctor consulting with patient" className="hero__section-img" />
            </div>
            <div className="hero__vision-text">
              <h2 className="hero__subtitle">Our Vision</h2>
              <p className="hero__body">
                To become a benchmark clinic in the region, recognized for excellence in dentistry and aesthetics, innovative approaches, and an unwavering commitment to quality. Our vision is to redefine patient experience by combining medical expertise, refined aesthetics, and trust, creating results that are timeless and distinctive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="team" id="team">
        <div className="team__container">
          <div className="team__header animate-on-scroll">
            <div className="section-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2" /><circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
              </svg>
              <span>Meet the Team</span>
            </div>
            <h2 className="section-title">
              <span className="text-accent">Our Team</span> <span>of Skilled Doctors</span>
            </h2>
            <p className="section-description">At our clinic, we take pride in our highly skilled and efficient team of dental specialists who are always ready to meet your dental &amp; derma needs.</p>
          </div>

          <div className="team__grid">
            {[
              { img: '/images/team/doctor-1.png', name: 'Mason Caldwell', role: 'Lead Dental Surgeon', rating: '5.0' },
              { img: '/images/team/doctor-2.png', name: 'Mason Caldwell', role: 'Aesthetic Medicine Specialist', rating: '4.9' },
              { img: '/images/team/doctor-3.png', name: 'Mason Caldwell', role: 'Orthodontist', rating: '5.0' },
            ].map((doc, i) => (
              <div key={i} className="team__card animate-on-scroll">
                <div className="team__photo">
                  <img src={doc.img} alt={doc.name} />
                </div>
                <div className="team__info">
                  <h3 className="team__name">{doc.name}</h3>
                  <p className="team__role">{doc.role}</p>
                  <div className="team__rating">
                    <span className="team__rating-score">{doc.rating}</span>
                    <div className="team__stars">
                      {[...Array(5)].map((_, j) => <span key={j}>&#9733;</span>)}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="team__card team__card--cta animate-on-scroll">
              <img src="/images/testimonials/rating-bg.svg" alt="" className="team__cta-bg" />
              <div className="team__cta-content">
                <div className="team__cta-icon">
                  <svg viewBox="0 0 64 64" fill="none">
                    <circle cx="32" cy="32" r="31" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
                    <path d="M32 20l3.09 9.51h10l-8.09 5.88 3.09 9.51L32 39.02l-8.09 5.88 3.09-9.51-8.09-5.88h10L32 20z" fill="#F6BC5E" />
                  </svg>
                </div>
                <Link href="#" className="team__cta-btn">
                  <span>View All Employees</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials" id="testimonials">
        <div className="testimonials__container">
          <div className="testimonials__header animate-on-scroll">
            <h2 className="section-title">
              <span>Client satisfaction </span><span className="text-accent">Guaranteed</span>
            </h2>
            <p className="section-description">At our clinic, we take pride in our highly skilled and efficient team of dental specialists who are always ready to meet your dental &amp; derma needs.</p>
          </div>

          <div className="testimonials__grid">
            <div className="testimonial-card--rating animate-on-scroll">
              <img src="/images/testimonials/rating-bg.svg" alt="" className="testimonial-rating__bg" />
              <div className="testimonial-rating__inner">
                <img src="/images/testimonials/laurel-left.svg" alt="" className="testimonial-rating__laurel" />
                <div className="testimonial-rating__center">
                  <div className="testimonial-rating__stars">
                    {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                  </div>
                  <div className="testimonial-rating__score-group">
                    <div className="testimonial-rating__score">5.0</div>
                    <div className="testimonial-rating__text">Trusted by 1000+ users</div>
                  </div>
                </div>
                <img src="/images/testimonials/laurel-right.svg" alt="" className="testimonial-rating__laurel" />
              </div>
            </div>

            {[
              {
                score: '5.0',
                quote: '"I had a fantastic experience with Dental Clinkick! Their team was incredibly attentive and kept me updated throughout the design process. I loved how user-focused their approach was, making sure everything met my needs. I can\'t wait to implement the designs!"',
                avatar: '/images/testimonials/avatar-1.png',
                name: 'Mason Caldwell',
                detail: 'Dental Veneers Patient',
              },
              {
                score: '5.0',
                quote: '"Working with Dental Clinkick was a breeze! They delivered on time and ensured I was happy with every step of the process. Their user-focused design strategy really shines through. I\'m looking forward to putting their designs into action!"',
                avatar: '/images/testimonials/avatar-2.png',
                name: 'Mason Caldwell',
                detail: 'Aesthetic Treatment Patient',
              },
              {
                score: '5.0',
                quote: '"Dental Clinkick exceeded my expectations! The designs were delivered promptly, and their communication was top-notch. I appreciated the detailed updates they provided, which kept me in the loop. I\'m excited to see how these designs will enhance my platform!"',
                avatar: '/images/testimonials/avatar-3.png',
                name: 'Mason Caldwell',
                detail: 'Family Dentistry Patient',
              },
            ].map((t, i) => (
              <div key={i} className="testimonial-card animate-on-scroll">
                <div className="testimonial-card__top">
                  <div className="testimonial-card__stars">
                    <span className="testimonial-card__stars-score">{t.score}</span>
                    <div className="testimonial-card__stars-icons">
                      {[...Array(5)].map((_, j) => <span key={j}>&#9733;</span>)}
                    </div>
                  </div>
                  <blockquote className="testimonial-card__quote">{t.quote}</blockquote>
                </div>
                <div className="testimonial-card__author">
                  <img src={t.avatar} alt={t.name} className="testimonial-card__avatar-img" />
                  <div>
                    <p className="testimonial-card__name">{t.name}</p>
                    <p className="testimonial-card__detail">{t.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="faq__container">
          <div className="faq__header animate-on-scroll">
            <div className="section-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" />
              </svg>
              <span>FAQ</span>
            </div>
            <h2 className="section-title">
              <span>Frequently Asked </span><span className="text-accent">Questions</span>
            </h2>
            <p className="section-description">Find answers to the most commonly asked questions about our clinic and services.</p>
          </div>
          <FAQ items={faqItems} />
        </div>
      </section>

      {/* Contact */}
      <ContactSection />
    </>
  )
}
