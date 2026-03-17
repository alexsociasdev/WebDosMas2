import type { Metadata } from "next";
import "@/styles/globals.css";
import { defaultMetadata } from "@/lib/metadata";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CookieBanner } from "@/components/cookie-banner";
import { AnalyticsLoader } from "@/components/analytics-loader";
import { JsonLd } from "@/components/seo/json-ld";
import { organizationSchema, websiteSchema } from "@/lib/seo-schema";
import { FloatingCta } from "@/components/floating-cta";
import { getDictionary, getServerLocale } from "@/lib/i18n-server";

export const metadata: Metadata = defaultMetadata;

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getServerLocale();
  const t = getDictionary(locale);

  return (
    <html lang={t.lang}>
      <body className="antialiased">
        <JsonLd id="schema-org" data={[organizationSchema(), websiteSchema()]} />
        <a
          href="#contenido-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-md focus:bg-brand-yellow focus:px-3 focus:py-2 focus:text-sm focus:font-semibold"
        >
          {t.skipToContent}
        </a>
        <SiteHeader locale={locale} />
        <main id="contenido-principal">{children}</main>
        <SiteFooter locale={locale} />
        <FloatingCta locale={locale} />
        <CookieBanner locale={locale} />
        <AnalyticsLoader />
      </body>
    </html>
  );
}
