const introParagraphs = [
  "An idea born from years of Georgian professional experience has evolved into a premium dental and aesthetic clinic guided by international standards and modern excellence.",
  "Our team consists of highly qualified specialists with extensive experience in leading international clinics and active membership in global professional organizations. Continuous education, advanced methodologies, and strict adherence to international protocols shape every aspect of our work.",
  "Aesthetics are at the core of our philosophy. We believe that a healthy smile and harmonious appearance are essential expressions of confidence and quality of life. By combining medical precision with an artistic vision, we deliver results that are natural, balanced, and enduring.",
  "Using state-of-the-art technologies, high-quality materials, and a fully personalized approach, we create an experience that goes beyond clinical care, one defined by comfort, discretion, and uncompromising quality.",
];

export default function AboutIntro() {
  return (
    <div className="bg-white text-ink pt-8">
      {/* Welcome */}
      <section className="pt-[88px] pb-8 max-[768px]:pb-12">
        <div className="container mx-auto px-6 max-[1200px]:px-12 max-[600px]:px-5">
          <h1 className="font-heading text-[2.75rem] font-extrabold mb-4 max-[768px]:text-[2.25rem] max-[480px]:text-[1.875rem] max-[768px]:mb-8">
            Welcome to <span className="text-accent">Atlantis</span> clinic
          </h1>
          <div className=" mx-auto flex flex-col gap-4 text-[15px] leading-[1.75] text-black/75">
            {introParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic exterior */}
      <section className="pb-20 max-[768px]:pb-14">
        <div className="container mx-auto px-6 max-[1200px]:px-12 max-[600px]:px-5">
          <img
            src="/images/clinic/clinic-bg.png"
            alt="Atlantis clinic exterior"
            className="w-full rounded-[20px] object-cover aspect-[16/9] max-[600px]:aspect-[4/3]"
          />
        </div>
      </section>

      {/* Our Mission */}
      <section className="pb-20 max-[768px]:pb-14">
        <div className="container mx-auto px-6 max-[1200px]:px-12 max-[600px]:px-5">
          <div className="grid grid-cols-2 gap-12 items-center max-[900px]:grid-cols-1 max-[900px]:gap-8">
            <div className="flex flex-col gap-5 max-[900px]:order-1">
              <h2 className="font-heading text-[2rem] font-extrabold max-[480px]:text-[1.75rem]">
                Our Mission
              </h2>
              <p className="text-[15px] leading-[1.75] text-black/75">
                To provide premium dental and aesthetic care through
                international standards, advanced technology, and a highly
                skilled team, while ensuring safety, comfort, and personalized
                treatment for every patient.
              </p>
              <p className="text-[15px] leading-[1.75] text-black/75">
                We are committed to delivering natural, long-lasting results
                that enhance both health and confidence.
              </p>
            </div>
            <div className="max-[900px]:order-2">
              <img
                src="/images/team/doctor-1.png"
                alt="Dentist greeting a patient"
                className="w-full rounded-[20px] object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="pb-[100px] max-[768px]:pb-16">
        <div className="container mx-auto px-6 max-[1200px]:px-12 max-[600px]:px-5">
          <div className="grid grid-cols-2 gap-12 items-center max-[900px]:grid-cols-1 max-[900px]:gap-8">
            <div className="max-[900px]:order-2">
              <img
                src="/images/team/doctor-3.png"
                alt="Dental examination at Atlantis clinic"
                className="w-full rounded-[20px] object-cover aspect-[4/3]"
              />
            </div>
            <div className="flex flex-col gap-5 max-[900px]:order-1">
              <h2 className="font-heading text-[2rem] font-extrabold max-[480px]:text-[1.75rem]">
                Our Vision
              </h2>
              <p className="text-[15px] leading-[1.75] text-black/75">
                To become a benchmark clinic in the region, recognized for
                excellence in dentistry and aesthetics, innovative approaches,
                and an unwavering commitment to quality.
              </p>
              <p className="text-[15px] leading-[1.75] text-black/75">
                Our vision is to redefine patient experience by combining
                medical expertise, refined aesthetics, and trust, creating
                results that are timeless and distinctive.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
