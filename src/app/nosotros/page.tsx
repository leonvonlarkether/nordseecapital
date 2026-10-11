import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  ShieldCheck,
  Scale,
  Compass,
  LineChart,
  Users2,
  Building,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Nosotros | Identidad y Filosofía Corporativa",
  description:
    "Conozca la misión, principios de inversión y propuesta de valor de Nordsee Capital: un socio estratégico que combina capital, negocios y estructura legal.",
  alternates: {
    canonical: "/nosotros",
  },
};

export default function NosotrosPage() {
  const principles = [
    {
      icon: Compass,
      title: "Visión Global y Presencia Estratégica",
      desc: "Originamos y analizamos oportunidades en Chile, Estados Unidos y Portugal, seleccionando jurisdicciones con estabilidad jurídica y mercados con profundidad económica.",
    },
    {
      icon: LineChart,
      title: "Retornos Sostenibles y Preservación de Capital",
      desc: "Priorizamos la consistencia y la resiliencia de los flujos sobre promesas de rentabilidad especulativa. El objetivo primario es proteger el patrimonio antes de multiplicarlo.",
    },
    {
      icon: Scale,
      title: "Integración Legal y Tributaria Continua",
      desc: "Toda decisión financiera incorpora desde su diseño la evaluación tributaria y societaria, asegurando cumplimiento normativo y resguardo intergeneracional.",
    },
    {
      icon: ShieldCheck,
      title: "Monitoreo Activo y Mitigación de Riesgos",
      desc: "No abandonamos la posición tras el cierre. Implementamos covenants rigurosos, seguimiento financiero y supervisión permanente de cada activo.",
    },
    {
      icon: Users2,
      title: "Arquitectura Abierta e Independencia",
      desc: "No distribuimos productos propios ni cobramos comisiones ocultas de terceros. Nuestras recomendaciones responden con objetividad a los intereses del cliente.",
    },
    {
      icon: Building,
      title: "Acceso Directo al Equipo Directivo",
      desc: "Atención boutique y dedicada. Los socios directores lideran personalmente la estructuración, negociación y seguimiento de cada portafolio.",
    },
  ];

  return (
    <>
      <PageHeader
        badge="Identidad Corporativa"
        title="Un puente sólido entre patrimonio, negocios y rigor legal."
        description="Nordsee Capital nació para resolver una necesidad crítica de los inversionistas modernos: coordinar con coherencia la gestión de capital, los negocios inmobiliarios y la estructura legal tributaria."
        breadcrumbs={[{ label: "Nosotros" }]}
      />

      {/* Sección Filosofía y Propuesta de Valor con Fotografía Arquitectónica */}
      <section className="py-20 sm:py-28 bg-[#FAF9F5]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <Badge variant="gold">Nuestra Filosofía</Badge>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0B192C] font-normal tracking-tight leading-tight">
                El valor no se mide solo en retorno, sino en la solidez de la estructura.
              </h2>
              <p className="text-base sm:text-lg text-[#4B5565] leading-relaxed">
                En un entorno global volátil, los patrimonios requieren más que
                meros distribuidores de productos financieros. Requieren socios
                estratégicos capaces de sentarse a la mesa con una mirada
                multidisciplinaria: evaluando contratos, ponderando covenants,
                analizando tasas de descuento y optimizando el impacto fiscal de
                cada decisión.
              </p>

              <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-2xs space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A059] block">
                  Nuestra Misión
                </span>
                <p className="font-serif text-lg text-[#0B192C] font-normal leading-snug">
                  “Ser el partner de excelencia en inversiones y negocios
                  estables para clientes con visión global, actuando con
                  independencia técnica y apego inquebrantable a la ley.”
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border border-black/10 shadow-2xl shadow-[#0B192C]/10 aspect-[4/3] group">
                <Image
                  src="/images/about/atrium-corporate.jpg"
                  alt="Espacio institucional y atrio corporativo de Nordsee Capital"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C5A059]">
                      Espacio Institucional
                    </span>
                  </div>
                  <p className="font-serif text-base text-white/95">
                    Ambiente de confianza, sobriedad y análisis estratégico multidisciplinario.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Sección Principios de Inversión */}
      <section className="py-20 sm:py-28 bg-[#0B192C] text-[#FAF9F5] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-50 pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-2xl mb-16">
            <Badge variant="dark">Criterio Institucional</Badge>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF9F5] font-normal tracking-tight mt-4 leading-tight">
              Principios que guían cada decisión.
            </h2>
            <p className="text-base text-[#F8F9FA]/75 mt-4">
              Seis directrices fundamentales que rigen la selección, diseño y
              supervisión de todas las oportunidades en Nordsee Capital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[#C5A059]/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#C5A059] mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl text-[#FAF9F5] font-normal mb-3">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[#F8F9FA]/70 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Enlace al equipo y CTA */}
      <section className="py-20 sm:py-28 bg-[#FAF9F5] border-t border-black/5">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="gold">Equipo y Gobernanza</Badge>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0B192C] font-normal tracking-tight">
              Conozca a los profesionales detrás de Nordsee Capital.
            </h2>
            <p className="text-base text-[#5D6A7E] leading-relaxed">
              Un equipo multidisciplinario con más de una década de experiencia
              en banca de inversión, estructuración inmobiliaria y derecho
              tributario de alto nivel.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Button href="/equipo" variant="primary" size="md">
                <span>Ver Equipo Directivo</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <Button href="/contacto" variant="ghost" size="md">
                Contactar con un Socio
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
