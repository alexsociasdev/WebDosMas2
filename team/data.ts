export type TeamMember = {
  name: string;
  role: string;
  email?: string;
  phone?: string;
  image: string;
  featured?: boolean;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Guillem Mas Colombram",
    role: "CEO",
    email: "guillem@dosmasgrup.com",
    phone: "635 562 393",
    image: "/images/team/foto-grupo-puente.jpg",
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
    image: "/images/projects/excavacion-en-son-vida/01.webp"
  },
  {
    name: "Felip Bibiloni",
    role: "Director Financiero Interino",
    email: "finanzas@dosmasgrup.com",
    image: "/images/projects/excavacion-en-son-vida/01.webp"
  },
  {
    name: "Joan Quetglas",
    role: "Administración y compras",
    email: "joan@dosmasgrup.com",
    phone: "663 080 914",
    image: "/images/projects/excavacion-en-son-vida/01.webp"
  },
  {
    name: "Manel Pascual",
    role: "Director dpto. Técnico · Ingeniero industrial",
    email: "manelpascual@dosmasgrup.com",
    phone: "610 099 587",
    image: "/images/projects/excavacion-en-son-vida/01.webp"
  },
  {
    name: "Elisa Gonzalez",
    role: "Responsable RRHH",
    email: "elisagonzalez@dosmasgrup.com",
    phone: "607 622 387",
    image: "/images/projects/excavacion-en-son-vida/01.webp"
  },
  {
    name: "Magali Perez",
    role: "Proveedores y control de costes",
    email: "magali@dosmasgrup.com",
    phone: "611 073 040",
    image: "/images/projects/excavacion-en-son-vida/01.webp"
  },
  {
    name: "Toni Santandreu",
    role: "Operaciones",
    image: "/images/projects/excavacion-en-son-vida/01.webp"
  },
  {
    name: "Isaias Sanchez",
    role: "Encargado General · Subdirector de Operaciones",
    email: "isaiassanchez@dosmasgrup.com",
    phone: "607 336 878",
    image: "/images/projects/excavacion-en-son-vida/01.webp"
  },
  {
    name: "Toni Llabrés",
    role: "Adjunto Encargado General · Adjunto subdirección de Operaciones",
    email: "tonillabres@dosmasgrup.com",
    phone: "607 336 886",
    image: "/images/projects/excavacion-en-son-vida/01.webp"
  }
];
