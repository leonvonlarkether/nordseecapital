import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/content/services";
import { ServiceDetailPage } from "@/components/services/ServiceDetailPage";

export const metadata: Metadata = {
  title: "M&A: Fusiones y Adquisiciones Corporativas",
  description:
    "Asesoría integral en compraventas y fusiones de empresas. Valoración financiera, negociación de contratos y debida diligencia legal.",
  alternates: {
    canonical: "/servicios/ma",
    languages: {
      es: "/servicios/ma",
      en: "/en/services/ma",
      "x-default": "/servicios/ma",
    },
  },
  openGraph: {
    title: "M&A: Fusiones y Adquisiciones Corporativas | Nordsee Capital",
    description:
      "Asesoría integral en compraventas y fusiones de empresas. Valoración financiera, negociación de contratos y debida diligencia legal.",
    url: "https://nordseecapital.com/servicios/ma",
    images: [
      {
        url: "/images/services/ma.jpg",
        width: 1600,
        height: 1280,
        alt: "M&A: Fusiones y Adquisiciones Corporativas — Nordsee Capital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "M&A: Fusiones y Adquisiciones Corporativas | Nordsee Capital",
    description:
      "Asesoría integral en compraventas y fusiones de empresas. Valoración financiera, negociación de contratos y debida diligencia legal.",
    images: ["/images/services/ma.jpg"],
  },
};

export default function MAPage() {
  const service = services.find((s) => s.slug === "ma");
  if (!service) notFound();

  const clientNeeds = [
    "Venta estratégica total o parcial de empresas familiares con máxima confidencialidad.",
    "Adquisición de compañías competidoras o complementarias para acelerar crecimiento corporativo.",
    "Modelación financiera rigurosa y determinación objetiva de rangos de valoración.",
    "Redacción y negociación equilibrada de acuerdos de accionistas y contratos definitivos (SPA/SHA).",
  ];

  return <ServiceDetailPage service={service} clientNeeds={clientNeeds} />;
}
