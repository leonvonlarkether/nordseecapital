import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/content/services";
import { ServiceDetailPage } from "@/components/services/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Wealth Management & Gestión Patrimonial",
  description:
    "Asesoría patrimonial personalizada bajo arquitectura abierta e independencia absoluta de emisores. Custodia local e internacional.",
  alternates: {
    canonical: "/servicios/wealth-management",
    languages: {
      es: "/servicios/wealth-management",
      en: "/en/services/wealth-management",
      "x-default": "/servicios/wealth-management",
    },
  },
  openGraph: {
    title: "Wealth Management & Gestión Patrimonial | Nordsee Capital",
    description:
      "Asesoría patrimonial personalizada bajo arquitectura abierta e independencia absoluta de emisores. Custodia local e internacional.",
    url: "https://nordseecapital.com/servicios/wealth-management",
    images: [
      {
        url: "/images/services/wealth-management.jpg",
        width: 1600,
        height: 1067,
        alt: "Wealth Management & Gestión Patrimonial — Nordsee Capital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wealth Management & Gestión Patrimonial | Nordsee Capital",
    description:
      "Asesoría patrimonial personalizada bajo arquitectura abierta e independencia absoluta de emisores. Custodia local e internacional.",
    images: ["/images/services/wealth-management.jpg"],
  },
};

export default function WealthManagementPage() {
  const service = services.find((s) => s.slug === "wealth-management");
  if (!service) notFound();

  const clientNeeds = [
    "Administración independiente de capital libre de conflictos de interés de colocación.",
    "Preservación de patrimonio familiar con asignación de activos diversificada internacionalmente.",
    "Acceso a productos exclusivos de custodia en los principales bancos de Chile y el extranjero.",
    "Monitoreo transparente de costos, comisiones de terceros y volatilidad del portafolio.",
  ];

  return <ServiceDetailPage service={service} clientNeeds={clientNeeds} />;
}
