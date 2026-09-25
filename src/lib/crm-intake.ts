// Formspree remains the visitor-facing delivery path. This copy is best-effort;
// the owner can reconcile its Formspree email if the CRM is temporarily down.
export async function copyInquiryToCrm(payload: Record<string, string>) {
  try {
    const response = await fetch("/api/crm-inquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: true,
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) console.error("CRM intake failed", response.status);
  } catch (error) {
    console.error("CRM intake failed", error);
  }
}

export function bookingQuestionnaireLead(form: Record<string, string>, season: 2026 | 2027, submissionId: string) {
  const detail = [
    `Booking questionnaire ${season}`,
    form.package && `Package requested: ${form.package}`,
    form.backupDate && `Second-choice date: ${form.backupDate}`,
    form.checkinDate && `Check-in: ${form.checkinDate}`,
    form.checkoutDate && `Check-out: ${form.checkoutDate}`,
    form.overnightGuests && `Overnight guests: ${form.overnightGuests}`,
    form.rvs && `RVs: ${form.rvs}`,
    form.tents && `Tents: ${form.tents}`,
    form.vision && `Vision: ${form.vision}`,
    form.anythingElse && `Other details: ${form.anythingElse}`,
  ].filter(Boolean).join("\n");
  return {
    submissionId,
    partner1FirstName: form.client1Name,
    partner2FirstName: form.client2Name,
    email: form.email,
    preferredEmail: form.contactPref === "Email" ? form.contactEmail?.trim() || form.email : "",
    phone: form.contactPhone || form.client1Phone,
    weddingDate: form.eventDate || form.checkinDate,
    guestCount: form.totalGuestCount || form.guestCount,
    preferredContact: form.contactPref === "Text message" ? "text" : form.contactPref === "Email" ? "email" : form.contactPref === "Phone call" ? "phone" : "",
    tourDates: "",
    inquiryType: `Booking request ${season}`,
    landingSource: form.heardAbout || `Booking form ${season}`,
    message: detail,
  };
}
