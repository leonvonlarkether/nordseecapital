import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/content/services";
import { ServiceDetailPage } from "@/components/services/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Deuda Privada & Financiamiento Estructurado | Nordsee Capital",
  description:
    "Soluciones de deuda privada con due diligence exhaustivo, flujos comprobados, covenants estrictos y garantías reales.",
  alternates: {
    canonical: "/servicios/deuda-privada",
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
