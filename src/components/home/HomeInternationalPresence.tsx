import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../ui/Container";
import { Badge } from "../ui/Badge";
import { ScrollReveal } from "../ui/ScrollReveal";
import { siteConfig } from "@/content/site";
import { MapPin, ArrowUpRight, ShieldCheck } from "lucide-react";

export function HomeInternationalPresence() {
  return (
    <section className="py-24 sm:py-32 bg-[#F4F2EB] border-b border-black/5">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Columna Izquierda: Introducción y Sedes Corporativas */}
          <ScrollReveal direction="left" delay={50} className="lg:col-span-5 space-y-6">
            <Badge variant="light">Alcance Geográfico</Badge>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0B192C] font-normal tracking-tight leading-[1.12] text-balance">
              Presencia operativa y alianzas en tres mercados estratégicos.
            </h2>
            <p className="text-base sm:text-lg text-[#4B5565] leading-relaxed font-normal">
              Nuestra estructura internacional conecta el capital de familias e
              inversionistas con oportunidades tangibles y vehículos regulados en
              jurisdicciones de alta seguridad jurídica.
            </p>

            {/* Ficha institucional de sedes corporativas en Chile */}
            <div className="p-6 bg-white rounded-2xl border border-black/8 shadow-sm space-y-4 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-black/5 pb-3.5">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#C5A059]" aria-hidden="true" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0B192C]">
                    Sedes Corporativas en Chile
                  </span>
                </div>
                <span className="text-[10px] font-semibold text-[#526071] tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-[#F4F2EB] border border-black/5">
                  Atención Directa
                </span>
              </div>

              <div className="space-y-3.5">
                {siteConfig.offices.map((office) => (
                  <div key={office.city} className="flex items-start gap-3 group">
                    <div className="w-8 h-8 rounded-xl bg-[#FAF9F5] border border-black/5 text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#0B192C] group-hover:text-white transition-colors duration-200">
                      <MapPin className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-[#0B192C]">
                          {office.city}
                        </span>
                        <span className="text-[11px] text-[#738094] font-medium">
                          · {office.role}
                        </span>
                      </div>
                      <p className="text-xs text-[#526071] mt-0.5 leading-relaxed">
                        {office.address}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-black/5 flex items-center justify-between text-xs text-[#526071]">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" aria-hidden="true" />
                  Gobernanza fiduciaria
                </span>
                <Link
                  href="/contacto"
                  className="text-[#C5A059] hover:underline font-semibold inline-flex items-center gap-0.5"
                >
                  Agendar reunión <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Columna Derecha: Tarjetas de Mercados con Banderas Circulares Oficiales */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {siteConfig.internationalReach.map((item, index) => (
              <ScrollReveal
                key={item.region}
                delay={index * 120}
                direction="up"
                className="h-full"
              >
                <div className="bg-white rounded-2xl p-6 sm:p-7 border border-black/8 shadow-sm hover:shadow-xl hover:border-[#C5A059]/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full group relative overflow-hidden">
                  {/* Acento superior sutil al hacer hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    {/* Cabecera de tarjeta: Banderas circulares + Tag de jurisdicción */}
                    <div className="flex items-start justify-between gap-2 mb-5">
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
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-[#526071] px-2.5 py-1 rounded-full bg-[#FAF9F5] border border-black/5 whitespace-nowrap">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    {/* Nombre del mercado y sub-región */}
                    <h3 className="font-serif text-xl sm:text-2xl text-[#0B192C] font-normal tracking-tight group-hover:text-[#C5A059] transition-colors mb-1">
                      {item.region}
                    </h3>

                    {item.subregion && (
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C5A059] block mb-3">
                        {item.subregion}
                      </span>
                    )}

                    {/* Descripción */}
                    <p className="text-xs sm:text-[13px] text-[#4B5565] leading-relaxed mb-5">
                      {item.description}
                    </p>
                  </div>

                  {/* Bloque inferior: Puntos clave y enlace de acción */}
                  <div className="pt-4 border-t border-black/5 mt-auto space-y-3">
                    {item.highlights && item.highlights.length > 0 && (
                      <ul
                        className="space-y-1.5"
                        aria-label={`Capacidades en ${item.region}`}
                      >
                        {item.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-center gap-2 text-[11px] text-[#232B3A] font-medium"
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full bg-[#C5A059] shrink-0"
                              aria-hidden="true"
                            />
                            <span className="truncate">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {item.href && (
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#0B192C] group-hover:text-[#C5A059] transition-colors pt-2.5 border-t border-black/5 w-full justify-between focus-visible:ring-1 focus-visible:ring-[#C5A059] rounded-xs"
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
        </div>
      </Container>
    </section>
  );
}
