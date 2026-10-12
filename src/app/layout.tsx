import type { Metadata } from "next";
import { DM_Serif_Display, Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const serifDisplay = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sansBody = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Nordsee Capital | Gestión Patrimonial, Real Estate y Tax & Legal",
    template: "%s | Nordsee Capital",
  },
  description:
    "Socio estratégico en gestión patrimonial, proyectos inmobiliarios internacionales, deuda privada, M&A y planificación legal y tributaria en Chile, Estados Unidos y Portugal.",
  metadataBase: new URL("https://nordseecapital.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nordsee Capital | Gestión Patrimonial, Real Estate y Tax & Legal",
    description:
      "Socio estratégico en gestión patrimonial, proyectos inmobiliarios internacionales, deuda privada, M&A y planificación legal y tributaria.",
    siteName: "Nordsee Capital",
    locale: "es_CL",
    type: "website",
    url: "https://nordseecapital.com",
    images: [
      {
        url: "/images/home/hero-nordsee.jpg",
        width: 1200,
        height: 630,
        alt: "Nordsee Capital — Inversión Patrimonial y Rigor Legal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nordsee Capital | Gestión Patrimonial, Real Estate y Tax & Legal",
    description:
      "Socio estratégico en gestión patrimonial, proyectos inmobiliarios internacionales, deuda privada, M&A y planificación legal y tributaria.",
    images: ["/images/home/hero-nordsee.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${serifDisplay.variable} ${sansBody.variable} scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-[#FAF9F5] text-[#151B26] antialiased">
        {/* Enlace accesible de salto al contenido principal */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#0B192C] focus:text-[#FAF9F5] focus:rounded-lg focus:border focus:border-[#C5A059] focus:shadow-xl focus:outline-hidden text-xs font-semibold"
        >
          Saltar al contenido principal
        </a>

        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
