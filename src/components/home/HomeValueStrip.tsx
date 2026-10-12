import React from "react";
import { Container } from "../ui/Container";

export function HomeValueStrip() {
  const values = [
    {
      num: "01",
      title: "Perspectiva Global",
      desc: "Originación y análisis de activos en Santiago, EE.UU. y la Península Ibérica con criterio transfronterizo.",
    },
    {
      num: "02",
      title: "Independencia Fiduciaria",
      desc: "Alineación estricta con el interés familiar y corporativo, sin presiones de colocación de producto.",
    },
    {
      num: "03",
      title: "Arquitectura Jurídica",
      desc: "Cada decisión de inversión se concibe desde su estructuración societaria, tributaria y sucesoria.",
    },
  ];

  return (
    <section className="bg-[#0B192C] text-[#FAF9F5] py-10 sm:py-12 border-y border-white/10 relative z-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {values.map((v, index) => (
            <div
              key={v.num}
              className={`flex items-start gap-4 sm:gap-5 ${
                index !== 0 ? "md:border-l md:border-white/10 md:pl-8 lg:pl-10" : ""
              }`}
            >
              <span className="font-serif text-2xl sm:text-3xl text-[#C5A059] font-normal shrink-0 leading-none mt-0.5">
                {v.num}
              </span>
              <div className="space-y-1">
                <h3 className="text-xs sm:text-sm font-semibold text-[#FAF9F5] uppercase tracking-wider">
                  {v.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-[#FAF9F5]/70 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
