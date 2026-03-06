"use client";

import { FormEvent, useState } from "react";

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

export function QuoteForm() {
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
          Nombre y apellidos
          <input
            required
            aria-label="Nombre y apellidos"
            value={form.name}
            onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
            className="w-full rounded-lg border border-base-mid bg-white px-3 py-2 text-base-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
          />
        </label>

        <label className="space-y-2 text-sm font-medium text-base-dark">
          Empresa
          <input
            aria-label="Empresa"
            value={form.company}
            onChange={(event) => setForm((prev) => ({ ...prev, company: event.target.value }))}
            className="w-full rounded-lg border border-base-mid bg-white px-3 py-2 text-base-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-base-dark">
          Correo electrónico
          <input
            required
            type="email"
            aria-label="Correo electrónico"
            value={form.email}
            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
            className="w-full rounded-lg border border-base-mid bg-white px-3 py-2 text-base-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
          />
        </label>

        <label className="space-y-2 text-sm font-medium text-base-dark">
          Teléfono
          <input
            required
            aria-label="Teléfono"
            value={form.phone}
            onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
            className="w-full rounded-lg border border-base-mid bg-white px-3 py-2 text-base-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-base-dark">
          Servicio solicitado
          <input
            required
            aria-label="Servicio solicitado"
            value={form.service}
            onChange={(event) => setForm((prev) => ({ ...prev, service: event.target.value }))}
            className="w-full rounded-lg border border-base-mid bg-white px-3 py-2 text-base-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
          />
        </label>

        <label className="space-y-2 text-sm font-medium text-base-dark">
          Ubicación de la obra
          <input
            required
            aria-label="Ubicación de la obra"
            value={form.location}
            onChange={(event) => setForm((prev) => ({ ...prev, location: event.target.value }))}
            className="w-full rounded-lg border border-base-mid bg-white px-3 py-2 text-base-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
          />
        </label>
      </div>

      <label className="space-y-2 text-sm font-medium text-base-dark">
        Detalles del proyecto
        <textarea
          required
          rows={6}
          aria-label="Detalles del proyecto"
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
          aria-label="Aceptación política de privacidad"
          required
          className="mt-1"
        />
        <span>
          Acepto el tratamiento de datos personales de acuerdo con la Política de privacidad.
        </span>
      </label>

      <label className="hidden" aria-hidden="true">
        No rellenar
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
        {status === "submitting" ? "Enviando..." : "Solicitar presupuesto"}
      </button>

      {status === "success" ? (
        <p className="text-sm font-medium text-green-700">Solicitud enviada correctamente.</p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm font-medium text-red-700">No se ha podido enviar la solicitud.</p>
      ) : null}
    </form>
  );
}
