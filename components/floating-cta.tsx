"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { JobsForm } from "@/components/forms/jobs-form";
import { getDictionary, type Locale } from "@/lib/i18n";

type FloatingCtaProps = {
  locale: Locale;
};

type Panel = "chat" | "jobs" | null;

export function FloatingCta({ locale }: FloatingCtaProps) {
  const t = getDictionary(locale);
  const [panel, setPanel] = useState<Panel>(null);
  const [messages, setMessages] = useState<string[]>([]);

  const copy = useMemo(() => {
    if (locale === "ca") {
      return {
        badge: "Chat Bot",
        title: "Parla amb DOSMAS GRUP",
        intro: "Estem aquí per orientar-te de manera ràpida.",
        jobsTitle: "Treballa amb nosaltres",
        jobsIntro: "Envia'ns les teves dades i el teu CV per valorar la teva candidatura.",
        quick1: "Necessit pressupost",
        quick2: "Vull parlar amb l'equip",
        quick3: "Horari i ubicació",
        answer1: "Pots enviar la teva sol·licitud des de la pàgina de pressupost i et contactarem amb una proposta ajustada.",
        answer2: "Ens pots escriure a info@dosmasgrup.com o telefonar al 971 09 60 12.",
        answer3: "Oficina Central-Petra i Delegació de Palma. Horari a Petra: de dilluns a dijous, de 7 a 18 hores, i divendres de 7 a 16 hores.",
        ctaPrimary: "Anar a pressupost",
        ctaSecondary: "Anar a contacte",
        ariaToggle: "Obrir chat bot"
      };
    }

    if (locale === "en") {
      return {
        badge: "Chat Bot",
        title: "Chat with DOSMAS GRUP",
        intro: "We are here to guide you quickly.",
        jobsTitle: "Work with us",
        jobsIntro: "Send us your details and CV so we can review your application.",
        quick1: "I need a quote",
        quick2: "I want to contact the team",
        quick3: "Opening hours and location",
        answer1: "You can send your request from the quote page and we will get back to you with a tailored proposal.",
        answer2: "You can email us at info@dosmasgrup.com or call +34 971 09 60 12.",
        answer3: "Head Office in Petra and Palma branch. Petra opening hours: Monday to Thursday from 7:00 to 18:00, Friday from 7:00 to 16:00.",
        ctaPrimary: "Go to quote",
        ctaSecondary: "Go to contact",
        ariaToggle: "Open chat bot"
      };
    }

    return {
      badge: "Chat Bot",
      title: "Habla con DOSMAS GRUP",
      intro: "Estamos aquí para orientarte de forma rápida.",
      jobsTitle: "Trabaja con nosotros",
      jobsIntro: "Envíanos tus datos y tu CV para valorar tu candidatura.",
      quick1: "Necesito presupuesto",
      quick2: "Quiero hablar con el equipo",
      quick3: "Horario y ubicación",
      answer1: "Puedes enviar tu solicitud desde la página de presupuesto y te contactaremos con una propuesta ajustada.",
      answer2: "Puedes escribirnos a info@dosmasgrup.com o llamarnos al 971 09 60 12.",
      answer3: "Oficina Central-Petra y Delegación de Palma. Horario en Petra: de lunes a jueves, de 7 a 18 horas, y viernes de 7 a 16 horas.",
      ctaPrimary: t.floatingCta.requestQuote,
      ctaSecondary: t.nav.contact,
      ariaToggle: "Abrir chat bot"
    };
  }, [locale, t.floatingCta.requestQuote, t.nav.contact]);

  const pushMessage = (message: string) => {
    setPanel("chat");
    setMessages((current) => [...current, message]);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 hidden items-end md:flex">
      <div className="flex flex-col items-end gap-3">
        {panel === "chat" ? (
          <div className="w-[22rem] overflow-hidden rounded-[1.75rem] border border-brand-purple/30 bg-white shadow-[0_28px_70px_-28px_rgba(17,17,17,0.45)]">
            <div className="bg-brand-purple px-5 py-4 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">{copy.badge}</p>
              <h3 className="mt-1 text-lg font-semibold">{copy.title}</h3>
              <p className="mt-1 text-sm text-white/80">{copy.intro}</p>
            </div>
            <div className="space-y-3 p-4">
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => pushMessage(copy.answer1)}
                  className="rounded-full border border-brand-yellow bg-brand-yellow px-3 py-2 text-xs font-semibold text-base-black transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
                >
                  {copy.quick1}
                </button>
                <button
                  type="button"
                  onClick={() => pushMessage(copy.answer2)}
                  className="rounded-full border border-brand-purple bg-brand-purple px-3 py-2 text-xs font-semibold text-white transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
                >
                  {copy.quick2}
                </button>
                <button
                  type="button"
                  onClick={() => pushMessage(copy.answer3)}
                  className="rounded-full border border-brand-gray bg-white px-3 py-2 text-xs font-semibold text-base-black transition hover:border-brand-yellow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
                >
                  {copy.quick3}
                </button>
              </div>

              <div className="max-h-52 space-y-2 overflow-y-auto rounded-2xl bg-white p-3">
                {messages.length === 0 ? (
                  <div className="rounded-2xl bg-white p-3 text-sm leading-6 text-base-dark shadow-soft">
                    {copy.intro}
                  </div>
                ) : (
                  messages.map((message, index) => (
                    <div key={`${message}-${index}`} className="rounded-2xl bg-white p-3 text-sm leading-6 text-base-dark shadow-soft">
                      {message}
                    </div>
                  ))
                )}
              </div>

              <div className="flex gap-2">
                <Link
                  href="/solicite-presupuesto"
                  className="inline-flex flex-1 items-center justify-center rounded-full bg-brand-yellow px-4 py-2 text-xs font-semibold uppercase tracking-wide text-base-black transition hover:bg-brand-yellow/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
                >
                  {copy.ctaPrimary}
                </Link>
                <Link
                  href="/contacto"
                  className="inline-flex flex-1 items-center justify-center rounded-full border border-brand-purple/25 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-base-black transition hover:border-brand-yellow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
                >
                  {copy.ctaSecondary}
                </Link>
              </div>
            </div>
          </div>
        ) : null}

        {panel === "jobs" ? (
          <div className="w-[24rem] overflow-hidden rounded-[1.75rem] border border-brand-purple/30 bg-white shadow-[0_28px_70px_-28px_rgba(17,17,17,0.45)]">
            <div className="bg-brand-yellow px-5 py-4 text-base-black">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-base-dark/80">{t.floatingCta.workWithUs}</p>
              <h3 className="mt-1 text-lg font-semibold">{copy.jobsTitle}</h3>
              <p className="mt-1 text-sm text-base-dark">{copy.jobsIntro}</p>
            </div>
            <div className="max-h-[70vh] overflow-y-auto p-4">
              <JobsForm
                locale={locale}
                className="space-y-4 rounded-none border-0 bg-transparent p-0 shadow-none"
              />
            </div>
          </div>
        ) : null}

        <button
          type="button"
          onClick={() => setPanel((current) => (current === "jobs" ? null : "jobs"))}
          className="inline-flex w-[15rem] items-center justify-center rounded-full bg-brand-yellow px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.12em] text-base-black shadow-soft transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
        >
          <span className="text-center leading-[1.05]">
            TRABAJA
            <br />
            CON NOSOTROS
          </span>
        </button>

        <button
          type="button"
          aria-label={copy.ariaToggle}
          onClick={() => setPanel((current) => (current === "chat" ? null : "chat"))}
          className="inline-flex w-[15rem] items-center justify-center gap-3 rounded-full bg-brand-purple px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white shadow-soft transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-white" />
          </span>
          {copy.badge}
        </button>
      </div>
    </div>
  );
}
