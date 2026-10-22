import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { siteConfigEn } from "@/content/en/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy & Data Protection",
  description:
    "Data privacy framework, personal information handling, and confidentiality standards of Nordsee Capital under Chilean Laws 19,628 and 21,719.",
  alternates: {
    canonical: "/en/privacy",
    languages: {
      es: "/privacidad",
      en: "/en/privacy",
      "x-default": "/privacidad",
    },
  },
  openGraph: {
    title: "Privacy Policy & Data Protection | Nordsee Capital",
    description:
      "Data privacy framework, personal information handling, and confidentiality standards of Nordsee Capital under Chilean Laws 19,628 and 21,719.",
    url: "https://nordseecapital.com/en/privacy",
    images: [
      {
        url: "/images/og-logo.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy — Nordsee Capital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy & Data Protection | Nordsee Capital",
    description:
      "Data privacy framework, personal information handling, and confidentiality standards of Nordsee Capital under Chilean Laws 19,628 and 21,719.",
    images: ["/images/og-logo.png"],
  },
};

export default function EnglishPrivacyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "https://nordseecapital.com/en" },
          { name: "Privacy", item: "https://nordseecapital.com/en/privacy" },
        ]}
      />
      <PageHeader
        badge="Legal &amp; Regulatory Framework"
        title="Privacy Policy &amp; Data Governance"
        description="Guidelines and institutional standards applied by Nordsee Capital for safeguarding confidentiality and personal data protection for our clients and counterparties."
        breadcrumbs={[{ label: "Privacy" }]}
      />

      <section className="py-20 sm:py-28 bg-[#FAF9F5]">
        <Container size="narrow">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-black/5 shadow-xs space-y-10 text-sm sm:text-base text-[#4B5565] leading-relaxed">
            {/* Notice */}
            <div className="p-5 rounded-2xl bg-[#F4F2EB] border border-[#C5A059]/30 flex items-start gap-3.5 text-xs text-[#232B3A]">
              <AlertTriangle className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
              <div>
                <strong className="block font-semibold mb-1 text-[#0B192C]">
                  Document Status: Subject to Final Legal Protocolization
                </strong>
                This text outlines our institutional confidentiality and data governance framework.
                Definitive legal clauses will be formally protocolized prior to final commercial rollout
                in coordination with external legal counsel.
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-[#0B192C] font-normal">
                1. Data Controller Identification
              </h2>
              <p>
                The data controller responsible for personal information processed through this website is{" "}
                <strong className="text-[#0B192C]">{siteConfigEn.legalName}</strong>, with corporate
                domicile at Los Militares (Floor 21, Suite 2101, Las Condes, Santiago, Chile), and
                inquiry email{" "}
                <a
                  href={`mailto:${siteConfigEn.email}`}
                  className="text-[#C5A059] underline font-medium"
                >
                  {siteConfigEn.email}
                </a>
                .
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-[#0B192C] font-normal">
                2. Applicable Legal Framework
              </h2>
              <p>
                Personal information is processed in accordance with Chilean privacy statutes, notably{" "}
                <strong className="text-[#0B192C]">Law No. 19,628</strong> on the Protection of Private Life
                and <strong className="text-[#0B192C]">Law No. 21,719</strong> regulating personal data protection,
                as well as internationally recognized standards for information security.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-[#0B192C] font-normal">
                3. Purpose of Data Collection
              </h2>
              <p>
                Data requested through our corporate intake forms (name, organization, email, telephone,
                and message context) is collected exclusively for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-[#232B3A]">
                <li>Responding to inquiries and meeting requests submitted by prospective clients.</li>
                <li>
                  Preliminary assessment of eligibility and interest in wealth advisory, real estate
                  structures, private debt, and cross-border corporate services.
                </li>
                <li>
                  Complying with mandatory Know Your Customer (KYC) and Anti-Money Laundering (AML)
                  statutory due diligence upon formal engagement.
                </li>
              </ul>
              <p>
                Nordsee Capital <strong className="text-[#0B192C]">never sells, rents, or transfers</strong> client
                databases to third parties under any circumstances.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-[#0B192C] font-normal">
                4. Confidentiality and Technical Safeguards
              </h2>
              <p>
                We maintain appropriate organizational and technical safeguards to prevent unauthorized access,
                loss, or alteration of data. All communication between user browsers and our systems is
                encrypted via modern HTTPS (TLS) protocols.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-[#0B192C] font-normal">
                5. Rights of Data Subjects
              </h2>
              <p>
                Data subjects may exercise their rights of access, rectification, cancellation, and objection
                (ARCO rights) at any time by sending a written notice to{" "}
                <a
                  href={`mailto:${siteConfigEn.email}`}
                  className="text-[#C5A059] underline font-medium"
                >
                  {siteConfigEn.email}
                </a>
                .
              </p>
            </div>

            <div className="pt-6 border-t border-black/10 text-xs text-[#738094]">
              Last referenced update: October 2026.
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
