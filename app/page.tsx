"use client";

import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import ProcessSection from "@/components/process-section";
import { TechStackSection } from "@/components/tech-stack-section";
import { CaseStudiesSection } from "@/components/case-studies-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FinalCTASection } from "@/components/final-cta-section";
import { Navigation } from "@/components/navigation";

export default function LandingPage() {
  return (
    <main className='min-h-screen bg-white overflow-x-hidden'>
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <TechStackSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <FinalCTASection />
    </main>
  );
}
