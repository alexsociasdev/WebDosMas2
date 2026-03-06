export type CaseStudy = {
  reto: string;
  solucion: string;
  ejecucion: string;
  resultado: string;
};

export type ProjectKpi = {
  label: string;
  value: string;
};

export type ProjectItem = {
  slug: string;
  title: string;
  summary: string;
  location: string;
  category: string;
  year: string;
  description: string[];
  image: string;
  gallery: string[];
  relatedServices: string[];
  kpis: ProjectKpi[];
  caseStudy: CaseStudy;
};

function buildGallery(basePath: string, total: number): string[] {
  return Array.from({ length: total }, (_, index) => {
    const number = String(index + 1).padStart(2, "0");
    return `${basePath}/${number}.webp`;
  });
}

export const projectsData: ProjectItem[] = [
  {
    slug: "excavacion-en-son-vida",
    title: "EXCAVACIÓN EN SON VIDA",
    summary:
      "Dosmas Grup lleva a cabo una excavación de gran envergadura en la exclusiva urbanización de Son Vida, uno de los enclaves residenciales más prestigiosos de España.",
    location: "Son Vida, Mallorca",
    category: "Excavaciones",
    year: "2025",
    description: [
      "Dosmas Grup lleva a cabo una excavación de gran envergadura en la exclusiva urbanización de Son Vida, uno de los enclaves residenciales más prestigiosos de España. El proyecto se ejecuta con maquinaria de última generación, como las potentes Caterpillar 352 y Liebherr 944, junto a una flota de camiones Renault, Volvo y Scania, garantizando precisión, rapidez y los más altos estándares de calidad.",
      "Esta actuación refuerza el compromiso de la empresa con la excelencia técnica y la innovación, combinando un entorno de máximo lujo con un trabajo meticuloso que prepara el terreno para futuras construcciones de alto nivel. Con más de setenta años de experiencia, Dosmas Grup demuestra nuevamente su liderazgo en excavaciones complejas, avalado por un equipo de profesionales altamente cualificados y una tecnología que marca la diferencia en cada proyecto."
    ],
    image: "/images/projects/excavacion-en-son-vida/01.webp",
    gallery: buildGallery("/images/projects/excavacion-en-son-vida", 4),
    relatedServices: ["excavaciones", "desmontes", "cimentaciones"],
    kpis: [
      { label: "Superficie intervenida", value: "8.200 m²" },
      { label: "Volumen movido", value: "32.000 m³" },
      { label: "Duración", value: "14 semanas" },
      { label: "Equipo en punta", value: "24 profesionales" }
    ],
    caseStudy: {
      reto:
        "Ejecutar una excavación de alta complejidad en una zona residencial premium con exigencias elevadas de control y seguridad.",
      solucion:
        "Planificación por fases, maquinaria de gran rendimiento y coordinación diaria entre equipos de obra, logística y prevención.",
      ejecucion:
        "Se implementó una secuencia técnica de desmonte, retirada y nivelación con control continuo de plazos y trazabilidad de movimientos.",
      resultado:
        "Terreno preparado con precisión para la siguiente fase constructiva, cumpliendo estándares técnicos y plazos comprometidos."
    }
  },
  {
    slug: "remodelacion-placa-des-mercat",
    title: "Remodelación Plaça des Mercat – Maria de la Salut",
    summary:
      "Dosmas Grup ejecutó la remodelación completa de esta histórica plaza, transformándola en un espacio moderno sin perder su esencia tradicional.",
    location: "Maria de la Salut, Mallorca",
    category: "Obra pública",
    year: "2025",
    description: [
      "Dosmas Grup ejecutó la remodelación completa de esta histórica plaza, transformándola en un espacio moderno sin perder su esencia tradicional. El proyecto incluyó la sustitución del pavimento por un nuevo adoquinado de alta resistencia que garantiza durabilidad y uniformidad, así como la incorporación de arbolado y zonas verdes que aportan frescor, sombra y un ambiente más natural al corazón del municipio.",
      "La intervención contempló también la creación de amplias áreas peatonales para favorecer el paseo y la convivencia, junto con un parque infantil diseñado con criterios de seguridad y accesibilidad para que los más pequeños puedan disfrutar con tranquilidad. Esta actuación dota al centro de Maria de la Salut de un entorno acogedor y funcional, preparado para acoger mercados, celebraciones populares y la vida cotidiana de vecinos y visitantes.",
      "Con más de setenta años de experiencia en obra pública y construcción sostenible, Dosmas Grup reafirma su compromiso con la mejora de los espacios urbanos, ofreciendo soluciones que respetan la identidad local mientras responden a las necesidades actuales de la ciudadanía."
    ],
    image: "/images/projects/placa-des-mercat-maria-de-la-salut/01.webp",
    gallery: buildGallery("/images/projects/placa-des-mercat-maria-de-la-salut", 8),
    relatedServices: [
      "arreglo-y-acondicionamiento-de-caminos-y-carreteras",
      "obras-hidraulicas",
      "terraplenes-y-compactaciones"
    ],
    kpis: [
      { label: "Superficie renovada", value: "3.400 m²" },
      { label: "Áreas peatonales", value: "2.100 m²" },
      { label: "Plazo de obra", value: "18 semanas" },
      { label: "Equipo en punta", value: "31 profesionales" }
    ],
    caseStudy: {
      reto:
        "Actualizar una plaza central con alta intensidad de uso, preservando su identidad urbana y mejorando accesibilidad.",
      solucion:
        "Intervención integral por etapas con pavimentación técnica, zonas verdes y diseño de espacios para convivencia.",
      ejecucion:
        "Se gestionaron partidas simultáneas de urbanización, drenaje, mobiliario y seguridad con coordinación municipal continua.",
      resultado:
        "Nueva plaza funcional, segura y preparada para actividad diaria, mercado local y eventos comunitarios."
    }
  },
  {
    slug: "construccion-casa-en-son-vida",
    title: "CONSTRUCCIÓN DE CASA EN SON VIDA",
    summary:
      "Dosmas Grup llevó a cabo la edificación de una vivienda de aproximadamente 1.000 m² en una de las urbanizaciones más exclusivas de Mallorca.",
    location: "Son Vida, Mallorca",
    category: "Edificación",
    year: "2025",
    description: [
      "Dosmas Grup llevó a cabo la edificación de una vivienda de aproximadamente 1.000 m² en una de las urbanizaciones más exclusivas de Mallorca, integrando una amplia piscina y elegantes zonas ajardinadas. El proyecto destaca por el uso de materiales de altísima calidad y por una ejecución que combina diseño contemporáneo, solidez estructural y acabados de primer nivel.",
      "Cada fase de la obra se desarrolló con un estricto control técnico, garantizando la máxima eficiencia y el respeto por el entorno. Con esta realización, Dosmas Grup reafirma su experiencia en construcciones de lujo, ofreciendo espacios que unen confort, estética y durabilidad en un entorno residencial de prestigio."
    ],
    image: "/images/projects/casa-en-son-vida/01.webp",
    gallery: buildGallery("/images/projects/casa-en-son-vida", 10),
    relatedServices: ["cimentaciones-en-edificios", "cimentaciones", "zanjas-y-cimientos"],
    kpis: [
      { label: "Superficie construida", value: "1.000 m²" },
      { label: "Zonas exteriores", value: "1.800 m²" },
      { label: "Plazo de ejecución", value: "11 meses" },
      { label: "Equipo en punta", value: "42 profesionales" }
    ],
    caseStudy: {
      reto:
        "Desarrollar una vivienda de alto standing con exigencia elevada en acabados, coordinación y control de calidad.",
      solucion:
        "Gestión técnica integral con planificación detallada de oficios, hitos de control y supervisión continua de ejecución.",
      ejecucion:
        "La obra se estructuró en fases constructivas y de instalaciones para garantizar secuencia eficiente y cero reprocesos críticos.",
      resultado:
        "Vivienda premium entregada con alto estándar de calidad, durabilidad y cumplimiento de objetivos de proyecto."
    }
  },
  {
    slug: "demolicion-en-santa-ponca",
    title: "DEMOLICIÓN EN SANTA PONÇA",
    summary:
      "Dosmas Grup ejecutó la demolición completa de una vivienda situada frente a las Illes Malgrats, en el municipio de Calvià.",
    location: "Santa Ponça, Calvià",
    category: "Demoliciones",
    year: "2025",
    description: [
      "Dosmas Grup ejecutó la demolición completa de una vivienda situada frente a las Illes Malgrats, en el municipio de Calvià, como fase inicial para la construcción de una exclusiva residencia unifamiliar. El trabajo se realizó con maquinaria especializada y estrictos protocolos de seguridad, garantizando una retirada eficiente de estructuras y residuos.",
      "Esta actuación abre paso a un proyecto de alto standing que, gracias a su ubicación privilegiada con vistas panorámicas y rápido acceso a Palma y al aeropuerto, redefine el concepto de vivienda de lujo en la zona. Con esta intervención, Dosmas Grup demuestra nuevamente su capacidad para abordar con precisión y solvencia las etapas previas de grandes construcciones residenciales."
    ],
    image: "/images/projects/demolicion-en-santa-ponca/01.webp",
    gallery: buildGallery("/images/projects/demolicion-en-santa-ponca", 12),
    relatedServices: ["derribos-y-demoliciones", "transporte-de-tierras", "escolleras"],
    kpis: [
      { label: "Superficie demolida", value: "1.250 m²" },
      { label: "Residuos gestionados", value: "2.900 t" },
      { label: "Duración", value: "7 semanas" },
      { label: "Incidencias", value: "0" }
    ],
    caseStudy: {
      reto:
        "Demoler en un entorno sensible y de alto valor residencial con control de riesgos y gestión de residuos estricta.",
      solucion:
        "Plan específico de demolición con fases de desmantelado, segregación de materiales y logística de retirada programada.",
      ejecucion:
        "Se ejecutó la demolición con maquinaria especializada y protocolos de seguridad reforzados en cada etapa.",
      resultado:
        "Parcela liberada y acondicionada para nueva construcción, cumpliendo normativa y objetivos de plazo."
    }
  },
  {
    slug: "demolicion-aeropuerto-de-palma",
    title: "DEMOLICIÓN EN EL AEROPUERTO DE PALMA DE MALLORCA",
    summary:
      "Dosmas Grup participa en el proyecto de modernización del aeropuerto ejecutando la demolición del paso peatonal que conectaba las dos terminales.",
    location: "Aeropuerto de Palma, Mallorca",
    category: "Infraestructuras",
    year: "2025",
    description: [
      "Dosmas Grup participa en el proyecto de modernización del aeropuerto ejecutando la demolición del paso peatonal que conectaba las dos terminales. Con la nueva excavadora Caterpillar 352 y maquinaria de última generación, el trabajo se desarrolla con máxima precisión, seguridad y eficiencia.",
      "Esta intervención constituye un paso clave en la transformación de las instalaciones aeroportuarias, preparando el terreno para un espacio más moderno y funcional que mejorará la experiencia de millones de pasajeros. Con esta actuación, Dosmas Grup reafirma su experiencia en grandes obras de infraestructura, uniendo tecnología avanzada y rigor técnico en cada fase del proyecto."
    ],
    image: "/images/projects/aeropuerto-de-palma/01.webp",
    gallery: buildGallery("/images/projects/aeropuerto-de-palma", 9),
    relatedServices: ["derribos-y-demoliciones", "transporte-de-maquinaria", "obras-hidraulicas"],
    kpis: [
      { label: "Entorno operativo", value: "24/7" },
      { label: "Frentes coordinados", value: "5" },
      { label: "Duración", value: "9 semanas" },
      { label: "Cumplimiento hitos", value: "100%" }
    ],
    caseStudy: {
      reto:
        "Intervenir en infraestructura aeroportuaria activa, garantizando seguridad operacional y continuidad del servicio.",
      solucion:
        "Planificación por ventanas de trabajo, coordinación multiagente y ejecución con maquinaria de alta precisión.",
      ejecucion:
        "La demolición se realizó con control técnico continuo y protocolos de seguridad adaptados al entorno aeroportuario.",
      resultado:
        "Fase de modernización habilitada en plazo, con trazabilidad completa y mínima interferencia operativa."
    }
  },
  {
    slug: "preparacion-terreno-son-ribotet",
    title: "PREPARACIÓN DE TERRENO PARA NUEVA VIÑA – SON RIBOTET, PETRA",
    summary:
      "Dosmas Grup asumió la puesta a punto de esta finca del Pla de Mallorca para la futura plantación de viñedo.",
    location: "Petra, Mallorca",
    category: "Movimientos de tierra",
    year: "2025",
    description: [
      "Dosmas Grup asumió la puesta a punto de esta finca del Pla de Mallorca para la futura plantación de viñedo, realizando un movimiento de tierras de gran escala con maquinaria de alto rendimiento. La actuación incluyó trituración de roca, nivelación y adecuación del terreno, empleando una flota especializada que garantizó precisión y rapidez en cada fase del trabajo.",
      "El despliegue técnico, con excavadoras y equipos de última generación, permitió transformar el paisaje con eficacia y total seguridad, asegurando la base perfecta para un proyecto vitivinícola de calidad. Con más de setenta años de experiencia, Dosmas Grup reafirma su liderazgo en excavaciones, canalizaciones y grandes obras, combinando innovación, respeto medioambiental y un compromiso constante con la excelencia."
    ],
    image: "/images/projects/son-ribotet/01.webp",
    gallery: buildGallery("/images/projects/son-ribotet", 12),
    relatedServices: ["desmontes", "terraplenes-y-compactaciones", "desbroces-y-trabajos-agricolas"],
    kpis: [
      { label: "Terreno acondicionado", value: "14 ha" },
      { label: "Roca triturada", value: "18.500 t" },
      { label: "Duración", value: "12 semanas" },
      { label: "Disponibilidad de flota", value: "98%" }
    ],
    caseStudy: {
      reto:
        "Transformar un terreno agrícola con presencia de roca y desniveles en base apta para nueva explotación vitivinícola.",
      solucion:
        "Movimiento de tierras técnico con trituración in situ, nivelación controlada y adecuación de drenajes.",
      ejecucion:
        "Se desplegó maquinaria específica para trabajos de alto rendimiento con control continuo de cota y compactación.",
      resultado:
        "Finca preparada para plantación con parámetros geométricos y operativos óptimos para la siguiente fase."
    }
  }
];

export const projectsBySlug = Object.fromEntries(
  projectsData.map((project) => [project.slug, project])
) as Record<string, ProjectItem>;
