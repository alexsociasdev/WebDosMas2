import { NextResponse } from "next/server";
import { dispatchFormSubmission } from "@/lib/form-dispatch";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  privacyAccepted?: boolean;
  website?: string;
  startedAt?: number;
  submittedAt?: number;
};

export async function POST(request: Request) {
  const data = (await request.json()) as ContactPayload;

  if (data.website) {
    return NextResponse.json({ success: true, message: "Formulario recibido" }, { status: 200 });
  }

  if (!data.name || !data.email || !data.phone || !data.message || !data.privacyAccepted) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (
    typeof data.startedAt === "number" &&
    typeof data.submittedAt === "number" &&
    data.submittedAt - data.startedAt < 2500
  ) {
    return NextResponse.json({ error: "Submission rejected" }, { status: 400 });
  }

  await dispatchFormSubmission("contact", data, "info@dosmasgrup.com");

  return NextResponse.json(
    {
      success: true,
      message: "Formulario de contacto recibido"
    },
    { status: 200 }
  );
}
