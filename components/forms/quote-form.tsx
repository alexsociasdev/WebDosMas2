"use client";

import { FormEvent, useState } from "react";
import { getDictionary, type Locale } from "@/lib/i18n";

type QuoteState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  location: string;
  details: string;
  privacyAccepted: boolean;
  website: string;
};

const initialState: QuoteState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  location: "",
  details: "",
  privacyAccepted: false,
  website: ""
};

type QuoteFormProps = {
  locale: Locale;
};

export function QuoteForm({ locale }: QuoteFormProps) {
  const t = getDictionary(locale);
  const formText = t.forms.quote;
  const [form, setForm] = useState<QuoteState>(initialState);
  const [startedAt] = useState<number>(() => Date.now());
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/presupuesto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          startedAt,
          submittedAt: Date.now()
        })
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setForm(initialState);
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-2xl border border-base-mid bg-white p-6 shadow-soft">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-base-dark">
          {formText.fullName}
          <input
            required
            aria-label={formText.fullName}
            value={form.name}
            onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
            className="w-full rounded-lg border border-base-mid bg-white px-3 py-2 text-base-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
          />
        </label>

        <label className="space-y-2 text-sm font-medium text-base-dark">
          {formText.company}
          <input
            aria-label={formText.company}
            value={form.company}
            onChange={(event) => setForm((prev) => ({ ...prev, company: event.target.value }))}
            className="w-full rounded-lg border border-base-mid bg-white px-3 py-2 text-base-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-base-dark">
          {formText.email}
          <input
            required
            type="email"
            aria-label={formText.email}
            value={form.email}
            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
            className="w-full rounded-lg border border-base-mid bg-white px-3 py-2 text-base-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
          />
        </label>

        <label className="space-y-2 text-sm font-medium text-base-dark">
          {formText.phone}
          <input
            required
            aria-label={formText.phone}
            value={form.phone}
            onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
            className="w-full rounded-lg border border-base-mid bg-white px-3 py-2 text-base-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-base-dark">
          {formText.requestedService}
          <input
            required
            aria-label={formText.requestedService}
            value={form.service}
            onChange={(event) => setForm((prev) => ({ ...prev, service: event.target.value }))}
            className="w-full rounded-lg border border-base-mid bg-white px-3 py-2 text-base-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
          />
        </label>

        <label className="space-y-2 text-sm font-medium text-base-dark">
          {formText.projectLocation}
          <input
            required
            aria-label={formText.projectLocation}
            value={form.location}
            onChange={(event) => setForm((prev) => ({ ...prev, location: event.target.value }))}
            className="w-full rounded-lg border border-base-mid bg-white px-3 py-2 text-base-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
          />
        </label>
      </div>

      <label className="space-y-2 text-sm font-medium text-base-dark">
        {formText.projectDetails}
        <textarea
          required
          rows={6}
          aria-label={formText.projectDetails}
          value={form.details}
          onChange={(event) => setForm((prev) => ({ ...prev, details: event.target.value }))}
          className="w-full rounded-lg border border-base-mid bg-white px-3 py-2 text-base-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
        />
      </label>

      <label className="flex items-start gap-3 rounded-lg border border-base-mid bg-base-light p-3 text-sm text-base-dark">
        <input
          type="checkbox"
          checked={form.privacyAccepted}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, privacyAccepted: event.target.checked }))
          }
          aria-label={formText.privacyAcceptance}
          required
          className="mt-1"
        />
        <span>
          {formText.privacyAcceptance}
        </span>
      </label>

      <label className="hidden" aria-hidden="true">
        {formText.honeypot}
        <input
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(event) => setForm((prev) => ({ ...prev, website: event.target.value }))}
        />
      </label>

      <button
        disabled={status === "submitting"}
        type="submit"
        className="rounded-full bg-brand-yellow px-6 py-3 text-sm font-semibold text-base-black transition hover:bg-brand-yellow/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? formText.sending : formText.submit}
      </button>

      {status === "success" ? (
        <p className="text-sm font-medium text-green-700">{formText.success}</p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm font-medium text-red-700">{formText.error}</p>
      ) : null}
    </form>
  );
}
