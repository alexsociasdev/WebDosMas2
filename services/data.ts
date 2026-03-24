import { projectsBySlug } from "@/projects/data";

export type ServiceItem = {
  slug: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  gallery: string[];
};

const defaultGallery = [
  "/images/projects/excavacion-en-son-vida/01.webp",
  "/images/projects/demolicion-en-santa-ponca/03.webp",
  "/images/projects/son-ribotet/04.webp",
  "/images/projects/aeropuerto-de-palma/08.webp"
];

const baseServicesData: ServiceItem[] = [
  {
    slug: "excavaciones",
    title: "Excavaciones",
    paragraphs: [
      "En DOSMAS GRUP somos especialistas en excavaciones, movimientos de tierra y derribos, ofreciendo soluciones adaptadas a cada proyecto con el respaldo de más de 70 años de experiencia.",
      "Nuestro equipo humano altamente cualificado, junto a una amplia flota de maquinaria pesada de última generación, nos permite acometer trabajos de gran envergadura en construcción, obra civil e incluso minería, garantizando siempre la seguridad, eficacia y cumplimiento de plazos.",
      "Llevamos a cabo desde proyectos personalizados hasta actuaciones de carácter urgente, siempre con una gestión integral que incluye:",
      "En DOSMAS GRUP no solo construimos proyectos: construimos confianza y resultados que perduran."
    ],
    bullets: [
      "Estudio técnico y planificación.",
      "Asesoramiento especializado.",
      "Preparación y ejecución de la obra.",
      "Retirada de escombros y movimientos de tierra."
    ],
    gallery: defaultGallery
  },
  {
    slug: "derribos-y-demoliciones",
    title: "Derribos y demoliciones",
    paragraphs: [
      "En DOSMAS GRUP somos especialistas en derribos y demoliciones de cualquier magnitud, desde inmuebles de pequeña escala hasta grandes edificios, hoteles e infraestructuras. Nuestra experiencia, unida a un equipo altamente cualificado y a una flota de maquinaria avanzada, nos posiciona como una de las empresas líderes en Baleares en este ámbito.",
      "Cada proyecto se planifica minuciosamente, con una evaluación previa del entorno y las estructuras, teniendo en cuenta factores clave como la seguridad, el terreno, las condiciones climáticas y la operativa de los equipos. De esta manera, aseguramos un desarrollo óptimo de la obra, reduciendo los tiempos de ejecución y garantizando la máxima seguridad laboral.",
      "Nuestro compromiso con la calidad, la seguridad y el respeto al medio ambiente es absoluto. Cumplimos rigurosamente con la normativa vigente y llevamos a cabo una gestión responsable de materiales, identificando y recuperando todos los activos aprovechables para minimizar el impacto ambiental.",
      "En DOSMAS GRUP, los derribos y demoliciones no son solo un servicio: son la garantía de un trabajo bien hecho, seguro y responsable."
    ],
    gallery: defaultGallery
  },
  {
    slug: "desmontes",
    title: "Desmontes",
    paragraphs: [
      "Con más de 70 años de experiencia, en DOSMAS GRUP hemos evolucionado constantemente, incorporando innovación y tecnología en cada proyecto para garantizar resultados de máxima calidad. Realizamos todo tipo de desmontes en cualquier tipo de terreno, así como desbroces, terraplenados, excavaciones y aportación de materiales en obra.",
      "Contamos con una amplia flota de maquinaria especializada, entre la que destacan excavadoras de última generación, camiones, palas cargadoras, bulldozers y miniretros, lo que nos permite afrontar con solvencia trabajos de gran envergadura y complejidad.",
      "Nuestro equipo humano, altamente cualificado y comprometido, junto a los recursos técnicos más avanzados, consolidan a DOSMAS GRUP como una empresa sinónimo de eficiencia, calidad y confianza en cada proyecto de desmonte, movimiento y nivelación de terrenos."
    ],
    gallery: defaultGallery
  },
  {
    slug: "cimentaciones",
    title: "Cimentaciones",
    paragraphs: [
      "Tras el movimiento de tierras, iniciamos la fase de cimentación, un proceso clave para la estabilidad y seguridad de cualquier construcción. En DOSMAS GRUP realizamos un estudio exhaustivo del terreno, prestando especial atención a las características del suelo y a la presencia de capas freáticas, con el fin de anticiparnos a posibles riesgos y garantizar la durabilidad del proyecto.",
      "Durante toda la ejecución llevamos a cabo un análisis y control constante, poniendo a disposición de nuestros clientes la experiencia de nuestro equipo humano, el apoyo de tecnología especializada y el respaldo de una flota de maquinaria de última generación, diseñada para trabajos de geotecnia y cimentación de alta precisión.",
      "Cada terreno exige soluciones específicas. Por ello, en DOSMAS GRUP ofrecemos un servicio integral, que incluye desde el diseño y la ingeniería del proyecto hasta la ejecución completa de la cimentación, aportando además alternativas técnicas para obras civiles de gran complejidad.",
      "Nuestra meta es siempre la misma: asegurar la máxima calidad, seguridad y confianza en cada obra, construyendo bases sólidas que perduren en el tiempo."
    ],
    gallery: defaultGallery
  },
  {
    slug: "terraplenes-y-compactaciones",
    title: "Terraplenes y compactaciones",
    paragraphs: [
      "En DOSMAS GRUP garantizamos la ejecución precisa y segura de todo tipo de terraplenes, asegurando una preparación óptima del terreno. Realizamos trabajos de saneo, escarificado y drenajes, además de la colocación y extensión controlada por tongadas del material procedente de la excavación, adaptando la humedad o desecación necesarias para alcanzar los parámetros técnicos exigidos.",
      "Contamos con equipos de nivelación láser, cubas de agua y maquinaria de última generación que nos permiten ejecutar compactaciones de gran calidad, avaladas por ensayos de carga y pruebas de densidad.",
      "Cada proyecto se apoya en un plano técnico de referencia, lo que asegura una nivelación precisa mediante cortes y rellenos compensados con materiales propios o de préstamo. De este modo, entregamos terrenos perfectamente acondicionados y con la resistencia adecuada para cualquier obra posterior, ofreciendo siempre la confianza y solidez que distinguen a DOSMAS GRUP."
    ],
    gallery: defaultGallery
  },
  {
    slug: "piedra-y-machaca",
    title: "Piedra y machaca",
    paragraphs: [
      "En DOSMAS GRUP hemos alcanzado una posición de referencia en el sector de los áridos gracias a la excelencia de nuestros materiales y al alto grado de responsabilidad que aplicamos en cada fase del proceso: extracción, trituración y clasificación. La calidad es el pilar que nos ha permitido consolidarnos como empresa líder en las Islas Baleares.",
      "Antes de iniciar cualquier trabajo de obtención de piedra o machaca, realizamos un exhaustivo control de seguridad, garantizando la correcta manipulación de los materiales y evitando riesgos derivados de la proyección de partículas. De esta forma, aseguramos un servicio seguro, eficiente y fiable, siempre en beneficio de nuestros clientes y del entorno."
    ],
    gallery: defaultGallery
  },
  {
    slug: "transporte-de-maquinaria",
    title: "Transporte de maquinaria",
    paragraphs: [
      "En DOSMAS GRUP ofrecemos servicios de transporte de maquinaria con la máxima eficiencia, calidad, rapidez y seguridad. Nuestra capacidad de adaptación y nuestra visión de crecimiento constante nos han permitido ampliar horizontes y dar respuesta a las necesidades más exigentes del sector.",
      "También disponemos de camiones cisterna de diferentes capacidades, ideales para el relleno de depósitos contra incendios, el riego de campos agrícolas y de golf, el abastecimiento de agua para uso doméstico o el suministro en rodajes y producciones audiovisuales.",
      "Nuestra flota de camiones, tráileres y semirremolques, tanto abiertos como cerrados, nos capacita para el transporte de maquinaria en general y de grandes dimensiones, como excavadoras, tractores, rodillos compactadores, dumpers, grúas o motoniveladoras, cubriendo con total solvencia todos los puntos de las Islas Baleares.",
      "Cada servicio se gestiona con un estricto control de riesgos, garantizando la seguridad de la carga y del entorno en cada traslado. Contamos con conductores experimentados y certificados, así como con toda la documentación y seguros necesarios (seguro de carga, contra todo riesgo, permisos de transporte de materiales y residuos peligrosos, entre otros).",
      "En DOSMAS GRUP no solo transportamos maquinaria: ofrecemos confianza, seguridad y cumplimiento en cada entrega."
    ],
    gallery: defaultGallery
  },
  {
    slug: "transporte-de-tierras",
    title: "Transporte de tierras",
    paragraphs: [
      "El servicio de transporte de tierras de DOSMAS GRUP está diseñado para ofrecer soluciones completas en cada fase del proyecto. Disponemos de una amplia gama de maquinaria y camiones especializados que nos permiten realizar desde el traslado interno en obra para la creación de acopios y su posterior reutilización, hasta el transporte a vertederos autorizados, plantas de tratamiento de residuos de construcción y demolición, o centros de valorización y eliminación.",
      "Gracias a nuestra sólida experiencia y a una flota preparada para todo tipo de exigencias, estamos capacitados tanto para grandes movimientos con maquinaria de más de 40 toneladas, como para intervenciones más específicas que requieren retroexcavadoras y camiones de menor tamaño.",
      "En DOSMAS GRUP nos adaptamos a cada necesidad, ofreciendo un servicio ágil, seguro y fiable, ya se trate de un transporte puntual o de un proyecto de gran envergadura."
    ],
    gallery: defaultGallery
  },
  {
    slug: "suministro-de-agua-en-mallorca",
    title: "𝐒𝐮𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐨 𝐝𝐞 𝐚𝐠𝐮𝐚 𝐞𝐧 𝐌𝐚𝐥𝐥𝐨𝐫𝐜𝐚",
    paragraphs: [
      "En DOSMAS GRUP ofrecemos un servicio especializado de suministro de agua potable en toda la isla de Mallorca, garantizando calidad, rapidez y total seguridad. Atendemos las necesidades de viviendas particulares, comunidades de vecinos, hoteles, villas, piscinas y todo tipo de empresas.",
      "Nuestra flota de camiones cisterna de hasta 25.000 litros, equipada con sistemas de autobombas y equipos de impulsión capaces de abastecer incluso a terceros pisos, asegura una distribución eficiente y sin demoras.",
      "Ponemos a disposición de cada cliente nuestra experiencia, seriedad y compromiso, ofreciendo presupuestos personalizados sin compromiso y un servicio de confianza que responde con eficacia a cualquier necesidad de abastecimiento de agua."
    ],
    gallery: defaultGallery
  },
  {
    slug: "machacas-cribado-zahorras-y-aridos",
    title: "Machacas, cribado, zahorras y áridos",
    paragraphs: [
      "En DOSMAS GRUP nos especializamos en la producción y suministro de áridos de la más alta calidad, tanto en su versión natural cribada como en formatos de árido reciclado. Ponemos a disposición de nuestros clientes una amplia variedad de materiales adaptados a cada proyecto:",
      "Nuestra experiencia y el uso de tecnología de trituración y cribado de última generación nos permiten superar las expectativas de cada cliente, siempre con un compromiso firme hacia la calidad, la seguridad y el respeto medioambiental."
    ],
    bullets: [
      "Gravillas silíceas para drenajes y hormigones.",
      "Morro para encachados, drenajes y gaviones.",
      "Arenas de río silíceas para construcción.",
      "Arenas para alberos en plazas de toros y parques.",
      "Arenas de miga para usos constructivos.",
      "Polvo calizo para superficies y zonas verdes.",
      "Zahorras naturales y artificiales para compactación de plataformas.",
      "Escolleras para cauces y estabilización de taludes.",
      "Diversos áridos reciclados, desde zahorras hasta materiales drenantes."
    ],
    gallery: defaultGallery
  },
  {
    slug: "desbroces-y-trabajos-agricolas",
    title: "Desbroces y trabajos agrícolas",
    paragraphs: [
      "En DOSMAS GRUP realizamos saneamiento y limpieza de terrenos o fincas en cualquier estado, así como desbroces de grandes superficies. Nuestra experiencia nos permite ofrecer soluciones adaptadas a cada necesidad: desde desbroces totales, hasta parciales o selectivos, centrados en plantas o arbustos concretos, garantizando siempre un servicio profesional, seguro y sin imprevistos.",
      "Contamos con un equipo de operarios especializados que ejecutan cada trabajo con precisión y compromiso, respaldados por maquinaria avanzada y una planificación minuciosa.",
      "Además, gestionamos de forma integral todas las fases de la intervención: desde la acción mecánica de limpieza y preparación del terreno hasta, si el proyecto lo requiere, la aplicación controlada de tratamientos fitosanitarios como insecticidas y herbicidas, siempre bajo los más altos criterios de seguridad y respeto al medio ambiente."
    ],
    gallery: defaultGallery
  },
  {
    slug: "zanjas-y-cimientos",
    title: "Zanjas y cimientos",
    paragraphs: [
      "En DOSMAS GRUP somos especialistas en proyectos de zanjeo, canalización y excavación, ofreciendo todos los servicios necesarios para que cada trabajo se desarrolle con las máximas garantías. Gracias a nuestra maquinaria propia y de última generación, ejecutamos con precisión y eficacia zanjas de cualquier anchura o profundidad, adaptándonos a las características del terreno y a las necesidades de cada obra.",
      "Nuestra amplia trayectoria de más de 70 años avala la calidad de los servicios que prestamos en zanjas, canalizaciones y movimientos de suelo, donde empleamos equipos como zanjadoras de cadena y retroexcavadoras, garantizando resultados seguros y duraderos.",
      "Contar con flota y maquinaria en propiedad nos permite asegurar un mantenimiento óptimo, rapidez en la ejecución y la mejor relación entre calidad y coste, sin exigir volúmenes mínimos de trabajo para la puesta en marcha de nuestras zanjadoras.",
      "Equipos y herramientas especializadas:"
    ],
    bullets: [
      "Cazos criba",
      "Martillos hidráulicos",
      "Ripper",
      "Cazos de limpieza",
      "Cazos cuneteros",
      "Cazos delta (para roca)"
    ],
    gallery: defaultGallery
  },
  {
    slug: "explanaciones",
    title: "Explanaciones",
    paragraphs: [
      "En DOSMAS GRUP hemos perfeccionado el servicio de explanación, transformando y adecuando el terreno natural para lograr la geometría exacta definida en cada proyecto. Realizamos trabajos de explanación, excavaciones y retirada de material, siempre con la maquinaria adecuada y un equipo de profesionales especializados que garantizan precisión y seguridad en cada fase de la obra.",
      "Cuando se trata de grandes movimientos de tierra, desmontes o terraplenes de gran volumen, disponemos de maquinaria pesada de alto rendimiento, preparada para adaptarse a terrenos complejos y afrontar con solvencia los mayores desafíos.",
      "En DOSMAS GRUP contamos con los recursos, la experiencia y la tecnología necesarios para convertir cada explanación en una base sólida y fiable sobre la que construir el futuro."
    ],
    gallery: defaultGallery
  },
  {
    slug: "arreglo-y-acondicionamiento-de-caminos-y-carreteras",
    title: "Arreglo y acondicionamiento de caminos y carreteras",
    paragraphs: [
      "En DOSMAS GRUP ampliamos continuamente nuestra oferta de servicios, incorporando el acondicionamiento y conservación de infraestructuras viarias. Actuamos sobre márgenes, travesías, glorietas, isletas, arquetas, muros y cimentaciones, aplicando tratamientos específicos en taludes mediante escolleras, sistemas de drenaje y plantaciones. Asimismo, realizamos desbroces manuales y siegas en glorietas, rotondas y cruces para garantizar la seguridad y la integración paisajística.",
      "Estamos especializados en el arreglo y acondicionamiento de caminos, adaptando los materiales y técnicas a las características de cada terreno.",
      "Nuestro equipo se encarga de las labores de desbroce, limpieza y preparación de caminos y accesos, ofreciendo siempre un servicio eficaz y de calidad que asegura una base sólida para futuras edificaciones y un uso seguro de las vías."
    ],
    gallery: defaultGallery
  },
  {
    slug: "cimentaciones-en-edificios",
    title: "Cimentaciones en edificios",
    paragraphs: [
      "Las cimentaciones son la base que garantiza la seguridad y estabilidad de cualquier edificación. En DOSMAS GRUP nos encargamos de todo el proceso: desde los movimientos de tierra iniciales, pasando por el transporte del material extraído, hasta la ejecución de los cimientos que sostendrán la construcción.",
      "Nuestra experiencia, junto con el uso de maquinaria especializada y un equipo altamente cualificado, nos permite asegurar resultados sólidos, duraderos y plenamente confiables en cada proyecto."
    ],
    gallery: defaultGallery
  },
  {
    slug: "obras-hidraulicas",
    title: "Obras hidráulicas",
    paragraphs: [
      "En DOSMAS GRUP hemos consolidado una sólida experiencia en la construcción, rehabilitación, mantenimiento y conservación de infraestructuras hidráulicas, un ámbito en el que nuestra empresa ha ganado un papel protagonista en las Illes Balears.",
      "Se trata de proyectos de gran complejidad técnica, que exigen soluciones especializadas como estructuras circulares de hormigón, encofrados a una cara, sistemas trepantes y montajes de andamios de alta precisión.",
      "Gracias a nuestra tecnología de vanguardia y a un equipo de profesionales expertos, ofrecemos siempre la mejor respuesta para cada obra, garantizando seguridad, calidad y eficiencia sin importar el nivel de dificultad del proyecto."
    ],
    gallery: defaultGallery
  },
  {
    slug: "escolleras",
    title: "Escolleras",
    paragraphs: [
      "En DOSMAS GRUP ofrecemos un servicio especializado en la construcción de escolleras y acondicionamiento de terrenos, así como en excavaciones y dragados de diversa magnitud. Nuestro equipo de profesionales ejecuta con precisión obras de laminación y drenaje de cauces hídricos, la construcción de muros de contención y la realización de escolleras decorativas, siempre respaldados por tecnología avanzada y maquinaria de alto rendimiento que aseguran resultados de gran calidad.",
      "Hoy en día estamos plenamente preparados para acometer proyectos de escolleras de contención de cualquier tamaño, garantizando la máxima seguridad, el cumplimiento de la normativa vigente y la protección del medio ambiente. Todo ello con la seriedad y compromiso que distinguen a DOSMAS GRUP, asegurando a nuestros clientes solidez, confianza y cumplimiento de plazos."
    ],
    gallery: defaultGallery
  },
  {
    slug: "otros-servicios",
    title: "Otros servicios",
    paragraphs: [
      "En DOSMAS GRUP también nos encargamos de la construcción de embalses adaptados a diferentes necesidades: desde el riego agrícola, hasta el abastecimiento doméstico, industrial o ganadero.",
      "Cada proyecto se ejecuta con la tecnología adecuada, materiales de máxima calidad y un equipo experto, garantizando infraestructuras seguras, eficientes y preparadas para perdurar en el tiempo."
    ],
    gallery: defaultGallery
  }
];

export type ServiceMeta = {
  category: string;
  ctaLabel: string;
  relatedProjects: string[];
};

export const serviceMetaBySlug: Record<string, ServiceMeta> = {
  excavaciones: {
    category: "Movimiento de tierras",
    ctaLabel: "Solicitar estudio de excavación",
    relatedProjects: ["excavacion-en-son-vida", "preparacion-terreno-son-ribotet"]
  },
  "derribos-y-demoliciones": {
    category: "Demoliciones",
    ctaLabel: "Solicitar plan de demolición",
    relatedProjects: ["demolicion-en-santa-ponca", "demolicion-aeropuerto-de-palma"]
  },
  desmontes: {
    category: "Movimiento de tierras",
    ctaLabel: "Solicitar propuesta técnica",
    relatedProjects: ["preparacion-terreno-son-ribotet", "excavacion-en-son-vida"]
  },
  cimentaciones: {
    category: "Geotecnia y cimentación",
    ctaLabel: "Solicitar estudio de cimentación",
    relatedProjects: ["construccion-casa-en-son-vida", "excavacion-en-son-vida"]
  },
  "terraplenes-y-compactaciones": {
    category: "Movimiento de tierras",
    ctaLabel: "Solicitar control de compactación",
    relatedProjects: ["preparacion-terreno-son-ribotet", "remodelacion-placa-des-mercat"]
  },
  "piedra-y-machaca": {
    category: "Áridos",
    ctaLabel: "Solicitar suministro de áridos",
    relatedProjects: ["preparacion-terreno-son-ribotet", "remodelacion-placa-des-mercat"]
  },
  "transporte-de-maquinaria": {
    category: "Logística",
    ctaLabel: "Solicitar transporte especializado",
    relatedProjects: ["demolicion-aeropuerto-de-palma", "demolicion-en-santa-ponca"]
  },
  "transporte-de-tierras": {
    category: "Logística",
    ctaLabel: "Solicitar transporte de tierras",
    relatedProjects: ["excavacion-en-son-vida", "preparacion-terreno-son-ribotet"]
  },
  "suministro-de-agua-en-mallorca": {
    category: "Suministros",
    ctaLabel: "Solicitar suministro de agua",
    relatedProjects: ["construccion-casa-en-son-vida", "demolicion-aeropuerto-de-palma"]
  },
  "machacas-cribado-zahorras-y-aridos": {
    category: "Áridos",
    ctaLabel: "Solicitar catálogo de materiales",
    relatedProjects: ["remodelacion-placa-des-mercat", "preparacion-terreno-son-ribotet"]
  },
  "desbroces-y-trabajos-agricolas": {
    category: "Agrícola y forestal",
    ctaLabel: "Solicitar actuación agrícola",
    relatedProjects: ["preparacion-terreno-son-ribotet"]
  },
  "zanjas-y-cimientos": {
    category: "Canalizaciones",
    ctaLabel: "Solicitar zanjeo y canalización",
    relatedProjects: ["construccion-casa-en-son-vida", "remodelacion-placa-des-mercat"]
  },
  explanaciones: {
    category: "Movimiento de tierras",
    ctaLabel: "Solicitar explanación",
    relatedProjects: ["excavacion-en-son-vida", "preparacion-terreno-son-ribotet"]
  },
  "arreglo-y-acondicionamiento-de-caminos-y-carreteras": {
    category: "Obra viaria",
    ctaLabel: "Solicitar acondicionamiento viario",
    relatedProjects: ["remodelacion-placa-des-mercat", "demolicion-aeropuerto-de-palma"]
  },
  "cimentaciones-en-edificios": {
    category: "Edificación",
    ctaLabel: "Solicitar cimentación de edificio",
    relatedProjects: ["construccion-casa-en-son-vida"]
  },
  "obras-hidraulicas": {
    category: "Infraestructura",
    ctaLabel: "Solicitar obra hidráulica",
    relatedProjects: ["remodelacion-placa-des-mercat", "demolicion-aeropuerto-de-palma"]
  },
  escolleras: {
    category: "Contención y drenaje",
    ctaLabel: "Solicitar ejecución de escollera",
    relatedProjects: ["demolicion-en-santa-ponca", "preparacion-terreno-son-ribotet"]
  },
  "otros-servicios": {
    category: "Servicios especiales",
    ctaLabel: "Solicitar asesoramiento",
    relatedProjects: ["preparacion-terreno-son-ribotet", "excavacion-en-son-vida"]
  }
};

function buildServiceGallery(relatedProjects: string[]): string[] {
  const uniqueImages = Array.from(
    new Set(
      relatedProjects.flatMap((projectSlug) => {
        const project = projectsBySlug[projectSlug];
        if (!project) {
          return [];
        }

        return [project.image, ...project.gallery];
      })
    )
  );

  if (uniqueImages.length === 0) {
    return defaultGallery;
  }

  if (uniqueImages.length <= 4) {
    return uniqueImages;
  }

  return [0, 1, 2, 3].map((slot) => {
    const index = Math.min(
      uniqueImages.length - 1,
      Math.floor((slot * (uniqueImages.length - 1)) / 3)
    );
    return uniqueImages[index];
  });
}

export const servicesData: ServiceItem[] = baseServicesData.map((service) => ({
  ...service,
  gallery: buildServiceGallery(serviceMetaBySlug[service.slug]?.relatedProjects ?? [])
}));

export const servicesBySlug = Object.fromEntries(
  servicesData.map((service) => [service.slug, service])
) as Record<string, ServiceItem>;
