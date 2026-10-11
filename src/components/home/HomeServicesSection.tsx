import React from "react";
import Link from "next/link";
import { Container } from "../ui/Container";
import { Badge } from "../ui/Badge";
import { services } from "@/content/services";
import { ArrowUpRight } from "lucide-react";

export function HomeServicesSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#FAF9F5]" id="servicios">
      <Container>
        <div className="max-w-2xl mb-14 sm:mb-20">
          <Badge variant="gold">Áreas de Especialización</Badge>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0B192C] font-normal tracking-tight mt-4 leading-tight">
            Estructuras sólidas para cada dimensión del capital.
          </h2>
          <p className="text-base sm:text-lg text-[#5D6A7E] mt-4">
            Un abanico complementario de soluciones de inversión y asesoría
            estratégica, diseñado para mitigar riesgos y maximizar el valor
            patrimonial a largo plazo.
          </p>
        </div>

        {/* Grilla 3x2 de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <article
              key={service.slug}
              className="group bg-white rounded-2xl p-7 sm:p-8 border border-black/5 hover:border-[#C5A059]/40 shadow-xs hover:shadow-xl hover:shadow-[#0B192C]/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-xl text-[#C5A059] font-normal">
                    {service.id}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#738094]">
                    {service.geographicCoverage || "Global"}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-[#0B192C] font-normal group-hover:text-[#102540] transition-colors leading-snug mb-3">
                  {service.shortTitle}
                </h3>

                <p className="text-sm text-[#4B5565] leading-relaxed mb-6">
                  {service.summary}
                </p>

                <div className="space-y-2 pt-4 border-t border-black/5 mb-6">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#738094] block mb-2">
                    Alcance de Intervención:
                  </span>
                  {service.keyCapabilities.slice(0, 3).map((cap, i) => (
                    <div
                      key={i}
                      className="text-xs text-[#232B3A] flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] shrink-0" />
                      <span className="line-clamp-1">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-black/5">
                <Link
                  href={`/servicios/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B192C] group-hover:text-[#C5A059] transition-colors"
                >
                  <span>Ver detalle del servicio</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
