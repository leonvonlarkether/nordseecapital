import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesEn } from "@/content/en/services";
import { ServiceDetailPage } from "@/components/services/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Private Debt & Structured Financing",
  description:
    "Tailored private credit solutions with rigorous due diligence, proven cash flows, strict covenants, and senior asset collateral.",
  alternates: {
    canonical: "/en/services/private-debt",
    languages: {
      es: "/servicios/deuda-privada",
      en: "/en/services/private-debt",
      "x-default": "/servicios/deuda-privada",
    },
  },
  openGraph: {
    title: "Private Debt & Structured Financing | Nordsee Capital",
    description:
      "Tailored private credit solutions with rigorous due diligence, proven cash flows, strict covenants, and senior asset collateral.",
    url: "https://nordseecapital.com/en/services/private-debt",
    images: [
      {
        url: "/images/services/deuda-privada.jpg",
        width: 1600,
        height: 1060,
        alt: "Private Debt & Structured Financing — Nordsee Capital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Debt & Structured Financing | Nordsee Capital",
    description:
      "Tailored private credit solutions with rigorous due diligence, proven cash flows, strict covenants, and senior asset collateral.",
    images: ["/images/services/deuda-privada.jpg"],
  },
};

export default function EnglishPrivateDebtPage() {
  const service = servicesEn.find((s) => s.slug === "private-debt");
  if (!service) notFound();

  const clientNeeds = [
    "Targeting yields superior to conventional fixed income within a methodically bounded risk profile.",
    "Credit structures secured by first-lien mortgages and pledge guarantees over productive operating assets.",
    "Tailored non-bank financing for established corporations with resilient operational cash flows.",
    "Continuous financial surveillance and uncompromising enforcement of debt covenants.",
  ];

  return <ServiceDetailPage service={service} clientNeeds={clientNeeds} locale="en" />;
}
