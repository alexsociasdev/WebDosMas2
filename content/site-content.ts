import { type Locale } from "@/lib/i18n";

export type NavigationLink = {
  label: string;
  href: string;
};

export type RootsLink = {
  label: string;
  href: string;
};

export type HeritagePhoto = {
  id: string;
  title: string;
  image: string;
};

export type OfficeLocation = {
  label: string;
  shortAddress: string;
  lines: string[];
  phone: string;
  email: string;
  mapQuery: string;
};

export type BrandDetail = {
  name: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type EditorialBlock = {
  title: string;
  text: string;
  bullets?: string[];
  text2?: string;
};

export type CookiePolicyContent = {
  title: string;
  paragraphs: string[];
  integratedPolicyTitle: string;
  integratedPolicyIntro: string;
  integratedPolicyAreas: string[];
  integratedPolicyParagraphs: string[];
  integratedPolicyCommitments: string[];
};

export type SiteContentBundle = {
  navigationLinks: NavigationLink[];
  rootsLink: RootsLink;
  officeLocations: {
    petra: OfficeLocation;
    palma: OfficeLocation;
  };
  homeIntroParagraphs: string[];
  aboutUsContent: {
    title: string;
    paragraphs: string[];
    bullets: string[];
  };
  editorialSection: {
    blocks: EditorialBlock[];
  };
  brandsSection: {
    title: string;
    subtitle: string;
    paragraphs: string[];
  };
  brandDetails: BrandDetail[];
  teamSection: {
    title: string;
    paragraphs: string[];
  };
  valuesSection: Array<{
    title: string;
    text: string;
  }>;
  trustSection: {
    title: string;
    bullets: string[];
    youtubeLabel: string;
    youtubeUrl: string;
  };
  dossierLink: {
    title: string;
    text: string;
    href: string;
  };
  rscContent: {
    title: string;
    paragraphs: string[];
    galleryPlaceholder: string;
  };
  legalDataContent: {
    title: string;
    paragraphs: string[];
  };
  privacyPolicyContent: {
    title: string;
    paragraphs: string[];
  };
  cookiePolicyContent: CookiePolicyContent;
  footerCorporateData: string[];
};

const heritageOrder = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 1];

export const heritagePhotos: HeritagePhoto[] = heritageOrder.map((photoNumber, index) => {
  const order = String(photoNumber).padStart(2, "0");

  return {
    id: `heritage-${index + 1}`,
    title: `FOTO ${photoNumber}`,
    image: `/images/heritage/foto-${order}.jpg`
  };
});

const sharedTrustYoutubeUrl = "https://www.youtube.com/embed/J6mzhScLlzY?start=8";
const sharedDossierHref = "https://qrco.de/bcQVeg";
const sharedPetraPhone = "971 09 60 12";
const sharedPetraEmail = "info@dosmasgrup.com";

const siteContentByLocale: Record<Locale, SiteContentBundle> = {
  es: {
    navigationLinks: [
      { label: "Nosotros", href: "/nosotros" },
      { label: "Proyectos", href: "/proyectos" },
      { label: "Áreas de trabajo", href: "/areas-de-trabajo" },
      { label: "Noticias", href: "/noticias" },
      { label: "RSC", href: "/rsc" },
      { label: "Contacto", href: "/contacto" }
    ],
    rootsLink: {
      label: "NUESTRAS RAÍCES",
      href: "/nuestras-raices"
    },
    officeLocations: {
      petra: {
        label: "Oficina Central-Petra",
        shortAddress: "Ctra. Petra-Santa Margalida, km 1,3 · 07520 Petra - Mallorca",
        lines: ["Ctra. Petra-Santa Margalida, km 1,3", "07520 Petra - Mallorca"],
        phone: sharedPetraPhone,
        email: sharedPetraEmail,
        mapQuery: "Ctra. Petra-Santa Margalida km 1.3, 07520 Petra, Mallorca"
      },
      palma: {
        label: "Delegación de Palma",
        shortAddress: "Edificio Vip Asima, Gremi des Fusters, 33 · Local 6 - Planta 3ª · 07009 Palma",
        lines: [
          "Edificio Vip Asima, Gremi des Fusters, 33",
          "Local 6 - Planta 3ª",
          "Palma, Illes Balears 07009"
        ],
        phone: sharedPetraPhone,
        email: sharedPetraEmail,
        mapQuery: "Edificio Vip Asima, Gremi des Fusters 33, Local 6, Planta 3, 07009 Palma, Illes Balears"
      }
    },
    homeIntroParagraphs: [
      "DOSMAS GRUP es un referente en el sector de las excavaciones y obras en Mallorca. Con más de 70 años de trayectoria, nos hemos consolidado como una empresa sólida, reconocida por nuestra profesionalidad, nuestro compromiso y la confianza que depositan en nosotros clientes de todo tipo, desde particulares hasta grandes compañías.",
      "Nuestra historia comenzó en 1954, cuando Guillem Mas y Mateu Mas, dos jóvenes primos de Maria de la Salut, decidieron emprender un camino que marcaría el futuro de la empresa. Desde una modesta cochera en Gavà (Barcelona), levantaron la primera fábrica de techos prefabricados bajo el nombre Techos DOS MAS, en homenaje a su apellido común. Aquella iniciativa, centrada en el transporte y la instalación de techos para viviendas y naves industriales, fue el primer paso de lo que hoy es un grupo empresarial consolidado y en constante evolución."
    ],
    aboutUsContent: {
      title: "Sobre nosotros",
      paragraphs: [
        "DOSMAS GRUP es un grupo de empresas especializado en excavaciones, movimientos de tierra y obras integrales, con sede en Mallorca. Con más de 70 años de experiencia, nos hemos consolidado como uno de los referentes más sólidos y representativos del sector en Baleares.",
        "Nuestra historia comenzó en 1954, cuando Guillem Mas y Mateu Mas, dos jóvenes primos de Maria de la Salut, emprendieron su camino empresarial en Gavà (Barcelona). Desde una humilde cochera fundaron la primera fábrica de techos prefabricados, que bautizaron con orgullo como Techos DOS MAS, en honor a su apellido común. Durante casi dos décadas, la empresa se consolidó con éxito en Cataluña, hasta que, en 1972, tras la retirada de Guillem Mas, la actividad entró en pausa.",
        "En 1999, los hermanos Guillem y Miquel Mas, nietos del fundador, tomaron el relevo generacional y reactivaron la compañía, iniciando una nueva etapa de modernización, diversificación y crecimiento. Desde entonces, DOSMAS GRUP ha evolucionado hasta convertirse en una empresa de referencia en la gestión de proyectos de construcción y obra civil.",
        "Hoy en día ofrecemos un servicio integral, que abarca:",
        "Nuestra esencia sigue siendo la de una empresa familiar, que mantiene los valores de sus orígenes: compromiso, profesionalidad y cercanía. Apostamos por un servicio especializado y de calidad, con resultados que no solo garantizan la excelencia, sino también la durabilidad y la seguridad en cada proyecto.",
        "Contamos con un equipo humano altamente cualificado formado por más de 200 profesionales, respaldado por una flota de más de 150 vehículos y más de 150 máquinas en activo. Nuestra maquinaria, sometida a un mantenimiento riguroso y equipada con la última tecnología, nos permite garantizar eficacia, productividad y seguridad en cada obra.",
        "Actualmente desarrollamos proyectos en Mallorca, Menorca e Ibiza, trabajando tanto para clientes particulares como para entidades públicas y privadas, comunidades y empresas de todos los sectores. Cada proyecto comienza con la idea de nuestro cliente, y a partir de ahí sumamos nuestra experiencia, conocimientos y métodos para dar forma a soluciones integrales que aseguran la plena satisfacción y confianza de quienes nos eligen.",
        "DOSMAS GRUP: + 70 años construyendo confianza, solidez y futuro en Baleares."
      ],
      bullets: [
        "Excavaciones y movimientos de tierra.",
        "Demoliciones y derribos.",
        "Acondicionamiento y preparación de terrenos.",
        "Construcción y obra civil.",
        "Reformas y proyectos de edificación en general."
      ]
    },
    editorialSection: {
      blocks: [
        {
          title: "El cliente, en el centro de cada proyecto",
          text: "En DOSMAS GRUP trabajamos con una clara convicción: cada proyecto comienza con las necesidades de nuestro cliente. Desde nuestros inicios en 1954 hemos evolucionado con una vocación de mejora continua, incorporando de manera constante los avances tecnológicos y las metodologías más innovadoras. Esto nos permite ofrecer un servicio integral de máxima calidad, que abarca todo el proceso constructivo, desde la planificación inicial hasta la entrega final."
        },
        {
          title: "Referente en el sector de la construcción en Baleares",
          text: "Con más de 70 años de experiencia, nos hemos consolidado como un grupo de referencia en las Islas Baleares, desarrollando proyectos de gran envergadura en diversos ámbitos:",
          bullets: [
            "Obra civil y pública",
            "Construcción y edificación para particulares, empresas y grandes infraestructuras",
            "Reformas, rehabilitación y acondicionamiento de terrenos"
          ]
        },
        {
          title: "Nuestro valor añadido: confianza y excelencia",
          text: "Nuestra trayectoria nos ha permitido perfeccionar cada uno de los procesos, siempre con un objetivo claro: garantizar la máxima calidad, seguridad y durabilidad en nuestras obras. Apostamos por la innovación y la incorporación de tecnología avanzada, respaldada por un equipo humano altamente cualificado y una flota de maquinaria moderna, sometida a un riguroso mantenimiento.",
          text2:
            "En la actualidad, DOSMAS GRUP sigue creciendo con la mirada puesta en el futuro, aplicando criterios de excelencia en cada fase del trabajo y ofreciendo soluciones integrales que aseguran la plena satisfacción de nuestros clientes."
        }
      ]
    },
    brandsSection: {
      title: "NUESTRAS MARCA: Dosmas Obras y Proyectos, Coexma Obres i Serveis, Tot Natura y Pintura 3V.",
      subtitle: "Nuestras marcas especializadas, una estructura sólida",
      paragraphs: [
        "DOSMAS GRUP se articula en cuatro unidades de negocio: Dosmas Obras y Proyectos, Coexma Obres i Serveis, Tot Natura y Pintura 3V.",
        "Juntas conforman una estructura sólida y versátil que nos permite abordar proyectos de cualquier magnitud, ofreciendo soluciones integrales que van desde la construcción de obra nueva hasta la rehabilitación y reformas, pasando por excavaciones, movimientos de tierra, demoliciones y derribos.",
        "Además, desarrollamos infraestructuras esenciales como sistemas de saneamiento y abastecimiento, trabajos agrícolas, así como proyectos de obra civil y pública.",
        "Nuestro objetivo global es único: ofrecer un servicio de máxima calidad en cada fase del proceso, garantizando confianza, solidez y resultados que perduran en el tiempo."
      ]
    },
    brandDetails: [
      {
        name: "Dosmas Obras y Proyectos",
        title: "Especialistas en obra y servicios integrales",
        paragraphs: [
          "En DOSMAS GRUP contamos con más de siete décadas de experiencia que nos avalan como especialistas en excavaciones, movimientos de tierra, demoliciones, derribos y ejecución de infraestructuras clave como sistemas de saneamiento, redes de abastecimiento, obra civil, pública y proyectos de construcción en general.",
          "Ofrecemos soluciones adaptadas a particulares, empresas y entidades públicas en toda la comunidad de las Illes Balears, con un enfoque integral que garantiza resultados de calidad, seguridad y durabilidad.",
          "Si necesita un contratista de confianza para llevar a cabo su excavación, derribo o proyecto constructivo, en DOSMAS GRUP encontrará a su mejor aliado. Nuestra profesionalidad, seriedad y eficacia, unidas a la potencia de nuestra maquinaria y al compromiso de nuestro equipo humano, nos han consolidado como líderes en el sector."
        ]
      },
      {
        name: "Coexma Obres i Serveis",
        title: "Construcción y reformas con garantía de confianza",
        paragraphs: [
          "En DOSMAS GRUP llevamos a cabo obras de nueva construcción y proyectos de reforma en todo tipo de inmuebles: desde viviendas unifamiliares, chalets, casas adosadas y apartamentos, hasta hoteles y edificios residenciales completos.",
          "Nuestra experiencia también abarca la construcción de naves e instalaciones industriales, así como locales comerciales y oficinas corporativas, ofreciendo siempre espacios funcionales, seguros y adaptados a las necesidades de cada cliente.",
          "Cada proyecto es estudiado de forma personalizada, buscando las mejores soluciones técnicas y constructivas para garantizar no solo la máxima calidad, sino también el cumplimiento riguroso de los plazos de entrega.",
          "Además, participamos activamente en proyectos de obra pública y civil, contribuyendo al desarrollo y modernización de las infraestructuras de nuestras islas."
        ]
      },
      {
        name: "Tot Natura",
        title: "Servicios agrícolas y forestales",
        paragraphs: [
          "En DOSMAS GRUP ponemos nuestra experiencia y capacidad técnica al servicio del sector agrícola y forestal, trabajando en Mallorca y en el resto de las Illes Balears.",
          "Gracias a nuestro equipo especializado y a la utilización de maquinaria avanzada, garantizamos resultados eficaces, seguros y respetuosos con el entorno natural, contribuyendo al desarrollo sostenible del campo balear."
        ],
        bullets: [
          "Trabajos forestales: limpieza y desmonte de terrenos, podas, cerramientos y vallados de fincas.",
          "Trabajos agrícolas: labores de barbecho, siembra y recolección de todo tipo de cultivos.",
          "Obra civil aplicada al ámbito rural: construcción de pozos, balsas, presas, embalses y sistemas de riego para fincas.",
          "Ingeniería y gestión agrícola: desarrollo de proyectos técnicos de ingeniería agrícola y civil, orientados a optimizar la gestión y productividad de las explotaciones."
        ]
      },
      {
        name: "Pintura 3V",
        title: "Fabricación de pintura propia",
        paragraphs: [
          "En DOSMAS GRUP contamos con una división especializada en la fabricación de pinturas de alta calidad, diseñadas para responder a las necesidades de todo tipo de proyectos, tanto de interior como de exterior.",
          "Nuestro equipo humano altamente cualificado supervisa cada fase del proceso: desde la formulación y creación hasta el control y verificación de la calidad, asegurando siempre los mejores resultados.",
          "Además, trabajamos bajo estrictos criterios de sostenibilidad y respeto medioambiental, garantizando productos que combinan durabilidad, resistencia y un acabado impecable, disponibles en una amplia gama de colores y acabados para adaptarse a cada espacio y estilo."
        ]
      }
    ],
    teamSection: {
      title: "Nuestro equipo, nuestra fuerza",
      paragraphs: [
        "En DOSMAS GRUP estamos convencidos de que el verdadero valor de una empresa reside en las personas que la forman. Por eso cuidamos y potenciamos a nuestro equipo humano, compuesto por más de 200 profesionales altamente cualificados, comprometidos y apasionados por su labor.",
        "Fomentamos la formación continua, la especialización y la innovación, asegurando que cada miembro de nuestro equipo se mantenga siempre a la vanguardia de las nuevas tecnologías y de las mejores técnicas constructivas.",
        "El resultado es un equipo unido, motivado y preparado para afrontar cualquier reto, capaz de transformar cada proyecto en una experiencia de calidad, confianza y excelencia, donde el trato cercano y personalizado marca la diferencia."
      ]
    },
    valuesSection: [
      {
        title: "PLAZOS, CALIDAD Y SEGURIDAD",
        text: "En DOSMAS GRUP sabemos que los plazos son esenciales. Por ello, optimizamos cada proceso para acortarlos al máximo, manteniendo siempre los más altos estándares de calidad, eficacia y seguridad en cada obra ejecutada."
      },
      {
        title: "TRABAJO EN EQUIPO",
        text: "Nuestro mayor valor es el equipo humano. Fomentamos la formación continua y el compromiso profesional, lo que nos permite contar con un personal altamente cualificado y motivado, preparado para superar con éxito cualquier desafío."
      },
      {
        title: "RESPETO Y CUIDADO DEL MEDIO AMBIENTE",
        text: "En DOSMAS GRUP cumplimos de forma estricta todas las normativas ambientales. Nuestra labor está guiada por un firme compromiso con la sostenibilidad y con la protección del entorno natural de las Illes Balears."
      },
      {
        title: "SATISFACCIÓN DEL CLIENTE",
        text: "Las personas y empresas que confían en nosotros son nuestra prioridad. Construimos relaciones de confianza y colaboración, asegurando una gestión eficiente de cada proyecto y un servicio que va mucho más allá del vínculo cliente–proveedor."
      }
    ],
    trustSection: {
      title: "¿POR QUÉ CONFIAR EN DOSMAS GRUP?",
      bullets: [
        "Porque amamos nuestro trabajo y lo vivimos con pasión cada día.",
        "Porque cumplimos rigurosamente los plazos, sin excusas.",
        "Porque respetamos al máximo las normativas medioambientales y gestionamos toda la documentación necesaria: licencias, permisos, autorizaciones, seguros y normativa vigente.",
        "Porque mantenemos siempre actualizada la documentación de nuestro personal, empresa, maquinaria y seguros.",
        "Porque contamos con una amplia flota de camiones propia.",
        "Porque disponemos de una gran variedad de maquinaria de última generación para movimientos de tierra y obra pública.",
        "Porque tenemos el mejor equipo humano: profesionales formados, cualificados y motivados.",
        "Porque nos respalda un equipo de ingenieros, talleres y mecánicos, junto a proveedores de confianza, que nos permite responder con eficacia en cualquier circunstancia.",
        "Porque nuestra máxima es la CALIDAD en cada proyecto.",
        "Y porque en DOSMAS GRUP creemos firmemente en nuestro compromiso: “WE ALWAYS COMPLY!” ¡Siempre cumplimos!"
      ],
      youtubeLabel: "ENLACE DE YOUTUBE",
      youtubeUrl: sharedTrustYoutubeUrl
    },
    dossierLink: {
      title: "DOSSIER CORPORATIVO",
      text: "Acceda al dossier corporativo de DOSMAS GRUP.",
      href: sharedDossierHref
    },
    rscContent: {
      title: "Responsabilidad Social Corporativa",
      paragraphs: [
        "La RSC de DOSMAS GRUP es el reflejo de nuestros valores y de nuestro compromiso con las personas. Apostamos por el desarrollo y la formación continua de nuestro equipo, fomentando un entorno laboral basado en la igualdad, la inclusión y el respeto a la diversidad.",
        "Colaboramos activamente con empresas y entidades sociales dedicadas a la inserción laboral, así como con equipos y eventos deportivos que fomentan la vida saludable y la cohesión comunitaria. Del mismo modo, mostramos siempre nuestra solidaridad en momentos difíciles: un claro ejemplo fue nuestra participación en las tareas de reconstrucción de los pueblos afectados por la DANA en Valencia, poniendo a disposición nuestros camiones, maquinaria y profesionales para ayudar a devolver la esperanza a quienes más lo necesitaban.",
        "En DOSMAS GRUP entendemos que crecer como empresa significa también aportar valor a la sociedad y al entorno que nos rodea."
      ],
      galleryPlaceholder: "Se aportan algunas fotos y pequeña descripción de las mismas."
    },
    legalDataContent: {
      title: "DATOS LEGALES",
      paragraphs: [
        "Este sitio web es propiedad de DOSMAS OBRAS Y PROYECTOS, S.L., sociedad de responsabilidad limitada inscrita en el Registro Mercantil de Palma de Mallorca.",
        "Denominación social: DOSMAS OBRAS Y PROYECTOS, S.L.",
        "NIF: B-57397655",
        "Forma jurídica: Sociedad Limitada",
        "Domicilio social: Carretera Petra – Santa Margalida, S/N, Parcela km 1,3 · 07520 Petra, Illes Balears, España",
        "Teléfono: 971 09 60 12"
      ]
    },
    privacyPolicyContent: {
      title: "POLÍTICA DE PRIVACIDAD",
      paragraphs: [
        "En DOSMAS GRUP cumplimos de manera rigurosa con la normativa vigente en materia de protección y tratamiento de datos personales, garantizando la seguridad y confidencialidad de toda la información que nos confían nuestros clientes y colaboradores.",
        "La navegación por nuestra página web no requiere registro, por lo que puede visitarla libremente sin necesidad de identificarse. No obstante, para determinados servicios —como la solicitud de información o presupuestos— será necesario facilitar algunos datos personales. En caso de no proporcionarlos, es posible que no podamos atender adecuadamente su petición.",
        "Durante todo el proceso de tratamiento de datos aplicamos medidas de seguridad técnicas y organizativas orientadas a evitar pérdidas, accesos no autorizados, usos indebidos, divulgaciones no consentidas o cualquier alteración de la información.",
        "Este sitio web utiliza Google Analytics, un servicio de análisis de Google, Inc. con sede en 1600 Amphitheatre Parkway, Mountain View (California), CA 94043, Estados Unidos. Esta herramienta nos ayuda a conocer aspectos como las páginas que visita, el tiempo de navegación o el origen del tráfico, con el único objetivo de mejorar de manera continua la experiencia de nuestros usuarios.",
        "Para ello, se emplean cookies, pequeños archivos de información que se almacenan en su navegador sin afectar al funcionamiento de su equipo. Los datos generados por estas cookies (incluida su dirección IP) pueden ser transmitidos y gestionados por Google, cumpliendo siempre con la normativa aplicable y, en determinados casos, puestos a disposición de terceros por requerimiento legal. Usted puede configurar su navegador para rechazar el uso de cookies; sin embargo, debe tener en cuenta que esto podría limitar algunas funcionalidades del sitio.",
        "Para más información sobre las cookies y su gestión puede consultar: www.allaboutcookies.org"
      ]
    },
    cookiePolicyContent: {
      title: "POLÍTICA DE COOKIES",
      paragraphs: [
        "El presente documento tiene como finalidad informar sobre la política de uso de cookies de los sitios web de DOSMAS OBRAS Y PROYECTOS, S.L., con domicilio social en Carretera Petra – Santa Margalida, S/N, Parcela km 1,3 · 07520 Petra, Illes Balears, España, y N.I.F. B-57397655.",
        "Los términos “Usted” y “Usuario” se utilizan para referirse a todas las personas físicas y/o jurídicas que accedan y naveguen por los sitios web de DOSMAS GRUP o hagan uso de sus servicios. El acceso y navegación por nuestras páginas implica la aceptación plena y sin reservas de la presente política de cookies.",
        "DOSMAS GRUP puede recopilar información sobre la navegación de los usuarios mediante archivos como cookies o registros log. Estos dispositivos se asocian de manera exclusiva a un usuario y a su propio equipo, y permiten almacenar datos técnicos como la dirección IP, el navegador utilizado, el tiempo de visita o las páginas consultadas, con el objetivo de facilitar la navegación y mejorar la experiencia de uso.",
        "Asimismo, utilizamos cookies de análisis web (como Google Analytics, servicio de Google Inc.) que nos permiten medir y analizar la interacción de los usuarios con nuestra web. La información obtenida es de carácter anónimo y se emplea únicamente para mejorar el funcionamiento, los contenidos y la usabilidad del sitio. En ningún caso se obtienen datos personales como nombre, apellidos o direcciones de contacto.",
        "En la siguiente tabla se detallan las cookies utilizadas en los sitios web de DOSMAS GRUP, junto con la información que recogen y su finalidad:",
        "El usuario puede revocar en cualquier momento el consentimiento otorgado para el uso de cookies modificando la configuración de su navegador. En los siguientes enlaces encontrará información sobre cómo gestionarlas según el navegador utilizado:"
      ],
      integratedPolicyTitle: "Política integrada de gestión",
      integratedPolicyIntro:
        "La actividad de DOSMAS GRUP se desarrolla en el ámbito de la construcción y las obras públicas y privadas en las Illes Balears, donde contamos con más de 70 años de experiencia que nos han consolidado como un grupo de referencia. Nuestro trabajo abarca áreas como:",
      integratedPolicyAreas: [
        "Rehabilitación, mantenimiento y reformas de viviendas y edificios.",
        "Construcción de obra nueva, tanto de viviendas unifamiliares como de complejos residenciales y turísticos.",
        "Obra civil e industrial, incluyendo infraestructuras, naves, instalaciones deportivas, hoteles y proyectos singulares."
      ],
      integratedPolicyParagraphs: [
        "El respaldo de nuestro equipo técnico y administrativo, junto con más de 200 profesionales y una flota propia de más de 150 máquinas y más de 150 vehículos, nos permite acometer proyectos de gran envergadura con plena garantía, asegurando calidad, seguridad, cumplimiento de plazos y respeto al medio ambiente.",
        "En DOSMAS GRUP asumimos y aplicamos de forma firme los principios de nuestra Política de Calidad, Seguridad, Salud Laboral y Medio Ambiente, basada en los siguientes compromisos:"
      ],
      integratedPolicyCommitments: [
        "Garantizar la satisfacción de nuestros clientes y colaboradores, cumpliendo con sus expectativas y los plazos establecidos.",
        "Fomentar en nuestro equipo una cultura de servicio, profesionalidad y eficiencia, ofreciendo siempre un trato cercano y soluciones de alto nivel.",
        "Potenciar la formación continua y la participación activa de nuestro personal en la mejora de los procesos y en la implementación de buenas prácticas.",
        "Asegurar la protección de la salud y seguridad de todas las personas involucradas, proporcionando entornos de trabajo seguros y condiciones adecuadas para prevenir riesgos y accidentes.",
        "Mantener un compromiso firme con la sostenibilidad y la protección del entorno, aplicando medidas que reduzcan el impacto ambiental y fomenten la conservación del medio natural.",
        "Cumplir estrictamente con la legislación vigente, normativas y requisitos que nuestra organización suscriba en materia de calidad, seguridad y medio ambiente.",
        "Establecer objetivos de mejora continua, revisados anualmente, para garantizar procesos cada vez más seguros, eficientes y sostenibles.",
        "Exigir en nuestras operaciones subcontratadas los mismos estándares de calidad, seguridad y respeto ambiental que aplicamos en nuestros propios trabajos.",
        "Con esta política integrada reafirmamos nuestra esencia: ser una empresa sólida, responsable y comprometida con nuestros clientes, nuestro equipo y el entorno que nos rodea."
      ]
    },
    footerCorporateData: [
      "DOSMAS OBRAS Y PROYECTOS, S.L.",
      "NIF: B-57397655",
      "Oficina Central-Petra · Ctra. Petra-Santa Margalida, km 1,3 · 07520 Petra - Mallorca",
      "Delegación de Palma · Edificio Vip Asima, Gremi des Fusters, 33 · Local 6 - Planta 3ª · 07009 Palma",
      "Teléfono: 971 09 60 12",
      "Email: info@dosmasgrup.com"
    ]
  },
  ca: {
    navigationLinks: [
      { label: "Nosaltres", href: "/nosotros" },
      { label: "Projectes", href: "/proyectos" },
      { label: "Àrees de treball", href: "/areas-de-trabajo" },
      { label: "Notícies", href: "/noticias" },
      { label: "RSC", href: "/rsc" },
      { label: "Contacte", href: "/contacto" }
    ],
    rootsLink: {
      label: "LES NOSTRES ARRELS",
      href: "/nuestras-raices"
    },
    officeLocations: {
      petra: {
        label: "Oficina Central-Petra",
        shortAddress: "Ctra. Petra-Santa Margalida, km 1,3 · 07520 Petra - Mallorca",
        lines: ["Ctra. Petra-Santa Margalida, km 1,3", "07520 Petra - Mallorca"],
        phone: sharedPetraPhone,
        email: sharedPetraEmail,
        mapQuery: "Ctra. Petra-Santa Margalida km 1.3, 07520 Petra, Mallorca"
      },
      palma: {
        label: "Delegació de Palma",
        shortAddress: "Edifici Vip Asima, Gremi des Fusters, 33 · Local 6 - Planta 3a · 07009 Palma",
        lines: [
          "Edifici Vip Asima, Gremi des Fusters, 33",
          "Local 6 - Planta 3a",
          "Palma, Illes Balears 07009"
        ],
        phone: sharedPetraPhone,
        email: sharedPetraEmail,
        mapQuery: "Edificio Vip Asima, Gremi des Fusters 33, Local 6, Planta 3, 07009 Palma, Illes Balears"
      }
    },
    homeIntroParagraphs: [
      "DOSMAS GRUP és un referent en el sector de les excavacions i les obres a Mallorca. Amb més de 70 anys de trajectòria, ens hem consolidat com una empresa sòlida, reconeguda per la nostra professionalitat, el nostre compromís i la confiança que dipositen en nosaltres clients de tota mena, des de particulars fins a grans companyies.",
      "La nostra història va començar el 1954, quan Guillem Mas i Mateu Mas, dos joves cosins de Maria de la Salut, varen decidir emprendre un camí que marcaria el futur de l'empresa. Des d'un modest garatge a Gavà (Barcelona), varen aixecar la primera fàbrica de sostres prefabricats sota el nom de Techos DOS MAS, en homenatge al seu llinatge comú. Aquella iniciativa, centrada en el transport i la instal·lació de sostres per a habitatges i naus industrials, va ser el primer pas del que avui és un grup empresarial consolidat i en evolució constant."
    ],
    aboutUsContent: {
      title: "Sobre nosaltres",
      paragraphs: [
        "DOSMAS GRUP és un grup d'empreses especialitzat en excavacions, moviments de terra i obres integrals, amb seu a Mallorca. Amb més de 70 anys d'experiència, ens hem consolidat com un dels referents més sòlids i representatius del sector a les Balears.",
        "La nostra història va començar el 1954, quan Guillem Mas i Mateu Mas, dos joves cosins de Maria de la Salut, varen emprendre el seu camí empresarial a Gavà (Barcelona). Des d'un humil garatge varen fundar la primera fàbrica de sostres prefabricats, que varen batejar amb orgull com a Techos DOS MAS, en honor al seu llinatge comú. Durant gairebé dues dècades, l'empresa es va consolidar amb èxit a Catalunya, fins que, el 1972, després de la retirada de Guillem Mas, l'activitat va entrar en pausa.",
        "L'any 1999, els germans Guillem i Miquel Mas, nets del fundador, varen prendre el relleu generacional i varen reactivar la companyia, iniciant una nova etapa de modernització, diversificació i creixement. Des de llavors, DOSMAS GRUP ha evolucionat fins a convertir-se en una empresa de referència en la gestió de projectes de construcció i obra civil.",
        "Avui dia oferim un servei integral, que inclou:",
        "La nostra essència continua essent la d'una empresa familiar, que manté els valors dels seus orígens: compromís, professionalitat i proximitat. Apostam per un servei especialitzat i de qualitat, amb resultats que no només garanteixen l'excel·lència, sinó també la durabilitat i la seguretat en cada projecte.",
        "Comptam amb un equip humà altament qualificat format per més de 200 professionals, avalat per una flota de més de 150 vehicles i més de 150 màquines en actiu. La nostra maquinària, sotmesa a un manteniment rigorós i equipada amb la darrera tecnologia, ens permet garantir eficàcia, productivitat i seguretat en cada obra.",
        "Actualment desenvolupam projectes a Mallorca, Menorca i Eivissa, treballant tant per a clients particulars com per a entitats públiques i privades, comunitats i empreses de tots els sectors. Cada projecte comença amb la idea del nostre client i, a partir d'aquí, hi afegim experiència, coneixement i metodologia per donar forma a solucions integrals que asseguren la plena satisfacció i confiança de qui ens tria.",
        "DOSMAS GRUP: + 70 anys construint confiança, solidesa i futur a les Balears."
      ],
      bullets: [
        "Excavacions i moviments de terra.",
        "Demolicions i enderrocs.",
        "Condicionament i preparació de terrenys.",
        "Construcció i obra civil.",
        "Reformes i projectes d'edificació en general."
      ]
    },
    editorialSection: {
      blocks: [
        {
          title: "El client, al centre de cada projecte",
          text: "A DOSMAS GRUP treballam amb una convicció clara: cada projecte comença amb les necessitats del nostre client. Des dels nostres inicis el 1954 hem evolucionat amb una vocació de millora contínua, incorporant de manera constant els avenços tecnològics i les metodologies més innovadores. Això ens permet oferir un servei integral de màxima qualitat que abraça tot el procés constructiu, des de la planificació inicial fins al lliurament final."
        },
        {
          title: "Referent en el sector de la construcció a les Balears",
          text: "Amb més de 70 anys d'experiència, ens hem consolidat com un grup de referència a les Illes Balears, desenvolupant projectes de gran envergadura en diversos àmbits:",
          bullets: [
            "Obra civil i pública",
            "Construcció i edificació per a particulars, empreses i grans infraestructures",
            "Reformes, rehabilitació i condicionament de terrenys"
          ]
        },
        {
          title: "El nostre valor afegit: confiança i excel·lència",
          text: "La nostra trajectòria ens ha permès perfeccionar cadascun dels processos, sempre amb un objectiu clar: garantir la màxima qualitat, seguretat i durabilitat a les nostres obres. Apostam per la innovació i la incorporació de tecnologia avançada, avalada per un equip humà altament qualificat i una flota de maquinària moderna, sotmesa a un manteniment rigorós.",
          text2:
            "Actualment, DOSMAS GRUP continua creixent amb la mirada posada en el futur, aplicant criteris d'excel·lència en cada fase del treball i oferint solucions integrals que asseguren la plena satisfacció dels nostres clients."
        }
      ]
    },
    brandsSection: {
      title: "LES NOSTRES MARQUES: Dosmas Obras y Proyectos, Coexma Obres i Serveis, Tot Natura i Pintura 3V.",
      subtitle: "Les nostres marques especialitzades, una estructura sòlida",
      paragraphs: [
        "DOSMAS GRUP s'articula en quatre unitats de negoci: Dosmas Obras y Proyectos, Coexma Obres i Serveis, Tot Natura i Pintura 3V.",
        "Juntes conformen una estructura sòlida i versàtil que ens permet abordar projectes de qualsevol magnitud, oferint solucions integrals que van des de la construcció d'obra nova fins a la rehabilitació i les reformes, passant per excavacions, moviments de terra, demolicions i enderrocs.",
        "A més, desenvolupam infraestructures essencials com sistemes de sanejament i abastament, treballs agrícoles, així com projectes d'obra civil i pública.",
        "El nostre objectiu global és únic: oferir un servei de màxima qualitat en cada fase del procés, garantint confiança, solidesa i resultats que perduren en el temps."
      ]
    },
    brandDetails: [
      {
        name: "Dosmas Obras y Proyectos",
        title: "Especialistes en obra i serveis integrals",
        paragraphs: [
          "A DOSMAS GRUP comptam amb més de set dècades d'experiència que ens avalen com a especialistes en excavacions, moviments de terra, demolicions, enderrocs i execució d'infraestructures clau com sistemes de sanejament, xarxes d'abastament, obra civil, pública i projectes de construcció en general.",
          "Oferim solucions adaptades a particulars, empreses i entitats públiques de tota la comunitat de les Illes Balears, amb un enfocament integral que garanteix resultats de qualitat, seguretat i durabilitat.",
          "Si necessita un contractista de confiança per dur a terme la seva excavació, enderroc o projecte constructiu, a DOSMAS GRUP trobarà el seu millor aliat. La nostra professionalitat, serietat i eficàcia, unides a la potència de la nostra maquinària i al compromís del nostre equip humà, ens han consolidat com a líders del sector."
        ]
      },
      {
        name: "Coexma Obres i Serveis",
        title: "Construcció i reformes amb garantia de confiança",
        paragraphs: [
          "A DOSMAS GRUP duim a terme obres de nova construcció i projectes de reforma en tot tipus d'immobles: des d'habitatges unifamiliars, xalets, cases adossades i apartaments, fins a hotels i edificis residencials complets.",
          "La nostra experiència també abasta la construcció de naus i instal·lacions industrials, així com locals comercials i oficines corporatives, oferint sempre espais funcionals, segurs i adaptats a les necessitats de cada client.",
          "Cada projecte s'estudia de manera personalitzada, cercant les millors solucions tècniques i constructives per garantir no només la màxima qualitat, sinó també el compliment rigorós dels terminis de lliurament.",
          "A més, participam activament en projectes d'obra pública i civil, contribuint al desenvolupament i la modernització de les infraestructures de les nostres illes."
        ]
      },
      {
        name: "Tot Natura",
        title: "Serveis agrícoles i forestals",
        paragraphs: [
          "A DOSMAS GRUP posam la nostra experiència i capacitat tècnica al servei del sector agrícola i forestal, treballant a Mallorca i a la resta de les Illes Balears.",
          "Gràcies al nostre equip especialitzat i a la utilització de maquinària avançada, garantim resultats eficaços, segurs i respectuosos amb l'entorn natural, contribuint al desenvolupament sostenible del camp balear."
        ],
        bullets: [
          "Treballs forestals: neteja i desbrossament de terrenys, podes, tancaments i barrats de finques.",
          "Treballs agrícoles: tasques de guaret, sembra i collita de tot tipus de conreus.",
          "Obra civil aplicada a l'àmbit rural: construcció de pous, basses, preses, embassaments i sistemes de reg per a finques.",
          "Enginyeria i gestió agrícola: desenvolupament de projectes tècnics d'enginyeria agrícola i civil, orientats a optimitzar la gestió i la productivitat de les explotacions."
        ]
      },
      {
        name: "Pintura 3V",
        title: "Fabricació de pintura pròpia",
        paragraphs: [
          "A DOSMAS GRUP comptam amb una divisió especialitzada en la fabricació de pintures d'alta qualitat, dissenyades per respondre a les necessitats de tot tipus de projectes, tant d'interior com d'exterior.",
          "El nostre equip humà altament qualificat supervisa cada fase del procés: des de la formulació i la creació fins al control i la verificació de la qualitat, assegurant sempre els millors resultats.",
          "A més, treballam sota estrictes criteris de sostenibilitat i respecte mediambiental, garantint productes que combinen durabilitat, resistència i un acabat impecable, disponibles en una àmplia gamma de colors i acabats per adaptar-se a cada espai i estil."
        ]
      }
    ],
    teamSection: {
      title: "El nostre equip, la nostra força",
      paragraphs: [
        "A DOSMAS GRUP estam convençuts que el vertader valor d'una empresa resideix en les persones que la formen. Per això cuidam i potenciam el nostre equip humà, format per més de 200 professionals altament qualificats, compromesos i apassionats per la seva feina.",
        "Fomentam la formació contínua, l'especialització i la innovació, assegurant que cada membre del nostre equip es mantingui sempre a l'avantguarda de les noves tecnologies i de les millors tècniques constructives.",
        "El resultat és un equip unit, motivat i preparat per afrontar qualsevol repte, capaç de transformar cada projecte en una experiència de qualitat, confiança i excel·lència, on el tracte proper i personalitzat marca la diferència."
      ]
    },
    valuesSection: [
      {
        title: "TERMINIS, QUALITAT I SEGURETAT",
        text: "A DOSMAS GRUP sabem que els terminis són essencials. Per això optimitzam cada procés per escurçar-los al màxim, mantenint sempre els més alts estàndards de qualitat, eficàcia i seguretat en cada obra executada."
      },
      {
        title: "TREBALL EN EQUIP",
        text: "El nostre valor més gran és l'equip humà. Fomentam la formació contínua i el compromís professional, cosa que ens permet comptar amb un personal altament qualificat i motivat, preparat per superar amb èxit qualsevol desafiament."
      },
      {
        title: "RESPECTE I CURA DEL MEDI AMBIENT",
        text: "A DOSMAS GRUP complim de manera estricta totes les normatives ambientals. La nostra tasca està guiada per un ferm compromís amb la sostenibilitat i amb la protecció de l'entorn natural de les Illes Balears."
      },
      {
        title: "SATISFACCIÓ DEL CLIENT",
        text: "Les persones i empreses que confien en nosaltres són la nostra prioritat. Construïm relacions de confiança i col·laboració, assegurant una gestió eficient de cada projecte i un servei que va molt més enllà del vincle client-proveïdor."
      }
    ],
    trustSection: {
      title: "PER QUÈ CONFIAR EN DOSMAS GRUP?",
      bullets: [
        "Perquè estimam la nostra feina i la vivim amb passió cada dia.",
        "Perquè complim rigorosament els terminis, sense excuses.",
        "Perquè respectam al màxim les normatives mediambientals i gestionam tota la documentació necessària: llicències, permisos, autoritzacions, assegurances i normativa vigent.",
        "Perquè mantenim sempre actualitzada la documentació del nostre personal, empresa, maquinària i assegurances.",
        "Perquè comptam amb una àmplia flota pròpia de camions.",
        "Perquè disposam d'una gran varietat de maquinària d'última generació per a moviments de terra i obra pública.",
        "Perquè tenim el millor equip humà: professionals formats, qualificats i motivats.",
        "Perquè ens dona suport un equip d'enginyers, tallers i mecànics, juntament amb proveïdors de confiança, que ens permet respondre amb eficàcia en qualsevol circumstància.",
        "Perquè la nostra màxima és la QUALITAT en cada projecte.",
        "I perquè a DOSMAS GRUP creim fermament en el nostre compromís: “WE ALWAYS COMPLY!” Sempre complim!"
      ],
      youtubeLabel: "ENLLAÇ DE YOUTUBE",
      youtubeUrl: sharedTrustYoutubeUrl
    },
    dossierLink: {
      title: "DOSSIER CORPORATIU",
      text: "Accedeixi al dossier corporatiu de DOSMAS GRUP.",
      href: sharedDossierHref
    },
    rscContent: {
      title: "Responsabilitat Social Corporativa",
      paragraphs: [
        "La RSC de DOSMAS GRUP és el reflex dels nostres valors i del nostre compromís amb les persones. Apostam pel desenvolupament i la formació contínua del nostre equip, fomentant un entorn laboral basat en la igualtat, la inclusió i el respecte a la diversitat.",
        "Col·laboram activament amb empreses i entitats socials dedicades a la inserció laboral, així com amb equips i esdeveniments esportius que fomenten la vida saludable i la cohesió comunitària. Igualment, mostram sempre la nostra solidaritat en moments difícils: un exemple clar va ser la nostra participació en les tasques de reconstrucció dels pobles afectats per la DANA a València, posant a disposició els nostres camions, maquinària i professionals per ajudar a retornar l'esperança a qui més ho necessitava.",
        "A DOSMAS GRUP entenem que créixer com a empresa significa també aportar valor a la societat i a l'entorn que ens envolta."
      ],
      galleryPlaceholder: "S'aporten algunes fotos i una petita descripció de les mateixes."
    },
    legalDataContent: {
      title: "DADES LEGALS",
      paragraphs: [
        "Aquest lloc web és propietat de DOSMAS OBRAS Y PROYECTOS, S.L., societat de responsabilitat limitada inscrita en el Registre Mercantil de Palma de Mallorca.",
        "Denominació social: DOSMAS OBRAS Y PROYECTOS, S.L.",
        "NIF: B-57397655",
        "Forma jurídica: Societat Limitada",
        "Domicili social: Carretera Petra – Santa Margalida, S/N, Parcel·la km 1,3 · 07520 Petra, Illes Balears, Espanya",
        "Telèfon: 971 09 60 12"
      ]
    },
    privacyPolicyContent: {
      title: "POLÍTICA DE PRIVACITAT",
      paragraphs: [
        "A DOSMAS GRUP complim de manera rigorosa amb la normativa vigent en matèria de protecció i tractament de dades personals, garantint la seguretat i la confidencialitat de tota la informació que ens confien els nostres clients i col·laboradors.",
        "La navegació pel nostre lloc web no requereix registre, per la qual cosa el pot visitar lliurement sense necessitat d'identificar-se. No obstant això, per a determinats serveis —com la sol·licitud d'informació o pressupostos— serà necessari facilitar algunes dades personals. En cas de no proporcionar-les, és possible que no puguem atendre adequadament la seva petició.",
        "Durant tot el procés de tractament de dades aplicam mesures de seguretat tècniques i organitzatives orientades a evitar pèrdues, accessos no autoritzats, usos indeguts, divulgacions no consentides o qualsevol alteració de la informació.",
        "Aquest lloc web utilitza Google Analytics, un servei d'anàlisi de Google, Inc. amb seu a 1600 Amphitheatre Parkway, Mountain View (Califòrnia), CA 94043, Estats Units. Aquesta eina ens ajuda a conèixer aspectes com les pàgines que visita, el temps de navegació o l'origen del trànsit, amb l'únic objectiu de millorar de manera contínua l'experiència dels nostres usuaris.",
        "Per a això, s'empren cookies, petits arxius d'informació que s'emmagatzemen al seu navegador sense afectar el funcionament del seu equip. Les dades generades per aquestes cookies (inclosa la seva adreça IP) poden ser transmeses i gestionades per Google, complint sempre amb la normativa aplicable i, en determinats casos, posades a disposició de tercers per requeriment legal. Vostè pot configurar el seu navegador per rebutjar l'ús de cookies; tanmateix, ha de tenir en compte que això podria limitar algunes funcionalitats del lloc.",
        "Per a més informació sobre les cookies i la seva gestió pot consultar: www.allaboutcookies.org"
      ]
    },
    cookiePolicyContent: {
      title: "POLÍTICA DE COOKIES",
      paragraphs: [
        "Aquest document té com a finalitat informar sobre la política d'ús de cookies dels llocs web de DOSMAS OBRAS Y PROYECTOS, S.L., amb domicili social a Carretera Petra – Santa Margalida, S/N, Parcel·la km 1,3 · 07520 Petra, Illes Balears, Espanya, i N.I.F. B-57397655.",
        "Els termes “Vostè” i “Usuari” s'utilitzen per referir-se a totes les persones físiques i/o jurídiques que accedeixen i naveguen pels llocs web de DOSMAS GRUP o fan ús dels seus serveis. L'accés i la navegació per les nostres pàgines impliquen l'acceptació plena i sense reserves de la present política de cookies.",
        "DOSMAS GRUP pot recopilar informació sobre la navegació dels usuaris mitjançant arxius com cookies o registres log. Aquests dispositius s'associen de manera exclusiva a un usuari i al seu propi equip, i permeten emmagatzemar dades tècniques com l'adreça IP, el navegador utilitzat, el temps de visita o les pàgines consultades, amb l'objectiu de facilitar la navegació i millorar l'experiència d'ús.",
        "Així mateix, utilitzam cookies d'anàlisi web (com Google Analytics, servei de Google Inc.) que ens permeten mesurar i analitzar la interacció dels usuaris amb el nostre web. La informació obtinguda és de caràcter anònim i s'empra únicament per millorar el funcionament, els continguts i la usabilitat del lloc. En cap cas s'obtenen dades personals com nom, llinatges o adreces de contacte.",
        "A la taula següent es detallen les cookies utilitzades als llocs web de DOSMAS GRUP, juntament amb la informació que recullen i la seva finalitat:",
        "L'usuari pot revocar en qualsevol moment el consentiment atorgat per a l'ús de cookies modificant la configuració del seu navegador. Als enllaços següents trobarà informació sobre com gestionar-les segons el navegador utilitzat:"
      ],
      integratedPolicyTitle: "Política integrada de gestió",
      integratedPolicyIntro:
        "L'activitat de DOSMAS GRUP es desenvolupa en l'àmbit de la construcció i les obres públiques i privades a les Illes Balears, on comptam amb més de 70 anys d'experiència que ens han consolidat com un grup de referència. La nostra feina abasta àrees com:",
      integratedPolicyAreas: [
        "Rehabilitació, manteniment i reformes d'habitatges i edificis.",
        "Construcció d'obra nova, tant d'habitatges unifamiliars com de complexos residencials i turístics.",
        "Obra civil i industrial, incloent infraestructures, naus, instal·lacions esportives, hotels i projectes singulars."
      ],
      integratedPolicyParagraphs: [
        "El suport del nostre equip tècnic i administratiu, juntament amb més de 200 professionals i una flota pròpia de més de 150 màquines i més de 150 vehicles, ens permet afrontar projectes de gran envergadura amb plena garantia, assegurant qualitat, seguretat, compliment de terminis i respecte pel medi ambient.",
        "A DOSMAS GRUP assumim i aplicam de manera ferma els principis de la nostra Política de Qualitat, Seguretat, Salut Laboral i Medi Ambient, basada en els compromisos següents:"
      ],
      integratedPolicyCommitments: [
        "Garantir la satisfacció dels nostres clients i col·laboradors, complint les seves expectatives i els terminis establerts.",
        "Fomentar en el nostre equip una cultura de servei, professionalitat i eficiència, oferint sempre un tracte proper i solucions d'alt nivell.",
        "Potenciar la formació contínua i la participació activa del nostre personal en la millora dels processos i en la implementació de bones pràctiques.",
        "Assegurar la protecció de la salut i la seguretat de totes les persones involucrades, proporcionant entorns de treball segurs i condicions adequades per prevenir riscos i accidents.",
        "Mantenir un compromís ferm amb la sostenibilitat i la protecció de l'entorn, aplicant mesures que redueixin l'impacte ambiental i fomentin la conservació del medi natural.",
        "Complir estrictament amb la legislació vigent, normatives i requisits que la nostra organització subscrigui en matèria de qualitat, seguretat i medi ambient.",
        "Establir objectius de millora contínua, revisats anualment, per garantir processos cada vegada més segurs, eficients i sostenibles.",
        "Exigir en les nostres operacions subcontractades els mateixos estàndards de qualitat, seguretat i respecte ambiental que aplicam en els nostres propis treballs.",
        "Amb aquesta política integrada reafirmam la nostra essència: ser una empresa sòlida, responsable i compromesa amb els nostres clients, el nostre equip i l'entorn que ens envolta."
      ]
    },
    footerCorporateData: [
      "DOSMAS OBRAS Y PROYECTOS, S.L.",
      "NIF: B-57397655",
      "Oficina Central-Petra · Ctra. Petra-Santa Margalida, km 1,3 · 07520 Petra - Mallorca",
      "Delegació de Palma · Edifici Vip Asima, Gremi des Fusters, 33 · Local 6 - Planta 3a · 07009 Palma",
      "Telèfon: 971 09 60 12",
      "Email: info@dosmasgrup.com"
    ]
  },
  en: {
    navigationLinks: [
      { label: "About us", href: "/nosotros" },
      { label: "Projects", href: "/proyectos" },
      { label: "Work areas", href: "/areas-de-trabajo" },
      { label: "News", href: "/noticias" },
      { label: "CSR", href: "/rsc" },
      { label: "Contact", href: "/contacto" }
    ],
    rootsLink: {
      label: "OUR ROOTS",
      href: "/nuestras-raices"
    },
    officeLocations: {
      petra: {
        label: "Head Office-Petra",
        shortAddress: "Petra-Santa Margalida road, km 1.3 · 07520 Petra - Mallorca",
        lines: ["Petra-Santa Margalida road, km 1.3", "07520 Petra - Mallorca"],
        phone: sharedPetraPhone,
        email: sharedPetraEmail,
        mapQuery: "Ctra. Petra-Santa Margalida km 1.3, 07520 Petra, Mallorca"
      },
      palma: {
        label: "Palma Office",
        shortAddress: "Vip Asima Building, Gremi des Fusters, 33 · Unit 6 - 3rd floor · 07009 Palma",
        lines: ["Vip Asima Building, Gremi des Fusters, 33", "Unit 6 - 3rd floor", "Palma, Balearic Islands 07009"],
        phone: sharedPetraPhone,
        email: sharedPetraEmail,
        mapQuery: "Edificio Vip Asima, Gremi des Fusters 33, Local 6, Planta 3, 07009 Palma, Illes Balears"
      }
    },
    homeIntroParagraphs: [
      "DOSMAS GRUP is a benchmark in the excavation and construction sector in Mallorca. With more than 70 years of experience, we have established ourselves as a solid company recognized for our professionalism, our commitment and the trust placed in us by all kinds of clients, from private individuals to large corporations.",
      "Our story began in 1954, when Guillem Mas and Mateu Mas, two young cousins from Maria de la Salut, decided to begin a journey that would shape the future of the company. From a modest garage in Gavà (Barcelona), they built the first prefabricated ceiling factory under the name Techos DOS MAS, in homage to their shared surname. That initiative, focused on the transport and installation of ceilings for homes and industrial warehouses, was the first step in what is now a consolidated business group in constant evolution."
    ],
    aboutUsContent: {
      title: "About us",
      paragraphs: [
        "DOSMAS GRUP is a group of companies specialized in excavations, earthmoving and turnkey construction works, based in Mallorca. With more than 70 years of experience, we have become one of the strongest and most representative references in the sector in the Balearic Islands.",
        "Our history began in 1954, when Guillem Mas and Mateu Mas, two young cousins from Maria de la Salut, began their business journey in Gavà (Barcelona). From a humble garage they founded the first prefabricated ceiling factory, proudly naming it Techos DOS MAS in honour of their shared surname. For almost two decades, the company consolidated successfully in Catalonia until, in 1972, after Guillem Mas stepped down, activity came to a halt.",
        "In 1999, brothers Guillem and Miquel Mas, grandsons of the founder, took over the generational relay and reactivated the company, launching a new stage of modernization, diversification and growth. Since then, DOSMAS GRUP has evolved into a leading company in the management of construction and civil works projects.",
        "Today we offer an integrated service that includes:",
        "Our essence remains that of a family company that keeps the values of its origins: commitment, professionalism and proximity. We are committed to a specialized, high-quality service with results that guarantee not only excellence but also durability and safety in every project.",
        "We have a highly qualified team of more than 200 professionals, backed by a fleet of more than 150 vehicles and more than 150 active machines. Our machinery, subject to rigorous maintenance and equipped with the latest technology, allows us to guarantee efficiency, productivity and safety on every job site.",
        "We currently develop projects in Mallorca, Menorca and Ibiza, working for private clients as well as public and private entities, communities and companies from all sectors. Every project starts with our client's idea, and from there we add our experience, knowledge and methods to shape integrated solutions that ensure the full satisfaction and trust of those who choose us.",
        "DOSMAS GRUP: more than 70 years building trust, solidity and future in the Balearic Islands."
      ],
      bullets: [
        "Excavations and earthmoving.",
        "Demolitions and dismantling.",
        "Land conditioning and preparation.",
        "Construction and civil works.",
        "Refurbishments and building projects in general."
      ]
    },
    editorialSection: {
      blocks: [
        {
          title: "The client at the centre of every project",
          text: "At DOSMAS GRUP we work with a clear conviction: every project begins with our client's needs. Since our beginnings in 1954, we have evolved with a vocation for continuous improvement, constantly incorporating technological advances and the most innovative methodologies. This allows us to offer a top-quality integrated service that covers the entire construction process, from initial planning to final handover."
        },
        {
          title: "A benchmark in the construction sector in the Balearic Islands",
          text: "With more than 70 years of experience, we have established ourselves as a leading group in the Balearic Islands, delivering large-scale projects in different fields:",
          bullets: [
            "Civil and public works",
            "Construction and building for private clients, companies and major infrastructure",
            "Refurbishment, rehabilitation and land conditioning"
          ]
        },
        {
          title: "Our added value: trust and excellence",
          text: "Our track record has enabled us to refine each one of our processes, always with a clear objective: to guarantee the highest quality, safety and durability in our works. We are committed to innovation and the incorporation of advanced technology, backed by a highly qualified team and a modern machinery fleet subject to rigorous maintenance.",
          text2:
            "Today, DOSMAS GRUP continues to grow with its eyes on the future, applying excellence criteria at every stage of the work and offering integrated solutions that ensure the full satisfaction of our clients."
        }
      ]
    },
    brandsSection: {
      title: "OUR BRANDS: Dosmas Obras y Proyectos, Coexma Obres i Serveis, Tot Natura and Pintura 3V.",
      subtitle: "Our specialized brands, one solid structure",
      paragraphs: [
        "DOSMAS GRUP is structured around four business units: Dosmas Obras y Proyectos, Coexma Obres i Serveis, Tot Natura and Pintura 3V.",
        "Together they form a solid and versatile structure that allows us to tackle projects of any scale, offering integrated solutions ranging from new-build construction to rehabilitation and refurbishment, as well as excavations, earthmoving, demolitions and dismantling.",
        "In addition, we develop essential infrastructure such as sanitation and supply systems, agricultural works and civil and public works projects.",
        "Our global objective is one and the same: to offer top-quality service in every phase of the process, guaranteeing trust, solidity and results that endure over time."
      ]
    },
    brandDetails: [
      {
        name: "Dosmas Obras y Proyectos",
        title: "Specialists in construction and integrated services",
        paragraphs: [
          "At DOSMAS GRUP we have more than seven decades of experience that support us as specialists in excavations, earthmoving, demolitions, dismantling and the execution of key infrastructure such as sanitation systems, supply networks, civil and public works and general construction projects.",
          "We offer solutions tailored to private clients, companies and public entities across the Balearic Islands, with an integrated approach that guarantees quality, safety and durability.",
          "If you need a reliable contractor to carry out your excavation, demolition or construction project, DOSMAS GRUP will be your best ally. Our professionalism, seriousness and efficiency, together with the power of our machinery and the commitment of our team, have consolidated us as sector leaders."
        ]
      },
      {
        name: "Coexma Obres i Serveis",
        title: "Construction and refurbishment backed by trust",
        paragraphs: [
          "At DOSMAS GRUP we deliver new-build works and refurbishment projects in all kinds of properties: from detached homes, villas, townhouses and apartments to hotels and complete residential buildings.",
          "Our experience also covers the construction of industrial warehouses and facilities, as well as commercial premises and corporate offices, always providing functional, safe spaces tailored to each client's needs.",
          "Every project is studied on a bespoke basis, seeking the best technical and construction solutions to guarantee not only maximum quality, but also strict compliance with delivery deadlines.",
          "In addition, we actively participate in public and civil works projects, contributing to the development and modernization of the infrastructure of our islands."
        ]
      },
      {
        name: "Tot Natura",
        title: "Agricultural and forestry services",
        paragraphs: [
          "At DOSMAS GRUP we put our experience and technical capacity at the service of the agricultural and forestry sector, working in Mallorca and across the Balearic Islands.",
          "Thanks to our specialized team and the use of advanced machinery, we guarantee efficient, safe results that respect the natural environment, contributing to the sustainable development of the Balearic countryside."
        ],
        bullets: [
          "Forestry works: land clearing and opening, pruning, enclosures and fencing of estates.",
          "Agricultural works: fallow work, sowing and harvesting of all types of crops.",
          "Civil works applied to the rural environment: construction of wells, ponds, dams, reservoirs and irrigation systems for estates.",
          "Agricultural engineering and management: development of agricultural and civil engineering technical projects aimed at optimizing the management and productivity of farms."
        ]
      },
      {
        name: "Pintura 3V",
        title: "In-house paint manufacturing",
        paragraphs: [
          "At DOSMAS GRUP we have a division specialized in the manufacture of high-quality paints designed to meet the needs of all types of projects, both interior and exterior.",
          "Our highly qualified team supervises every phase of the process, from formulation and creation to quality control and verification, always ensuring the best results.",
          "In addition, we work under strict sustainability and environmental criteria, guaranteeing products that combine durability, resistance and an impeccable finish, available in a wide range of colours and finishes to suit every space and style."
        ]
      }
    ],
    teamSection: {
      title: "Our team, our strength",
      paragraphs: [
        "At DOSMAS GRUP we are convinced that the true value of a company lies in the people who make it up. That is why we care for and strengthen our team, made up of more than 200 highly qualified, committed and passionate professionals.",
        "We promote continuous training, specialization and innovation, ensuring that every member of our team always remains at the forefront of new technologies and the best construction techniques.",
        "The result is a united, motivated team ready to take on any challenge, capable of turning every project into an experience of quality, trust and excellence, where close and personalized treatment makes the difference."
      ]
    },
    valuesSection: [
      {
        title: "DEADLINES, QUALITY AND SAFETY",
        text: "At DOSMAS GRUP we know that deadlines are essential. That is why we optimize every process to shorten them as much as possible, always maintaining the highest standards of quality, efficiency and safety in every project delivered."
      },
      {
        title: "TEAMWORK",
        text: "Our greatest value is our people. We foster continuous training and professional commitment, allowing us to count on highly qualified and motivated staff prepared to successfully overcome any challenge."
      },
      {
        title: "RESPECT AND CARE FOR THE ENVIRONMENT",
        text: "At DOSMAS GRUP we strictly comply with all environmental regulations. Our work is guided by a firm commitment to sustainability and to protecting the natural environment of the Balearic Islands."
      },
      {
        title: "CLIENT SATISFACTION",
        text: "The people and companies who trust us are our priority. We build relationships of trust and collaboration, ensuring efficient management of every project and a service that goes far beyond the client-supplier relationship."
      }
    ],
    trustSection: {
      title: "WHY TRUST DOSMAS GRUP?",
      bullets: [
        "Because we love our work and live it with passion every day.",
        "Because we strictly meet deadlines, with no excuses.",
        "Because we respect environmental regulations to the fullest and manage all necessary documentation: licenses, permits, authorizations, insurance and current regulations.",
        "Because we always keep the documentation of our staff, company, machinery and insurance up to date.",
        "Because we have our own extensive truck fleet.",
        "Because we have a wide range of latest-generation machinery for earthmoving and public works.",
        "Because we have the best team: trained, qualified and motivated professionals.",
        "Because we are backed by a team of engineers, workshops and mechanics, together with trusted suppliers, which allows us to respond efficiently in any circumstance.",
        "Because QUALITY is our guiding principle in every project.",
        "And because at DOSMAS GRUP we firmly believe in our commitment: “WE ALWAYS COMPLY!” We always deliver!"
      ],
      youtubeLabel: "YOUTUBE LINK",
      youtubeUrl: sharedTrustYoutubeUrl
    },
    dossierLink: {
      title: "CORPORATE DOSSIER",
      text: "Access the corporate dossier of DOSMAS GRUP.",
      href: sharedDossierHref
    },
    rscContent: {
      title: "Corporate Social Responsibility",
      paragraphs: [
        "DOSMAS GRUP's CSR reflects our values and our commitment to people. We are committed to the development and continuous training of our team, fostering a working environment based on equality, inclusion and respect for diversity.",
        "We actively collaborate with companies and social organizations dedicated to labour insertion, as well as with sports teams and events that encourage healthy living and community cohesion. We also always show solidarity in difficult times: a clear example was our participation in the reconstruction works in the towns affected by the DANA in Valencia, placing our trucks, machinery and professionals at the service of those who needed hope the most.",
        "At DOSMAS GRUP we understand that growing as a company also means bringing value to society and to the environment around us."
      ],
      galleryPlaceholder: "Several photos and a short description of each are provided."
    },
    legalDataContent: {
      title: "LEGAL INFORMATION",
      paragraphs: [
        "This website is owned by DOSMAS OBRAS Y PROYECTOS, S.L., a limited liability company registered in the Mercantile Registry of Palma de Mallorca.",
        "Corporate name: DOSMAS OBRAS Y PROYECTOS, S.L.",
        "Tax ID: B-57397655",
        "Legal form: Limited Liability Company",
        "Registered office: Carretera Petra – Santa Margalida, S/N, Parcel km 1.3 · 07520 Petra, Balearic Islands, Spain",
        "Phone: 971 09 60 12"
      ]
    },
    privacyPolicyContent: {
      title: "PRIVACY POLICY",
      paragraphs: [
        "At DOSMAS GRUP we strictly comply with current regulations regarding the protection and processing of personal data, guaranteeing the security and confidentiality of all information entrusted to us by our clients and collaborators.",
        "Browsing our website does not require registration, so you may visit it freely without identifying yourself. However, for certain services —such as requesting information or quotes— it will be necessary to provide some personal data. If you do not do so, we may not be able to properly handle your request.",
        "Throughout the data processing cycle we apply technical and organizational security measures aimed at preventing loss, unauthorized access, improper use, unauthorized disclosure or any alteration of information.",
        "This website uses Google Analytics, an analysis service provided by Google, Inc., headquartered at 1600 Amphitheatre Parkway, Mountain View, California, CA 94043, United States. This tool helps us understand aspects such as the pages you visit, time spent browsing or traffic origin, with the sole aim of continuously improving user experience.",
        "For this purpose, cookies are used, small information files stored in your browser without affecting your device's operation. The data generated by these cookies (including your IP address) may be transmitted to and managed by Google, always in compliance with applicable regulations and, in certain cases, made available to third parties by legal requirement. You may configure your browser to reject the use of cookies; however, please note that this could limit some site features.",
        "For more information about cookies and how to manage them, please visit: www.allaboutcookies.org"
      ]
    },
    cookiePolicyContent: {
      title: "COOKIE POLICY",
      paragraphs: [
        "The purpose of this document is to provide information on the cookie policy of the websites of DOSMAS OBRAS Y PROYECTOS, S.L., with registered office at Carretera Petra – Santa Margalida, S/N, Parcel km 1.3 · 07520 Petra, Balearic Islands, Spain, and Tax ID B-57397655.",
        "The terms “You” and “User” refer to all natural and/or legal persons who access and browse DOSMAS GRUP websites or make use of its services. Access to and browsing of our pages imply full and unreserved acceptance of this cookie policy.",
        "DOSMAS GRUP may collect information about users' browsing through files such as cookies or log records. These devices are associated exclusively with a user and their own equipment and allow the storage of technical data such as IP address, browser used, visit duration or pages consulted, with the aim of facilitating browsing and improving user experience.",
        "Likewise, we use web analytics cookies (such as Google Analytics, a service provided by Google Inc.) that allow us to measure and analyze users' interaction with our website. The information obtained is anonymous and is used solely to improve the operation, content and usability of the site. Under no circumstances is personal data such as names, surnames or contact addresses obtained.",
        "The following table details the cookies used on DOSMAS GRUP websites, together with the information they collect and their purpose:",
        "The user may revoke at any time the consent granted for the use of cookies by changing the settings of their browser. In the following links you will find information on how to manage them according to the browser used:"
      ],
      integratedPolicyTitle: "Integrated management policy",
      integratedPolicyIntro:
        "DOSMAS GRUP's activity takes place in the field of construction and public and private works in the Balearic Islands, where we have more than 70 years of experience that have consolidated us as a leading group. Our work covers areas such as:",
      integratedPolicyAreas: [
        "Rehabilitation, maintenance and refurbishment of homes and buildings.",
        "New-build construction, both detached homes and residential and tourist complexes.",
        "Civil and industrial works, including infrastructure, warehouses, sports facilities, hotels and singular projects."
      ],
      integratedPolicyParagraphs: [
        "The support of our technical and administrative team, together with more than 200 professionals and our own fleet of more than 150 machines and more than 150 vehicles, allows us to undertake large-scale projects with full guarantees, ensuring quality, safety, compliance with deadlines and respect for the environment.",
        "At DOSMAS GRUP we firmly assume and apply the principles of our Quality, Safety, Occupational Health and Environment Policy, based on the following commitments:"
      ],
      integratedPolicyCommitments: [
        "Guarantee the satisfaction of our clients and collaborators, meeting their expectations and the established deadlines.",
        "Promote in our team a culture of service, professionalism and efficiency, always offering close treatment and high-level solutions.",
        "Enhance continuous training and the active participation of our staff in process improvement and the implementation of best practices.",
        "Ensure the protection of the health and safety of all people involved, providing safe working environments and adequate conditions to prevent risks and accidents.",
        "Maintain a strong commitment to sustainability and environmental protection by applying measures that reduce environmental impact and encourage the conservation of the natural environment.",
        "Strictly comply with current legislation, regulations and requirements subscribed to by our organization in terms of quality, safety and environment.",
        "Set continuous improvement objectives, reviewed annually, to guarantee increasingly safe, efficient and sustainable processes.",
        "Require the same standards of quality, safety and environmental respect in our subcontracted operations as we apply in our own works.",
        "With this integrated policy we reaffirm our essence: to be a solid, responsible company committed to our clients, our team and the environment around us."
      ]
    },
    footerCorporateData: [
      "DOSMAS OBRAS Y PROYECTOS, S.L.",
      "Tax ID: B-57397655",
      "Head Office-Petra · Petra-Santa Margalida road, km 1.3 · 07520 Petra - Mallorca",
      "Palma Office · Vip Asima Building, Gremi des Fusters, 33 · Unit 6 - 3rd floor · 07009 Palma",
      "Phone: 971 09 60 12",
      "Email: info@dosmasgrup.com"
    ]
  },
  de: {
    navigationLinks: [
      { label: "Über uns", href: "/nosotros" },
      { label: "Projekte", href: "/proyectos" },
      { label: "Arbeitsbereiche", href: "/areas-de-trabajo" },
      { label: "News", href: "/noticias" },
      { label: "CSR", href: "/rsc" },
      { label: "Kontakt", href: "/contacto" }
    ],
    rootsLink: {
      label: "UNSERE WURZELN",
      href: "/nuestras-raices"
    },
    officeLocations: {
      petra: {
        label: "Zentrale-Petra",
        shortAddress: "Straße Petra-Santa Margalida, km 1,3 · 07520 Petra - Mallorca",
        lines: ["Straße Petra-Santa Margalida, km 1,3", "07520 Petra - Mallorca"],
        phone: sharedPetraPhone,
        email: sharedPetraEmail,
        mapQuery: "Ctra. Petra-Santa Margalida km 1.3, 07520 Petra, Mallorca"
      },
      palma: {
        label: "Niederlassung Palma",
        shortAddress: "Gebäude Vip Asima, Gremi des Fusters, 33 · Lokal 6 - 3. Etage · 07009 Palma",
        lines: ["Gebäude Vip Asima, Gremi des Fusters, 33", "Lokal 6 - 3. Etage", "Palma, Balearen 07009"],
        phone: sharedPetraPhone,
        email: sharedPetraEmail,
        mapQuery: "Edificio Vip Asima, Gremi des Fusters 33, Local 6, Planta 3, 07009 Palma, Illes Balears"
      }
    },
    homeIntroParagraphs: [
      "DOSMAS GRUP ist ein Maßstab im Bereich Aushub und Bau auf Mallorca. Mit mehr als 70 Jahren Erfahrung haben wir uns als solides Unternehmen etabliert, das für Professionalität, Engagement und das Vertrauen bekannt ist, das uns Kunden aller Art entgegenbringen – von Privatpersonen bis hin zu großen Unternehmen.",
      "Unsere Geschichte begann 1954, als Guillem Mas und Mateu Mas, zwei junge Cousins aus Maria de la Salut, beschlossen, einen Weg einzuschlagen, der die Zukunft des Unternehmens prägen sollte. Aus einer bescheidenen Garage in Gavà (Barcelona) errichteten sie die erste Fabrik für vorgefertigte Decken unter dem Namen Techos DOS MAS – eine Hommage an ihren gemeinsamen Familiennamen. Diese Initiative, die sich auf den Transport und die Montage von Decken für Wohnhäuser und Industriehallen konzentrierte, war der erste Schritt zu einer heute gefestigten und sich ständig weiterentwickelnden Unternehmensgruppe."
    ],
    aboutUsContent: {
      title: "Über uns",
      paragraphs: [
        "DOSMAS GRUP ist eine Unternehmensgruppe mit Sitz auf Mallorca, die auf Aushubarbeiten, Erdbewegungen und schlüsselfertige Bauleistungen spezialisiert ist. Mit mehr als 70 Jahren Erfahrung haben wir uns als einer der solidesten und repräsentativsten Akteure der Branche auf den Balearen etabliert.",
        "Unsere Geschichte begann 1954, als Guillem Mas und Mateu Mas, zwei junge Cousins aus Maria de la Salut, ihren geschäftlichen Weg in Gavà (Barcelona) einschlugen. Aus einer bescheidenen Garage heraus gründeten sie die erste Fabrik für vorgefertigte Decken, die sie stolz Techos DOS MAS nannten – zu Ehren ihres gemeinsamen Familiennamens. Fast zwei Jahrzehnte lang konsolidierte sich das Unternehmen erfolgreich in Katalonien, bis die Tätigkeit 1972 nach dem Rückzug von Guillem Mas pausierte.",
        "1999 übernahmen die Brüder Guillem und Miquel Mas, Enkel des Gründers, den Generationenwechsel und reaktivierten das Unternehmen. Damit begann eine neue Phase der Modernisierung, Diversifizierung und des Wachstums. Seitdem hat sich DOSMAS GRUP zu einem Referenzunternehmen für die Steuerung von Bau- und Tiefbauprojekten entwickelt.",
        "Heute bieten wir einen ganzheitlichen Service, der Folgendes umfasst:",
        "Unser Wesen bleibt das eines Familienunternehmens, das die Werte seiner Ursprünge bewahrt: Engagement, Professionalität und Nähe. Wir setzen auf einen spezialisierten Qualitätsservice mit Ergebnissen, die nicht nur Exzellenz, sondern auch Langlebigkeit und Sicherheit in jedem Projekt garantieren.",
        "Wir verfügen über ein hochqualifiziertes Team von mehr als 200 Fachkräften, unterstützt durch eine Flotte von mehr als 150 Fahrzeugen und mehr als 150 aktiven Maschinen. Unsere Maschinen, die streng gewartet und mit modernster Technologie ausgestattet sind, ermöglichen uns Effizienz, Produktivität und Sicherheit auf jeder Baustelle.",
        "Aktuell entwickeln wir Projekte auf Mallorca, Menorca und Ibiza und arbeiten sowohl für Privatkunden als auch für öffentliche und private Institutionen, Gemeinschaften und Unternehmen aus allen Branchen. Jedes Projekt beginnt mit der Idee unseres Kunden, und darauf bauen wir mit unserer Erfahrung, unserem Wissen und unseren Methoden integrierte Lösungen auf, die die volle Zufriedenheit und das Vertrauen unserer Auftraggeber sichern.",
        "DOSMAS GRUP: mehr als 70 Jahre Vertrauen, Stabilität und Zukunft auf den Balearen."
      ],
      bullets: [
        "Aushub und Erdbewegungen.",
        "Abbruch und Rückbau.",
        "Aufbereitung und Vorbereitung von Grundstücken.",
        "Bau und Tiefbau.",
        "Reformen und allgemeine Hochbauprojekte."
      ]
    },
    editorialSection: {
      blocks: [
        {
          title: "Der Kunde im Mittelpunkt jedes Projekts",
          text: "Bei DOSMAS GRUP arbeiten wir mit einer klaren Überzeugung: Jedes Projekt beginnt mit den Bedürfnissen unseres Kunden. Seit unseren Anfängen im Jahr 1954 haben wir uns mit dem Anspruch ständiger Verbesserung weiterentwickelt und fortlaufend technologische Fortschritte und innovative Methoden integriert. So können wir einen integrierten Service von höchster Qualität anbieten, der den gesamten Bauprozess von der ersten Planung bis zur finalen Übergabe umfasst."
        },
        {
          title: "Referenz im Bausektor auf den Balearen",
          text: "Mit mehr als 70 Jahren Erfahrung haben wir uns als Referenzgruppe auf den Balearen etabliert und groß angelegte Projekte in verschiedenen Bereichen realisiert:",
          bullets: [
            "Tiefbau und öffentliche Bauvorhaben",
            "Bau und Hochbau für Privatkunden, Unternehmen und große Infrastrukturen",
            "Reformen, Sanierung und Geländevorbereitung"
          ]
        },
        {
          title: "Unser Mehrwert: Vertrauen und Exzellenz",
          text: "Unsere Laufbahn hat es uns ermöglicht, jeden einzelnen Prozess zu perfektionieren – immer mit einem klaren Ziel: höchste Qualität, Sicherheit und Langlebigkeit in unseren Arbeiten zu gewährleisten. Wir setzen auf Innovation und den Einsatz fortschrittlicher Technologie, gestützt auf ein hochqualifiziertes Team und eine moderne Maschinenflotte, die strengen Wartungsprozessen unterliegt.",
          text2:
            "Heute wächst DOSMAS GRUP mit Blick auf die Zukunft weiter, wendet in jeder Arbeitsphase Exzellenzkriterien an und bietet integrierte Lösungen, die die volle Zufriedenheit unserer Kunden sicherstellen."
        }
      ]
    },
    brandsSection: {
      title: "UNSERE MARKEN: Dosmas Obras y Proyectos, Coexma Obres i Serveis, Tot Natura und Pintura 3V.",
      subtitle: "Unsere spezialisierten Marken, eine starke Struktur",
      paragraphs: [
        "DOSMAS GRUP gliedert sich in vier Geschäftsbereiche: Dosmas Obras y Proyectos, Coexma Obres i Serveis, Tot Natura und Pintura 3V.",
        "Gemeinsam bilden sie eine solide und vielseitige Struktur, die es uns ermöglicht, Projekte jeder Größenordnung umzusetzen und integrierte Lösungen anzubieten – von Neubau über Sanierung und Umbau bis hin zu Aushub, Erdbewegungen, Abbruch und Rückbau.",
        "Darüber hinaus entwickeln wir wesentliche Infrastrukturen wie Entsorgungs- und Versorgungssysteme, landwirtschaftliche Arbeiten sowie Tief- und öffentliche Bauprojekte.",
        "Unser globales Ziel ist eindeutig: in jeder Phase des Prozesses einen Service von höchster Qualität zu bieten und Vertrauen, Stabilität und dauerhafte Ergebnisse zu gewährleisten."
      ]
    },
    brandDetails: [
      {
        name: "Dosmas Obras y Proyectos",
        title: "Spezialisten für Bau und integrierte Dienstleistungen",
        paragraphs: [
          "Bei DOSMAS GRUP verfügen wir über mehr als sieben Jahrzehnte Erfahrung, die uns als Spezialisten für Aushubarbeiten, Erdbewegungen, Abbruch, Rückbau und die Ausführung zentraler Infrastrukturen wie Entwässerungssysteme, Versorgungsnetze, Tief- und öffentliche Bauarbeiten sowie allgemeine Bauprojekte ausweisen.",
          "Wir bieten maßgeschneiderte Lösungen für Privatkunden, Unternehmen und öffentliche Einrichtungen auf den Balearen mit einem integrierten Ansatz, der Qualität, Sicherheit und Langlebigkeit garantiert.",
          "Wenn Sie einen verlässlichen Auftragnehmer für Ihre Aushub-, Abbruch- oder Bauarbeiten benötigen, finden Sie in DOSMAS GRUP Ihren besten Partner. Unsere Professionalität, Ernsthaftigkeit und Effizienz, zusammen mit der Leistungsfähigkeit unserer Maschinen und dem Engagement unseres Teams, haben uns zu einem der führenden Unternehmen der Branche gemacht."
        ]
      },
      {
        name: "Coexma Obres i Serveis",
        title: "Bau und Sanierung mit Vertrauensgarantie",
        paragraphs: [
          "Bei DOSMAS GRUP realisieren wir Neubauten und Umbauprojekte in allen Arten von Immobilien: von Einfamilienhäusern, Villen, Reihenhäusern und Apartments bis hin zu Hotels und kompletten Wohngebäuden.",
          "Unsere Erfahrung umfasst auch den Bau von Industriehallen und -anlagen sowie Geschäftslokalen und Unternehmensbüros. Dabei schaffen wir stets funktionale, sichere Räume, die auf die Bedürfnisse jedes Kunden abgestimmt sind.",
          "Jedes Projekt wird individuell untersucht, um die besten technischen und baulichen Lösungen zu finden und nicht nur höchste Qualität, sondern auch die strikte Einhaltung der Fertigstellungstermine sicherzustellen.",
          "Darüber hinaus beteiligen wir uns aktiv an öffentlichen und zivilen Bauprojekten und tragen so zur Entwicklung und Modernisierung der Infrastruktur unserer Inseln bei."
        ]
      },
      {
        name: "Tot Natura",
        title: "Land- und forstwirtschaftliche Dienstleistungen",
        paragraphs: [
          "Bei DOSMAS GRUP stellen wir unsere Erfahrung und technische Leistungsfähigkeit in den Dienst des Agrar- und Forstsektors und arbeiten auf Mallorca sowie im restlichen Balearenraum.",
          "Dank unseres spezialisierten Teams und des Einsatzes moderner Maschinen garantieren wir effiziente, sichere und umweltverträgliche Ergebnisse und leisten damit einen Beitrag zur nachhaltigen Entwicklung des balearischen ländlichen Raums."
        ],
        bullets: [
          "Forstwirtschaftliche Arbeiten: Reinigung und Öffnung von Flächen, Schnittarbeiten, Einfriedungen und Zäune für Grundstücke.",
          "Landwirtschaftliche Arbeiten: Brache, Aussaat und Ernte aller Arten von Kulturen.",
          "Tiefbau im ländlichen Bereich: Bau von Brunnen, Becken, Dämmen, Stauseen und Bewässerungssystemen für Grundstücke.",
          "Agraringenieurwesen und Bewirtschaftung: Entwicklung technischer Projekte im Agrar- und Bauingenieurwesen zur Optimierung von Bewirtschaftung und Produktivität von Betrieben."
        ]
      },
      {
        name: "Pintura 3V",
        title: "Eigene Farbherstellung",
        paragraphs: [
          "Bei DOSMAS GRUP verfügen wir über einen Geschäftsbereich, der sich auf die Herstellung hochwertiger Farben spezialisiert hat, die für Projekte aller Art – im Innen- wie im Außenbereich – entwickelt wurden.",
          "Unser hochqualifiziertes Team überwacht jede Phase des Prozesses, von der Formulierung und Herstellung bis hin zur Qualitätskontrolle und -prüfung, und sorgt dabei stets für optimale Ergebnisse.",
          "Darüber hinaus arbeiten wir nach strengen Nachhaltigkeits- und Umweltkriterien und garantieren Produkte, die Langlebigkeit, Widerstandsfähigkeit und ein makelloses Finish vereinen – verfügbar in einer breiten Palette von Farben und Oberflächen für jeden Raum und Stil."
        ]
      }
    ],
    teamSection: {
      title: "Unser Team, unsere Stärke",
      paragraphs: [
        "Bei DOSMAS GRUP sind wir überzeugt, dass der wahre Wert eines Unternehmens in den Menschen liegt, die es ausmachen. Deshalb fördern und stärken wir unser Team, das aus mehr als 200 hochqualifizierten, engagierten und leidenschaftlichen Fachkräften besteht.",
        "Wir fördern kontinuierliche Weiterbildung, Spezialisierung und Innovation und stellen sicher, dass jedes Mitglied unseres Teams stets an der Spitze neuer Technologien und bewährter Bautechniken bleibt.",
        "Das Ergebnis ist ein geeintes, motiviertes Team, das bereit ist, jede Herausforderung anzunehmen und jedes Projekt in eine Erfahrung aus Qualität, Vertrauen und Exzellenz zu verwandeln – mit einer persönlichen, nahen Betreuung, die den Unterschied macht."
      ]
    },
    valuesSection: [
      {
        title: "TERMINE, QUALITÄT UND SICHERHEIT",
        text: "Bei DOSMAS GRUP wissen wir, dass Termine entscheidend sind. Deshalb optimieren wir jeden Prozess, um sie maximal zu verkürzen und dabei stets die höchsten Standards in Qualität, Effizienz und Sicherheit bei jeder ausgeführten Arbeit einzuhalten."
      },
      {
        title: "TEAMARBEIT",
        text: "Unser größter Wert ist das Team. Wir fördern kontinuierliche Weiterbildung und professionelles Engagement, wodurch wir auf hochqualifiziertes und motiviertes Personal zählen können, das darauf vorbereitet ist, jede Herausforderung erfolgreich zu meistern."
      },
      {
        title: "RESPEKT UND SORGFALT FÜR DIE UMWELT",
        text: "Bei DOSMAS GRUP halten wir alle Umweltvorschriften strikt ein. Unsere Arbeit ist von einem festen Engagement für Nachhaltigkeit und den Schutz der natürlichen Umgebung der Balearen geleitet."
      },
      {
        title: "KUNDENZUFRIEDENHEIT",
        text: "Die Menschen und Unternehmen, die uns vertrauen, stehen für uns an erster Stelle. Wir bauen Beziehungen auf Vertrauen und Zusammenarbeit auf und sichern ein effizientes Projektmanagement sowie einen Service, der weit über die übliche Kunde-Lieferant-Beziehung hinausgeht."
      }
    ],
    trustSection: {
      title: "WARUM DOSMAS GRUP VERTRAUEN?",
      bullets: [
        "Weil wir unsere Arbeit lieben und sie jeden Tag mit Leidenschaft leben.",
        "Weil wir Fristen strikt einhalten – ohne Ausreden.",
        "Weil wir Umweltvorschriften maximal respektieren und sämtliche erforderliche Dokumentation verwalten: Lizenzen, Genehmigungen, Zulassungen, Versicherungen und geltende Vorschriften.",
        "Weil wir die Dokumentation unseres Personals, unseres Unternehmens, unserer Maschinen und Versicherungen immer aktuell halten.",
        "Weil wir über eine umfangreiche eigene Lkw-Flotte verfügen.",
        "Weil wir eine große Auswahl an modernster Maschinen für Erdbewegungen und öffentliche Bauvorhaben haben.",
        "Weil wir das beste Team haben: geschulte, qualifizierte und motivierte Fachkräfte.",
        "Weil uns ein Team aus Ingenieuren, Werkstätten und Mechanikern sowie verlässliche Lieferanten unterstützt, sodass wir in jeder Situation effizient reagieren können.",
        "Weil QUALITÄT unser Leitprinzip in jedem Projekt ist.",
        "Und weil wir bei DOSMAS GRUP fest an unser Versprechen glauben: “WE ALWAYS COMPLY!” Wir liefern immer."
      ],
      youtubeLabel: "YOUTUBE-LINK",
      youtubeUrl: sharedTrustYoutubeUrl
    },
    dossierLink: {
      title: "UNTERNEHMENSDOSSIER",
      text: "Greifen Sie auf das Unternehmensdossier von DOSMAS GRUP zu.",
      href: sharedDossierHref
    },
    rscContent: {
      title: "Corporate Social Responsibility",
      paragraphs: [
        "Die CSR von DOSMAS GRUP ist Ausdruck unserer Werte und unseres Engagements für Menschen. Wir setzen auf die Entwicklung und kontinuierliche Weiterbildung unseres Teams und fördern ein Arbeitsumfeld, das auf Gleichheit, Inklusion und Respekt vor Vielfalt basiert.",
        "Wir arbeiten aktiv mit Unternehmen und sozialen Einrichtungen zusammen, die sich der Arbeitsintegration widmen, sowie mit Sportteams und Veranstaltungen, die einen gesunden Lebensstil und den gesellschaftlichen Zusammenhalt fördern. Ebenso zeigen wir in schwierigen Momenten stets Solidarität: Ein klares Beispiel war unsere Beteiligung an den Wiederaufbauarbeiten in den von der DANA in Valencia betroffenen Orten, bei denen wir unsere Lkw, Maschinen und Fachkräfte zur Verfügung stellten, um den Menschen neue Hoffnung zu geben.",
        "Bei DOSMAS GRUP verstehen wir, dass unternehmerisches Wachstum auch bedeutet, einen Mehrwert für die Gesellschaft und das Umfeld zu schaffen, das uns umgibt."
      ],
      galleryPlaceholder: "Es werden einige Fotos und eine kurze Beschreibung dazu bereitgestellt."
    },
    legalDataContent: {
      title: "RECHTLICHE ANGABEN",
      paragraphs: [
        "Diese Website ist Eigentum von DOSMAS OBRAS Y PROYECTOS, S.L., einer Gesellschaft mit beschränkter Haftung, die im Handelsregister von Palma de Mallorca eingetragen ist.",
        "Firmenname: DOSMAS OBRAS Y PROYECTOS, S.L.",
        "Steuernummer: B-57397655",
        "Rechtsform: Gesellschaft mit beschränkter Haftung",
        "Sitz: Carretera Petra – Santa Margalida, S/N, Parzelle km 1,3 · 07520 Petra, Balearen, Spanien",
        "Telefon: 971 09 60 12"
      ]
    },
    privacyPolicyContent: {
      title: "DATENSCHUTZRICHTLINIE",
      paragraphs: [
        "Bei DOSMAS GRUP halten wir die geltenden Vorschriften zum Schutz und zur Verarbeitung personenbezogener Daten strikt ein und gewährleisten die Sicherheit und Vertraulichkeit aller Informationen, die uns unsere Kunden und Partner anvertrauen.",
        "Die Nutzung unserer Website erfordert keine Registrierung, sodass Sie sie frei besuchen können, ohne sich identifizieren zu müssen. Für bestimmte Dienste —wie die Anforderung von Informationen oder Angeboten— ist jedoch die Angabe einiger personenbezogener Daten erforderlich. Werden diese nicht bereitgestellt, können wir Ihre Anfrage möglicherweise nicht angemessen bearbeiten.",
        "Während des gesamten Datenverarbeitungsprozesses wenden wir technische und organisatorische Sicherheitsmaßnahmen an, um Verluste, unbefugten Zugriff, missbräuchliche Nutzung, unzulässige Offenlegung oder jede andere Veränderung der Informationen zu verhindern.",
        "Diese Website verwendet Google Analytics, einen Analysedienst der Google, Inc. mit Sitz in 1600 Amphitheatre Parkway, Mountain View (Kalifornien), CA 94043, Vereinigte Staaten. Dieses Tool hilft uns, Aspekte wie besuchte Seiten, Verweildauer oder Herkunft des Traffics zu verstehen, mit dem einzigen Ziel, das Nutzererlebnis kontinuierlich zu verbessern.",
        "Zu diesem Zweck werden Cookies eingesetzt, kleine Informationsdateien, die in Ihrem Browser gespeichert werden, ohne die Funktion Ihres Geräts zu beeinträchtigen. Die durch diese Cookies erzeugten Daten (einschließlich Ihrer IP-Adresse) können an Google übertragen und von Google verwaltet werden, stets unter Einhaltung der geltenden Vorschriften und in bestimmten Fällen auch Dritten aufgrund gesetzlicher Verpflichtungen zugänglich gemacht werden. Sie können Ihren Browser so konfigurieren, dass die Verwendung von Cookies abgelehnt wird; bitte beachten Sie jedoch, dass dies einige Funktionen der Website einschränken kann.",
        "Weitere Informationen über Cookies und deren Verwaltung finden Sie unter: www.allaboutcookies.org"
      ]
    },
    cookiePolicyContent: {
      title: "COOKIE-RICHTLINIE",
      paragraphs: [
        "Dieses Dokument dient dazu, über die Cookie-Richtlinie der Websites von DOSMAS OBRAS Y PROYECTOS, S.L. mit Sitz in Carretera Petra – Santa Margalida, S/N, Parzelle km 1,3 · 07520 Petra, Balearen, Spanien, und Steuer-Nr. B-57397655 zu informieren.",
        "Die Begriffe „Sie“ und „Nutzer“ beziehen sich auf alle natürlichen und/oder juristischen Personen, die auf die Websites von DOSMAS GRUP zugreifen, diese nutzen oder darin navigieren. Der Zugriff auf und die Nutzung unserer Seiten setzt die vollständige und vorbehaltlose Annahme dieser Cookie-Richtlinie voraus.",
        "DOSMAS GRUP kann Informationen über das Nutzungsverhalten der Anwender mithilfe von Dateien wie Cookies oder Log-Dateien erfassen. Diese Werkzeuge sind ausschließlich einem Nutzer und dessen Gerät zugeordnet und ermöglichen die Speicherung technischer Daten wie IP-Adresse, verwendeter Browser, Besuchsdauer oder aufgerufene Seiten, mit dem Ziel, die Navigation zu erleichtern und das Nutzungserlebnis zu verbessern.",
        "Ebenso verwenden wir Webanalyse-Cookies (wie Google Analytics, einen Dienst von Google Inc.), die es uns ermöglichen, die Interaktion der Nutzer mit unserer Website zu messen und zu analysieren. Die erhaltenen Informationen sind anonym und werden ausschließlich verwendet, um Funktion, Inhalte und Benutzerfreundlichkeit der Website zu verbessern. Zu keinem Zeitpunkt werden personenbezogene Daten wie Vor- und Nachname oder Kontaktdaten erhoben.",
        "In der folgenden Tabelle werden die auf den Websites von DOSMAS GRUP verwendeten Cookies sowie die von ihnen erfassten Informationen und deren Zweck aufgeführt:",
        "Der Nutzer kann die für die Verwendung von Cookies erteilte Einwilligung jederzeit widerrufen, indem er die Einstellungen seines Browsers ändert. Unter den folgenden Links finden Sie Informationen darüber, wie Sie Cookies je nach verwendetem Browser verwalten können:"
      ],
      integratedPolicyTitle: "Integrierte Managementpolitik",
      integratedPolicyIntro:
        "Die Tätigkeit von DOSMAS GRUP entwickelt sich im Bereich des Bauwesens sowie öffentlicher und privater Bauarbeiten auf den Balearen, wo uns mehr als 70 Jahre Erfahrung zu einer Referenzgruppe gemacht haben. Unsere Arbeit umfasst Bereiche wie:",
      integratedPolicyAreas: [
        "Sanierung, Instandhaltung und Renovierung von Wohnhäusern und Gebäuden.",
        "Neubau, sowohl von Einfamilienhäusern als auch von Wohn- und Tourismusanlagen.",
        "Tief- und Industriebau, einschließlich Infrastrukturen, Hallen, Sportanlagen, Hotels und Sonderprojekten."
      ],
      integratedPolicyParagraphs: [
        "Die Unterstützung unseres technischen und administrativen Teams sowie mehr als 200 Fachkräfte und eine eigene Flotte von mehr als 150 Maschinen und mehr als 150 Fahrzeugen ermöglichen es uns, Großprojekte mit voller Gewähr umzusetzen und dabei Qualität, Sicherheit, Termintreue und Umweltrespekt sicherzustellen.",
        "Bei DOSMAS GRUP übernehmen und wenden wir die Grundsätze unserer Qualitäts-, Sicherheits-, Arbeitsschutz- und Umweltpolitik konsequent an, die auf folgenden Verpflichtungen basiert:"
      ],
      integratedPolicyCommitments: [
        "Die Zufriedenheit unserer Kunden und Partner sicherzustellen, indem wir ihre Erwartungen und die vereinbarten Fristen erfüllen.",
        "In unserem Team eine Kultur des Service, der Professionalität und der Effizienz zu fördern und stets einen nahen Umgang sowie hochwertige Lösungen anzubieten.",
        "Die kontinuierliche Weiterbildung und die aktive Beteiligung unseres Personals an der Verbesserung von Prozessen und der Umsetzung guter Praktiken zu stärken.",
        "Den Schutz von Gesundheit und Sicherheit aller Beteiligten sicherzustellen, indem sichere Arbeitsumgebungen und angemessene Bedingungen zur Vermeidung von Risiken und Unfällen bereitgestellt werden.",
        "Ein starkes Engagement für Nachhaltigkeit und Umweltschutz aufrechtzuerhalten, indem Maßnahmen zur Verringerung der Umweltauswirkungen und zur Erhaltung der natürlichen Umwelt angewandt werden.",
        "Die geltenden Gesetze, Normen und Anforderungen, zu denen sich unsere Organisation im Bereich Qualität, Sicherheit und Umwelt verpflichtet hat, strikt einzuhalten.",
        "Ziele der kontinuierlichen Verbesserung festzulegen, die jährlich überprüft werden, um zunehmend sichere, effiziente und nachhaltige Prozesse zu gewährleisten.",
        "Bei unseren ausgelagerten Tätigkeiten dieselben Standards in Qualität, Sicherheit und Umweltrespekt zu verlangen, die wir auch in unseren eigenen Arbeiten anwenden.",
        "Mit dieser integrierten Politik bekräftigen wir unser Wesen: ein solides, verantwortungsbewusstes Unternehmen zu sein, das sich für seine Kunden, sein Team und sein Umfeld einsetzt."
      ]
    },
    footerCorporateData: [
      "DOSMAS OBRAS Y PROYECTOS, S.L.",
      "Steuernummer: B-57397655",
      "Zentrale-Petra · Straße Petra-Santa Margalida, km 1,3 · 07520 Petra - Mallorca",
      "Niederlassung Palma · Gebäude Vip Asima, Gremi des Fusters, 33 · Lokal 6 - 3. Etage · 07009 Palma",
      "Telefon: 971 09 60 12",
      "E-Mail: info@dosmasgrup.com"
    ]
  }
};

export function getSiteContent(locale: Locale): SiteContentBundle {
  return siteContentByLocale[locale] ?? siteContentByLocale.es;
}

export function getNavigationLinks(locale: Locale) {
  return getSiteContent(locale).navigationLinks;
}

export function getRootsLink(locale: Locale) {
  return getSiteContent(locale).rootsLink;
}

export function getOfficeLocations(locale: Locale) {
  return getSiteContent(locale).officeLocations;
}

export function getHomeIntroParagraphs(locale: Locale) {
  return getSiteContent(locale).homeIntroParagraphs;
}

export function getFooterCorporateData(locale: Locale) {
  return getSiteContent(locale).footerCorporateData;
}

export const navigationLinks = siteContentByLocale.es.navigationLinks;
export const rootsLink = siteContentByLocale.es.rootsLink;
export const officeLocations = siteContentByLocale.es.officeLocations;
export const homeIntroParagraphs = siteContentByLocale.es.homeIntroParagraphs;
export const aboutUsContent = siteContentByLocale.es.aboutUsContent;
export const editorialSection = siteContentByLocale.es.editorialSection;
export const brandsSection = siteContentByLocale.es.brandsSection;
export const brandDetails = siteContentByLocale.es.brandDetails;
export const teamSection = siteContentByLocale.es.teamSection;
export const valuesSection = siteContentByLocale.es.valuesSection;
export const trustSection = siteContentByLocale.es.trustSection;
export const dossierLink = siteContentByLocale.es.dossierLink;
export const rscContent = siteContentByLocale.es.rscContent;
export const legalDataContent = siteContentByLocale.es.legalDataContent;
export const privacyPolicyContent = siteContentByLocale.es.privacyPolicyContent;
export const cookiePolicyContent = siteContentByLocale.es.cookiePolicyContent;
export const footerCorporateData = siteContentByLocale.es.footerCorporateData;
