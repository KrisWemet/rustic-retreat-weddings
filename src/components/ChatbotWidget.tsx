import { useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { faqs, FAQItem } from "@/data/faqs";

const QUICK_QUESTIONS = [
  "How much does it cost and what's included?",
  "How many guests can we bring?",
  "Do you allow pets?",
  "What happens if it rains?",
  "How do we book a tour?",
];

const LEAD_STEPS = [
  { key: "name", prompt: "What’s your name?" },
  { key: "email", prompt: "Best email to send details?" },
  { key: "phone", prompt: "Phone number (for texts or quick updates)?" },
  { key: "weddingDate", prompt: "When are you thinking for your celebration? (approximate is fine)" },
  { key: "guestCount", prompt: "Estimated guest count?" },
  { key: "tourDates", prompt: "2–3 dates that work for a tour?" },
] as const;

type LeadKey = typeof LEAD_STEPS[number]["key"];

type Message = { role: "bot" | "user"; text: string };

type LeadState = {
  active: boolean;
  stepIndex: number;
  data: Partial<Record<LeadKey, string>>;
};

const normalize = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 2);

const scoreFAQ = (faq: FAQItem, tokens: string[]) => {
  const haystack = `${faq.question} ${faq.answer} ${faq.category}`.toLowerCase();
  let score = 0;
  tokens.forEach((token) => {
    if (haystack.includes(token)) score += 1;
  });
  return score;
};

const getBestAnswer = (query: string) => {
  const tokens = normalize(query);
  if (tokens.length === 0) return null;

  let best: FAQItem | null = null;
  let bestScore = 0;

  for (const faq of faqs) {
    const score = scoreFAQ(faq, tokens);
    if (score > bestScore) {
      bestScore = score;
      best = faq;
    }
  }

  return bestScore > 0 ? best : null;
};

const fallbackResponse =
  "I can answer questions about packages, pricing, guest capacity, and logistics. If you want to book a tour, I can collect your details here and we’ll reply within 24 hours.";

const ChatbotWidget = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [lead, setLead] = useState<LeadState>({
    active: false,
    stepIndex: 0,
    data: {},
  });
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hi! I’m VenueBot. Ask me about packages, pricing, guest capacity, or scheduling a tour.",
    },
  ]);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const quickReplies = useMemo(() => QUICK_QUESTIONS, []);

  const appendMessage = (role: "bot" | "user", text: string) => {
    setMessages((prev) => [...prev, { role, text }]);
    setTimeout(() => {
      scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
    }, 10);
  };

  const startLeadFlow = () => {
    setLead({ active: true, stepIndex: 0, data: {} });
    appendMessage("bot", "Let’s get your tour request started.");
    appendMessage("bot", LEAD_STEPS[0].prompt);
  };

  const submitLead = async (payload: Record<string, string>) => {
    setSubmitting(true);
    try {
      const formData = new FormData();
      Object.entries(payload).forEach(([key, value]) => {
        formData.append(key, value);
      });
      formData.append("leadType", "chatbot-tour-request");

      const response = await fetch("https://formspree.io/f/mgooaleg", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        appendMessage("bot", "All set! We’ll reply within 24 hours to confirm a tour.");
        appendMessage("bot", "Want to keep browsing? Ask me anything about the venue.");
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      appendMessage(
        "bot",
        "Something went wrong sending that. You can still book directly on the Contact page."
      );
    } finally {
      setSubmitting(false);
      setLead({ active: false, stepIndex: 0, data: {} });
    }
  };

  const handleLeadInput = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    appendMessage("user", trimmed);

    const step = LEAD_STEPS[lead.stepIndex];
    const updatedData = { ...lead.data, [step.key]: trimmed };
    const nextIndex = lead.stepIndex + 1;

    if (nextIndex >= LEAD_STEPS.length) {
      setLead((prev) => ({ ...prev, data: updatedData }));
      appendMessage("bot", "Thanks! Sending this over now...");
      submitLead(updatedData as Record<string, string>);
      setInput("");
      return;
    }

    setLead({ active: true, stepIndex: nextIndex, data: updatedData });
    appendMessage("bot", LEAD_STEPS[nextIndex].prompt);
    setInput("");
  };

  const handleSubmit = (text: string) => {
    if (lead.active) {
      handleLeadInput(text);
      return;
    }

    const trimmed = text.trim();
    if (!trimmed) return;

    appendMessage("user", trimmed);

    const match = getBestAnswer(trimmed);
    if (match) {
      appendMessage("bot", match.answer);
    } else if (trimmed.toLowerCase().includes("tour") || trimmed.toLowerCase().includes("visit")) {
      appendMessage("bot", "Tours are by appointment. Want me to collect a few details and request a visit?");
      appendMessage("bot", "Tap ‘Start planning’ below to begin.");
    } else {
      appendMessage("bot", fallbackResponse);
    }

    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-[320px] sm:w-[360px] rounded-2xl border-2 bg-background shadow-elegant">
          <div className="flex items-center justify-between border-b px-4 py-3">
            <div>
              <p className="text-sm font-semibold">VenueBot</p>
              <p className="text-xs text-muted-foreground">
                {lead.active ? "Tour request in progress" : "Instant answers from our FAQs"}
              </p>
            </div>
            <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>
              Close
            </Button>
          </div>

          <div ref={scrollRef} className="max-h-[320px] overflow-y-auto space-y-3 px-4 py-3">
            {messages.map((msg, idx) => (
              <div
                key={`${msg.role}-${idx}`}
                className={
                  msg.role === "user"
                    ? "ml-auto w-fit max-w-[85%] rounded-2xl bg-primary px-3 py-2 text-sm text-primary-foreground"
                    : "mr-auto w-fit max-w-[85%] rounded-2xl bg-muted px-3 py-2 text-sm text-foreground"
                }
              >
                {msg.text}
              </div>
            ))}

            {!lead.active && (
              <div className="flex flex-wrap gap-2 pt-1">
                {quickReplies.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => handleSubmit(item)}
                    className="rounded-full border border-secondary/40 px-3 py-1 text-xs text-secondary hover:bg-secondary/10"
                  >
                    {item}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={startLeadFlow}
                  className="rounded-full border border-primary/40 px-3 py-1 text-xs text-primary hover:bg-primary/10"
                >
                  Start planning
                </button>
              </div>
            )}

            {!lead.active && (
              <div className="text-xs text-muted-foreground">
                Want a real person? <a href="/contact" className="text-secondary underline">Book a tour</a>
              </div>
            )}
          </div>

          <form
            className="flex items-center gap-2 border-t px-3 py-3"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(input);
            }}
          >
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={lead.active ? "Type your answer..." : "Ask a question..."}
              className="h-9"
              disabled={submitting}
            />
            <Button type="submit" size="sm" disabled={submitting}>
              {submitting ? "Sending..." : "Send"}
            </Button>
          </form>
        </div>
      )}

      <Button
        onClick={() => setOpen((prev) => !prev)}
        className="rounded-full px-5 py-3 shadow-elegant"
      >
        {open ? "Hide VenueBot" : "Chat with VenueBot"}
      </Button>
    </div>
  );
};

export default ChatbotWidget;
