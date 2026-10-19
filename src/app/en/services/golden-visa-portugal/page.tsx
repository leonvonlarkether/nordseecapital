import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesEn } from "@/content/en/services";
import { ServiceDetailPage } from "@/components/services/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Portugal Golden Visa: Residency by Investment",
  description:
    "Comprehensive guidance and institutional due diligence for CMVM-regulated investment funds in Portugal under current immigration legislation. On-the-ground Lisbon partner.",
  alternates: {
    canonical: "/en/services/golden-visa-portugal",
    languages: {
      es: "/servicios/golden-visa-portugal",
      en: "/en/services/golden-visa-portugal",
      "x-default": "/servicios/golden-visa-portugal",
    },
  },
  openGraph: {
    title: "Portugal Golden Visa: Residency by Investment | Nordsee Capital",
    description:
      "Comprehensive guidance and institutional due diligence for CMVM-regulated investment funds in Portugal under current immigration legislation. On-the-ground Lisbon partner.",
    url: "https://nordseecapital.com/en/services/golden-visa-portugal",
    images: [
      {
        url: "/images/services/golden-visa.jpg",
        width: 1600,
        height: 1067,
        alt: "Portugal Golden Visa: Residency by Investment — Nordsee Capital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portugal Golden Visa: Residency by Investment | Nordsee Capital",
    description:
      "Comprehensive guidance and institutional due diligence for CMVM-regulated investment funds in Portugal under current immigration legislation.",
    images: ["/images/services/golden-visa.jpg"],
  },
};

export default function EnglishGoldenVisaPortugalPage() {
  const service = servicesEn.find((s) => s.slug === "golden-visa-portugal");
  if (!service) notFound();

  const clientNeeds = [
    "European residency roadmap for investors and qualifying family members under current Portuguese statutes.",
    "Rigorous due diligence and auditing of qualifying investment funds supervised by Portugal's CMVM.",
    "End-to-end legal support: Portuguese tax number (NIF), local bank account opening, and residency application filings.",
    "Direct on-the-ground support across Lisbon and Porto through vetted local legal and investment partners.",
  ];

  return <ServiceDetailPage service={service} clientNeeds={clientNeeds} locale="en" />;
}
