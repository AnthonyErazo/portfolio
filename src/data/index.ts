export interface BiText {
  es: string;
  en: string;
}

export interface NavItem {
  label: BiText;
  href: string;
}

export interface ProjectImage {
  src: string;
  caption: BiText;
}

export interface ProjectRepository {
  label: BiText;
  url: string;
}

export interface Project {
  id: number;
  title: string;
  shortDescription: BiText;
  fullDescription: BiText;
  technologies: string[];
  category: "web" | "mobile" | "desktop" | "other";
  type: "professional" | "university" | "personal";
  featured?: boolean;
  liveUrl?: string;
  repoUrl?: string;
  repositories?: ProjectRepository[];
  features?: BiText[];
  highlights?: BiText[];
  images?: ProjectImage[];
}

export type ProjectSummary = Omit<
  Project,
  "fullDescription" | "features" | "images"
> & {
  imageCount: number;
};

export interface Collaboration {
  name: string;
  logo?: string;
}

export interface Product {
  name: string;
  logo?: string;
}

export interface Experience {
  id: number;
  title: BiText;
  company: string;
  mark: string;
  logo?: string;
  collaborations?: Collaboration[];
  products?: Product[];
  logoSize?: "sm";
  location: BiText;
  period: BiText;
  description: BiText;
  technologies: string[];
  achievements: BiText[];
}

export interface Education {
  id: number;
  title: BiText;
  institution: string;
  logo?: string;
  logoTone?: "light" | "dark";
  period: BiText;
  description: BiText;
  type: "degree" | "certification" | "course";
  status: "completed" | "in-progress";
  grade?: string;
}

export interface Certification {
  name: string;
  institution: string;
  date: BiText;
}

export interface CertificationGroup {
  label: BiText;
  items: Certification[];
}

export interface SkillGroup {
  label: BiText;
  items: Array<string | BiText>;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export const navItems: NavItem[] = [
  { label: { es: "Sobre mí", en: "About" }, href: "#about" },
  { label: { es: "Experiencia", en: "Experience" }, href: "#experience" },
  { label: { es: "Proyectos", en: "Projects" }, href: "#projects" },
  { label: { es: "Habilidades", en: "Skills" }, href: "#skills" },
  { label: { es: "Educación", en: "Education" }, href: "#education" },
  { label: { es: "Contacto", en: "Contact" }, href: "#contact" },
];

export const personalInfo = {
  name: "Anthony Josue Erazo Llacsahuanga",
  shortName: "Anthony Erazo",
  title: {
    es: "Desarrollador Full Stack · Lima, Perú",
    en: "Full Stack Developer · Lima, Peru",
  },
  subtitle: {
    es: "Desarrollo soluciones backend, web y móviles con servicios cloud y analítica de datos aplicada a productos digitales.",
    en: "I build backend, web, and mobile solutions with cloud services and data analytics for digital products.",
  },
  about: {
    es: "Soy Anthony Josue Erazo Llacsahuanga, desarrollador Full Stack en Lima, Perú. Desarrollo soluciones backend, web y móviles con servicios cloud y analítica de datos aplicada a productos digitales. He trabajado con TypeScript, Python, Java, Flutter, SQL, BigQuery, Firebase Analytics, Google Cloud Platform y AWS en soluciones utilizadas por usuarios finales, clientes empresariales y entidades externas. Mi experiencia incluye optimización de rendimiento y costos, integración de sistemas, automatización, procesamiento de telemetría e incorporación de modelos de inteligencia artificial.",
    en: "I'm Anthony Josue Erazo Llacsahuanga, a Full Stack Developer based in Lima, Peru. I build backend, web, and mobile solutions using cloud services and data analytics for digital products. I've worked with TypeScript, Python, Java, Flutter, SQL, BigQuery, Firebase Analytics, Google Cloud Platform, and AWS on solutions used by end users, business clients, and external organizations. My experience includes performance and cost optimization, systems integration, automation, telemetry processing, and the integration of artificial intelligence models.",
  },
  facts: [
    { es: "Ingeniería de Sistemas · Universidad Nacional de Ingeniería", en: "Systems Engineering · National University of Engineering" },
    { es: "Programa de doble titulación en IA · Hanyang Cyber University / UNI FIIS", en: "Double degree program in AI · Hanyang Cyber University / UNI FIIS" },
    { es: "Experiencia en productos para usuarios finales, clientes B2B y entidades externas", en: "Experience with end-user products, B2B clients, and external organizations" },
    { es: "Inglés intermedio", en: "Intermediate English" },
  ],
  availability: {
    es: "Full Stack · Backend · Cloud · Analítica de datos",
    en: "Full Stack · Backend · Cloud · Data analytics",
  },
  ticker: [
    { es: "TuRuta · 5M+ usuarios registrados", en: "TuRuta · 5M+ registered users" },
    { es: "Telemetría · 60%–80% menos tamaño", en: "Telemetry · 60%–80% smaller payloads" },
    { es: "Datero · 8–10 clientes empresariales", en: "Datero · 8–10 business clients" },
    { es: "Datos · BigQuery y Firebase Analytics", en: "Data · BigQuery and Firebase Analytics" },
  ],
  email: "anthonyerazo76@gmail.com",
  phone: "+51 943 732 232",
  resumeUrl: "/Anthony-Josue-Erazo-Llacsahuanga-CV.pdf",
};

export const experiences: Experience[] = [
  {
    id: 1,
    title: { es: "Desarrollador Full Stack", en: "Full Stack Developer" },
    company: "TuRuta Inc",
    mark: "TR",
    logo: "/logos/turuta.png",
    logoSize: "sm",
    collaborations: [
      { name: "PNP", logo: "/logos/pnp.png" },
      { name: "ATU", logo: "/logos/atu.png" },
      { name: "UCSUR", logo: "/logos/cientifica.png" },
      { name: "Yango", logo: "/logos/yango.png" },
    ],
    products: [
      { name: "Guía de Fe", logo: "/logos/guiadefe.png" },
      { name: "Flyboard", logo: "/logos/flyboard.png" },
    ],
    location: { es: "Lima, Perú", en: "Lima, Peru" },
    period: { es: "Nov 2024 — Abr 2026", en: "Nov 2024 — Apr 2026" },
    description: {
      es: "Trabajé en mobile, web, backend, cloud y proyectos de IA para TuRuta, una plataforma de movilidad con más de 5 millones de usuarios registrados, además de productos reutilizables y soluciones B2B de la empresa.",
      en: "I worked across mobile, web, backend, cloud, and AI projects for TuRuta, a mobility platform with over 5 million registered users, as well as the company's reusable products and B2B solutions.",
    },
    technologies: ["Flutter", "TypeScript", "Next.js", "Node.js", "OpenAI Realtime API", "Twilio", "WebSockets", "Firestore", "Google Cloud", "Cloud Run", "AWS", "Typesense", "BigQuery", "Firebase Analytics", "Protocol Buffers", "Docker", "GitHub Actions", "CI/CD"],
    achievements: [
      { es: "Reduje el tamaño de la telemetría entre 60% y 80% al migrarla de JSON a Protocol Buffers y Base64", en: "Reduced telemetry size by 60% to 80% by migrating it from JSON to Protocol Buffers and Base64" },
      { es: "Optimicé el buscador de rutas con Typesense y servicios en AWS y Google Cloud, mejorando la latencia y reduciendo costos", en: "Optimized route search with Typesense and services on AWS and Google Cloud, improving latency and reducing costs" },
      { es: "Construí Phone Assistant, una base reutilizable para asistentes telefónicos con IA en tiempo real que sirvió como punto de partida para Guía de Fe y otros proyectos", en: "Built Phone Assistant, a reusable foundation for real-time AI phone assistants that became the starting point for Guía de Fe and other projects" },
      { es: "Desarrollé funcionalidades para Datero en el panel web, la app para unidades y el backend; el producto era utilizado por aproximadamente 8 a 10 clientes empresariales", en: "Built Datero features across the web dashboard, unit app, and backend; the product was used by approximately 8 to 10 business clients" },
      { es: "Participé en la integración del sistema de alertas con la PNP mediante cambios de interfaz y validaciones de backend", en: "Contributed to integrating the alert system with Peru's National Police through interface changes and backend validation" },
      { es: "Habilité consultas, copias y accesos controlados en BigQuery para UCSUR, facilitando el análisis de información operativa", en: "Enabled queries, data copies, and controlled BigQuery access for UCSUR, supporting operational data analysis" },
      { es: "Analicé eventos de Firebase Analytics para evaluar funcionalidades y aportar información a decisiones de producto", en: "Analyzed Firebase Analytics events to evaluate features and inform product decisions" },
      { es: "Mejoré la calidad del software con CI/CD en GitHub Actions, pruebas automatizadas y Docker", en: "Improved software quality with CI/CD in GitHub Actions, automated testing, and Docker" },
    ],
  },
  {
    id: 2,
    title: { es: "Ayudante de cátedra", en: "Teaching Assistant" },
    company: "Laboratorio de Inteligencia Artificial y Robótica FIIS–UNI",
    mark: "LAB",
    logo: "/logos/labiar-mark.png",
    location: { es: "Lima, Perú", en: "Lima, Peru" },
    period: { es: "Ago 2024 — Ene 2025", en: "Aug 2024 — Jan 2025" },
    description: {
      es: "Construcción de microservicios para conectar aplicaciones con robots humanoides, integrando IA generativa y mejorando la estabilidad de demostraciones académicas.",
      en: "Built microservices connecting applications with humanoid robots, integrating generative AI and improving the stability of academic demonstrations.",
    },
    technologies: ["Python", "FastAPI", "Gemini", "GitHub", "SOLID"],
    achievements: [
      { es: "Construí tres microservicios con Python y FastAPI para la interacción entre aplicaciones y robots", en: "Built three Python and FastAPI microservices for interaction between applications and robots" },
      { es: "Integré Gemini y ajusté los flujos para mejorar la estabilidad durante las demostraciones", en: "Integrated Gemini and refined interaction flows to improve stability during demonstrations" },
      { es: "Documenté los servicios, ejecuté pruebas funcionales y refactoricé código aplicando SOLID", en: "Documented the services, ran functional tests, and refactored code using SOLID principles" },
    ],
  },
  {
    id: 3,
    title: { es: "Colaborador", en: "Collaborator" },
    company: "Laboratorio de Inteligencia Artificial y Robótica FIIS–UNI",
    mark: "LAB",
    logo: "/logos/labiar-mark.png",
    location: { es: "Lima, Perú", en: "Lima, Peru" },
    period: { es: "May 2024 — Ago 2024", en: "May 2024 — Aug 2024" },
    description: {
      es: "Investigación aplicada para integrar y validar Llama 3 y Gemini en robots humanoides mediante Python y sus SDK.",
      en: "Applied research to integrate and validate Llama 3 and Gemini in humanoid robots using Python and their SDKs.",
    },
    technologies: ["Python", "Llama 3", "Gemini", "SDKs"],
    achievements: [
      { es: "Configuré SDKs e integré Llama 3 y Gemini en robots", en: "Configured SDKs and integrated Llama 3 and Gemini into robots" },
      { es: "Validé su funcionamiento en entornos experimentales y actividades de divulgación tecnológica", en: "Validated their operation in experimental settings and technology outreach activities" },
    ],
  },
  {
    id: 4,
    title: { es: "Responsable técnico de la Subárea de Software", en: "Technical Lead, Software Subarea" },
    company: "Centro Cultural Núcleo FIIS",
    mark: "CCN",
    logo: "/logos/nucleo-symbol.png",
    location: { es: "Lima, Perú", en: "Lima, Peru" },
    period: { es: "Dic 2023 — Ene 2025", en: "Dec 2023 — Jan 2025" },
    description: {
      es: "Coordiné el equipo de software para desarrollar plataformas orientadas a comunidades estudiantiles y procesos académicos, además de presentar los proyectos en ferias de innovación.",
      en: "I coordinated the software team to build platforms for student communities and academic workflows and to present the projects at innovation fairs.",
    },
    technologies: ["MongoDB", "Express", "React", "Node.js", "Angular", "Java", "Spring Boot", "PostgreSQL"],
    achievements: [
      { es: "Lideré COMUNI, plataforma MERN para gestionar comunidades estudiantiles y actividades internas", en: "Led COMUNI, a MERN platform for managing student communities and internal activities" },
      { es: "Participé en el desarrollo de EduCareer con Angular, Java, Spring Boot y PostgreSQL", en: "Contributed to EduCareer using Angular, Java, Spring Boot, and PostgreSQL" },
      { es: "Coordiné actividades técnicas del equipo y presenté proyectos en ferias de innovación", en: "Coordinated the team's technical activities and presented projects at innovation fairs" },
    ],
  },
];

export const education: Education[] = [
  {
    id: 1,
    title: { es: "Ingeniería de Sistemas", en: "Systems Engineering" },
    institution: "Universidad Nacional de Ingeniería",
    logo: "/logos/uni-red.png",
    period: { es: "Abr 2022 — Actualidad", en: "Apr 2022 — Present" },
    description: {
      es: "Formación universitaria en curso.",
      en: "Undergraduate studies in progress.",
    },
    type: "degree",
    status: "in-progress",
  },
  {
    id: 2,
    title: { es: "Programa de doble titulación en Inteligencia Artificial", en: "Double Degree Program in Artificial Intelligence" },
    institution: "Hanyang Cyber University — FIIS–UNI",
    logo: "/logos/hanyang-seal.png",

    period: { es: "Mar 2025 — Actualidad", en: "Mar 2025 — Present" },
    description: {
      es: "Formación académica complementaria en Inteligencia Artificial.",
      en: "Complementary academic training in Artificial Intelligence.",
    },
    type: "degree",
    status: "in-progress",
  },
];

export const certificationGroups: CertificationGroup[] = [
  {
    label: { es: "Cloud y DevOps", en: "Cloud & DevOps" },
    items: [
      { name: "Google Cloud Computing Foundations Certificate", institution: "Google", date: { es: "Ago 2025", en: "Aug 2025" } },
      { name: "AWS Academy Cloud Architecting", institution: "AWS Academy", date: { es: "Jul 2025", en: "Jul 2025" } },
      { name: "AWS Academy Cloud Foundations", institution: "AWS Academy", date: { es: "Mar 2025", en: "Mar 2025" } },
      { name: "GitHub Foundations", institution: "GitHub", date: { es: "Nov 2024", en: "Nov 2024" } },
    ],
  },
  {
    label: { es: "Backend, arquitectura y datos", en: "Backend, Architecture & Data" },
    items: [
      { name: "Arquitectura Hexagonal en Java", institution: "MitoCode", date: { es: "Ago 2025", en: "Aug 2025" } },
      { name: "Kafka Java Developer", institution: "MitoCode", date: { es: "Ago 2025", en: "Aug 2025" } },
      { name: "Spring WebFlux", institution: "MitoCode", date: { es: "Jul 2025", en: "Jul 2025" } },
      { name: "Microservicios en .NET 9", institution: "MitoCode", date: { es: "Abr 2025", en: "Apr 2025" } },
      { name: ".NET 9 Full Stack", institution: "MitoCode", date: { es: "Mar 2025", en: "Mar 2025" } },
      { name: "Java 21 Backend", institution: "MitoCode", date: { es: "Mar 2025", en: "Mar 2025" } },
      { name: "Programación Backend", institution: "Coderhouse", date: { es: "Abr 2024", en: "Apr 2024" } },
      { name: "Data Fundamentals", institution: "IBM", date: { es: "Oct 2023", en: "Oct 2023" } },
      { name: "SQL", institution: "Coderhouse", date: { es: "Sep 2023", en: "Sep 2023" } },
    ],
  },
  {
    label: { es: "Frontend y desarrollo de aplicaciones", en: "Frontend & Application Development" },
    items: [
      { name: "Aplicaciones Móviles con Flutter", institution: "CEPS UNI", date: { es: "Sep 2024", en: "Sep 2024" } },
      { name: "Aplicaciones Frontend con React", institution: "CEPS UNI", date: { es: "Jul 2024", en: "Jul 2024" } },
      { name: "Desarrollo de Aplicaciones", institution: "Coderhouse", date: { es: "Ene 2024", en: "Jan 2024" } },
      { name: "Web Development Fundamentals", institution: "IBM", date: { es: "Dic 2023", en: "Dec 2023" } },
      { name: "Desarrollo Frontend React", institution: "Coderhouse", date: { es: "Ago 2023", en: "Aug 2023" } },
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: { es: "Lenguajes", en: "Languages" },
    items: ["TypeScript", "JavaScript", "Python", "Java", "C#", "SQL"],
  },
  {
    label: { es: "Backend", en: "Backend" },
    items: ["Node.js", "Express", "NestJS", "Spring Boot", "FastAPI", ".NET", "REST APIs", "Microservices"],
  },
  {
    label: { es: "Bases de datos y analítica", en: "Databases & Analytics" },
    items: ["PostgreSQL", "MySQL", "MongoDB", "Firestore", "BigQuery", "Firebase Analytics", "Typesense"],
  },
  {
    label: { es: "Cloud y DevOps", en: "Cloud & DevOps" },
    items: ["Google Cloud", "Cloud Functions", "Cloud Run", "Cloud Storage", "AWS Lambda", "Amazon S3", "CloudWatch", "Docker", "Docker Compose", "GitHub Actions", "CI/CD"],
  },
  {
    label: { es: "Frontend y móvil", en: "Frontend & Mobile" },
    items: ["Angular", "React", "Next.js", "Flutter"],
  },
  {
    label: { es: "Otros", en: "Other" },
    items: [
      "Git",
      "GitHub",
      "SOLID",
      { es: "Documentación técnica", en: "Technical documentation" },
      { es: "Trabajo colaborativo", en: "Collaborative work" },
      { es: "Inglés intermedio", en: "Intermediate English" },
    ],
  },
];

export const projectTypeLabels: Record<Project["type"], BiText> = {
  professional: { es: "Profesional", en: "Professional" },
  university: { es: "Universitario", en: "University" },
  personal: { es: "Personal · aprendizaje", en: "Personal · learning" },
};

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/AnthonyErazo", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/anthonyerazoll", icon: "linkedin" },
  { name: "Email", url: "mailto:anthonyerazo76@gmail.com", icon: "mail" },
];

export const sectionTitles = {
  about: { es: "Sobre mí", en: "About me" },
  experience: { es: "Experiencia", en: "Experience" },
  projects: { es: "Proyectos", en: "Projects" },
  skills: { es: "Habilidades", en: "Skills" },
  education: { es: "Educación", en: "Education" },
  contact: { es: "Contacto", en: "Contact" },
};
