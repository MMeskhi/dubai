import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles, defaultBody, defaultBodyAfterImage } from "@/data/articles";
import RelatedMedia from "@/components/RelatedMedia";
import FAQ, { type FAQItem } from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";

export async function generateStaticParams() {
  return articles.map((a) => ({ id: String(a.id) }));
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const article = articles.find((a) => a.id === Number(params.id));
  if (!article) return { title: "Article | Atlantis Clinic" };
  return {
    title: `${article.title} | Atlantis Clinic`,
    description:
      "Read the latest insights from Atlantis Clinic on advanced skincare, dental care, and patient-focused innovations.",
  };
}

const faqItems: FAQItem[] = [
  {
    q: "What services does your dental clinic offer?",
    a: "We offer a comprehensive range of dental and aesthetic services including general dentistry, cosmetic procedures, orthodontics, dental implants, facial aesthetics, and advanced skincare treatments. Each service is delivered using state-of-the-art technology and personalized care.",
  },
  {
    q: "Who can become a patient at your dental clinic?",
    a: "Anyone can become a patient at our clinic. We welcome patients of all ages, from children to seniors. Our team is experienced in providing care tailored to each individual's needs and comfort level.",
  },
  {
    q: "What are the payment options available for dental treatments?",
    a: "We accept various payment methods including cash, credit/debit cards, and major insurance providers. We also offer flexible payment plans for more extensive treatments.",
  },
  {
    q: "How long does it take to schedule an appointment?",
    a: "You can schedule an appointment immediately through our online booking system, by phone, or by visiting the clinic. We strive to accommodate same-day or next-day appointments whenever possible.",
  },
  {
    q: "What should I know about dental insurance and coverage?",
    a: "We work with a wide range of insurance providers in the UAE. Our team will help verify your coverage before treatment begins. For procedures not covered by insurance, we offer competitive pricing and payment plans.",
  },
  {
    q: "What makes your dental clinic different from others in this area?",
    a: "Our clinic combines international standards with cutting-edge technology and a team of highly qualified specialists. We offer a comprehensive approach that integrates dental and aesthetic care, ensuring personalized, comfortable, and premium-quality treatment for every patient.",
  },
];

export default function ArticlePage({ params }: { params: { id: string } }) {
  const articleId = Number(params.id);
  const article = articles.find((a) => a.id === articleId);
  if (!article) notFound();

  const body = article.body || defaultBody;
  const bodyAfterImage = article.bodyAfterImage || defaultBodyAfterImage;

  return (
    <>
      <article
        className="mt-[88px] bg-white text-ink px-[100px] pt-[60px] pb-[100px] max-[1200px]:px-12 max-[768px]:px-8 max-[768px]:pt-10 max-[768px]:pb-16 max-[600px]:px-5 max-[480px]:pt-8 max-[480px]:pb-12"
        id="article"
      >
        <div className="max-w-[890px] mx-auto flex flex-col gap-6">
          <h1 className="font-heading text-[2.25rem] font-semibold leading-tight text-ink max-[768px]:text-[1.875rem]">
            {article.title}
          </h1>

          <div className="flex items-center justify-between max-[480px]:flex-col max-[480px]:items-start max-[480px]:gap-3">
            <span className="inline-flex items-center px-4 py-2 border-[1.5px] border-white/40 rounded-full text-base text-ink">
              {article.categoryLabel}
            </span>
            <div className="flex items-center gap-3">
              <span className="text-[15px] text-ink/70">
                {article.readTime}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/70 shrink-0" />
              <span className="text-[15px] text-ink/70">{article.date}</span>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            {body.map((para, i) => (
              <p key={i} className="text-base leading-relaxed text-ink/75 m-0">
                {para}
              </p>
            ))}

            <div className="w-full rounded-[20px] overflow-hidden aspect-[890/527] max-[768px]:aspect-[16/10]">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover block"
              />
            </div>

            {bodyAfterImage.map((para, i) => (
              <p key={i} className="text-base leading-relaxed text-ink/75 m-0">
                {para}
              </p>
            ))}
          </div>
        </div>
      </article>

      <RelatedMedia articles={articles} currentId={articleId} />

      <section
        className="bg-white py-[100px] max-[768px]:py-16 max-[480px]:py-12"
        id="faq"
      >
        <div className="container mx-auto px-[100px] max-[1200px]:px-12 max-[600px]:px-5">
          <div className="text-center mb-12 flex flex-col items-center gap-5 max-[768px]:mb-8">
            <div className="section-badge">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
                <circle cx="12" cy="17" r="0.5" fill="currentColor" />
              </svg>
              <span>Support</span>
            </div>
            <h2 className="font-heading text-[2.5rem] font-extrabold text-ink max-[768px]:text-[2rem] max-[480px]:text-[1.75rem]">
              Frequently asked <span className="text-accent">questions</span>
            </h2>
            <p className="text-base text-muted max-w-[660px] leading-relaxed">
              We&apos;re here to help. Our dedicated support team is available
              to assist you with any questions or concerns you may have.
            </p>
          </div>
          <FAQ items={faqItems} />
        </div>
      </section>

      <ContactSection />
    </>
  );
}
