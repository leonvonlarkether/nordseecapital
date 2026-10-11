import React from "react";
import { Container } from "../ui/Container";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { ArrowRight, ShieldCheck, Globe, Building2 } from "lucide-react";

export function HomeHero() {
  return (
    <section className="relative pt-36 sm:pt-44 md:pt-48 pb-20 sm:pb-28 overflow-hidden bg-gradient-to-b from-[#F4F2EB] via-[#FAF9F5] to-[#FAF9F5]">
      {/* Retícula arquitectónica sutil de fondo */}
      <div className="absolute inset-0 bg-grid-subtle opacity-70 pointer-events-none" />

      {/* Gradientes radiales suaves en esquinas */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-[#C5A059]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 -ml-40 w-96 h-96 rounded-full bg-[#0B192C]/5 blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-4xl space-y-6 sm:space-y-8">
          <Badge variant="gold">
            Inversión Patrimonial · Real Estate · Tax &amp; Legal
          </Badge>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-[#0B192C] leading-[1.08]">
            Estrategia patrimonial global con{" "}
            <em className="italic not-italic font-serif relative inline-block text-[#0B192C]">
              rigor legal
              <span className="absolute bottom-1 left-0 right-0 h-2 bg-[#C5A059]/20 -z-10 -rotate-1 rounded-sm" />
            </em>{" "}
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

          {/* Bloque de pilares institucionales cualitativos */}
          <div className="pt-10 sm:pt-14 border-t border-black/10 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-white border border-black/5 flex items-center justify-center shrink-0 shadow-xs text-[#0B192C]">
                <Globe className="w-5 h-5 text-[#C5A059]" />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-[#0B192C]">
                  Alcance Internacional
                </h4>
                <p className="text-xs text-[#5D6A7E] mt-0.5 leading-normal">
                  Operaciones y alianzas en Chile, EE.&nbsp;UU. y Portugal.
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
                  Inversión en renta inmobiliaria y proyectos consolidados.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-white border border-black/5 flex items-center justify-center shrink-0 shadow-xs text-[#0B192C]">
                <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-[#0B192C]">
                  Integración Legal
                </h4>
                <p className="text-xs text-[#5D6A7E] mt-0.5 leading-normal">
                  Evaluación y blindaje tributario en cada transacción.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
