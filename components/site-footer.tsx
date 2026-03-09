import Image from "next/image";
import Link from "next/link";
import { footerCorporateData } from "@/content/site-content";
import { Container } from "@/components/container";
import { getDictionary, type Locale } from "@/lib/i18n";

type SiteFooterProps = {
  locale: Locale;
};

export function SiteFooter({ locale }: SiteFooterProps) {
  const t = getDictionary(locale);
  const legalLinks = [
    { href: "/legal/datos-legales", label: t.footer.legalData },
    { href: "/legal/politica-privacidad", label: t.footer.privacyPolicy },
    { href: "/legal/politica-cookies", label: t.footer.cookiePolicy }
  ] as const;

  const internalLinks = [
    { href: "/nosotros", label: t.footer.about },
    { href: "/servicios", label: t.footer.services },
    { href: "/proyectos", label: t.footer.projects },
    { href: "/noticias", label: t.footer.news },
    { href: "/rsc", label: t.footer.rsc },
    { href: "/contacto", label: t.footer.contact }
  ] as const;

  return (
    <footer className="mt-24 border-t border-brand-purple/20 bg-gradient-to-b from-base-light to-[#ece9f6]">
      <Container className="grid gap-12 py-14 md:grid-cols-4">
        <div>
          <div className="inline-flex items-center gap-3 rounded-full border border-brand-purple/25 bg-white px-3 py-2 shadow-soft">
            <span className="relative block h-10 w-10 overflow-hidden rounded-full border border-base-mid">
              <Image src="/images/logo-dosmas.png" alt="Logo Dosmas Grup" fill sizes="40px" className="object-contain" />
            </span>
            <p className="text-sm font-semibold tracking-tight text-base-black">Dosmas Grup</p>
          </div>
          <h2 className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-base-dark">{t.footer.corporateData}</h2>
          <ul className="mt-4 space-y-2 text-sm text-base-dark">
            {footerCorporateData.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-base-dark">{t.footer.legal}</h2>
          <ul className="mt-4 space-y-2 text-sm text-base-dark">
            {legalLinks.map((item) => (
              <li key={item.href}>
                <Link
                  className="hover:text-base-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-base-dark">{t.footer.internalLinks}</h2>
          <ul className="mt-4 space-y-2 text-sm text-base-dark">
            {internalLinks.map((item) => (
              <li key={item.href}>
                <Link
                  className="hover:text-base-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-base-dark">{t.footer.channels}</h2>
          <ul className="mt-4 space-y-2 text-sm text-base-dark">
            <li>
              <a
                href="https://www.facebook.com/dosmasgrup"
                target="_blank"
                rel="noreferrer"
                className="hover:text-base-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/dosmasgrup/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-base-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="mailto:info@dosmasgrup.com"
                className="hover:text-base-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
              >
                info@dosmasgrup.com
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
