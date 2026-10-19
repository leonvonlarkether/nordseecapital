import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { teamMembersEn } from "@/content/en/team";
import { BreadcrumbJsonLd, AboutPageJsonLd } from "@/components/seo/JsonLd";
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
  title: "About Us: Firm Identity, Philosophy & Leadership",
  description:
    "Learn about the mission, fiduciary principles, and managing partners of Nordsee Capital: wealth strategy, real estate investment, and legal rigor.",
  alternates: {
    canonical: "/en/about",
    languages: {
      es: "/nosotros",
      en: "/en/about",
      "x-default": "/nosotros",
    },
  },
  openGraph: {
    title: "About Us: Firm Identity, Philosophy & Leadership | Nordsee Capital",
    description:
      "Learn about the mission, fiduciary principles, and managing partners of Nordsee Capital: wealth strategy, real estate investment, and legal rigor.",
    url: "https://nordseecapital.com/en/about",
    images: [
      {
        url: "/images/about/atrium-corporate.jpg",
        width: 1200,
        height: 896,
        alt: "Nordsee Capital Corporate Office and Managing Partners",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us: Firm Identity, Philosophy & Leadership | Nordsee Capital",
    description:
      "Learn about the mission, fiduciary principles, and managing partners of Nordsee Capital: wealth strategy, real estate investment, and legal rigor.",
    images: ["/images/about/atrium-corporate.jpg"],
  },
};

export default function EnglishAboutPage() {
  const principles = [
    {
      icon: Compass,
      title: "Global Vision & Strategic Footprint",
      desc: "We originate and evaluate opportunities across Chile, the United States, and Portugal, targeting jurisdictions with rock-solid legal certainty and deep capital markets.",
    },
    {
      icon: LineChart,
      title: "Sustainable Returns & Capital Preservation",
      desc: "We prioritize cash flow consistency and resilience over speculative promises. Our primary objective is to safeguard wealth before compounding it.",
    },
    {
      icon: Scale,
      title: "Integrated Legal & Tax Governance",
      desc: "Every financial decision incorporates tax, regulatory, and corporate evaluation from day one, guaranteeing compliance and generational wealth preservation.",
    },
    {
      icon: ShieldCheck,
      title: "Active Governance & Risk Mitigation",
      desc: "We remain hands-on post-closing. We implement strict protective covenants, ongoing financial controls, and active asset monitoring.",
    },
    {
      icon: Users2,
      title: "Open Architecture & True Independence",
      desc: "We distribute no in-house financial products and accept zero hidden third-party referral fees. Our fiduciary guidance remains strictly aligned with client goals.",
    },
    {
      icon: Building,
      title: "Direct Partner Engagement",
      desc: "Boutique, dedicated advisory. Our managing partners personally steer the structuring, negotiation, and monitoring of each client portfolio.",
    },
  ];

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "https://nordseecapital.com/en" },
          { name: "About Us", item: "https://nordseecapital.com/en/about" },
        ]}
      />
      <AboutPageJsonLd />
      {/* 1. Editorial Hero */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 bg-gradient-to-b from-[#F4F2EB] via-[#FAF9F5] to-[#FAF9F5] border-b border-black/5 overflow-hidden">
        <div className="absolute inset-0 bg-grid-subtle opacity-60 pointer-events-none" />

        <Container className="relative z-10">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb navigation"
            className="flex items-center gap-1.5 text-xs text-[#526071] mb-8 font-medium"
          >
            <Link href="/en" className="hover:text-[#C5A059] transition-colors py-1">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#A88340]" aria-hidden="true" />
            <span className="text-[#0B192C]" aria-current="page">
              About Us
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Text Column */}
            <div className="lg:col-span-6 space-y-6">
              <Badge variant="gold">Corporate Identity</Badge>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0B192C] font-normal tracking-tight leading-[1.08] text-balance">
                A resilient bridge between capital, business, and legal discipline.
              </h1>
              <p className="text-base sm:text-lg text-[#4B5565] leading-relaxed">
                Nordsee Capital was founded to address a critical imperative for
                modern investors: seamlessly coordinating investment strategy,
                prime income-generating real estate, and cross-border tax-legal structures.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button href="#team" variant="primary" size="md">
                  <span>Meet the Partners</span>
                  <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
                </Button>
                <Button href="/en/contact" variant="ghost" size="md">
                  Contact the Firm
                </Button>
              </div>
            </div>

            {/* Photo Column */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border border-black/10 shadow-2xl shadow-[#0B192C]/10 aspect-[4/3] sm:aspect-[16/11] group bg-[#0B192C]/5">
                <Image
                  src="/images/about/3socios.png"
                  alt="Managing Partners of Nordsee Capital: Martin Strube, Fernando Prat, and Fernando Llull at their corporate office"
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
                      Managing Partners
                    </span>
                  </div>
                  <p className="font-serif text-base sm:text-lg text-white/95 leading-snug">
                    Martin Strube · Fernando Llull · Fernando Prat
                  </p>
                  <p className="text-xs text-white/70 mt-1">
                    Santiago Headquarters · International Presence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Philosophy & Mission */}
      <section className="py-20 sm:py-28 bg-[#FAF9F5]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <Badge variant="gold">Our Philosophy</Badge>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0B192C] font-normal tracking-tight leading-tight">
                True value is measured not just in yield, but in structural resilience.
              </h2>
              <p className="text-base sm:text-lg text-[#4B5565] leading-relaxed">
                In a volatile global environment, substantial estates require more than
                transactional financial distributors. They demand strategic partners capable
                of sitting at the table with multidisciplinary depth: auditing covenants,
                scrutinizing discount rates, and optimizing cross-border tax implications.
              </p>

              <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-2xs space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A059] block">
                  Our Mission
                </span>
                <p className="font-serif text-lg text-[#0B192C] font-normal leading-snug">
                  “To be the partner of choice in stable investments and resilient
                  businesses for clients with a global outlook, acting with analytical
                  rigor, technical independence, and unwavering adherence to the law.”
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border border-black/10 shadow-2xl shadow-[#0B192C]/10 aspect-[4/3] group">
                <Image
                  src="/images/about/atrium-corporate.jpg"
                  alt="Architectural corporate atrium — Institutional sobriety concept image"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C5A059]">
                      Institutional Space
                    </span>
                  </div>
                  <p className="font-serif text-base text-white/95">
                    An environment of fiduciary trust, sobriety, and multidisciplinary analysis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Principles Section */}
      <section className="py-20 sm:py-28 bg-[#0B192C] text-[#FAF9F5] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-50 pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-2xl mb-16">
            <Badge variant="dark">Institutional Standard</Badge>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF9F5] font-normal tracking-tight mt-4 leading-tight">
              Principles guiding every mandate.
            </h2>
            <p className="text-base text-[#F8F9FA]/75 mt-4">
              Six core principles governing the origination, structuring, and ongoing
              oversight of all transactions at Nordsee Capital.
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

      {/* 4. Leadership Section */}
      <section id="team" className="py-20 sm:py-28 bg-[#FAF9F5] border-t border-black/5 scroll-mt-20">
        <Container>
          <div className="max-w-3xl mb-16 space-y-4">
            <Badge variant="gold">Managing Partners</Badge>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0B192C] font-normal tracking-tight leading-tight">
              Multidisciplinary depth and corporate governance.
            </h2>
            <p className="text-base sm:text-lg text-[#4B5565] leading-relaxed">
              We combine commercial engineering, quantitative finance, and postgraduate
              tax law to deliver uncompromised institutional judgment in every transaction.
              Managing partners personally direct each mandate without intermediaries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 mb-16">
            {teamMembersEn.map((member) => (
              <div
                key={member.name}
                className="group bg-white rounded-3xl p-7 sm:p-8 border border-black/5 shadow-xs hover:border-[#C5A059]/40 hover:shadow-xl hover:shadow-[#0B192C]/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-square rounded-2xl overflow-hidden mb-8 bg-[#0B192C]/5 border border-black/5 shadow-2xs group-hover:border-[#C5A059]/30 transition-colors">
                    <Image
                      src={member.image}
                      alt={`Professional portrait of ${member.name} — Managing Partner at Nordsee Capital`}
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
                    <GraduationCap className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="font-medium italic">{member.credentials}</span>
                  </div>

                  <p className="text-sm text-[#4B5565] leading-relaxed mb-6">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-6 border-t border-black/5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#738094] block mb-2">
                    Core Specializations:
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

          {/* Boutique Block */}
          <div className="bg-[#0B192C] rounded-3xl p-8 sm:p-12 md:p-16 text-center text-[#FAF9F5] relative overflow-hidden border border-white/10 shadow-xl">
            <div className="max-w-2xl mx-auto space-y-6 relative z-10">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059] block">
                Boutique Focus &amp; Direct Access
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#FAF9F5] font-normal tracking-tight text-balance">
                Direct partner access for every strategic decision.
              </h3>
              <p className="text-sm sm:text-base text-[#F8F9FA]/75 leading-relaxed">
                At Nordsee Capital, we believe in lasting multi-generational relationships.
                We partner with a selective group of clients to ensure each portfolio receives
                the dedicated attention and rigorous standards of our founding partners.
              </p>
              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <Button href="/en/contact" variant="gold" size="md">
                  <span>Schedule Partner Meeting</span>
                  <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
