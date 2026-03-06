"use client";

import { useEffect, useState } from "react";

type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
  preferences: boolean;
  updatedAt: string;
};

const STORAGE_KEY = "dosmas_cookie_preferences";

function savePreferences(preferences: CookiePreferences) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
  window.dispatchEvent(new Event("dosmas-cookie-updated"));
}

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [preferences, setPreferences] = useState(false);

  useEffect(() => {
    const current = localStorage.getItem(STORAGE_KEY);
    if (!current) {
      setIsVisible(true);
      return;
    }

    try {
      const parsed = JSON.parse(current) as CookiePreferences;
      setAnalytics(parsed.analytics);
      setPreferences(parsed.preferences);
    } catch {
      setIsVisible(true);
    }
  }, []);

  const setAndClose = (nextAnalytics: boolean, nextPreferences: boolean) => {
    savePreferences({
      necessary: true,
      analytics: nextAnalytics,
      preferences: nextPreferences,
      updatedAt: new Date().toISOString()
    });
    setAnalytics(nextAnalytics);
    setPreferences(nextPreferences);
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <aside
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-base-mid bg-white/98 shadow-soft backdrop-blur"
      aria-label="Consentimiento de cookies"
    >
      <div className="mx-auto grid max-w-7xl gap-5 px-6 py-6 lg:grid-cols-[1.2fr_1fr] lg:px-10">
        <div>
          <h2 className="text-base font-semibold text-base-black">Política de cookies</h2>
          <p className="mt-2 text-sm leading-6 text-base-dark">
            Utilizamos cookies necesarias y opcionales. Solo activamos Google Analytics con tu consentimiento.
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-3 rounded-lg border border-base-mid bg-base-light p-4 text-sm text-base-dark">
            <label className="flex items-center justify-between gap-4">
              <span>Cookies necesarias</span>
              <input type="checkbox" checked readOnly aria-label="Cookies necesarias activadas" />
            </label>
            <label className="flex items-center justify-between gap-4">
              <span>Analytics</span>
              <input
                type="checkbox"
                checked={analytics}
                onChange={(event) => setAnalytics(event.target.checked)}
                aria-label="Activar analytics"
              />
            </label>
            <label className="flex items-center justify-between gap-4">
              <span>Preferencias</span>
              <input
                type="checkbox"
                checked={preferences}
                onChange={(event) => setPreferences(event.target.checked)}
                aria-label="Activar cookies de preferencias"
              />
            </label>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setAndClose(false, false)}
              className="rounded-full border border-base-mid px-4 py-2 text-sm font-semibold text-base-black transition hover:border-base-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
            >
              Rechazar opcionales
            </button>
            <button
              type="button"
              onClick={() => setAndClose(analytics, preferences)}
              className="rounded-full border border-base-mid px-4 py-2 text-sm font-semibold text-base-black transition hover:border-brand-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
            >
              Guardar preferencias
            </button>
            <button
              type="button"
              onClick={() => setAndClose(true, true)}
              className="rounded-full bg-brand-yellow px-4 py-2 text-sm font-semibold text-base-black transition hover:bg-brand-yellow/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
            >
              Aceptar todo
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
