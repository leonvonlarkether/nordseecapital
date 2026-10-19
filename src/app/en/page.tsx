import type { Metadata } from "next";
import React from "react";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeValueStrip } from "@/components/home/HomeValueStrip";
import { HomeAboutPreview } from "@/components/home/HomeAboutPreview";
import { HomeServicesSection } from "@/components/home/HomeServicesSection";
import { HomeApproachSection } from "@/components/home/HomeApproachSection";
import { HomeInternationalPresence } from "@/components/home/HomeInternationalPresence";
import { HomeTeamSection } from "@/components/home/HomeTeamSection";
import { HomeCtaSection } from "@/components/home/HomeCtaSection";

export const metadata: Metadata = {
  title: "Private Wealth, Real Estate & Strategic Advisory",
  description:
    "Cross-border investment platform and corporate advisory for families and institutional investors in Chile, the US, and Europe.",
  alternates: {
    canonical: "/en",
    languages: {
      es: "/",
      en: "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Nordsee Capital | Private Wealth & Investment Strategy",
    description:
      "Cross-border investment platform and corporate advisory for families and institutional investors in Chile, the US, and Europe.",
    url: "https://nordseecapital.com/en",
    images: [
      {
        url: "/images/home/hero-nordsee.jpg",
        width: 1376,
        height: 768,
        alt: "Nordsee Capital — Private Wealth & Investment Strategy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nordsee Capital | Private Wealth & Investment Strategy",
    description:
      "Cross-border investment platform and corporate advisory for families and institutional investors in Chile, the US, and Europe.",
    images: ["/images/home/hero-nordsee.jpg"],
  },
};

export default function EnglishHomePage() {
  return (
    <>
      <HomeHero locale="en" />
      <HomeValueStrip locale="en" />
      <HomeAboutPreview locale="en" />
      <HomeServicesSection locale="en" />
      <HomeApproachSection locale="en" />
      <HomeInternationalPresence locale="en" />
      <HomeTeamSection locale="en" />
      <HomeCtaSection locale="en" />
    </>
  );
}
