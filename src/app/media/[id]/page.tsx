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
      <article className="mt-[88px] px-12 pt-[60px] pb-0 md:px-6 md:pt-10 sm:px-4 sm:pt-8" id="article">
        <div className="max-w-[890px] mx-auto flex flex-col gap-6">
          <h1 className="font-heading text-[36px] font-semibold leading-[44px] text-ink">{article.title}</h1>

          <div className="flex items-center justify-between sm:flex-col sm:items-start sm:gap-3">
            <span className="inline-flex items-center px-4 py-2 border-[1.5px] border-stroke rounded-full text-base text-ink">{article.categoryLabel}</span>
            <div className="flex items-center gap-3">
              <span className="text-[15px] text-ink/70">{article.readTime}</span>
              <span className="w-1 h-1 rounded-full bg-ink/70 shrink-0" />
              <span className="text-[15px] text-ink/70">{article.date}</span>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            {body.map((para, i) => <p key={i} className="text-base leading-6 text-ink/70 tracking-[0.032px] m-0">{para}</p>)}

            <div className="w-full h-[527px] rounded-[20px] overflow-hidden bg-ink/[0.08] md:h-[300px] sm:h-[220px]">
              <img src={article.image} alt={article.title} className="w-full h-full object-cover block" />
            </div>

            {bodyAfterImage.map((para, i) => <p key={i} className="text-base leading-6 text-ink/70 tracking-[0.032px] m-0">{para}</p>)}

            <div className="flex gap-4 sm:flex-col">
              <div className="flex-1 rounded-[20px] overflow-hidden bg-ink/[0.08]" style={{ aspectRatio: '890/527' }}>
                <img src={prevArticle ? prevArticle.image : article.image} alt="" className="w-full h-full object-cover block" />
              </div>
              <div className="flex-1 rounded-[20px] overflow-hidden bg-ink/[0.08]" style={{ aspectRatio: '890/527' }}>
                <img src={nextArticle ? nextArticle.image : article.image} alt="" className="w-full h-full object-cover block" />
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Media */}
      <section className="py-[140px] px-12 md:py-20 md:px-6 sm:py-12 sm:px-4">
        <div className="max-w-container mx-auto flex flex-col items-center gap-12">
          <div className="text-center flex flex-col items-center gap-6 animate-on-scroll">
            <h2 className="font-heading text-[36px] font-semibold leading-[44px] text-ink">
              <span className="text-accent">Related</span> <span>Media</span>
            </h2>
            <p className="text-base leading-6 text-ink max-w-[660px] text-center">Discover more stories, expert insights, and updates related to this topic, including recent news, treatment innovations, and perspectives from across Atlantis Clinic.</p>
          </div>

          <div className="grid grid-cols-4 gap-4 w-full md:grid-cols-2 sm:grid-cols-1">
            {related.map(rel => (
              <article key={rel.id} className="flex flex-col gap-4 cursor-pointer transition-transform hover:-translate-y-1 animate-on-scroll visible" data-category={rel.category}>
                <Link href={`/media/${rel.id}`} className="flex flex-col gap-4 no-underline text-inherit">
                  <div className="relative rounded-[20px] overflow-hidden aspect-[4/5]">
                    <img src={rel.image} alt={rel.title} className="w-full h-full object-cover opacity-90 block" />
                    <div className="absolute inset-0 bg-coral/[0.15] mix-blend-color rounded-[20px] pointer-events-none" />
                  </div>
                  <div className="flex flex-col gap-2 px-4">
                    <div className="flex items-center justify-between w-full">
                      <span className="inline-flex items-center px-4 py-2 border-[1.5px] border-stroke rounded-full text-base text-ink text-center">{rel.categoryLabel}</span>
                      <span className="text-[15px] text-ink/70">{rel.date}</span>
                    </div>
                    <h3 className="text-lg font-medium text-ink leading-7 tracking-[0.036px] line-clamp-2">{rel.title}</h3>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <div className="flex justify-center">
            <Link href="/#media" className="btn-pill">
              <span>View All News</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-[100px] px-12 md:px-6 sm:px-4" id="faq">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-12 flex flex-col items-center gap-6 animate-on-scroll">
            <div className="section-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" /><circle cx="12" cy="17" r="0.5" fill="currentColor" />
              </svg>
              <span>Support</span>
            </div>
            <h2 className="font-heading text-[36px] font-semibold text-ink leading-[44px]">
              <span>Frequently asked </span><span className="text-accent">questions</span>
            </h2>
            <p className="text-base text-ink leading-6 max-w-[660px]">We&apos;re here to help. Our dedicated support team is available to assist you with any questions or concerns you may have.</p>
          </div>
          <FAQ items={faqItems} />
        </div>
      </section>

      <ContactSection />
    </>
  )
}
