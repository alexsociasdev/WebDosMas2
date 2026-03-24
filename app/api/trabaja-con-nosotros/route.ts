import { Buffer } from "node:buffer";
import { NextResponse } from "next/server";
import { dispatchFormSubmission } from "@/lib/form-dispatch";

export async function POST(request: Request) {
  const formData = await request.formData();

  const website = String(formData.get("website") ?? "");
  if (website) {
    return NextResponse.json({ success: true, message: "Formulario recibido" }, { status: 200 });
  }

  const name = String(formData.get("name") ?? "");
  const email = String(formData.get("email") ?? "");
  const phone = String(formData.get("phone") ?? "");
  const message = String(formData.get("message") ?? "");
  const privacyAccepted = String(formData.get("privacyAccepted") ?? "") === "true";
  const startedAt = Number(formData.get("startedAt") ?? 0);
  const submittedAt = Number(formData.get("submittedAt") ?? 0);
  const cv = formData.get("cv");

  if (!name || !email || !phone || !message || !privacyAccepted || !(cv instanceof File) || cv.size === 0) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (submittedAt && startedAt && submittedAt - startedAt < 2500) {
    return NextResponse.json({ error: "Submission rejected" }, { status: 400 });
  }

  const cvBytes = await cv.arrayBuffer();
  const cvAttachment = {
    name: cv.name,
    type: cv.type || "application/octet-stream",
    size: cv.size,
    contentBase64: Buffer.from(cvBytes).toString("base64")
  };

  await dispatchFormSubmission(
    "jobs",
    {
      name,
      email,
      phone,
      message,
      cv: cvAttachment
    },
    "personal@dosmasgrup.com"
  );

  return NextResponse.json(
    {
      success: true,
      message: "Candidatura recibida"
    },
    { status: 200 }
  );
}
