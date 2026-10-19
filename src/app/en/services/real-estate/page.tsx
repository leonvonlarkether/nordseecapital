import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesEn } from "@/content/en/services";
import { ServiceDetailPage } from "@/components/services/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Real Estate & Property Development",
  description:
    "Development, co-investment, and management of prime commercial and residential real estate assets across Chile and the US. Cash flow stability and long-term capital appreciation.",
  alternates: {
    canonical: "/en/services/real-estate",
    languages: {
      es: "/servicios/real-estate",
      en: "/en/services/real-estate",
      "x-default": "/servicios/real-estate",
    },
  },
  openGraph: {
    title: "Real Estate & Property Development | Nordsee Capital",
    description:
      "Development, co-investment, and management of prime commercial and residential real estate assets across Chile and the US. Cash flow stability and long-term capital appreciation.",
    url: "https://nordseecapital.com/en/services/real-estate",
    images: [
      {
        url: "/images/services/real-estate.jpg",
        width: 1200,
        height: 896,
        alt: "Real Estate & Property Development — Nordsee Capital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate & Property Development | Nordsee Capital",
    description:
      "Development, co-investment, and management of prime commercial and residential real estate assets across Chile and the US.",
    images: ["/images/services/real-estate.jpg"],
  },
};

export default function EnglishRealEstatePage() {
  const service = servicesEn.find((s) => s.slug === "real-estate");
  if (!service) notFound();

  const clientNeeds = [
    "Portfolio diversification into resilient real assets across Chile and the United States.",
    "Targeting predictable rental yields anchored by long-term institutional lease covenants.",
    "Direct co-investment and sponsor oversight in residential and commercial developments in prime locations.",
    "Structuring bank debt and private construction finance under competitive terms.",
  ];

  return <ServiceDetailPage service={service} clientNeeds={clientNeeds} locale="en" />;
}
