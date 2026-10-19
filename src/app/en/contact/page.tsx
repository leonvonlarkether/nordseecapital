import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfigEn } from "@/content/en/site";
import { BreadcrumbJsonLd, ContactPageJsonLd } from "@/components/seo/JsonLd";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Globe,
  Building2,
  Users2,
  Scale,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact: Offices & Official Fiduciary Inquiries",
  description:
    "Connect directly with our managing partners. Corporate offices in Santiago and Concepción. Fiduciary advisory for domestic and cross-border investors.",
  alternates: {
    canonical: "/en/contact",
    languages: {
      es: "/contacto",
      en: "/en/contact",
      "x-default": "/contacto",
    },
  },
  openGraph: {
    title: "Contact: Offices & Official Fiduciary Inquiries | Nordsee Capital",
    description:
      "Connect directly with our managing partners. Corporate offices in Santiago and Concepción. Fiduciary advisory for domestic and cross-border investors.",
    url: "https://nordseecapital.com/en/contact",
    images: [
      {
        url: "/images/contact/santiago-corporate.jpg",
        width: 1200,
        height: 800,
        alt: "Nordsee Capital Corporate Offices and Advisory Desks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact: Offices & Official Fiduciary Inquiries | Nordsee Capital",
    description:
      "Connect directly with our managing partners. Corporate offices in Santiago and Concepción. Fiduciary advisory for domestic and cross-border investors.",
    images: ["/images/contact/santiago-corporate.jpg"],
  },
};

export default function EnglishContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "https://nordseecapital.com/en" },
          { name: "Contact", item: "https://nordseecapital.com/en/contact" },
        ]}
      />
      <ContactPageJsonLd />
      {/* =========================================================================
          HERO SECTION
         ========================================================================= */}
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 overflow-hidden bg-gradient-to-b from-[#F4F2EB] via-[#FAF9F5] to-[#FAF9F5] border-b border-black/5">
        <div className="absolute inset-0 bg-grid-subtle opacity-60 pointer-events-none" />

        <Container size="wide" className="relative z-10">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb navigation"
            className="flex items-center gap-1.5 text-xs text-[#738094] mb-6 font-medium"
          >
            <Link href="/en" className="hover:text-[#C5A059] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#A88340]" />
            <span className="text-[#0B192C]" aria-current="page">
              Contact &amp; Official Desks
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column (7 cols): Header & Fiduciary Pillars */}
            <div className="lg:col-span-7 space-y-6">
              <Badge variant="gold">Fiduciary Care &amp; Wealth Concierge</Badge>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0B192C] font-normal tracking-tight leading-[1.12]">
                Let us begin a strategic conversation.
              </h1>

              <p className="text-base sm:text-lg text-[#4B5565] leading-relaxed max-w-2xl font-normal">
                Direct and confidential engagement with our managing partners. We coordinate
                meetings at our offices in Santiago or Concepción, as well as secure virtual
                sessions for international clients and family offices abroad.
              </p>

              {/* 3 Fiduciary Seals */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-black/8">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#C5A059]/15 text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5">
                    <Users2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#0B192C] uppercase tracking-wider">
                      Partner-Led
                    </h4>
                    <p className="text-xs text-[#738094] mt-0.5 leading-snug">
                      Initial meeting directly with the leadership group.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#C5A059]/15 text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#0B192C] uppercase tracking-wider">
                      Discretion &amp; NDA
                    </h4>
                    <p className="text-xs text-[#738094] mt-0.5 leading-snug">
                      Fiduciary secrecy and non-disclosure governance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#C5A059]/15 text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#0B192C] uppercase tracking-wider">
                      Response &lt; 24h
                    </h4>
                    <p className="text-xs text-[#738094] mt-0.5 leading-snug">
                      Structured, prompt executive turnaround.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (5 cols): Managing Partners Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden bg-white border border-black/8 shadow-xl shadow-black/[0.04] p-6 sm:p-7 space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C5A059]">
                    Leadership Desk
                  </span>
                  <span className="text-xs text-[#738094] font-medium">
                    Nordsee Capital
                  </span>
                </div>

                {/* Photo */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-black/10 group">
                  <Image
                    src="/images/about/3socios.png"
                    alt="Managing partners of Nordsee Capital: Fernando Llull, Martin Strube, and Fernando Prat"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-103"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/75 via-transparent to-black/10 pointer-events-none" />
                  <div className="absolute bottom-3 left-4 right-4 text-white pointer-events-none">
                    <span className="text-xs font-serif text-white/95 block">
                      Martin Strube · Fernando Llull · Fernando Prat
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-[#C5A059]">
                      Managing Partners
                    </span>
                  </div>
                </div>

                <div className="space-y-3 pt-1">
                  <p className="text-xs text-[#4B5565] leading-relaxed">
                    Our private wealth and corporate clients benefit from direct, unmediated
                    access to the partners responsible for each mandate, ensuring perfect alignment
                    of interests and disciplined execution.
                  </p>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 border-t border-black/5 text-xs">
                    <a
                      href={`mailto:${siteConfigEn.email}`}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#0B192C] text-white hover:bg-[#152338] transition-colors font-medium min-h-[44px]"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>Email the Partners</span>
                    </a>
                    <a
                      href={`tel:${siteConfigEn.phone.replace(/\s+/g, "")}`}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl border border-black/10 bg-[#FAF9F5] text-[#0B192C] hover:border-[#C5A059] transition-colors font-medium min-h-[44px]"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>{siteConfigEn.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          CENTRAL SECTION: Contact Form & Corporate Coordinates
         ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAF9F5]">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column (5 cols): Direct channels & secrecy */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#0B192C] text-[#FAF9F5] rounded-3xl p-7 sm:p-8 space-y-6 border border-white/10 shadow-lg">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C5A059] block">
                      Direct Engagement
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-white font-normal">
                      Direct Channels
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[11px] font-medium text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Active Desk</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-white/50 block mb-1">
                      Institutional Email
                    </span>
                    <a
                      href={`mailto:${siteConfigEn.email}`}
                      className="group inline-flex items-center gap-3 text-white/90 hover:text-[#C5A059] transition-colors py-1.5 text-sm sm:text-base font-medium break-all"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#C5A059]/40">
                        <Mail className="w-4 h-4 text-[#C5A059]" aria-hidden="true" />
                      </div>
                      <span>{siteConfigEn.email}</span>
                    </a>
                  </div>

                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-white/50 block mb-1">
                      Corporate Phone &amp; Desk
                    </span>
                    <a
                      href={`tel:${siteConfigEn.phone.replace(/\s+/g, "")}`}
                      className="group inline-flex items-center gap-3 text-white/90 hover:text-[#C5A059] transition-colors py-1.5 text-sm sm:text-base font-medium"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#C5A059]/40">
                        <Phone className="w-4 h-4 text-[#C5A059]" aria-hidden="true" />
                      </div>
                      <span>{siteConfigEn.phone}</span>
                    </a>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center gap-3 text-xs text-white/60">
                    <Clock className="w-4 h-4 text-[#C5A059] shrink-0" aria-hidden="true" />
                    <span>CLT Business Hours: Monday to Friday, 09:00 to 18:30 hrs</span>
                  </div>
                </div>
              </div>

              {/* Santiago Image Card */}
              <div className="relative rounded-3xl overflow-hidden border border-black/8 shadow-md aspect-[16/10] group">
                <Image
                  src="/images/contact/santiago-corporate.jpg"
                  alt="Corporate district in Las Condes, Santiago — Reference image"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/85 via-[#0B192C]/30 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-5 right-5 text-white pointer-events-none">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C5A059] block mb-1">
                    Financial District
                  </span>
                  <span className="font-serif text-base sm:text-lg text-white font-normal block">
                    Las Condes · Santiago, Chile
                  </span>
                  <span className="text-xs text-white/75 mt-0.5 block">
                    Los Militares (Floor 21) · Boardroom &amp; Committees
                  </span>
                </div>
              </div>

              {/* Secrecy Protocol */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-black/8 shadow-xs space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#C5A059]/15 text-[#C5A059] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#0B192C]">
                      Confidentiality Protocol
                    </h4>
                    <span className="text-[11px] text-[#738094]">
                      Private Banking &amp; Family Office Standard
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#4B5565] leading-relaxed">
                  All consultations and financial records submitted through this intake form
                  or our official channels are governed by strict fiduciary professional secrecy
                  and bilateral non-disclosure agreements (NDAs).
                </p>
              </div>
            </div>

            {/* Right Column (7 cols): Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm locale="en" />
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          OFFICES & GLOBAL REACH
         ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white border-t border-black/5">
        <Container size="wide">
          <div className="max-w-2xl mb-12 sm:mb-16 space-y-3">
            <Badge variant="gold">Infrastructure &amp; Reach</Badge>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0B192C] font-normal tracking-tight">
              Our Offices &amp; International Presence
            </h2>
            <p className="text-sm sm:text-base text-[#4B5565] leading-relaxed">
              Physical infrastructure across the leading commercial hubs of Chile, paired with
              direct alliances for legal structuring and custody across North America and Europe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Office 1: Santiago */}
            <div className="bg-[#FAF9F5] rounded-3xl p-7 sm:p-8 border border-black/8 shadow-xs flex flex-col justify-between space-y-6 hover:border-[#C5A059]/40 transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
                    Corporate Headquarters
                  </span>
                  <span className="text-xs font-medium px-2 py-0.5 rounded-md bg-black/5 text-[#4B5565]">
                    Chile
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif text-2xl text-[#0B192C] font-normal">
                    Santiago
                  </h3>
                  <span className="text-xs text-[#738094] block">
                    El Golf / Las Condes Financial District
                  </span>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#4B5565] pt-2 border-t border-black/5">
                  <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>Los Militares, Las Condes (Floor 21, Suite 2101)</span>
                </div>

                <p className="text-xs text-[#738094] leading-relaxed">
                  Wealth Management desk, real estate investment committees, and executive headquarters.
                </p>
              </div>

              <div className="pt-4 border-t border-black/5 flex items-center justify-between text-xs text-[#4B5565]">
                <span className="flex items-center gap-1.5 font-medium">
                  <Building2 className="w-3.5 h-3.5 text-[#C5A059]" />
                  Meetings by advance appointment
                </span>
                <span className="text-[#738094]">Floor 21</span>
              </div>
            </div>

            {/* Office 2: Concepción */}
            <div className="bg-[#FAF9F5] rounded-3xl p-7 sm:p-8 border border-black/8 shadow-xs flex flex-col justify-between space-y-6 hover:border-[#C5A059]/40 transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
                    Southern Regional Office
                  </span>
                  <span className="text-xs font-medium px-2 py-0.5 rounded-md bg-black/5 text-[#4B5565]">
                    Chile
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif text-2xl text-[#0B192C] font-normal">
                    Concepción
                  </h3>
                  <span className="text-xs text-[#738094] block">
                    Southern Macrozone Civic &amp; Financial Center
                  </span>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#4B5565] pt-2 border-t border-black/5">
                  <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>Bernardo O&apos;Higgins 241, Floor 9, Suite 903</span>
                </div>

                <p className="text-xs text-[#738094] leading-relaxed">
                  Specialized service for mid-market corporates, family groups, and regional private debt origination.
                </p>
              </div>

              <div className="pt-4 border-t border-black/5 flex items-center justify-between text-xs text-[#4B5565]">
                <span className="flex items-center gap-1.5 font-medium">
                  <Building2 className="w-3.5 h-3.5 text-[#C5A059]" />
                  Executive Desk
                </span>
                <span className="text-[#738094]">Floor 9</span>
              </div>
            </div>

            {/* Office 3: Cross-border platform */}
            <div className="bg-[#FAF9F5] rounded-3xl p-7 sm:p-8 border border-black/8 shadow-xs flex flex-col justify-between space-y-6 hover:border-[#C5A059]/40 transition-colors md:col-span-2 lg:col-span-1">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
                    Cross-Border Platform
                  </span>
                  <span className="text-xs font-medium px-2 py-0.5 rounded-md bg-[#C5A059]/15 text-[#0B192C]">
                    Global Desk
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif text-2xl text-[#0B192C] font-normal">
                    US &amp; Europe
                  </h3>
                  <span className="text-xs text-[#738094] block">
                    Miami · Delaware · Lisbon · Porto
                  </span>
                </div>

                {/* Flags */}
                <div className="flex items-center gap-2.5 pt-2 border-t border-black/5">
                  <div className="relative w-7 h-7 rounded-full overflow-hidden border border-black/10 shadow-2xs">
                    <Image
                      src="/images/home/estados_unidos.png"
                      alt="United States"
                      fill
                      sizes="28px"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-7 h-7 rounded-full overflow-hidden border border-black/10 shadow-2xs">
                    <Image
                      src="/images/home/portugal.png"
                      alt="Portugal"
                      fill
                      sizes="28px"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-7 h-7 rounded-full overflow-hidden border border-black/10 shadow-2xs">
                    <Image
                      src="/images/home/union_europea.png"
                      alt="European Union"
                      fill
                      sizes="28px"
                      className="object-cover"
                    />
                  </div>
                  <span className="text-xs text-[#738094] ml-1 font-medium">
                    Prime Jurisdictions
                  </span>
                </div>

                <p className="text-xs text-[#738094] leading-relaxed">
                  Offshore corporate structuring, Portugal Golden Visa fund advisory,
                  and prime real estate co-investment in the United States.
                </p>
              </div>

              <div className="pt-4 border-t border-black/5 flex items-center justify-between text-xs text-[#4B5565]">
                <span className="flex items-center gap-1.5 font-medium">
                  <Globe className="w-3.5 h-3.5 text-[#C5A059]" />
                  Virtual or Bilateral Session
                </span>
                <span className="text-[#C5A059] font-semibold">Active Alliances</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          FIDUCIARY COMMITMENTS
         ========================================================================= */}
      <section className="py-14 sm:py-16 bg-[#0B192C] text-[#FAF9F5] border-t border-white/10">
        <Container size="wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2.5 text-[#C5A059]">
                <Users2 className="w-5 h-5" />
                <span className="text-xs font-semibold uppercase tracking-wider">
                  Partner Access
                </span>
              </div>
              <p className="text-xs text-[#FAF9F5]/75 leading-relaxed">
                Zero commercial intermediaries. Every strategic decision is steered
                by a managing partner with proven transaction experience.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2.5 text-[#C5A059]">
                <Scale className="w-5 h-5" />
                <span className="text-xs font-semibold uppercase tracking-wider">
                  Open Architecture
                </span>
              </div>
              <p className="text-xs text-[#FAF9F5]/75 leading-relaxed">
                No proprietary products or hidden commissions. We select top-tier
                investment vehicles with total fiduciary independence.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2.5 text-[#C5A059]">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-xs font-semibold uppercase tracking-wider">
                  Fiduciary Secrecy
                </span>
              </div>
              <p className="text-xs text-[#FAF9F5]/75 leading-relaxed">
                Absolute confidentiality in managing family, corporate, and
                financial matters under Swiss private banking standards.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2.5 text-[#C5A059]">
                <Globe className="w-5 h-5" />
                <span className="text-xs font-semibold uppercase tracking-wider">
                  Cross-Border Rigor
                </span>
              </div>
              <p className="text-xs text-[#FAF9F5]/75 leading-relaxed">
                Solid structures across Chile, the US, and Europe in strict
                compliance with current regulatory and tax frameworks.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
