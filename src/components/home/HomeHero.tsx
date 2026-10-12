"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../ui/Button";
import { ArrowRight, ChevronDown } from "lucide-react";

export function HomeHero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Breve pausa deliberada para que el usuario contemple primero la escena del video
    // y luego experimente la aparición pausada y solemne de la tipografía.
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[100svh] sm:min-h-[92svh] lg:min-h-[94svh] xl:min-h-screen flex flex-col justify-between overflow-hidden bg-[#07101C]">
      {/* 1. Fondo Cinematográfico Panorámico en Video (Video Limpio y Nítido) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/home/hero-video-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover object-[center_72%] sm:object-[center_65%] pointer-events-none motion-reduce:hidden"
        >
          <source src="/video/caballos2.mp4" type="video/mp4" />
        </video>
        {/* Fallback accesible para usuarios con reducción de movimiento activada en el SO */}
        <div
          className="hidden motion-reduce:block absolute inset-0 bg-cover bg-[center_72%] sm:bg-[center_65%]"
          style={{ backgroundImage: "url('/images/home/hero-video-poster.jpg')" }}
          aria-hidden="true"
        />

        {/* Gradiente sutil y natural:
            - En móvil (portrait): viñeta vertical para lectura perfecta del texto en el tercio superior
              manteniendo el galope de los caballos despejado y nítido en el tercio inferior.
            - En desktop (landscape): gradiente lateral izquierdo que acompaña la tipografía editorial.
        */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/25 to-black/80 md:hidden pointer-events-none" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent w-full md:w-[65%] lg:w-[50%] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-28 sm:h-32 bg-gradient-to-b from-black/50 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-28 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* 2. Cuerpo Editorial Principal (Optimizado verticalmente en móvil para no invadir los caballos) */}
      <div className="relative z-10 pt-20 sm:pt-32 md:pt-36 pb-6 sm:pb-12 my-auto lg:my-auto">
        <div className="w-full max-w-[1800px] mx-auto px-5 sm:px-10 md:px-14 lg:px-16 xl:px-20">
          <div className="max-w-2xl lg:max-w-3xl xl:max-w-3xl space-y-4 sm:space-y-6">
            {/* Etiqueta editorial discreta y adaptable */}
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-[#FAF9F5] shadow-sm transition-[opacity,transform] duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-[350ms] motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] shrink-0" aria-hidden="true" />
              <span className="text-[9px] sm:text-[11px] font-semibold uppercase tracking-[0.14em] sm:tracking-[0.22em] text-[#FAF9F5]">
                <span className="sm:hidden">Nordsee Capital · Private Wealth</span>
                <span className="hidden sm:inline">Nordsee Capital · Private Wealth &amp; Investment Strategy</span>
              </span>
            </div>

            {/* Titular monumental editorial en exactamente 2 líneas deliberadas */}
            <h1
              className={`font-serif text-[1.85rem] sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-normal tracking-tight text-[#FAF9F5] leading-[1.12] sm:leading-[1.08] drop-shadow-md text-balance transition-[opacity,transform] duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-[650ms] motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              El patrimonio exige visión.
              <br />
              <span className="italic font-serif text-[#C5A059]">
                El futuro, estructura.
              </span>
            </h1>

            {/* Subtítulo editorial con alto contraste y lectura ágil */}
            <p
              className={`text-[13.5px] sm:text-base md:text-lg text-[#FAF9F5]/90 leading-relaxed font-normal max-w-xl drop-shadow-sm transition-[opacity,transform] duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-[950ms] motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Integramos estrategia patrimonial, inversión inmobiliaria y
              estructuración legal para familias, empresas e inversionistas con
              visión de largo plazo.
            </p>

            {/* Acciones principales integradas (apiladas con ergonomía táctil en móvil) */}
            <div
              className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 pt-1 sm:pt-2 transition-[opacity,transform] duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-[1250ms] motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <Button
                href="/contacto"
                variant="gold"
                size="md"
                className="w-full sm:w-auto text-xs sm:text-sm py-2.5 sm:py-3 shadow-lg justify-center min-h-[44px]"
              >
                <span>Conversemos sobre su patrimonio</span>
                <ArrowRight className="w-4 h-4 ml-1.5" aria-hidden="true" />
              </Button>
              <Button
                href="/servicios"
                variant="outline"
                size="md"
                className="w-full sm:w-auto text-xs sm:text-sm py-2.5 sm:py-3 border-white/30 text-white hover:bg-white/10 hover:border-white justify-center min-h-[44px]"
              >
                Explorar nuestras áreas
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Zócalo Institucional Integrado en la Base del Hero */}
      <div
        className={`relative z-10 border-t border-white/15 bg-black/45 backdrop-blur-md py-3 sm:py-4 transition-all duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-[1550ms] motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="w-full max-w-[1800px] mx-auto px-5 sm:px-10 md:px-14 lg:px-16 xl:px-20 flex items-center justify-between text-xs text-[#FAF9F5]/85">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] shrink-0" aria-hidden="true" />
            <span className="font-medium tracking-wide uppercase text-[10px] sm:text-[11px] text-[#FAF9F5]">
              <span className="sm:hidden">Preservación Fiduciaria</span>
              <span className="hidden sm:inline">Preservación Fiduciaria · Perspectiva Internacional</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-[#FAF9F5]/75 text-[11px] tracking-wider uppercase font-medium">
            <span className="hover:text-white transition-colors">01 / Estrategia Patrimonial</span>
            <span className="text-white/25">·</span>
            <span className="hover:text-white transition-colors">02 / Inversión Inmobiliaria</span>
            <span className="text-white/25">·</span>
            <span className="hover:text-white transition-colors">03 / Rigor Tributario &amp; Legal</span>
          </div>

          <div className="flex items-center gap-1.5 text-[#FAF9F5]/75 hover:text-white transition-colors">
            <span className="text-[10px] sm:text-[11px] tracking-widest uppercase font-medium">
              Desplazar
            </span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce text-[#C5A059]" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
