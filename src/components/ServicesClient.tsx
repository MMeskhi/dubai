"use client";

import Link from "next/link";
import { useState } from "react";

interface ServiceCard {
  img: string;
  label: string;
}

interface ServiceCategory {
  titleAccent: string;
  titleRest?: string;
  cards: ServiceCard[];
}

const CAT_DESC =
  "At our clinic, we take pride in our highly skilled and efficient team of dental specialists who are always ready to meet your dental & derma needs.";

const dentalCategories: ServiceCategory[] = [
  {
    titleAccent: "General",
    titleRest: "and Preventive Dentistry",
    cards: [
      {
        img: "/images/services/general-1.png",
        label: "General & Preventive Dentistry",
      },
      {
        img: "/images/services/general-2.png",
        label: "Fluoride treatments and preventive care",
      },
      {
        img: "/images/services/general-3.png",
        label: "Digital X-rays and diagnostic imaging",
      },
      {
        img: "/images/services/general-4.png",
        label: "Professional teeth cleaning and polishing",
      },
    ],
  },
  {
    titleAccent: "Cosmetic",
    titleRest: "Dentistry",
    cards: [
      {
        img: "/images/services/cosmetic-1.png",
        label: "Teeth whitening (in-clinic and take-home options)",
      },
      {
        img: "/images/services/cosmetic-2.png",
        label: "Porcelain veneers and laminate veneers",
      },
      {
        img: "/images/services/cosmetic-3.png",
        label: "Cosmetic bonding and contouring",
      },
      {
        img: "/images/services/cosmetic-4.png",
        label: "Tooth-colored (composite) fillings",
      },
    ],
  },
  {
    titleAccent: "Restorative",
    titleRest: "Dentistry",
    cards: [
      {
        img: "/images/services/restorative-1.png",
        label: "Dental fillings (composite and aesthetic restorations)",
      },
      {
        img: "/images/services/restorative-2.png",
        label: "Dental crowns (ceramic, zirconia, porcelain-fused)",
      },
      { img: "/images/services/restorative-3.png", label: "Dental bridges" },
      { img: "/images/services/restorative-4.png", label: "Inlays and onlays" },
    ],
  },
  {
    titleAccent: "Endodontics",
    titleRest: "(Root Canal Treatment)",
    cards: [
      {
        img: "/images/services/endodontics-1.png",
        label: "Single and multi-root canal treatments",
      },
      {
        img: "/images/services/endodontics-2.png",
        label: "Re-root canal treatment",
      },
      {
        img: "/images/services/endodontics-3.png",
        label: "Treatment of infected or damaged teeth",
      },
      {
        img: "/images/services/endodontics-4.png",
        label: "Pain management and infection control",
      },
    ],
  },
  {
    titleAccent: "Periodontics",
    titleRest: "(Gum Care)",
    cards: [
      {
        img: "/images/services/periodontics-1.png",
        label: "Scaling and root planing (deep cleaning)",
      },
      {
        img: "/images/services/periodontics-2.png",
        label: "Gum infection management",
      },
      {
        img: "/images/services/periodontics-3.png",
        label: "Periodontal maintenance and follow-up care",
      },
      {
        img: "/images/services/periodontics-4.png",
        label: "Treatment of gum disease (gingivitis and periodontitis)",
      },
    ],
  },
  {
    titleAccent: "Prosthodontics",
    titleRest: "(Teeth Replacement)",
    cards: [
      {
        img: "/images/services/prosthodontics-1.png",
        label: "Full & partial dentures",
      },
      {
        img: "/images/services/prosthodontics-2.png",
        label: "Smile and bite rehabilitation",
      },
      {
        img: "/images/services/prosthodontics-3.png",
        label: "Fixed and removable prosthetics",
      },
      {
        img: "/images/services/prosthodontics-4.png",
        label: "Implant-supported dentures",
      },
    ],
  },
  {
    titleAccent: "Implant",
    titleRest: "Dentistry",
    cards: [
      {
        img: "/images/services/implant-1.png",
        label: "Dental implant placement",
      },
      {
        img: "/images/services/implant-2.png",
        label: "Implant-supported crowns and bridges",
      },
      {
        img: "/images/services/implant-3.png",
        label: "Full-arch implant solutions",
      },
      {
        img: "/images/services/implant-4.png",
        label: "Implant planning and consultation & treatment planning",
      },
    ],
  },
  {
    titleAccent: "Oral",
    titleRest: "and Minor Dental Surgery",
    cards: [
      { img: "/images/services/oral-1.png", label: "Simple tooth extractions" },
      { img: "/images/services/oral-2.png", label: "Surgical extractions" },
      { img: "/images/services/oral-3.png", label: "Wisdom tooth removal" },
      {
        img: "/images/services/oral-4.png",
        label: "Management of impacted teeth",
      },
    ],
  },
  {
    titleAccent: "Pediatric",
    titleRest: "Dentistry",
    cards: [
      {
        img: "/images/services/pediatric-1.png",
        label: "Gentle, child-friendly dental care",
      },
      {
        img: "/images/services/pediatric-2.png",
        label: "Dental sealants for children",
      },
      {
        img: "/images/services/pediatric-3.png",
        label: "Pediatric fillings and restorations",
      },
      {
        img: "/images/services/pediatric-4.png",
        label: "Fluoride treatments for children",
      },
    ],
  },
  {
    titleAccent: "Orthodontics",
    cards: [
      {
        img: "/images/services/orthodontics-1.png",
        label: "Traditional metal braces",
      },
      { img: "/images/services/orthodontics-2.png", label: "Ceramic braces" },
      {
        img: "/images/services/orthodontics-3.png",
        label: "Clear aligner orthodontic treatments",
      },
      {
        img: "/images/services/orthodontics-4.png",
        label: "Bite correction and teeth alignment",
      },
    ],
  },
  {
    titleAccent: "Emergency",
    titleRest: "Dental Care",
    cards: [
      {
        img: "/images/services/emergency-1.png",
        label: "Dental pain management",
      },
      {
        img: "/images/services/emergency-2.png",
        label: "Treatment of dental infections and abscesses",
      },
      {
        img: "/images/services/emergency-3.png",
        label: "Broken or chipped tooth repair",
      },
      {
        img: "/images/services/emergency-4.png",
        label: "Urgent dental consultations",
      },
    ],
  },
];

const skinCategories: ServiceCategory[] = [
  {
    titleAccent: "Injectable",
    titleRest: "and Advanced Skin Treatments",
    cards: [
      {
        img: "/images/services/injectable-1.png",
        label:
          "Botulinum toxin (Botox) for wrinkle reduction and facial rejuvenation",
      },
      {
        img: "/images/services/injectable-2.png",
        label: "Dermal fillers for lips, cheeks, chin, and facial contouring",
      },
      {
        img: "/images/services/injectable-3.png",
        label: "Lip and Skin Boosters for Hydration, Volume, and Radiant Glow",
      },
      {
        img: "/images/services/injectable-4.png",
        label: "Exosome therapy for advanced skin regeneration",
      },
    ],
  },
  {
    titleAccent: "Microneedling",
    titleRest: "and RF Microneedling",
    cards: [
      {
        img: "/images/services/microneedling-1.png",
        label:
          "Standard microneedling for collagen stimulation and scar improvement",
      },
      {
        img: "/images/services/microneedling-2.png",
        label:
          "RF (radiofrequency) microneedling for skin tightening and anti-aging",
      },
      {
        img: "/images/services/microneedling-3.png",
        label:
          "Combination treatments with PRP (platelet-rich plasma) for enhanced rejuvenation",
      },
      {
        img: "/images/services/microneedling-4.png",
        label: "Microneedling for hair regrowth (scalp microneedling)",
      },
    ],
  },
  {
    titleAccent: "Mesotherapy",
    titleRest: "Treatments",
    cards: [
      {
        img: "/images/services/mesotherapy-1.png",
        label:
          "3-meso treatments for hydration, anti-aging, and skin revitalization",
      },
      {
        img: "/images/services/mesotherapy-2.png",
        label: "Targeted facial, neck, and hand mesotherapy treatments",
      },
      {
        img: "/images/services/mesotherapy-3.png",
        label: "Under eye mesotherapy for dark circles and hydration",
      },
      {
        img: "/images/services/mesotherapy-4.png",
        label: "Lip and perioral mesotherapy for fine lines",
      },
    ],
  },
  {
    titleAccent: "Laser",
    titleRest: "and Energy-Based Treatments",
    cards: [
      {
        img: "/images/services/laser-1.png",
        label:
          "Fractional laser for skin resurfacing, pigmentation, acne scars, and fine lines",
      },
      {
        img: "/images/services/laser-2.png",
        label: "Laser hair removal for safe, long-term hair reduction",
      },
      {
        img: "/images/services/laser-3.png",
        label: "Advanced skin tightening and texture improvement",
      },
      {
        img: "/images/services/laser-4.png",
        label: "IPL photo rejuvenation for redness & pigmentation",
      },
    ],
  },
  {
    titleAccent: "Facials",
    titleRest: "and Rejuvenation Treatments",
    cards: [
      {
        img: "/images/services/facials-1.png",
        label: "HydraFacial for deep cleansing, hydration, and glow",
      },
      {
        img: "/images/services/facials-2.png",
        label:
          "Sculptra facial treatments for collagen stimulation and volume restoration",
      },
      {
        img: "/images/services/facials-3.png",
        label: "Salomon treatments for anti-aging and skin revitalization",
      },
      {
        img: "/images/services/facials-4.png",
        label:
          "Chemical peels for acne, pigmentation, and overall skin rejuvenation",
      },
    ],
  },
  {
    titleAccent: "Hair",
    titleRest: "and Scalp Treatments",
    cards: [
      { img: "/images/services/hair-1.png", label: "Hair loss assessment" },
      {
        img: "/images/services/hair-2.png",
        label: "PRP for hair regeneration",
      },
      {
        img: "/images/services/hair-3.png",
        label: "Scalp rejuvenation therapies",
      },
      {
        img: "/images/services/hair-4.png",
        label: "Hair mesotherapy for hair strengthening and density",
      },
    ],
  },
];

function CategoryBlock({
  cat,
  query,
}: {
  cat: ServiceCategory;
  query: string;
}) {
  const title = (cat.titleAccent + " " + (cat.titleRest || "")).toLowerCase();
  const filteredCards = query
    ? cat.cards.filter(
        (c) => c.label.toLowerCase().includes(query) || title.includes(query),
      )
    : cat.cards;

  if (query && filteredCards.length === 0 && !title.includes(query))
    return null;

  return (
    <div>
      {/* Category header */}
      <div className="text-center mb-10">
        <h2 className="font-heading text-[2.25rem] font-semibold text-ink leading-tight mb-4">
          <span className="text-accent">{cat.titleAccent}</span>
          {cat.titleRest ? (
            <>
              {" "}
              <span>{cat.titleRest}</span>
            </>
          ) : null}
        </h2>
        <p className="text-base text-ink/70 leading-relaxed max-w-[660px] mx-auto">
          {CAT_DESC}
        </p>
      </div>
      {/* Grid */}
      <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4">
        {(query ? filteredCards : cat.cards).map((card, i) => (
          <div
            key={i}
            className="relative rounded-[20px] overflow-hidden aspect-square cursor-pointer transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            <img
              src={card.img}
              alt={card.label}
              className="w-full h-full object-cover block opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none" />
            <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-white rounded-[10px] px-4 py-2.5 text-base font-medium text-[#131314]">
              <p>{card.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ServicesClient() {
  const [filter, setFilter] = useState<"all" | "dental" | "skin">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const query = searchQuery.toLowerCase().trim();
  const showDental = filter === "all" || filter === "dental" || !!query;
  const showSkin = filter === "all" || filter === "skin" || !!query;

  return (
    <>
      {/* Hero */}
      <section
        id="services"
        className="relative mt-[100px] mx-auto max-w-container rounded-[20px] overflow-hidden flex flex-col justify-between gap-12 p-9"
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/services/header-bg.png"
            alt=""
            className="w-full h-full object-cover block"
          />
          <div className="absolute inset-0 bg-ink/30" />
        </div>
        {/* Content */}
        <div className="relative z-10 flex flex-col gap-10 h-full justify-between">
          <div className="flex flex-col gap-3 max-w-[511px] w-full max-md:max-w-full">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-sm text-white"
            >
              <Link href="/" className="hover:text-white/80 transition-colors">
                Home Page
              </Link>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  d="M9 18l6-6-6-6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Services</span>
            </nav>
            <h1 className="font-heading text-[2.5rem] font-semibold text-white leading-snug">
              Services and Treatments
            </h1>
            <p className="text-base text-white/90 leading-relaxed">
              Our wide range of dental services covers all your needs and
              concerns. Whether it&apos;s a regular check-up or a complex
              surgery.
            </p>
          </div>
          {/* Controls */}
          <div className="flex items-center justify-between gap-6">
            {/* Search */}
            <div className="flex items-center gap-2 bg-white rounded-[10px] p-3 w-72 max-md:w-full">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              <input
                type="text"
                placeholder="Start searching"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 outline-none bg-transparent text-ink placeholder:text-muted text-base"
              />
            </div>
            {/* Filters */}
            <div className="flex gap-2">
              {(["all", "dental", "skin"] as const).map((f) => {
                const isActive = filter === f && !query;
                return (
                  <button
                    key={f}
                    className={`px-6 py-3 rounded-full text-base font-medium cursor-pointer border border-white backdrop-blur-sm transition-all ${isActive ? "bg-white text-ink" : "bg-white/[0.16] text-white hover:bg-white/30"}`}
                    onClick={() => {
                      setFilter(f);
                      setSearchQuery("");
                    }}
                  >
                    {f === "all"
                      ? "All Services"
                      : f === "dental"
                        ? "Dental Services"
                        : "Skin Care"}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Dental */}
      {showDental && (
        <div
          className="px-12 py-12 md:px-6 md:py-8 sm:px-4 sm:py-6"
          data-category="dental"
        >
          <div className="max-w-container mx-auto flex flex-col gap-[120px] md:gap-20 sm:gap-16">
            {dentalCategories.map((cat, i) => (
              <CategoryBlock key={i} cat={cat} query={query} />
            ))}
          </div>
        </div>
      )}

      {/* Skin */}
      {showSkin && (
        <div
          className="px-12 py-12 md:px-6 md:py-8 sm:px-4 sm:py-6"
          data-category="skin"
        >
          <div className="max-w-container mx-auto flex flex-col gap-[120px] md:gap-20 sm:gap-16">
            {skinCategories.map((cat, i) => (
              <CategoryBlock key={i} cat={cat} query={query} />
            ))}
          </div>
        </div>
      )}

      {/* Consultation Banner */}
      <section className="py-[140px] px-[161px] md:py-20 md:px-6 sm:py-12 sm:px-4">
        <div className="max-w-[1118px] mx-auto">
          {/* Card */}
          <div className="bg-sepia rounded-[20px_20px_0_0] px-[60px] pt-20 pb-[60px] relative overflow-hidden min-h-[316px]">
            <div className="max-w-[600px] flex flex-col gap-3 items-start">
              <h2 className="font-heading text-[2.25rem] font-semibold text-ink leading-snug">
                Not Sure What Treatment You Need?
              </h2>
              <p className="text-base text-ink/70 leading-relaxed">
                Book a consultation with one of our experts and we&apos;ll help
                you out!
              </p>
              <Link href="/#contact" className="btn-pill mt-7">
                <span>Book Consultation</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
              </Link>
            </div>
            {/* Decorative image */}
            <div className="absolute right-0 bottom-0 w-[378px] h-[456px] overflow-hidden md:hidden">
              <img
                src="/images/services/consultation-woman.png"
                alt="Book a consultation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Stripe */}
          <div className="flex h-3 overflow-hidden">
            <div className="flex-1 bg-brand-yellow" />
            <div className="flex-1 bg-coral" />
            <div className="flex-1 bg-brown" />
          </div>
        </div>
      </section>
    </>
  );
}
