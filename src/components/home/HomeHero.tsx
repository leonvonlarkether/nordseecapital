import React from "react";
import Image from "next/image";
import { Container } from "../ui/Container";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { ArrowRight, ShieldCheck, Globe, Building2 } from "lucide-react";

export function HomeHero() {
  return (
    <section className="relative pt-32 sm:pt-40 md:pt-44 pb-20 sm:pb-28 overflow-hidden bg-gradient-to-b from-[#F4F2EB] via-[#FAF9F5] to-[#FAF9F5]">
      {/* Retícula arquitectónica sutil de fondo */}
      <div className="absolute inset-0 bg-grid-subtle opacity-60 pointer-events-none" />

      {/* Gradientes radiales suaves en esquinas */}
      <div className="absolute top-0 right-1/4 -mt-32 w-96 h-96 rounded-full bg-[#C5A059]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 -ml-40 w-96 h-96 rounded-full bg-[#0B192C]/5 blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Columna Principal Editorial */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2">
              <Badge variant="gold">
                Inversión Patrimonial · Real Estate · Tax &amp; Legal
              </Badge>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-normal tracking-tight text-[#0B192C] leading-[1.08]">
              Estrategia patrimonial global con{" "}
              <span className="italic not-italic font-serif relative inline-block text-[#0B192C]">
                rigor legal
                <span className="absolute bottom-1.5 left-0 right-0 h-2 bg-[#C5A059]/25 -z-10 -rotate-1 rounded-sm" />
              </span>{" "}
              y criterio de largo plazo.
            </h1>

            <p className="text-lg sm:text-xl text-[#4B5565] leading-relaxed max-w-2xl font-normal">
              Nordsee Capital actúa como socio estratégico para familias,
              empresas e inversionistas: combinamos gestión de inversiones,
              desarrollo inmobiliario de alto estándar y estructuración tributaria
              transfronteriza en Chile, Estados Unidos y Portugal.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href="/contacto" variant="primary" size="lg">
                <span>Agendar Reunión</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <Button href="/servicios" variant="ghost" size="lg">
                Conocer Nuestras Áreas
              </Button>
            </div>

            {/* Bloque de pilares institucionales */}
            <div className="pt-8 sm:pt-12 border-t border-black/10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white border border-black/5 flex items-center justify-center shrink-0 shadow-xs text-[#0B192C]">
                  <Globe className="w-5 h-5 text-[#C5A059]" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[#0B192C]">
                    Alcance Global
                  </h4>
                  <p className="text-xs text-[#5D6A7E] mt-0.5 leading-normal">
                    Chile, Estados Unidos y Portugal.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white border border-black/5 flex items-center justify-center shrink-0 shadow-xs text-[#0B192C]">
                  <Building2 className="w-5 h-5 text-[#C5A059]" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[#0B192C]">
                    Activos Prime
                  </h4>
                  <p className="text-xs text-[#5D6A7E] mt-0.5 leading-normal">
                    Inversión en renta e infraestructura consolidada.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white border border-black/5 flex items-center justify-center shrink-0 shadow-xs text-[#0B192C]">
                  <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[#0B192C]">
                    Rigor Jurídico
                  </h4>
                  <p className="text-xs text-[#5D6A7E] mt-0.5 leading-normal">
                    Blindaje tributario y societario integral.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Visual Monumental / Ventana Arquitectónica */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Marco fotográfico con bisel sutil */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#0B192C]/15 border border-black/10 group aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5]">
                <Image
                  src="/images/home/hero-nordsee.jpg"
                  alt="Arquitectura corporativa institucional de Nordsee Capital"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                />
                {/* Degradé de luz institucional y pie editorial */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/85 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C5A059]">
                      Visión Institucional
                    </span>
                  </div>
                  <p className="font-serif text-lg leading-snug text-white/95">
                    Solidez, disciplina analítica y preservación de valor en cada activo.
                  </p>
                  <p className="text-[11px] text-white/60 mt-1">
                    Santiago de Chile · Enfoque Atlántico
                  </p>
                </div>
              </div>

              {/* Tarjeta flotante decorativa de solidez */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-black/5 shadow-xl items-center gap-3.5 z-20 max-w-xs">
                <div className="w-10 h-10 rounded-xl bg-[#0B192C] flex items-center justify-center shrink-0 text-[#C5A059]">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#0B192C] block">
                    Gobierno Corporativo
                  </span>
                  <span className="text-[11px] text-[#5D6A7E]">
                    Alineación total de intereses con el inversionista
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
