import { cookies } from "next/headers";
import { LOCALE_COOKIE_NAME, resolveLocale, type Locale } from "@/lib/i18n";

export { getDictionary, DEFAULT_LOCALE, LOCALE_COOKIE_NAME, locales, isLocale, resolveLocale } from "@/lib/i18n";
export type { Dictionary } from "@/lib/i18n";

export async function getServerLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  return resolveLocale(cookieStore.get(LOCALE_COOKIE_NAME)?.value);
}
