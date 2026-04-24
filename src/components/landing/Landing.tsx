"use client";

import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Catalogue } from "@/components/landing/Catalogue";
import { WhyDifferent } from "@/components/landing/WhyDifferent";
import { SmartLightingAV } from "@/components/landing/SmartLightingAV";
import { PricingEstimate } from "@/components/landing/PricingEstimate";
import { RelocatableSystem } from "@/components/landing/RelocatableSystem";
import { LeadCapture } from "@/components/landing/LeadCapture";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";

export function Landing() {
  return (
    <div className="min-h-screen bg-luxury-bg">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Catalogue />
        <WhyDifferent />
        <SmartLightingAV />
        <PricingEstimate />
        <RelocatableSystem />
        <LeadCapture />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
