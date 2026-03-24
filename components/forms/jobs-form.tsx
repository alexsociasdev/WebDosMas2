"use client";

import { FormEvent, useState } from "react";
import { cn } from "@/lib/utils";
import { getDictionary, type Locale } from "@/lib/i18n";

type JobsState = {
  name: string;
  email: string;
  phone: string;
  message: string;
  privacyAccepted: boolean;
  website: string;
  cv: File | null;
};

const initialState: JobsState = {
  name: "",
  email: "",
  phone: "",
  message: "",
  privacyAccepted: false,
  website: "",
  cv: null
};

type JobsFormProps = {
  locale: Locale;
  className?: string;
};

export function JobsForm({ locale, className }: JobsFormProps) {
  const t = getDictionary(locale);
  const formText = t.forms.jobs;
  const [form, setForm] = useState<JobsState>(initialState);
  const [startedAt] = useState<number>(() => Date.now());
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");

    try {
      const body = new FormData();
      body.append("name", form.name);
      body.append("email", form.email);
      body.append("phone", form.phone);
      body.append("message", form.message);
      body.append("privacyAccepted", String(form.privacyAccepted));
      body.append("website", form.website);
      body.append("startedAt", String(startedAt));
      body.append("submittedAt", String(Date.now()));

      if (form.cv) {
        body.append("cv", form.cv);
      }

      const response = await fetch("/api/trabaja-con-nosotros", {
        method: "POST",
        body
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
    <form
      onSubmit={onSubmit}
      className={cn("space-y-5 rounded-2xl border border-base-mid bg-white p-6 shadow-soft", className)}
    >
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
        {formText.message}
        <textarea
          required
          rows={4}
          aria-label={formText.message}
          value={form.message}
          onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
          className="w-full rounded-lg border border-base-mid bg-white px-3 py-2 text-base-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
        />
      </label>

      <label className="space-y-2 text-sm font-medium text-base-dark">
        {formText.cv}
        <input
          required
          type="file"
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          aria-label={formText.cv}
          onChange={(event) =>
            setForm((prev) => ({
              ...prev,
              cv: event.target.files?.[0] ?? null
            }))
          }
          className="w-full rounded-lg border border-base-mid bg-white px-3 py-2 text-sm text-base-black file:mr-3 file:rounded-full file:border-0 file:bg-brand-purple file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white"
        />
        <p className="text-xs leading-6 text-base-dark">{formText.cvHelp}</p>
      </label>

      <label className="flex items-start gap-3 rounded-lg border border-base-mid bg-white p-3 text-sm text-base-dark">
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
        <span>{formText.privacyAcceptance}</span>
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
        className="rounded-full bg-brand-purple px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow disabled:cursor-not-allowed disabled:opacity-70"
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
