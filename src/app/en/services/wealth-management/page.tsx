import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesEn } from "@/content/en/services";
import { ServiceDetailPage } from "@/components/services/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Wealth Management & Fiduciary Advisory",
  description:
    "Tailored wealth management under open architecture and absolute issuer independence. Comprehensive domestic and cross-border custody solutions.",
  alternates: {
    canonical: "/en/services/wealth-management",
    languages: {
      es: "/servicios/wealth-management",
      en: "/en/services/wealth-management",
      "x-default": "/servicios/wealth-management",
    },
  },
  openGraph: {
    title: "Wealth Management & Fiduciary Advisory | Nordsee Capital",
    description:
      "Tailored wealth management under open architecture and absolute issuer independence. Comprehensive domestic and cross-border custody solutions.",
    url: "https://nordseecapital.com/en/services/wealth-management",
    images: [
      {
        url: "/images/services/wealth-management.jpg",
        width: 1600,
        height: 1067,
        alt: "Wealth Management & Fiduciary Advisory — Nordsee Capital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wealth Management & Fiduciary Advisory | Nordsee Capital",
    description:
      "Tailored wealth management under open architecture and absolute issuer independence.",
    images: ["/images/services/wealth-management.jpg"],
  },
};

export default function EnglishWealthManagementPage() {
  const service = servicesEn.find((s) => s.slug === "wealth-management");
  if (!service) notFound();

  const clientNeeds = [
    "Independent capital management strictly free from distribution conflicts of interest.",
    "Family estate preservation supported by globally diversified asset allocation.",
    "Access to institutional custody across leading private banks in Chile, the US, and Europe.",
    "Transparent monitoring of total expense ratios, third-party custody fees, and portfolio volatility.",
  ];

  return <ServiceDetailPage service={service} clientNeeds={clientNeeds} locale="en" />;
}
