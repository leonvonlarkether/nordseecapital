import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { services } from "@/content/services";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Servicios | Portafolio Integral de Soluciones de Inversión y Asesoría",
  description:
    "Descubra nuestras 6 áreas estratégicas: Real Estate, Wealth Management, Deuda Privada, M&A, Tax & Legal y Golden Visa Portugal.",
  alternates: {
    canonical: "/servicios",
  },
};

const serviceImages: Record<string, string> = {
  "real-estate": "/images/services/real-estate.jpg",
  "wealth-management": "/images/services/wealth-management.jpg",
  "deuda-privada": "/images/services/deuda-privada.jpg",
  ma: "/images/services/ma.jpg",
  "tax-legal": "/images/services/tax-legal.jpg",
  "golden-visa-portugal": "/images/services/golden-visa.jpg",
};

export default function ServiciosGeneralPage() {
  return (
    <>
      <PageHeader
        badge="Portafolio de Soluciones"
        title="Especialización técnica y sinergia transversal."
        description="Nordsee Capital articula seis áreas estratégicas de servicio para acompañar a inversionistas, familias y empresas en cada fase de su ciclo patrimonial y corporativo."
        breadcrumbs={[{ label: "Servicios" }]}
      />

      {/* Visión panorámica y articulación integral */}
      <section className="py-20 sm:py-28 bg-[#FAF9F5]">
        <Container>
          <div className="max-w-3xl mb-16 space-y-4">
            <Badge variant="gold">Visión Integral</Badge>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0B192C] font-normal tracking-tight leading-tight">
              La ventaja de una asesoría multidisciplinaria sin silos.
            </h2>
            <p className="text-base sm:text-lg text-[#4B5565] leading-relaxed">
              En muchas firmas, la gestión de activos y la asesoría legal operan
              desconectadas. En Nordsee Capital, cada una de nuestras divisiones
              colabora activamente: los proyectos de real estate se estructuran
              con eficiencia tributaria, las transacciones de M&amp;A cuentan con
              análisis de deuda a medida, y las estrategias de Wealth Management
              se alinean con la residencia y la gobernanza familiar.
            </p>
          </div>

          {/* Listado detallado de los 6 servicios con fotografía */}
          <div className="space-y-12">
            {services.map((service) => {
              const imageSrc = serviceImages[service.slug] || "/images/home/hero-nordsee.jpg";

              return (
                <div
                  key={service.slug}
                  id={service.slug}
                  className="bg-white rounded-3xl p-8 sm:p-12 border border-black/5 shadow-xs hover:border-[#C5A059]/40 transition-all duration-300 overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    <div className="lg:col-span-5 space-y-5">
                      {/* Ventana fotográfica arquitectónica */}
                      <div className="relative rounded-2xl overflow-hidden border border-black/10 aspect-[16/10] group">
                        <Image
                          src={imageSrc}
                          alt={`Fotografía conceptual de arquitectura para ${service.title}`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 40vw"
                          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white pointer-events-none">
                          <span className="font-serif text-sm font-semibold text-[#C5A059]">
                            {service.id}
                          </span>
                          <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-xs text-white">
                            {service.geographicCoverage || "Internacional"}
                          </span>
                        </div>
                      </div>

                      <h3 className="font-serif text-2xl sm:text-3xl text-[#0B192C] font-normal leading-snug">
                        {service.title}
                      </h3>

                      <p className="text-sm font-medium text-[#C5A059]">
                        {service.tagline}
                      </p>

                      <p className="text-sm text-[#4B5565] leading-relaxed">
                        {service.summary}
                      </p>

                      <div className="pt-2">
                        <Button
                          href={`/servicios/${service.slug}`}
                          variant="primary"
                          size="sm"
                        >
                          <span>Explorar Servicio</span>
                          <ArrowRight className="w-3.5 h-3.5 ml-1" />
                        </Button>
                      </div>
                    </div>

                    <div className="lg:col-span-7 bg-[#FAF9F5] rounded-2xl p-6 sm:p-8 space-y-6">
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-[#0B192C] mb-3">
                          Alcance de Intervención:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {service.keyCapabilities.map((cap, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-2 text-xs text-[#232B3A]"
                            >
                              <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                              <span>{cap}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-black/5">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-[#738094] mb-2">
                          Enfoque Estratégico:
                        </h4>
                        <ul className="space-y-1.5 text-xs text-[#5D6A7E]">
                          {service.approach.map((app, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <span className="w-1 h-1 rounded-full bg-[#0B192C]" />
                              <span>{app}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Bloque final de consulta */}
      <section className="py-20 bg-[#0B192C] text-[#FAF9F5] border-t border-white/10">
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF9F5] font-normal tracking-tight">
              ¿Requiere estructurar una solución a la medida?
            </h2>
            <p className="text-sm text-[#F8F9FA]/70 leading-relaxed">
              Analizamos confidencialmente sus objetivos patrimoniales o
              corporativos y diseñamos una hoja de ruta con el área de
              especialización correspondiente.
            </p>
            <div>
              <Button href="/contacto" variant="gold" size="md">
                Coordinar una Reunión de Trabajo
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
