import Link from "next/link";
import { Container } from "@/components/container";
import { getDictionary, getServerLocale } from "@/lib/i18n-server";

export default async function NotFound() {
  const locale = await getServerLocale();
  const t = getDictionary(locale);

  return (
    <section className="bg-brand-gray py-28">
      <Container className="text-center">
        <h1 className="text-4xl font-bold text-base-black">{t.pages.notFound.title}</h1>
        <p className="mt-4 text-base text-base-dark">{t.pages.notFound.description}</p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-brand-yellow px-6 py-3 text-sm font-semibold text-base-black"
        >
          {t.pages.notFound.backHome}
        </Link>
      </Container>
    </section>
  );
}
