import React from "react";
import Link from "next/link";
import { Container } from "../ui/Container";
import { BrandLogo } from "./BrandLogo";
import { footerNav } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0B192C] text-[#FAF9F5] border-t border-white/10 pt-16 sm:pt-20 pb-12">
      <Container>
        {/* Grilla principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Columna Marca e Identidad (2 cols en lg) */}
          <div className="lg:col-span-2 space-y-5">
            <BrandLogo variant="light" withTagline={true} />
            <p className="text-sm text-[#F8F9FA]/70 leading-relaxed max-w-sm">
              Socio estratégico en gestión patrimonial, proyectos inmobiliarios
              internacionales, deuda privada, M&amp;A y planificación
              legal/tributaria para clientes con visión global.
            </p>

            <div className="pt-2 space-y-2 text-xs text-[#FAF9F5]/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                <span>
                  Santiago: Los Militares 4777, Piso 21, Oficina 2101
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                <span>
                  Concepción: Bernardo O&apos;Higgins 241, Piso 9, Oficina 903
                </span>
              </div>
            </div>
          </div>

          {/* Columna Servicios */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C5A059]">
              Servicios
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footerNav.servicios.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#FAF9F5]/70 hover:text-[#FAF9F5] hover:translate-x-0.5 transition-all inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna Institucional */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C5A059]">
              Institucional
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footerNav.institucional.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#FAF9F5]/70 hover:text-[#FAF9F5] hover:translate-x-0.5 transition-all inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna Contacto Directo */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C5A059]">
              Canales Directos
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2.5 text-[#FAF9F5]/70 hover:text-[#C5A059] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span className="break-all">{siteConfig.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-2.5 text-[#FAF9F5]/70 hover:text-[#C5A059] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>{siteConfig.phone}</span>
                </a>
              </li>
            </ul>

            <div className="pt-3">
              <span className="text-[11px] uppercase tracking-wider text-[#FAF9F5]/50 block mb-2">
                Presencia Operativa
              </span>
              <p className="text-xs text-[#FAF9F5]/70">
                Chile · Estados Unidos · Portugal &amp; Europa
              </p>
            </div>
          </div>
        </div>

        {/* Cláusula regulatoria y de advertencia de riesgo */}
        <div className="pt-8 pb-8 text-xs text-[#FAF9F5]/50 leading-relaxed border-b border-white/5">
          <p className="max-w-4xl">
            <strong className="text-[#FAF9F5]/70">Aviso Institucional y de Riesgo: </strong>
            {siteConfig.regulatoryNotice} La información contenida en este sitio
            web tiene fines exclusivamente informativos y no constituye una
            oferta pública de valores, recomendación de inversión personalizada
            ni garantía de resultados patrimoniales o migratorios.
          </p>
        </div>

        {/* Barra inferior */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF9F5]/60">
          <div>
            © 2026 {siteConfig.legalName}. Todos los
            derechos reservados.
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
          </div>
        </div>
      </Container>
    </footer>
  );
}
