import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../ui/Container";
import { Badge } from "../ui/Badge";
import { ScrollReveal } from "../ui/ScrollReveal";
import { teamMembers } from "@/content/team";
import { teamMembersEn } from "@/content/en/team";
import { ArrowRight } from "lucide-react";

export function HomeTeamSection({ locale = "es" }: { locale?: "es" | "en" }) {
  const isEn = locale === "en";
  const members = isEn ? teamMembersEn : teamMembers;

  return (
    <section className="py-24 sm:py-32 bg-[#FAF9F5] border-b border-black/5" id={isEn ? "team" : "equipo"}>
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <ScrollReveal direction="up" delay={50} className="max-w-2xl">
            <Badge variant="gold">{isEn ? "Corporate Leadership" : "Liderazgo Corporativo"}</Badge>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0B192C] font-normal tracking-tight mt-4 leading-tight text-balance">
              {isEn
                ? "Executive team with proven track record."
                : "Equipo directivo con experiencia comprobada."}
            </h2>
            <p className="text-base text-[#5D6A7E] mt-3">
              {isEn
                ? "Managing partners directly engaged in every mandate, providing technical insight, financial acumen, and legal specialization."
                : "Socios directores que intervienen directamente en cada operación, aportando visión técnica, solvencia financiera y especialización legal."}
            </p>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={150}>
            <Link
              href={isEn ? "/en/about#team" : "/nosotros#equipo"}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B192C] hover:text-[#C5A059] transition-colors group shrink-0 py-2 min-h-[44px] rounded-lg focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:outline-hidden"
            >
              <span>{isEn ? "View full background" : "Ver antecedentes completos"}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <ScrollReveal
              key={member.name}
              delay={index * 140}
              direction="up"
              className="h-full"
            >
              <div className="group bg-white rounded-3xl p-7 sm:p-8 border border-black/5 shadow-xs hover:shadow-xl hover:border-[#C5A059]/40 hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between h-full">
                <div>
                  {/* Retrato fotográfico profesional del socio */}
                  <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 bg-[#0B192C]/5 border border-black/5 group-hover:border-[#C5A059]/30 transition-colors shadow-2xs">
                    <Image
                      src={member.image}
                      alt={`Fotografía profesional de ${member.name} — Socio Director de Nordsee Capital`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/30 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity" />
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
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
