import React from "react";
import { Container } from "../ui/Container";

export function HomeValueStrip() {
  const values = [
    {
      num: "01",
      title: "Visión Global",
      desc: "Conexión de oportunidades cross-border en mercados clave.",
    },
    {
      num: "02",
      title: "Criterio Profesional",
      desc: "Arquitectura abierta, independencia y debida diligencia.",
    },
    {
      num: "03",
      title: "Respaldo Legal Integral",
      desc: "Planificación tributaria y corporativa en cada operación.",
    },
  ];

  return (
    <section className="bg-[#0B192C] text-[#FAF9F5] py-8 sm:py-10 border-y border-white/10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-center">
          {values.map((v) => (
            <div key={v.num} className="flex items-center gap-4">
              <span className="font-serif text-2xl sm:text-3xl text-[#C5A059] font-normal shrink-0">
                {v.num}
              </span>
              <div>
                <h3 className="text-sm font-semibold text-[#FAF9F5] uppercase tracking-wider">
                  {v.title}
                </h3>
                <p className="text-xs text-[#FAF9F5]/70 mt-0.5">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
