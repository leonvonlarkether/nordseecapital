import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/content/services";
import { ServiceDetailPage } from "@/components/services/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Real Estate & Desarrollo Inmobiliario",
  description:
    "Desarrollo, inversión y gestión de activos inmobiliarios comerciales y residenciales prime en Chile y Estados Unidos. Estabilidad de flujos y plusvalía.",
  alternates: {
    canonical: "/servicios/real-estate",
    languages: {
      es: "/servicios/real-estate",
      en: "/en/services/real-estate",
      "x-default": "/servicios/real-estate",
    },
  },
  openGraph: {
    title: "Real Estate & Desarrollo Inmobiliario | Nordsee Capital",
    description:
      "Desarrollo, inversión y gestión de activos inmobiliarios comerciales y residenciales prime en Chile y Estados Unidos. Estabilidad de flujos y plusvalía.",
    url: "https://nordseecapital.com/servicios/real-estate",
    images: [
      {
        url: "/images/services/real-estate.jpg",
        width: 1200,
        height: 896,
        alt: "Real Estate & Desarrollo Inmobiliario — Nordsee Capital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate & Desarrollo Inmobiliario | Nordsee Capital",
    description:
      "Desarrollo, inversión y gestión de activos inmobiliarios comerciales y residenciales prime en Chile y Estados Unidos. Estabilidad de flujos y plusvalía.",
    images: ["/images/services/real-estate.jpg"],
  },
};

export default function RealEstatePage() {
  const service = services.find((s) => s.slug === "real-estate");
  if (!service) notFound();

  const clientNeeds = [
    "Diversificación de patrimonio en activos reales de alta resiliencia en Chile y Estados Unidos.",
    "Búsqueda de rentas inmobiliarias predecibles y contratos de arriendo institucional de largo plazo.",
    "Coinversión y acompañamiento en desarrollo habitacional y comercial en ubicaciones prime.",
    "Estructuración de financiamiento bancario y privado en condiciones altamente competitivas.",
  ];

  return <ServiceDetailPage service={service} clientNeeds={clientNeeds} />;
}
