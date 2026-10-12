import React from "react";
import { Container } from "../ui/Container";
import { Badge } from "../ui/Badge";
import { ScrollReveal } from "../ui/ScrollReveal";
import { Shield, Search, TrendingUp } from "lucide-react";

export function HomeApproachSection() {
  const steps = [
    {
      num: "01",
      icon: Search,
      title: "Parametrización y Due Diligence",
      desc: "Evaluamos a fondo el negocio subyacente, los títulos de dominio, las contingencias tributarias y la resiliencia de los flujos antes de comprometer capital.",
    },
    {
      num: "02",
      icon: Shield,
      title: "Estructuración y Blindaje Legal",
      desc: "Diseñamos contratos, garantías ejecutables y cláusulas de protección (covenants) integrando la normativa de cada jurisdicción involucrada.",
    },
    {
      num: "03",
      icon: TrendingUp,
      title: "Monitoreo Activo y Creación de Valor",
      desc: "Acompañamos al cliente de forma recurrente durante la vida de la inversión, controlando el desempeño, la liquidez y las opciones de desinversión.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#0B192C] text-[#FAF9F5] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark opacity-60 pointer-events-none" />

      <Container className="relative z-10">
        <ScrollReveal direction="up" delay={50} className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <Badge variant="dark">Filosofía de Trabajo</Badge>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF9F5] font-normal tracking-tight mt-4 leading-tight">
            Gestión disciplinada del riesgo y preservación de capital.
          </h2>
          <p className="text-base sm:text-lg text-[#F8F9FA]/70 mt-4 leading-relaxed">
            No creemos en soluciones inmediatas ni en apuestas especulativas. Cada
            estrategia se construye sobre fundamentos analíticos, garantías
            reales y estricto apego regulatorio.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <ScrollReveal
                key={step.num}
                delay={index * 130}
                direction="up"
                className="h-full"
              >
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[#C5A059]/40 transition-all duration-300 group h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <span className="font-serif text-3xl text-[#C5A059] font-normal">
                        {step.num}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#C5A059] group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="font-serif text-xl text-[#FAF9F5] font-normal mb-3">
                      {step.title}
                    </h3>

                    <p className="text-sm text-[#F8F9FA]/70 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
