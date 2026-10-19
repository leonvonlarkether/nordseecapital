# Plan de Medición, Eventos y Conversiones — Nordsee Capital

## 1. Objetivos Comerciales de Medición

En una firma boutique de gestión patrimonial y estructuración de transacciones de alto valor (M&A, Real Estate, Golden Visa), el tráfico masivo es secundario frente a la **calidad de los prospectos calificados (High-Net-Worth Individuals, Family Offices y Directores de Empresas)**.

La medición se orienta a capturar la interacción de alta intención fiduciaria.

---

## 2. Taxonomía de Eventos de Conversión (GA4 & Vercel Analytics)

| Event Name | Disparador (Trigger) | Parámetros Clave | Tipo de Conversión | Valor Estratégico |
| :--- | :--- | :--- | :--- | :--- |
| `contact_form_submission` | Envío exitoso del formulario oficial de contacto (`/contacto` o `/en/contact`). | `servicio_interes`, `rango_patrimonio`, `modalidad`, `idioma` | Conversión Principal (Macro) | Alta prioridad. Genera lead directo para evaluación por socios directores. |
| `contact_channel_click` | Clic en enlace directo de correo (`mailto:contacto@...`) o teléfono (`tel:+56...`). | `channel_type` (`email`, `phone`), `page_location`, `idioma` | Micro-conversión | Contacto inmediato sin intermediación de formulario. |
| `service_cta_click` | Clic en el botón principal "Conversemos sobre..." / "Schedule a Consultation". | `service_id`, `service_slug`, `cta_location`, `idioma` | Micro-conversión | Mide el interés comercial específico por vertical. |
| `language_switch` | Clic en el selector de idioma en cabecera (ES <-> EN). | `from_language`, `to_language`, `page_path` | Evento de Navegación | Monitorea la adopción de la arquitectura bilingüe. |
| `outbound_partner_click` | Clic en enlaces externos verificados (Instagram, X, autoridades regulatorias). | `destination_url`, `link_text` | Evento de Comportamiento | Rastrea salida hacia canales de reputación corporativa. |

---

## 3. Implementación Segura y Respeto de Privacidad

* **Cero PII en Analítica**: Ningún campo sensible (nombre, teléfono o correo del cliente) se envía a los endpoints de analítica. Solo se registran metadatos del servicio y rango patrimonial general.
* **Consentimiento y Cumplimiento Legal**: Alineado con la Ley Chilena de Protección de Datos Personales N° 21.719 y el RGPD europeo (para visitantes de la Unión Europea interesados en Golden Visa).

---

## 4. Esquema de Reporte Mensual

1. **Visibilidad Orgánica por Idioma**: Clics e impresiones en Google Search Console para español e inglés.
2. **Consultas Principales por Vertical**: Volumen de consultas comerciales en Real Estate, Wealth Management, Deuda Privada, M&A, Tax & Legal y Golden Visa.
3. **Conversiones Registradas**: Total de formularios completados y desglose por área de interés.
4. **Comportamiento Geográfico**: Porcentaje de visitantes desde Chile, Estados Unidos, España, Portugal y otros mercados internacionales.
5. **Rendimiento Técnico y Core Web Vitals**: LCP, CLS, INP y tasa de errores 404/500.
