import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { teamMembers } from "@/content/team";
import {
  ShieldCheck,
  Scale,
  Compass,
  LineChart,
  Users2,
  Building,
  ArrowRight,
  ChevronRight,
  GraduationCap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Nosotros | Identidad, Filosofía y Equipo Directivo | Nordsee Capital",
  description:
    "Conozca la misión, principios de inversión y al equipo de socios directores de Nordsee Capital: gestión patrimonial, real estate y rigor legal.",
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
      {/* 1. Hero Editorial de Nosotros con la Fotografía Protagonista de los 3 Socios */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 bg-gradient-to-b from-[#F4F2EB] via-[#FAF9F5] to-[#FAF9F5] border-b border-black/5 overflow-hidden">
        <div className="absolute inset-0 bg-grid-subtle opacity-60 pointer-events-none" />

        <Container className="relative z-10">
          {/* Breadcrumbs */}
          <nav
            aria-label="Ruta de navegación"
            className="flex items-center gap-1.5 text-xs text-[#738094] mb-8 font-medium"
          >
            <Link href="/" className="hover:text-[#C5A059] transition-colors">
              Inicio
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#A88340]" />
            <span className="text-[#0B192C]" aria-current="page">
              Nosotros
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Columna Textual del Hero */}
            <div className="lg:col-span-6 space-y-6">
              <Badge variant="gold">Identidad Corporativa</Badge>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0B192C] font-normal tracking-tight leading-[1.08]">
                Un puente sólido entre patrimonio, negocios y rigor legal.
              </h1>
              <p className="text-base sm:text-lg text-[#4B5565] leading-relaxed">
                Nordsee Capital nació para resolver una necesidad crítica de los
                inversionistas modernos: coordinar con coherencia y rigor la gestión
                de capital, las oportunidades inmobiliarias de renta y la estructura
                legal tributaria transfronteriza.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button href="#equipo" variant="primary" size="md">
                  <span>Conocer a los Socios</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
                <Button href="/contacto" variant="ghost" size="md">
                  Iniciar Contacto
                </Button>
              </div>
            </div>

            {/* Fotografía Protagonista del Hero: Los 3 Socios */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border border-black/10 shadow-2xl shadow-[#0B192C]/10 aspect-[4/3] sm:aspect-[16/11] group bg-[#0B192C]/5">
                <Image
                  src="/images/about/3socios.png"
                  alt="Socios Directores de Nordsee Capital: Martin Strube, Fernando Prat y Fernando Llull en su sede corporativa"
                  priority
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C5A059]">
                      Socios Directores
                    </span>
                  </div>
                  <p className="font-serif text-base sm:text-lg text-white/95 leading-snug">
                    Martin Strube · Fernando Llull · Fernando Prat
                  </p>
                  <p className="text-xs text-white/70 mt-1">
                    Sede Santiago de Chile · Presencia Internacional
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Sección Filosofía y Propuesta de Valor con Fotografía Arquitectónica */}
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
                  alt="Atrio arquitectónico corporativo — Imagen conceptual de sobriedad institucional"
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

      {/* 3. Sección Principios de Inversión */}
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

      {/* 4. Equipo Directivo y Gobernanza (id="equipo") */}
      <section id="equipo" className="py-20 sm:py-28 bg-[#FAF9F5] border-t border-black/5 scroll-mt-20">
        <Container>
          <div className="max-w-3xl mb-16 space-y-4">
            <Badge variant="gold">Socios Directores</Badge>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0B192C] font-normal tracking-tight leading-tight">
              Visión multidisciplinaria y gobierno corporativo.
            </h2>
            <p className="text-base sm:text-lg text-[#4B5565] leading-relaxed">
              Combinamos ingeniería comercial, finanzas cuantitativas y derecho
              tributario de postgrado para ofrecer un criterio riguroso en cada
              transacción. Los socios directores lideran personalmente cada etapa,
              sin intermediarios ni ejecutivos de paso.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 mb-16">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group bg-white rounded-3xl p-7 sm:p-8 border border-black/5 shadow-xs hover:border-[#C5A059]/40 hover:shadow-xl hover:shadow-[#0B192C]/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Fotografía profesional del socio */}
                  <div className="relative aspect-square rounded-2xl overflow-hidden mb-8 bg-[#0B192C]/5 border border-black/5 shadow-2xs group-hover:border-[#C5A059]/30 transition-colors">
                    <Image
                      src={member.image}
                      alt={`Fotografía profesional de ${member.name} — Socio Director de Nordsee Capital`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/30 via-transparent to-transparent opacity-30 group-hover:opacity-10 transition-opacity" />
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-[#0B192C] font-normal mb-1">
                    {member.name}
                  </h3>

                  <p className="text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-4">
                    {member.role}
                  </p>

                  <div className="flex items-start gap-2 text-xs text-[#738094] mb-6 pb-6 border-b border-black/5">
                    <GraduationCap className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <span className="font-medium italic">{member.credentials}</span>
                  </div>

                  <p className="text-sm text-[#4B5565] leading-relaxed mb-6">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-6 border-t border-black/5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#738094] block mb-2">
                    Especialidades Principales:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {member.specialties.map((spec) => (
                      <span
                        key={spec}
                        className="inline-block text-xs font-medium bg-[#F4F2EB] text-[#232B3A] px-3 py-1 rounded-full"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bloque de gobernanza y contacto directo */}
          <div className="bg-[#0B192C] rounded-3xl p-8 sm:p-12 md:p-16 text-center text-[#FAF9F5] relative overflow-hidden border border-white/10 shadow-xl">
            <div className="max-w-2xl mx-auto space-y-6 relative z-10">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059] block">
                Atención Boutique y Sin Intermediarios
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#FAF9F5] font-normal tracking-tight">
                Acceso directo al equipo directivo en cada decisión.
              </h3>
              <p className="text-sm sm:text-base text-[#F8F9FA]/75 leading-relaxed">
                En Nordsee Capital creemos en las relaciones de largo plazo. Trabajamos con
                un número controlado de clientes para asegurar que cada portfolio reciba
                la dedicación directa y el rigor técnico de nuestros socios fundadores.
              </p>
              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <Button href="/contacto" variant="gold" size="md">
                  <span>Coordinar Reunión con los Socios</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
