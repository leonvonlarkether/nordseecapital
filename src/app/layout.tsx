import type { Metadata } from "next";
import { DM_Serif_Display, Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
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
  },
  robots: {
    index: true,
    follow: true,
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
    >
      <body className="min-h-screen flex flex-col font-sans bg-[#FAF9F5] text-[#151B26] antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
