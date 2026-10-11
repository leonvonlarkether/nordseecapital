import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/content/services";
import { ServiceDetailPage } from "@/components/services/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Tax & Legal: Asesoría Legal y Tributaria | Nordsee Capital",
  description:
    "Planificación tributaria patrimonial, reorganizaciones corporativas complejas y estructuración legal cross-border con resguardo intergeneracional.",
  alternates: {
    canonical: "/servicios/tax-legal",
  },
};

export default function TaxLegalPage() {
  const service = services.find((s) => s.slug === "tax-legal");
  if (!service) notFound();

  const clientNeeds = [
    "Diseño de estructuras societarias eficientes para inversiones en Chile y el exterior.",
    "Reorganizaciones corporativas complejas: fusiones, divisiones y canjes de acciones.",
    "Blindaje patrimonial familiar y protocolos de sucesión con estricto apego a la ley.",
    "Aplicación de convenios internacionales para evitar la doble imposición tributaria.",
  ];

  return <ServiceDetailPage service={service} clientNeeds={clientNeeds} />;
}
