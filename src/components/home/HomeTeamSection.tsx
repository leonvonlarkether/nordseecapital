import React from "react";
import Link from "next/link";
import { Container } from "../ui/Container";
import { Badge } from "../ui/Badge";
import { teamMembers } from "@/content/team";
import { ArrowRight } from "lucide-react";

export function HomeTeamSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#FAF9F5] border-b border-black/5" id="equipo">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <Badge variant="gold">Liderazgo Corporativo</Badge>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0B192C] font-normal tracking-tight mt-4 leading-tight">
              Equipo directivo con experiencia comprobada.
            </h2>
            <p className="text-base text-[#5D6A7E] mt-3">
              Socios directores que intervienen directamente en cada operación,
              aportando visión técnica, solvencia financiera y especialización
              legal.
            </p>
          </div>

          <Link
            href="/equipo"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B192C] hover:text-[#C5A059] transition-colors group shrink-0"
          >
            <span>Ver antecedentes completos</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-2xl p-8 border border-black/5 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                {/* Avatar monocromo institucional */}
                <div className="w-16 h-16 rounded-full bg-[#0B192C] text-[#C5A059] flex items-center justify-center font-serif text-xl mb-6 border border-[#C5A059]/30">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>

                <h3 className="font-serif text-2xl text-[#0B192C] font-normal mb-1">
                  {member.name}
                </h3>

                <p className="text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-3">
                  {member.role}
                </p>

                <p className="text-xs text-[#738094] italic mb-4 pb-4 border-b border-black/5">
                  {member.credentials}
                </p>

                <p className="text-sm text-[#4B5565] leading-relaxed mb-6">
                  {member.bio}
                </p>
              </div>

              <div className="pt-4 border-t border-black/5 flex flex-wrap gap-1.5">
                {member.specialties.map((spec) => (
                  <span
                    key={spec}
                    className="inline-block text-[11px] font-medium bg-[#F4F2EB] text-[#232B3A] px-2.5 py-1 rounded-md"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
