import Link from "next/link";
import { footerCorporateData } from "@/content/site-content";
import { Container } from "@/components/container";

const legalLinks = [
  { href: "/legal/datos-legales", label: "Datos legales" },
  { href: "/legal/politica-privacidad", label: "Política privacidad" },
  { href: "/legal/politica-cookies", label: "Política cookies" }
] as const;

const internalLinks = [
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/noticias", label: "Noticias" },
  { href: "/rsc", label: "RSC" },
  { href: "/contacto", label: "Contacto" }
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-base-mid bg-base-light/70">
      <Container className="grid gap-12 py-14 md:grid-cols-4">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-base-dark">Datos corporativos</h2>
          <ul className="mt-4 space-y-2 text-sm text-base-dark">
            {footerCorporateData.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-base-dark">Legal</h2>
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
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-base-dark">Enlaces internos</h2>
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
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-base-dark">Canales</h2>
          <ul className="mt-4 space-y-2 text-sm text-base-dark">
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-base-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
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
