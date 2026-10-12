import React from "react";
import { Button } from "../ui/Button";
import { ArrowRight, ChevronDown } from "lucide-react";

export function HomeHero() {
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
          className="absolute inset-0 w-full h-full object-cover object-[center_65%] pointer-events-none"
        >
          <source src="/video/caballos.mp4" type="video/mp4" />
        </video>

        {/* Gradiente transparente a oscuro muy suave y natural solo en el flanco superior/izquierdo:
            Sin blur blanco ni niebla artificial. Permite lectura perfecta del texto sobre las montañas
            mientras deja el galope de los caballos 100% visible, nítido y brillante.
        */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent w-full md:w-[65%] lg:w-[50%] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/50 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* 2. Cuerpo Editorial Principal (Ubicado en el tercio superior-izquierdo para liberar el plano de los caballos) */}
      <div className="relative z-10 pt-28 sm:pt-32 md:pt-36 pb-8 sm:pb-12 my-auto">
        <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20">
          <div className="max-w-2xl lg:max-w-3xl xl:max-w-3xl space-y-5 sm:space-y-6">
            {/* Etiqueta editorial discreta */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-[#FAF9F5] shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-[#FAF9F5]">
                NORDSEE CAPITAL · PRIVATE WEALTH &amp; INVESTMENT STRATEGY
              </span>
            </div>

            {/* Titular monumental editorial en exactamente 2 líneas deliberadas */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-normal tracking-tight text-[#FAF9F5] leading-[1.08] drop-shadow-md">
              El patrimonio exige visión.
              <br />
              <span className="italic font-serif text-[#C5A059]">
                El futuro, estructura.
              </span>
            </h1>

            {/* Subtítulo editorial con alto contraste y lectura ágil */}
            <p className="text-sm sm:text-base md:text-lg text-[#FAF9F5]/90 leading-relaxed font-normal max-w-xl drop-shadow-sm">
              Integramos estrategia patrimonial, inversión inmobiliaria y
              estructuración legal para familias, empresas e inversionistas con
              visión de largo plazo.
            </p>

            {/* Acciones principales integradas */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <Button href="/contacto" variant="gold" size="md">
                <span>Conversemos sobre su patrimonio</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
              <Button href="/servicios" variant="outline" size="md">
                Explorar nuestras áreas
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Zócalo Institucional Integrado en la Base del Hero */}
      <div className="relative z-10 border-t border-white/15 bg-black/40 backdrop-blur-md py-3.5 sm:py-4">
        <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 flex items-center justify-between text-xs text-[#FAF9F5]/80">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            <span className="font-medium tracking-wide uppercase text-[11px] text-[#FAF9F5]">
              Preservación Fiduciaria · Perspectiva Internacional
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
            <ChevronDown className="w-3.5 h-3.5 animate-bounce text-[#C5A059]" />
          </div>
        </div>
      </div>
    </section>
  );
}
