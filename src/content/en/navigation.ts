import { NavItem } from "../navigation";

export const mainNavEn: NavItem[] = [
  { label: "Home", href: "/en" },
  { label: "About Us", href: "/en/about" },
  {
    label: "Services",
    href: "/en/services",
    children: [
      {
        label: "Real Estate",
        href: "/en/services/real-estate",
        description: "Prime property development, income assets, and international coinvestment",
      },
      {
        label: "Wealth Management",
        href: "/en/services/wealth-management",
        description: "Independent wealth advisory under open architecture and multi-custody",
      },
      {
        label: "Private Debt",
        href: "/en/services/private-debt",
        description: "Structured corporate and property lending secured by first-lien collaterals",
      },
      {
        label: "M&A",
        href: "/en/services/ma",
        description: "Confidential advisory for mid-market corporate mergers, sales, and acquisitions",
      },
      {
        label: "Tax & Legal",
        href: "/en/services/tax-legal",
        description: "Cross-border tax planning, corporate restructurings, and treaty application",
      },
      {
        label: "Golden Visa Portugal",
        href: "/en/services/golden-visa-portugal",
        description: "Legal guidance and due diligence for CMVM-regulated European residency funds",
      },
    ],
  },
  { label: "Contact", href: "/en/contact" },
];

export const footerNavEn = {
  servicios: [
    { label: "Real Estate", href: "/en/services/real-estate" },
    { label: "Wealth Management", href: "/en/services/wealth-management" },
    { label: "Private Debt", href: "/en/services/private-debt" },
    { label: "M&A", href: "/en/services/ma" },
    { label: "Tax & Legal", href: "/en/services/tax-legal" },
    { label: "Golden Visa Portugal", href: "/en/services/golden-visa-portugal" },
  ],
  institucional: [
    { label: "About Us", href: "/en/about" },
    { label: "Partners & Team", href: "/en/about#team" },
    { label: "Contact", href: "/en/contact" },
    { label: "Privacy Policy", href: "/en/privacy" },
  ],
  services: [
    { label: "Real Estate", href: "/en/services/real-estate" },
    { label: "Wealth Management", href: "/en/services/wealth-management" },
    { label: "Private Debt", href: "/en/services/private-debt" },
    { label: "M&A", href: "/en/services/ma" },
    { label: "Tax & Legal", href: "/en/services/tax-legal" },
    { label: "Golden Visa Portugal", href: "/en/services/golden-visa-portugal" },
  ],
  corporate: [
    { label: "About Us", href: "/en/about" },
    { label: "Partners & Team", href: "/en/about#team" },
    { label: "Contact", href: "/en/contact" },
    { label: "Privacy Policy", href: "/en/privacy" },
  ],
};

/**
 * Mapeo biunívoco de rutas entre Español e Inglés para el selector de idioma y hreflang
 */
export const alternateRouteMap: Record<string, string> = {
  // Español -> Inglés
  "/": "/en",
  "/nosotros": "/en/about",
  "/contacto": "/en/contact",
  "/privacidad": "/en/privacy",
  "/servicios": "/en/services",
  "/servicios/real-estate": "/en/services/real-estate",
  "/servicios/wealth-management": "/en/services/wealth-management",
  "/servicios/deuda-privada": "/en/services/private-debt",
  "/servicios/ma": "/en/services/ma",
  "/servicios/tax-legal": "/en/services/tax-legal",
  "/servicios/golden-visa-portugal": "/en/services/golden-visa-portugal",

  // Inglés -> Español
  "/en": "/",
  "/en/about": "/nosotros",
  "/en/contact": "/contacto",
  "/en/privacy": "/privacidad",
  "/en/services": "/servicios",
  "/en/services/real-estate": "/servicios/real-estate",
  "/en/services/wealth-management": "/servicios/wealth-management",
  "/en/services/private-debt": "/servicios/deuda-privada",
  "/en/services/ma": "/servicios/ma",
  "/en/services/tax-legal": "/servicios/tax-legal",
  "/en/services/golden-visa-portugal": "/servicios/golden-visa-portugal",
};
