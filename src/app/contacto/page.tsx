import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/content/site";
import { BreadcrumbJsonLd, ContactPageJsonLd } from "@/components/seo/JsonLd";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Globe,
  Building2,
  Users2,
  Scale,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto: Sedes y Canales Oficiales",
  description:
    "Comuníquese directamente con nuestros socios directores. Sedes corporativas en Santiago y Concepción. Atención fiduciaria para inversionistas en Chile y el exterior.",
  alternates: {
    canonical: "/contacto",
    languages: {
      es: "/contacto",
      en: "/en/contact",
      "x-default": "/contacto",
    },
  },
  openGraph: {
    title: "Contacto: Sedes y Canales Oficiales | Nordsee Capital",
    description:
      "Comuníquese directamente con nuestros socios directores. Sedes corporativas en Santiago y Concepción. Atención fiduciaria para inversionistas en Chile y el exterior.",
    url: "https://nordseecapital.com/contacto",
    images: [
      {
        url: "/images/contact/santiago-corporate.jpg",
        width: 1200,
        height: 800,
        alt: "Oficinas y canales de contacto de Nordsee Capital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto: Sedes y Canales Oficiales | Nordsee Capital",
    description:
      "Comuníquese directamente con nuestros socios directores. Sedes corporativas en Santiago y Concepción. Atención fiduciaria para inversionistas en Chile y el exterior.",
    images: ["/images/contact/santiago-corporate.jpg"],
  },
};

export default function ContactoPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", item: "https://nordseecapital.com" },
          { name: "Contacto", item: "https://nordseecapital.com/contacto" },
        ]}
      />
      <ContactPageJsonLd />
      {/* =========================================================================
          HERO SECTION: Concierge de Inversión & Respaldo de Socios Directores
          Resuelve de raíz el vacío de cabecera con una grilla 7/5 balanceada.
         ========================================================================= */}
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 overflow-hidden bg-gradient-to-b from-[#F4F2EB] via-[#FAF9F5] to-[#FAF9F5] border-b border-black/5">
        <div className="absolute inset-0 bg-grid-subtle opacity-60 pointer-events-none" />

        <Container size="wide" className="relative z-10">
          {/* Breadcrumbs */}
          <nav
            aria-label="Ruta de navegación"
            className="flex items-center gap-1.5 text-xs text-[#738094] mb-6 font-medium"
          >
            <Link href="/" className="hover:text-[#C5A059] transition-colors">
              Inicio
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#A88340]" />
            <span className="text-[#0B192C]" aria-current="page">
              Contacto &amp; Sedes Oficiales
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Columna Izquierda (7 cols): Titular Institucional & Pilares de Confianza */}
            <div className="lg:col-span-7 space-y-6">
              <Badge variant="gold">Atención Fiduciaria &amp; Concierge Patrimonial</Badge>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0B192C] font-normal tracking-tight leading-[1.12]">
                Iniciemos una conversación estratégica.
              </h1>

              <p className="text-base sm:text-lg text-[#4B5565] leading-relaxed max-w-2xl font-normal">
                Atención directa y reservada con nuestros socios directores. Coordinamos
                reuniones en nuestras oficinas de Santiago o Concepción, o sesiones virtuales
                privadas para clientes e inversionistas en el exterior.
              </p>

              {/* 3 Sellos Fiduciarios Inmediatos */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-black/8">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#C5A059]/15 text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5">
                    <Users2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#0B192C] uppercase tracking-wider">
                      Socios a Cargo
                    </h4>
                    <p className="text-xs text-[#738094] mt-0.5 leading-snug">
                      Reunión inicial directa con la mesa directiva.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#C5A059]/15 text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#0B192C] uppercase tracking-wider">
                      Reserva &amp; NDA
                    </h4>
                    <p className="text-xs text-[#738094] mt-0.5 leading-snug">
                      Secreto fiduciario y acuerdos de confidencialidad.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#C5A059]/15 text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#0B192C] uppercase tracking-wider">
                      Respuesta &lt; 24h
                    </h4>
                    <p className="text-xs text-[#738094] mt-0.5 leading-snug">
                      Devolución ejecutiva ágil y estructurada.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna Derecha (5 cols): Tarjeta de Socios Directores */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden bg-white border border-black/8 shadow-xl shadow-black/[0.04] p-6 sm:p-7 space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C5A059]">
                    Mesa de Dirección
                  </span>
                  <span className="text-xs text-[#738094] font-medium">
                    Nordsee Capital
                  </span>
                </div>

                {/* Fotografía de los 3 socios */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-black/10 group">
                  <Image
                    src="/images/about/3socios.png"
                    alt="Socios directores de Nordsee Capital: Fernando Llull, Martin Strube y Fernando Prat"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-103"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/75 via-transparent to-black/10 pointer-events-none" />
                  <div className="absolute bottom-3 left-4 right-4 text-white pointer-events-none">
                    <span className="text-xs font-serif text-white/95 block">
                      Martin Strube · Fernando Llull · Fernando Prat
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-[#C5A059]">
                      Socios Directores
                    </span>
                  </div>
                </div>

                <div className="space-y-3 pt-1">
                  <p className="text-xs text-[#4B5565] leading-relaxed">
                    Nuestros clientes patrimoniales y corporativos cuentan con acceso directo
                    a los socios responsables de cada mandato, garantizando alineación de
                    intereses y ejecución experta.
                  </p>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 border-t border-black/5 text-xs">
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#0B192C] text-white hover:bg-[#152338] transition-colors font-medium min-h-[44px]"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>Escribir a Socios</span>
                    </a>
                    <a
                      href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl border border-black/10 bg-[#FAF9F5] text-[#0B192C] hover:border-[#C5A059] transition-colors font-medium min-h-[44px]"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>{siteConfig.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECCIÓN CENTRAL: Formulario de Banca Privada & Canales de Concierge
          Grilla 5/7 balanceada en altura, eliminando cualquier hueco blanco.
         ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAF9F5]">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Columna Izquierda (5 cols): Coordenadas, Inmediatez & Protocolo */}
            <div className="lg:col-span-5 space-y-6">
              {/* Tarjeta 1: Canales Directos Institucionales (Dark Navy Luxury) */}
              <div className="bg-[#0B192C] text-[#FAF9F5] rounded-3xl p-7 sm:p-8 space-y-6 border border-white/10 shadow-lg">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C5A059] block">
                      Atención Inmediata
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-white font-normal">
                      Canales Directos
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[11px] font-medium text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Línea Activa</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-white/50 block mb-1">
                      Correo Institucional
                    </span>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="group inline-flex items-center gap-3 text-white/90 hover:text-[#C5A059] transition-colors py-1.5 text-sm sm:text-base font-medium break-all"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#C5A059]/40">
                        <Mail className="w-4 h-4 text-[#C5A059]" aria-hidden="true" />
                      </div>
                      <span>{siteConfig.email}</span>
                    </a>
                  </div>

                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-white/50 block mb-1">
                      Teléfono Corporativo &amp; WhatsApp
                    </span>
                    <a
                      href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                      className="group inline-flex items-center gap-3 text-white/90 hover:text-[#C5A059] transition-colors py-1.5 text-sm sm:text-base font-medium"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#C5A059]/40">
                        <Phone className="w-4 h-4 text-[#C5A059]" aria-hidden="true" />
                      </div>
                      <span>{siteConfig.phone}</span>
                    </a>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center gap-3 text-xs text-white/60">
                    <Clock className="w-4 h-4 text-[#C5A059] shrink-0" aria-hidden="true" />
                    <span>Horario CLT: Lunes a Viernes, 09:00 a 18:30 hrs</span>
                  </div>
                </div>
              </div>

              {/* Tarjeta 2: Fotografía Editorial Santiago Las Condes */}
              <div className="relative rounded-3xl overflow-hidden border border-black/8 shadow-md aspect-[16/10] group">
                <Image
                  src="/images/contact/santiago-corporate.jpg"
                  alt="Distrito corporativo en Las Condes, Santiago — Imagen referencial"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/85 via-[#0B192C]/30 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-5 right-5 text-white pointer-events-none">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C5A059] block mb-1">
                    Centro Financiero
                  </span>
                  <span className="font-serif text-base sm:text-lg text-white font-normal block">
                    Las Condes · Santiago de Chile
                  </span>
                  <span className="text-xs text-white/75 mt-0.5 block">
                    Los Militares (Piso 21) · Sala de Juntas y Comités
                  </span>
                </div>
              </div>

              {/* Tarjeta 3: Protocolo de Secreto Fiduciario */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-black/8 shadow-xs space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#C5A059]/15 text-[#C5A059] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#0B192C]">
                      Protocolo de Confidencialidad
                    </h4>
                    <span className="text-[11px] text-[#738094]">
                      Estándar de Banca Privada &amp; Family Office
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#4B5565] leading-relaxed">
                  Toda consulta o información financiera compartida a través de este formulario
                  o de nuestros canales oficiales está sujeta a estricto secreto profesional y
                  acuerdos de no divulgación (NDA).
                </p>
              </div>
            </div>

            {/* Columna Derecha (7 cols): Formulario de Banca Privada Interactivo */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECCIÓN DE SEDES Y COBERTURA GLOBAL: 3 Columnas Horizontales
          Reemplaza las tarjetas amontonadas verticales con una cuadrícula simétrica.
         ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white border-t border-black/5">
        <Container size="wide">
          <div className="max-w-2xl mb-12 sm:mb-16 space-y-3">
            <Badge variant="gold">Infraestructura &amp; Alcance</Badge>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0B192C] font-normal tracking-tight">
              Nuestras Sedes y Presencia Internacional
            </h2>
            <p className="text-sm sm:text-base text-[#4B5565] leading-relaxed">
              Infraestructura física en los principales polos económicos de Chile y
              alianzas directas para la estructuración y custodia en Norteamérica y Europa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sede 1: Santiago */}
            <div className="bg-[#FAF9F5] rounded-3xl p-7 sm:p-8 border border-black/8 shadow-xs flex flex-col justify-between space-y-6 hover:border-[#C5A059]/40 transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
                    Sede Corporativa Central
                  </span>
                  <span className="text-xs font-medium px-2 py-0.5 rounded-md bg-black/5 text-[#4B5565]">
                    Chile
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif text-2xl text-[#0B192C] font-normal">
                    Santiago
                  </h3>
                  <span className="text-xs text-[#738094] block">
                    Distrito Financiero El Golf / Las Condes
                  </span>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#4B5565] pt-2 border-t border-black/5">
                  <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>Los Militares, Las Condes (Piso 21, Oficina 2101)</span>
                </div>

                <p className="text-xs text-[#738094] leading-relaxed">
                  Mesa de Wealth Management, comités de coinversión inmobiliaria y
                  dirección corporativa general.
                </p>
              </div>

              <div className="pt-4 border-t border-black/5 flex items-center justify-between text-xs text-[#4B5565]">
                <span className="flex items-center gap-1.5 font-medium">
                  <Building2 className="w-3.5 h-3.5 text-[#C5A059]" />
                  Reuniones previa agenda
                </span>
                <span className="text-[#738094]">Piso 21</span>
              </div>
            </div>

            {/* Sede 2: Concepción */}
            <div className="bg-[#FAF9F5] rounded-3xl p-7 sm:p-8 border border-black/8 shadow-xs flex flex-col justify-between space-y-6 hover:border-[#C5A059]/40 transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
                    Oficina Regional Sur
                  </span>
                  <span className="text-xs font-medium px-2 py-0.5 rounded-md bg-black/5 text-[#4B5565]">
                    Chile
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif text-2xl text-[#0B192C] font-normal">
                    Concepción
                  </h3>
                  <span className="text-xs text-[#738094] block">
                    Centro Cívico &amp; Financiero Macrozona Sur
                  </span>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#4B5565] pt-2 border-t border-black/5">
                  <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>Bernardo O&apos;Higgins 241, Piso 9, Oficina 903</span>
                </div>

                <p className="text-xs text-[#738094] leading-relaxed">
                  Atención especializada a empresas, familias empresarias y originación
                  de deuda privada en la zona sur.
                </p>
              </div>

              <div className="pt-4 border-t border-black/5 flex items-center justify-between text-xs text-[#4B5565]">
                <span className="flex items-center gap-1.5 font-medium">
                  <Building2 className="w-3.5 h-3.5 text-[#C5A059]" />
                  Atención Ejecutiva
                </span>
                <span className="text-[#738094]">Piso 9</span>
              </div>
            </div>

            {/* Sede 3: Cobertura Transfronteriza (EE.UU. y Europa) */}
            <div className="bg-[#FAF9F5] rounded-3xl p-7 sm:p-8 border border-black/8 shadow-xs flex flex-col justify-between space-y-6 hover:border-[#C5A059]/40 transition-colors md:col-span-2 lg:col-span-1">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
                    Plataforma Transfronteriza
                  </span>
                  <span className="text-xs font-medium px-2 py-0.5 rounded-md bg-[#C5A059]/15 text-[#0B192C]">
                    Global Desk
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif text-2xl text-[#0B192C] font-normal">
                    EE.UU. &amp; Europa
                  </h3>
                  <span className="text-xs text-[#738094] block">
                    Miami · Delaware · Lisboa · Oporto
                  </span>
                </div>

                {/* Banderas circulares de cobertura */}
                <div className="flex items-center gap-2.5 pt-2 border-t border-black/5">
                  <div className="relative w-7 h-7 rounded-full overflow-hidden border border-black/10 shadow-2xs">
                    <Image
                      src="/images/home/estados_unidos.png"
                      alt="Estados Unidos"
                      fill
                      sizes="28px"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-7 h-7 rounded-full overflow-hidden border border-black/10 shadow-2xs">
                    <Image
                      src="/images/home/portugal.png"
                      alt="Portugal"
                      fill
                      sizes="28px"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-7 h-7 rounded-full overflow-hidden border border-black/10 shadow-2xs">
                    <Image
                      src="/images/home/union_europea.png"
                      alt="Unión Europea"
                      fill
                      sizes="28px"
                      className="object-cover"
                    />
                  </div>
                  <span className="text-xs text-[#738094] ml-1 font-medium">
                    Jurisdicciones Prime
                  </span>
                </div>

                <p className="text-xs text-[#738094] leading-relaxed">
                  Estructuración societaria offshore, mandatos de Golden Visa en Portugal
                  y coinversión en activos inmobiliarios en Estados Unidos.
                </p>
              </div>

              <div className="pt-4 border-t border-black/5 flex items-center justify-between text-xs text-[#4B5565]">
                <span className="flex items-center gap-1.5 font-medium">
                  <Globe className="w-3.5 h-3.5 text-[#C5A059]" />
                  Sesión Virtual o Bilateral
                </span>
                <span className="text-[#C5A059] font-semibold">Alianzas Activas</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          BANDA INSTITUCIONAL: Compromisos Fiduciarios de Nordsee Capital
         ========================================================================= */}
      <section className="py-14 sm:py-16 bg-[#0B192C] text-[#FAF9F5] border-t border-white/10">
        <Container size="wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2.5 text-[#C5A059]">
                <Users2 className="w-5 h-5" />
                <span className="text-xs font-semibold uppercase tracking-wider">
                  Acceso a Socios
                </span>
              </div>
              <p className="text-xs text-[#FAF9F5]/75 leading-relaxed">
                Sin intermediarios comerciales. Toda decisión patrimonial es liderada
                por un socio director con trayectoria comprobada.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2.5 text-[#C5A059]">
                <Scale className="w-5 h-5" />
                <span className="text-xs font-semibold uppercase tracking-wider">
                  Arquitectura Abierta
                </span>
              </div>
              <p className="text-xs text-[#FAF9F5]/75 leading-relaxed">
                Sin productos propios ni comisiones ocultas. Seleccionamos los mejores
                vehículos de inversión con total independencia.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2.5 text-[#C5A059]">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-xs font-semibold uppercase tracking-wider">
                  Secreto Fiduciario
                </span>
              </div>
              <p className="text-xs text-[#FAF9F5]/75 leading-relaxed">
                Máxima reserva en el manejo de antecedentes familiares, societarios y
                financieros bajo estándares de private banking.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2.5 text-[#C5A059]">
                <Globe className="w-5 h-5" />
                <span className="text-xs font-semibold uppercase tracking-wider">
                  Rigor Transfronterizo
                </span>
              </div>
              <p className="text-xs text-[#FAF9F5]/75 leading-relaxed">
                Estructuras sólidas en Chile, EE.UU. y Europa con apego estricto a las
                normativas tributarias y regulatorias vigentes.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

