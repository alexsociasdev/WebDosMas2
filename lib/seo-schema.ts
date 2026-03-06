const BASE_URL = "https://www.dosmasgrup.com";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Dosmas Grup",
    legalName: "DOSMAS OBRAS Y PROYECTOS, S.L.",
    url: BASE_URL,
    logo: `${BASE_URL}/images/fondo.webp`,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+34-971-09-60-12",
        contactType: "customer service",
        areaServed: "ES"
      }
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Carretera Petra – Santa Margalida, S/N, Parcela km 1,3",
      postalCode: "07520",
      addressLocality: "Petra",
      addressRegion: "Illes Balears",
      addressCountry: "ES"
    }
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Dosmas Grup",
    url: BASE_URL,
    inLanguage: "es-ES"
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.path}`
    }))
  };
}

export function articleSchema(input: {
  title: string;
  description: string;
  path: string;
  image: string;
  datePublished: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    image: `${BASE_URL}${input.image}`,
    datePublished: input.datePublished,
    dateModified: input.datePublished,
    author: {
      "@type": "Organization",
      name: input.author
    },
    publisher: {
      "@type": "Organization",
      name: "Dosmas Grup",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/fondo.webp`
      }
    },
    mainEntityOfPage: `${BASE_URL}${input.path}`
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: input.name,
    provider: {
      "@type": "Organization",
      name: "Dosmas Grup",
      url: BASE_URL
    },
    areaServed: "Illes Balears",
    description: input.description,
    url: `${BASE_URL}${input.path}`
  };
}

export function projectSchema(input: {
  name: string;
  description: string;
  path: string;
  image: string;
  location: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: input.name,
    description: input.description,
    image: `${BASE_URL}${input.image}`,
    url: `${BASE_URL}${input.path}`,
    locationCreated: {
      "@type": "Place",
      name: input.location
    },
    creator: {
      "@type": "Organization",
      name: "Dosmas Grup"
    }
  };
}
