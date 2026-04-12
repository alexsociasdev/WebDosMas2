import { type Locale } from "@/lib/i18n";
import { generatedStaticContentTranslations } from "@/lib/generated-static-content-translations";

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function translateStaticContent<T>(value: T, locale: Locale): T {
  if (locale === "es") {
    return value;
  }

  if (typeof value === "string") {
    const translations = generatedStaticContentTranslations[locale] ?? {};
    return (translations[value] ?? value) as T;
  }

  if (Array.isArray(value)) {
    return value.map((item) => translateStaticContent(item, locale)) as T;
  }

  if (isPlainObject(value)) {
    return Object.fromEntries(
      Object.entries(value).map(([key, entry]) => [key, translateStaticContent(entry, locale)])
    ) as T;
  }

  return value;
}
