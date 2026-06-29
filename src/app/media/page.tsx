import type { Metadata } from "next";
import MediaPageClient from "@/components/MediaPageClient";

export const metadata: Metadata = {
  title: "News & Insights | Atlantis Clinic",
  description:
    "Updates, announcements, and expert perspectives from Atlantis Clinic, covering advanced skincare, dental care, and patient-focused innovations.",
};

export default function MediaPage() {
  return (
    <section className="pt-[88px] bg-white">
      <div className="container mx-auto px-6 py-[100px] max-[1200px]:px-12 max-[768px]:py-16 max-[600px]:px-5 max-[480px]:py-12">
        <div className="flex items-start justify-between gap-12 mb-14 max-[900px]:flex-col max-[900px]:gap-6 max-[900px]:mb-10">
          <h1 className="font-heading text-[2.5rem] font-extrabold text-ink leading-tight max-w-[520px] max-[768px]:text-[2rem] max-[480px]:text-[1.75rem]">
            Atlantis Clinic <span className="text-accent">News</span> And
            Insights
          </h1>
          <p className="text-base text-muted leading-relaxed max-w-[480px] max-[900px]:max-w-full">
            Updates, announcements, and expert perspectives from Atlantis
            Clinic, covering the latest in advanced skincare, dental care, and
            patient-focused innovations.
          </p>
        </div>

        <MediaPageClient />
      </div>
    </section>
  );
}
