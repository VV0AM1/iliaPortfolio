import Image from "next/image";
import HomeHero from "@/components/HomeHero";
import ServicesSection from "@/components/ServicesSection";
import PersonalSkills from "@/components/PersonalSkills";
import ProjectCarousel from "@/components/ProjectCarousel";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import SkillsGrid from "@/components/SkillsGrid";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <HomeHero />
      <ServicesSection />
      <PersonalSkills />
      <ProjectCarousel />
      <TestimonialCarousel />
      <ExperienceTimeline />
      <SkillsGrid />
      <ContactSection />
      <Footer />
    </div>
  );
}
