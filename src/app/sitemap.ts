import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nordseecapital.com";

  // Fecha fija representativa para prerender estático determinista
  const lastModified = new Date("2026-10-19T00:00:00.000Z");

  const pagePairs = [
    {
      es: "",
      en: "/en",
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      es: "/nosotros",
      en: "/en/about",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      es: "/servicios",
      en: "/en/services",
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      es: "/servicios/real-estate",
      en: "/en/services/real-estate",
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      es: "/servicios/wealth-management",
      en: "/en/services/wealth-management",
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      es: "/servicios/deuda-privada",
      en: "/en/services/private-debt",
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      es: "/servicios/ma",
      en: "/en/services/ma",
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      es: "/servicios/tax-legal",
      en: "/en/services/tax-legal",
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      es: "/servicios/golden-visa-portugal",
      en: "/en/services/golden-visa-portugal",
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      es: "/contacto",
      en: "/en/contact",
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      es: "/privacidad",
      en: "/en/privacy",
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];

  const routes: MetadataRoute.Sitemap = [];

  for (const pair of pagePairs) {
    const esUrl = `${baseUrl}${pair.es}`;
    const enUrl = `${baseUrl}${pair.en}`;

    // Spanish Entry
    routes.push({
      url: esUrl,
      lastModified,
      changeFrequency: pair.changeFrequency,
      priority: pair.priority,
      alternates: {
        languages: {
          es: esUrl,
          en: enUrl,
          "x-default": esUrl,
        },
      },
    });

    // English Entry
    routes.push({
      url: enUrl,
      lastModified,
      changeFrequency: pair.changeFrequency,
      priority: pair.priority,
      alternates: {
        languages: {
          es: esUrl,
          en: enUrl,
          "x-default": esUrl,
        },
      },
    });
  }

  return routes;
}
