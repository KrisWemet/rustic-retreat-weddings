type InquiryType = "tour" | "question";

const sendEvent = (name: string, parameters: Record<string, string>) => {
  if (typeof window !== "undefined") window.gtag?.("event", name, parameters);
};

export const rememberInquirySource = () => {
  if (typeof window === "undefined" || sessionStorage.getItem("rustic_landing_source")) return;
  const params = new URLSearchParams(window.location.search);
  const source = ["utm_source", "utm_medium", "utm_campaign"].map((key) => params.get(key)).filter(Boolean).join(" / ");
  sessionStorage.setItem("rustic_landing_source", source || document.referrer || "Direct / unknown");
};

export const trackTourClick = (type: InquiryType, page: string) => sendEvent("inquiry_click", { inquiry_type: type, source_page: page });
export const trackTourFormStart = (type: InquiryType) => sendEvent("inquiry_form_start", { inquiry_type: type });
export const trackTourSubmission = (type: InquiryType) => sendEvent("inquiry_submit", { inquiry_type: type });
