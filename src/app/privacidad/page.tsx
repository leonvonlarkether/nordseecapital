import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { siteConfig } from "@/content/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Privacidad y Protección de Datos",
  description:
    "Marco de privacidad, tratamiento de datos personales y confidencialidad de Nordsee Capital, conforme a las Leyes 19.628 y 21.719 en Chile.",
  alternates: {
    canonical: "/privacidad",
    languages: {
      es: "/privacidad",
      en: "/en/privacy",
      "x-default": "/privacidad",
    },
  },
  openGraph: {
    title: "Política de Privacidad y Protección de Datos | Nordsee Capital",
    description:
      "Marco de privacidad, tratamiento de datos personales y confidencialidad de Nordsee Capital, conforme a las Leyes 19.628 y 21.719 en Chile.",
    url: "https://nordseecapital.com/privacidad",
    images: [
      {
        url: "/images/home/hero-nordsee.jpg",
        width: 1376,
        height: 768,
        alt: "Política de Privacidad — Nordsee Capital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Política de Privacidad y Protección de Datos | Nordsee Capital",
    description:
      "Marco de privacidad, tratamiento de datos personales y confidencialidad de Nordsee Capital, conforme a las Leyes 19.628 y 21.719 en Chile.",
    images: ["/images/home/hero-nordsee.jpg"],
  },
};

export default function PrivacidadPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", item: "https://nordseecapital.com" },
          { name: "Privacidad", item: "https://nordseecapital.com/privacidad" },
        ]}
      />
      <PageHeader
        badge="Marco Legal y Regulatorio"
        title="Política de Privacidad y Tratamiento de Datos"
        description="Lineamientos y estándares aplicados por Nordsee Capital para el resguardo de la confidencialidad y la protección de datos personales de nuestros clientes y contrapartes."
        breadcrumbs={[{ label: "Privacidad" }]}
      />

      <section className="py-20 sm:py-28 bg-[#FAF9F5]">
        <Container size="narrow">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-black/5 shadow-xs space-y-10 text-sm sm:text-base text-[#4B5565] leading-relaxed">
            {/* Aviso de validación jurídica pendiente */}
            <div className="p-5 rounded-2xl bg-[#F4F2EB] border border-[#C5A059]/30 flex items-start gap-3.5 text-xs text-[#232B3A]">
              <AlertTriangle className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
              <div>
                <strong className="block font-semibold mb-1 text-[#0B192C]">
                  Estado del Documento: Sujeto a Validación Legal Definitiva
                </strong>
                El presente texto refleja la política base de resguardo
                institucional. Las cláusulas específicas definitivas serán
                protocolizadas formalmente antes del lanzamiento comercial final
                conforme a las directrices de nuestra asesoría legal.
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-[#0B192C] font-normal">
                1. Identificación del Responsable del Tratamiento
              </h2>
              <p>
                El responsable del tratamiento de los datos personales
                recopilados a través de este sitio web es{" "}
                <strong className="text-[#0B192C]">{siteConfig.legalName}</strong>,
                con domicilio corporativo en Los Militares (Piso 21, Oficina 2101,
                Las Condes, Santiago, Chile), y correo de contacto{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-[#C5A059] underline font-medium"
                >
                  {siteConfig.email}
                </a>
                .
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-[#0B192C] font-normal">
                2. Marco Normativo Aplicable
              </h2>
              <p>
                El tratamiento de información personal se realiza bajo los
                estándares previstos en la legislación chilena, en particular la{" "}
                <strong className="text-[#0B192C]">Ley N° 19.628</strong> sobre
                Protección de la Vida Privada y la{" "}
                <strong className="text-[#0B192C]">Ley N° 21.719</strong> que
                regula la protección y tratamiento de datos personales, así como
                principios reconocidos internacionalmente en materia de seguridad
                de la información.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-[#0B192C] font-normal">
                3. Finalidad de la Recopilación
              </h2>
              <p>
                Los datos solicitados a través de nuestros formularios
                institucionales (nombre, correo electrónico, teléfono y detalle
                de la consulta) tienen como única finalidad:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-[#232B3A]">
                <li>
                  Responder a las consultas y solicitudes de información
                  recibidas.
                </li>
                <li>
                  Evaluar preliminarmente el interés en nuestros servicios de
                  inversión patrimonial, estructuración inmobiliaria y asesoría
                  legal.
                </li>
                <li>
                  Cumplir con las obligaciones legales de debida diligencia y
                  prevención de lavado de activos exigidas por la normativa
                  vigente al formalizar contratos de servicios profesionales.
                </li>
              </ul>
              <p>
                Nordsee Capital <strong className="text-[#0B192C]">no comercializa, arrienda ni cede</strong> bases de datos a terceras partes bajo ninguna circunstancia.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-[#0B192C] font-normal">
                4. Confidencialidad y Seguridad Técnica
              </h2>
              <p>
                Implementamos medidas organizativas y tecnológicas apropiadas
                para proteger los datos contra accesos no autorizados, pérdida o
                alteración. Toda la comunicación entre el navegador del usuario y
                nuestros servidores se transmite mediante cifrado HTTPS (TLS).
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-[#0B192C] font-normal">
                5. Derechos de los Titulares
              </h2>
              <p>
                Los titulares de datos personales pueden ejercer sus derechos de
                acceso, rectificación, cancelación y oposición (derechos ARCO) en
                cualquier momento mediante comunicación escrita dirigida al
                correo electrónico{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-[#C5A059] underline font-medium"
                >
                  {siteConfig.email}
                </a>
                .
              </p>
            </div>

            <div className="pt-6 border-t border-black/10 text-xs text-[#738094]">
              Última actualización de referencia: Octubre 2026.
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
