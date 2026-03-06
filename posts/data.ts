export type PostItem = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  author: string;
  readingTime: string;
  content: string[];
  image: string;
  relatedServices: string[];
  relatedProjects: string[];
};

export const postsData: PostItem[] = [
  {
    slug: "gestion-de-plazos-en-obra-civil",
    title: "Gestión de plazos en obra civil: cómo garantizar entregas sin desviaciones",
    excerpt:
      "Un enfoque práctico para planificar, coordinar y ejecutar proyectos de obra civil con control real de tiempos y recursos.",
    date: "2026-02-24",
    category: "Gestión de obra",
    author: "Equipo Técnico Dosmas Grup",
    readingTime: "5 min",
    content: [
      "En Dosmas Grup entendemos que el plazo es un compromiso operativo, no una estimación. Por eso trabajamos con planificación por fases, seguimiento diario de hitos críticos y coordinación continua entre oficina técnica, producción y logística.",
      "La clave está en anticipar los cuellos de botella antes de que impacten en obra: disponibilidad de maquinaria, secuencia de subcontratas, condicionantes meteorológicos y suministros. Este enfoque preventivo reduce incidencias y mejora la productividad global del proyecto.",
      "Aplicando metodologías de control y comunicación estructurada, conseguimos mantener la calidad técnica sin comprometer tiempos. El resultado es una ejecución más fiable para el cliente y una toma de decisiones más rápida para el equipo de obra."
    ],
    image: "/images/projects/son-ribotet/03.webp",
    relatedServices: ["excavaciones", "terraplenes-y-compactaciones", "obras-hidraulicas"],
    relatedProjects: ["preparacion-terreno-son-ribotet", "remodelacion-placa-des-mercat"]
  },
  {
    slug: "demoliciones-seguras-entornos-urbanos",
    title: "Demoliciones seguras en entornos urbanos: protocolos que marcan la diferencia",
    excerpt:
      "Las fases clave para ejecutar derribos en zonas sensibles minimizando riesgos operativos, ambientales y logísticos.",
    date: "2026-02-10",
    category: "Seguridad",
    author: "Departamento de Prevención",
    readingTime: "4 min",
    content: [
      "Cada demolición en entorno urbano exige un análisis previo detallado del edificio, su contexto y las interferencias de servicio. Trabajamos con planes específicos de seguridad, señalización perimetral y control de accesos para proteger al personal y al entorno.",
      "La secuencia de derribo se define según tipología estructural, proximidad a terceros y gestión de residuos. Esta metodología permite intervenir con precisión, reducir tiempos muertos y garantizar una trazabilidad completa de los materiales retirados.",
      "Además, integramos medidas de control de polvo, ruido y transporte para cumplir normativa y minimizar impacto vecinal. Seguridad, eficiencia y cumplimiento forman parte del mismo estándar operativo."
    ],
    image: "/images/projects/demolicion-en-santa-ponca/04.webp",
    relatedServices: ["derribos-y-demoliciones", "transporte-de-tierras"],
    relatedProjects: ["demolicion-en-santa-ponca", "demolicion-aeropuerto-de-palma"]
  },
  {
    slug: "innovacion-en-maquinaria-2026",
    title: "Innovación en maquinaria 2026: eficiencia, control y menor impacto ambiental",
    excerpt:
      "La evolución de la maquinaria pesada permite mayor precisión de ejecución y una gestión energética más eficiente.",
    date: "2026-01-28",
    category: "Tecnología",
    author: "Dirección de Operaciones",
    readingTime: "6 min",
    content: [
      "La incorporación de maquinaria de última generación ha cambiado la forma de ejecutar movimientos de tierra, desmontes y cimentaciones. Hoy trabajamos con más control geométrico, menor consumo por ciclo y mayor estabilidad en rendimientos.",
      "Los sistemas de asistencia y monitorización en cabina aportan datos útiles para optimizar maniobras, reducir tiempos improductivos y mejorar el mantenimiento preventivo. Esto se traduce en obras más seguras y con mayor previsibilidad.",
      "La tecnología no sustituye a la experiencia del equipo; la potencia. Cuando ambas se combinan, el resultado es una ejecución más limpia, más rápida y técnicamente más robusta."
    ],
    image: "/images/projects/excavacion-en-son-vida/01.webp",
    relatedServices: ["excavaciones", "desmontes", "cimentaciones"],
    relatedProjects: ["excavacion-en-son-vida", "demolicion-aeropuerto-de-palma"]
  },
  {
    slug: "rehabilitacion-de-espacios-urbanos",
    title: "Rehabilitación de espacios urbanos: diseño funcional y durabilidad",
    excerpt:
      "Cómo transformar plazas y entornos públicos para mejorar convivencia, accesibilidad y uso ciudadano.",
    date: "2026-01-18",
    category: "Obra pública",
    author: "Oficina Técnica",
    readingTime: "5 min",
    content: [
      "La renovación de espacios urbanos exige equilibrar identidad local, funcionalidad y durabilidad. En cada intervención estudiamos flujos peatonales, mantenimiento a largo plazo y requisitos de accesibilidad para asegurar un uso real del espacio.",
      "La selección de materiales y sistemas constructivos condiciona el comportamiento futuro de la plaza o vial. Por eso priorizamos soluciones robustas que reduzcan patologías y simplifiquen la conservación.",
      "Cuando una obra pública está bien diseñada y bien ejecutada, el impacto trasciende lo estético: mejora la seguridad, fomenta actividad local y refuerza la vida comunitaria."
    ],
    image: "/images/projects/placa-des-mercat-maria-de-la-salut/02.webp",
    relatedServices: ["arreglo-y-acondicionamiento-de-caminos-y-carreteras", "obras-hidraulicas"],
    relatedProjects: ["remodelacion-placa-des-mercat"]
  },
  {
    slug: "cimentacion-y-control-geotecnico",
    title: "Cimentación y control geotécnico: decisiones tempranas para obras más seguras",
    excerpt:
      "Por qué el estudio del terreno y el control continuo durante ejecución son determinantes en la estabilidad final.",
    date: "2026-01-09",
    category: "Ingeniería",
    author: "Área de Ingeniería",
    readingTime: "5 min",
    content: [
      "La cimentación es una fase crítica que define el comportamiento estructural a largo plazo. Un análisis geotécnico correcto permite seleccionar tipologías y procedimientos adecuados según la naturaleza del suelo y condiciones hidrogeológicas.",
      "Durante la ejecución, el control de parámetros y la supervisión continua reducen incertidumbre y evitan correcciones costosas en fases avanzadas. Este control técnico mejora tanto la seguridad como el rendimiento de la obra.",
      "En Dosmas Grup abordamos la cimentación con enfoque integral: diseño, maquinaria especializada y coordinación entre equipos para asegurar resultados sólidos y duraderos."
    ],
    image: "/images/projects/casa-en-son-vida/02.webp",
    relatedServices: ["cimentaciones", "cimentaciones-en-edificios", "zanjas-y-cimientos"],
    relatedProjects: ["construccion-casa-en-son-vida", "excavacion-en-son-vida"]
  },
  {
    slug: "logistica-de-transporte-en-islas",
    title: "Logística de transporte de maquinaria y tierras en entorno insular",
    excerpt:
      "Planificación logística, control documental y coordinación operativa para transporte especializado en Baleares.",
    date: "2025-12-20",
    category: "Logística",
    author: "Área de Logística",
    readingTime: "4 min",
    content: [
      "En el contexto insular, la logística de maquinaria y tierras requiere una planificación precisa de rutas, ventanas horarias, autorizaciones y capacidades de carga. Cada decisión impacta en coste, plazo y seguridad.",
      "La coordinación entre producción y transporte permite mantener continuidad de obra, evitar paradas y optimizar el uso de flota. Este trabajo se apoya en una gestión documental rigurosa y en conductores especializados.",
      "Nuestro enfoque combina fiabilidad operativa y cumplimiento normativo para que cada traslado llegue a tiempo y en condiciones óptimas, incluso en proyectos de alta complejidad."
    ],
    image: "/images/projects/son-ribotet/08.webp",
    relatedServices: ["transporte-de-maquinaria", "transporte-de-tierras", "suministro-de-agua-en-mallorca"],
    relatedProjects: ["demolicion-aeropuerto-de-palma", "preparacion-terreno-son-ribotet"]
  }
];

export const postsBySlug = Object.fromEntries(
  postsData.map((post) => [post.slug, post])
) as Record<string, PostItem>;
