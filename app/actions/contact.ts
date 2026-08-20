"use server";

// Contact form server action. Validates name / email / message and returns a
// typed result the client renders. DELIVERY IS STUBBED (handoff open item #1):
// wire this to Resend / Formspree / a route handler once Tim's destination is
// known — replace the console.log below.

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = ((formData.get("name") as string | null) ?? "").trim();
  const email = ((formData.get("email") as string | null) ?? "").trim();
  const message = ((formData.get("message") as string | null) ?? "").trim();

  if (!name) return { status: "error", message: "Please add your name." };
  if (!EMAIL_RE.test(email))
    return { status: "error", message: "Please add a valid email address." };
  if (!message)
    return { status: "error", message: "Tell me a little about what you need." };

  // TODO(open-item-1): deliver to Tim's inbox / CRM. Recorded server-side for now.
  console.log("[contact] new enquiry", { name, email, message });

  return { status: "success" };
}
