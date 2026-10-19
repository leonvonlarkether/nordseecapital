import { SiteConfig } from "../site";

export const siteConfigEn: SiteConfig = {
  name: "Nordsee Capital",
  legalName: "Nordsee Capital Management",
  tagline: "Strategic Partner in Wealth Management, Prime Real Estate & Legal Structuring",
  description:
    "Comprehensive advisory in wealth management, international real estate development, private debt, M&A, and cross-border tax/legal structuring for high-net-worth families and institutions.",
  email: "contacto@nordseecapital.com",
  phone: "+56 9 6667 4099",
  social: {
    instagram: "https://www.instagram.com/nordsee_capital/",
    twitter: "https://x.com/nordsee_capital/",
  },
  offices: [
    {
      city: "Santiago",
      country: "Chile",
      address: "Los Militares, Las Condes, Santiago (Floor 21, Office 2101)",
      office: "Floor 21, Office 2101",
      role: "Corporate Headquarters",
      status: "pending_confirmation",
    },
    {
      city: "Concepción",
      country: "Chile",
      address: "Bernardo O'Higgins 241, Floor 9, Office 903",
      office: "Floor 9, Office 903",
      role: "Southern Regional Office",
      status: "verified",
    },
  ],
  internationalReach: [
    {
      region: "Chile",
      subregion: "Southern Cone Hub",
      badge: "Headquarters",
      flags: [
        { src: "/images/home/chile.png", alt: "Chile Flag" }
      ],
      description: "Corporate operational base, corporate structuring, family wealth advisory, and domestic investment with fiduciary discipline.",
      highlights: [
        "Santiago & Concepción",
        "Tax & Legal Structuring",
        "Wealth Advisory"
      ],
      href: "/en/about",
      ctaText: "View Team & Offices"
    },
    {
      region: "United States",
      subregion: "Prime Market",
      badge: "North America",
      flags: [
        { src: "/images/home/estados_unidos.png", alt: "United States Flag" }
      ],
      description: "Origination and coinvestment in commercial and prime residential real estate assets, with risk mitigation and structured debt.",
      highlights: [
        "Prime Real Estate Assets",
        "Structured Private Debt",
        "Cross-Border Strategy"
      ],
      href: "/en/services/real-estate",
      ctaText: "View Real Estate"
    },
    {
      region: "Portugal & Europe",
      subregion: "EU Platform",
      badge: "European Union",
      flags: [
        { src: "/images/home/portugal.png", alt: "Portugal Flag" },
        { src: "/images/home/union_europea.png", alt: "European Union Flag" }
      ],
      description: "Strategic on-the-ground alliance for legal structuring, fund due diligence, and European Golden Visa eligibility.",
      highlights: [
        "Portugal Golden Visa",
        "EU Tax Planning",
        "Lisbon Strategic Presence"
      ],
      href: "/en/services/golden-visa-portugal",
      ctaText: "View Golden Visa"
    },
  ],
  regulatoryNotice:
    "The investments and structures described involve market risks and do not constitute a guarantee of future returns. Legal and advisory services are formalized under specific contracts and in strict compliance with applicable laws in each jurisdiction.",
};
