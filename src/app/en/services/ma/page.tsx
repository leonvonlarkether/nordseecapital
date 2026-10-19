import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesEn } from "@/content/en/services";
import { ServiceDetailPage } from "@/components/services/ServiceDetailPage";

export const metadata: Metadata = {
  title: "M&A: Mergers & Acquisitions Advisory",
  description:
    "Comprehensive corporate advisory for mid-market business acquisitions and divestments. Financial valuation, deal negotiation, and full legal due diligence.",
  alternates: {
    canonical: "/en/services/ma",
    languages: {
      es: "/servicios/ma",
      en: "/en/services/ma",
      "x-default": "/servicios/ma",
    },
  },
  openGraph: {
    title: "M&A: Mergers & Acquisitions Advisory | Nordsee Capital",
    description:
      "Comprehensive corporate advisory for mid-market business acquisitions and divestments. Financial valuation, deal negotiation, and full legal due diligence.",
    url: "https://nordseecapital.com/en/services/ma",
    images: [
      {
        url: "/images/services/ma.jpg",
        width: 1600,
        height: 1280,
        alt: "M&A: Mergers & Acquisitions Advisory — Nordsee Capital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "M&A: Mergers & Acquisitions Advisory | Nordsee Capital",
    description:
      "Comprehensive corporate advisory for mid-market business acquisitions and divestments. Financial valuation, deal negotiation, and full legal due diligence.",
    images: ["/images/services/ma.jpg"],
  },
};

export default function EnglishMAPage() {
  const service = servicesEn.find((s) => s.slug === "ma");
  if (!service) notFound();

  const clientNeeds = [
    "Strategic total or partial divestiture of family enterprises with absolute confidentiality.",
    "Targeted acquisition of complementary competitors to accelerate corporate growth.",
    "Rigorous DCF and multiples financial modeling to determine objective transaction ranges.",
    "Balanced drafting and negotiation of shareholders agreements and definitive closing contracts (SPA/SHA).",
  ];

  return <ServiceDetailPage service={service} clientNeeds={clientNeeds} locale="en" />;
}
