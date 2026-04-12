import { type Locale } from "@/lib/i18n";

export type TeamMember = {
  name: string;
  role: string;
  email?: string;
  phone?: string;
  image: string;
  imagePosition?: string;
  imageFit?: "cover" | "contain";
  featured?: boolean;
};

type TeamMemberBase = Omit<TeamMember, "role"> & {
  roles: Record<Locale, string>;
};

const baseTeamMembers: TeamMemberBase[] = [
  {
    name: "Guillem Mas Colombram",
    roles: {
      es: "CEO",
      ca: "CEO",
      en: "CEO",
      de: "CEO"
    },
    email: "guillem@dosmasgrup.com",
    phone: "",
    image: "/images/team/people/guillem-mas.jpg",
    imagePosition: "center 20%",
    featured: true
  },
  {
    name: "Miquel Mas Colombram",
    roles: {
      es: "COO · Director de Operaciones",
      ca: "COO · Director d'Operacions",
      en: "COO · Operations Director",
      de: "COO · Betriebsdirektor"
    },
    email: "miquel@dosmasgrup.com",
    phone: "678 533 611",
    image: "/images/team/people/miquel-mas.jpg",
    imagePosition: "center 18%",
    featured: true
  },
  {
    name: "Pilar Rosselló",
    roles: {
      es: "Soporte Dirección General",
      ca: "Suport Direcció General",
      en: "General Management Support",
      de: "Assistenz der Geschäftsleitung"
    },
    email: "pilar@dosmasgrup.com",
    phone: "673 417 692",
    image: "/images/team/people/pilar-rossello.jpg",
    imagePosition: "center 52%",
    imageFit: "contain"
  },
  {
    name: "Felip Bibiloni",
    roles: {
      es: "Director Financiero Interino",
      ca: "Director Financer Interí",
      en: "Interim Finance Director",
      de: "Interimistischer Finanzdirektor"
    },
    email: "finanzas@dosmasgrup.com",
    image: "/images/team/people/felip-bibiloni.jpeg",
    imagePosition: "center 34%"
  },
  {
    name: "Joan Quetglas",
    roles: {
      es: "Director Financiero",
      ca: "Director Financer",
      en: "Finance Director",
      de: "Finanzdirektor"
    },
    email: "joan@dosmasgrup.com",
    phone: "663 080 914",
    image: "/images/team/people/joan-quetglas.jpg",
    imagePosition: "center 34%"
  },
  {
    name: "Manel Pascual",
    roles: {
      es: "Director dpto. Técnico · Ingeniero industrial",
      ca: "Director del dep. Tècnic · Enginyer industrial",
      en: "Technical Department Director · Industrial Engineer",
      de: "Leiter der technischen Abteilung · Wirtschaftsingenieur"
    },
    email: "manelpascual@dosmasgrup.com",
    phone: "610 099 587",
    image: "/images/team/people/manel-pascual.jpg",
    imagePosition: "center 16%"
  },
  {
    name: "Elisa Gonzalez",
    roles: {
      es: "Responsable RRHH",
      ca: "Responsable de RRHH",
      en: "Head of HR",
      de: "Leitung Personalwesen"
    },
    email: "elisagonzalez@dosmasgrup.com",
    phone: "607 622 387",
    image: "/images/team/people/elisa-gonzalez.jpg",
    imagePosition: "center 28%"
  },
  {
    name: "Magali Perez",
    roles: {
      es: "Proveedores y control de costes",
      ca: "Proveïdors i control de costos",
      en: "Suppliers and Cost Control",
      de: "Lieferanten und Kostenkontrolle"
    },
    email: "magali@dosmasgrup.com",
    phone: "611 073 040",
    image: "/images/team/people/magali-perez.jpg",
    imagePosition: "center 52%",
    imageFit: "contain"
  },
  {
    name: "Toni Santandreu",
    roles: {
      es: "Director de Operaciones",
      ca: "Director d'Operacions",
      en: "Operations Director",
      de: "Betriebsdirektor"
    },
    email: "antonisantandreu@dosmasgrup.com",
    phone: "663 83 68 75",
    image: "/images/team/people/toni-santandreu.jpg",
    imagePosition: "center 16%"
  },
  {
    name: "Isaias Sanchez",
    roles: {
      es: "Encargado General · Subdirector de Operaciones",
      ca: "Encarregat General · Sotsdirector d'Operacions",
      en: "General Foreman · Deputy Operations Director",
      de: "Generalbauleiter · Stellvertretender Betriebsdirektor"
    },
    email: "isaiassanchez@dosmasgrup.com",
    phone: "607 336 878",
    image: "/images/team/people/isaias-sanchez.jpg",
    imagePosition: "center 16%"
  },
  {
    name: "Toni Llabrés",
    roles: {
      es: "Adjunto Encargado General · Adjunto subdirección de Operaciones",
      ca: "Adjunt a l'Encarregat General · Adjunt a la sotsdirecció d'Operacions",
      en: "Deputy General Foreman · Deputy to Operations Management",
      de: "Stellvertretender Generalbauleiter · Assistent der Betriebsleitung"
    },
    email: "tonillabres@dosmasgrup.com",
    phone: "607 336 886",
    image: "/images/team/people/toni-llabres.jpg",
    imagePosition: "center 16%"
  }
];

export function getTeamMembers(locale: Locale): TeamMember[] {
  return baseTeamMembers.map(({ roles, ...member }) => ({
    ...member,
    role: roles[locale] ?? roles.es
  }));
}

export const teamMembers: TeamMember[] = getTeamMembers("es");
