import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/content/site";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto | Sedes y Canales Oficiales | Nordsee Capital",
  description:
    "Comuníquese con nuestros socios directores. Sedes corporativas en Santiago y Concepción. Atención personalizada para clientes locales e internacionales.",
  alternates: {
    canonical: "/contacto",
  },
};

export default function ContactoPage() {
  return (
    <>
      <PageHeader
        badge="Canales Corporativos"
        title="Iniciemos una conversación estratégica."
        description="Estamos a su disposición para coordinar reuniones en nuestras oficinas de Santiago o Concepción, o mediante sesión virtual para clientes e inversionistas en el exterior."
        breadcrumbs={[{ label: "Contacto" }]}
      />

      <section className="py-20 sm:py-28 bg-[#FAF9F5]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Columna Izquierda: Información de Sedes y Canales */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <Badge variant="gold">Atención Personalizada</Badge>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#0B192C] font-normal tracking-tight">
                  Coordenadas oficiales
                </h2>
                <p className="text-sm sm:text-base text-[#4B5565] leading-relaxed">
                  Operamos con total discreción y agilidad en la respuesta.
                  Nuestros canales están disponibles para inversionistas, familias
                  y empresas interesadas en nuestras áreas de práctica.
                </p>
              </div>

              {/* Fotografía editorial de la sede principal */}
              <div className="relative rounded-3xl overflow-hidden border border-black/10 shadow-lg aspect-[16/9] group">
                <Image
                  src="/images/contact/santiago-corporate.jpg"
                  alt="Entorno corporativo en Las Condes, Santiago — Imagen referencial"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/80 via-transparent to-black/20 pointer-events-none" />
                <div className="absolute bottom-3 left-4 right-4 text-white pointer-events-none">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C5A059] block">
                    Ubicación Corporativa
                  </span>
                  <span className="font-serif text-sm text-white/95">
                    Las Condes · Santiago de Chile (Referencial)
                  </span>
                </div>
              </div>

              {/* Tarjetas de Sedes */}
              <div className="space-y-4">
                {siteConfig.offices.map((office) => (
                  <div
                    key={office.city}
                    className="bg-white rounded-2xl p-6 border border-black/5 shadow-2xs space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
                        {office.role}
                      </span>
                      <span className="text-xs font-medium text-[#738094]">
                        {office.country}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl text-[#0B192C] font-normal">
                      {office.city}
                    </h3>

                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4B5565] pt-1">
                      <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                      <span>{office.address}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Teléfono y Correo */}
              <div className="bg-[#0B192C] text-[#FAF9F5] rounded-2xl p-6 sm:p-8 space-y-4 border border-white/10">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
                  Canales Directos
                </h4>

                <div className="space-y-3 text-sm">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="inline-flex items-center gap-3 text-[#FAF9F5]/85 hover:text-[#C5A059] transition-colors py-2 px-3 min-h-[44px] rounded-lg focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:outline-hidden"
                  >
                    <Mail className="w-4 h-4 text-[#C5A059] shrink-0" aria-hidden="true" />
                    <span>{siteConfig.email}</span>
                  </a>

                  <a
                    href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                    className="inline-flex items-center gap-3 text-[#FAF9F5]/85 hover:text-[#C5A059] transition-colors py-2 px-3 min-h-[44px] rounded-lg focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:outline-hidden"
                  >
                    <Phone className="w-4 h-4 text-[#C5A059] shrink-0" aria-hidden="true" />
                    <span>{siteConfig.phone}</span>
                  </a>

                  <div className="flex items-center gap-3 text-xs text-[#FAF9F5]/60 pt-2 border-t border-white/10">
                    <Clock className="w-4 h-4 text-[#C5A059] shrink-0" aria-hidden="true" />
                    <span>Horario de atención: Lunes a Viernes, 09:00 a 18:30 (CLT)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna Derecha: Formulario Interactivo */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
