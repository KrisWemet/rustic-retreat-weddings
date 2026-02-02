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
  "I can answer questions about packages, pricing, guest capacity, and logistics. If you want to book a tour, head to the Contact page and we’ll reply within 24 hours.";

const ChatbotWidget = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: "bot" | "user"; text: string }[]>([
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

  const handleSubmit = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    appendMessage("user", trimmed);

    const match = getBestAnswer(trimmed);
    if (match) {
      appendMessage("bot", match.answer);
    } else if (trimmed.toLowerCase().includes("tour") || trimmed.toLowerCase().includes("visit")) {
      appendMessage("bot", "Tours are by appointment. Use the Contact page to request a visit and we’ll reply within 24 hours.");
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
              <p className="text-xs text-muted-foreground">Instant answers from our FAQs</p>
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
            </div>

            <div className="text-xs text-muted-foreground">
              Want a real person? <a href="/contact" className="text-secondary underline">Book a tour</a>
            </div>
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
              placeholder="Ask a question..."
              className="h-9"
            />
            <Button type="submit" size="sm">
              Send
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
