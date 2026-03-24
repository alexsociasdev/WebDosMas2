import type { Metadata } from "next";

export const BASE_URL = "https://www.dosmasgrup.com";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "DOSMAS GRUP",
    template: "%s | DOSMAS GRUP"
  },
  description:
    "DOSMAS GRUP es un referente en el sector de las excavaciones y obras en Mallorca.",
  openGraph: {
    title: "DOSMAS GRUP",
    description:
      "DOSMAS GRUP es un referente en el sector de las excavaciones y obras en Mallorca.",
    url: BASE_URL,
    siteName: "DOSMAS GRUP",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/images/fondo.webp",
        width: 1200,
        height: 630,
        alt: "DOSMAS GRUP"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "DOSMAS GRUP",
    description:
      "DOSMAS GRUP es un referente en el sector de las excavaciones y obras en Mallorca.",
    images: ["/images/fondo.webp"]
  }
};

type PageMetadataOptions = {
  image?: string;
  type?: "website" | "article";
  keywords?: string[];
};

export function pageMetadata(
  title: string,
  description: string,
  path: string,
  options?: PageMetadataOptions
): Metadata {
  const image = options?.image ?? "/images/fondo.webp";

  return {
    title,
    description,
    keywords: options?.keywords,
    alternates: {
      canonical: path
    },
    openGraph: {
      title,
      description,
      url: path,
      type: options?.type ?? "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image]
    }
  };
}
