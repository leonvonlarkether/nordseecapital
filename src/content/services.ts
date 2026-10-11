export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  summary: string;
  description: string[];
  keyCapabilities: string[];
  approach: string[];
  geographicCoverage?: string;
}

export const services: ServiceItem[] = [
  {
    id: "01",
    slug: "real-estate",
    title: "Real Estate & Desarrollo Inmobiliario",
    shortTitle: "Real Estate",
    tagline: "Inversión, renta y desarrollo en activos inmobiliarios de alto estándar",
    summary:
      "Identificación, estructuración y gestión de activos inmobiliarios prime con capacidad de generar flujos estables y plusvalía sostenible.",
    description: [
      "En Nordsee Capital participamos en la selección, gestión y coinversión de activos inmobiliarios de alto estándar, orientados a generar flujos predecibles y valor patrimonial a largo plazo.",
      "Nuestra estrategia combina el desarrollo habitacional y comercial en ubicaciones consolidadas con activos de renta institucional: oficinas, centros logísticos y locales comerciales estratégicos.",
      "Acompañamos a inversionistas y socios operadores en todas las fases del ciclo inmobiliario, desde la evaluación de suelo y due diligence urbanístico hasta la estructuración de financiamiento y la eventual desinversión.",
    ],
    keyCapabilities: [
      "Activos de renta comercial e industrial prime",
      "Proyectos residenciales con alta demanda urbana",
      "Estructuración de financiamiento en condiciones competitivas",
      "Due diligence técnico, urbanístico y contractual",
      "Monitoreo continuo de ocupación y rentabilidad",
    ],
    approach: [
      "Selección rigurosa basada en ubicación y resiliencia de flujos",
      "Estructuras societarias con resguardo legal específico",
      "Presencia y alianzas activas en mercados de Chile y Estados Unidos",
    ],
    geographicCoverage: "Chile y Estados Unidos",
  },
  {
    id: "02",
    slug: "wealth-management",
    title: "Wealth Management & Asesoría Patrimonial",
    shortTitle: "Wealth Management",
    tagline: "Gestión patrimonial personalizada bajo arquitectura abierta e independencia",
    summary:
      "Protección y crecimiento del capital familiar e institucional con independencia absoluta de emisores y alineación de intereses.",
    description: [
      "Proporcionamos una consultoría patrimonial integral estructurada bajo un modelo customer-centric, donde el perfil de riesgo, los horizontes temporales y las metas específicas de cada familia o institución rigen cada recomendación.",
      "Operamos bajo una filosofía de arquitectura abierta: no colocamos productos financieros propios ni dependemos de un único custodio, lo que previene conflictos de interés y asegura total objetividad técnica.",
      "Mantenemos vínculos y acuerdos de trabajo con entidades bancarias y plataformas de custodia de primer nivel en Chile y en las principales jurisdicciones internacionales.",
    ],
    keyCapabilities: [
      "Diseño de política de inversión y perfilamiento integral",
      "Asignación estratégica de activos globales (Asset Allocation)",
      "Acceso a plataformas de custodia en Chile y el extranjero",
      "Monitoreo recurrente de volatilidad, costos y desempeño",
      "Informes consolidados y rendición periódica",
    ],
    approach: [
      "Independencia de emisores para evitar sesgos de intermediación",
      "Conservación de capital como principio rector de largo plazo",
      "Estructuración coherente con la situación tributaria de cada cliente",
    ],
    geographicCoverage: "Custodia local e internacional",
  },
  {
    id: "03",
    slug: "deuda-privada",
    title: "Deuda Privada & Financiamiento Estructurado",
    shortTitle: "Deuda Privada",
    tagline: "Soluciones de financiamiento respaldadas por flujos reales y garantías",
    summary:
      "Vehículos de deuda a medida para empresas y proyectos de alta solidez, con estricto análisis de garantías y covenants protectores.",
    description: [
      "Nordsee Capital estructura y participa en oportunidades de inversión en deuda privada dirigidas a empresas y proyectos con probado potencial de generación de caja.",
      "El diseño de cada operación descansa en una exhaustiva auditoría del modelo de negocio deudor, asegurando colaterales reales, gravámenes preferentes y covenants financieros diseñados para mitigar contingencias.",
      "Permite a los inversionistas acceder a retornos predecibles y diversificados frente a los mercados de renta fija tradicionales, manteniendo un perfil de riesgo acotado.",
    ],
    keyCapabilities: [
      "Originación y análisis de crédito empresarial e inmobiliario",
      "Estructuración de contratos de deuda y paquetes de garantías",
      "Fijación y seguimiento de covenants de cobertura y liquidez",
      "Diversificación en sectores estratégicos no correlacionados",
    ],
    approach: [
      "Due diligence financiero y operativo riguroso del emisor",
      "Mitigación activa del riesgo mediante garantías ejecutables",
      "Supervisión periódica del cumplimiento contractual",
    ],
    geographicCoverage: "Chile y plazas selectas",
  },
  {
    id: "04",
    slug: "ma",
    title: "M&A: Fusiones y Adquisiciones",
    shortTitle: "M&A",
    tagline: "Asesoría estratégica y ejecución en transacciones corporativas",
    summary:
      "Acompañamiento especializado en compraventas, fusiones y reorganizaciones empresariales, desde la valoración hasta el cierre definitivo.",
    description: [
      "Ofrecemos acompañamiento integral en procesos de M&A (Mergers & Acquisitions) para inversionistas, familias empresarias y corporaciones que buscan expandirse, incorporar socios o desinvertir.",
      "Nuestro equipo articula análisis financiero avanzado, estrategia de negociación y solidez jurídica societaria para proteger el valor de nuestros clientes en cada mesa de trabajo.",
      "Facilitamos el acceso a contrapartes calificadas mediante redes de contacto con fondos, banca corporativa e inversionistas institucionales en Chile y el extranjero.",
    ],
    keyCapabilities: [
      "Búsqueda y evaluación preliminar de contrapartes",
      "Modelación financiera, valoración y fijación de rangos de precio",
      "Estructuración de términos clave (Term Sheets / LOI)",
      "Coordinación del proceso de Due Diligence legal y contable",
      "Negociación del contrato de compraventa y acuerdos de socios (SPA / SHA)",
    ],
    approach: [
      "Confidencialidad rigurosa y gestión metódica de información",
      "Criterio conservador enfocado en reducir pasivos contingentes",
      "Alineación entre objetivos de liquidez, control y gobernanza familiar",
    ],
    geographicCoverage: "Transacciones locales y cross-border",
  },
  {
    id: "05",
    slug: "tax-legal",
    title: "Tax & Legal: Asesoría Legal y Tributaria",
    shortTitle: "Tax & Legal",
    tagline: "Planificación tributaria y corporativa estratégica para inversiones globales",
    summary:
      "Estructuración jurídica y optimización tributaria de patrimonios y transacciones en Chile y en jurisdicciones internacionales.",
    description: [
      "Cada decisión de inversión o reorganización requiere una rigurosa arquitectura legal y tributaria para asegurar eficiencia fiscal, cumplimiento regulatorio y resguardo patrimonial intergeneracional.",
      "Nuestro equipo de Tax & Legal asesora de manera transversal todas las operaciones de la firma y atiende de forma directa requerimientos societarios de empresas y clientes individuales.",
      "Diseñamos estructuras corporativas y fiduciarias idóneas para operaciones transfronterizas, aplicando convenios internacionales para evitar la doble imposición.",
    ],
    keyCapabilities: [
      "Planificación tributaria personal y corporativa",
      "Reorganizaciones societarias, fusiones y divisiones",
      "Estructuración fiscal de inversiones en el exterior",
      "Gobierno corporativo y protocolos familiares",
      "Cumplimiento normativo y fiscalización ante autoridades tributarias",
    ],
    approach: [
      "Apego estricto a la legislación tributaria y regulatoria vigente",
      "Prevención de contingencias mediante auditoría legal previa",
      "Integración directa con las áreas de Real Estate y Wealth Management",
    ],
    geographicCoverage: "Chile y estructuras internacionales",
  },
  {
    id: "06",
    slug: "golden-visa-portugal",
    title: "Golden Visa Portugal & Residencia por Inversión",
    shortTitle: "Golden Visa Portugal",
    tagline: "Acompañamiento legal y selección de vehículos de inversión elegibles en Portugal",
    summary:
      "Asesoría metódica para familias e inversionistas interesados en el programa de residencia de Portugal a través de fondos regulados.",
    description: [
      "Orientamos a inversionistas y grupos familiares en el proceso de solicitud de residencia por inversión en Portugal (Golden Visa), bajo el marco normativo actual que prioriza fondos de inversión regulados por la CMVM portuguesa.",
      "Realizamos un debido proceso de diligencia sobre las alternativas de inversión elegibles, analizando el riesgo subyacente de los vehículos para proteger el capital y evitar activos no conformes.",
      "Trabajamos en coordinación directa con un partner legal y financiero en terreno en Portugal con sólida trayectoria, brindando acompañamiento continuo durante todo el expediente administrativo.",
    ],
    keyCapabilities: [
      "Evaluación de elegibilidad legal del solicitante y su grupo familiar",
      "Selección y due diligence de fondos de inversión aprobados por la CMVM",
      "Apertura de cuentas bancarias y obtención de NIF portugués",
      "Coordinación de la documentación legal y migratoria oficial",
      "Seguimiento del estado de solicitud ante las autoridades migratorias (AIMA)",
    ],
    approach: [
      "Enfoque en preservación de capital: selección de vehículos auditados",
      "Transparencia respecto a plazos administrativos y requerimientos legales",
      "Acompañamiento en terreno a través de alianzas locales de larga data",
    ],
    geographicCoverage: "Portugal y Unión Europea",
  },
];
