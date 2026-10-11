import React from "react";
import { Container } from "../ui/Container";
import { Badge } from "../ui/Badge";
import { siteConfig } from "@/content/site";
import { MapPin, Globe2 } from "lucide-react";

export function HomeInternationalPresence() {
  return (
    <section className="py-24 sm:py-32 bg-[#F4F2EB] border-b border-black/5">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 space-y-6">
            <Badge variant="light">Alcance Geográfico</Badge>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0B192C] font-normal tracking-tight leading-tight">
              Presencia operativa y alianzas en tres mercados estratégicos.
            </h2>
            <p className="text-base text-[#4B5565] leading-relaxed">
              Nuestra estructura internacional conecta el capital de familias e
              inversionistas con oportunidades tangibles y vehículos regulados en
              jurisdicciones de alta seguridad jurídica.
            </p>

            <div className="pt-4 p-6 bg-white rounded-2xl border border-black/5 space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#738094] block">
                Sedes Corporativas en Chile:
              </span>
              {siteConfig.offices.map((office) => (
                <div key={office.city} className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-[#0B192C]">
                      {office.city}:{" "}
                    </span>
                    <span className="text-xs text-[#5D6A7E]">
                      {office.address}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {siteConfig.internationalReach.map((item) => (
              <div
                key={item.region}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-black/5 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-[#0B192C] text-[#C5A059] flex items-center justify-center mb-5">
                    <Globe2 className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-lg text-[#0B192C] font-normal mb-2">
                    {item.region}
                  </h3>
                  <p className="text-xs text-[#5D6A7E] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
