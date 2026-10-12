<div align="center">

  <img src="public/images/logo-nordsee.png" alt="Nordsee Capital Management" width="280" />

  <p align="center">
    <strong>Plataforma Institucional &amp; Portal Fiduciario</strong>
    <br />
    Banca Privada · Gestión Patrimonial · Real Estate · Deuda Privada · M&amp;A
  </p>

  <p align="center">
    <a href="#-tecnologías"><img src="https://img.shields.io/badge/Next.js-16.4_Turbopack-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" /></a>
    <a href="#-tecnologías"><img src="https://img.shields.io/badge/React-19.3-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" /></a>
    <a href="#-tecnologías"><img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" /></a>
    <a href="#-tecnologías"><img src="https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" /></a>
    <a href="#-tecnologías"><img src="https://img.shields.io/badge/pnpm-11.x-F69220?style=for-the-badge&logo=pnpm&logoColor=white" alt="pnpm" /></a>
  </p>

</div>

---

## 🏛️ Descripción General

**Nordsee Capital Management** es una firma de asesoría patrimonial integral, originación de inversiones inmobiliarias y financiamiento estructurado con presencia en **Santiago de Chile (Las Condes)** y **Concepción**, articulando mandatos transfronterizos en **Estados Unidos (Delaware / Florida)** y la **Unión Europea (Lisboa / Oporto)**.

Este repositorio alberga la plataforma web corporativa de la firma, construida con arquitectura moderna de renderizado estático en el borde, diseño editorial premium para banca privada y altos estándares de accesibilidad, seguridad y optimización de rendimiento.

---

## ✨ Características Principales

- **Diseño Editorial & Estética Fiduciaria:** Tipografía serifa clásica combinada con paleta institucional en azul marino profundo (`#0B192C`), dorado tenue (`#C5A059`) y arena suave (`#FAF9F5`), diseñada para transmitir solidez a clientes e inversionistas institucionales.
- **Mesa de Consulta y Concierge Directo (`/contacto`):** Formulario de contacto segmentado por sede (*Santiago Las Condes*, *Concepción* o *Sesión Virtual Privada*), resguardo fiduciario con señuelo honeypot y arquitectura desacoplada para base de datos o despacho transaccional.
- **Alcance Geográfico Transfronterizo:** Visualización modular de los tres polos de operación (Chile, EE.UU. y Unión Europea) con iconografía oficial de banderas circulares y tarjetas adaptativas.
- **Arquitectura de Servicios Especializados (`/servicios`):**
  - Gestión Patrimonial & Wealth Management
  - Real Estate & Desarrollo Inmobiliario Prime
  - Deuda Privada & Financiamiento Estructurado
  - Fusiones y Adquisiciones Corporativas (M&A)
  - Tax & Legal: Planificación Legal y Tributaria
  - Golden Visa Portugal (Residencia Europea por Inversión)
- **SEO & Metadatos Fiduciarios:** Generación dinámica de `sitemap.xml`, `robots.txt`, etiquetas Open Graph corporativas y estructura canónica en cada ruta.

---

## 🛠️ Tecnologías

| Capa | Tecnología | Descripción |
| :--- | :--- | :--- |
| **Framework** | [Next.js 16.4](https://nextjs.org/) | App Router con Turbopack, compilación estática y Route Handlers |
| **Biblioteca UI** | [React 19.3](https://react.dev/) | Componentes de servidor (RSC) y cliente optimizados |
| **Lenguaje** | [TypeScript 5](https://www.typescriptlang.org/) | Tipado estático estricto de extremo a extremo |
| **Estilos** | [Tailwind CSS 4](https://tailwindcss.com/) | Motor CSS moderno con tokens de diseño personalizados |
| **Iconografía** | [Lucide React](https://lucide.dev/) | Iconos SVG optimizados y semánticos |
| **Gestor de Paquetes** | [pnpm](https://pnpm.io/) | Gestión eficiente y determinista de dependencias |

---

## 📁 Estructura del Proyecto

```text
nordseecapital/
├── public/                     # Activos estáticos, marcas y fotografías editoriales
│   ├── images/
│   │   ├── about/              # Retratos de socios directores y sede corporativa
│   │   ├── contact/            # Vistas urbanas y distrito financiero
│   │   ├── home/               # Banderas oficiales e imágenes de portada
│   │   └── services/           # Fotografías de cada vertical de práctica
│   ├── favicon.ico
│   └── site.webmanifest
├── src/
│   ├── app/                    # Rutas de Next.js (App Router)
│   │   ├── api/contact/        # Endpoint API para recepción de consultas
│   │   ├── contacto/           # Página de contacto, concierge y sedes
│   │   ├── nosotros/           # Filosofía, credenciales y equipo directivo
│   │   ├── privacidad/         # Políticas de privacidad y secreto profesional
│   │   ├── servicios/          # Directorio y páginas de detalle por práctica
│   │   ├── globals.css         # Estilos globales y tokens Tailwind v4
│   │   ├── layout.tsx          # Shell principal con cabecera y pie fiduciario
│   │   ├── page.tsx            # Portada institucional
│   │   ├── robots.ts           # Configuración de rastreo para motores de búsqueda
│   │   └── sitemap.ts          # Generador de mapa de sitio XML
│   ├── components/             # Arquitectura de componentes
│   │   ├── contact/            # Formulario de admisión y contacto institucional
│   │   ├── home/               # Secciones de la portada (Hero, Pilares, Cobertura)
│   │   ├── layout/             # Header interactivo, Drawer móvil y Footer
│   │   ├── seo/                # Estructuras de metadatos y esquemas
│   │   ├── services/           # Componentes modulares para páginas de servicios
│   │   └── ui/                 # Componentes base (Button, Badge, Container, PageHeader)
│   └── content/
│       ├── services.ts         # Catálogo maestro tipado de servicios
│       └── site.ts             # Configuración institucional, sedes y coordenadas
├── next.config.ts              # Configuración del compilador Next.js
├── package.json
└── tsconfig.json               # Configuración estricta de TypeScript
```

---

## 🚀 Inicio Rápido

### Requisitos Previos

- **Node.js**: `v20.x` o superior
- **pnpm**: `v9.x` o superior

### Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/nordseecapital.git
   cd nordseecapital
   ```

2. Instalar dependencias:
   ```bash
   pnpm install
   ```

3. Iniciar el servidor de desarrollo:
   ```bash
   pnpm dev
   ```

4. Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

---

## ⚙️ Scripts Disponibles

| Comando | Acción |
| :--- | :--- |
| `pnpm dev` | Inicia el servidor de desarrollo local con Turbopack |
| `pnpm build` | Compila y optimiza la aplicación para producción |
| `pnpm start` | Inicia la versión compilada en modo producción |
| `pnpm lint` | Ejecuta ESLint para validar estándares de código |

---

## 🔐 Variables de Entorno

Crear un archivo `.env.local` en la raíz del proyecto para la configuración de servicios externos:

```bash
# Integración de despacho de correos (opcional)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx

# Próxima integración Supabase (cuando el cliente provea credenciales)
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyxxxxxxxxxxxxxxxxxxxxxxxx
```

---

## 🏛️ Sedes Corporativas

- **Santiago (Sede Central):** Los Militares, Las Condes (Piso 21, Oficina 2101), Región Metropolitana, Chile.
- **Concepción (Oficina Regional Sur):** Bernardo O'Higgins 241, Piso 9, Oficina 903, Región del Biobío, Chile.
- **Global Desk:** EE.UU. (Delaware &amp; Florida) · Portugal (Lisboa &amp; Oporto).

---

## 📄 Licencia

Propiedad privada de **Nordsee Capital Management**. Todos los derechos reservados.
