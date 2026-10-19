import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesEn } from "@/content/en/services";
import { ServiceDetailPage } from "@/components/services/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Tax & Legal: Corporate & Estate Structuring",
  description:
    "Wealth tax planning, complex corporate reorganizations, and cross-border legal structures with intergenerational asset protection.",
  alternates: {
    canonical: "/en/services/tax-legal",
    languages: {
      es: "/servicios/tax-legal",
      en: "/en/services/tax-legal",
      "x-default": "/servicios/tax-legal",
    },
  },
  openGraph: {
    title: "Tax & Legal: Corporate & Estate Structuring | Nordsee Capital",
    description:
      "Wealth tax planning, complex corporate reorganizations, and cross-border legal structures with intergenerational asset protection.",
    url: "https://nordseecapital.com/en/services/tax-legal",
    images: [
      {
        url: "/images/services/tax-legal.jpg",
        width: 1600,
        height: 1068,
        alt: "Tax & Legal: Corporate & Estate Structuring — Nordsee Capital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Legal: Corporate & Estate Structuring | Nordsee Capital",
    description:
      "Wealth tax planning, complex corporate reorganizations, and cross-border legal structures with intergenerational asset protection.",
    images: ["/images/services/tax-legal.jpg"],
  },
};

export default function EnglishTaxLegalPage() {
  const service = servicesEn.find((s) => s.slug === "tax-legal");
  if (!service) notFound();

  const clientNeeds = [
    "Design of tax-efficient corporate holding structures for investments in Chile and abroad.",
    "Complex corporate reorganizations: statutory mergers, divisions, and share exchanges.",
    "Family estate shielding and succession protocols in strict compliance with applicable laws.",
    "Strategic utilization of international double taxation treaties (DTT).",
  ];

  return <ServiceDetailPage service={service} clientNeeds={clientNeeds} locale="en" />;
}
