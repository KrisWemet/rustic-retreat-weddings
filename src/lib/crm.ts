// The venue's CRM keeps a copy of every website enquiry and booking request, so
// no one has to retype them from the Formspree emails. Formspree stays the
// notification; this copy is extra.
const CRM_BASE =
  import.meta.env.VITE_CRM_ENQUIRY_BASE || "https://crm.rusticretreatalberta.ca/api/inquire";

// Fire-and-forget: the couple's confirmation depends only on Formspree, so a
// CRM outage can never make a form look broken. URL-encoded and no-cors keep
// it a simple request the browser sends without a CORS preflight, and
// keepalive lets it finish if the page changes.
export function copyToCrm(
  path: "website" | "booking-request",
  formData: FormData,
  extra: Record<string, string> = {},
) {
  const body = new URLSearchParams();
  formData.forEach((value, key) => {
    if (typeof value === "string") body.append(key, value);
  });
  Object.entries(extra).forEach(([key, value]) => body.append(key, value));
  fetch(`${CRM_BASE}/${path}`, { method: "POST", body, mode: "no-cors", keepalive: true }).catch(() => {});
}
