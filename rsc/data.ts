import { type Locale } from "@/lib/i18n";

export type RscInitiative = {
  title: string;
  description: string;
  year: string;
  image: string;
};

const rscInitiativesByLocale: Record<Locale, RscInitiative[]> = {
  es: [
    {
      title: "Programa de formación continua para operarios y mandos intermedios",
      description:
        "Plan anual de capacitación técnica y preventiva para reforzar la empleabilidad, la seguridad y la excelencia operativa en todas las áreas de trabajo.",
      year: "2026",
      image: "/images/rsc/programa-de-formacion.jpg"
    },
    {
      title: "Colaboración con entidades de inserción laboral",
      description:
        "Impulso de itinerarios de acceso al empleo para colectivos con dificultades de incorporación al mercado laboral, en coordinación con tejido asociativo local.",
      year: "2025",
      image: "/images/rsc/colaboracion-entidades.jpg"
    },
    {
      title: "Apoyo a deporte base y eventos comunitarios",
      description:
        "Participación activa en iniciativas deportivas y sociales que fomentan hábitos saludables, cohesión comunitaria y desarrollo local en Baleares.",
      year: "2025",
      image: "/images/rsc/apoyo-deporte-base.jpg"
    },
    {
      title: "Intervención solidaria en zonas afectadas por la DANA",
      description:
        "Puesta a disposición de maquinaria, camiones y personal técnico para acelerar tareas de limpieza, retirada y recuperación de áreas afectadas.",
      year: "2024",
      image: "/images/rsc/dana.jpg"
    },
    {
      title: "Reducción progresiva de impacto ambiental en obra",
      description:
        "Optimización de rutas logísticas, mejora del mantenimiento preventivo y control de residuos para reducir emisiones y consumo de recursos.",
      year: "2026",
      image: "/images/projects/excavacion-en-son-vida/02.webp"
    },
    {
      title: "Promoción de igualdad e inclusión en equipos técnicos",
      description:
        "Medidas internas para impulsar diversidad, corresponsabilidad y desarrollo profesional en un entorno laboral seguro y respetuoso.",
      year: "2026",
      image: "/images/rsc/promocion-igualdad.jpg"
    }
  ],
  ca: [
    {
      title: "Programa de formació contínua per a operaris i comandaments intermedis",
      description:
        "Pla anual de capacitació tècnica i preventiva per reforçar l'ocupabilitat, la seguretat i l'excel·lència operativa a totes les àrees de treball.",
      year: "2026",
      image: "/images/rsc/programa-de-formacion.jpg"
    },
    {
      title: "Col·laboració amb entitats d'inserció laboral",
      description:
        "Impuls d'itineraris d'accés a l'ocupació per a col·lectius amb dificultats d'incorporació al mercat laboral, en coordinació amb el teixit associatiu local.",
      year: "2025",
      image: "/images/rsc/colaboracion-entidades.jpg"
    },
    {
      title: "Suport a l'esport base i a esdeveniments comunitaris",
      description:
        "Participació activa en iniciatives esportives i socials que fomenten hàbits saludables, cohesió comunitària i desenvolupament local a les Balears.",
      year: "2025",
      image: "/images/rsc/apoyo-deporte-base.jpg"
    },
    {
      title: "Intervenció solidària en zones afectades per la DANA",
      description:
        "Posada a disposició de maquinària, camions i personal tècnic per accelerar tasques de neteja, retirada i recuperació de les zones afectades.",
      year: "2024",
      image: "/images/rsc/dana.jpg"
    },
    {
      title: "Reducció progressiva de l'impacte ambiental a l'obra",
      description:
        "Optimització de rutes logístiques, millora del manteniment preventiu i control de residus per reduir emissions i consum de recursos.",
      year: "2026",
      image: "/images/projects/excavacion-en-son-vida/02.webp"
    },
    {
      title: "Promoció de la igualtat i la inclusió en equips tècnics",
      description:
        "Mesures internes per impulsar la diversitat, la corresponsabilitat i el desenvolupament professional en un entorn laboral segur i respectuós.",
      year: "2026",
      image: "/images/rsc/promocion-igualdad.jpg"
    }
  ],
  en: [
    {
      title: "Continuous training programme for operators and middle management",
      description:
        "Annual technical and preventive training plan designed to strengthen employability, safety and operational excellence across all work areas.",
      year: "2026",
      image: "/images/rsc/programa-de-formacion.jpg"
    },
    {
      title: "Collaboration with labour integration entities",
      description:
        "Promotion of employment access pathways for groups facing difficulties entering the labour market, in coordination with the local associative network.",
      year: "2025",
      image: "/images/rsc/colaboracion-entidades.jpg"
    },
    {
      title: "Support for grassroots sport and community events",
      description:
        "Active participation in sports and social initiatives that encourage healthy habits, community cohesion and local development in the Balearic Islands.",
      year: "2025",
      image: "/images/rsc/apoyo-deporte-base.jpg"
    },
    {
      title: "Solidarity intervention in areas affected by the DANA",
      description:
        "Deployment of machinery, trucks and technical staff to speed up cleaning, removal and recovery work in affected areas.",
      year: "2024",
      image: "/images/rsc/dana.jpg"
    },
    {
      title: "Progressive reduction of environmental impact on site",
      description:
        "Optimization of logistics routes, improvement of preventive maintenance and waste control to reduce emissions and resource consumption.",
      year: "2026",
      image: "/images/projects/excavacion-en-son-vida/02.webp"
    },
    {
      title: "Promotion of equality and inclusion in technical teams",
      description:
        "Internal measures to foster diversity, shared responsibility and professional development within a safe and respectful working environment.",
      year: "2026",
      image: "/images/rsc/promocion-igualdad.jpg"
    }
  ],
  de: [
    {
      title: "Programm zur kontinuierlichen Weiterbildung für Fachkräfte und mittleres Management",
      description:
        "Jährlicher technischer und präventiver Schulungsplan zur Stärkung von Beschäftigungsfähigkeit, Sicherheit und operativer Exzellenz in allen Arbeitsbereichen.",
      year: "2026",
      image: "/images/rsc/programa-de-formacion.jpg"
    },
    {
      title: "Zusammenarbeit mit Einrichtungen zur Arbeitsintegration",
      description:
        "Förderung von Zugangswegen zum Arbeitsmarkt für Gruppen mit Integrationsschwierigkeiten in Abstimmung mit dem lokalen Verbandsnetzwerk.",
      year: "2025",
      image: "/images/rsc/colaboracion-entidades.jpg"
    },
    {
      title: "Unterstützung von Breitensport und Gemeinschaftsveranstaltungen",
      description:
        "Aktive Beteiligung an sportlichen und sozialen Initiativen, die gesunde Gewohnheiten, gesellschaftlichen Zusammenhalt und lokale Entwicklung auf den Balearen fördern.",
      year: "2025",
      image: "/images/rsc/apoyo-deporte-base.jpg"
    },
    {
      title: "Solidarischer Einsatz in den von der DANA betroffenen Gebieten",
      description:
        "Bereitstellung von Maschinen, Lkw und technischem Personal zur Beschleunigung von Reinigungs-, Räumungs- und Wiederherstellungsarbeiten in den betroffenen Gebieten.",
      year: "2024",
      image: "/images/rsc/dana.jpg"
    },
    {
      title: "Schrittweise Verringerung der Umweltauswirkungen auf der Baustelle",
      description:
        "Optimierung logistischer Routen, Verbesserung der vorbeugenden Wartung und Abfallkontrolle zur Senkung von Emissionen und Ressourcenverbrauch.",
      year: "2026",
      image: "/images/projects/excavacion-en-son-vida/02.webp"
    },
    {
      title: "Förderung von Gleichstellung und Inklusion in technischen Teams",
      description:
        "Interne Maßnahmen zur Förderung von Vielfalt, geteilter Verantwortung und beruflicher Entwicklung in einem sicheren und respektvollen Arbeitsumfeld.",
      year: "2026",
      image: "/images/rsc/promocion-igualdad.jpg"
    }
  ]
};

export function getRscInitiatives(locale: Locale): RscInitiative[] {
  return rscInitiativesByLocale[locale] ?? rscInitiativesByLocale.es;
}

export const rscInitiatives: RscInitiative[] = rscInitiativesByLocale.es;
