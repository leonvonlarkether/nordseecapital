import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Página No Encontrada | Error 404",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center py-32 bg-[#FAF9F5]">
      <Container size="narrow">
        <div className="text-center space-y-6">
          <Badge variant="gold">Error 404 · Recurso No Encontrado</Badge>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#0B192C] font-normal tracking-tight">
            La página solicitada no está disponible.
          </h1>

          <p className="text-base text-[#4B5565] max-w-lg mx-auto leading-relaxed">
            La dirección que intenta consultar no existe o fue reestructurada
            dentro de nuestro nuevo portal institucional. Le sugerimos regresar al
            inicio o explorar nuestras secciones principales:
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Button href="/" variant="primary" size="md">
              <Home className="w-4 h-4 mr-2" />
              <span>Volver a la Portada</span>
            </Button>
            <Button href="/servicios" variant="ghost" size="md">
              Explorar Servicios
            </Button>
          </div>

          <div className="pt-12 border-t border-black/10 max-w-md mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#738094] block mb-3">
              Rutas Corporativas Frecuentes:
            </span>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium text-[#0B192C]">
              <Link href="/nosotros" className="hover:text-[#C5A059] transition-colors">
                Nosotros
              </Link>
              <Link href="/equipo" className="hover:text-[#C5A059] transition-colors">
                Equipo Directivo
              </Link>
              <Link href="/contacto" className="hover:text-[#C5A059] transition-colors">
                Contacto y Sedes
              </Link>
              <Link href="/privacidad" className="hover:text-[#C5A059] transition-colors">
                Privacidad
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
