"use client";

import React from "react";
import Link from "next/link";
import { Container } from "../ui/Container";
import { BrandLogo } from "./BrandLogo";
import { footerNav } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  ArrowUp,
  ShieldCheck,
  Globe2,
} from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#07101C] text-[#FAF9F5] border-t border-white/10 pt-16 sm:pt-20 pb-12">
      <Container size="wide">
        {/* Grilla principal equilibrada (4 / 3 / 2 / 3 cols) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Columna 1: Marca, Identidad y Sedes (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <BrandLogo variant="light" withTagline={true} />
            <p className="text-sm text-[#FAF9F5]/70 leading-relaxed max-w-sm">
              Socio estratégico en gestión patrimonial, proyectos inmobiliarios
              internacionales, deuda privada, M&amp;A y planificación
              legal/tributaria para clientes con visión global.
            </p>

            {/* Sedes Corporativas */}
            <div className="pt-2 space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5 text-[#FAF9F5]/75">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="font-semibold text-white">Santiago: </span>
                  <span>Los Militares, Las Condes (Piso 21, Oficina 2101)</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5 text-[#FAF9F5]/75">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="font-semibold text-white">Concepción: </span>
                  <span>Bernardo O&apos;Higgins 241 (Piso 9, Oficina 903)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Columna 2: Servicios de Inversión y Asesoría (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059] flex items-center gap-1.5">
              <span>Áreas de Práctica</span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footerNav.servicios.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#FAF9F5]/70 hover:text-[#C5A059] hover:translate-x-1 transition-all inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Institucional y Gobierno (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059] flex items-center gap-1.5">
              <span>Institucional</span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footerNav.institucional.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#FAF9F5]/70 hover:text-[#C5A059] hover:translate-x-1 transition-all inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Canales Directos y Consulta Privada (3 cols) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059] flex items-center gap-1.5">
              <span>Mesa de Atención</span>
            </h4>

            {/* Canales de Contacto Directo */}
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2.5 text-[#FAF9F5]/75 hover:text-[#C5A059] transition-colors py-1 min-h-[44px] focus-visible:ring-1 focus-visible:ring-[#C5A059] rounded-xs"
                >
                  <Mail className="w-4 h-4 text-[#C5A059] shrink-0" aria-hidden="true" />
                  <span className="whitespace-nowrap">{siteConfig.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-2.5 text-[#FAF9F5]/75 hover:text-[#C5A059] transition-colors py-1 min-h-[44px] focus-visible:ring-1 focus-visible:ring-[#C5A059] rounded-xs"
                >
                  <Phone className="w-4 h-4 text-[#C5A059] shrink-0" aria-hidden="true" />
                  <span className="whitespace-nowrap">{siteConfig.phone}</span>
                </a>
              </li>
            </ul>

            {/* Tarjeta de Acción Rápida para Consulta Confidencial */}
            <Link
              href="/contacto"
              className="group flex items-center justify-between p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#C5A059]/50 transition-all text-xs font-semibold text-white shadow-sm"
            >
              <span>Agendar Consulta Confidencial</span>
              <ArrowUpRight
                className="w-4 h-4 text-[#C5A059] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                aria-hidden="true"
              />
            </Link>

            {/* Alcance Geográfico Breve */}
            <div className="pt-1 flex items-start gap-2 text-xs text-[#FAF9F5]/60">
              <Globe2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" aria-hidden="true" />
              <span>Chile · Estados Unidos · Portugal &amp; Europa</span>
            </div>
          </div>
        </div>

        {/* Cláusula regulatoria y marco de resguardo fiduciario */}
        <div className="pt-8 pb-8 border-b border-white/10">
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/6 text-xs text-[#FAF9F5]/55 leading-relaxed space-y-1.5">
            <div className="flex items-center gap-2 text-[#C5A059] text-[11px] font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>Aviso Institucional &amp; Marco Fiduciario</span>
            </div>
            <p className="max-w-4xl text-[#FAF9F5]/60 leading-relaxed">
              {siteConfig.regulatoryNotice} La información contenida en este sitio
              web tiene fines exclusivamente informativos y no constituye una
              oferta pública de valores, recomendación de inversión personalizada
              ni garantía de resultados patrimoniales o migratorios.
            </p>
          </div>
        </div>

        {/* Barra inferior de derechos y navegación legal */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF9F5]/60">
          <div>
            © 2026 {siteConfig.legalName}. Todos los derechos reservados.
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/privacidad"
              className="hover:text-[#FAF9F5] transition-colors"
            >
              Política de Privacidad
            </Link>
            <Link
              href="/contacto"
              className="hover:text-[#FAF9F5] transition-colors"
            >
              Canal de Consultas
            </Link>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-[#C5A059] transition-colors cursor-pointer text-[#FAF9F5]/70 focus-visible:ring-1 focus-visible:ring-[#C5A059] rounded-xs py-1"
              aria-label="Volver arriba de la página"
            >
              <span>Volver arriba</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#C5A059]" aria-hidden="true" />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
