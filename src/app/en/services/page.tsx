import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { servicesEn } from "@/content/en/services";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Services: Investment & Advisory Practice Areas",
  description:
    "Comprehensive portfolio of solutions: Real Estate, Wealth Management, Private Debt, M&A Advisory, Tax & Legal, and Portugal Golden Visa.",
  alternates: {
    canonical: "/en/services",
    languages: {
      es: "/servicios",
      en: "/en/services",
      "x-default": "/servicios",
    },
  },
  openGraph: {
    title: "Services: Investment & Advisory Practice Areas | Nordsee Capital",
    description:
      "Comprehensive portfolio of solutions: Real Estate, Wealth Management, Private Debt, M&A Advisory, Tax & Legal, and Portugal Golden Visa.",
    url: "https://nordseecapital.com/en/services",
    images: [
      {
        url: "/images/og-logo.png",
        width: 1200,
        height: 630,
        alt: "Nordsee Capital Practice Areas Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services: Investment & Advisory Practice Areas | Nordsee Capital",
    description:
      "Comprehensive portfolio of solutions: Real Estate, Wealth Management, Private Debt, M&A Advisory, Tax & Legal, and Portugal Golden Visa.",
    images: ["/images/og-logo.png"],
  },
};

const serviceImages: Record<string, string> = {
  "real-estate": "/images/services/real-estate.jpg",
  "wealth-management": "/images/services/wealth-management.jpg",
  "private-debt": "/images/services/deuda-privada.jpg",
  ma: "/images/services/ma.jpg",
  "tax-legal": "/images/services/tax-legal.jpg",
  "golden-visa-portugal": "/images/services/golden-visa.jpg",
};

export default function EnglishServicesGeneralPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "https://nordseecapital.com/en" },
          { name: "Services", item: "https://nordseecapital.com/en/services" },
        ]}
      />
      <PageHeader
        badge="Practice Portfolio"
        title="Technical specialization and cross-disciplinary synergy."
        description="Nordsee Capital articulates six strategic practice areas to advise investors, family groups, and corporations across each phase of their wealth and corporate lifecycle."
        breadcrumbs={[{ label: "Services" }]}
      />

      <section className="py-20 sm:py-28 bg-[#FAF9F5]">
        <Container>
          <div className="max-w-3xl mb-16 space-y-4">
            <Badge variant="gold">Integrated Advisory</Badge>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0B192C] font-normal tracking-tight leading-tight text-balance">
              The distinct advantage of multidisciplinary advisory without silos.
            </h2>
            <p className="text-base sm:text-lg text-[#4B5565] leading-relaxed">
              In many firms, investment asset management and legal structuring operate in
              disconnection. At Nordsee Capital, every division collaborates actively: real estate
              projects are structured for tax efficiency, M&amp;A transactions leverage tailored
              debt analysis, and wealth strategies align with family residency and generational
              governance.
            </p>
          </div>

          <div className="space-y-12">
            {servicesEn.map((service) => {
              const imageSrc = serviceImages[service.slug] || "/images/home/hero-nordsee.jpg";

              return (
                <div
                  key={service.slug}
                  id={service.slug}
                  className="scroll-mt-28 bg-white rounded-3xl p-8 sm:p-12 border border-black/5 shadow-xs hover:border-[#C5A059]/40 transition-all duration-300 overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    <div className="lg:col-span-5 space-y-5">
                      <div className="relative rounded-2xl overflow-hidden border border-black/10 aspect-[16/10] group">
                        <Image
                          src={imageSrc}
                          alt={`Conceptual architectural image for ${service.title}`}
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
                            {service.geographicCoverage || "Global"}
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
                          href={`/en/services/${service.slug}`}
                          variant="primary"
                          size="sm"
                        >
                          <span>Explore Practice Area</span>
                          <ArrowRight className="w-3.5 h-3.5 ml-1" />
                        </Button>
                      </div>
                    </div>

                    <div className="lg:col-span-7 bg-[#FAF9F5] rounded-2xl p-6 sm:p-8 space-y-6">
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-[#0B192C] mb-3">
                          Key Capabilities:
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
                          Strategic Approach:
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

      {/* Final Consultation Block */}
      <section className="py-20 bg-[#0B192C] text-[#FAF9F5] border-t border-white/10">
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF9F5] font-normal tracking-tight">
              Do you require a tailored cross-border solution?
            </h2>
            <p className="text-sm text-[#F8F9FA]/70 leading-relaxed">
              We review your estate or corporate objectives in complete confidence and
              engineer an actionable roadmap with the corresponding partner group.
            </p>
            <div>
              <Button href="/en/contact" variant="gold" size="md">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
