export async function dispatchFormSubmission(
  type: "contact" | "quote" | "jobs",
  payload: Record<string, unknown>,
  recipient?: string
): Promise<{ delivered: boolean; status?: number }> {
  const webhook = process.env.FORM_WEBHOOK_URL;

  if (!webhook) {
    return { delivered: false };
  }

  const response = await fetch(webhook, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      type,
      source: "dosmasgrup-web",
      createdAt: new Date().toISOString(),
      recipient,
      payload
    }),
    cache: "no-store"
  });

  return {
    delivered: response.ok,
    status: response.status
  };
}
