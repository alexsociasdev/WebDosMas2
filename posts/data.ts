import { type Locale } from "@/lib/i18n";

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
  gallery?: string[];
  relatedServices: string[];
  relatedProjects: string[];
};

const postsByLocale: Record<Locale, PostItem[]> = {
  es: [
    {
      slug: "olivos-centenarios-para-jardines",
      title: "Pon un olivo centenario en tu jardín y transforma tu espacio en un lugar con alma",
      excerpt:
        "El olivo es un símbolo de paz, arraigo y belleza atemporal capaz de transformar cualquier jardín en un espacio con carácter y personalidad.",
      date: "2026-03-30",
      category: "Tot Natura",
      author: "Equipo DOSMAS GRUP",
      readingTime: "4 min",
      content: [
        "Hay árboles que decoran. Y hay árboles que transmiten algo mucho más profundo. El olivo pertenece a esa segunda categoría: es un símbolo de paz, de arraigo, de serenidad y de belleza atemporal. Su sola presencia tiene la capacidad de transformar un jardín en un espacio con carácter, armonía y personalidad.",
        "En Dosmas Grup sabemos que un entorno exterior bien pensado no solo se construye con materiales o diseño, sino también con elementos vivos que aportan identidad y emoción. Por eso, disponer de un olivo centenario en un jardín es una elección que va mucho más allá de lo ornamental. Es incorporar una pieza natural con historia, con fuerza visual y con una majestuosidad innata que nunca pasa desapercibida.",
        "El olivo irradia calma, ofrece una imagen acogedora y evoca abundancia. Su silueta noble, su tronco lleno de matices y su carácter mediterráneo lo convierten en una opción especialmente apreciada para quienes desean crear un espacio exterior elegante, equilibrado y con una estética que conecta con la tierra y con el paso del tiempo. Cuando además se trata de un ejemplar centenario, su valor emocional y visual se multiplica. Tradicionalmente, incluso se considera que aporta buena fortuna allí donde se planta, convirtiéndose en un símbolo de permanencia, bienestar y prosperidad.",
        "Otra de sus grandes virtudes es su extraordinaria capacidad de adaptación. El olivo es un árbol resistente, agradecido y de mantenimiento sencillo, capaz de adaptarse a diferentes temperaturas y tipos de terreno. Esa combinación entre belleza, simbolismo y practicidad hace de él una de las mejores elecciones para realzar cualquier jardín, ya sea en una vivienda particular, en una finca o en un espacio exterior de grandes dimensiones.",
        "En Dosmas Grup contamos con una amplia variedad de olivos, de distintos tamaños, edades y precios, para adaptarnos a las necesidades y preferencias de cada cliente. Y además, ofrecemos un servicio integral para que la experiencia sea completa: si lo deseas, transportamos y plantamos los olivos en cualquier punto de Mallorca, Menorca e Ibiza.",
        "Porque a veces un jardín no necesita mucho más para elevar su presencia que un árbol con historia, belleza y esencia mediterránea.",
        "En Dosmas Grup te ayudamos a encontrar el olivo ideal para dar a tu jardín un toque único, sereno y lleno de personalidad."
      ],
      image: "/images/posts/olivos/DSC00921.JPG",
      gallery: [
        "/images/posts/olivos/DSC00643.JPG",
        "/images/posts/olivos/DSC00735.JPG",
        "/images/posts/olivos/DSC00760.JPG",
        "/images/posts/olivos/DSC00918.JPG",
        "/images/posts/olivos/DSC00921.JPG",
        "/images/posts/olivos/DSC00943.JPG",
        "/images/posts/olivos/DSC00953.JPG",
        "/images/posts/olivos/IMG_7054.JPG"
      ],
      relatedServices: ["desbroces-y-trabajos-agricolas"],
      relatedProjects: []
    },
    {
      slug: "gestion-de-plazos-en-obra-civil",
      title: "Gestión de plazos en obra civil: cómo garantizar entregas sin desviaciones",
      excerpt:
        "Un enfoque práctico para planificar, coordinar y ejecutar proyectos de obra civil con control real de tiempos y recursos.",
      date: "2026-02-24",
      category: "Gestión de obra",
      author: "Equipo Técnico DOSMAS GRUP",
      readingTime: "5 min",
      content: [
        "En DOSMAS GRUP entendemos que el plazo es un compromiso operativo, no una estimación. Por eso trabajamos con planificación por fases, seguimiento diario de hitos críticos y coordinación continua entre oficina técnica, producción y logística.",
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
      relatedProjects: ["demolicion-en-santa-ponca", "aeropuerto-de-palma-reciclaje"]
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
      relatedProjects: ["excavacion-en-son-vida", "aeropuerto-de-palma-reciclaje"]
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
        "En DOSMAS GRUP abordamos la cimentación con enfoque integral: diseño, maquinaria especializada y coordinación entre equipos para asegurar resultados sólidos y duraderos."
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
      relatedProjects: ["aeropuerto-de-palma-reciclaje", "preparacion-terreno-son-ribotet"]
    }
  ],
  ca: [
    {
      slug: "olivos-centenarios-para-jardines",
      title: "Posa una olivera centenària al teu jardí i transforma el teu espai en un lloc amb ànima",
      excerpt:
        "L'olivera és un símbol de pau, arrelament i bellesa atemporal capaç de transformar qualsevol jardí en un espai amb caràcter i personalitat.",
      date: "2026-03-30",
      category: "Tot Natura",
      author: "Equip DOSMAS GRUP",
      readingTime: "4 min",
      content: [
        "Hi ha arbres que decoren. I n'hi ha que transmeten alguna cosa molt més profunda. L'olivera pertany a aquesta segona categoria: és un símbol de pau, d'arrelament, de serenor i de bellesa atemporal. La seva sola presència té la capacitat de transformar un jardí en un espai amb caràcter, harmonia i personalitat.",
        "A Dosmas Grup sabem que un entorn exterior ben pensat no es construeix només amb materials o disseny, sinó també amb elements vius que aporten identitat i emoció. Per això, disposar d'una olivera centenària en un jardí és una elecció que va molt més enllà de l'ornamental. És incorporar una peça natural amb història, amb força visual i amb una majestuositat innata que mai no passa desapercebuda.",
        "L'olivera irradia calma, ofereix una imatge acollidora i evoca abundància. La seva silueta noble, el seu tronc ple de matisos i el seu caràcter mediterrani la converteixen en una opció especialment apreciada per a qui desitja crear un espai exterior elegant, equilibrat i amb una estètica connectada amb la terra i amb el pas del temps. Quan a més es tracta d'un exemplar centenari, el seu valor emocional i visual es multiplica. Tradicionalment, fins i tot es considera que aporta bona fortuna allà on es planta, convertint-se en un símbol de permanència, benestar i prosperitat.",
        "Una altra de les seves grans virtuts és la seva extraordinària capacitat d'adaptació. L'olivera és un arbre resistent, agraït i de manteniment senzill, capaç d'adaptar-se a diferents temperatures i tipus de terreny. Aquesta combinació entre bellesa, simbolisme i practicitat fa d'ella una de les millors eleccions per realçar qualsevol jardí, ja sigui en un habitatge particular, en una finca o en un espai exterior de grans dimensions.",
        "A Dosmas Grup comptam amb una àmplia varietat d'oliveres, de diferents mides, edats i preus, per adaptar-nos a les necessitats i preferències de cada client. A més, oferim un servei integral perquè l'experiència sigui completa: si ho desitges, transportam i plantam les oliveres a qualsevol punt de Mallorca, Menorca i Eivissa.",
        "Perquè a vegades un jardí no necessita gaire més per elevar la seva presència que un arbre amb història, bellesa i essència mediterrània.",
        "A Dosmas Grup t'ajudam a trobar l'olivera ideal per donar al teu jardí un toc únic, serè i ple de personalitat."
      ],
      image: "/images/posts/olivos/DSC00921.JPG",
      gallery: [
        "/images/posts/olivos/DSC00643.JPG",
        "/images/posts/olivos/DSC00735.JPG",
        "/images/posts/olivos/DSC00760.JPG",
        "/images/posts/olivos/DSC00918.JPG",
        "/images/posts/olivos/DSC00921.JPG",
        "/images/posts/olivos/DSC00943.JPG",
        "/images/posts/olivos/DSC00953.JPG",
        "/images/posts/olivos/IMG_7054.JPG"
      ],
      relatedServices: ["desbroces-y-trabajos-agricolas"],
      relatedProjects: []
    },
    {
      slug: "gestion-de-plazos-en-obra-civil",
      title: "Gestió de terminis en obra civil: com garantir lliuraments sense desviacions",
      excerpt:
        "Un enfocament pràctic per planificar, coordinar i executar projectes d'obra civil amb control real de temps i recursos.",
      date: "2026-02-24",
      category: "Gestió d'obra",
      author: "Equip Tècnic DOSMAS GRUP",
      readingTime: "5 min",
      content: [
        "A DOSMAS GRUP entenem que el termini és un compromís operatiu, no una estimació. Per això treballam amb planificació per fases, seguiment diari de fites crítiques i coordinació contínua entre oficina tècnica, producció i logística.",
        "La clau és anticipar els colls d'ampolla abans que impactin a l'obra: disponibilitat de maquinària, seqüència de subcontractes, condicionants meteorològics i subministraments. Aquest enfocament preventiu redueix incidències i millora la productivitat global del projecte.",
        "Aplicant metodologies de control i comunicació estructurada, aconseguim mantenir la qualitat tècnica sense comprometre terminis. El resultat és una execució més fiable per al client i una presa de decisions més ràpida per a l'equip d'obra."
      ],
      image: "/images/projects/son-ribotet/03.webp",
      relatedServices: ["excavaciones", "terraplenes-y-compactaciones", "obras-hidraulicas"],
      relatedProjects: ["preparacion-terreno-son-ribotet", "remodelacion-placa-des-mercat"]
    },
    {
      slug: "demoliciones-seguras-entornos-urbanos",
      title: "Demolicions segures en entorns urbans: protocols que marquen la diferència",
      excerpt:
        "Les fases clau per executar enderrocs en zones sensibles minimitzant riscos operatius, ambientals i logístics.",
      date: "2026-02-10",
      category: "Seguretat",
      author: "Departament de Prevenció",
      readingTime: "4 min",
      content: [
        "Cada demolició en entorn urbà exigeix una anàlisi prèvia detallada de l'edifici, el seu context i les interferències de servei. Treballam amb plans específics de seguretat, senyalització perimetral i control d'accessos per protegir el personal i l'entorn.",
        "La seqüència d'enderroc es defineix segons la tipologia estructural, la proximitat a tercers i la gestió de residus. Aquesta metodologia permet intervenir amb precisió, reduir temps morts i garantir una traçabilitat completa dels materials retirats.",
        "A més, integram mesures de control de pols, renou i transport per complir la normativa i minimitzar l'impacte veïnal. Seguretat, eficiència i compliment formen part del mateix estàndard operatiu."
      ],
      image: "/images/projects/demolicion-en-santa-ponca/04.webp",
      relatedServices: ["derribos-y-demoliciones", "transporte-de-tierras"],
      relatedProjects: ["demolicion-en-santa-ponca", "aeropuerto-de-palma-reciclaje"]
    },
    {
      slug: "innovacion-en-maquinaria-2026",
      title: "Innovació en maquinària 2026: eficiència, control i menor impacte ambiental",
      excerpt:
        "L'evolució de la maquinària pesada permet més precisió d'execució i una gestió energètica més eficient.",
      date: "2026-01-28",
      category: "Tecnologia",
      author: "Direcció d'Operacions",
      readingTime: "6 min",
      content: [
        "La incorporació de maquinària d'última generació ha canviat la manera d'executar moviments de terra, desmunts i fonamentacions. Avui treballam amb més control geomètric, menys consum per cicle i més estabilitat en els rendiments.",
        "Els sistemes d'assistència i monitoratge en cabina aporten dades útils per optimitzar maniobres, reduir temps improductius i millorar el manteniment preventiu. Això es tradueix en obres més segures i amb més previsibilitat.",
        "La tecnologia no substitueix l'experiència de l'equip; la potencia. Quan ambdues es combinen, el resultat és una execució més neta, més ràpida i tècnicament més robusta."
      ],
      image: "/images/projects/excavacion-en-son-vida/01.webp",
      relatedServices: ["excavaciones", "desmontes", "cimentaciones"],
      relatedProjects: ["excavacion-en-son-vida", "aeropuerto-de-palma-reciclaje"]
    },
    {
      slug: "rehabilitacion-de-espacios-urbanos",
      title: "Rehabilitació d'espais urbans: disseny funcional i durabilitat",
      excerpt:
        "Com transformar places i entorns públics per millorar convivència, accessibilitat i ús ciutadà.",
      date: "2026-01-18",
      category: "Obra pública",
      author: "Oficina Tècnica",
      readingTime: "5 min",
      content: [
        "La renovació d'espais urbans exigeix equilibrar identitat local, funcionalitat i durabilitat. A cada intervenció estudiam fluxos de vianants, manteniment a llarg termini i requisits d'accessibilitat per assegurar un ús real de l'espai.",
        "La selecció de materials i sistemes constructius condiciona el comportament futur de la plaça o del vial. Per això prioritzam solucions robustes que redueixin patologies i simplifiquin la conservació.",
        "Quan una obra pública està ben dissenyada i ben executada, l'impacte transcendeix l'estètic: millora la seguretat, fomenta l'activitat local i reforça la vida comunitària."
      ],
      image: "/images/projects/placa-des-mercat-maria-de-la-salut/02.webp",
      relatedServices: ["arreglo-y-acondicionamiento-de-caminos-y-carreteras", "obras-hidraulicas"],
      relatedProjects: ["remodelacion-placa-des-mercat"]
    },
    {
      slug: "cimentacion-y-control-geotecnico",
      title: "Fonamentació i control geotècnic: decisions primerenques per a obres més segures",
      excerpt:
        "Per què l'estudi del terreny i el control continu durant l'execució són determinants en l'estabilitat final.",
      date: "2026-01-09",
      category: "Enginyeria",
      author: "Àrea d'Enginyeria",
      readingTime: "5 min",
      content: [
        "La fonamentació és una fase crítica que defineix el comportament estructural a llarg termini. Una anàlisi geotècnica correcta permet seleccionar tipologies i procediments adequats segons la naturalesa del sòl i les condicions hidrogeològiques.",
        "Durant l'execució, el control de paràmetres i la supervisió contínua redueixen la incertesa i eviten correccions costoses en fases avançades. Aquest control tècnic millora tant la seguretat com el rendiment de l'obra.",
        "A DOSMAS GRUP abordam la fonamentació amb un enfocament integral: disseny, maquinària especialitzada i coordinació entre equips per assegurar resultats sòlids i duradors."
      ],
      image: "/images/projects/casa-en-son-vida/02.webp",
      relatedServices: ["cimentaciones", "cimentaciones-en-edificios", "zanjas-y-cimientos"],
      relatedProjects: ["construccion-casa-en-son-vida", "excavacion-en-son-vida"]
    },
    {
      slug: "logistica-de-transporte-en-islas",
      title: "Logística de transport de maquinària i terres en entorn insular",
      excerpt:
        "Planificació logística, control documental i coordinació operativa per al transport especialitzat a les Balears.",
      date: "2025-12-20",
      category: "Logística",
      author: "Àrea de Logística",
      readingTime: "4 min",
      content: [
        "En el context insular, la logística de maquinària i terres requereix una planificació precisa de rutes, franges horàries, autoritzacions i capacitats de càrrega. Cada decisió impacta en cost, termini i seguretat.",
        "La coordinació entre producció i transport permet mantenir la continuïtat de l'obra, evitar aturades i optimitzar l'ús de la flota. Aquesta feina es recolza en una gestió documental rigorosa i en conductors especialitzats.",
        "El nostre enfocament combina fiabilitat operativa i compliment normatiu perquè cada trasllat arribi a temps i en condicions òptimes, fins i tot en projectes d'alta complexitat."
      ],
      image: "/images/projects/son-ribotet/08.webp",
      relatedServices: ["transporte-de-maquinaria", "transporte-de-tierras", "suministro-de-agua-en-mallorca"],
      relatedProjects: ["aeropuerto-de-palma-reciclaje", "preparacion-terreno-son-ribotet"]
    }
  ],
  en: [
    {
      slug: "olivos-centenarios-para-jardines",
      title: "Place a century-old olive tree in your garden and turn your space into a place with soul",
      excerpt:
        "The olive tree is a symbol of peace, roots and timeless beauty capable of turning any garden into a space with character and personality.",
      date: "2026-03-30",
      category: "Tot Natura",
      author: "DOSMAS GRUP Team",
      readingTime: "4 min",
      content: [
        "Some trees simply decorate. Others convey something much deeper. The olive tree belongs to that second category: it is a symbol of peace, rooted identity, serenity and timeless beauty. Its presence alone can transform a garden into a space with character, harmony and personality.",
        "At Dosmas Grup we know that a well-designed outdoor environment is not built only with materials or design, but also with living elements that bring identity and emotion. That is why having a century-old olive tree in a garden is a choice that goes far beyond ornamentation. It means incorporating a natural piece with history, visual strength and innate majesty that never goes unnoticed.",
        "The olive tree radiates calm, offers a welcoming image and evokes abundance. Its noble silhouette, its textured trunk and its Mediterranean character make it a highly valued choice for those who want to create an elegant, balanced outdoor space with an aesthetic connected to the land and the passing of time. When it is also a centenary specimen, its emotional and visual value grows even more. Traditionally, it is even considered to bring good fortune wherever it is planted, becoming a symbol of permanence, well-being and prosperity.",
        "Another of its great virtues is its extraordinary adaptability. The olive tree is a resilient, grateful and low-maintenance tree, capable of adapting to different temperatures and types of soil. This combination of beauty, symbolism and practicality makes it one of the best choices for enhancing any garden, whether at a private home, on an estate or in a large outdoor space.",
        "At Dosmas Grup we offer a wide variety of olive trees in different sizes, ages and price ranges so we can adapt to each client's needs and preferences. We also provide a complete service so the experience is fully covered: if you wish, we transport and plant olive trees anywhere in Mallorca, Menorca and Ibiza.",
        "Because sometimes a garden needs nothing more to elevate its presence than a tree with history, beauty and Mediterranean essence.",
        "At Dosmas Grup we help you find the ideal olive tree to give your garden a unique, serene and highly personal touch."
      ],
      image: "/images/posts/olivos/DSC00921.JPG",
      gallery: [
        "/images/posts/olivos/DSC00643.JPG",
        "/images/posts/olivos/DSC00735.JPG",
        "/images/posts/olivos/DSC00760.JPG",
        "/images/posts/olivos/DSC00918.JPG",
        "/images/posts/olivos/DSC00921.JPG",
        "/images/posts/olivos/DSC00943.JPG",
        "/images/posts/olivos/DSC00953.JPG",
        "/images/posts/olivos/IMG_7054.JPG"
      ],
      relatedServices: ["desbroces-y-trabajos-agricolas"],
      relatedProjects: []
    },
    {
      slug: "gestion-de-plazos-en-obra-civil",
      title: "Schedule management in civil works: how to guarantee delivery without deviations",
      excerpt:
        "A practical approach to planning, coordinating and executing civil works projects with real control over time and resources.",
      date: "2026-02-24",
      category: "Project management",
      author: "DOSMAS GRUP Technical Team",
      readingTime: "5 min",
      content: [
        "At DOSMAS GRUP we understand that schedule is an operational commitment, not an estimate. That is why we work with phase planning, daily monitoring of critical milestones and continuous coordination between technical office, production and logistics.",
        "The key is to anticipate bottlenecks before they affect the site: machinery availability, subcontractor sequencing, weather conditions and supply chain constraints. This preventive approach reduces incidents and improves the overall productivity of the project.",
        "By applying structured control and communication methodologies, we manage to maintain technical quality without compromising deadlines. The result is more reliable execution for the client and faster decision-making for the site team."
      ],
      image: "/images/projects/son-ribotet/03.webp",
      relatedServices: ["excavaciones", "terraplenes-y-compactaciones", "obras-hidraulicas"],
      relatedProjects: ["preparacion-terreno-son-ribotet", "remodelacion-placa-des-mercat"]
    },
    {
      slug: "demoliciones-seguras-entornos-urbanos",
      title: "Safe demolitions in urban environments: protocols that make the difference",
      excerpt:
        "The key phases for carrying out demolitions in sensitive areas while minimizing operational, environmental and logistics risks.",
      date: "2026-02-10",
      category: "Safety",
      author: "Prevention Department",
      readingTime: "4 min",
      content: [
        "Every demolition in an urban environment requires a detailed preliminary analysis of the building, its context and service interferences. We work with specific safety plans, perimeter signage and access control to protect staff and the surrounding area.",
        "The demolition sequence is defined according to structural typology, proximity to third parties and waste management. This methodology allows us to intervene with precision, reduce downtime and guarantee full traceability of removed materials.",
        "In addition, we integrate dust, noise and transport control measures to comply with regulations and minimize neighbourhood impact. Safety, efficiency and compliance are part of the same operating standard."
      ],
      image: "/images/projects/demolicion-en-santa-ponca/04.webp",
      relatedServices: ["derribos-y-demoliciones", "transporte-de-tierras"],
      relatedProjects: ["demolicion-en-santa-ponca", "aeropuerto-de-palma-reciclaje"]
    },
    {
      slug: "innovacion-en-maquinaria-2026",
      title: "Machinery innovation 2026: efficiency, control and lower environmental impact",
      excerpt:
        "The evolution of heavy machinery enables greater execution precision and more efficient energy management.",
      date: "2026-01-28",
      category: "Technology",
      author: "Operations Management",
      readingTime: "6 min",
      content: [
        "The incorporation of latest-generation machinery has changed the way earthmoving, cut-and-fill works and foundations are executed. Today we work with greater geometric control, lower per-cycle consumption and more stable performance.",
        "In-cab assistance and monitoring systems provide useful data to optimize manoeuvres, reduce unproductive time and improve preventive maintenance. This results in safer works and greater predictability.",
        "Technology does not replace the experience of the team; it amplifies it. When both are combined, the result is cleaner, faster and technically more robust execution."
      ],
      image: "/images/projects/excavacion-en-son-vida/01.webp",
      relatedServices: ["excavaciones", "desmontes", "cimentaciones"],
      relatedProjects: ["excavacion-en-son-vida", "aeropuerto-de-palma-reciclaje"]
    },
    {
      slug: "rehabilitacion-de-espacios-urbanos",
      title: "Urban space rehabilitation: functional design and durability",
      excerpt:
        "How to transform squares and public environments to improve coexistence, accessibility and citizen use.",
      date: "2026-01-18",
      category: "Public works",
      author: "Technical Office",
      readingTime: "5 min",
      content: [
        "Renewing urban spaces requires balancing local identity, functionality and durability. In every intervention we study pedestrian flows, long-term maintenance and accessibility requirements to ensure real use of the space.",
        "The choice of materials and construction systems conditions the future behaviour of the square or road. That is why we prioritize robust solutions that reduce pathologies and simplify conservation.",
        "When a public work is well designed and well executed, the impact goes beyond aesthetics: it improves safety, encourages local activity and strengthens community life."
      ],
      image: "/images/projects/placa-des-mercat-maria-de-la-salut/02.webp",
      relatedServices: ["arreglo-y-acondicionamiento-de-caminos-y-carreteras", "obras-hidraulicas"],
      relatedProjects: ["remodelacion-placa-des-mercat"]
    },
    {
      slug: "cimentacion-y-control-geotecnico",
      title: "Foundations and geotechnical control: early decisions for safer works",
      excerpt:
        "Why ground investigation and continuous control during execution are decisive for final stability.",
      date: "2026-01-09",
      category: "Engineering",
      author: "Engineering Area",
      readingTime: "5 min",
      content: [
        "Foundations are a critical phase that define long-term structural behaviour. A proper geotechnical analysis makes it possible to select suitable typologies and procedures according to soil nature and hydrogeological conditions.",
        "During execution, parameter control and continuous supervision reduce uncertainty and avoid costly corrections in advanced stages. This technical control improves both safety and site performance.",
        "At DOSMAS GRUP we approach foundations with an integrated vision: design, specialized machinery and coordination between teams to ensure solid and long-lasting results."
      ],
      image: "/images/projects/casa-en-son-vida/02.webp",
      relatedServices: ["cimentaciones", "cimentaciones-en-edificios", "zanjas-y-cimientos"],
      relatedProjects: ["construccion-casa-en-son-vida", "excavacion-en-son-vida"]
    },
    {
      slug: "logistica-de-transporte-en-islas",
      title: "Machinery and earth transport logistics in an island environment",
      excerpt:
        "Logistics planning, document control and operational coordination for specialized transport in the Balearic Islands.",
      date: "2025-12-20",
      category: "Logistics",
      author: "Logistics Area",
      readingTime: "4 min",
      content: [
        "In an island context, the logistics of machinery and earth transport requires precise planning of routes, time windows, permits and load capacities. Every decision affects cost, deadline and safety.",
        "Coordination between production and transport makes it possible to maintain site continuity, avoid stoppages and optimize fleet use. This work relies on rigorous document management and specialized drivers.",
        "Our approach combines operational reliability and regulatory compliance so that every transfer arrives on time and in optimal condition, even in highly complex projects."
      ],
      image: "/images/projects/son-ribotet/08.webp",
      relatedServices: ["transporte-de-maquinaria", "transporte-de-tierras", "suministro-de-agua-en-mallorca"],
      relatedProjects: ["aeropuerto-de-palma-reciclaje", "preparacion-terreno-son-ribotet"]
    }
  ],
  de: [
    {
      slug: "olivos-centenarios-para-jardines",
      title: "Setzen Sie einen jahrhundertealten Olivenbaum in Ihren Garten und verwandeln Sie Ihren Außenraum in einen Ort mit Seele",
      excerpt:
        "Der Olivenbaum ist ein Symbol für Frieden, Verwurzelung und zeitlose Schönheit, das jeden Garten in einen Raum mit Charakter und Persönlichkeit verwandeln kann.",
      date: "2026-03-30",
      category: "Tot Natura",
      author: "DOSMAS-GRUP-Team",
      readingTime: "4 Min.",
      content: [
        "Es gibt Bäume, die einfach dekorieren. Und es gibt Bäume, die etwas viel Tieferes vermitteln. Der Olivenbaum gehört zu dieser zweiten Kategorie: Er ist ein Symbol für Frieden, Verwurzelung, Gelassenheit und zeitlose Schönheit. Seine bloße Präsenz kann einen Garten in einen Ort mit Charakter, Harmonie und Persönlichkeit verwandeln.",
        "Bei Dosmas Grup wissen wir, dass ein gut geplanter Außenraum nicht nur aus Materialien oder Design besteht, sondern auch aus lebenden Elementen, die Identität und Emotion vermitteln. Deshalb ist ein jahrhundertealter Olivenbaum im Garten eine Entscheidung, die weit über das Dekorative hinausgeht. Man integriert ein Naturstück mit Geschichte, visueller Kraft und einer angeborenen Majestät, die niemals unbemerkt bleibt.",
        "Der Olivenbaum strahlt Ruhe aus, vermittelt ein einladendes Bild und weckt das Gefühl von Fülle. Seine edle Silhouette, sein vielschichtiger Stamm und sein mediterraner Charakter machen ihn zu einer besonders geschätzten Wahl für alle, die einen eleganten, ausgewogenen Außenraum schaffen möchten, dessen Ästhetik mit der Erde und dem Lauf der Zeit verbunden ist. Handelt es sich zudem um ein jahrhundertealtes Exemplar, vervielfacht sich sein emotionaler und visueller Wert. Traditionell gilt er sogar als Glücksbringer dort, wo er gepflanzt wird, und wird zu einem Symbol für Beständigkeit, Wohlbefinden und Wohlstand.",
        "Eine weitere große Stärke ist seine außergewöhnliche Anpassungsfähigkeit. Der Olivenbaum ist widerstandsfähig, dankbar und pflegeleicht und kann sich an unterschiedliche Temperaturen und Bodenarten anpassen. Diese Kombination aus Schönheit, Symbolkraft und Praktikabilität macht ihn zu einer der besten Entscheidungen, um jeden Garten aufzuwerten – sei es bei einem Privathaus, auf einem Landgut oder in einem großen Außenbereich.",
        "Bei Dosmas Grup verfügen wir über eine große Auswahl an Olivenbäumen in unterschiedlichen Größen, Altersstufen und Preislagen, damit wir uns an die Bedürfnisse und Vorlieben jedes Kunden anpassen können. Darüber hinaus bieten wir einen Komplettservice an: Wenn Sie möchten, transportieren und pflanzen wir die Olivenbäume überall auf Mallorca, Menorca und Ibiza.",
        "Denn manchmal braucht ein Garten nicht viel mehr, um seine Ausstrahlung zu steigern, als einen Baum mit Geschichte, Schönheit und mediterraner Essenz.",
        "Bei Dosmas Grup helfen wir Ihnen, den idealen Olivenbaum zu finden, um Ihrem Garten eine einzigartige, ruhige und charaktervolle Note zu verleihen."
      ],
      image: "/images/posts/olivos/DSC00921.JPG",
      gallery: [
        "/images/posts/olivos/DSC00643.JPG",
        "/images/posts/olivos/DSC00735.JPG",
        "/images/posts/olivos/DSC00760.JPG",
        "/images/posts/olivos/DSC00918.JPG",
        "/images/posts/olivos/DSC00921.JPG",
        "/images/posts/olivos/DSC00943.JPG",
        "/images/posts/olivos/DSC00953.JPG",
        "/images/posts/olivos/IMG_7054.JPG"
      ],
      relatedServices: ["desbroces-y-trabajos-agricolas"],
      relatedProjects: []
    },
    {
      slug: "gestion-de-plazos-en-obra-civil",
      title: "Terminsteuerung im Tiefbau: wie sich Übergaben ohne Abweichungen sicherstellen lassen",
      excerpt:
        "Ein praxisnaher Ansatz zur Planung, Koordination und Ausführung von Tiefbauprojekten mit echter Kontrolle über Zeit und Ressourcen.",
      date: "2026-02-24",
      category: "Bauleitung",
      author: "Technisches Team DOSMAS GRUP",
      readingTime: "5 Min.",
      content: [
        "Bei DOSMAS GRUP verstehen wir Termine als operatives Versprechen und nicht als bloße Schätzung. Deshalb arbeiten wir mit Phasenplanung, täglicher Überwachung kritischer Meilensteine und einer kontinuierlichen Abstimmung zwischen Technikbüro, Produktion und Logistik.",
        "Entscheidend ist es, Engpässe zu erkennen, bevor sie die Baustelle beeinträchtigen: Verfügbarkeit von Maschinen, Reihenfolge der Nachunternehmer, Witterungseinflüsse und Lieferketten. Dieser präventive Ansatz reduziert Zwischenfälle und verbessert die Gesamtproduktivität des Projekts.",
        "Durch strukturierte Kontroll- und Kommunikationsmethoden gelingt es uns, die technische Qualität zu halten, ohne Termine zu gefährden. Das Ergebnis ist eine verlässlichere Ausführung für den Auftraggeber und eine schnellere Entscheidungsfindung für das Baustellenteam."
      ],
      image: "/images/projects/son-ribotet/03.webp",
      relatedServices: ["excavaciones", "terraplenes-y-compactaciones", "obras-hidraulicas"],
      relatedProjects: ["preparacion-terreno-son-ribotet", "remodelacion-placa-des-mercat"]
    },
    {
      slug: "demoliciones-seguras-entornos-urbanos",
      title: "Sichere Abbrüche in urbanen Umgebungen: Protokolle, die den Unterschied machen",
      excerpt:
        "Die Schlüsselschritte für Abbrucharbeiten in sensiblen Bereichen bei minimierten operativen, ökologischen und logistischen Risiken.",
      date: "2026-02-10",
      category: "Sicherheit",
      author: "Abteilung Prävention",
      readingTime: "4 Min.",
      content: [
        "Jeder Abbruch im städtischen Umfeld erfordert eine detaillierte Voranalyse des Gebäudes, seines Kontextes und möglicher Leitungs- und Dienstleistungsüberschneidungen. Wir arbeiten mit spezifischen Sicherheitsplänen, Perimetersignalisierung und Zugangskontrollen, um Personal und Umfeld zu schützen.",
        "Die Abbruchsequenz wird nach Tragwerkstyp, Nähe zu Dritten und Entsorgungsmanagement definiert. Diese Methodik ermöglicht präzise Eingriffe, reduziert Stillstandszeiten und gewährleistet eine vollständige Rückverfolgbarkeit der entfernten Materialien.",
        "Darüber hinaus integrieren wir Maßnahmen zur Kontrolle von Staub, Lärm und Transport, um Vorschriften einzuhalten und die Belastung für die Nachbarschaft zu minimieren. Sicherheit, Effizienz und Regelkonformität gehören für uns zum selben operativen Standard."
      ],
      image: "/images/projects/demolicion-en-santa-ponca/04.webp",
      relatedServices: ["derribos-y-demoliciones", "transporte-de-tierras"],
      relatedProjects: ["demolicion-en-santa-ponca", "aeropuerto-de-palma-reciclaje"]
    },
    {
      slug: "innovacion-en-maquinaria-2026",
      title: "Innovation bei Maschinen 2026: Effizienz, Kontrolle und geringere Umweltbelastung",
      excerpt:
        "Die Entwicklung schwerer Maschinen ermöglicht eine präzisere Ausführung und ein effizienteres Energiemanagement.",
      date: "2026-01-28",
      category: "Technologie",
      author: "Betriebsleitung",
      readingTime: "6 Min.",
      content: [
        "Der Einsatz modernster Maschinen hat die Ausführung von Erdbewegungen, Geländeanpassungen und Fundamentierungen grundlegend verändert. Heute arbeiten wir mit höherer geometrischer Kontrolle, geringerem Verbrauch pro Zyklus und stabileren Leistungswerten.",
        "Assistenz- und Monitoringsysteme in der Kabine liefern nützliche Daten, um Manöver zu optimieren, unproduktive Zeiten zu reduzieren und die vorbeugende Wartung zu verbessern. Das führt zu sichereren Bauvorhaben und größerer Planbarkeit.",
        "Technologie ersetzt die Erfahrung des Teams nicht – sie verstärkt sie. Wenn beides zusammenkommt, entsteht eine sauberere, schnellere und technisch robustere Ausführung."
      ],
      image: "/images/projects/excavacion-en-son-vida/01.webp",
      relatedServices: ["excavaciones", "desmontes", "cimentaciones"],
      relatedProjects: ["excavacion-en-son-vida", "aeropuerto-de-palma-reciclaje"]
    },
    {
      slug: "rehabilitacion-de-espacios-urbanos",
      title: "Aufwertung städtischer Räume: funktionales Design und Langlebigkeit",
      excerpt:
        "Wie Plätze und öffentliche Räume so transformiert werden, dass Zusammenleben, Barrierefreiheit und alltägliche Nutzung verbessert werden.",
      date: "2026-01-18",
      category: "Öffentliche Arbeiten",
      author: "Technisches Büro",
      readingTime: "5 Min.",
      content: [
        "Die Erneuerung städtischer Räume erfordert ein Gleichgewicht zwischen lokaler Identität, Funktionalität und Langlebigkeit. Bei jedem Eingriff analysieren wir Fußgängerströme, langfristige Instandhaltung und Anforderungen an die Zugänglichkeit, um eine echte Nutzung des Raums sicherzustellen.",
        "Die Auswahl von Materialien und Bausystemen bestimmt das spätere Verhalten des Platzes oder Verkehrsraums. Deshalb setzen wir auf robuste Lösungen, die Schäden reduzieren und die Erhaltung vereinfachen.",
        "Wenn ein öffentliches Bauwerk gut geplant und gut ausgeführt ist, geht seine Wirkung über das Ästhetische hinaus: Es verbessert die Sicherheit, fördert die lokale Aktivität und stärkt das Gemeinschaftsleben."
      ],
      image: "/images/projects/placa-des-mercat-maria-de-la-salut/02.webp",
      relatedServices: ["arreglo-y-acondicionamiento-de-caminos-y-carreteras", "obras-hidraulicas"],
      relatedProjects: ["remodelacion-placa-des-mercat"]
    },
    {
      slug: "cimentacion-y-control-geotecnico",
      title: "Fundamentierung und geotechnische Kontrolle: frühe Entscheidungen für sicherere Bauvorhaben",
      excerpt:
        "Warum Baugrunduntersuchung und kontinuierliche Kontrolle während der Ausführung entscheidend für die endgültige Stabilität sind.",
      date: "2026-01-09",
      category: "Ingenieurwesen",
      author: "Ingenieurbereich",
      readingTime: "5 Min.",
      content: [
        "Die Fundamentierung ist eine kritische Phase, die das langfristige Tragverhalten bestimmt. Eine korrekte geotechnische Analyse ermöglicht die Auswahl geeigneter Gründungsarten und Verfahren entsprechend der Bodenbeschaffenheit und hydrogeologischen Bedingungen.",
        "Während der Ausführung reduzieren die Kontrolle von Parametern und die kontinuierliche Überwachung Unsicherheiten und vermeiden kostspielige Korrekturen in fortgeschrittenen Bauphasen. Diese technische Kontrolle verbessert sowohl die Sicherheit als auch die Leistung der Baustelle.",
        "Bei DOSMAS GRUP betrachten wir die Fundamentierung ganzheitlich: Planung, spezialisierte Maschinen und Koordination zwischen den Teams sorgen für solide und dauerhafte Ergebnisse."
      ],
      image: "/images/projects/casa-en-son-vida/02.webp",
      relatedServices: ["cimentaciones", "cimentaciones-en-edificios", "zanjas-y-cimientos"],
      relatedProjects: ["construccion-casa-en-son-vida", "excavacion-en-son-vida"]
    },
    {
      slug: "logistica-de-transporte-en-islas",
      title: "Logistik für Maschinen- und Erdtransport in Inselgebieten",
      excerpt:
        "Logistikplanung, Dokumentenkontrolle und operative Koordination für Spezialtransporte auf den Balearen.",
      date: "2025-12-20",
      category: "Logistik",
      author: "Logistikbereich",
      readingTime: "4 Min.",
      content: [
        "Im Inselkontext erfordert die Logistik von Maschinen und Erdtransport eine präzise Planung von Routen, Zeitfenstern, Genehmigungen und Ladekapazitäten. Jede Entscheidung wirkt sich auf Kosten, Fristen und Sicherheit aus.",
        "Die Koordination zwischen Produktion und Transport ermöglicht einen kontinuierlichen Bauablauf, vermeidet Stillstände und optimiert die Nutzung der Flotte. Diese Arbeit stützt sich auf ein rigoroses Dokumentenmanagement und auf spezialisierte Fahrer.",
        "Unser Ansatz verbindet operative Zuverlässigkeit und Regelkonformität, damit jeder Transport pünktlich und unter optimalen Bedingungen ankommt – selbst bei hochkomplexen Projekten."
      ],
      image: "/images/projects/son-ribotet/08.webp",
      relatedServices: ["transporte-de-maquinaria", "transporte-de-tierras", "suministro-de-agua-en-mallorca"],
      relatedProjects: ["aeropuerto-de-palma-reciclaje", "preparacion-terreno-son-ribotet"]
    }
  ]
};

export function getPostsData(locale: Locale): PostItem[] {
  return postsByLocale[locale] ?? postsByLocale.es;
}

export function getPostsBySlug(locale: Locale): Record<string, PostItem> {
  return Object.fromEntries(getPostsData(locale).map((post) => [post.slug, post])) as Record<string, PostItem>;
}

export const postsData: PostItem[] = postsByLocale.es;
export const postsBySlug = getPostsBySlug("es");
