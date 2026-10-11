import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/content/services";
import { ServiceDetailPage } from "@/components/services/ServiceDetailPage";

export const metadata: Metadata = {
  title: "M&A: Fusiones y Adquisiciones Corporativas | Nordsee Capital",
  description:
    "Asesoría integral en compraventas y fusiones de empresas. Valoración financiera, negociación de contratos y debida diligencia legal.",
  alternates: {
    canonical: "/servicios/ma",
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
