import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { teamMembers } from "@/content/team";
import { GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "Equipo Directivo | Liderazgo y Especialización | Nordsee Capital",
  description:
    "Conozca a los socios directores de Nordsee Capital: profesionales con más de una década de trayectoria en finanzas, real estate internacional y derecho tributario.",
  alternates: {
    canonical: "/equipo",
  },
};

export default function EquipoPage() {
  return (
    <>
      <PageHeader
        badge="Liderazgo Corporativo"
        title="Experiencia comprobada y compromiso directo."
        description="En Nordsee Capital, cada cliente cuenta con la participación activa de nuestros socios directores en la evaluación, estructuración y ejecución de sus proyectos."
        breadcrumbs={[{ label: "Equipo" }]}
      />

      {/* Grid de miembros del equipo */}
      <section className="py-20 sm:py-28 bg-[#FAF9F5]">
        <Container>
          <div className="max-w-2xl mb-16 space-y-4">
            <Badge variant="gold">Socios Directores</Badge>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0B192C] font-normal tracking-tight leading-tight">
              Visión multidisciplinaria y gobierno corporativo.
            </h2>
            <p className="text-base text-[#4B5565] leading-relaxed">
              Combinamos ingeniería comercial, finanzas cuantitativas y derecho
              tributario de postgrado para ofrecer un criterio riguroso en cada
              transacción.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-black/5 shadow-xs hover:border-[#C5A059]/40 hover:shadow-xl hover:shadow-[#0B192C]/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Monograma de identidad */}
                  <div className="w-20 h-20 rounded-2xl bg-[#0B192C] text-[#C5A059] flex items-center justify-center font-serif text-2xl mb-8 border border-[#C5A059]/30 shadow-xs">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
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
        </Container>
      </section>

      {/* Bloque de gobernanza y contacto */}
      <section className="py-20 bg-[#0B192C] text-[#FAF9F5] border-t border-white/10">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF9F5] font-normal tracking-tight">
              Atención cercana y sin intermediarios innecesarios.
            </h2>
            <p className="text-sm sm:text-base text-[#F8F9FA]/75 leading-relaxed">
              En Nordsee Capital creemos en las relaciones de largo plazo.
              Trabajamos con un número controlado de clientes para asegurar que
              cada portfolio reciba la dedicación directa de nuestros socios.
            </p>
            <div className="pt-2">
              <Button href="/contacto" variant="gold" size="md">
                Coordinar Reunión con un Socio
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
