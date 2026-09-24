"use server";

// Contact form server action. Validates name / email / message, then delivers
// the enquiry to Tim's inbox via Postmark's HTTP API.
//
// Required environment variables (set in Vercel → Settings → Environment
// Variables, and in .env.local for local dev):
//   POSTMARK_SERVER_TOKEN  – the Server API token from Postmark
//   POSTMARK_FROM_EMAIL    – a verified Sender Signature / domain address
//   CONTACT_TO_EMAIL       – where enquiries land (defaults to tim@tangobrown.com)

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FALLBACK_TO = "tim@tangobrown.com";

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = ((formData.get("name") as string | null) ?? "").trim();
  const email = ((formData.get("email") as string | null) ?? "").trim();
  const message = ((formData.get("message") as string | null) ?? "").trim();

  // --- Spam guards (silent: pretend success so bots don't learn/retry) ---
  // 1. Honeypot: a hidden field real users never see. If filled, it's a bot.
  const honeypot = ((formData.get("company_website") as string | null) ?? "").trim();
  if (honeypot) return { status: "success" };

  // 2. Time trap: humans take a few seconds to fill the form; bots submit
  //    instantly. Only enforced when the timestamp is present.
  const loadedAt = Number(formData.get("loaded_at"));
  if (loadedAt && Date.now() - loadedAt < 3000) return { status: "success" };

  // 3. Link flood: legitimate enquiries rarely contain a pile of URLs.
  const linkCount = (message.match(/https?:\/\//gi) ?? []).length;
  if (linkCount > 4) return { status: "success" };

  if (!name) return { status: "error", message: "Please add your name." };
  if (!EMAIL_RE.test(email))
    return { status: "error", message: "Please add a valid email address." };
  if (!message)
    return { status: "error", message: "Tell me a little about what you need." };

  const token = process.env.POSTMARK_SERVER_TOKEN;
  const from = process.env.POSTMARK_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL ?? FALLBACK_TO;

  if (!token || !from) {
    console.error("[contact] Postmark is not configured (missing token/from).");
    return {
      status: "error",
      message: `Something went wrong sending your message. Please email ${FALLBACK_TO} directly.`,
    };
  }

  try {
    const res = await fetch("https://api.postmarkapp.com/email", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Postmark-Server-Token": token,
      },
      body: JSON.stringify({
        From: from,
        To: to,
        ReplyTo: `${name} <${email}>`,
        Subject: `New enquiry from ${name}`,
        TextBody: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        HtmlBody: `<p><strong>Name:</strong> ${escapeHtml(name)}<br/><strong>Email:</strong> ${escapeHtml(
          email,
        )}</p><p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
        MessageStream: "tango-brown-form",
      }),
    });

    const data = (await res.json().catch(() => null)) as { ErrorCode?: number; Message?: string } | null;

    if (!res.ok || (data?.ErrorCode ?? 0) !== 0) {
      console.error("[contact] Postmark send failed", res.status, data?.Message);
      return {
        status: "error",
        message: `Something went wrong sending your message. Please email ${FALLBACK_TO} directly.`,
      };
    }

    return { status: "success" };
  } catch (err) {
    console.error("[contact] Postmark request threw", err);
    return {
      status: "error",
      message: `Something went wrong sending your message. Please email ${FALLBACK_TO} directly.`,
    };
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
