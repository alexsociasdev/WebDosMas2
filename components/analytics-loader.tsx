"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
  preferences: boolean;
  updatedAt: string;
};

const STORAGE_KEY = "dosmas_cookie_preferences";

export function AnalyticsLoader() {
  const [enabled, setEnabled] = useState(false);
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  useEffect(() => {
    const readPreferences = () => {
      const current = localStorage.getItem(STORAGE_KEY);
      if (!current) {
        setEnabled(false);
        return;
      }

      try {
        const parsed = JSON.parse(current) as CookiePreferences;
        setEnabled(Boolean(parsed.analytics));
      } catch {
        setEnabled(false);
      }
    };

    readPreferences();
    window.addEventListener("storage", readPreferences);
    window.addEventListener("dosmas-cookie-updated", readPreferences);
    return () => {
      window.removeEventListener("storage", readPreferences);
      window.removeEventListener("dosmas-cookie-updated", readPreferences);
    };
  }, []);

  if (!enabled || !gaId) {
    return null;
  }

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="ga-consent" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${gaId}');`}
      </Script>
    </>
  );
}
