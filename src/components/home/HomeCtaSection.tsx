import React from "react";
import { Container } from "../ui/Container";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { ScrollReveal } from "../ui/ScrollReveal";
import { siteConfig } from "@/content/site";
import { Mail, Phone, ArrowRight } from "lucide-react";

export function HomeCtaSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#0B192C] text-[#FAF9F5] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark opacity-40 pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#C5A059]/10 blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <ScrollReveal direction="up" delay={50} className="max-w-3xl mx-auto text-center space-y-8">
          <Badge variant="dark">Contacto Institucional</Badge>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#FAF9F5] font-normal tracking-tight leading-tight text-balance">
            Conversemos sobre la estructura óptima para sus inversiones.
          </h2>

          <p className="text-base sm:text-lg text-[#F8F9FA]/75 max-w-xl mx-auto leading-relaxed">
            Ya sea que busque diversificar en activos inmobiliarios en EE.&nbsp;UU.,
            estructurar deuda privada o planificar la tributación transfronteriza
            de su patrimonio familiar, nuestro equipo está a su disposición.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button href="/contacto" variant="gold" size="lg">
              <span>Iniciar Consulta Confidencial</span>
              <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
            </Button>
          </div>

          <div className="pt-10 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm text-[#FAF9F5]/70">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 hover:text-[#C5A059] transition-colors py-2 px-3 min-h-[44px] rounded-lg focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:outline-hidden"
            >
              <Mail className="w-4 h-4 text-[#C5A059]" aria-hidden="true" />
              <span>{siteConfig.email}</span>
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2 hover:text-[#C5A059] transition-colors py-2 px-3 min-h-[44px] rounded-lg focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:outline-hidden"
            >
              <Phone className="w-4 h-4 text-[#C5A059]" aria-hidden="true" />
              <span>{siteConfig.phone}</span>
            </a>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
