# Implementación Técnica de SEO y Arquitectura Bilingüe — Nordsee Capital

## 1. Arquitectura Bilingüe Simétrica (ES / EN) en Next.js App Router

Para maximizar el posicionamiento orgánico en español (Chile y Latinoamérica) e inglés (inversionistas internacionales en EE.UU., Europa y globales), se implementó una arquitectura simétrica:

* **Español (Raíz canónica)**: Rutas originales mantenidas intactas para preservar cualquier enlace entrante o indexación previa (`/`, `/nosotros`, `/contacto`, `/privacidad`, `/servicios`, `/servicios/[slug]`).
* **Inglés (Directorio `/en/`)**: Subrutas especializadas con slugs idiomáticos adaptados a la búsqueda internacional:
  * `/en` (Home)
  * `/en/about` (Nosotros / About Us)
  * `/en/contact` (Contacto / Contact Us)
  * `/en/privacy` (Privacidad / Privacy Policy)
  * `/en/services` (Hub de Servicios / Investment Solutions)
  * `/en/services/real-estate` (Real Estate & Prime Property Development)
  * `/en/services/wealth-management` (Wealth Management & Independent Advisory)
  * `/en/services/private-debt` (Private Debt & Structured Lending)
  * `/en/services/ma` (M&A: Mergers & Acquisitions)
  * `/en/services/tax-legal` (Tax & Legal Structuring)
  * `/en/services/golden-visa-portugal` (Portugal Golden Visa Advisory)

---

## 2. Etiquetas `hreflang` Bidireccionales y `x-default`

Todas las páginas públicas emiten en sus etiquetas `<head>` los enlaces alternos cruzados:

```html
<!-- Ejemplo en /servicios/real-estate y /en/services/real-estate -->
<link rel="alternate" hreflang="es" href="https://nordseecapital.com/servicios/real-estate" />
<link rel="alternate" hreflang="en" href="https://nordseecapital.com/en/services/real-estate" />
<link rel="alternate" hreflang="x-default" href="https://nordseecapital.com/servicios/real-estate" />
```

Next.js Metadata API genera estas etiquetas de forma nativa a través de `alternates.languages` en cada página estática.

---

## 3. Sitemap XML con Anotaciones de Idioma

El archivo [src/app/sitemap.ts](file:///home/leon/dev/nordseecapital/src/app/sitemap.ts) genera un mapa del sitio con las 22 URLs canónicas (11 en español y 11 en inglés). Cada entrada incluye la especificación de sus versiones alternas para permitir a Googlebot y Bingbot descubrir e indexar ambas versiones sin ambigüedad.

---

## 4. Selector de Idioma Funcional en la Navegación

En [src/components/layout/Header.tsx](file:///home/leon/dev/nordseecapital/src/components/layout/Header.tsx), se integró un selector de idioma inteligente:
* Detecta la ruta activa y extrae su equivalente directo en el idioma de destino usando una tabla de mapeo unívoca.
* Si el usuario se encuentra en `/servicios/deuda-privada`, el botón de cambio a inglés lo dirige a `/en/services/private-debt`.
* Si el usuario se encuentra en `/en/services/real-estate`, el cambio a español lo devuelve a `/servicios/real-estate`.

---

## 5. Datos Estructurados Ricos (JSON-LD)

* **Entidad Global**: `FinancialService` y `WebSite` en el layout raíz, sanitizados contra inyecciones XSS (`replace(/</g, '\\u003c')`).
* **Breadcrumbs**: `BreadcrumbList` en todas las páginas internas con URLs absolutas.
* **Servicios Especializados**: `Service` en las 6 verticales enlazando a la entidad corporativa (`#organization`), cobertura geográfica real y tipo de servicio.
* **Páginas Institucionales**: `AboutPage` y `ContactPage`.
