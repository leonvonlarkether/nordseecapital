import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../ui/Container";
import { Badge } from "../ui/Badge";
import { ScrollReveal } from "../ui/ScrollReveal";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function HomeAboutPreview() {
  const highlights = [
    "Sinergia directa entre finanzas patrimoniales y estructuración legal",
    "Gestión orientada a la conservación de capital y retorno ajustado por riesgo",
    "Presencia en Chile y alianzas especializadas en Estados Unidos y Portugal",
    "Atención personalizada con acceso directo al equipo socio-director",
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#FAF9F5] border-b border-black/5 relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Columna Visual / Editorial Diptych */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <ScrollReveal direction="left" delay={150}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-3xl overflow-hidden border border-black/10 shadow-2xl shadow-[#0B192C]/10 aspect-[4/5] group">
                  <Image
                    src="/images/about/atrium-corporate.jpg"
                    alt="Atrio arquitectónico corporativo — Imagen conceptual institucional"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/90 via-[#0B192C]/30 to-transparent pointer-events-none" />

                  {/* Cita institucional sobrepuesta en la base de la imagen */}
                  <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C5A059] block mb-2">
                      Misión y Propósito
                    </span>
                    <blockquote className="font-serif text-lg leading-snug text-white/95 mb-3">
                      “Ser un partner de excelencia en inversiones y negocios estables,
                      comprometido con la disciplina técnica y el resguardo patrimonial.”
                    </blockquote>
                    <div className="pt-3 border-t border-white/15 flex items-center justify-between text-[11px] text-white/60">
                      <span>Disciplina Analítica</span>
                      <span className="text-[#C5A059]">Gobernanza Rigurosa</span>
                    </div>
                  </div>
                </div>

                {/* Sello de confianza lateral decorativo */}
                <div className="hidden sm:block absolute -top-4 -right-4 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl border border-black/5 shadow-lg text-xs font-semibold text-[#0B192C]">
                  <span className="text-[#C5A059] mr-1">✦</span> Criterio Institucional
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Columna Textual */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <ScrollReveal direction="up" delay={100}>
              <Badge variant="light">Identidad y Enfoque</Badge>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0B192C] font-normal tracking-tight leading-tight mt-3">
                Un socio estratégico que integra capital, negocios y estructura jurídica.
              </h2>
              <p className="text-base sm:text-lg text-[#4B5565] leading-relaxed mt-4">
                En Nordsee Capital entendemos que la gestión patrimonial moderna no
                puede desvincularse de la realidad fiscal y regulatoria. Por ello,
                cada oportunidad de inversión —ya sea un activo inmobiliario de
                renta, un vehículo de deuda privada o una transacción de M&amp;A—
                es diseñada y supervisada de manera integral con nuestra área de Tax
                &amp; Legal.
              </p>
            </ScrollReveal>

            <div className="pt-2 space-y-3">
              {highlights.map((item, idx) => (
                <ScrollReveal key={idx} delay={200 + idx * 80} direction="up">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-[#151B26]">
                      {item}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={550} direction="up" className="pt-4">
              <Link
                href="/nosotros"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B192C] hover:text-[#C5A059] transition-colors group"
              >
                <span>Conocer nuestra filosofía y equipo</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
