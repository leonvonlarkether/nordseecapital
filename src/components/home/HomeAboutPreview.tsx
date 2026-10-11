import React from "react";
import Link from "next/link";
import { Container } from "../ui/Container";
import { Badge } from "../ui/Badge";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function HomeAboutPreview() {
  const highlights = [
    "Sinergia directa entre finanzas patrimoniales y estructuración legal",
    "Gestión orientada a la conservación de capital y retorno ajustado por riesgo",
    "Presencia en Chile y alianzas especializadas en Estados Unidos y Portugal",
    "Atención personalizada con acceso directo al equipo socio-director",
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FAF9F5] border-b border-black/5">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Columna Textual */}
          <div className="lg:col-span-7 space-y-6">
            <Badge variant="light">Identidad y Enfoque</Badge>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0B192C] font-normal tracking-tight leading-tight">
              Un socio estratégico que integra capital, negocios y estructura jurídica.
            </h2>
            <p className="text-base sm:text-lg text-[#4B5565] leading-relaxed">
              En Nordsee Capital entendemos que la gestión patrimonial moderna no
              puede desvincularse de la realidad fiscal y regulatoria. Por ello,
              cada oportunidad de inversión —ya sea un activo inmobiliario de
              renta, un vehículo de deuda privada o una transacción de M&amp;A—
              es diseñada y supervisada de manera integral con nuestra área de Tax
              &amp; Legal.
            </p>

            <div className="pt-2 space-y-3">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-[#151B26]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/nosotros"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B192C] hover:text-[#C5A059] transition-colors group"
              >
                <span>Conocer nuestra filosofía y equipo</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Columna Visual / Editorial Callout */}
          <div className="lg:col-span-5">
            <div className="bg-[#0B192C] text-[#FAF9F5] rounded-3xl p-8 sm:p-10 border border-white/10 shadow-xl shadow-black/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#C5A059]/15 rounded-full blur-2xl pointer-events-none" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059] block mb-4">
                Declaración de Misión
              </span>

              <blockquote className="font-serif text-xl sm:text-2xl text-[#FAF9F5] font-normal leading-snug mb-6">
                “Ser un partner de excelencia en inversiones y negocios estables,
                comprometido con la disciplina técnica, el resguardo patrimonial y
                el estricto cumplimiento regulatorio.”
              </blockquote>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#FAF9F5]/70">
                <span>Nordsee Capital Management</span>
                <span className="text-[#C5A059]">Santiago · Chile</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
