import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import { defaultMetadata } from "@/lib/metadata";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CookieBanner } from "@/components/cookie-banner";
import { AnalyticsLoader } from "@/components/analytics-loader";
import { JsonLd } from "@/components/seo/json-ld";
import { organizationSchema, websiteSchema } from "@/lib/seo-schema";
import { FloatingCta } from "@/components/floating-cta";

const brandFont = localFont({
  src: [
    {
      path: "./fonts/geist-latin.woff2",
      weight: "100 900",
      style: "normal"
    },
    {
      path: "./fonts/geist-latin-ext.woff2",
      weight: "100 900",
      style: "normal"
    }
  ],
  display: "swap"
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${brandFont.className} antialiased`}>
        <JsonLd id="schema-org" data={[organizationSchema(), websiteSchema()]} />
        <a
          href="#contenido-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-md focus:bg-brand-yellow focus:px-3 focus:py-2 focus:text-sm focus:font-semibold"
        >
          Saltar al contenido
        </a>
        <SiteHeader />
        <main id="contenido-principal">{children}</main>
        <SiteFooter />
        <FloatingCta />
        <CookieBanner />
        <AnalyticsLoader />
      </body>
    </html>
  );
}
