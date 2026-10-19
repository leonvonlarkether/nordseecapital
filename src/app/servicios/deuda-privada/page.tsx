import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/content/services";
import { ServiceDetailPage } from "@/components/services/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Deuda Privada & Financiamiento Estructurado",
  description:
    "Soluciones de deuda privada con due diligence exhaustivo, flujos comprobados, covenants estrictos y garantías reales.",
  alternates: {
    canonical: "/servicios/deuda-privada",
    languages: {
      es: "/servicios/deuda-privada",
      en: "/en/services/private-debt",
      "x-default": "/servicios/deuda-privada",
    },
  },
  openGraph: {
    title: "Deuda Privada & Financiamiento Estructurado | Nordsee Capital",
    description:
      "Soluciones de deuda privada con due diligence exhaustivo, flujos comprobados, covenants estrictos y garantías reales.",
    url: "https://nordseecapital.com/servicios/deuda-privada",
    images: [
      {
        url: "/images/services/deuda-privada.jpg",
        width: 1600,
        height: 1060,
        alt: "Deuda Privada & Financiamiento Estructurado — Nordsee Capital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deuda Privada & Financiamiento Estructurado | Nordsee Capital",
    description:
      "Soluciones de deuda privada con due diligence exhaustivo, flujos comprobados, covenants estrictos y garantías reales.",
    images: ["/images/services/deuda-privada.jpg"],
  },
};

export default function DeudaPrivadaPage() {
  const service = services.find((s) => s.slug === "deuda-privada");
  if (!service) notFound();

  const clientNeeds = [
    "Retornos superiores a la renta fija tradicional con un perfil de riesgo metódicamente acotado.",
    "Vehículos de deuda con garantías reales y gravámenes preferentes sobre activos productivos.",
    "Financiamiento a medida para empresas consolidadas con sólida capacidad de generación de caja.",
    "Seguimiento periódico y estricta disciplina en el cumplimiento de covenants financieros.",
  ];

  return <ServiceDetailPage service={service} clientNeeds={clientNeeds} />;
}
