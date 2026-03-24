import { NextResponse } from "next/server";
import { dispatchFormSubmission } from "@/lib/form-dispatch";

type QuotePayload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  service?: string;
  location?: string;
  details?: string;
  privacyAccepted?: boolean;
  website?: string;
  startedAt?: number;
  submittedAt?: number;
};

export async function POST(request: Request) {
  const data = (await request.json()) as QuotePayload;

  if (data.website) {
    return NextResponse.json({ success: true, message: "Formulario recibido" }, { status: 200 });
  }

  if (
    !data.name ||
    !data.email ||
    !data.phone ||
    !data.service ||
    !data.location ||
    !data.details ||
    !data.privacyAccepted
  ) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (
    typeof data.startedAt === "number" &&
    typeof data.submittedAt === "number" &&
    data.submittedAt - data.startedAt < 2500
  ) {
    return NextResponse.json({ error: "Submission rejected" }, { status: 400 });
  }

  await dispatchFormSubmission("quote", data, "estudio@dosmasgrup.com");

  return NextResponse.json(
    {
      success: true,
      message: "Solicitud de presupuesto recibida"
    },
    { status: 200 }
  );
}
