import type { Metadata } from 'next'
import MediaFilters from '@/components/MediaFilters'
import FAQ, { type FAQItem } from '@/components/FAQ'
import ContactSection from '@/components/ContactSection'

export const metadata: Metadata = {
  title: 'Media | Atlantis Dental & Aesthetic Clinic Dubai',
  description: 'Stay updated with the latest news, insights, and expert perspectives from Atlantis Clinic on advanced skincare, dental care, and patient-focused innovations.',
}

const faqItems: FAQItem[] = [
  {
    q: 'What services does your dental clinic offer?',
    a: 'We offer a comprehensive range of dental and aesthetic services including general dentistry, cosmetic procedures, orthodontics, dental implants, facial aesthetics, and advanced skincare treatments. Each service is delivered using state-of-the-art technology and personalized care.',
  },
  {
    q: 'Who can become a patient at your dental clinic?',
    a: 'Anyone can become a patient at our clinic. We welcome patients of all ages, from children to seniors. Our team is experienced in providing care tailored to each individual\'s needs and comfort level.',
  },
  {
    q: 'What are the payment options available for dental treatments?',
    a: 'We accept various payment methods including cash, credit/debit cards, and major insurance providers. We also offer flexible payment plans for more extensive treatments. Please contact our team for details on your specific insurance coverage.',
  },
  {
    q: 'How long does it take to schedule an appointment?',
    a: 'You can schedule an appointment immediately through our online booking system, by phone, or by visiting the clinic. We strive to accommodate same-day or next-day appointments whenever possible.',
  },
  {
    q: 'What should I know about dental insurance and coverage?',
    a: 'We work with a wide range of insurance providers in the UAE. Our team will help verify your coverage before treatment begins. For procedures not covered by insurance, we offer competitive pricing and payment plans.',
  },
  {
    q: 'What makes your dental clinic different from others in this area?',
    a: 'Our clinic combines international standards with cutting-edge technology and a team of highly qualified specialists. We offer a comprehensive approach that integrates dental and aesthetic care, ensuring personalized, comfortable, and premium-quality treatment for every patient.',
  },
]

const StarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="#f6bc5e">
    <path d="M12 2l2.47 5.01L20 7.86l-4 3.9.94 5.5L12 14.47l-4.94 2.8.94-5.5-4-3.9 5.53-.85L12 2z" />
  </svg>
)

export default function MediaPage() {
  return (
    <>
      <section className="media-section">
        <div className="media-section__container">
          <div className="media-header">
            <div className="media-header__left">
              <h1 className="media-header__title">
                <span>Atlantis Clinic </span><span className="text-accent">News</span><span> And Insights</span>
              </h1>
              <MediaFilters />
            </div>
            <div className="media-header__right">
              <p className="media-header__desc">Updates, announcements, and expert perspectives from Atlantis Clinic, covering the latest in advanced skincare, dental care, and patient-focused innovations.</p>
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
              { quote: '"I had a fantastic experience with Dental Clinkick! Their team was incredibly attentive and kept me updated throughout the design process. I loved how user-focused their approach was, making sure everything met my needs. I can\'t wait to implement the designs!"', avatar: '/images/testimonials/avatar-1.png', name: 'Mason Caldwell', detail: 'Dr. Emily Carter, a visionary in dental care, founded Bright Smiles Dental Clinic to provide exceptional oral health services with a personal touch.' },
              { quote: '"Working with Dental Clinkick was a breeze! They delivered on time and ensured I was happy with every step of the process. Their user-focused design strategy really shines through. I\'m looking forward to putting their designs into action!"', avatar: '/images/testimonials/avatar-2.png', name: 'Mason Caldwell', detail: 'Dr. Emily Carter, a visionary in dental care, founded Bright Smiles Dental Clinic to provide exceptional oral health services with a personal touch.' },
              { quote: '"Dental Clinkick exceeded my expectations! The designs were delivered promptly, and their communication was top-notch. I appreciated the detailed updates they provided, which kept me in the loop. I\'m excited to see how these designs will enhance my platform!"', avatar: '/images/testimonials/avatar-3.png', name: 'Mason Caldwell', detail: 'Dr. Emily Carter, a visionary in dental care, founded Bright Smiles Dental Clinic to provide exceptional oral health services with a personal touch.' },
            ].map((t, i) => (
              <div key={i} className="testimonial-card animate-on-scroll">
                <div className="testimonial-card__top">
                  <div className="testimonial-card__stars">
                    <span className="testimonial-card__stars-score">5.0</span>
                    <div className="testimonial-card__stars-icons">
                      {[...Array(5)].map((_, j) => <StarIcon key={j} />)}
                    </div>
                  </div>
                  <p className="testimonial-card__quote">{t.quote}</p>
                </div>
                <div className="testimonial-card__author">
                  <img src={t.avatar} alt={t.name} className="testimonial-card__avatar-img" />
                  <div>
                    <h4 className="testimonial-card__name">{t.name}</h4>
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
                <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" /><circle cx="12" cy="17" r="0.5" fill="currentColor" />
              </svg>
              <span>Support</span>
            </div>
            <h2 className="section-title">
              <span>Frequently asked </span><span className="text-accent">questions</span>
            </h2>
            <p className="section-description">We&apos;re here to help. Our dedicated support team is available to assist you with any questions or concerns you may have.</p>
          </div>
          <FAQ items={faqItems} />
        </div>
      </section>

      <ContactSection />
    </>
  )
}
