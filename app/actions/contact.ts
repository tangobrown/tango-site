"use server";

// Contact form server action. Validates (name + one contact method are
// required — the handoff flags that the prototype lacked a reply field, so
// we add "How to reach you") and returns a typed result the client renders
// as success / error state.
//
// DELIVERY IS STUBBED. The handoff's open question #5 is whether "book a
// call" should post to an inbox, a CRM, or a scheduler (Cal.com / SavvyCal).
// Until that's decided, a valid submission is logged server-side only. Wire
// the real destination where the TODO is.

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot: bots fill hidden fields. Silently accept and drop.
  if ((formData.get("company_hp") as string)?.trim()) {
    return { status: "success" };
  }

  const name = (formData.get("name") as string | null)?.trim() ?? "";
  const contact = (formData.get("contact") as string | null)?.trim() ?? "";
  const business = (formData.get("business") as string | null)?.trim() ?? "";
  const need = (formData.get("need") as string | null)?.trim() ?? "";

  if (!name || !contact) {
    return {
      status: "error",
      message: "Please add your name and a way to reach you.",
    };
  }

  // TODO(open-question-5): deliver to the client's chosen destination —
  // email (e.g. Resend), a CRM, or a scheduler. For now, record server-side.
  console.log("[contact] new enquiry", { name, contact, business, need });

  return {
    status: "success",
    message: "Sent — talk soon.",
  };
}
