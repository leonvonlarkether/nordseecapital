export interface OfficeLocation {
  city: string;
  country: string;
  address: string;
  office?: string;
  role: string;
  status: "verified" | "pending_confirmation";
}

export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;
  social: {
    instagram?: string;
    twitter?: string;
  };
  offices: OfficeLocation[];
  internationalReach: {
    region: string;
    subregion?: string;
    badge?: string;
    flags: { src: string; alt: string }[];
    description: string;
    highlights: string[];
    href: string;
    ctaText: string;
  }[];
  regulatoryNotice: string;
}

export const siteConfig: SiteConfig = {
  name: "Nordsee Capital",
  legalName: "Nordsee Capital Management",
  tagline: "Socio estratégico en inversión patrimonial, activos inmobiliarios y estructuración legal",
  description:
    "Asesoría integral en gestión patrimonial, desarrollo inmobiliario internacional, deuda privada, M&A y planificación legal/tributaria para clientes e instituciones con visión global.",
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
      address: "Los Militares, Las Condes, Santiago (Piso 21, Oficina 2101)",
      office: "Piso 21, Oficina 2101",
      role: "Sede Corporativa Principal",
      status: "pending_confirmation",
    },
    {
      city: "Concepción",
      country: "Chile",
      address: "Bernardo O'Higgins 241, Piso 9, Oficina 903",
      office: "Piso 9, Oficina 903",
      role: "Oficina Regional Sur",
      status: "verified",
    },
  ],
  internationalReach: [
    {
      region: "Chile",
      subregion: "Hub Cono Sur",
      badge: "Sede Principal",
      flags: [
        { src: "/images/home/chile.png", alt: "Bandera de Chile" }
      ],
      description: "Base operativa corporativa, estructuración societaria, gestión de patrimonios familiares e inversión local con resguardo fiduciario.",
      highlights: [
        "Santiago & Concepción",
        "Estructuración Legal & Tax",
        "Asesoría Patrimonial"
      ],
      href: "/nosotros",
      ctaText: "Ver Sede y Equipo"
    },
    {
      region: "Estados Unidos",
      subregion: "Mercado Prime",
      badge: "Norteamérica",
      flags: [
        { src: "/images/home/estados_unidos.png", alt: "Bandera de Estados Unidos" }
      ],
      description: "Originación y coinversión en activos inmobiliarios comerciales y residenciales prime, con mitigación de riesgos y deuda estructurada.",
      highlights: [
        "Activos Inmobiliarios Prime",
        "Deuda Privada Estructurada",
        "Criterio Transfronterizo"
      ],
      href: "/servicios/real-estate",
      ctaText: "Ver Real Estate"
    },
    {
      region: "Portugal & Europa",
      subregion: "Plataforma UE",
      badge: "Unión Europea",
      flags: [
        { src: "/images/home/portugal.png", alt: "Bandera de Portugal" },
        { src: "/images/home/union_europea.png", alt: "Bandera de la Unión Europea" }
      ],
      description: "Alianza estratégica local para estructuración legal, due diligence inmobiliario y procesos de elegibilidad Golden Visa europea.",
      highlights: [
        "Golden Visa Portugal",
        "Planificación Fiscal UE",
        "Presencia en Lisboa"
      ],
      href: "/servicios/golden-visa-portugal",
      ctaText: "Ver Golden Visa"
    },
  ],
  regulatoryNotice:
    "Las inversiones y estructuras descritas implican riesgos de mercado y no constituyen promesa de rentabilidad garantizada. Los servicios legales y de asesoría se formalizan conforme a contratos específicos y a la normativa legal aplicable en cada jurisdicción.",
};
