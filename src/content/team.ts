export interface TeamMember {
  name: string;
  role: string;
  credentials: string;
  bio: string;
  specialties: string[];
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Martin Strube",
    role: "Socio Director · Estrategia Financiera",
    credentials: "Ingeniero Comercial con Magíster",
    bio: "Más de 10 años de trayectoria liderando estrategias comerciales, estructuración financiera corporativa y gestión de patrimonios con foco en rentabilidad sostenible y control de riesgos.",
    specialties: ["Gestión Patrimonial", "Estructuración Financiera", "Deuda Privada"],
    image: "/images/about/Martin-Strube.png",
  },
  {
    name: "Fernando Llull",
    role: "Socio Director · Real Estate Internacional",
    credentials: "Ingeniero Comercial con Magíster",
    bio: "Más de 10 años de experiencia especializada en selección, análisis, desarrollo y liquidación de activos inmobiliarios prime en mercados de Chile y Estados Unidos.",
    specialties: ["Real Estate de Renta", "Desarrollo Inmobiliario", "Coinversión Internacional"],
    image: "/images/about/Fernando_Llull.png",
  },
  {
    name: "Fernando Prat",
    role: "Socio Director · Tax & Legal",
    credentials: "Abogado · LL.M. en Derecho Tributario y Regulación Económica",
    bio: "Especialista en derecho corporativo, reorganizaciones empresariales complejas, fiscalidad internacional y estructuración societaria para la protección de patrimonios familiares e institucionales.",
    specialties: ["Planificación Tributaria", "Derecho Corporativo", "Estructuración Cross-border"],
    image: "/images/about/Fernando_Prat.png",
  },
];
