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
    description: string;
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
      description: "Base operativa corporativa, estructuración societaria y gestión de inversiones locales.",
    },
    {
      region: "Estados Unidos",
      description: "Originación y coinversión en activos inmobiliarios comerciales y residenciales prime.",
    },
    {
      region: "Portugal & Europa",
      description: "Alianza estratégica local para estructuración legal, due diligence y procesos de residencia por inversión.",
    },
  ],
  regulatoryNotice:
    "Las inversiones y estructuras descritas implican riesgos de mercado y no constituyen promesa de rentabilidad garantizada. Los servicios legales y de asesoría se formalizan conforme a contratos específicos y a la normativa legal aplicable en cada jurisdicción.",
};
