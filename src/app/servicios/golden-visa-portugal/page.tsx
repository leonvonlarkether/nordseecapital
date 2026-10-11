import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/content/services";
import { ServiceDetailPage } from "@/components/services/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Golden Visa Portugal: Residencia por Inversión | Nordsee Capital",
  description:
    "Acompañamiento integral y due diligence de fondos de inversión elegibles en Portugal bajo la normativa CMVM vigente. Alianza local en terreno.",
  alternates: {
    canonical: "/servicios/golden-visa-portugal",
  },
};

export default function GoldenVisaPortugalPage() {
  const service = services.find((s) => s.slug === "golden-visa-portugal");
  if (!service) notFound();

  const clientNeeds = [
    "Planificación de residencia europea para el inversionista y su grupo familiar bajo la ley portuguesa.",
    "Auditoría rigurosa y due diligence de fondos de inversión regulados por la CMVM portuguesa.",
    "Acompañamiento legal completo: apertura de cuentas bancarias en Portugal, NIF y preparación de expediente.",
    "Presencia y soporte en terreno en Portugal a través de una alianza local de probada trayectoria.",
  ];

  return <ServiceDetailPage service={service} clientNeeds={clientNeeds} />;
}
