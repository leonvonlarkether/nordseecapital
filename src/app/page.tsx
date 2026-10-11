import React from "react";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeValueStrip } from "@/components/home/HomeValueStrip";
import { HomeAboutPreview } from "@/components/home/HomeAboutPreview";
import { HomeServicesSection } from "@/components/home/HomeServicesSection";
import { HomeApproachSection } from "@/components/home/HomeApproachSection";
import { HomeInternationalPresence } from "@/components/home/HomeInternationalPresence";
import { HomeTeamSection } from "@/components/home/HomeTeamSection";
import { HomeCtaSection } from "@/components/home/HomeCtaSection";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeValueStrip />
      <HomeAboutPreview />
      <HomeServicesSection />
      <HomeApproachSection />
      <HomeInternationalPresence />
      <HomeTeamSection />
      <HomeCtaSection />
    </>
  );
}
