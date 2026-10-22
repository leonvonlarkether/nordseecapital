import React from "react";
import { siteConfig } from "@/content/site";
import { ServiceItem } from "@/content/services";

function sanitizeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

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
        image: "https://nordseecapital.com/images/og-logo.png",
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
      dangerouslySetInnerHTML={{ __html: sanitizeJsonLd(structuredData) }}
    />
  );
}

export interface BreadcrumbItemSchema {
  name: string;
  item: string;
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItemSchema[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: sanitizeJsonLd(data) }}
    />
  );
}

export function ServiceJsonLd({
  service,
  canonicalUrl,
}: {
  service: ServiceItem;
  canonicalUrl: string;
}) {
  const countries = service.geographicCoverage
    ? service.geographicCoverage
        .split(/ y |, /)
        .map((geo) => geo.trim())
        .filter(Boolean)
    : [];

  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonicalUrl}#service`,
    name: service.title,
    description: service.summary,
    url: canonicalUrl,
    provider: {
      "@id": "https://nordseecapital.com/#organization",
    },
    serviceType: service.shortTitle,
    ...(countries.length > 0
      ? {
          areaServed: countries.map((c) => ({
            "@type": "Country" as const,
            name: c,
          })),
        }
      : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: sanitizeJsonLd(data) }}
    />
  );
}

export function AboutPageJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://nordseecapital.com/nosotros#webpage",
    url: "https://nordseecapital.com/nosotros",
    name: "Nosotros: Identidad, Filosofía y Equipo Directivo",
    isPartOf: {
      "@id": "https://nordseecapital.com/#website",
    },
    about: {
      "@id": "https://nordseecapital.com/#organization",
    },
    inLanguage: "es-CL",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: sanitizeJsonLd(data) }}
    />
  );
}

export function ContactPageJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://nordseecapital.com/contacto#webpage",
    url: "https://nordseecapital.com/contacto",
    name: "Contacto: Sedes y Canales Oficiales",
    isPartOf: {
      "@id": "https://nordseecapital.com/#website",
    },
    about: {
      "@id": "https://nordseecapital.com/#organization",
    },
    inLanguage: "es-CL",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: sanitizeJsonLd(data) }}
    />
  );
}
