"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../ui/Button";
import { ArrowRight, ChevronDown } from "lucide-react";

export function HomeHero({ locale = "es" }: { locale?: "es" | "en" }) {
  const isEn = locale === "en";
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[90svh] lg:min-h-[94svh] xl:min-h-screen flex flex-col justify-between overflow-hidden bg-[#07101C]">
      {/* 1. Fondo Cinematográfico Panorámico en Video (Video Limpio y Nítido) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/home/hero-video-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover object-[center_65%] pointer-events-none motion-reduce:hidden"
        >
          <source src="/video/caballos2.mp4" type="video/mp4" />
        </video>
        <div
          className="hidden motion-reduce:block absolute inset-0 bg-cover bg-[center_65%]"
          style={{ backgroundImage: "url('/images/home/hero-video-poster.jpg')" }}
          aria-hidden="true"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent w-full md:w-[65%] lg:w-[50%] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/50 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* 2. Cuerpo Editorial Principal */}
      <div className="relative z-10 pt-28 sm:pt-32 md:pt-36 pb-8 sm:pb-12 my-auto">
        <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20">
          <div className="max-w-2xl lg:max-w-3xl xl:max-w-3xl space-y-5 sm:space-y-6">
            {/* Etiqueta editorial discreta */}
            <div
              className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-[#FAF9F5] shadow-sm transition-[opacity,transform] duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-[350ms] motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" aria-hidden="true" />
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-[#FAF9F5]">
                NORDSEE CAPITAL · PRIVATE WEALTH &amp; INVESTMENT STRATEGY
              </span>
            </div>

            {/* Titular monumental editorial */}
            <h1
              className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-normal tracking-tight text-[#FAF9F5] leading-[1.08] drop-shadow-md text-balance transition-[opacity,transform] duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-[650ms] motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {isEn ? (
                <>
                  Wealth requires vision.
                  <br />
                  <span className="italic font-serif text-[#C5A059]">
                    The future, structure.
                  </span>
                </>
              ) : (
                <>
                  El patrimonio exige visión.
                  <br />
                  <span className="italic font-serif text-[#C5A059]">
                    El futuro, estructura.
                  </span>
                </>
              )}
            </h1>

            {/* Subtítulo editorial */}
            <p
              className={`text-sm sm:text-base md:text-lg text-[#FAF9F5]/90 leading-relaxed font-normal max-w-xl drop-shadow-sm transition-[opacity,transform] duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-[950ms] motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {isEn
                ? "We integrate wealth strategy, real estate investment, and legal structuring for families, corporations, and long-term investors."
                : "Integramos estrategia patrimonial, inversión inmobiliaria y estructuración legal para familias, empresas e inversionistas con visión de largo plazo."}
            </p>

            {/* Acciones principales integradas */}
            <div
              className={`flex flex-wrap items-center gap-4 pt-1 transition-[opacity,transform] duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-[1250ms] motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <Button href={isEn ? "/en/contact" : "/contacto"} variant="gold" size="md">
                <span>{isEn ? "Discuss your wealth strategy" : "Conversemos sobre su patrimonio"}</span>
                <ArrowRight className="w-4 h-4 ml-1.5" aria-hidden="true" />
              </Button>
              <Button href={isEn ? "/en/services" : "/servicios"} variant="outline" size="md">
                {isEn ? "Explore our practice areas" : "Explorar nuestras áreas"}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Zócalo Institucional Integrado en la Base del Hero */}
      <div
        className={`relative z-10 border-t border-white/15 bg-black/40 backdrop-blur-md py-3.5 sm:py-4 transition-all duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-[1550ms] motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 flex items-center justify-between text-xs text-[#FAF9F5]/80">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            <span className="font-medium tracking-wide uppercase text-[11px] text-[#FAF9F5]">
              {isEn ? "Fiduciary Preservation · International Perspective" : "Preservación Fiduciaria · Perspectiva Internacional"}
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-[#FAF9F5]/75 text-[11px] tracking-wider uppercase font-medium">
            <span className="hover:text-white transition-colors">
              {isEn ? "01 / Wealth Strategy" : "01 / Estrategia Patrimonial"}
            </span>
            <span className="text-white/25">·</span>
            <span className="hover:text-white transition-colors">
              {isEn ? "02 / Real Estate Investment" : "02 / Inversión Inmobiliaria"}
            </span>
            <span className="text-white/25">·</span>
            <span className="hover:text-white transition-colors">
              {isEn ? "03 / Tax & Legal Rigor" : "03 / Rigor Tributario & Legal"}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[#FAF9F5]/75 hover:text-white transition-colors">
            <span className="text-[10px] sm:text-[11px] tracking-widest uppercase font-medium">
              {isEn ? "Scroll" : "Desplazar"}
            </span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce text-[#C5A059]" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
