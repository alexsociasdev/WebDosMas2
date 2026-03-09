import { NextRequest, NextResponse } from "next/server";
import { DEFAULT_LOCALE, LOCALE_COOKIE_NAME, resolveLocale } from "@/lib/i18n";

function getSafeRedirectPath(value: string | null): string {
  if (!value || !value.startsWith("/")) {
    return "/";
  }

  return value;
}

export function GET(request: NextRequest) {
  const lang = request.nextUrl.searchParams.get("lang");
  const redirect = request.nextUrl.searchParams.get("redirect");

  const locale = resolveLocale(lang || DEFAULT_LOCALE);
  const redirectPath = getSafeRedirectPath(redirect);

  const response = NextResponse.redirect(new URL(redirectPath, request.url));

  response.cookies.set({
    name: LOCALE_COOKIE_NAME,
    value: locale,
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax"
  });

  return response;
}
