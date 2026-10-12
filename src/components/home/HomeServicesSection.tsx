import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../ui/Container";
import { Badge } from "../ui/Badge";
import { ScrollReveal } from "../ui/ScrollReveal";
import { services } from "@/content/services";
import { ArrowUpRight } from "lucide-react";

// Mapeo de fotografía arquitectónica editorial curada por área
const serviceImages: Record<string, string> = {
  "real-estate": "/images/services/real-estate.jpg",
  "wealth-management": "/images/services/wealth-management.jpg",
  "deuda-privada": "/images/services/deuda-privada.jpg",
  ma: "/images/services/ma.jpg",
  "tax-legal": "/images/services/tax-legal.jpg",
  "golden-visa-portugal": "/images/services/golden-visa.jpg",
};

export function HomeServicesSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#FAF9F5] scroll-mt-24" id="servicios">
      <Container>
        <ScrollReveal direction="up" delay={50} className="max-w-3xl mb-14 sm:mb-20">
          <Badge variant="gold">Áreas de Especialización</Badge>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0B192C] font-normal tracking-tight mt-4 leading-tight text-balance">
            Estructuras sólidas para cada dimensión del capital.
          </h2>
          <p className="text-base sm:text-lg text-[#5D6A7E] mt-4">
            Un abanico complementario de soluciones de inversión y asesoría
            estratégica, diseñado para mitigar riesgos y maximizar el valor
            patrimonial a largo plazo.
          </p>
        </ScrollReveal>

        {/* Grilla 3x2 de servicios con fotografía arquitectónica animada en cascada */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const imageSrc = serviceImages[service.slug] || "/images/home/hero-nordsee.jpg";

            return (
              <ScrollReveal
                key={service.slug}
                delay={index * 160}
                direction="up"
                className="h-full"
              >
                <article className="relative group bg-white rounded-3xl overflow-hidden border border-black/5 hover:border-[#C5A059]/50 shadow-xs hover:shadow-2xl hover:shadow-[#0B192C]/8 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between h-full">
                  <div>
                    {/* Ventana fotográfica arquitectónica */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#0B192C]/5">
                      <Image
                        src={imageSrc}
                        alt={`Fotografía conceptual de arquitectura para el área de ${service.title}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                      {/* Metadatos sobre la imagen */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white pointer-events-none">
                        <span className="font-serif text-sm font-semibold tracking-wider px-2.5 py-1 rounded-full bg-[#0B192C]/80 backdrop-blur-sm text-[#C5A059] border border-[#C5A059]/30">
                          {service.id}
                        </span>
                        <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[#0B192C]">
                          {service.geographicCoverage || "Global"}
                        </span>
                      </div>
                    </div>

                    {/* Contenido textual */}
                    <div className="p-7 sm:p-8">
                      <h3 className="font-serif text-2xl text-[#0B192C] font-normal group-hover:text-[#C5A059] transition-colors leading-snug mb-3">
                        {service.shortTitle}
                      </h3>

                      <p className="text-sm text-[#4B5565] leading-relaxed mb-6">
                        {service.summary}
                      </p>

                      <div className="space-y-2 pt-4 border-t border-black/5 mb-2">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-[#738094] block mb-2">
                          Alcance de Intervención:
                        </span>
                        {service.keyCapabilities.slice(0, 3).map((cap, i) => (
                          <div
                            key={i}
                            className="text-xs text-[#232B3A] flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] shrink-0 mt-1" />
                            <span className="leading-snug">{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="px-7 sm:px-8 pb-7 sm:pb-8 pt-4 border-t border-black/5 bg-[#FAF9F5]/40 flex items-center justify-between">
                    <Link
                      href={`/servicios/${service.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-[#0B192C] group-hover:text-[#C5A059] transition-colors after:absolute after:inset-0 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:rounded-3xl"
                    >
                      <span>Ver detalle del servicio</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#C5A059]" aria-hidden="true" />
                    </Link>
                    <span className="text-[11px] text-[#738094] group-hover:text-[#0B192C] transition-colors">
                      Nordsee
                    </span>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
