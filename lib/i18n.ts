export const locales = ["es", "ca", "en"] as const;
export type Locale = (typeof locales)[number];

export const DEFAULT_LOCALE: Locale = "es";
export const LOCALE_COOKIE_NAME = "dosmas_locale";

export function isLocale(value: string | null | undefined): value is Locale {
  return !!value && locales.includes(value as Locale);
}

export function resolveLocale(value: string | null | undefined): Locale {
  return isLocale(value) ? value : DEFAULT_LOCALE;
}

export type Dictionary = {
  lang: string;
  skipToContent: string;
  nav: {
    about: string;
    projects: string;
    workAreas: string;
    news: string;
    rsc: string;
    quote: string;
    contact: string;
    budgetShort: string;
    menu: string;
    menuToggle: string;
  };
  common: {
    home: string;
    services: string;
    projects: string;
    news: string;
    contact: string;
    quote: string;
    category: string;
    year: string;
    search: string;
    all: string;
    allMasc: string;
    viewDetail: string;
    viewService: string;
    viewProject: string;
    readArticle: string;
    readNews: string;
    requestQuote: string;
    relatedServices: string;
    relatedProjects: string;
    relatedNews: string;
    service: string;
    previous: string;
    next: string;
  };
  header: {
    languagesAriaPrefix: string;
  };
  footer: {
    corporateData: string;
    legal: string;
    internalLinks: string;
    channels: string;
    legalData: string;
    privacyPolicy: string;
    cookiePolicy: string;
    about: string;
    services: string;
    projects: string;
    news: string;
    rsc: string;
    contact: string;
  };
  floatingCta: {
    callNow: string;
    requestQuote: string;
    workWithUs: string;
  };
  cookieBanner: {
    ariaLabel: string;
    title: string;
    description: string;
    necessaryCookies: string;
    analytics: string;
    preferences: string;
    necessaryAria: string;
    analyticsAria: string;
    preferencesAria: string;
    rejectOptional: string;
    savePreferences: string;
    acceptAll: string;
  };
  forms: {
    contact: {
      fullName: string;
      phone: string;
      email: string;
      message: string;
      privacyAcceptance: string;
      honeypot: string;
      sending: string;
      submit: string;
      success: string;
      error: string;
    };
    quote: {
      fullName: string;
      company: string;
      email: string;
      phone: string;
      requestedService: string;
      projectLocation: string;
      projectDetails: string;
      privacyAcceptance: string;
      honeypot: string;
      sending: string;
      submit: string;
      success: string;
      error: string;
    };
    jobs: {
      fullName: string;
      phone: string;
      email: string;
      message: string;
      cv: string;
      cvHelp: string;
      privacyAcceptance: string;
      honeypot: string;
      sending: string;
      submit: string;
      success: string;
      error: string;
    };
  };
  home: {
    slide1: {
      eyebrow: string;
      title: string;
      description: string;
      cta: string;
      metric1: string;
      metric2: string;
      metric3: string;
      value1: string;
      value2: string;
      value3: string;
    };
    slide2: {
      eyebrow: string;
      title: string;
      description: string;
      cta: string;
      metric1: string;
      metric2: string;
      metric3: string;
      value1: string;
      value2: string;
      value3: string;
    };
    slide3: {
      eyebrow: string;
      title: string;
      description: string;
      cta: string;
      metric1: string;
      metric2: string;
      metric3: string;
      value1: string;
      value2: string;
      value3: string;
    };
    discoverMore: string;
    worker: string;
    statsTrajectory: string;
    statsProfessionals: string;
    statsVehicles: string;
    statsMachines: string;
    dossierButton: string;
  };
  pages: {
    contact: {
      pageTitle: string;
      pageSubtitle: string;
      heading: string;
      scheduleTitle: string;
      scheduleBody: string;
      mapTitle: string;
      breadcrumb: string;
      phoneLabel: string;
      emailLabel: string;
    };
    quote: {
      pageTitle: string;
      pageSubtitle: string;
      heading: string;
      intro1: string;
      intro2: string;
      commitmentTitle: string;
      commitmentBody: string;
      breadcrumb: string;
    };
    services: {
      pageTitle: string;
      pageSubtitle: string;
      eyebrow: string;
      heading: string;
      description: string;
      requestQuote: string;
      indexAria: string;
      filterTitle: string;
      detailSubtitle: string;
      ctaDescription: string;
      contactNow: string;
      projectsRelated: string;
    };
    projects: {
      pageTitle: string;
      pageSubtitle: string;
      eyebrow: string;
      heading: string;
      description: string;
      filterTitle: string;
      filterCategory: string;
      filterYear: string;
      filterSearch: string;
      searchPlaceholder: string;
      caseStudy: string;
      challenge: string;
      solution: string;
      execution: string;
      result: string;
      needSimilarProject: string;
    };
    news: {
      pageTitle: string;
      pageSubtitle: string;
      eyebrow: string;
      heading: string;
      description: string;
      detailSubtitle: string;
    };
    workAreas: {
      pageTitle: string;
      pageSubtitle: string;
      heading: string;
      description: string;
      budget: string;
    };
    rsc: {
      pageTitle: string;
      pageSubtitle: string;
      eyebrow: string;
      activePrograms: string;
      annualTrainingHours: string;
      solidarityActions: string;
      partnerEntities: string;
      collaborateTitle: string;
      collaborateBody: string;
      collaborateCta: string;
    };
    legal: {
      legalData: string;
      privacyPolicy: string;
      cookiePolicy: string;
      integratedPolicy: string;
    };
    notFound: {
      title: string;
      description: string;
      backHome: string;
    };
  };
};

const dictionaries: Record<Locale, Dictionary> = {
  es: {
    lang: "es",
    skipToContent: "Saltar al contenido",
    nav: {
      about: "Nosotros",
      projects: "Proyectos",
      workAreas: "Áreas de trabajo",
      news: "Noticias",
      rsc: "RSC",
      quote: "Solicite presupuesto",
      contact: "Contacto",
      budgetShort: "Presupuesto",
      menu: "Menú",
      menuToggle: "Abrir o cerrar el menú principal"
    },
    common: {
      home: "Inicio",
      services: "Servicios",
      projects: "Proyectos",
      news: "Noticias",
      contact: "Contacto",
      quote: "Solicite presupuesto",
      category: "Categoría",
      year: "Año",
      search: "Buscar",
      all: "Todas",
      allMasc: "Todos",
      viewDetail: "Ver detalle",
      viewService: "Ver servicio",
      viewProject: "Ver proyecto",
      readArticle: "Leer artículo",
      readNews: "Leer noticia",
      requestQuote: "Solicitar presupuesto",
      relatedServices: "Servicios relacionados",
      relatedProjects: "Proyectos relacionados",
      relatedNews: "Noticias relacionadas",
      service: "Servicio",
      previous: "Anterior",
      next: "Siguiente"
    },
    header: {
      languagesAriaPrefix: "Versión"
    },
    footer: {
      corporateData: "Datos corporativos",
      legal: "Legal",
      internalLinks: "Enlaces internos",
      channels: "Canales",
      legalData: "Datos legales",
      privacyPolicy: "Política privacidad",
      cookiePolicy: "Política cookies",
      about: "Nosotros",
      services: "Servicios",
      projects: "Proyectos",
      news: "Noticias",
      rsc: "RSC",
      contact: "Contacto"
    },
    floatingCta: {
      callNow: "Llamar ahora",
      requestQuote: "Solicitar presupuesto",
      workWithUs: "Trabaja con nosotros"
    },
    cookieBanner: {
      ariaLabel: "Consentimiento de cookies",
      title: "Política de cookies",
      description: "Utilizamos cookies necesarias y opcionales. Solo activamos Google Analytics con tu consentimiento.",
      necessaryCookies: "Cookies necesarias",
      analytics: "Analytics",
      preferences: "Preferencias",
      necessaryAria: "Cookies necesarias activadas",
      analyticsAria: "Activar analytics",
      preferencesAria: "Activar cookies de preferencias",
      rejectOptional: "Rechazar opcionales",
      savePreferences: "Guardar preferencias",
      acceptAll: "Aceptar todo"
    },
    forms: {
      contact: {
        fullName: "Nombre y apellidos",
        phone: "Teléfono",
        email: "Correo electrónico",
        message: "Mensaje",
        privacyAcceptance: "Acepto el tratamiento de datos personales de acuerdo con la Política de privacidad.",
        honeypot: "No rellenar",
        sending: "Enviando...",
        submit: "Enviar",
        success: "Formulario enviado correctamente.",
        error: "No se ha podido enviar el formulario."
      },
      quote: {
        fullName: "Nombre y apellidos",
        company: "Empresa",
        email: "Correo electrónico",
        phone: "Teléfono",
        requestedService: "Servicio solicitado",
        projectLocation: "Ubicación de la obra",
        projectDetails: "Detalles del proyecto",
        privacyAcceptance: "Acepto el tratamiento de datos personales de acuerdo con la Política de privacidad.",
        honeypot: "No rellenar",
        sending: "Enviando...",
        submit: "Solicitar presupuesto",
        success: "Solicitud enviada correctamente.",
        error: "No se ha podido enviar la solicitud."
      },
      jobs: {
        fullName: "Nombre y apellidos",
        phone: "Teléfono",
        email: "Correo electrónico",
        message: "Presentación",
        cv: "Adjuntar CV",
        cvHelp: "Formatos admitidos: PDF, DOC o DOCX. Tamaño máximo recomendado: 5 MB.",
        privacyAcceptance: "Acepto el tratamiento de datos personales de acuerdo con la Política de privacidad.",
        honeypot: "No rellenar",
        sending: "Enviando...",
        submit: "Enviar candidatura",
        success: "Candidatura enviada correctamente.",
        error: "No se ha podido enviar la candidatura."
      }
    },
    home: {
      slide1: {
        eyebrow: "DOSMAS GRUP",
        title: "Más de 70 años construyendo confianza en Illes Balears",
        description:
          "Somos un grupo de empresas especializadas en edificación, obra pública, obra privada, excavaciones y movimiento de tierras.",
        cta: "DESCUBRE MÁS SOBRE NOSOTROS",
        metric1: "Trayectoria",
        metric2: "Equipo humano",
        metric3: "Flota",
        value1: "+70 años",
        value2: "+200 profesionales",
        value3: "+250 máquinas"
      },
      slide2: {
        eyebrow: "PROYECTOS",
        title: "Ejecución técnica en obra civil, pública y privada",
        description:
          "Capacidad para abordar desde actuaciones específicas hasta obras de gran envergadura con control de plazos, seguridad y calidad.",
        cta: "VER PROYECTOS",
        metric1: "Ámbito",
        metric2: "Vehículos",
        metric3: "Servicio",
        value1: "Mallorca, Menorca e Ibiza",
        value2: "+50 vehículos",
        value3: "Gestión integral"
      },
      slide3: {
        eyebrow: "ÁREAS DE TRABAJO",
        title: "Nuestras marcas especializadas, una estructura sólida",
        description:
          "Dosmas Obras y Proyectos, Coexma Obres i Serveis, Tot Natura y Pintura 3V para cubrir todas las fases de cada proyecto.",
        cta: "VER ÁREAS DE TRABAJO",
        metric1: "Solidez",
        metric2: "Cobertura",
        metric3: "Compromiso",
        value1: "en cada sector",
        value2: "Illes Balears",
        value3: "Calidad y seguridad"
      },
      discoverMore: "DESCUBRE MÁS SOBRE NOSOTROS",
      worker: "Trabajador",
      statsTrajectory: "Trayectoria",
      statsProfessionals: "Profesionales",
      statsVehicles: "Vehículos",
      statsMachines: "Máquinas",
      dossierButton: "IR AL DOSSIER CORPORATIVO"
    },
    pages: {
      contact: {
        pageTitle: "Contacto",
        pageSubtitle: "CONTACTA.",
        heading: "CONTACTA",
        scheduleTitle: "Horario de atención",
        scheduleBody: "De lunes a jueves, de 7 a 18 horas.\nViernes de 7 a 16 horas.",
        mapTitle: "Ubicación DOSMAS GRUP en Google Maps",
        breadcrumb: "Contacto",
        phoneLabel: "Teléfono",
        emailLabel: "Email"
      },
      quote: {
        pageTitle: "Solicite presupuesto",
        pageSubtitle: "SOLICITE PRESUPUESTO.",
        heading: "Solicite presupuesto",
        intro1: "Indíquenos el alcance de su obra y prepararemos una propuesta técnica y económica ajustada a su necesidad.",
        intro2: "Cuanta más información incluya, más precisa será la estimación inicial.",
        commitmentTitle: "Compromiso de respuesta",
        commitmentBody: "Confirmación de recepción inmediata y primera valoración técnica en 24-48 horas laborables.",
        breadcrumb: "Solicite presupuesto"
      },
      services: {
        pageTitle: "Servicios",
        pageSubtitle: "Especialistas en obra y servicios integrales.",
        eyebrow: "Servicios",
        heading: "Especialistas en obra y servicios integrales",
        description: "Conozca nuestras áreas de especialización para obra civil, excavaciones y construcción.",
        requestQuote: "Solicitar presupuesto",
        indexAria: "Índice de servicios",
        filterTitle: "Filtrar servicios",
        detailSubtitle: "Servicio especializado de DOSMAS GRUP.",
        ctaDescription: "Nuestro equipo técnico puede revisar su necesidad y proponer la solución más adecuada para su obra.",
        contactNow: "Contactar ahora",
        projectsRelated: "Proyectos relacionados"
      },
      projects: {
        pageTitle: "Proyectos",
        pageSubtitle: "Obras ejecutadas por DOSMAS GRUP.",
        eyebrow: "Proyectos",
        heading: "Casos de estudio y obras ejecutadas",
        description: "Selección de proyectos con información técnica y visual de ejecución.",
        filterTitle: "Filtrar proyectos",
        filterCategory: "Categoría",
        filterYear: "Año",
        filterSearch: "Buscar",
        searchPlaceholder: "Título o ubicación",
        caseStudy: "Caso de estudio",
        challenge: "Reto",
        solution: "Solución",
        execution: "Ejecución",
        result: "Resultado",
        needSimilarProject: "¿Necesita un proyecto similar?"
      },
      news: {
        pageTitle: "Noticias",
        pageSubtitle:
          "Un espacio donde compartimos nuestras obras, proyectos, novedades y avances, mostrando la evolución constante de DOSMAS GRUP.",
        eyebrow: "Noticias",
        heading: "Noticias",
        description:
          "Un espacio donde compartimos nuestras obras, proyectos, novedades y avances, mostrando la evolución constante de DOSMAS GRUP.",
        detailSubtitle: "Noticias"
      },
      workAreas: {
        pageTitle: "Áreas de trabajo",
        pageSubtitle: "Áreas de trabajo",
        heading: "Áreas de trabajo",
        description: "Áreas de trabajo",
        budget: "Presupuesto"
      },
      rsc: {
        pageTitle: "RSC",
        pageSubtitle: "Responsabilidad Social Corporativa",
        eyebrow: "Compromiso",
        activePrograms: "Programas activos",
        annualTrainingHours: "Horas de formación anual",
        solidarityActions: "Acciones solidarias",
        partnerEntities: "Entidades colaboradoras",
        collaborateTitle: "¿Quiere colaborar con nuestra estrategia RSC?",
        collaborateBody: "En DOSMAS GRUP mantenemos una agenda abierta de colaboración con entidades sociales, educativas y deportivas.",
        collaborateCta: "Contactar con RSC"
      },
      legal: {
        legalData: "Datos legales",
        privacyPolicy: "Política privacidad",
        cookiePolicy: "Política cookies",
        integratedPolicy: "Política integrada de gestión"
      },
      notFound: {
        title: "Página no encontrada",
        description: "La ruta solicitada no existe.",
        backHome: "Volver al inicio"
      }
    }
  },
  ca: {
    lang: "ca",
    skipToContent: "Saltar al contingut",
    nav: {
      about: "Nosaltres",
      projects: "Projectes",
      workAreas: "Àrees de treball",
      news: "Notícies",
      rsc: "RSC",
      quote: "Sol·liciti pressupost",
      contact: "Contacte",
      budgetShort: "Pressupost",
      menu: "Menú",
      menuToggle: "Obrir o tancar el menú principal"
    },
    common: {
      home: "Inici",
      services: "Serveis",
      projects: "Projectes",
      news: "Notícies",
      contact: "Contacte",
      quote: "Sol·liciti pressupost",
      category: "Categoria",
      year: "Any",
      search: "Cercar",
      all: "Totes",
      allMasc: "Tots",
      viewDetail: "Veure detall",
      viewService: "Veure servei",
      viewProject: "Veure projecte",
      readArticle: "Llegir article",
      readNews: "Llegir notícia",
      requestQuote: "Sol·licitar pressupost",
      relatedServices: "Serveis relacionats",
      relatedProjects: "Projectes relacionats",
      relatedNews: "Notícies relacionades",
      service: "Servei",
      previous: "Anterior",
      next: "Següent"
    },
    header: {
      languagesAriaPrefix: "Versió"
    },
    footer: {
      corporateData: "Dades corporatives",
      legal: "Legal",
      internalLinks: "Enllaços interns",
      channels: "Canals",
      legalData: "Dades legals",
      privacyPolicy: "Política de privacitat",
      cookiePolicy: "Política de cookies",
      about: "Nosaltres",
      services: "Serveis",
      projects: "Projectes",
      news: "Notícies",
      rsc: "RSC",
      contact: "Contacte"
    },
    floatingCta: {
      callNow: "Trucar ara",
      requestQuote: "Sol·licitar pressupost",
      workWithUs: "Treballa amb nosaltres"
    },
    cookieBanner: {
      ariaLabel: "Consentiment de cookies",
      title: "Política de cookies",
      description: "Utilitzem cookies necessàries i opcionals. Només activem Google Analytics amb el teu consentiment.",
      necessaryCookies: "Cookies necessàries",
      analytics: "Analítica",
      preferences: "Preferències",
      necessaryAria: "Cookies necessàries activades",
      analyticsAria: "Activar analítica",
      preferencesAria: "Activar cookies de preferències",
      rejectOptional: "Rebutjar opcionals",
      savePreferences: "Desar preferències",
      acceptAll: "Acceptar-ho tot"
    },
    forms: {
      contact: {
        fullName: "Nom i llinatges",
        phone: "Telèfon",
        email: "Correu electrònic",
        message: "Missatge",
        privacyAcceptance: "Accepto el tractament de dades personals d'acord amb la Política de privacitat.",
        honeypot: "No emplenar",
        sending: "Enviant...",
        submit: "Enviar",
        success: "Formulari enviat correctament.",
        error: "No s'ha pogut enviar el formulari."
      },
      quote: {
        fullName: "Nom i llinatges",
        company: "Empresa",
        email: "Correu electrònic",
        phone: "Telèfon",
        requestedService: "Servei sol·licitat",
        projectLocation: "Ubicació de l'obra",
        projectDetails: "Detalls del projecte",
        privacyAcceptance: "Accepto el tractament de dades personals d'acord amb la Política de privacitat.",
        honeypot: "No emplenar",
        sending: "Enviant...",
        submit: "Sol·licitar pressupost",
        success: "Sol·licitud enviada correctament.",
        error: "No s'ha pogut enviar la sol·licitud."
      },
      jobs: {
        fullName: "Nom i llinatges",
        phone: "Telèfon",
        email: "Correu electrònic",
        message: "Presentació",
        cv: "Adjuntar CV",
        cvHelp: "Formats admesos: PDF, DOC o DOCX. Grandària màxima recomanada: 5 MB.",
        privacyAcceptance: "Accepto el tractament de dades personals d'acord amb la Política de privacitat.",
        honeypot: "No emplenar",
        sending: "Enviant...",
        submit: "Enviar candidatura",
        success: "Candidatura enviada correctament.",
        error: "No s'ha pogut enviar la candidatura."
      }
    },
    home: {
      slide1: {
        eyebrow: "DOSMAS GRUP",
        title: "Més de 70 anys construint confiança a les Illes Balears",
        description:
          "Som un grup d'empreses especialitzades en edificació, obra pública, obra privada, excavacions i moviment de terres.",
        cta: "DESCOBREIX MÉS SOBRE NOSALTRES",
        metric1: "Trajectòria",
        metric2: "Equip humà",
        metric3: "Flota",
        value1: "+70 anys",
        value2: "+200 professionals",
        value3: "+250 màquines"
      },
      slide2: {
        eyebrow: "PROJECTES",
        title: "Execució tècnica en obra civil, pública i privada",
        description:
          "Capacitat per abordar des d'actuacions específiques fins a obres de gran envergadura amb control de terminis, seguretat i qualitat.",
        cta: "VEURE PROJECTES",
        metric1: "Àmbit",
        metric2: "Vehicles",
        metric3: "Servei",
        value1: "Mallorca, Menorca i Eivissa",
        value2: "+50 vehicles",
        value3: "Gestió integral"
      },
      slide3: {
        eyebrow: "ÀREES DE TREBALL",
        title: "Les nostres marques especialitzades, una estructura sòlida",
        description:
          "Dosmas Obras y Proyectos, Coexma Obres i Serveis, Tot Natura i Pintura 3V per cobrir totes les fases de cada projecte.",
        cta: "VEURE ÀREES DE TREBALL",
        metric1: "Solidesa",
        metric2: "Cobertura",
        metric3: "Compromís",
        value1: "a cada sector",
        value2: "Illes Balears",
        value3: "Qualitat i seguretat"
      },
      discoverMore: "DESCOBREIX MÉS SOBRE NOSALTRES",
      worker: "Treballador",
      statsTrajectory: "Trajectòria",
      statsProfessionals: "Professionals",
      statsVehicles: "Vehicles",
      statsMachines: "Màquines",
      dossierButton: "ANAR AL DOSSIER CORPORATIU"
    },
    pages: {
      contact: {
        pageTitle: "Contacte",
        pageSubtitle: "CONTACTA.",
        heading: "CONTACTA",
        scheduleTitle: "Horari d'atenció",
        scheduleBody: "De dilluns a dijous, de 7 a 18 hores.\nDivendres de 7 a 16 hores.",
        mapTitle: "Ubicació DOSMAS GRUP a Google Maps",
        breadcrumb: "Contacte",
        phoneLabel: "Telèfon",
        emailLabel: "Email"
      },
      quote: {
        pageTitle: "Sol·liciti pressupost",
        pageSubtitle: "SOL·LICITI PRESSUPOST.",
        heading: "Sol·liciti pressupost",
        intro1: "Indiqui'ns l'abast de la seva obra i prepararem una proposta tècnica i econòmica ajustada a la seva necessitat.",
        intro2: "Com més informació inclogui, més precisa serà l'estimació inicial.",
        commitmentTitle: "Compromís de resposta",
        commitmentBody: "Confirmació de recepció immediata i primera valoració tècnica en 24-48 hores laborables.",
        breadcrumb: "Sol·liciti pressupost"
      },
      services: {
        pageTitle: "Serveis",
        pageSubtitle: "Especialistes en obra i serveis integrals.",
        eyebrow: "Serveis",
        heading: "Especialistes en obra i serveis integrals",
        description: "Conegui les nostres àrees d'especialització per a obra civil, excavacions i construcció.",
        requestQuote: "Sol·licitar pressupost",
        indexAria: "Índex de serveis",
        filterTitle: "Filtrar serveis",
        detailSubtitle: "Servei especialitzat de DOSMAS GRUP.",
        ctaDescription: "El nostre equip tècnic pot revisar la seva necessitat i proposar la solució més adequada per a la seva obra.",
        contactNow: "Contactar ara",
        projectsRelated: "Projectes relacionats"
      },
      projects: {
        pageTitle: "Projectes",
        pageSubtitle: "Obres executades per DOSMAS GRUP.",
        eyebrow: "Projectes",
        heading: "Casos d'estudi i obres executades",
        description: "Selecció de projectes amb informació tècnica i visual d'execució.",
        filterTitle: "Filtrar projectes",
        filterCategory: "Categoria",
        filterYear: "Any",
        filterSearch: "Cercar",
        searchPlaceholder: "Títol o ubicació",
        caseStudy: "Cas d'estudi",
        challenge: "Repte",
        solution: "Solució",
        execution: "Execució",
        result: "Resultat",
        needSimilarProject: "Necessita un projecte similar?"
      },
      news: {
        pageTitle: "Notícies",
        pageSubtitle:
          "Un espai on compartim les nostres obres, projectes, novetats i avenços, mostrant l'evolució constant de DOSMAS GRUP.",
        eyebrow: "Notícies",
        heading: "Notícies",
        description:
          "Un espai on compartim les nostres obres, projectes, novetats i avenços, mostrant l'evolució constant de DOSMAS GRUP.",
        detailSubtitle: "Notícies"
      },
      workAreas: {
        pageTitle: "Àrees de treball",
        pageSubtitle: "Àrees de treball",
        heading: "Àrees de treball",
        description: "Àrees de treball",
        budget: "Pressupost"
      },
      rsc: {
        pageTitle: "RSC",
        pageSubtitle: "Responsabilitat Social Corporativa",
        eyebrow: "Compromís",
        activePrograms: "Programes actius",
        annualTrainingHours: "Hores de formació anual",
        solidarityActions: "Accions solidàries",
        partnerEntities: "Entitats col·laboradores",
        collaborateTitle: "Vol col·laborar amb la nostra estratègia RSC?",
        collaborateBody: "A DOSMAS GRUP mantenim una agenda oberta de col·laboració amb entitats socials, educatives i esportives.",
        collaborateCta: "Contactar amb RSC"
      },
      legal: {
        legalData: "Dades legals",
        privacyPolicy: "Política de privacitat",
        cookiePolicy: "Política de cookies",
        integratedPolicy: "Política integrada de gestió"
      },
      notFound: {
        title: "Pàgina no trobada",
        description: "La ruta sol·licitada no existeix.",
        backHome: "Tornar a l'inici"
      }
    }
  },
  en: {
    lang: "en",
    skipToContent: "Skip to content",
    nav: {
      about: "About us",
      projects: "Projects",
      workAreas: "Work areas",
      news: "News",
      rsc: "CSR",
      quote: "Request quote",
      contact: "Contact",
      budgetShort: "Quote",
      menu: "Menu",
      menuToggle: "Open or close main menu"
    },
    common: {
      home: "Home",
      services: "Services",
      projects: "Projects",
      news: "News",
      contact: "Contact",
      quote: "Request quote",
      category: "Category",
      year: "Year",
      search: "Search",
      all: "All",
      allMasc: "All",
      viewDetail: "View details",
      viewService: "View service",
      viewProject: "View project",
      readArticle: "Read article",
      readNews: "Read news",
      requestQuote: "Request quote",
      relatedServices: "Related services",
      relatedProjects: "Related projects",
      relatedNews: "Related news",
      service: "Service",
      previous: "Previous",
      next: "Next"
    },
    header: {
      languagesAriaPrefix: "Version"
    },
    footer: {
      corporateData: "Corporate data",
      legal: "Legal",
      internalLinks: "Internal links",
      channels: "Channels",
      legalData: "Legal information",
      privacyPolicy: "Privacy policy",
      cookiePolicy: "Cookie policy",
      about: "About us",
      services: "Services",
      projects: "Projects",
      news: "News",
      rsc: "CSR",
      contact: "Contact"
    },
    floatingCta: {
      callNow: "Call now",
      requestQuote: "Request quote",
      workWithUs: "Work with us"
    },
    cookieBanner: {
      ariaLabel: "Cookie consent",
      title: "Cookie policy",
      description: "We use necessary and optional cookies. We only enable Google Analytics with your consent.",
      necessaryCookies: "Necessary cookies",
      analytics: "Analytics",
      preferences: "Preferences",
      necessaryAria: "Necessary cookies enabled",
      analyticsAria: "Enable analytics",
      preferencesAria: "Enable preference cookies",
      rejectOptional: "Reject optional",
      savePreferences: "Save preferences",
      acceptAll: "Accept all"
    },
    forms: {
      contact: {
        fullName: "Full name",
        phone: "Phone",
        email: "Email",
        message: "Message",
        privacyAcceptance: "I accept personal data processing according to the Privacy policy.",
        honeypot: "Do not fill in",
        sending: "Sending...",
        submit: "Send",
        success: "Form submitted successfully.",
        error: "The form could not be submitted."
      },
      quote: {
        fullName: "Full name",
        company: "Company",
        email: "Email",
        phone: "Phone",
        requestedService: "Requested service",
        projectLocation: "Project location",
        projectDetails: "Project details",
        privacyAcceptance: "I accept personal data processing according to the Privacy policy.",
        honeypot: "Do not fill in",
        sending: "Sending...",
        submit: "Request quote",
        success: "Request submitted successfully.",
        error: "The request could not be submitted."
      },
      jobs: {
        fullName: "Full name",
        phone: "Phone",
        email: "Email",
        message: "Introduction",
        cv: "Upload CV",
        cvHelp: "Accepted formats: PDF, DOC or DOCX. Recommended maximum size: 5 MB.",
        privacyAcceptance: "I accept personal data processing according to the Privacy policy.",
        honeypot: "Do not fill in",
        sending: "Sending...",
        submit: "Send application",
        success: "Application submitted successfully.",
        error: "The application could not be submitted."
      }
    },
    home: {
      slide1: {
        eyebrow: "DOSMAS GRUP",
        title: "More than 70 years building trust in the Balearic Islands",
        description:
          "We are a group of companies specialized in building construction, public works, private works, excavations and earthmoving.",
        cta: "DISCOVER MORE ABOUT US",
        metric1: "Track record",
        metric2: "Team",
        metric3: "Fleet",
        value1: "+70 years",
        value2: "+200 professionals",
        value3: "+250 machines"
      },
      slide2: {
        eyebrow: "PROJECTS",
        title: "Technical execution in civil, public and private works",
        description:
          "Capacity to deliver from targeted interventions to large-scale works with schedule control, safety and quality.",
        cta: "VIEW PROJECTS",
        metric1: "Coverage",
        metric2: "Vehicles",
        metric3: "Service",
        value1: "Mallorca, Menorca and Ibiza",
        value2: "+50 vehicles",
        value3: "Turnkey management"
      },
      slide3: {
        eyebrow: "WORK AREAS",
        title: "Our specialized brands, one solid structure",
        description:
          "Dosmas Obras y Proyectos, Coexma Obres i Serveis, Tot Natura and Pintura 3V to cover every phase of each project.",
        cta: "VIEW WORK AREAS",
        metric1: "Strength",
        metric2: "Coverage",
        metric3: "Commitment",
        value1: "in every sector",
        value2: "Balearic Islands",
        value3: "Quality and safety"
      },
      discoverMore: "DISCOVER MORE ABOUT US",
      worker: "Worker",
      statsTrajectory: "Track record",
      statsProfessionals: "Professionals",
      statsVehicles: "Vehicles",
      statsMachines: "Machines",
      dossierButton: "GO TO CORPORATE DOSSIER"
    },
    pages: {
      contact: {
        pageTitle: "Contact",
        pageSubtitle: "CONTACT US.",
        heading: "CONTACT",
        scheduleTitle: "Business hours",
        scheduleBody: "Monday to Thursday, from 7:00 to 18:00.\nFriday from 7:00 to 16:00.",
        mapTitle: "DOSMAS GRUP location on Google Maps",
        breadcrumb: "Contact",
        phoneLabel: "Phone",
        emailLabel: "Email"
      },
      quote: {
        pageTitle: "Request quote",
        pageSubtitle: "REQUEST A QUOTE.",
        heading: "Request quote",
        intro1: "Tell us the scope of your project and we will prepare a technical and financial proposal tailored to your needs.",
        intro2: "The more information you include, the more accurate the initial estimate will be.",
        commitmentTitle: "Response commitment",
        commitmentBody: "Immediate acknowledgement and first technical assessment within 24-48 business hours.",
        breadcrumb: "Request quote"
      },
      services: {
        pageTitle: "Services",
        pageSubtitle: "Specialists in construction and integrated services.",
        eyebrow: "Services",
        heading: "Specialists in construction and integrated services",
        description: "Explore our areas of expertise in civil works, excavation and construction.",
        requestQuote: "Request quote",
        indexAria: "Services index",
        filterTitle: "Filter services",
        detailSubtitle: "Specialized service by DOSMAS GRUP.",
        ctaDescription: "Our technical team can review your needs and propose the most suitable solution for your project.",
        contactNow: "Contact now",
        projectsRelated: "Related projects"
      },
      projects: {
        pageTitle: "Projects",
        pageSubtitle: "Works delivered by DOSMAS GRUP.",
        eyebrow: "Projects",
        heading: "Case studies and delivered works",
        description: "Selected projects with technical and visual execution information.",
        filterTitle: "Filter projects",
        filterCategory: "Category",
        filterYear: "Year",
        filterSearch: "Search",
        searchPlaceholder: "Title or location",
        caseStudy: "Case study",
        challenge: "Challenge",
        solution: "Solution",
        execution: "Execution",
        result: "Result",
        needSimilarProject: "Need a similar project?"
      },
      news: {
        pageTitle: "News",
        pageSubtitle:
          "A space where we share our works, projects, updates and progress, showcasing the constant evolution of DOSMAS GRUP.",
        eyebrow: "News",
        heading: "News",
        description:
          "A space where we share our works, projects, updates and progress, showcasing the constant evolution of DOSMAS GRUP.",
        detailSubtitle: "News"
      },
      workAreas: {
        pageTitle: "Work areas",
        pageSubtitle: "Work areas",
        heading: "Work areas",
        description: "Work areas",
        budget: "Quote"
      },
      rsc: {
        pageTitle: "CSR",
        pageSubtitle: "Corporate Social Responsibility",
        eyebrow: "Commitment",
        activePrograms: "Active programs",
        annualTrainingHours: "Annual training hours",
        solidarityActions: "Solidarity actions",
        partnerEntities: "Partner entities",
        collaborateTitle: "Would you like to collaborate with our CSR strategy?",
        collaborateBody: "At DOSMAS GRUP we maintain an open collaboration agenda with social, educational and sports organizations.",
        collaborateCta: "Contact CSR"
      },
      legal: {
        legalData: "Legal information",
        privacyPolicy: "Privacy policy",
        cookiePolicy: "Cookie policy",
        integratedPolicy: "Integrated management policy"
      },
      notFound: {
        title: "Page not found",
        description: "The requested route does not exist.",
        backHome: "Back to home"
      }
    }
  }
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
}
