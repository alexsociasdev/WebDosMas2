"use client";

import { useState } from "react";
import { JobsForm } from "@/components/forms/jobs-form";
import { type Locale } from "@/lib/i18n";

type FloatingCtaProps = {
  locale: Locale;
};

type Panel = "jobs" | null;

export function FloatingCta({ locale }: FloatingCtaProps) {
  const [panel, setPanel] = useState<Panel>(null);

  return (
    <div className="fixed bottom-5 right-5 z-50 hidden items-end md:flex">
      <div className="flex flex-col items-end gap-3">
        {panel === "jobs" ? (
          <div className="w-[24rem] overflow-hidden rounded-[1.75rem] border border-brand-purple/30 bg-white shadow-[0_28px_70px_-28px_rgba(17,17,17,0.45)]">
            <div className="bg-brand-yellow px-5 py-4 text-base-black">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-base-dark/80">TRABAJA CON NOSOTROS</p>
              <h3 className="mt-1 text-lg font-semibold">Trabaja con nosotros</h3>
              <p className="mt-1 text-sm text-base-dark">Envíanos tus datos y tu CV para valorar tu candidatura.</p>
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
      </div>
    </div>
  );
}
