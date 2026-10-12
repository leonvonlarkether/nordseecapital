"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, AlertCircle, Send, Loader2 } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    servicio: "general",
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Verificación honeypot antispam
    if (formData.honeypot) {
      // Trampa para bots
      setStatus("success");
      return;
    }

    // Validación básica de campos
    if (!formData.nombre.trim() || !formData.email.trim() || !formData.mensaje.trim()) {
      setStatus("error");
      setErrorMessage("Por favor complete todos los campos obligatorios.");
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
          email: "",
          telefono: "",
          servicio: "general",
          mensaje: "",
          honeypot: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(
          data.message ||
            "No fue posible enviar su consulta en este momento. Por favor contáctenos directamente a contacto@nordseecapital.com"
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Ocurrió una incidencia de conexión. Por favor escríbanos directamente a contacto@nordseecapital.com o llámenos al +56 9 6667 4099."
      );
    }
  };

  if (status === "success") {
    return (
      <div className="bg-[#FAF9F5] border border-[#C5A059]/30 rounded-3xl p-8 sm:p-10 text-center space-y-4 shadow-sm">
        <div className="w-14 h-14 rounded-full bg-[#C5A059]/15 text-[#C5A059] flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
        </div>
        <h3 className="font-serif text-2xl text-[#0B192C]">
          Consulta Recibida Exitosamente
        </h3>
        <p className="text-sm text-[#4B5565] max-w-md mx-auto leading-relaxed">
          Agradecemos su interés en Nordsee Capital. Nuestro equipo revisará su
          requerimiento de manera confidencial y un socio se pondrá en contacto a
          la brevedad.
        </p>
        <div className="pt-2">
          <button
            onClick={() => setStatus("idle")}
            className="text-xs font-semibold text-[#0B192C] underline hover:text-[#C5A059] transition-colors py-2 px-3 min-h-[44px] inline-flex items-center"
          >
            Enviar otra consulta
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl p-8 sm:p-10 border border-black/5 shadow-xs space-y-6"
      noValidate
    >
      {/* Campo señuelo honeypot oculto para bots */}
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="nombre"
            className="block text-xs font-semibold uppercase tracking-wider text-[#0B192C] mb-2"
          >
            Nombre Completo <span className="text-[#C5A059]">*</span>
          </label>
          <input
            id="nombre"
            type="text"
            name="nombre"
            required
            autoComplete="name"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Ej. Constanza Silva"
            className="w-full px-4 py-3 rounded-xl border border-black/10 text-sm text-[#151B26] placeholder:text-[#828F9E] focus:outline-hidden focus:ring-2 focus:ring-[#C5A059] transition-all bg-[#FAF9F5]"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-xs font-semibold uppercase tracking-wider text-[#0B192C] mb-2"
          >
            Correo Electrónico <span className="text-[#C5A059]">*</span>
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
            placeholder="nombre@empresa.com"
            className="w-full px-4 py-3 rounded-xl border border-black/10 text-sm text-[#151B26] placeholder:text-[#828F9E] focus:outline-hidden focus:ring-2 focus:ring-[#C5A059] transition-all bg-[#FAF9F5]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="telefono"
            className="block text-xs font-semibold uppercase tracking-wider text-[#0B192C] mb-2"
          >
            Teléfono de Contacto
          </label>
          <input
            id="telefono"
            type="tel"
            name="telefono"
            autoComplete="tel"
            value={formData.telefono}
            onChange={handleChange}
            placeholder="+56 9 1234 5678"
            className="w-full px-4 py-3 rounded-xl border border-black/10 text-sm text-[#151B26] placeholder:text-[#828F9E] focus:outline-hidden focus:ring-2 focus:ring-[#C5A059] transition-all bg-[#FAF9F5]"
          />
        </div>

        <div>
          <label
            htmlFor="servicio"
            className="block text-xs font-semibold uppercase tracking-wider text-[#0B192C] mb-2"
          >
            Área de Interés Principal
          </label>
          <select
            id="servicio"
            name="servicio"
            value={formData.servicio}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-black/10 text-sm text-[#151B26] focus:outline-hidden focus:ring-2 focus:ring-[#C5A059] transition-all bg-[#FAF9F5]"
          >
            <option value="general">Consulta General Institucional</option>
            <option value="real-estate">Real Estate &amp; Desarrollo Inmobiliario</option>
            <option value="wealth-management">Wealth Management &amp; Gestión Patrimonial</option>
            <option value="deuda-privada">Deuda Privada &amp; Financiamiento Estructurado</option>
            <option value="ma">M&amp;A: Fusiones y Adquisiciones</option>
            <option value="tax-legal">Tax &amp; Legal: Planificación Legal/Tributaria</option>
            <option value="golden-visa">Golden Visa Portugal (Residencia por Inversión)</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="mensaje"
          className="block text-xs font-semibold uppercase tracking-wider text-[#0B192C] mb-2"
        >
          Mensaje o Detalle de la Consulta <span className="text-[#C5A059]">*</span>
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          required
          value={formData.mensaje}
          onChange={handleChange}
          placeholder="Describa brevemente el objetivo o contexto de su consulta…"
          className="w-full px-4 py-3 rounded-xl border border-black/10 text-sm text-[#151B26] placeholder:text-[#828F9E] focus:outline-hidden focus:ring-2 focus:ring-[#C5A059] transition-all bg-[#FAF9F5] resize-y"
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

      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <Button
          type="submit"
          variant="primary"
          size="md"
          disabled={status === "submitting"}
          className="w-full sm:w-auto min-h-[44px]"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin mr-2" aria-hidden="true" />
              <span>Enviando consulta…</span>
            </>
          ) : (
            <>
              <span>Enviar Consulta</span>
              <Send className="w-4 h-4 ml-1.5" aria-hidden="true" />
            </>
          )}
        </Button>

        <span className="text-[11px] text-[#738094]">
          Información tratada bajo estricta reserva y confidencialidad.
        </span>
      </div>
    </form>
  );
}
