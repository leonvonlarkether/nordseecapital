"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, AlertCircle, Send, Loader2, ShieldCheck, MapPin, Video } from "lucide-react";

export function ContactForm({ locale = "es" }: { locale?: "es" | "en" }) {
  const isEn = locale === "en";

  const [formData, setFormData] = useState({
    nombre: "",
    organizacion: "",
    email: "",
    telefono: "",
    servicio: "wealth-management",
    modalidad: "santiago",
    rangoPatrimonio: "",
    mensaje: "",
    honeypot: "", // Campo señuelo antispam
  });

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleModalidadChange = (modalidad: string) => {
    setFormData((prev) => ({ ...prev, modalidad }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Verificación honeypot antispam
    if (formData.honeypot) {
      setStatus("success");
      return;
    }

    // Validación básica de campos requeridos
    if (!formData.nombre.trim() || !formData.email.trim() || !formData.mensaje.trim()) {
      setStatus("error");
      setErrorMessage(
        isEn
          ? "Please fill in all mandatory fields marked with an asterisk (*)."
          : "Por favor complete los campos obligatorios marcados con asterisco (*)."
      );
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setFormData({
          nombre: "",
          organizacion: "",
          email: "",
          telefono: "",
          servicio: "wealth-management",
          modalidad: "santiago",
          rangoPatrimonio: "",
          mensaje: "",
          honeypot: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(
          data.message ||
            (isEn
              ? "Unable to process your request at this moment. Please email us directly at contacto@nordseecapital.com"
              : "No fue posible procesar su consulta en este momento. Por favor escríbanos directamente a contacto@nordseecapital.com")
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        isEn
          ? "A network error occurred. Please contact us at contacto@nordseecapital.com or call +56 9 6667 4099."
          : "Ocurrió una incidencia de conexión. Por favor escríbanos a contacto@nordseecapital.com o llámenos al +56 9 6667 4099."
      );
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#C5A059]/40 text-center space-y-6 shadow-lg shadow-black/5">
        <div className="w-16 h-16 rounded-full bg-[#C5A059]/15 text-[#C5A059] flex items-center justify-center mx-auto ring-8 ring-[#C5A059]/10">
          <CheckCircle2 className="w-9 h-9" aria-hidden="true" />
        </div>
        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059]">
            {isEn ? "Fiduciary Registration Confirmed" : "Registro Fiduciario Confirmado"}
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#0B192C]">
            {isEn ? "Inquiry Successfully Received" : "Consulta Recibida con Éxito"}
          </h3>
        </div>
        <p className="text-sm sm:text-base text-[#4B5565] max-w-lg mx-auto leading-relaxed">
          {isEn
            ? "Your request has been routed to our private client desk. A managing partner will review your background and respond within 24 business hours."
            : "Su requerimiento ha sido ingresado en nuestra mesa de atención privada. Uno de nuestros socios directores revisará los antecedentes y se pondrá en contacto en un plazo máximo de 24 horas hábiles."}
        </p>
        <div className="p-4 rounded-xl bg-[#FAF9F5] border border-black/5 max-w-md mx-auto text-xs text-[#738094] flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
          <span>
            {isEn
              ? "All transmitted information is protected under strict professional confidentiality."
              : "Toda la información remitida está amparada bajo estricto secreto profesional."}
          </span>
        </div>
        <div className="pt-2">
          <button
            onClick={() => setStatus("idle")}
            className="text-xs font-semibold uppercase tracking-wider text-[#0B192C] hover:text-[#C5A059] underline underline-offset-4 transition-colors py-2 px-4 min-h-[44px] inline-flex items-center"
          >
            {isEn ? "Submit another inquiry" : "Enviar otra consulta"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-7 sm:p-10 lg:p-12 border border-black/8 shadow-xl shadow-black/[0.04]">
      {/* Encabezado del Formulario */}
      <div className="border-b border-black/8 pb-6 mb-8">
        <div className="flex items-center justify-between gap-4 mb-2">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059]">
            {isEn ? "Private Client Intake" : "Mesa de Admisión & Consulta"}
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FAF9F5] border border-[#C5A059]/30 text-[11px] font-medium text-[#0B192C]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
            {isEn ? "Fiduciary Secrecy" : "Reserva Fiduciaria"}
          </span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl text-[#0B192C] font-normal tracking-tight">
          {isEn ? "Strategic Consultation Request" : "Formulario de Consulta Estratégica"}
        </h2>
        <p className="text-xs sm:text-sm text-[#4B5565] mt-1.5 leading-relaxed">
          {isEn
            ? "Please complete the fields below to direct your inquiry to the relevant partner."
            : "Complete los campos a continuación para derivar su caso al socio especialista correspondiente."}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        {/* Campo señuelo honeypot antispam */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="form-honeypot">No complete este campo</label>
          <input
            id="form-honeypot"
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Fila 1: Nombre Completo & Organización / Cargo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          <div>
            <label
              htmlFor="nombre"
              className="block text-xs font-semibold uppercase tracking-wider text-[#0B192C] mb-2"
            >
              {isEn ? "Full Name" : "Nombre Completo"} <span className="text-[#C5A059]">*</span>
            </label>
            <input
              id="nombre"
              type="text"
              name="nombre"
              required
              autoComplete="name"
              value={formData.nombre}
              onChange={handleChange}
              placeholder={isEn ? "e.g., Alexandra Miller" : "Ej. Constanza Silva"}
              className="w-full px-4 py-3 rounded-xl border border-black/10 text-sm text-[#151B26] placeholder:text-[#828F9E] focus:outline-hidden focus:ring-2 focus:ring-[#C5A059] focus:border-[#C5A059] transition-all bg-[#FAF9F5]/70"
            />
          </div>

          <div>
            <label
              htmlFor="organizacion"
              className="block text-xs font-semibold uppercase tracking-wider text-[#0B192C] mb-2"
            >
              {isEn ? "Organization / Family Office" : "Organización / Family Office"}{" "}
              <span className="text-xs text-[#738094] lowercase font-normal">
                ({isEn ? "optional" : "opcional"})
              </span>
            </label>
            <input
              id="organizacion"
              type="text"
              name="organizacion"
              autoComplete="organization"
              value={formData.organizacion}
              onChange={handleChange}
              placeholder={isEn ? "e.g., Greenpoint Capital / Director" : "Ej. Inversiones San Gabriel / Directora"}
              className="w-full px-4 py-3 rounded-xl border border-black/10 text-sm text-[#151B26] placeholder:text-[#828F9E] focus:outline-hidden focus:ring-2 focus:ring-[#C5A059] focus:border-[#C5A059] transition-all bg-[#FAF9F5]/70"
            />
          </div>
        </div>

        {/* Fila 2: Correo Electrónico & Teléfono */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-semibold uppercase tracking-wider text-[#0B192C] mb-2"
            >
              {isEn ? "Business Email" : "Correo Electrónico"} <span className="text-[#C5A059]">*</span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              autoComplete="email"
              spellCheck={false}
              value={formData.email}
              onChange={handleChange}
              placeholder="name@company.com"
              className="w-full px-4 py-3 rounded-xl border border-black/10 text-sm text-[#151B26] placeholder:text-[#828F9E] focus:outline-hidden focus:ring-2 focus:ring-[#C5A059] focus:border-[#C5A059] transition-all bg-[#FAF9F5]/70"
            />
          </div>

          <div>
            <label
              htmlFor="telefono"
              className="block text-xs font-semibold uppercase tracking-wider text-[#0B192C] mb-2"
            >
              {isEn ? "Contact Phone" : "Teléfono de Contacto"}
            </label>
            <input
              id="telefono"
              type="tel"
              name="telefono"
              autoComplete="tel"
              value={formData.telefono}
              onChange={handleChange}
              placeholder={isEn ? "+1 (305) 555-0199" : "+56 9 1234 5678"}
              className="w-full px-4 py-3 rounded-xl border border-black/10 text-sm text-[#151B26] placeholder:text-[#828F9E] focus:outline-hidden focus:ring-2 focus:ring-[#C5A059] focus:border-[#C5A059] transition-all bg-[#FAF9F5]/70"
            />
          </div>
        </div>

        {/* Fila 3: Modalidad Preferida de Reunión */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B192C] mb-2.5">
            {isEn ? "Initial Meeting Preference" : "Preferencia de Reunión Inicial"}
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              type="button"
              onClick={() => handleModalidadChange("santiago")}
              className={`flex items-center gap-2.5 px-3.5 py-3 rounded-xl border text-xs font-medium transition-all text-left ${formData.modalidad === "santiago"
                ? "bg-[#0B192C] text-white border-[#0B192C] shadow-sm"
                : "bg-[#FAF9F5] text-[#4B5565] border-black/10 hover:border-[#C5A059]"
                }`}
            >
              <MapPin className={`w-4 h-4 shrink-0 ${formData.modalidad === "santiago" ? "text-[#C5A059]" : "text-[#738094]"}`} />
              <div className="truncate">
                <span className="block font-semibold">Santiago</span>
                <span className="text-[10px] opacity-75">{isEn ? "Las Condes (Floor 21)" : "Las Condes (Piso 21)"}</span>
              </div>
            </button>

            <button
              type="button"
              onClick={() => handleModalidadChange("concepcion")}
              className={`flex items-center gap-2.5 px-3.5 py-3 rounded-xl border text-xs font-medium transition-all text-left ${formData.modalidad === "concepcion"
                ? "bg-[#0B192C] text-white border-[#0B192C] shadow-sm"
                : "bg-[#FAF9F5] text-[#4B5565] border-black/10 hover:border-[#C5A059]"
                }`}
            >
              <MapPin className={`w-4 h-4 shrink-0 ${formData.modalidad === "concepcion" ? "text-[#C5A059]" : "text-[#738094]"}`} />
              <div className="truncate">
                <span className="block font-semibold">Concepción</span>
                <span className="text-[10px] opacity-75">{isEn ? "O'Higgins 241 (Floor 9)" : "O'Higgins 241 (Piso 9)"}</span>
              </div>
            </button>

            <button
              type="button"
              onClick={() => handleModalidadChange("virtual")}
              className={`flex items-center gap-2.5 px-3.5 py-3 rounded-xl border text-xs font-medium transition-all text-left ${formData.modalidad === "virtual"
                ? "bg-[#0B192C] text-white border-[#0B192C] shadow-sm"
                : "bg-[#FAF9F5] text-[#4B5565] border-black/10 hover:border-[#C5A059]"
                }`}
            >
              <Video className={`w-4 h-4 shrink-0 ${formData.modalidad === "virtual" ? "text-[#C5A059]" : "text-[#738094]"}`} />
              <div className="truncate">
                <span className="block font-semibold">{isEn ? "Virtual Session" : "Sesión Virtual"}</span>
                <span className="text-[10px] opacity-75">{isEn ? "Secure Videoconference" : "Videoconferencia Segura"}</span>
              </div>
            </button>
          </div>
        </div>

        {/* Fila 5: Mensaje o Detalle */}
        <div>
          <label
            htmlFor="mensaje"
            className="block text-xs font-semibold uppercase tracking-wider text-[#0B192C] mb-2"
          >
            {isEn ? "Inquiry Details & Context" : "Detalle o Contexto de la Consulta"} <span className="text-[#C5A059]">*</span>
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={4}
            required
            value={formData.mensaje}
            onChange={handleChange}
            placeholder={
              isEn
                ? "Please outline your objectives or context (e.g., cross-border wealth structuring, private credit origination, prime real estate allocation)..."
                : "Describa el objetivo o contexto de su requerimiento (ej. diversificación transfronteriza de cartera, estructuración de vehículo corporativo, financiamiento de proyecto)…"
            }
            className="w-full px-4 py-3 rounded-xl border border-black/10 text-sm text-[#151B26] placeholder:text-[#828F9E] focus:outline-hidden focus:ring-2 focus:ring-[#C5A059] focus:border-[#C5A059] transition-all bg-[#FAF9F5]/70 resize-y"
          />
        </div>

        {status === "error" && (
          <div
            role="alert"
            aria-live="polite"
            className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 text-red-800 text-xs leading-relaxed"
          >
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" aria-hidden="true" />
            <span>{errorMessage}</span>
          </div>
        )}

        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-black/8">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={status === "submitting"}
            className="w-full sm:w-auto min-h-[48px] px-8 text-sm font-semibold tracking-wide shadow-md"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin mr-2" aria-hidden="true" />
                <span>{isEn ? "Transmitting details…" : "Transmitiendo antecedentes…"}</span>
              </>
            ) : (
              <>
                <span>{isEn ? "Coordinate Strategic Conversation" : "Coordinar Conversación Estratégica"}</span>
                <Send className="w-4 h-4 ml-2" aria-hidden="true" />
              </>
            )}
          </Button>

          <div className="flex items-center gap-2 text-[11px] text-[#738094]">
            <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
            <span>
              {isEn
                ? "Protected under fiduciary professional secrecy and non-disclosure standards."
                : "Protocolo bajo secreto profesional y acuerdos de no divulgación."}
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}

