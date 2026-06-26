import Link from "next/link";
import FAQ, { type FAQItem } from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import ServicesPreview from "@/components/ServicesPreview";
import SmileGallery from "@/components/SmileGallery";
import { articles } from "@/data/articles";

const CalendarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 18 18" fill="currentColor">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 1a1 1 0 00-2 0v1c-.46 0-.86.003-1.195.031-.395.032-.788.103-1.167.296A3 3 0 00.327 3.638C.134 4.016.063 4.41.031 4.805A9.31 9.31 0 00.003 5.5.5.5 0 00.5 6h17a.5.5 0 00.5-.5 9.31 9.31 0 00-.031-.695 3.78 3.78 0 00-.296-1.167 3 3 0 00-1.311-1.311 3.78 3.78 0 00-1.167-.296A13.36 13.36 0 0014 2V1a1 1 0 10-2 0v1H6V1zm12 7.5a.5.5 0 00-.5-.5H.5a.5.5 0 00-.5.5v5.339c0 .527 0 .982.031 1.356.032.395.103.788.296 1.167a3 3 0 001.311 1.311c.378.193.772.264 1.167.296.376.031.83.031 1.357.031h9.677c.527 0 .982 0 1.356-.031a3.78 3.78 0 001.167-.296 3 3 0 001.311-1.311c.193-.379.264-.772.296-1.167.031-.374.031-.829.031-1.356V8.5z"
    />
  </svg>
);

const ArrowIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M7 17L17 7M17 7H7M17 7v10" />
  </svg>
);

const StarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#F6BC5E">
    <path d="M12 2l2.47 5.01L20 7.86l-4 3.9.94 5.5L12 14.47l-4.94 2.8.94-5.5-4-3.9 5.53-.85L12 2z" />
  </svg>
);

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
    a: "We accept various payment methods including cash, credit/debit cards, and major insurance providers. We also offer flexible payment plans for more extensive treatments. Please contact our team for details.",
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
    a: "Our clinic combines international standards with cutting-edge technology and a team of highly qualified specialists. We offer a comprehensive approach integrating dental and aesthetic care, ensuring personalized, comfortable, and premium-quality treatment.",
  },
];

const teamDoctors = [
  {
    img: "/images/team/doctor-1.png",
    name: "Mason Caldwell",
    role: "Dr. Emily Carter, a visionary in dental ca...",
    rating: 5.0,
    stars: 5,
  },
  {
    img: "/images/team/doctor-2.png",
    name: "Mason Caldwell",
    role: "Dr. Emily Carter, a visionary in dental ca...",
    rating: 4.9,
    stars: 4,
  },
  {
    img: "/images/team/doctor-3.png",
    name: "Mason Caldwell",
    role: "Dr. Emily Carter, a visionary in dental ca...",
    rating: 5.0,
    stars: 5,
  },
];

const testimonials = [
  {
    quote:
      '"I had a fantastic experience with Dental Clinkick! Their team was incredibly attentive and kept me updated throughout the design process. I loved how user-focused their approach was, making sure everything met my needs. I can\'t wait to implement the designs!"',
    avatar: "/images/testimonials/avatar-1.png",
    name: "Mason Caldwell",
    detail: "Dr. Emily Carter, a visionary...",
  },
  {
    quote:
      '"Working with Dental Clinkick was a breeze! They delivered on time and ensured I was happy with every step of the process. Their user-focused design strategy really shines through. I\'m looking forward to putting their designs into action!"',
    avatar: "/images/testimonials/avatar-2.png",
    name: "Mason Caldwell",
    detail: "Dr. Emily Carter, a visionary...",
  },
  {
    quote:
      '"Dental Clinkick exceeded my expectations! The designs were delivered promptly, and their communication was top-notch. I appreciated the detailed updates they provided, which kept me in the loop."',
    avatar: "/images/testimonials/avatar-3.png",
    name: "Mason Caldwell",
    detail: "Dr. Emily Carter, a visionary...",
  },
];

export default function HomeSectionsFromTeam({
  variant = "full",
}: {
  variant?: "full" | "about";
}) {
  const isFull = variant === "full";
  const newsArticles = articles.slice(0, 4);

  return (
    <>
      <section
        className="bg-white py-[100px] max-[768px]:py-16 max-[480px]:py-12"
        id="team"
      >
        <div className="container mx-auto px-[100px] max-[1200px]:px-12 max-[600px]:px-5">
          <div className="text-center mb-[60px] flex flex-col items-center gap-5 max-[768px]:mb-10">
            <div className="section-badge">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87" />
                <path d="M16 3.13a4 4 0 010 7.75" />
              </svg>
              <span>Meet the Team</span>
            </div>
            <h2 className="font-heading text-[2.5rem] font-extrabold text-ink m-0 max-[768px]:text-[2rem] max-[480px]:text-[1.75rem]">
              <span className="text-accent">Our Team</span> of Skilled Doctors
            </h2>
            <p className="text-base text-muted max-w-[600px]">
              At our clinic, we take pride in our highly skilled and efficient
              team of dental specialists who are always ready to meet your
              dental &amp; derma needs.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-5 items-start max-[1024px]:grid-cols-2 max-[600px]:grid-cols-1">
            {teamDoctors.map((doc, i) => (
              <div
                key={i}
                className="rounded-[20px] overflow-hidden bg-sepia flex flex-col"
              >
                <div className="w-full aspect-[3/4] overflow-hidden bg-sepia">
                  <img
                    src={doc.img}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="px-5 py-4 pb-5 flex flex-col gap-1">
                  <p className="font-bold text-base text-ink">{doc.name}</p>
                  <p className="text-sm text-muted truncate">{doc.role}</p>
                  <div className="flex items-center gap-2.5 mt-1">
                    <span className="text-2xl font-extrabold text-ink leading-none">
                      {doc.rating.toFixed(1)}
                    </span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, j) => (
                        <span
                          key={j}
                          style={{
                            color: j < doc.stars ? "#F6BC5E" : "#D9D9D9",
                            fontSize: "18px",
                          }}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-brown min-h-[280px] h-full flex items-center justify-center rounded-[20px] overflow-visible relative max-[1024px]:min-h-[240px]">
              <div className="flex flex-col items-center gap-5 p-8">
                <div className="w-[72px] h-[72px] rounded-full border border-white/40 flex items-center justify-center">
                  <svg viewBox="0 0 60 60" width="28" height="28" fill="white">
                    <path d="M30 4L34.5 25.5L56 30L34.5 34.5L30 56L25.5 34.5L4 30L25.5 25.5Z" />
                  </svg>
                </div>
                <Link href="#" className="btn-pill btn-pill--sm">
                  <span>View All Employees</span>
                  <ArrowIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isFull && (
        <>
          <ServicesPreview />
          <SmileGallery />
        </>
      )}

      {isFull && (
      <section className="bg-white py-[100px] max-[768px]:py-16 max-[480px]:py-12">
        <div className="container mx-auto px-[100px] text-center max-[1200px]:px-12 max-[600px]:px-5">
          <h2 className="font-heading text-[2.5rem] font-extrabold text-ink mb-5 max-[768px]:text-[2rem] max-[480px]:text-[1.75rem]">
            Your Path to a Healthier <span className="text-accent">Smile</span>
          </h2>
          <p className="text-base text-muted max-w-[680px] mx-auto mb-14 leading-relaxed max-[768px]:mb-10">
            From your first visit to ongoing care, our process is designed to be
            simple, transparent, and focused on understanding your needs while
            delivering high-quality dental treatment at every stage.
          </p>

          <div className="flex items-center justify-between gap-0 mb-8 max-[768px]:flex-col max-[768px]:gap-3">
            <span className="px-6 py-[10px] border-[1.5px] border-stroke rounded-full text-[15px] font-medium text-ink bg-white whitespace-nowrap max-[480px]:w-full max-[480px]:text-center">
              Step #1
            </span>
            <span className="flex-1 h-0 border-t-2 border-dashed border-stroke max-w-[200px] max-[768px]:hidden" />
            <span className="px-6 py-[10px] border-[1.5px] border-coral rounded-full text-[15px] font-semibold bg-coral text-white whitespace-nowrap max-[480px]:w-full max-[480px]:text-center">
              Step #2
            </span>
            <span className="flex-1 h-0 border-t-2 border-dashed border-stroke max-w-[200px] max-[768px]:hidden" />
            <span className="px-6 py-[10px] border-[1.5px] border-stroke rounded-full text-[15px] font-medium text-ink bg-white whitespace-nowrap max-[480px]:w-full max-[480px]:text-center">
              Step #3
            </span>
          </div>

          <div className="grid grid-cols-3 gap-5 mb-12 text-left max-[1024px]:grid-cols-1 max-[1024px]:max-w-[520px] max-[1024px]:mx-auto">
            <div className="bg-sepia rounded-[20px] p-4 px-7 flex flex-col gap-4">
              <h3 className="text-[17px] font-bold text-ink">
                Book a Consultation
              </h3>
              <p className="text-[15px] leading-[1.65] text-muted">
                A thorough dental examination designed to evaluate your oral
                health, identify concerns, and clearly understand your goals,
                with no commitment required.
              </p>
            </div>
            <div className="bg-brown rounded-[20px] flex flex-col gap-4">
              <h3 className="text-[17px] font-bold text-white pt-4 px-7">
                Personalized Treatment
              </h3>
              <p className="text-[15px] leading-[1.65] text-black/75 bg-white rounded-xl mx-2 mb-2 p-6">
                A detailed, personalized treatment plan that explains
                recommended procedures, expected timelines, and transparent
                costs, so you know exactly what to expect.
              </p>
            </div>
            <div className="bg-sepia rounded-[20px] p-4 px-7 flex flex-col gap-4">
              <h3 className="text-[17px] font-bold text-ink">
                Ongoing Expert Care
              </h3>
              <p className="text-[15px] leading-[1.65] text-muted">
                Expert dental treatment performed using advanced technology,
                combined with attentive follow-up care and guidance to ensure
                long-term oral health and confidence.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <Link href="/#contact" className="btn-pill">
              <span>Book Consultation</span>
              <CalendarIcon />
            </Link>
          </div>
        </div>
      </section>
      )}

      <section
        className="bg-sepia py-[100px] max-[768px]:py-16 max-[480px]:py-12"
        id="testimonials"
      >
        <div className="container mx-auto px-[100px] max-[1200px]:px-12 max-[600px]:px-5">
          <h2 className="font-heading text-[2.5rem] font-extrabold text-ink mb-3 max-[768px]:text-[2rem] max-[480px]:text-[1.75rem]">
            Client Satisfaction <span className="text-accent">Guaranteed</span>
          </h2>
          <p className="text-base text-muted mb-12 max-w-[760px] max-[768px]:mb-8">
            At our clinic, we take pride in our highly skilled and efficient
            team of dental specialists who are always ready to meet your dental
            &amp; derma needs.
          </p>

          <div className="grid grid-cols-4 gap-5 items-start max-[1024px]:grid-cols-2 max-[600px]:grid-cols-1">
            <div className="bg-brown rounded-[20px_4px_20px_20px] p-9 px-7 flex flex-col items-center gap-2 relative min-h-[280px] h-full justify-center">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <div className="text-5xl font-extrabold text-white leading-none">
                5.0
              </div>
              <div className="text-sm text-white/70 text-center">
                Trusted by 1000+ users
              </div>
              <div className="absolute bottom-5 left-0 right-0 flex justify-between px-4 pointer-events-none">
                <img
                  src="/images/testimonials/laurel-left.svg"
                  alt=""
                  className="w-14 opacity-60"
                />
                <img
                  src="/images/testimonials/laurel-right.svg"
                  alt=""
                  className="w-14 opacity-60"
                />
              </div>
            </div>

            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-[20px] p-7 flex flex-col justify-between gap-6 min-h-[280px]"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2.5">
                    <span className="text-[22px] font-extrabold text-ink">
                      5.0
                    </span>
                    <div className="flex gap-[3px]">
                      {[...Array(5)].map((_, j) => (
                        <StarIcon key={j} />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm leading-[1.65] text-muted">{t.quote}</p>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover shrink-0"
                  />
                  <div>
                    <p className="font-bold text-[15px] text-ink">{t.name}</p>
                    <p className="text-[13px] text-muted">{t.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {isFull && (
      <section
        className="bg-white py-[100px] max-[768px]:py-16 max-[480px]:py-12"
        id="media"
      >
        <div className="container mx-auto px-[100px] text-center max-[1200px]:px-12 max-[600px]:px-5">
          <h2 className="font-heading text-[2.5rem] font-extrabold text-ink mb-4 max-[768px]:text-[2rem] max-[480px]:text-[1.75rem]">
            Atlantis Clinic <span className="text-accent">News</span> And
            Insights
          </h2>
          <p className="text-base text-muted max-w-[620px] mx-auto mb-14 leading-relaxed max-[768px]:mb-10">
            Updates, announcements, and expert perspectives from Atlantis
            Clinic, covering the latest in advanced skincare, dental care, and
            patient-focused innovations.
          </p>
          <div className="grid grid-cols-4 gap-6 mb-12 text-left max-[1024px]:grid-cols-2 max-[600px]:grid-cols-1">
            {newsArticles.map((article) => (
              <Link
                key={article.id}
                href={`/media/${article.id}`}
                className="flex flex-col gap-4 no-underline text-inherit group"
              >
                <div className="rounded-2xl overflow-hidden aspect-[4/5]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover block transition-transform duration-300 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center justify-between">
                    <span className="px-[14px] py-[5px] border-[1.5px] border-stroke rounded-full text-[13px] text-ink">
                      {article.categoryLabel}
                    </span>
                    <span className="text-[13px] text-muted">
                      {article.date}
                    </span>
                  </div>
                  <p className="text-[15px] font-semibold text-ink leading-relaxed">
                    {article.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center">
            <Link href="/media" className="btn-pill">
              <span>View All News</span>
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
      )}

      <section
        className="bg-white py-[100px] max-[768px]:py-16 max-[480px]:py-12"
        id="faq"
      >
        <div className="container mx-auto px-[100px] max-[1200px]:px-12 max-[600px]:px-5">
          <h2 className="font-heading text-[2.5rem] font-extrabold text-ink text-center mb-4 max-[768px]:text-[2rem] max-[480px]:text-[1.75rem]">
            Frequently Asked <span className="text-accent">Questions</span>
          </h2>
          <p className="text-base text-muted text-center max-w-[680px] mx-auto mb-12 leading-relaxed max-[768px]:mb-8">
            You&apos;re never alone. Our dedicated support team is available
            helping you solve issues fast so you can focus on what you do best.
          </p>
          <FAQ items={faqItems} />
        </div>
      </section>

      <ContactSection />
    </>
  );
}
