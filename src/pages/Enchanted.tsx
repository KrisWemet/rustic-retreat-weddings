import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Clock, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CTAButton } from "@/components/ui/cta-button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import PageTransition from "@/components/PageTransition";
import heroImage from "@/assets/gallery/wedding-party-formal.webp";
import { useToast } from "@/hooks/use-toast";
import enchantedMarkdown from "../../Enchanted.md?raw";

const OPTIONAL_ADDONS = [
  "Bar service",
  "Fireworks display",
  "Photo booth",
  "Midnight taco bar or BBQ",
  "Optional light lunch",
  "Full weekend catering",
  "Sunday outdoor activity day",
  "Additional days",
  "Lakefront AirBnB for groom and groomsmen",
  "Hair and makeup",
];

const ENCHANTED_APPLICATION_EMAIL = "rusticretreatalberta@gmail.com";

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&#39;");

const renderInline = (text: string) => {
  let html = escapeHtml(text);
  html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  html = html.replace(/`([^`]+)`/g, "<code>$1</code>");
  html = html.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, "<a href=\"$2\" target=\"_blank\" rel=\"noreferrer\">$1</a>");
  return html;
};

const isAllCapsHeading = (text: string) => {
  if (text.length < 4 || text.length > 85) {
    return false;
  }
  if (/[a-z]/.test(text) || !/[A-Z]/.test(text)) {
    return false;
  }
  return /^[A-Z0-9 '&:+\-.,!?()]+$/.test(text);
};

const markdownToHtml = (markdown: string) => {
  const lines = markdown.split(/\r?\n/);
  const output: string[] = [];
  const paragraph: string[] = [];

  const flushParagraph = () => {
    if (paragraph.length === 0) {
      return;
    }
    output.push(`<p>${paragraph.map((line) => renderInline(line)).join("<br />")}</p>`);
    paragraph.length = 0;
  };

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      flushParagraph();
      continue;
    }

    const markdownHeadingMatch = trimmed.match(/^(#{1,6})\s+(.+)$/);
    if (markdownHeadingMatch) {
      flushParagraph();
      const level = markdownHeadingMatch[1].length;
      const safeLevel = Math.min(6, Math.max(1, level + 1));
      output.push(`<h${safeLevel}>${renderInline(markdownHeadingMatch[2])}</h${safeLevel}>`);
      continue;
    }

    if (isAllCapsHeading(trimmed)) {
      flushParagraph();
      output.push(`<h2>${renderInline(trimmed)}</h2>`);
      continue;
    }

    if (/^(-{3,}|\*{3,}|_{3,})$/.test(trimmed)) {
      flushParagraph();
      output.push("<hr />");
      continue;
    }

    paragraph.push(trimmed);
  }

  flushParagraph();
  return output.join("\n");
};

const getEventDetailsMarkdown = (markdown: string) => {
  const lines = markdown.split(/\r?\n/);
  const cutoffIndex = lines.findIndex((line) => line.trim() === "LET'S GET TO KNOW YOU");
  if (cutoffIndex === -1) {
    return markdown;
  }
  return lines.slice(0, cutoffIndex).join("\n").trim();
};

const Enchanted = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const detailsHtml = useMemo(() => {
    const eventDetailsOnly = getEventDetailsMarkdown(enchantedMarkdown);
    return markdownToHtml(eventDetailsOnly);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const replyTo = formData.get("email");
    if (typeof replyTo === "string" && replyTo.trim().length > 0) {
      formData.set("_replyto", replyTo.trim());
    }
    formData.set("to_email", ENCHANTED_APPLICATION_EMAIL);
    formData.set("destination_email", ENCHANTED_APPLICATION_EMAIL);

    try {
      const response = await fetch("https://formspree.io/f/mgooaleg", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setIsSubmitted(true);
      toast({
        title: "Application sent",
        description: "Thank you. Your application was sent to rusticretreatalberta@gmail.com.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Unable to submit right now",
        description: "Please try again or email rusticretreatalberta@gmail.com.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <SEO
        title="Enchanted Wedding"
        description="Apply for the Enchanted Wedding weekend at Rustic Retreat. One couple gets a fully planned and designed celebration experience."
        path="/enchanted-wedding"
        image={heroImage}
        keywords={["enchanted wedding", "wedding giveaway alberta", "all set up wedding weekend", "rustic retreat enchanted"]}
      />
      <BreadcrumbSchema />
      <div className="min-h-screen">
        <Navigation />

        <section className="relative min-h-[480px] flex items-center justify-center overflow-hidden mt-20">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Wedding celebration at Rustic Retreat"
              className="h-full w-full object-cover object-center"
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/75" />
          </div>
          <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
            <p className="font-handwriting text-3xl md:text-4xl text-accent mb-3">Temporary Feature Event</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-5">Enchanted Wedding</h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-primary-foreground/90">
              One couple. One weekend. A fully set-up celebration experience at Rustic Retreat.
            </p>
          </div>
        </section>

        <section id="details" className="section">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid sm:grid-cols-2 gap-3 mb-5">
                <div className="rounded-xl border border-border bg-card p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground mb-1">Dates</p>
                  <p className="font-semibold text-primary">August 21 to 23</p>
                </div>
                <div className="rounded-xl border border-border bg-card p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground mb-1">Capacity</p>
                  <p className="font-semibold text-primary">Up to 50 guests</p>
                </div>
              </div>

              <Card className="border-2 shadow-soft">
                <CardContent className="p-6 md:p-8">
                  <div
                    className="enchanted-markdown"
                    dangerouslySetInnerHTML={{ __html: detailsHtml }}
                  />
                </CardContent>
              </Card>

              <div id="apply" className="mt-8">
                <Card className="border-2 shadow-medium">
                  <CardContent className="p-6 md:p-8">
                    {isSubmitted ? (
                      <div className="text-center py-8">
                        <CheckCircle2 className="w-14 h-14 text-secondary mx-auto mb-4" />
                        <h2 className="text-2xl font-bold mb-2">Application Submitted</h2>
                        <p className="text-muted-foreground mb-6">
                          Thank you for applying to be our Enchanted Wedding couple.
                        </p>
                        <Button onClick={() => setIsSubmitted(false)} variant="outline" className="rounded-full">
                          Submit Another Response
                        </Button>
                      </div>
                    ) : (
                      <>
                        <div className="flex items-center gap-2 bg-secondary/10 text-secondary px-3 py-2 rounded-full text-sm mb-6 w-fit">
                          <Clock className="w-4 h-4" />
                          <span className="font-medium">Application Form</span>
                        </div>

                        <h2 className="text-2xl font-bold mb-2">Apply To Be The Couple</h2>
                        <p className="text-sm text-muted-foreground mb-6">
                          This matches the questionnaire from Enchanted.md so we can review your application with all required details.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-5">
                          <input type="hidden" name="_subject" value="New Enchanted Wedding Application" />
                          <input type="hidden" name="form_type" value="enchanted_wedding_application" />
                          <input type="hidden" name="page" value="/enchanted-wedding" />
                          <input type="hidden" name="to_email" value={ENCHANTED_APPLICATION_EMAIL} />
                          <input type="hidden" name="destination_email" value={ENCHANTED_APPLICATION_EMAIL} />

                          <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="fullNames">Full Name(s) *</Label>
                              <Input id="fullNames" name="full_names" required className="mt-2" placeholder="Jane & John" />
                            </div>
                            <div>
                              <Label htmlFor="email">Email *</Label>
                              <Input id="email" name="email" type="email" required className="mt-2" placeholder="you@example.com" />
                            </div>
                          </div>

                          <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="phone">Phone *</Label>
                              <Input id="phone" name="phone" type="tel" required className="mt-2" placeholder="(780) 555-0123" />
                            </div>
                            <div>
                              <Label htmlFor="location">City / Region</Label>
                              <Input id="location" name="location" className="mt-2" placeholder="Edmonton, AB" />
                            </div>
                          </div>

                          <div>
                            <Label htmlFor="reason">1. What made you reach out to us? *</Label>
                            <p className="text-xs text-muted-foreground mt-1">What caught your eye? What resonated with you?</p>
                            <Textarea id="reason" name="reason_for_reaching_out" required className="mt-2 min-h-24" />
                          </div>

                          <div>
                            <Label htmlFor="story">2. Tell us a little about yourselves! How did you meet, and how long have you been together? *</Label>
                            <p className="text-xs text-muted-foreground mt-1">We love a good love story — don't hold back.</p>
                            <Textarea id="story" name="love_story" required className="mt-2 min-h-24" />
                          </div>

                          <div>
                            <Label htmlFor="vision">3. What does your ideal wedding weekend look and feel like? What matters most to you? *</Label>
                            <p className="text-xs text-muted-foreground mt-1">Atmosphere, flow, those non-negotiable moments — tell us what is at the heart of it for you.</p>
                            <Textarea id="vision" name="ideal_vision" required className="mt-2 min-h-24" />
                          </div>

                          <div>
                            <Label htmlFor="guestCount">4. How many guests are you envisioning? *</Label>
                            <p className="text-xs text-muted-foreground mt-1">Up to 50 guests, not including the two of you.</p>
                            <Input id="guestCount" name="guest_count" required className="mt-2" placeholder="e.g., 45 guests" />
                          </div>

                          <div>
                            <Label htmlFor="kids">5. Will any little ones be joining the celebration?</Label>
                            <p className="text-xs text-muted-foreground mt-1">We have plenty to keep kids happy and entertained.</p>
                            <Textarea id="kids" name="children_attending" className="mt-2 min-h-20" placeholder="Yes / No and any details" />
                          </div>

                          <div>
                            <Label htmlFor="aesthetic">6. Have you had a chance to peek at our vision board? Do you love the aesthetic we have curated, or do you have something else in mind?</Label>
                            <p className="text-xs text-muted-foreground mt-1">We work within a defined look and feel, so we would love to know how aligned you are with our vision.</p>
                            <Textarea id="aesthetic" name="vision_alignment" className="mt-2 min-h-20" />
                          </div>

                          <div>
                            <Label className="mb-3 block">7. Which optional add-ons are you most interested in?</Label>
                            <div className="grid sm:grid-cols-2 gap-2">
                              {OPTIONAL_ADDONS.map((addon) => (
                                <label
                                  key={addon}
                                  className="flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-sm"
                                >
                                  <input type="checkbox" name="addons" value={addon} className="accent-secondary" />
                                  <span>{addon}</span>
                                </label>
                              ))}
                            </div>
                          </div>

                          <div>
                            <Label htmlFor="extra">8. Is there anything else you would like us to know about you, your guests, or your vision for the weekend?</Label>
                            <Textarea id="extra" name="additional_info" className="mt-2 min-h-20" />
                          </div>

                          <div>
                            <Label htmlFor="questions">9. Do you have any questions for us at this stage?</Label>
                            <Textarea id="questions" name="questions" className="mt-2 min-h-20" />
                          </div>

                          <div>
                            <Label htmlFor="photoWilling">10. Would you be willing to share a photo of the two of you?</Label>
                            <p className="text-xs text-muted-foreground mt-1">We would love to put a face to the names.</p>
                            <Input id="photoWilling" name="photo_willing" className="mt-2" placeholder="Yes / No" />
                          </div>

                          <div>
                            <Label htmlFor="photoLink">Photo link (optional)</Label>
                            <Input id="photoLink" name="couple_photo_link" className="mt-2" placeholder="Google Drive / Dropbox / Instagram URL" />
                          </div>

                          <div>
                            <Label htmlFor="budget">11. What is your approximate budget for this package? *</Label>
                            <p className="text-xs text-muted-foreground mt-1">Our package starts at approximately $18,000 and final pricing depends on selected add-ons.</p>
                            <Input id="budget" name="budget" required className="mt-2" placeholder="$18,000+" />
                          </div>

                          <label className="flex items-start gap-2 text-sm text-muted-foreground">
                            <input type="checkbox" name="consent" required className="mt-1 accent-secondary" />
                            <span>I understand this is an application and the final couple selection is made by Rustic Retreat.</span>
                          </label>

                          <CTAButton type="submit" className="w-full text-base py-6" disabled={isSubmitting}>
                            {isSubmitting ? "Submitting Application..." : "Submit Application"}
                          </CTAButton>
                        </form>
                      </>
                    )}
                  </CardContent>
                </Card>

                <p className="text-xs text-muted-foreground mt-3 text-center">
                  Prefer email? Send your application to{" "}
                  <a href="mailto:rusticretreatalberta@gmail.com" className="text-secondary hover:underline">
                    rusticretreatalberta@gmail.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-muted text-center">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need A Quick Overview First?</h2>
            <p className="text-muted-foreground mb-6">
              You can download the Enchanted information package as a PDF any time.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild className="rounded-full px-7">
                <a href="/downloads/enchanted.pdf" download>
                  Download Enchanted PDF
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-7">
                <Link to="/contact">Contact Us Directly</Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Enchanted;
