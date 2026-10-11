export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

export const mainNav: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  {
    label: "Servicios",
    href: "/servicios",
    children: [
      {
        label: "Real Estate",
        href: "/servicios/real-estate",
        description: "Desarrollo, renta y gestión de activos inmobiliarios prime",
      },
      {
        label: "Wealth Management",
        href: "/servicios/wealth-management",
        description: "Asesoría patrimonial independiente y arquitectura abierta",
      },
      {
        label: "Deuda Privada",
        href: "/servicios/deuda-privada",
        description: "Financiamiento estructurado con mitigación de riesgos",
      },
      {
        label: "M&A",
        href: "/servicios/ma",
        description: "Fusiones, adquisiciones y reorganizaciones empresariales",
      },
      {
        label: "Tax & Legal",
        href: "/servicios/tax-legal",
        description: "Planificación tributaria y corporativa internacional",
      },
      {
        label: "Golden Visa Portugal",
        href: "/servicios/golden-visa-portugal",
        description: "Acompañamiento legal y elegibilidad de inversión europea",
      },
    ],
  },
  { label: "Equipo", href: "/equipo" },
  { label: "Contacto", href: "/contacto" },
];

export const footerNav = {
  servicios: [
    { label: "Real Estate", href: "/servicios/real-estate" },
    { label: "Wealth Management", href: "/servicios/wealth-management" },
    { label: "Deuda Privada", href: "/servicios/deuda-privada" },
    { label: "M&A", href: "/servicios/ma" },
    { label: "Tax & Legal", href: "/servicios/tax-legal" },
    { label: "Golden Visa Portugal", href: "/servicios/golden-visa-portugal" },
  ],
  institucional: [
    { label: "Nosotros", href: "/nosotros" },
    { label: "Equipo Directivo", href: "/equipo" },
    { label: "Contacto", href: "/contacto" },
    { label: "Privacidad & Legal", href: "/privacidad" },
  ],
};
