import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../ui/Container";
import { Badge } from "../ui/Badge";
import { ScrollReveal } from "../ui/ScrollReveal";
import { siteConfig } from "@/content/site";
import { siteConfigEn } from "@/content/en/site";
import { MapPin, ArrowUpRight, ShieldCheck } from "lucide-react";

export function HomeInternationalPresence({ locale = "es" }: { locale?: "es" | "en" }) {
  const isEn = locale === "en";
  const config = isEn ? siteConfigEn : siteConfig;

  return (
    <section className="py-24 sm:py-32 bg-[#F4F2EB] border-b border-black/5" id={isEn ? "geographic-reach" : "alcance-geografico"}>
      <Container size="wide">
        {/* 1. Cabecera Editorial Superior + Ficha Institucional de Sedes en Chile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-14 sm:mb-16">
          <ScrollReveal direction="left" delay={50} className="lg:col-span-7 space-y-4">
            <Badge variant="light">{isEn ? "Geographic Reach" : "Alcance Geográfico"}</Badge>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0B192C] font-normal tracking-tight leading-[1.12] text-balance">
              {isEn
                ? "Operational presence and alliances across three strategic markets."
                : "Presencia operativa y alianzas en tres mercados estratégicos."}
            </h2>
            <p className="text-base sm:text-lg text-[#4B5565] leading-relaxed max-w-2xl font-normal">
              {isEn
                ? "Our international structure connects family and corporate capital with tangible opportunities and regulated vehicles in jurisdictions with high legal certainty."
                : "Nuestra estructura internacional conecta el capital de familias e inversionistas con oportunidades tangibles y vehículos regulados en jurisdicciones de alta seguridad jurídica."}
            </p>
          </ScrollReveal>

          {/* Ficha de Sedes Corporativas en Chile */}
          <ScrollReveal direction="right" delay={100} className="lg:col-span-5">
            <div className="p-6 bg-white rounded-2xl border border-black/8 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-black/5 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C5A059]" aria-hidden="true" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0B192C]">
                    {isEn ? "Corporate Offices in Chile" : "Sedes Corporativas en Chile"}
                  </span>
                </div>
                <span className="text-[10px] font-semibold text-[#526071] tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-[#F4F2EB] border border-black/5">
                  {isEn ? "Direct Access" : "Atención Directa"}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {config.offices.map((office) => (
                  <div
                    key={office.city}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAF9F5] border border-black/4"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" aria-hidden="true" />
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-[#0B192C]">
                        {office.city}
                      </div>
                      <div className="text-[10px] text-[#738094] truncate">
                        {office.role}
                      </div>
                      <p className="text-[11px] text-[#526071] mt-0.5 leading-snug line-clamp-2">
                        {office.address}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-black/5 flex items-center justify-between text-xs text-[#526071]">
                <span className="flex items-center gap-1.5 text-[11px]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" aria-hidden="true" />
                  {isEn ? "Cross-border fiduciary governance" : "Gobernanza fiduciaria transfronteriza"}
                </span>
                <Link
                  href={isEn ? "/en/contact" : "/contacto"}
                  className="text-[#C5A059] hover:underline font-semibold text-xs inline-flex items-center gap-0.5 focus-visible:ring-1 focus-visible:ring-[#C5A059] rounded-xs"
                >
                  {isEn ? "Schedule meeting" : "Agendar reunión"} <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* 2. Grilla Principal de los 3 Mercados Internacionales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {config.internationalReach.map((item, index) => (
            <ScrollReveal
              key={item.region}
              delay={index * 120}
              direction="up"
              className="h-full flex"
            >
              <div className="bg-white rounded-2xl p-7 sm:p-8 border border-black/8 shadow-sm hover:shadow-xl hover:border-[#C5A059]/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between w-full group relative overflow-hidden">
                {/* Acento dorado superior en hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Cabecera de la tarjeta: Banderas circulares + Badge de jurisdicción con amplio espacio */}
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <div className="flex items-center">
                      {item.flags && item.flags.length > 1 ? (
                        <div className="flex items-center -space-x-3.5">
                          {item.flags.map((flag, fIdx) => (
                            <div
                              key={flag.src}
                              className={`relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md bg-white transition-transform duration-300 group-hover:scale-105 ${
                                fIdx === 0 ? "z-10" : "z-0"
                              }`}
                            >
                              <Image
                                src={flag.src}
                                alt={flag.alt}
                                width={48}
                                height={48}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      ) : (
                        item.flags && item.flags[0] && (
                          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md bg-white transition-transform duration-300 group-hover:scale-105">
                            <Image
                              src={item.flags[0].src}
                              alt={item.flags[0].alt}
                              width={48}
                              height={48}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )
                      )}
                    </div>

                    {item.badge && (
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#526071] px-3 py-1 rounded-full bg-[#FAF9F5] border border-black/5 shrink-0">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Título de Región y Subtítulo: Altura garantizada para alineación vertical perfecta */}
                  <div className="min-h-[4rem] flex flex-col justify-start mb-3">
                    <h3 className="font-serif text-2xl text-[#0B192C] font-normal tracking-tight group-hover:text-[#C5A059] transition-colors leading-snug">
                      {item.region}
                    </h3>
                    {item.subregion && (
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A059] mt-1 block">
                        {item.subregion}
                      </span>
                    )}
                  </div>

                  {/* Descripción: Altura controlada para emparejar listas de viñetas */}
                  <p className="text-sm text-[#4B5565] leading-relaxed mb-6 min-h-[4.75rem]">
                    {item.description}
                  </p>
                </div>

                {/* Bloque Inferior: Capacidades clave y enlace de acción con anclaje alineado */}
                <div className="pt-5 border-t border-black/5 mt-auto space-y-4">
                  {item.highlights && item.highlights.length > 0 && (
                    <ul
                      className="space-y-2"
                      aria-label={`Capacidades en ${item.region}`}
                    >
                      {item.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-center gap-2.5 text-xs text-[#232B3A] font-medium"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full bg-[#C5A059] shrink-0"
                            aria-hidden="true"
                          />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.href && (
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#0B192C] group-hover:text-[#C5A059] transition-colors pt-3 border-t border-black/5 w-full justify-between focus-visible:ring-1 focus-visible:ring-[#C5A059] rounded-xs"
                    >
                      <span>{item.ctaText}</span>
                      <ArrowUpRight
                        className="w-3.5 h-3.5 text-[#C5A059] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </Link>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
