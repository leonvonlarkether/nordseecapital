import React from "react";
import { siteConfig } from "@/content/site";

export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FinancialService",
        "@id": "https://nordseecapital.com/#organization",
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        url: "https://nordseecapital.com",
        logo: "https://nordseecapital.com/images/logo-nordsee.png",
        image: "https://nordseecapital.com/images/home/hero-nordsee.jpg",
        description: siteConfig.description,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        address: siteConfig.offices.map((office) => ({
          "@type": "PostalAddress",
          addressLocality: office.city,
          addressCountry: office.country,
          streetAddress: office.address,
        })),
        areaServed: [
          { "@type": "Country", name: "Chile" },
          { "@type": "Country", name: "United States" },
          { "@type": "Country", name: "Portugal" },
        ],
        serviceType: [
          "Wealth Management",
          "Real Estate Investment",
          "Private Debt",
          "Mergers and Acquisitions",
          "Tax and Legal Structuring",
          "Golden Visa Portugal Advisory",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://nordseecapital.com/#website",
        url: "https://nordseecapital.com",
        name: siteConfig.name,
        description: siteConfig.tagline,
        publisher: {
          "@id": "https://nordseecapital.com/#organization",
        },
        inLanguage: "es-CL",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
