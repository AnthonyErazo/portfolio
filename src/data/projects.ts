import type { Project } from "./index";

export const projects: Project[] = [
  {
    id: 1,
    title: "TuRuta App",
    shortDescription: {
      es: "Optimización de búsqueda, telemetría y analítica para una plataforma de movilidad con más de 5 millones de usuarios registrados.",
      en: "Search, telemetry, and analytics optimization for a mobility platform with over 5 million registered users.",
    },
    fullDescription: {
      es: "El reto era evolucionar TuRuta, una plataforma de movilidad con más de 5 millones de usuarios registrados, manteniendo la eficiencia en mobile, web, backend y cloud. Trabajé en reducir la latencia y el costo del buscador, disminuir el volumen de telemetría, habilitar análisis operativo y de producto e integrar servicios externos sin perder calidad en la entrega de software.",
      en: "The challenge was to evolve TuRuta, a mobility platform with over 5 million registered users, while maintaining efficiency across mobile, web, backend, and cloud. I worked on reducing search latency and cost, shrinking telemetry volume, enabling operational and product analysis, and integrating external services without sacrificing software delivery quality.",
    },
    technologies: ["Flutter", "TypeScript", "Typesense", "BigQuery", "Firebase Analytics", "Google Cloud", "AWS", "Protocol Buffers", "Docker", "GitHub Actions"],
    category: "mobile",
    type: "professional",
    featured: true,
    liveUrl: "https://turuta.pe/",
    highlights: [
      { es: "Problema · Evolucionar una plataforma con más de 5 millones de usuarios sin perder eficiencia", en: "Problem · Evolve a platform with over 5 million users without losing efficiency" },
      { es: "Búsqueda · Typesense sobre AWS y Google Cloud para reducir latencia y costo", en: "Search · Typesense on AWS and Google Cloud to reduce latency and cost" },
      { es: "Telemetría · Protocol Buffers y Base64 para reducir el volumen entre 60% y 80%", en: "Telemetry · Protocol Buffers and Base64 to reduce volume by 60% to 80%" },
      { es: "Producto B2B · Funcionalidades de Datero en panel web, app para unidades y backend", en: "B2B product · Datero features across the web dashboard, unit app, and backend" },
      { es: "Integración · Interfaz y validaciones de backend para el sistema de alertas con la PNP", en: "Integration · UI and backend validation for the alert system with Peru's National Police" },
      { es: "Datos · BigQuery para UCSUR y Firebase Analytics para evaluar funcionalidades", en: "Data · BigQuery for UCSUR and Firebase Analytics for feature evaluation" },
      { es: "Calidad · CI/CD, pruebas automatizadas, GitHub Actions y Docker", en: "Quality · CI/CD, automated tests, GitHub Actions, and Docker" },
    ],
    features: [
      {
        es: "Optimicé el buscador de rutas con Typesense y servicios en AWS y Google Cloud, mejorando la latencia y reduciendo costos operativos.",
        en: "Optimized route search with Typesense and services on AWS and Google Cloud, improving latency and reducing operating costs.",
      },
      {
        es: "Migré la telemetría de JSON a Protocol Buffers con Base64, reduciendo su tamaño entre 60% y 80% según el tipo de evento.",
        en: "Migrated telemetry from JSON to Protocol Buffers with Base64, cutting its size by 60% to 80% depending on the event type.",
      },
      {
        es: "Participé en la integración del sistema de alertas con la Policía Nacional del Perú, desarrollando cambios de interfaz y validaciones en el backend.",
        en: "Contributed to integrating the alert system with Peru's national police, building UI changes and backend validations.",
      },
      {
        es: "Contribuí a Datero, el producto para empresas con 8 a 10 clientes, desarrollando funcionalidades en el panel web, la app para unidades y el backend.",
        en: "Contributed to Datero, the business-facing product with 8 to 10 clients, building features across the web dashboard, unit app, and backend.",
      },
      {
        es: "Habilité consultas, copias y accesos controlados en BigQuery para UCSUR, facilitando el análisis de información operativa.",
        en: "Enabled queries, data copies, and controlled BigQuery access for UCSUR, supporting operational data analysis.",
      },
      {
        es: "Analicé eventos de Firebase Analytics para evaluar funcionalidades y aportar información a decisiones de producto.",
        en: "Analyzed Firebase Analytics events to evaluate features and inform product decisions.",
      },
      {
        es: "Mejoré la calidad del software con CI/CD en GitHub Actions, pruebas automatizadas y contenedorización con Docker.",
        en: "Improved software quality with CI/CD on GitHub Actions, automated tests, and Docker containerization.",
      },
    ],
  },
  {
    id: 30,
    title: "Phone Assistant",
    shortDescription: {
      es: "Plataforma reutilizable de asistentes telefónicos con IA, audio bidireccional y herramientas de negocio en tiempo real.",
      en: "Reusable AI phone-assistant platform with bidirectional audio and real-time business tools.",
    },
    fullDescription: {
      es: "El reto era construir asistentes telefónicos capaces de conversar y ejecutar acciones de negocio en tiempo real sin crear una solución distinta para cada producto. En TuRuta desarrollé una base full stack reutilizable que conecta Twilio Media Streams con OpenAI Realtime API mediante WebSockets. La demostración gestiona pedidos, consulta Firestore, valida direcciones y permite monitorear llamadas y transcripciones; esta base sirvió como punto de partida para Guía de Fe y otros proyectos de IA. Por ser software de la empresa, su código y despliegue no son públicos.",
      en: "The challenge was to build phone assistants that could converse and perform business actions in real time without creating a separate solution for every product. At TuRuta, I developed a reusable full-stack foundation connecting Twilio Media Streams to the OpenAI Realtime API over WebSockets. The demo manages orders, queries Firestore, validates addresses, and supports live call and transcript monitoring; this foundation became the starting point for Guía de Fe and other AI projects. Because it is company software, its source code and deployment are private.",
    },
    technologies: ["OpenAI Realtime API", "Twilio", "WebSockets", "Next.js", "Node.js", "TypeScript", "Firestore", "Google Cloud Run", "Firebase Hosting", "Google Maps", "Docker"],
    category: "web",
    type: "professional",
    featured: true,
    highlights: [
      { es: "Problema · Combinar conversación por voz y operaciones de negocio durante una llamada", en: "Problem · Combine voice conversation and business operations during a live call" },
      { es: "Decisión · Un puente WebSocket reutilizable entre Twilio y OpenAI Realtime", en: "Decision · A reusable WebSocket bridge between Twilio and OpenAI Realtime" },
      { es: "Resultado · Base reutilizada en Guía de Fe, con pedidos, validación de direcciones y monitoreo en vivo", en: "Outcome · Foundation reused for Guía de Fe, with orders, address validation, and live monitoring" },
    ],
    features: [
      {
        es: "Construí el puente de audio bidireccional entre Twilio Media Streams y OpenAI Realtime mediante WebSockets, incluyendo transcripción, respuesta en streaming e interrupciones naturales.",
        en: "Built the bidirectional audio bridge between Twilio Media Streams and OpenAI Realtime over WebSockets, including transcription, streamed responses, and natural interruptions.",
      },
      {
        es: "Implementé herramientas de negocio para consultar el menú, preparar y confirmar pedidos, modificar o cancelar órdenes y validar direcciones de entrega.",
        en: "Implemented business tools to query the menu, prepare and confirm orders, modify or cancel orders, and validate delivery addresses.",
      },
      {
        es: "Desarrollé un panel operativo para observar llamadas activas, transcripciones, funciones ejecutadas, historial de conversaciones y órdenes.",
        en: "Developed an operations dashboard for monitoring active calls, transcripts, executed functions, conversation history, and orders.",
      },
      {
        es: "Persistí conversaciones y pedidos en Firestore mediante una capa de acceso a datos separada del flujo de voz.",
        en: "Persisted conversations and orders in Firestore through a data-access layer separated from the voice flow.",
      },
      {
        es: "Preparé el despliegue cloud con Firebase Hosting para el frontend y un backend contenedorizado en Google Cloud Run.",
        en: "Prepared the cloud deployment with Firebase Hosting for the frontend and a containerized backend on Google Cloud Run.",
      },
    ],
    images: [
      {
        src: "/projects/phone-assistant/01-live-call.png",
        caption: {
          es: "Monitoreo en vivo de la conversación y las herramientas ejecutadas con datos de demostración",
          en: "Live conversation and tool-execution monitoring with demonstration data",
        },
      },
      {
        src: "/projects/phone-assistant/02-orders.png",
        caption: {
          es: "Vista de órdenes generadas durante las llamadas con datos de demostración",
          en: "Orders generated during calls using demonstration data",
        },
      },
      {
        src: "/projects/phone-assistant/03-call-history.png",
        caption: {
          es: "Historial de llamadas y transcripciones persistidas con datos de demostración",
          en: "Persisted call and transcript history using demonstration data",
        },
      },
    ],
  },
  {
    id: 12,
    title: "Flyboard",
    shortDescription: {
      es: "Teclado multiplataforma con IA que convierte dictado natural en texto corregido, limpio y adaptado al tono.",
      en: "Cross-platform AI keyboard that turns natural dictation into corrected, polished, tone-adjusted text.",
    },
    fullDescription: {
      es: "El reto del producto era convertir habla espontánea en texto utilizable sin interrumpir el flujo del usuario ni obligarlo a cambiar de aplicación. Participé en Flyboard durante mi experiencia en TuRuta: un teclado con IA para iOS, Android, macOS y Windows que transcribe la voz, elimina muletillas, corrige el texto y adapta el tono antes de enviarlo.",
      en: "The product challenge was to turn spontaneous speech into usable text without interrupting the user's flow or forcing them to switch applications. I contributed to Flyboard during my time at TuRuta: an AI keyboard for iOS, Android, macOS, and Windows that transcribes speech, removes filler words, corrects text, and adjusts tone before sending.",
    },
    technologies: ["AI", "Voice-to-Text", "iOS", "Android", "macOS", "Windows"],
    category: "mobile",
    type: "professional",
    featured: true,
    liveUrl: "https://flyboard.app/",
    highlights: [
      { es: "Problema · Dictar y mejorar texto sin abandonar la aplicación activa", en: "Problem · Dictate and improve text without leaving the active application" },
      { es: "Decisión · Integrar transcripción, limpieza y ajuste de tono dentro del teclado", en: "Decision · Integrate transcription, cleanup, and tone adjustment into the keyboard" },
      { es: "Resultado · Producto publicado para iOS, Android, macOS y Windows", en: "Outcome · Product released for iOS, Android, macOS, and Windows" },
    ],
    features: [
      { es: "Concentrar el dictado y el refinamiento del texto dentro del teclado mantiene al usuario en la aplicación donde está escribiendo.", en: "Keeping dictation and text refinement inside the keyboard lets users remain in the application where they are writing." },
      { es: "El flujo transforma voz espontánea en texto transcrito, sin muletillas, corregido y ajustado al tono elegido.", en: "The flow turns spontaneous speech into transcribed text with filler words removed, corrections applied, and the selected tone reflected." },
      { es: "La misma propuesta de uso se ofrece en plataformas móviles y de escritorio.", en: "The same usage model is available across mobile and desktop platforms." },
    ],
  },
  {
    id: 13,
    title: "Guía de Fe",
    shortDescription: {
      es: "Producto público de TuRuta orientado a una experiencia de fe y construido desde una base reutilizable de asistentes con IA.",
      en: "Public TuRuta product focused on a faith-based experience and built from a reusable AI-assistant foundation.",
    },
    fullDescription: {
      es: "El reto era adaptar una base técnica reutilizable a un producto de IA con una experiencia de fe propia. Participé en Guía de Fe como parte de mi trabajo en TuRuta, reutilizando como punto de partida la plataforma desarrollada en Phone Assistant en lugar de construir nuevamente la integración base. El producto está publicado en su sitio oficial y el repositorio permanece privado por tratarse de software de la empresa.",
      en: "The challenge was to adapt a reusable technical foundation to an AI product with its own faith-based experience. I contributed to Guía de Fe as part of my work at TuRuta, reusing the platform developed in Phone Assistant as a starting point instead of rebuilding the core integration. The product is available on its official website, while the repository remains private because it is company software.",
    },
    technologies: ["Web", "AI"],
    category: "web",
    type: "professional",
    featured: true,
    liveUrl: "https://guiadefe.com/",
    highlights: [
      { es: "Problema · Adaptar una plataforma común a una experiencia de fe diferenciada", en: "Problem · Adapt a shared platform to a distinct faith-based experience" },
      { es: "Decisión · Reutilizar la base de Phone Assistant en vez de comenzar la integración desde cero", en: "Decision · Reuse the Phone Assistant foundation instead of rebuilding the integration from scratch" },
      { es: "Resultado · Producto profesional publicado y accesible desde su sitio oficial", en: "Outcome · Published professional product available through its official website" },
    ],
    features: [
      { es: "La reutilización de la plataforma base permitió concentrar el trabajo en adaptar la experiencia del producto.", en: "Reusing the foundation made it possible to focus the work on adapting the product experience." },
      { es: "La implementación se mantiene dentro de la infraestructura privada de TuRuta; solo se publica el sitio del producto.", en: "The implementation remains within TuRuta's private infrastructure; only the product website is public." },
    ],
  },
  {
    id: 10,
    title: "Sistema de Bibliotecas CI-FIIS",
    shortDescription: {
      es: "Centraliza la operación bibliotecaria y un asistente con IA mediante una arquitectura deliberadamente simple en Java y Python.",
      en: "Centralizes library operations and an AI assistant through a deliberately simple Java and Python architecture.",
    },
    fullDescription: {
      es: "El reto académico fue centralizar catálogo, préstamos, reservas, recursos, penalidades y reportes del Centro de Información de la FIIS, incorporando un asistente con IA sin añadir complejidad operativa innecesaria. Separé el dominio transaccional en Java con Spring Boot del asistente en Python con FastAPI, ambos detrás de React y compartiendo el mismo esquema de autenticación.",
      en: "The academic challenge was to centralize the FIIS Information Center's catalog, loans, reservations, resources, penalties, and reports while adding an AI assistant without unnecessary operational complexity. I separated the transactional domain in Java with Spring Boot from the Python and FastAPI assistant, both behind React and sharing the same authentication scheme.",
    },
    technologies: ["Java 21", "Spring Boot 3", "Python", "FastAPI", "React", "PostgreSQL", "Docker", "Gemini"],
    category: "web",
    type: "university",
    featured: true,
    repoUrl: "https://github.com/AnthonyErazo/Software-Library",
    highlights: [
      { es: "Problema · Unificar la operación bibliotecaria y las consultas asistidas con IA", en: "Problem · Unify library operations and AI-assisted queries" },
      { es: "Decisión · Separar dominio Java y asistente Python, compartiendo JWT y evitando infraestructura innecesaria", en: "Decision · Separate the Java domain and Python assistant, sharing JWT and avoiding unnecessary infrastructure" },
      { es: "Resultado · Flujo completo reproducible con Docker Compose y APIs documentadas con Swagger", en: "Outcome · Complete reproducible flow with Docker Compose and Swagger-documented APIs" },
    ],
    features: [
      {
        es: "Arquitectura políglota sin la complejidad operativa de microservicios: sin Eureka, API Gateway, Kafka ni Redis.",
        en: "Polyglot architecture without the operational complexity of microservices: no Eureka, API Gateway, Kafka, or Redis.",
      },
      {
        es: "El servicio de IA valida el mismo JWT que el backend de dominio y reenvía el token para consultar en nombre del usuario.",
        en: "The AI service validates the same JWT as the domain backend and forwards the token to query on the user's behalf.",
      },
      {
        es: "Todo el entorno levanta con un solo docker compose up, con Swagger disponible en ambos servicios.",
        en: "The whole environment starts with a single docker compose up, with Swagger available on both services.",
      },
    ],
    images: [
      { src: "/projects/software-library/02-dashboard.png", caption: { es: "Panel del estudiante con préstamos activos y penalidades", en: "Student dashboard with active loans and penalties" } },
      { src: "/projects/software-library/03-catalogo.png", caption: { es: "Catálogo de materiales", en: "Materials catalog" } },
      { src: "/projects/software-library/04-asistente.png", caption: { es: "Asistente virtual con Gemini", en: "Virtual assistant powered by Gemini" } },
      { src: "/projects/software-library/05-admin.png", caption: { es: "Panel de administración", en: "Admin dashboard" } },
      { src: "/projects/software-library/06-swagger.png", caption: { es: "API del dominio documentada con Swagger", en: "Domain API documented with Swagger" } },
      { src: "/projects/software-library/01-login.png", caption: { es: "Autenticación", en: "Authentication" } },
    ],
  },
  {
    id: 4,
    title: "COMUNI",
    shortDescription: {
      es: "Centraliza el descubrimiento, la creación y la gestión de comunidades estudiantiles con permisos por rol.",
      en: "Centralizes student-community discovery, creation, and management with role-based permissions.",
    },
    fullDescription: {
      es: "El reto fue reunir en un solo flujo el descubrimiento de comunidades, la publicación de contenido, la administración de integrantes y la moderación de actividades. Lideré el desarrollo de la plataforma y separamos la experiencia en React de una API con Node.js, Express y MongoDB, aplicando permisos según la responsabilidad de cada usuario.",
      en: "The challenge was to bring community discovery, content publishing, member administration, and activity moderation into a single flow. I led the platform's development, separating the React experience from a Node.js, Express, and MongoDB API and applying permissions based on each user's responsibilities.",
    },
    technologies: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    category: "web",
    type: "university",
    repositories: [
      { label: { es: "Código frontend", en: "Frontend code" }, url: "https://github.com/AnthonyErazo/ComuniReact" },
      { label: { es: "Código backend", en: "Backend code" }, url: "https://github.com/AnthonyErazo/ComuniBack" },
    ],
    highlights: [
      { es: "Problema · Reunir comunidades, publicaciones e integrantes en un solo flujo", en: "Problem · Bring communities, posts, and members into a single flow" },
      { es: "Decisión · SPA React y API Express/MongoDB con autenticación y roles validados", en: "Decision · React SPA and Express/MongoDB API with validated authentication and roles" },
      { es: "Resultado · Flujos diferenciados para visitantes, responsables de comunidad y administradores", en: "Outcome · Distinct flows for visitors, community owners, and administrators" },
    ],
    features: [
      { es: "Separé la SPA en React de la API Express para mantener independientes la experiencia de usuario y las reglas del backend.", en: "I separated the React SPA from the Express API to keep the user experience independent from backend rules." },
      { es: "La autenticación y los permisos se revalidan según el rol para proteger la gestión de integrantes y la moderación.", en: "Authentication and permissions are revalidated by role to protect member management and moderation." },
      { es: "El modelo en MongoDB conecta comunidades, publicaciones y membresías dentro de un mismo flujo.", en: "The MongoDB model connects communities, posts, and memberships within a single flow." },
    ],
    images: [
      { src: "/projects/comuni/01-inicio.png", caption: { es: "Página de inicio", en: "Home page" } },
      { src: "/projects/comuni/02-panel-usuario.png", caption: { es: "Panel de usuario", en: "User dashboard" } },
      { src: "/projects/comuni/03-gestion-grupo.png", caption: { es: "Gestión de comunidades", en: "Community management" } },
    ],
  },
  {
    id: 5,
    title: "EduCareer",
    shortDescription: {
      es: "Contribución a una plataforma para apoyar procesos académicos con Angular, Spring Boot y PostgreSQL.",
      en: "Contribution to a platform supporting academic workflows with Angular, Spring Boot, and PostgreSQL.",
    },
    fullDescription: {
      es: "El objetivo de EduCareer fue apoyar procesos académicos mediante una plataforma web. Participé en su desarrollo dentro del equipo técnico del Centro Cultural Núcleo FIIS, trabajando sobre una separación entre el frontend Angular, el backend Java con Spring Boot y la persistencia en PostgreSQL.",
      en: "EduCareer's goal was to support academic workflows through a web platform. I contributed to its development within the Centro Cultural Núcleo FIIS technical team, working with a separation between the Angular frontend, the Java and Spring Boot backend, and PostgreSQL persistence.",
    },
    technologies: ["Angular", "Java", "Spring Boot", "PostgreSQL"],
    category: "web",
    type: "university",
    highlights: [
      { es: "Problema · Apoyar procesos académicos desde una plataforma web", en: "Problem · Support academic workflows through a web platform" },
      { es: "Decisión · Separar frontend Angular, backend Spring Boot y persistencia PostgreSQL", en: "Decision · Separate the Angular frontend, Spring Boot backend, and PostgreSQL persistence" },
      { es: "Resultado · Contribución coordinada dentro del equipo técnico de Núcleo FIIS", en: "Outcome · Coordinated contribution within the Núcleo FIIS technical team" },
    ],
    features: [
      { es: "La separación por capas permitió trabajar el frontend y la lógica de backend como responsabilidades diferenciadas.", en: "The layered separation allowed the frontend and backend logic to be handled as distinct responsibilities." },
      { es: "PostgreSQL concentró la persistencia de los procesos académicos atendidos por la plataforma.", en: "PostgreSQL centralized persistence for the academic workflows supported by the platform." },
    ],
  },
  {
    id: 6,
    title: "LinkShort",
    shortDescription: {
      es: "Acortador de URLs con estadísticas, protección con contraseña y códigos QR.",
      en: "URL shortener with usage analytics, password protection, and QR codes.",
    },
    fullDescription: {
      es: "Sistema completo de acortamiento de URLs: enlaces con estadísticas de uso, protección mediante contraseña y generación de códigos QR. Frontend en Next.js y backend en Express, ambos con TypeScript sobre MongoDB.",
      en: "Complete URL shortening system: links with usage analytics, password protection, and QR code generation. Next.js frontend and Express backend, both in TypeScript on MongoDB.",
    },
    technologies: ["Next.js", "Express", "TypeScript", "MongoDB"],
    category: "web",
    type: "personal",
    repoUrl: "https://github.com/AnthonyErazo/url-shortener",
    images: [
      { src: "/projects/url-shortener/01-home.png", caption: { es: "Creación de enlaces cortos", en: "Short link creation" } },
      { src: "/projects/url-shortener/02-result.png", caption: { es: "Enlace protegido y código QR", en: "Protected link and QR code" } },
      { src: "/projects/url-shortener/03-analytics.png", caption: { es: "Panel de analítica", en: "Analytics dashboard" } },
    ],
  },
  {
    id: 7,
    title: "Payment System",
    shortDescription: {
      es: "Prueba de concepto de pagos orientada a eventos con Kafka Streams, Spring Boot y Docker.",
      en: "Event-driven payment proof of concept built with Kafka Streams, Spring Boot, and Docker.",
    },
    fullDescription: {
      es: "Prueba de concepto de procesamiento de pagos: una API REST publica los eventos en Kafka y una topología de Kafka Streams mantiene el saldo agregado por tarjeta. La consulta expone una proyección en memoria de la aplicación y Docker Compose permite reproducir el entorno completo de forma local.",
      en: "Payment-processing proof of concept: a REST API publishes events to Kafka and a Kafka Streams topology maintains the aggregate balance per card. Queries expose an in-memory application projection, while Docker Compose reproduces the complete environment locally.",
    },
    technologies: ["Java", "Spring Boot", "Kafka Streams", "Docker"],
    category: "other",
    type: "personal",
    repoUrl: "https://github.com/AnthonyErazo/payment-system",
    highlights: [
      { es: "Agregación de saldos por tarjeta con Kafka Streams", en: "Per-card balance aggregation with Kafka Streams" },
      { es: "Arquitectura basada en eventos", en: "Event-driven architecture" },
    ],
    features: [
      {
        es: "Topología de Kafka Streams que agrega saldos por card_id conforme llegan los eventos de pago.",
        en: "Kafka Streams topology that aggregates balances per card_id as payment events arrive.",
      },
      {
        es: "API REST para publicar pagos y consultar una proyección en memoria, con validación de tipos de operación.",
        en: "REST API to publish payments and query an in-memory projection, with operation type validation.",
      },
      {
        es: "Infraestructura completa en Docker Compose, con Kafdrop para inspeccionar topics y mensajes.",
        en: "Full infrastructure in Docker Compose, with Kafdrop to inspect topics and messages.",
      },
    ],
    images: [
      { src: "/projects/payment-system/01-payments-endpoint.png", caption: { es: "Endpoint de registro de pagos", en: "Payment registration endpoint" } },
      { src: "/projects/payment-system/02-search-endpoint.png", caption: { es: "Consulta de saldos agregados", en: "Aggregated balance query" } },
      { src: "/projects/payment-system/03-kafdrop.png", caption: { es: "Cluster de Kafka visto desde Kafdrop", en: "Kafka cluster seen from Kafdrop" } },
      { src: "/projects/payment-system/04-topic-messages.png", caption: { es: "Mensajes en el topic de pagos", en: "Messages in the payments topic" } },
    ],
  },
  {
    id: 11,
    title: "Biblioteca Hexagonal",
    shortDescription: {
      es: "Gestión de biblioteca con arquitectura hexagonal, alquiler asíncrono por Kafka y MySQL.",
      en: "Library management with hexagonal architecture, async rentals over Kafka, and MySQL.",
    },
    fullDescription: {
      es: "Sistema de gestión de biblioteca construido con arquitectura hexagonal, separando dominio, aplicación e infraestructura mediante puertos y adaptadores. El alquiler de libros funciona de forma asíncrona con dos topics de Kafka (alquiler-requests y alquiler-responses), y la persistencia soporta tanto JDBC como JPA sobre MySQL.",
      en: "Library management system built with hexagonal architecture, separating domain, application, and infrastructure through ports and adapters. Book rentals work asynchronously over two Kafka topics (alquiler-requests and alquiler-responses), and persistence supports both JDBC and JPA on MySQL.",
    },
    technologies: ["Java 17", "Spring Boot 3", "Kafka", "MySQL", "Docker"],
    category: "other",
    type: "personal",
    repoUrl: "https://github.com/AnthonyErazo/library-system-hex",
    highlights: [
      { es: "Puertos y adaptadores, dominio aislado", en: "Ports and adapters, isolated domain" },
      { es: "Alquiler asíncrono mediante Kafka", en: "Asynchronous rentals through Kafka" },
    ],
    features: [
      {
        es: "Separación estricta entre dominio, aplicación e infraestructura siguiendo arquitectura hexagonal.",
        en: "Strict separation between domain, application, and infrastructure following hexagonal architecture.",
      },
      {
        es: "La solicitud ingresa por REST, se publica en Kafka y su resultado puede consultarse mediante el identificador de la petición.",
        en: "The request enters through REST, is published to Kafka, and its result can be queried using the request identifier.",
      },
      {
        es: "Persistencia intercambiable entre JDBC y JPA, con perfiles para H2 en memoria o MySQL.",
        en: "Swappable persistence between JDBC and JPA, with profiles for in-memory H2 or MySQL.",
      },
    ],
    images: [
      { src: "/projects/library-hex/01-sincrono.png", caption: { es: "Solicitud REST de alquiler", en: "REST rental request" } },
      { src: "/projects/library-hex/02-asincrono.png", caption: { es: "Alquiler asíncrono vía Kafka", en: "Asynchronous rental via Kafka" } },
      { src: "/projects/library-hex/03-kafka.png", caption: { es: "Logs de Kafka procesando el evento", en: "Kafka logs processing the event" } },
    ],
  },
  {
    id: 8,
    title: "Customer Registration Microservices",
    shortDescription: {
      es: "Microservicios de registro de clientes con Angular y Fastify sobre MySQL, Redis y RabbitMQ.",
      en: "Customer registration microservices with Angular and Fastify on MySQL, Redis, and RabbitMQ.",
    },
    fullDescription: {
      es: "Arquitectura de microservicios para registro de clientes: Angular en el frontend y Fastify en el backend, con MySQL como persistencia, Redis como caché y RabbitMQ para mensajería entre servicios.",
      en: "Microservice architecture for customer registration: Angular on the frontend and Fastify on the backend, with MySQL for persistence, Redis for caching, and RabbitMQ for inter-service messaging.",
    },
    technologies: ["Angular", "Fastify", "MySQL", "Redis", "RabbitMQ"],
    category: "web",
    type: "personal",
    repoUrl: "https://github.com/AnthonyErazo/customer-registration-microservices",
    images: [
      { src: "/projects/customer-registration/01-form.png", caption: { es: "Formulario con token temporal", en: "Form with a temporary token" } },
      { src: "/projects/customer-registration/02-success.png", caption: { es: "Registro completado", en: "Completed registration" } },
    ],
  },
  {
    id: 9,
    title: "Spring WebFlux Enrollment",
    shortDescription: {
      es: "API REST reactiva para gestión de matrículas con Spring WebFlux, MongoDB y JWT.",
      en: "Reactive REST API for student enrollment with Spring WebFlux, MongoDB, and JWT.",
    },
    fullDescription: {
      es: "API REST reactiva para gestión de matrículas estudiantiles construida con Spring WebFlux y MongoDB, con autenticación basada en JWT y enfoque en programación no bloqueante.",
      en: "Reactive REST API for student enrollment built with Spring WebFlux and MongoDB, featuring JWT-based authentication and a non-blocking programming approach.",
    },
    technologies: ["Java", "Spring WebFlux", "MongoDB", "JWT"],
    category: "other",
    type: "personal",
    repoUrl: "https://github.com/AnthonyErazo/spring-webflux-enrollment",
    images: [
      { src: "/projects/spring-webflux/01-sequence.png", caption: { es: "Secuencia para crear una matrícula", en: "Enrollment creation sequence" } },
      { src: "/projects/spring-webflux/02-domain.png", caption: { es: "Modelo de dominio", en: "Domain model" } },
    ],
  },
  {
    id: 14,
    title: "Intranet Académica",
    shortDescription: {
      es: "Intranet en Angular con autenticación, rutas protegidas y gestión de alumnos, cursos y comunicados.",
      en: "Angular intranet with authentication, protected routes, and management for students, courses, and announcements.",
    },
    fullDescription: {
      es: "Aplicación académica construida con Angular y Angular Material. Incluye acceso con persistencia de sesión, protección de rutas, panel de resumen y operaciones CRUD de alumnos y cursos sobre una API local con JSON Server.",
      en: "Academic application built with Angular and Angular Material. It includes persisted sign-in, protected routes, a summary dashboard, and CRUD operations for students and courses backed by a local JSON Server API.",
    },
    technologies: ["Angular", "TypeScript", "Angular Material", "RxJS", "JSON Server"],
    category: "web",
    type: "personal",
    repoUrl: "https://github.com/AnthonyErazo/angular-proyecto",
    liveUrl: "https://systemstudents.netlify.app/",
    features: [
      { es: "Autenticación y rutas protegidas mediante guards", en: "Authentication and guarded routes" },
      { es: "CRUD completo de alumnos y cursos", en: "Full CRUD for students and courses" },
      { es: "Interfaz adaptable con Angular Material", en: "Responsive interface with Angular Material" },
    ],
    images: [
      { src: "/projects/academic-intranet/01-login.png", caption: { es: "Acceso a la intranet", en: "Intranet sign-in" } },
      { src: "/projects/academic-intranet/02-dashboard.png", caption: { es: "Panel académico", en: "Academic dashboard" } },
      { src: "/projects/academic-intranet/03-students.png", caption: { es: "Gestión de alumnos", en: "Student management" } },
    ],
  },
  {
    id: 15,
    title: "Tienda Virtual Móvil",
    shortDescription: {
      es: "Aplicación de e-commerce con catálogo, carrito, órdenes y perfil con ubicación, integrada con Firebase y SQLite.",
      en: "Mobile e-commerce app with catalog, cart, orders, and location-aware profiles, integrated with Firebase and SQLite.",
    },
    fullDescription: {
      es: "Aplicación móvil desarrollada con Expo y React Native. Permite explorar y buscar productos, autenticarse, administrar un carrito, generar órdenes y editar un perfil con fotografía, dirección y ubicación, combinando Firebase con persistencia local en SQLite.",
      en: "Mobile application built with Expo and React Native. Users can browse and search products, sign in, manage a cart, create orders, and edit a profile with a photo, address, and location, combining Firebase with local SQLite persistence.",
    },
    technologies: ["React Native", "Expo", "Redux Toolkit", "Firebase", "SQLite"],
    category: "mobile",
    type: "personal",
    repoUrl: "https://github.com/AnthonyErazo/aplicacion-proyecto",
    features: [
      { es: "Autenticación y datos en Firebase", en: "Authentication and data stored in Firebase" },
      { es: "Carrito y consumo de datos con Redux Toolkit y RTK Query", en: "Cart and data access with Redux Toolkit and RTK Query" },
      { es: "Integración de cámara, galería, mapas y ubicación", en: "Camera, gallery, maps, and location integration" },
    ],
    images: [
      { src: "/projects/mobile-store/01-home.png", caption: { es: "Inicio y catálogo", en: "Home and catalog" } },
      { src: "/projects/mobile-store/02-cart.png", caption: { es: "Carrito de compras", en: "Shopping cart" } },
      { src: "/projects/mobile-store/03-map.png", caption: { es: "Ubicación del perfil", en: "Profile location" } },
    ],
  },
  {
    id: 16,
    title: "OnlineShop",
    shortDescription: {
      es: "E-commerce full stack con autenticación por roles, compras con control de stock y chat privado en tiempo real.",
      en: "Full-stack e-commerce platform with role-based authentication, stock-aware checkout, and private real-time chat.",
    },
    fullDescription: {
      es: "Plataforma de comercio electrónico formada por una interfaz React y una API en Node.js y Express. Incluye catálogo, carrito, tickets de compra, administración, vendedores premium y conversaciones privadas entre compradores y vendedores mediante Socket.IO.",
      en: "E-commerce platform composed of a React interface and a Node.js and Express API. It includes a catalog, cart, purchase tickets, administration, premium sellers, and private buyer-to-seller conversations powered by Socket.IO.",
    },
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "JWT"],
    category: "web",
    type: "personal",
    repositories: [
      { label: { es: "Código frontend", en: "Frontend code" }, url: "https://github.com/AnthonyErazo/FrontProyectoBack" },
      { label: { es: "Código backend", en: "Backend code" }, url: "https://github.com/AnthonyErazo/backend-proyecto" },
    ],
    features: [
      { es: "Autenticación mediante cookie HTTP-only y permisos por rol", en: "HTTP-only cookie authentication and role-based permissions" },
      { es: "Compra con validación y descuento de stock", en: "Checkout with stock validation and deduction" },
      { es: "Chat persistente y privado mediante WebSockets", en: "Persistent private chat over WebSockets" },
    ],
    images: [
      { src: "/projects/online-shop/01-catalog.png", caption: { es: "Catálogo de productos", en: "Product catalog" } },
      { src: "/projects/online-shop/02-admin.png", caption: { es: "Panel administrativo", en: "Admin dashboard" } },
      { src: "/projects/online-shop/03-chat.png", caption: { es: "Chat entre comprador y vendedor", en: "Buyer-to-seller chat" } },
    ],
  },
  {
    id: 17,
    title: "Base de Datos para Tienda de Ropa",
    shortDescription: {
      es: "Modelo relacional en MySQL con vistas, funciones, procedimientos almacenados, auditoría y transacciones.",
      en: "MySQL relational model featuring views, functions, stored procedures, auditing, and transactions.",
    },
    fullDescription: {
      es: "Diseño e implementación de una base de datos para gestionar clientes, catálogo, proveedores, compras, ventas y entregas de una tienda. El proyecto incluye datos de ejemplo, consultas de negocio, triggers de auditoría y usuarios con permisos diferenciados.",
      en: "Database design and implementation for managing customers, catalog items, suppliers, purchases, sales, and deliveries for a store. The project includes sample data, business queries, audit triggers, and users with differentiated permissions.",
    },
    technologies: ["MySQL", "SQL", "Stored Procedures", "Triggers", "TCL"],
    category: "other",
    type: "personal",
    repoUrl: "https://github.com/AnthonyErazo/basedatos_tienda-cursoSQL",
    features: [
      { es: "Modelo con 13 tablas y relaciones normalizadas", en: "Normalized model with 13 tables" },
      { es: "Vistas, funciones y procedimientos para consultas de negocio", en: "Views, functions, and procedures for business queries" },
      { es: "Auditoría mediante triggers y control transaccional", en: "Trigger-based auditing and transaction control" },
    ],
    images: [
      { src: "/projects/clothing-store-db/01-er-model.png", caption: { es: "Modelo entidad–relación", en: "Entity–relationship model" } },
      { src: "/projects/clothing-store-db/02-object-flow.png", caption: { es: "Flujo de objetos de base de datos", en: "Database object flow" } },
    ],
  },
  {
    id: 18,
    title: "Book Rental System",
    shortDescription: {
      es: "Sistema full stack de alquiler de libros con Angular, ASP.NET Core, SQL Server y sesiones JWT revocables.",
      en: "Full-stack book rental system with Angular, ASP.NET Core, SQL Server, and revocable JWT sessions.",
    },
    fullDescription: {
      es: "Sistema para administrar usuarios, clientes, libros y órdenes de alquiler. La SPA en Angular consume una API REST en .NET 9 con Entity Framework Core, autenticación JWT validada contra sesiones activas y un entorno completo reproducible con Docker Compose.",
      en: "System for managing users, clients, books, and rental orders. The Angular SPA consumes a .NET 9 REST API with Entity Framework Core, JWT authentication validated against active sessions, and a complete reproducible Docker Compose environment.",
    },
    technologies: ["Angular", ".NET 9", "ASP.NET Core", "SQL Server", "Docker", "JWT"],
    category: "web",
    type: "personal",
    repoUrl: "https://github.com/AnthonyErazo/Book-Rental-System",
    features: [
      { es: "CRUD, búsqueda y paginación de clientes y libros", en: "CRUD, search, and pagination for clients and books" },
      { es: "Órdenes que relacionan varios libros y un cliente", en: "Orders relating multiple books to a client" },
      { es: "Cliente TypeScript generado desde OpenAPI", en: "TypeScript client generated from OpenAPI" },
    ],
    images: [
      { src: "/projects/book-rental/01-login.png", caption: { es: "Inicio de sesión", en: "Sign-in" } },
      { src: "/projects/book-rental/02-books.png", caption: { es: "Gestión de libros", en: "Book management" } },
      { src: "/projects/book-rental/03-orders.png", caption: { es: "Órdenes de alquiler", en: "Rental orders" } },
    ],
  },
  {
    id: 19,
    title: "Chambita",
    shortDescription: {
      es: "MVP para Hackathon BCP que convierte aprendizaje, retos y logros en un perfil visible para el primer empleo.",
      en: "BCP Hackathon MVP that turns learning paths, challenges, and achievements into a visible first-job profile.",
    },
    fullDescription: {
      es: "Aplicación móvil creada en Flutter para ayudar a estudiantes y recién egresados a demostrar sus habilidades ante empleadores. El MVP articula rutas de aprendizaje, retos, credenciales y una simulación de mentoría y puestos sugeridos con datos mock para validar la experiencia orientada al primer empleo.",
      en: "Flutter mobile application designed to help students and recent graduates demonstrate their skills to employers. The MVP combines learning paths, challenges, credentials, and simulated mentorship and job suggestions backed by mock data to validate the first-job experience.",
    },
    technologies: ["Flutter", "Dart", "Material 3"],
    category: "mobile",
    type: "personal",
    repoUrl: "https://github.com/AnthonyErazo/Chambita",
    highlights: [
      { es: "Proyecto desarrollado para Hackathon BCP", en: "Built for the BCP Hackathon" },
      { es: "Enfoque en empleabilidad temprana", en: "Focused on early-career employability" },
    ],
    features: [
      { es: "Rutas de aprendizaje y retos con progreso visible", en: "Learning paths and challenges with visible progress" },
      { es: "Perfil profesional basado en habilidades demostrables", en: "Professional profile built around demonstrated skills" },
      { es: "Simulación de mentoría y puestos sugeridos con datos mock", en: "Simulated mentorship and job suggestions using mock data" },
    ],
    images: [
      { src: "/projects/chambita/01-dashboard.png", caption: { es: "Panel principal", en: "Main dashboard" } },
      { src: "/projects/chambita/02-learning-path.png", caption: { es: "Ruta de aprendizaje", en: "Learning path" } },
      { src: "/projects/chambita/03-ai-mentor.png", caption: { es: "Experiencia de mentoría simulada", en: "Simulated mentorship experience" } },
    ],
  },
  {
    id: 20,
    title: "Grupo Wired",
    shortDescription: {
      es: "Sitio responsive para un grupo de estudio universitario, con catálogo de cursos y equipo docente.",
      en: "Responsive website for a university study group, featuring a course catalog and instructor profiles.",
    },
    fullDescription: {
      es: "Sitio web informativo para un grupo de estudio enfocado en cursos generales de ingeniería. Presenta la propuesta académica, el catálogo de cursos, el equipo docente y medios de contacto mediante páginas estáticas adaptables.",
      en: "Informational website for a study group focused on general engineering courses. It presents the academic proposal, course catalog, instructor team, and contact channels through responsive static pages.",
    },
    technologies: ["HTML5", "Sass", "Bootstrap", "JavaScript"],
    category: "web",
    type: "personal",
    repoUrl: "https://github.com/AnthonyErazo/desarrollo-web-proyecto",
    liveUrl: "https://grupowired.netlify.app/",
    images: [
      { src: "/projects/grupo-wired/01-home.png", caption: { es: "Página principal", en: "Home page" } },
      { src: "/projects/grupo-wired/02-courses.png", caption: { es: "Catálogo de cursos", en: "Course catalog" } },
      { src: "/projects/grupo-wired/03-team.png", caption: { es: "Equipo docente", en: "Instructor team" } },
    ],
  },
  {
    id: 21,
    title: "Modelo Causal Interactivo",
    shortDescription: {
      es: "Hace navegable un modelo causal complejo mediante un grafo interactivo y reproducción temporal.",
      en: "Makes a complex causal model navigable through an interactive graph and timeline playback.",
    },
    fullDescription: {
      es: "El reto académico fue hacer comprensible y navegable un modelo causal que relaciona inmigración, desempleo, delincuencia, programas de integración y capacidad policial. Construí una visualización web que combina el grafo con series temporales de demostración; representa relaciones y escenarios, pero no pretende funcionar como un motor predictivo ni utilizar datos reales.",
      en: "The academic challenge was to make a causal model connecting immigration, unemployment, crime, integration programs, and police capacity understandable and navigable. I built a web visualization combining the graph with demonstration time series; it represents relationships and scenarios but is not presented as a predictive engine or as using real data.",
    },
    technologies: ["React", "TypeScript", "Vite", "React Flow", "SVG"],
    category: "web",
    type: "university",
    highlights: [
      { es: "Problema · Hacer legible un modelo causal con múltiples variables y relaciones", en: "Problem · Make a causal model with many variables and relationships understandable" },
      { es: "Decisión · React Flow para el grafo y SVG para explorar series temporales de demostración", en: "Decision · React Flow for the graph and SVG for exploring demonstration time series" },
      { es: "Resultado · Demo pública con reproducción, detalle por variable, zoom, arrastre y minimapa", en: "Outcome · Public demo with playback, variable details, zoom, dragging, and a minimap" },
    ],
    repoUrl: "https://github.com/AnthonyErazo/dinamica_sistemas_web",
    liveUrl: "https://clinquant-dusk-5f3fd5.netlify.app/",
    features: [
      { es: "Representé nodos y relaciones con React Flow para obtener navegación, zoom, arrastre y minimapa sin construir esas interacciones desde cero.", en: "I represented nodes and relationships with React Flow to provide navigation, zoom, dragging, and a minimap without building those interactions from scratch." },
      { es: "Separé la exploración temporal en una vista SVG que permite seleccionar cada variable y revisar su evolución.", en: "I separated temporal exploration into an SVG view where each variable can be selected and its evolution reviewed." },
      { es: "Usé datos de demostración y aclaré el alcance para no presentar la visualización como una simulación predictiva.", en: "I used demonstration data and clarified the scope so the visualization is not presented as a predictive simulation." },
    ],
    images: [
      { src: "/projects/causal-model/01-overview.png", caption: { es: "Vista general del modelo causal", en: "Causal model overview" } },
      { src: "/projects/causal-model/02-timeline.png", caption: { es: "Serie temporal de una variable", en: "Variable timeline" } },
    ],
  },
  {
    id: 22,
    title: "TechParts",
    shortDescription: {
      es: "Tienda de componentes para computadora con búsqueda, filtros dinámicos, vista rápida y carrito persistente.",
      en: "Computer components store with search, dynamic filters, quick view, and a persistent shopping cart.",
    },
    fullDescription: {
      es: "E-commerce frontend desarrollado con JavaScript puro. El catálogo de demostración contiene 38 productos y permite buscar, filtrar por categoría y atributos, revisar detalles, seleccionar cantidades y administrar un carrito guardado en localStorage.",
      en: "Frontend e-commerce application built with vanilla JavaScript. Its demonstration catalog contains 38 products and supports search, filtering by category and attributes, product details, quantity selection, and a cart stored in localStorage.",
    },
    technologies: ["JavaScript", "HTML5", "CSS3", "LocalStorage"],
    category: "web",
    type: "personal",
    repoUrl: "https://github.com/AnthonyErazo/javascript-proyecto",
    features: [
      { es: "Filtros que cambian según la categoría seleccionada", en: "Filters that adapt to the selected category" },
      { es: "Vista rápida con especificaciones y cantidades", en: "Quick view with specifications and quantities" },
      { es: "Carrito persistente con cálculo de totales", en: "Persistent cart with total calculations" },
    ],
    images: [
      { src: "/projects/techparts/01-catalog.png", caption: { es: "Catálogo de componentes", en: "Components catalog" } },
      { src: "/projects/techparts/02-quick-view.png", caption: { es: "Vista rápida del producto", en: "Product quick view" } },
      { src: "/projects/techparts/03-cart.png", caption: { es: "Carrito de compras", en: "Shopping cart" } },
    ],
  },
  {
    id: 23,
    title: "ClothingUrban",
    shortDescription: {
      es: "Tienda de ropa en React con catálogo en Firestore, filtros, control de stock y carrito de compras.",
      en: "React clothing store with a Firestore catalog, filters, stock controls, and a shopping cart.",
    },
    fullDescription: {
      es: "Frontend de comercio electrónico construido con React y Vite. Permite consultar productos almacenados en Cloud Firestore, filtrar por categoría, revisar el detalle, limitar cantidades según el stock y registrar los datos de una compra junto con el contenido del carrito.",
      en: "E-commerce frontend built with React and Vite. Users can browse products stored in Cloud Firestore, filter by category, view details, limit quantities according to stock, and record purchase details together with the cart contents.",
    },
    technologies: ["React", "Vite", "Firebase", "Cloud Firestore", "React Router"],
    category: "web",
    type: "personal",
    repoUrl: "https://github.com/AnthonyErazo/react-proyecto",
    features: [
      { es: "Catálogo y órdenes almacenados en Firestore", en: "Catalog and orders stored in Firestore" },
      { es: "Filtrado por categoría y subcategoría", en: "Category and subcategory filtering" },
      { es: "Carrito con validación de cantidades según stock", en: "Cart with stock-aware quantity validation" },
    ],
    images: [
      { src: "/projects/clothing-urban/01-catalog.png", caption: { es: "Catálogo de ropa", en: "Clothing catalog" } },
      { src: "/projects/clothing-urban/02-cart.png", caption: { es: "Carrito de compras", en: "Shopping cart" } },
      { src: "/projects/clothing-urban/03-checkout.png", caption: { es: "Registro de datos de compra", en: "Purchase details form" } },
    ],
  },
  {
    id: 24,
    title: "Sistema de Matrícula",
    shortDescription: {
      es: "API de matrículas con JWT, sesiones revocables y gestión de estudiantes y cursos sobre Spring Boot y PostgreSQL.",
      en: "Enrollment API with JWT, revocable sessions, and student and course management on Spring Boot and PostgreSQL.",
    },
    fullDescription: {
      es: "API REST para administrar usuarios, estudiantes, cursos y matrículas. Protege las operaciones con Spring Security y JWT, conserva las sesiones activas en PostgreSQL y permite invalidar un token individual o todas las sesiones de un usuario.",
      en: "REST API for managing users, students, courses, and enrollments. It protects operations with Spring Security and JWT, stores active sessions in PostgreSQL, and can invalidate an individual token or every session owned by a user.",
    },
    technologies: ["Java 21", "Spring Boot", "Spring Security", "PostgreSQL", "Docker", "JWT"],
    category: "other",
    type: "personal",
    repoUrl: "https://github.com/AnthonyErazo/RegistrationSystem-Java",
    features: [
      { es: "Cierre de una sesión o de todas las sesiones activas", en: "Single-session and global sign-out" },
      { es: "Matrículas con uno o varios cursos y aulas asignadas", en: "Enrollments with one or more courses and assigned classrooms" },
      { es: "Pruebas de controladores y reglas del servicio de matrícula", en: "Controller and enrollment service rule tests" },
    ],
    images: [
      { src: "/projects/registration-system/01-sequence.png", caption: { es: "Secuencia de creación de matrícula", en: "Enrollment creation sequence" } },
      { src: "/projects/registration-system/02-domain.png", caption: { es: "Modelo de dominio", en: "Domain model" } },
    ],
  },
  {
    id: 25,
    title: "WMS — Predicción de Rotura de Stock",
    shortDescription: {
      es: "Pipeline interpretable y dashboard para anticipar el riesgo de rotura de stock a 14 días.",
      en: "Interpretable pipeline and dashboard for anticipating 14-day stockout risk.",
    },
    fullDescription: {
      es: "El reto académico fue anticipar el riesgo de rotura de stock a 14 días sin ocultar la calidad ni el origen de los datos. Construí un flujo en Streamlit que valida maestros, genera snapshots transaccionales y entrena una regresión logística; separé entrenamiento y prueba por ServicioID para evitar que registros del mismo servicio produjeran fuga de información. Los resultados corresponden únicamente a datos sintéticos de demostración.",
      en: "The academic challenge was to anticipate 14-day stockout risk without hiding data quality or provenance. I built a Streamlit flow that validates master data, generates transactional snapshots, and trains a logistic regression model; I split training and test data by ServiceID to prevent records from the same service from causing data leakage. The results apply only to synthetic demonstration data.",
    },
    technologies: ["Python", "Streamlit", "Pandas", "scikit-learn", "NumPy"],
    category: "other",
    type: "university",
    featured: true,
    repoUrl: "https://github.com/AnthonyErazo/rotura_stock",
    highlights: [
      { es: "Problema · Detectar con anticipación servicios con riesgo de rotura de stock", en: "Problem · Identify services at risk of stockout in advance" },
      { es: "Decisión · Regresión logística y separación por ServicioID para evitar fuga de información", en: "Decision · Logistic regression and ServiceID-based splitting to prevent data leakage" },
      { es: "Resultado · Calidad, entrenamiento, evaluación y predicción reunidos en un dashboard reproducible", en: "Outcome · Data quality, training, evaluation, and prediction combined in a reproducible dashboard" },
    ],
    features: [
      { es: "Validé duplicados, nulos e identificadores antes del entrenamiento para hacer visible la calidad de los maestros.", en: "I validated duplicates, nulls, and identifiers before training to make master-data quality visible." },
      { es: "Usé una regresión logística y separé los conjuntos por ServicioID para mantener un flujo interpretable y reducir la fuga entre entrenamiento y prueba.", en: "I used logistic regression and split datasets by ServiceID to keep the flow interpretable and reduce leakage between training and testing." },
      { es: "El dashboard permite evaluar el modelo y predecir desde casos generados o ingresados manualmente, siempre identificando que los datos son sintéticos.", en: "The dashboard supports model evaluation and prediction from generated or manually entered cases while clearly identifying the data as synthetic." },
    ],
    images: [
      { src: "/projects/stockout-prediction/01-data-quality.png", caption: { es: "Controles de calidad de datos", en: "Data quality controls" } },
      { src: "/projects/stockout-prediction/02-evaluation.png", caption: { es: "Evaluación del modelo", en: "Model evaluation" } },
      { src: "/projects/stockout-prediction/03-prediction.png", caption: { es: "Predicción de rotura de stock", en: "Stockout prediction" } },
    ],
  },
  {
    id: 26,
    title: "Sistema Contable",
    shortDescription: {
      es: "Convierte asientos y saldos PCGE en libros contables y estados financieros consistentes.",
      en: "Turns PCGE journal entries and balances into consistent ledgers and financial statements.",
    },
    fullDescription: {
      es: "El reto académico fue transformar registros del Plan Contable General Empresarial en reportes coherentes sin duplicar la lógica de cálculo para cada vista. Modelé saldos iniciales y movimientos en Django, y centralicé su clasificación para que el mismo asiento alimente el libro diario, los mayores, el estado de resultados y el estado de situación financiera.",
      en: "The academic challenge was to transform records under Peru's General Business Accounting Plan into consistent reports without duplicating calculation logic for every view. I modeled opening balances and transactions in Django and centralized their classification so the same journal entry feeds the general journal, ledgers, income statement, and statement of financial position.",
    },
    technologies: ["Python", "Django", "SQLite", "Django Templates", "Docker"],
    category: "web",
    type: "university",
    featured: true,
    repoUrl: "https://github.com/AnthonyErazo/sistema-contable",
    highlights: [
      { es: "Problema · Convertir movimientos PCGE en libros y estados financieros coherentes", en: "Problem · Turn PCGE transactions into consistent ledgers and financial statements" },
      { es: "Decisión · Centralizar en Django el registro, la clasificación y los cálculos contables", en: "Decision · Centralize accounting records, classification, and calculations in Django" },
      { es: "Resultado · Un mismo asiento alimenta diario, mayores, resultados y situación financiera", en: "Outcome · The same entry feeds the journal, ledgers, income statement, and financial position" },
    ],
    features: [
      { es: "Modelé saldos iniciales y movimientos en el Debe y el Haber siguiendo el catálogo PCGE.", en: "I modeled opening balances and debit and credit transactions using the PCGE catalog." },
      { es: "Centralicé la clasificación y los cálculos para reutilizar la misma información en todos los reportes.", en: "I centralized classification and calculations so the same information could be reused across every report." },
      { es: "El flujo genera automáticamente libros y estados, además de permitir consultar la composición patrimonial.", en: "The flow automatically generates ledgers and statements and supports reviewing the composition of financial position." },
    ],
    images: [
      { src: "/projects/accounting-system/01-entry.png", caption: { es: "Registro de asiento contable", en: "Journal entry form" } },
      { src: "/projects/accounting-system/02-journal.png", caption: { es: "Libro diario", en: "General journal" } },
      { src: "/projects/accounting-system/03-income-statement.png", caption: { es: "Estado de resultados", en: "Income statement" } },
    ],
  },
  {
    id: 27,
    title: "Sistema de Gestión de Transporte",
    shortDescription: {
      es: "Conecta siete módulos de transporte en un flujo operativo verificable con Next.js, NestJS y PostgreSQL.",
      en: "Connects seven transport modules into a verifiable operational flow with Next.js, NestJS, and PostgreSQL.",
    },
    fullDescription: {
      es: "El reto grupal fue convertir el diseño de una base de datos de transporte en un flujo íntegro entre recepción de órdenes, planificación, asignación, despacho, monitoreo, entrega y reclamos. Organizamos la API como un monolito modular en NestJS 11, concentramos reglas transaccionales en PostgreSQL y usamos MQTT para la telemetría; el frontend en Next.js consume el recorrido documentado con Swagger/OpenAPI.",
      en: "The group challenge was to turn a transportation database design into a consistent flow across order intake, planning, assignment, dispatch, monitoring, delivery, and claims. We organized the API as a modular monolith in NestJS 11, centralized transactional rules in PostgreSQL, and used MQTT for telemetry; the Next.js frontend consumes the flow documented through Swagger/OpenAPI.",
    },
    technologies: ["NestJS", "Next.js", "PostgreSQL", "Redis", "MQTT", "Swagger/OpenAPI", "Docker"],
    category: "web",
    type: "university",
    featured: true,
    repoUrl: "https://github.com/AnthonyErazo/Sistema-Transporte-Diseno-Base-Datos",
    highlights: [
      { es: "Problema · Mantener consistencia entre siete etapas del ciclo operativo de transporte", en: "Problem · Maintain consistency across seven stages of the transport operating cycle" },
      { es: "Decisión · Monolito modular NestJS, reglas atómicas en PostgreSQL y telemetría MQTT", en: "Decision · Modular NestJS monolith, atomic PostgreSQL rules, and MQTT telemetry" },
      { es: "Resultado · Recorrido de órdenes a reclamos verificado con estados, roles y documentación Swagger", en: "Outcome · Order-to-claims flow verified with states, roles, and Swagger documentation" },
    ],
    features: [
      { es: "Organizamos la API en módulos NestJS 11 para separar responsabilidades sin asumir el costo operativo de microservicios independientes.", en: "We organized the API into NestJS 11 modules to separate responsibilities without taking on the operating cost of independent microservices." },
      { es: "Las reglas atómicas en PostgreSQL mantienen la consistencia al planificar, asignar y propagar cambios de estado.", en: "Atomic PostgreSQL rules maintain consistency during planning, assignment, and state propagation." },
      { es: "MQTT gestiona la telemetría y el sistema admite evidencias locales o en S3 dentro del recorrido operativo.", en: "MQTT handles telemetry, and the system supports local or S3 evidence within the operating flow." },
      { es: "El recorrido completo se verificó por HTTP con autenticación, roles y documentación Swagger/OpenAPI.", en: "The complete flow was verified over HTTP with authentication, roles, and Swagger/OpenAPI documentation." },
    ],
    images: [
      { src: "/projects/transport-system/01-orders.png", caption: { es: "Órdenes registradas", en: "Registered orders" } },
      { src: "/projects/transport-system/02-planning.png", caption: { es: "Planificación de órdenes", en: "Order planning" } },
      { src: "/projects/transport-system/03-assignments.png", caption: { es: "Panel de asignaciones", en: "Assignments dashboard" } },
    ],
  },
  {
    id: 28,
    title: "Sabores Deliciosos",
    shortDescription: {
      es: "Frontend en React para un restaurante y catálogo comercial, con carrito por sesión y módulos conectados a una API externa.",
      en: "React frontend for a restaurant and product catalog, with a session cart and management views connected to an external API.",
    },
    fullDescription: {
      es: "Demo frontend que combina la presentación de un restaurante con catálogo por categorías, detalle de productos, descuentos y carrito. Incluye además vistas de consulta y mantenimiento para proveedores, empleados, pedidos, países y directores consumiendo una API externa.",
      en: "Frontend demo combining a restaurant presentation with a category-based catalog, product details, discounts, and a cart. It also includes query and maintenance views for suppliers, employees, orders, countries, and directors backed by an external API.",
    },
    technologies: ["React", "Vite", "React Router", "Bootstrap", "JavaScript"],
    category: "web",
    type: "personal",
    repoUrl: "https://github.com/AnthonyErazo/TiendaReact",
    liveUrl: "https://restaurantesaboresdeliciosos.netlify.app/",
    features: [
      { es: "Carrito temporal persistido en sessionStorage", en: "Temporary cart persisted in sessionStorage" },
      { es: "Catálogo, descuentos y detalle de productos", en: "Catalog, discounts, and product details" },
      { es: "Tablas con búsqueda, ordenamiento y paginación", en: "Tables with search, sorting, and pagination" },
    ],
    images: [
      { src: "/projects/sabores-deliciosos/01-home.png", caption: { es: "Página principal del restaurante", en: "Restaurant home page" } },
      { src: "/projects/sabores-deliciosos/02-catalog.png", caption: { es: "Catálogo por categorías", en: "Category catalog" } },
      { src: "/projects/sabores-deliciosos/03-management.png", caption: { es: "Gestión de proveedores", en: "Supplier management" } },
    ],
  },
  {
    id: 29,
    title: "Voice Dictation",
    shortDescription: {
      es: "Herramienta de dictado offline para Windows que inserta voz convertida a texto en la aplicación activa.",
      en: "Offline Windows dictation tool that inserts speech converted to text into the active application.",
    },
    fullDescription: {
      es: "Aplicación de escritorio en Python que utiliza Vosk para reconocimiento de voz local. Se controla mediante un atajo global, normaliza comandos de puntuación y escribe el resultado en la ventana enfocada; incluye configuración de modelos e integración con la bandeja del sistema.",
      en: "Python desktop application using Vosk for local speech recognition. A global hotkey controls dictation, punctuation commands are normalized, and the result is typed into the focused window; it also includes model settings and system tray integration.",
    },
    technologies: ["Python", "Vosk", "PyAudio", "Tkinter", "PyAutoGUI", "Windows"],
    category: "desktop",
    type: "personal",
    repoUrl: "https://github.com/AnthonyErazo/Voice-Dictation",
    features: [
      { es: "Reconocimiento completamente local después de descargar el modelo", en: "Fully local recognition after downloading a model" },
      { es: "Atajo global y escritura en la aplicación enfocada", en: "Global hotkey and typing into the focused application" },
      { es: "Modelos de reconocimiento en inglés y español; puntuación por voz en inglés", en: "English and Spanish recognition models; English voice punctuation commands" },
    ],
  },
];

