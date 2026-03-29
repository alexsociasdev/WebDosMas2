import { projectDescriptions } from "@/projects/project-descriptions";

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

function buildGallery(basePath: string, total: number, extension = "jpg"): string[] {
  return Array.from({ length: total }, (_, index) => {
    const number = String(index + 1).padStart(2, "0");
    return `${basePath}/${number}.${extension}`;
  });
}

export const projectsData: ProjectItem[] = [
  {
    slug: "sencelles",
    title: "CONSTRUCCIÓN DE DOS VIVIENDAS EN SENCELLES",
    summary:
      "DOSMAS GRUP está ejecutando en Sencelles la construcción integral de dos chalets de 500 m² con piscina, jardín y más de 1.000 metros lineales de pared de piedra seca.",
    location: "Sencelles, Mallorca",
    category: "Edificación",
    year: "2026",
    description: projectDescriptions.sencelles,
    image: "/images/projects/sencelles/01.jpg",
    gallery: buildGallery("/images/projects/sencelles", 18),
    relatedServices: ["cimentaciones-en-edificios", "cimentaciones", "zanjas-y-cimientos"],
    kpis: [
      { label: "Viviendas en ejecución", value: "2 chalets" },
      { label: "Superficie por vivienda", value: "500 m²" },
      { label: "Pared seca ejecutada", value: "+1.000 ml" },
      { label: "Alcance", value: "Piscina y jardín" }
    ],
    caseStudy: {
      reto:
        "Desarrollar dos viviendas de gran dimensión manteniendo control absoluto de todas las fases de obra y una integración respetuosa con el entorno mallorquín.",
      solucion:
        "Gestión integral de excavación, cimentación, estructura, acabados, piscina, ajardinamiento y ejecución de pared seca tradicional.",
      ejecucion:
        "La obra se ha planificado con coordinación constante entre oficios y seguimiento técnico continuo para asegurar ritmo, precisión y calidad en cada fase.",
      resultado:
        "Proyecto residencial de alto nivel ejecutado con visión integral, valor paisajístico y un estándar constructivo preparado para perdurar."
    }
  },
  {
    slug: "valldemossa",
    title: "CONSTRUCCIÓN DE VIVIENDA EN VALLDEMOSSA",
    summary:
      "DOSMAS GRUP desarrolla en Valldemossa una vivienda integrada en la Serra de Tramuntana, concebida desde la calidad constructiva, la durabilidad y el respeto por el entorno.",
    location: "Valldemossa, Mallorca",
    category: "Edificación",
    year: "2025",
    description: projectDescriptions.valldemossa,
    image: "/images/projects/valldemossa/01.jpg",
    gallery: buildGallery("/images/projects/valldemossa", 25),
    relatedServices: ["cimentaciones-en-edificios", "cimentaciones", "zanjas-y-cimientos"],
    kpis: [
      { label: "Entorno", value: "Serra de Tramuntana" },
      { label: "Estado", value: "En construcción" },
      { label: "Enfoque", value: "Integración paisajística" },
      { label: "Prioridad", value: "Calidad duradera" }
    ],
    caseStudy: {
      reto:
        "Construir una vivienda contemporánea en un entorno de alto valor natural y arquitectónico, manteniendo coherencia con la identidad local.",
      solucion:
        "Diseño constructivo sensible al paisaje, selección de materiales duraderos y control técnico desde la cimentación hasta el acabado final.",
      ejecucion:
        "La obra se está desarrollando con una secuencia rigurosa de fases y una supervisión constante para equilibrar precisión técnica y sensibilidad estética.",
      resultado:
        "Una vivienda pensada para perdurar, integrada en el entorno y ejecutada con los estándares de calidad que definen a DOSMAS GRUP."
    }
  },
  {
    slug: "portocolom",
    title: "MEJORA URBANA Y AMBIENTAL EN S'ARENAL DE PORTOCOLOM",
    summary:
      "DOSMAS GRUP ha culminado en s'Arenal de Portocolom una actuación de mejora urbana y ambiental con nueva zona verde y peatonal, pasarela de madera, pavimentos ecológicos y 28 plazas de aparcamiento.",
    location: "Portocolom, Mallorca",
    category: "Obra pública",
    year: "2026",
    description: projectDescriptions.portocolom,
    image: "/images/projects/portocolom/01.jpg",
    gallery: buildGallery("/images/projects/portocolom", 18),
    relatedServices: ["arreglo-y-acondicionamiento-de-caminos-y-carreteras", "obras-hidraulicas", "escolleras"],
    kpis: [
      { label: "Aparcamiento creado", value: "28 plazas" },
      { label: "Espacio resultante", value: "Zona verde y peatonal" },
      { label: "Elementos incorporados", value: "Pasarela y pavimento ecológico" },
      { label: "Objetivo", value: "Menos tráfico rodado" }
    ],
    caseStudy: {
      reto:
        "Recuperar un frente litoral sensible, mejorando su funcionalidad urbana sin perder calidad paisajística ni confort de uso.",
      solucion:
        "Redefinición del espacio público mediante eliminación del vial, creación de itinerarios peatonales, soluciones ecológicas y reorganización del estacionamiento.",
      ejecucion:
        "La obra se desarrolló con criterios de integración ambiental, priorizando accesibilidad, convivencia entre usos y mejora real de la movilidad local.",
      resultado:
        "Un nuevo espacio urbano más amable, funcional y sostenible, preparado para el disfrute cotidiano de residentes y visitantes."
    }
  },
  {
    slug: "aeropuerto-de-palma-reciclaje",
    title: "RECICLAJE DE MATERIAL DE DERRIBO EN EL AEROPUERTO DE PALMA",
    summary:
      "DOSMAS GRUP participa en el aeropuerto de Palma en una actuación de reciclaje de material de derribo, con alrededor de 25.000 m³ tratados y reutilizados dentro de las propias instalaciones.",
    location: "Aeropuerto de Palma, Mallorca",
    category: "Infraestructuras",
    year: "2026",
    description: projectDescriptions.aeropuertoDePalmaReciclaje,
    image: "/images/projects/aeropuerto-palma-reciclaje/01.jpg",
    gallery: buildGallery("/images/projects/aeropuerto-palma-reciclaje", 17),
    relatedServices: ["machacas-cribado-zahorras-y-aridos", "transporte-de-tierras", "derribos-y-demoliciones"],
    kpis: [
      { label: "Material reciclado", value: "25.000 m³" },
      { label: "Camiones en obra", value: "10" },
      { label: "Giratorias JCB", value: "2 x 22 t" },
      { label: "Destino del material", value: "Reutilización in situ" }
    ],
    caseStudy: {
      reto:
        "Gestionar y reciclar grandes volúmenes de material de derribo en un entorno aeroportuario con altos requisitos de seguridad y operativa.",
      solucion:
        "Implantación de una cadena completa de trituración, cribado, carga y reutilización del material dentro de las propias instalaciones.",
      ejecucion:
        "Se desplegó maquinaria específica de alto rendimiento y un equipo humano especializado para mantener continuidad operativa, control técnico y trazabilidad del material.",
      resultado:
        "Actuación de referencia en reciclaje aplicado a infraestructura estratégica, reduciendo residuos y construyendo valor desde el propio material recuperado."
    }
  },
  {
    slug: "construccion-casa-en-son-vida",
    title: "CONSTRUCCIÓN DE VIVIENDA UNIFAMILIAR EN SON VIDA",
    summary:
      "DOSMAS GRUP ha ejecutado en Son Vida una vivienda unifamiliar de aproximadamente 1.000 m² con piscina y zonas ajardinadas, bajo criterios de arquitectura contemporánea y excelencia constructiva.",
    location: "Son Vida, Mallorca",
    category: "Edificación",
    year: "2026",
    description: projectDescriptions.construccionCasaEnSonVida,
    image: "/images/projects/casa-son-vida/01.jpg",
    gallery: buildGallery("/images/projects/casa-son-vida", 25),
    relatedServices: ["cimentaciones-en-edificios", "cimentaciones", "zanjas-y-cimientos"],
    kpis: [
      { label: "Superficie construida", value: "1.000 m²" },
      { label: "Elementos exteriores", value: "Piscina y jardín" },
      { label: "Enfoque", value: "Arquitectura contemporánea" },
      { label: "Nivel de acabado", value: "Alta gama" }
    ],
    caseStudy: {
      reto:
        "Ejecutar una vivienda premium en un entorno residencial de máxima exigencia, cuidando tanto la calidad técnica como la integración arquitectónica.",
      solucion:
        "Planificación detallada, materiales de primer nivel y control técnico exhaustivo de estructura, instalaciones y acabados.",
      ejecucion:
        "Cada fase se coordinó con precisión para garantizar eficiencia, secuencia constructiva ordenada y un estándar alto en todos los remates.",
      resultado:
        "Una vivienda unifamiliar de alto nivel que une confort, estética y durabilidad en uno de los enclaves más prestigiosos de Mallorca."
    }
  },
  {
    slug: "costa-de-los-pinos",
    title: "VIVIENDA DE GRANDES DIMENSIONES EN COSTA DE LOS PINOS",
    summary:
      "DOSMAS GRUP trabaja en Costa de los Pinos en una vivienda de grandes dimensiones construida con primeras calidades, rigor técnico y una atención extrema al detalle.",
    location: "Costa de los Pinos, Son Servera",
    category: "Edificación",
    year: "2025",
    description: projectDescriptions.costaDeLosPinos,
    image: "/images/projects/costa-de-los-pinos/01.jpg",
    gallery: buildGallery("/images/projects/costa-de-los-pinos", 18),
    relatedServices: ["cimentaciones-en-edificios", "cimentaciones", "zanjas-y-cimientos"],
    kpis: [
      { label: "Tipología", value: "Vivienda singular" },
      { label: "Ubicación", value: "Litoral mallorquín" },
      { label: "Criterio constructivo", value: "Primeras calidades" },
      { label: "Objetivo", value: "Durabilidad y detalle" }
    ],
    caseStudy: {
      reto:
        "Desarrollar una vivienda de gran tamaño en un enclave costero con altas exigencias de calidad, durabilidad y precisión constructiva.",
      solucion:
        "Aplicación de sistemas y materiales de alto nivel bajo una metodología basada en planificación, control y visión integral del proyecto.",
      ejecucion:
        "La obra se está ejecutando con supervisión constante, atención al detalle y coordinación técnica para asegurar coherencia desde la estructura hasta el acabado.",
      resultado:
        "Un proyecto residencial de gran formato construido con la confianza, la precisión y la exigencia que requiere una vivienda verdaderamente singular."
    }
  },
  {
    slug: "excavacion-en-son-vida",
    title: "EXCAVACIÓN DE GRAN ENVERGADURA EN SON VIDA",
    summary:
      "DOSMAS GRUP ha llevado a cabo en Son Vida una excavación de gran envergadura con excavadoras Caterpillar 352 y Liebherr 944, apoyadas por una flota de camiones Renault, Volvo y Scania.",
    location: "Son Vida, Mallorca",
    category: "Excavaciones",
    year: "2024",
    description: projectDescriptions.excavacionEnSonVida,
    image: "/images/projects/excavacion-son-vida-2024/01.jpg",
    gallery: buildGallery("/images/projects/excavacion-son-vida-2024", 21),
    relatedServices: ["excavaciones", "desmontes", "cimentaciones"],
    kpis: [
      { label: "Maquinaria principal", value: "CAT 352 y Liebherr 944" },
      { label: "Apoyo logístico", value: "Renault, Volvo y Scania" },
      { label: "Entorno", value: "Residencial premium" },
      { label: "Objetivo", value: "Preparación de parcela" }
    ],
    caseStudy: {
      reto:
        "Ejecutar una excavación de alta complejidad en un entorno residencial exclusivo con exigencias elevadas de control, seguridad y precisión.",
      solucion:
        "Despliegue de maquinaria de última generación, logística propia de transporte y planificación técnica continua adaptada al terreno.",
      ejecucion:
        "Los trabajos se desarrollaron con protocolos estrictos, seguimiento diario y coordinación entre excavación, carga, retirada y preparación de plataforma.",
      resultado:
        "Terreno preparado con solvencia para futuras construcciones de alto nivel, reforzando el liderazgo de DOSMAS GRUP en excavaciones complejas."
    }
  },
  {
    slug: "remodelacion-placa-des-mercat",
    title: "REMODELACIÓN INTEGRAL DE LA PLAÇA DES MERCAT",
    summary:
      "DOSMAS GRUP ha culminado la remodelación integral de la Plaça des Mercat de Maria de la Salut, incorporando nuevo adoquinado, arbolado, zonas verdes y un espacio de juegos.",
    location: "Maria de la Salut, Mallorca",
    category: "Obra pública",
    year: "2025",
    description: projectDescriptions.remodelacionPlacaDesMercat,
    image: "/images/projects/placa-des-mercat-maria-de-la-salut/01.webp",
    gallery: buildGallery("/images/projects/placa-des-mercat-maria-de-la-salut", 8, "webp"),
    relatedServices: ["arreglo-y-acondicionamiento-de-caminos-y-carreteras", "obras-hidraulicas", "terraplenes-y-compactaciones"],
    kpis: [
      { label: "Pavimentación", value: "Nuevo adoquinado" },
      { label: "Espacio verde", value: "Arbolado y zonas verdes" },
      { label: "Uso social", value: "Espacio de juegos" },
      { label: "Tipología", value: "Plaza pública" }
    ],
    caseStudy: {
      reto:
        "Transformar una plaza central manteniendo su valor identitario y mejorando su funcionalidad diaria para vecinos y visitantes.",
      solucion:
        "Intervención integral de urbanización con nuevo pavimento, vegetación, áreas de estancia y un espacio específico para el juego infantil.",
      ejecucion:
        "La obra se planteó para renovar el enclave sin perder su esencia, reforzando su capacidad como lugar de encuentro y convivencia.",
      resultado:
        "Una plaza más amable, funcional y acogedora, preparada para el uso diario y para seguir formando parte de la vida del municipio."
    }
  },
  {
    slug: "es-figueral-marratxi",
    title: "OBRA PÚBLICA EN ES FIGUERAL, MARRATXÍ",
    summary:
      "DOSMAS GRUP ejecuta en Es Figueral, junto a la estación de tren de Marratxí, una actuación pública con 266 plazas de aparcamiento, carril bici y zona peatonal.",
    location: "Es Figueral, Marratxí",
    category: "Obra pública",
    year: "2026",
    description: projectDescriptions.esFigueralMarratxi,
    image: "/images/projects/es-figueral-marratxi/01.jpg",
    gallery: buildGallery("/images/projects/es-figueral-marratxi", 10),
    relatedServices: ["arreglo-y-acondicionamiento-de-caminos-y-carreteras", "terraplenes-y-compactaciones", "explanaciones"],
    kpis: [
      { label: "Aparcamiento previsto", value: "266 plazas" },
      { label: "Movilidad", value: "Carril bici" },
      { label: "Accesibilidad", value: "Zona peatonal" },
      { label: "Estado", value: "En ejecución" }
    ],
    caseStudy: {
      reto:
        "Ordenar un entorno urbano junto a la estación de tren con necesidades claras de movilidad, estacionamiento y convivencia entre usos.",
      solucion:
        "Acondicionamiento del terreno para nuevo aparcamiento, integración de carril bici y creación de un amplio recorrido peatonal.",
      ejecucion:
        "La actuación se está ejecutando con maquinaria propia y una planificación orientada a combinar funcionalidad urbana y durabilidad de la infraestructura.",
      resultado:
        "Un espacio público más útil, accesible y preparado para mejorar de forma directa el día a día de vecinos y visitantes."
    }
  },
  {
    slug: "preparacion-terreno-son-ribotet",
    title: "PREPARACIÓN DE TERRENO PARA NUEVA VIÑA EN SON RIBOTET",
    summary:
      "DOSMAS GRUP ha acondicionado en Son Ribotet un terreno agrícola para futura plantación de viñedo, con trituración de roca, nivelación y adecuación integral del terreno.",
    location: "Petra, Mallorca",
    category: "Movimientos de tierra",
    year: "2025",
    description: [
      "DOSMAS GRUP asumió la puesta a punto de esta finca del Pla de Mallorca para la futura plantación de viñedo, realizando un movimiento de tierras de gran escala con maquinaria de alto rendimiento. La actuación incluyó trituración de roca, nivelación y adecuación del terreno, empleando una flota especializada que garantizó precisión y rapidez en cada fase del trabajo.",
      "El despliegue técnico, con excavadoras y equipos de última generación, permitió transformar el paisaje con eficacia y total seguridad, asegurando la base perfecta para un proyecto vitivinícola de calidad. Con más de setenta años de experiencia, DOSMAS GRUP reafirma su liderazgo en excavaciones, canalizaciones y grandes obras, combinando innovación, respeto medioambiental y un compromiso constante con la excelencia."
    ],
    image: "/images/projects/son-ribotet-nueva-vina/01.jpg",
    gallery: buildGallery("/images/projects/son-ribotet-nueva-vina", 18),
    relatedServices: ["desmontes", "terraplenes-y-compactaciones", "desbroces-y-trabajos-agricolas"],
    kpis: [
      { label: "Terreno acondicionado", value: "14 ha" },
      { label: "Roca triturada", value: "18.500 t" },
      { label: "Duración", value: "12 semanas" },
      { label: "Disponibilidad de flota", value: "98%" }
    ],
    caseStudy: {
      reto:
        "Transformar una finca con presencia de roca y desniveles en una base apta para una futura explotación vitivinícola.",
      solucion:
        "Movimiento de tierras técnico con trituración in situ, nivelación controlada y preparación integral del terreno.",
      ejecucion:
        "La intervención se apoyó en maquinaria específica y un seguimiento constante de cotas, ritmos de trabajo y seguridad operativa.",
      resultado:
        "Finca acondicionada con precisión para la nueva viña, lista para evolucionar hacia su siguiente fase productiva."
    }
  },
  {
    slug: "cas-concos",
    title: "TRANSFORMACIÓN DE LA PLAÇA DE L'ESGLÉSIA DE CAS CONCOS",
    summary:
      "DOSMAS GRUP ha culminado la transformación de la Plaça de l'Església de Cas Concos, una intervención pública de 554.000 euros financiada con fondos europeos.",
    location: "Cas Concos, Felanitx",
    category: "Obra pública",
    year: "2026",
    description: projectDescriptions.casConcos,
    image: "/images/projects/cas-concos/01.jpg",
    gallery: buildGallery("/images/projects/cas-concos", 16),
    relatedServices: ["arreglo-y-acondicionamiento-de-caminos-y-carreteras", "obras-hidraulicas", "terraplenes-y-compactaciones"],
    kpis: [
      { label: "Presupuesto", value: "554.000 €" },
      { label: "Financiación", value: "Fondos europeos" },
      { label: "Promotor", value: "Ajuntament de Felanitx" },
      { label: "Espacio renovado", value: "Plaça de l'Església" }
    ],
    caseStudy: {
      reto:
        "Renovar un espacio urbano con alto valor social e histórico sin perder su identidad y su función como corazón del núcleo urbano.",
      solucion:
        "Intervención pública integral con mirada patrimonial, funcional y sostenible, concebida para reforzar la convivencia y el uso cotidiano.",
      ejecucion:
        "La actuación se desarrolló con rigor técnico y una clara sensibilidad hacia el entorno, coordinando obra, diseño urbano y necesidades municipales.",
      resultado:
        "Una plaza renovada, accesible y preparada para seguir siendo parte activa de la vida colectiva de Cas Concos durante muchos años."
    }
  },
  {
    slug: "demolicion-en-santa-ponca",
    title: "DEMOLICIÓN EN SANTA PONÇA",
    summary:
      "DOSMAS GRUP ejecutó la demolición completa de una vivienda situada frente a las Illes Malgrats, en el municipio de Calvià.",
    location: "Santa Ponça, Calvià",
    category: "Demoliciones",
    year: "2025",
    description: [
      "DOSMAS GRUP ejecutó la demolición completa de una vivienda situada frente a las Illes Malgrats, en el municipio de Calvià, como fase inicial para la construcción de una exclusiva residencia unifamiliar. El trabajo se realizó con maquinaria especializada y estrictos protocolos de seguridad, garantizando una retirada eficiente de estructuras y residuos.",
      "Esta actuación abre paso a un proyecto de alto standing que, gracias a su ubicación privilegiada con vistas panorámicas y rápido acceso a Palma y al aeropuerto, redefine el concepto de vivienda de lujo en la zona. Con esta intervención, DOSMAS GRUP demuestra nuevamente su capacidad para abordar con precisión y solvencia las etapas previas de grandes construcciones residenciales."
    ],
    image: "/images/projects/demolicion-en-santa-ponca/01.webp",
    gallery: buildGallery("/images/projects/demolicion-en-santa-ponca", 12, "webp"),
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
  }
];

export const projectsBySlug = Object.fromEntries(
  projectsData.map((project) => [project.slug, project])
) as Record<string, ProjectItem>;
