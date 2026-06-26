import type { Metadata } from "next";
import AboutIntro from "@/components/AboutIntro";
import HomeSectionsFromTeam from "@/components/HomeSectionsFromTeam";

export const metadata: Metadata = {
  title: "About Us | Atlantis Dental & Aesthetic Clinic Dubai",
  description:
    "Learn about Atlantis clinic — premium dental and aesthetic care guided by international standards, advanced technology, and a highly skilled team.",
};

export default function AboutPage() {
  return (
    <>
      <AboutIntro />
      <HomeSectionsFromTeam />
    </>
  );
}
