// Website forms go to the venue's CRM first. The CRM records the couple and
// emails the venue; Formspree is kept as the backup and is only used when the
// CRM can't be reached or couldn't send that email, so no enquiry goes unseen.
// (The Formspree account stays in place until the venue retires it.)
const CRM_BASE =
  import.meta.env.VITE_CRM_ENQUIRY_BASE || "https://crm.rusticretreatalberta.ca/api/inquire";
const CRM_TIMEOUT_MS = 10000;

type Result = { ok: boolean; via: "crm" | "formspree" | "crm-unnotified" | "none" };

async function sendToCrm(path: string, formData: FormData, extra: Record<string, string>) {
  const body = new URLSearchParams();
  formData.forEach((value, key) => {
    if (typeof value === "string") body.append(key, value);
  });
  Object.entries(extra).forEach(([key, value]) => body.append(key, value));
  // Ask the CRM to email the venue. Without this it only records the couple.
  body.append("_notify", "1");
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), CRM_TIMEOUT_MS);
  try {
    // URL-encoded keeps it a simple request (no CORS preflight); the CRM allows
    // this site's origin, so the reply can be read.
    const res = await fetch(`${CRM_BASE}/${path}`, { method: "POST", body, signal: controller.signal });
    if (!res.ok) return { saved: false, notified: false };
    const json = await res.json().catch(() => ({}));
    return { saved: true, notified: json.notified === true };
  } catch {
    return { saved: false, notified: false };
  } finally {
    clearTimeout(timer);
  }
}

async function sendToFormspree(url: string, formData: FormData) {
  try {
    const res = await fetch(url, { method: "POST", body: formData, headers: { Accept: "application/json" } });
    return res.ok;
  } catch {
    return false;
  }
}

/**
 * Submit a website form. Resolves ok when the venue has it: the CRM saved it
 * and emailed them, or Formspree took it, or (both emails failing) the CRM at
 * least saved it with its follow-up task.
 */
export async function submitEnquiry(
  path: "website" | "booking-request",
  formspreeUrl: string,
  formData: FormData,
  extra: Record<string, string> = {},
): Promise<Result> {
  const crm = await sendToCrm(path, formData, extra);
  if (crm.saved && crm.notified) return { ok: true, via: "crm" };
  if (await sendToFormspree(formspreeUrl, formData)) return { ok: true, via: "formspree" };
  if (crm.saved) return { ok: true, via: "crm-unnotified" };
  return { ok: false, via: "none" };
}
