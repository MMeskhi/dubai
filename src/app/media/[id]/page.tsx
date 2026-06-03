import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { articles, defaultBody, defaultBodyAfterImage } from '@/data/articles'
import FAQ, { type FAQItem } from '@/components/FAQ'
import ContactSection from '@/components/ContactSection'

export async function generateStaticParams() {
  return articles.map(a => ({ id: String(a.id) }))
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const article = articles.find(a => a.id === Number(params.id))
  if (!article) return { title: 'Article | Atlantis Clinic' }
  return {
    title: `${article.title} | Atlantis Clinic`,
    description: 'Read the latest insights from Atlantis Clinic on advanced skincare, dental care, and patient-focused innovations.',
  }
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
    a: 'We accept various payment methods including cash, credit/debit cards, and major insurance providers. We also offer flexible payment plans for more extensive treatments.',
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

export default function ArticlePage({ params }: { params: { id: string } }) {
  const articleId = Number(params.id)
  const article = articles.find(a => a.id === articleId)
  if (!article) notFound()

  const body = article.body || defaultBody
  const bodyAfterImage = article.bodyAfterImage || defaultBodyAfterImage

  const prevArticle = articles.find(a => a.id === (articleId > 1 ? articleId - 1 : articles.length))
  const nextArticle = articles.find(a => a.id === (articleId < articles.length ? articleId + 1 : 1))

  const related = articles.filter(a => a.id !== articleId).slice(0, 4)

  return (
    <>
      <article className="article" id="article">
        <div className="article__container">
          <h1 className="article__title">{article.title}</h1>

          <div className="article__meta">
            <span className="media-card__tag">{article.categoryLabel}</span>
            <div className="article__meta-right">
              <span className="article__reading-time">{article.readTime}</span>
              <span className="article__dot" />
              <span className="article__date">{article.date}</span>
            </div>
          </div>

          <div className="article__body">
            {body.map((para, i) => <p key={i}>{para}</p>)}

            <div className="article__image-main">
              <img src={article.image} alt={article.title} />
            </div>

            {bodyAfterImage.map((para, i) => <p key={i}>{para}</p>)}

            <div className="article__image-row">
              <div className="article__image-half">
                <img src={prevArticle ? prevArticle.image : article.image} alt="" />
              </div>
              <div className="article__image-half">
                <img src={nextArticle ? nextArticle.image : article.image} alt="" />
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Media */}
      <section className="related-media">
        <div className="related-media__container">
          <div className="related-media__header animate-on-scroll">
            <h2 className="related-media__title">
              <span className="text-accent">Related</span> <span>Media</span>
            </h2>
            <p className="related-media__desc">Discover more stories, expert insights, and updates related to this topic, including recent news, treatment innovations, and perspectives from across Atlantis Clinic.</p>
          </div>

          <div className="related-media__grid">
            {related.map(rel => (
              <article key={rel.id} className="media-card animate-on-scroll visible" data-category={rel.category}>
                <Link href={`/media/${rel.id}`} className="media-card__link">
                  <div className="media-card__image">
                    <img src={rel.image} alt={rel.title} className="media-card__img" />
                    <div className="media-card__overlay" />
                  </div>
                  <div className="media-card__content">
                    <div className="media-card__meta">
                      <span className="media-card__tag">{rel.categoryLabel}</span>
                      <span className="media-card__date">{rel.date}</span>
                    </div>
                    <h3 className="media-card__title">{rel.title}</h3>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <div className="related-media__action">
            <Link href="/media" className="media-load-more__btn">
              <span>View All News</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </Link>
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
