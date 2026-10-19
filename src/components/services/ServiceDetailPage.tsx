import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ServiceItem, services } from "@/content/services";
import { servicesEn } from "@/content/en/services";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/seo/JsonLd";
import {
  CheckCircle2,
  Shield,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

interface ServiceDetailPageProps {
  service: ServiceItem;
  clientNeeds: string[];
  locale?: "es" | "en";
}

const serviceImages: Record<string, string> = {
  "real-estate": "/images/services/real-estate.jpg",
  "wealth-management": "/images/services/wealth-management.jpg",
  "deuda-privada": "/images/services/deuda-privada.jpg",
  "private-debt": "/images/services/deuda-privada.jpg",
  ma: "/images/services/ma.jpg",
  "tax-legal": "/images/services/tax-legal.jpg",
  "golden-visa-portugal": "/images/services/golden-visa.jpg",
};

export function ServiceDetailPage({
  service,
  clientNeeds,
  locale = "es",
}: ServiceDetailPageProps) {
  const isEn = locale === "en";
  const allServices = isEn ? servicesEn : services;
  const otherServices = allServices.filter((s) => s.slug !== service.slug);
  const imageSrc = serviceImages[service.slug] || "/images/home/hero-nordsee.jpg";
  const basePath = isEn ? "/en/services" : "/servicios";
  const canonicalUrl = `https://nordseecapital.com${basePath}/${service.slug}`;
  const homeUrl = isEn ? "https://nordseecapital.com/en" : "https://nordseecapital.com";
  const contactPath = isEn ? "/en/contact" : "/contacto";

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: isEn ? "Home" : "Inicio", item: homeUrl },
          { name: isEn ? "Services" : "Servicios", item: `https://nordseecapital.com${basePath}` },
          { name: service.shortTitle, item: canonicalUrl },
        ]}
      />
      <ServiceJsonLd service={service} canonicalUrl={canonicalUrl} />
      <PageHeader
        badge={
          isEn
            ? `Practice Area ${service.id} · ${service.geographicCoverage || "Global"}`
            : `Área ${service.id} · ${service.geographicCoverage || "Global"}`
        }
        title={service.title}
        description={service.tagline}
        breadcrumbs={[
          { label: isEn ? "Services" : "Servicios", href: basePath },
          { label: service.shortTitle },
        ]}
      />

      {/* Descripción, fotografía institucional y Necesidades que atiende */}
      <section className="py-20 sm:py-28 bg-[#FAF9F5]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Columna Principal: Descripción */}
            <div className="lg:col-span-7 space-y-6">
              <Badge variant="gold">{isEn ? "Service Overview" : "Visión del Servicio"}</Badge>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#0B192C] font-normal tracking-tight leading-tight text-balance">
                {service.summary}
              </h2>

              <div className="space-y-4 text-base text-[#4B5565] leading-relaxed">
                {service.description.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Necesidades que atiende */}
              <div className="pt-8 border-t border-black/10 space-y-4">
                <h3 className="font-serif text-2xl text-[#0B192C] font-normal">
                  {isEn ? "Key Challenges We Address" : "Necesidades que resolvemos"}
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {clientNeeds.map((need, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-4 rounded-xl border border-black/5 flex items-start gap-3 shadow-2xs"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-sm font-medium text-[#151B26]">
                        {need}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Columna Lateral: Fotografía editorial y Alcance */}
            <div className="lg:col-span-5 space-y-8">
              {/* Ventana fotográfica arquitectónica de la especialidad */}
              <div className="relative rounded-3xl overflow-hidden border border-black/10 shadow-xl shadow-[#0B192C]/10 aspect-[16/10] sm:aspect-[4/3] group">
                <Image
                  src={imageSrc}
                  alt={
                    isEn
                      ? `Architectural photograph representing ${service.title}`
                      : `Fotografía conceptual de arquitectura representativa del área de ${service.title}`
                  }
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/80 via-transparent to-black/20 pointer-events-none" />
                <div className="absolute bottom-4 left-5 right-5 text-white pointer-events-none">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C5A059] block">
                    {isEn ? "Specialized Practice" : "Disciplina Especializada"}
                  </span>
                  <span className="font-serif text-base text-white/95">
                    {service.shortTitle} · Nordsee Capital
                  </span>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-xs space-y-6">
                <h3 className="font-serif text-xl text-[#0B192C] font-normal pb-4 border-b border-black/5">
                  {isEn ? "Core Capabilities & Scope" : "Alcance de Nuestra Intervención"}
                </h3>

                <ul className="space-y-3">
                  {service.keyCapabilities.map((cap, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-xs sm:text-sm text-[#232B3A]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] shrink-0 mt-2" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#0B192C] text-[#FAF9F5] rounded-3xl p-8 border border-white/10 space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
                  <Shield className="w-4 h-4 text-[#C5A059]" />
                  <span>{isEn ? "Methodology & Approach" : "Enfoque de Trabajo"}</span>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-[#FAF9F5]/80">
                  {service.approach.map((app, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#C5A059] font-bold">›</span>
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-white/10">
                  <Button
                    href={contactPath}
                    variant="gold"
                    size="sm"
                    className="w-full"
                  >
                    {isEn ? "Inquire About This Service" : "Consultar por este Servicio"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Navegación a otros servicios */}
      <section className="py-20 bg-[#F4F2EB] border-t border-black/5">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <Badge variant="light">
                {isEn ? "Complementary Practice" : "Exploración Complementaria"}
              </Badge>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#0B192C] font-normal tracking-tight mt-2 text-balance">
                {isEn ? "Other Practice Areas" : "Otras áreas de especialización"}
              </h2>
            </div>
            <Link
              href={basePath}
              className="text-xs font-semibold text-[#0B192C] hover:text-[#C5A059] transition-colors inline-flex items-center gap-1 py-1"
            >
              <span>{isEn ? "View all practice areas" : "Ver todas las áreas"}</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherServices.slice(0, 3).map((item) => (
              <Link
                key={item.slug}
                href={`${basePath}/${item.slug}`}
                className="group bg-white p-6 rounded-2xl border border-black/5 hover:border-[#C5A059]/40 hover:-translate-y-1 transition-all duration-300 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <span className="font-serif text-sm text-[#C5A059] block mb-2">
                    {item.id}
                  </span>
                  <h3 className="font-serif text-lg text-[#0B192C] font-normal group-hover:text-[#C5A059] transition-colors mb-2">
                    {item.shortTitle}
                  </h3>
                  <p className="text-xs text-[#5D6A7E] leading-relaxed">
                    {item.summary}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-black/5 flex items-center justify-between text-xs font-semibold text-[#0B192C]">
                  <span>{isEn ? "Learn more" : "Conocer más"}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A059]" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
