type InquiryPayload = {
  full_name: string;
  email?: string;
  phone?: string;
  source?: string;
  status?: string;
  event_start_date?: string;
  event_end_date?: string;
  estimated_guest_count?: number;
  notes?: string;
  lead_type?: string;
};

const CRM_URL = import.meta.env.VITE_CRM_INQUIRY_URL as string | undefined;
const CRM_ANON_KEY = import.meta.env.VITE_CRM_ANON_KEY as string | undefined;

export async function submitInquiry(payload: InquiryPayload) {
  if (!CRM_URL || !CRM_ANON_KEY) {
    throw new Error("CRM not configured");
  }

  const response = await fetch(CRM_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: CRM_ANON_KEY,
      Authorization: `Bearer ${CRM_ANON_KEY}`,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || "Inquiry submission failed");
  }

  return response.json();
}
