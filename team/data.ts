export type TeamMember = {
  name: string;
  role: string;
  email?: string;
  phone?: string;
  image: string;
  imagePosition?: string;
  featured?: boolean;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Guillem Mas Colombram",
    role: "CEO",
    email: "guillem@dosmasgrup.com",
    phone: "635 562 393",
    image: "/images/team/equipo-general.jpg",
    featured: true
  },
  {
    name: "Miquel Mas Colombram",
    role: "COO · Director de Operaciones",
    email: "miquel@dosmasgrup.com",
    phone: "678 533 611",
    image: "/images/team/foto-grupo-dosmas.jpg",
    featured: true
  },
  {
    name: "Pilar Rosselló",
    role: "Soporte Dirección General",
    email: "pilar@dosmasgrup.com",
    phone: "673 417 692",
    image: "/images/team/foto-grupo-puente.jpg",
    imagePosition: "10% center"
  },
  {
    name: "Felip Bibiloni",
    role: "Director Financiero Interino",
    email: "finanzas@dosmasgrup.com",
    image: "/images/team/foto-grupo-puente.jpg",
    imagePosition: "22% center"
  },
  {
    name: "Joan Quetglas",
    role: "Administración y compras",
    email: "joan@dosmasgrup.com",
    phone: "663 080 914",
    image: "/images/team/foto-grupo-puente.jpg",
    imagePosition: "34% center"
  },
  {
    name: "Manel Pascual",
    role: "Director dpto. Técnico · Ingeniero industrial",
    email: "manelpascual@dosmasgrup.com",
    phone: "610 099 587",
    image: "/images/team/foto-grupo-puente.jpg",
    imagePosition: "46% center"
  },
  {
    name: "Elisa Gonzalez",
    role: "Responsable RRHH",
    email: "elisagonzalez@dosmasgrup.com",
    phone: "607 622 387",
    image: "/images/team/foto-grupo-puente.jpg",
    imagePosition: "58% center"
  },
  {
    name: "Magali Perez",
    role: "Proveedores y control de costes",
    email: "magali@dosmasgrup.com",
    phone: "611 073 040",
    image: "/images/team/foto-grupo-puente.jpg",
    imagePosition: "70% center"
  },
  {
    name: "Toni Santandreu",
    role: "Operaciones",
    image: "/images/team/foto-grupo-dosmas.jpg",
    imagePosition: "18% center"
  },
  {
    name: "Isaias Sanchez",
    role: "Encargado General · Subdirector de Operaciones",
    email: "isaiassanchez@dosmasgrup.com",
    phone: "607 336 878",
    image: "/images/team/foto-grupo-dosmas.jpg",
    imagePosition: "52% center"
  },
  {
    name: "Toni Llabrés",
    role: "Adjunto Encargado General · Adjunto subdirección de Operaciones",
    email: "tonillabres@dosmasgrup.com",
    phone: "607 336 886",
    image: "/images/team/foto-grupo-dosmas.jpg",
    imagePosition: "82% center"
  }
];
