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

export const teamMembers: TeamMember[] = [
  {
    name: "Guillem Mas Colombram",
    role: "CEO",
    email: "guillem@dosmasgrup.com",
    phone: "635 562 393",
    image: "/images/team/people/guillem-mas.jpg",
    imagePosition: "center 20%",
    featured: true
  },
  {
    name: "Miquel Mas Colombram",
    role: "COO · Director de Operaciones",
    email: "miquel@dosmasgrup.com",
    phone: "678 533 611",
    image: "/images/team/people/miquel-mas.jpg",
    imagePosition: "center 18%",
    featured: true
  },
  {
    name: "Pilar Rosselló",
    role: "Soporte Dirección General",
    email: "pilar@dosmasgrup.com",
    phone: "673 417 692",
    image: "/images/team/people/pilar-rossello.jpg",
    imagePosition: "center 52%",
    imageFit: "contain"
  },
  {
    name: "Felip Bibiloni",
    role: "Director Financiero Interino",
    email: "finanzas@dosmasgrup.com",
    image: "/images/team/people/felip-bibiloni.jpeg",
    imagePosition: "center 34%"
  },
  {
    name: "Joan Quetglas",
    role: "Administración y compras",
    email: "joan@dosmasgrup.com",
    phone: "663 080 914",
    image: "/images/team/people/joan-quetglas.jpg",
    imagePosition: "center 18%"
  },
  {
    name: "Manel Pascual",
    role: "Director dpto. Técnico · Ingeniero industrial",
    email: "manelpascual@dosmasgrup.com",
    phone: "610 099 587",
    image: "/images/team/people/manel-pascual.jpg",
    imagePosition: "center 16%"
  },
  {
    name: "Elisa Gonzalez",
    role: "Responsable RRHH",
    email: "elisagonzalez@dosmasgrup.com",
    phone: "607 622 387",
    image: "/images/team/people/elisa-gonzalez.jpg",
    imagePosition: "center 15%"
  },
  {
    name: "Magali Perez",
    role: "Proveedores y control de costes",
    email: "magali@dosmasgrup.com",
    phone: "611 073 040",
    image: "/images/team/people/magali-perez.jpg",
    imagePosition: "center 52%",
    imageFit: "contain"
  },
  {
    name: "Toni Santandreu",
    role: "Operaciones",
    image: "/images/team/people/toni-santandreu.jpg",
    imagePosition: "center 16%"
  },
  {
    name: "Isaias Sanchez",
    role: "Encargado General · Subdirector de Operaciones",
    email: "isaiassanchez@dosmasgrup.com",
    phone: "607 336 878",
    image: "/images/team/people/isaias-sanchez.jpg",
    imagePosition: "center 16%"
  },
  {
    name: "Toni Llabrés",
    role: "Adjunto Encargado General · Adjunto subdirección de Operaciones",
    email: "tonillabres@dosmasgrup.com",
    phone: "607 336 886",
    image: "/images/team/people/toni-llabres.jpg",
    imagePosition: "center 16%"
  }
];
