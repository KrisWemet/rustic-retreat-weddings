import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CTAButton } from "@/components/ui/cta-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import HoverImage from "@/components/HoverImage";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import TrustBadges from "@/components/TrustBadges";
import AvailabilityIndicator from "@/components/AvailabilityIndicator";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Calendar, Clock, CheckCircle2 } from "lucide-react";
import receptionEvening from "@/assets/gallery/reception-evening-lights.webp";
import contactMiddleImage from "@/assets/gallery/rustic-retreat-venue-exterior.webp";
import contactBottomLeft from "@/assets/gallery/sunset-silhouette-couple.webp";
import contactBottomRight from "@/assets/gallery/wedding-details-rings.webp";
import contactExpectImage from "@/assets/gallery/couple-portrait-forest-tall.webp";
import { trackLead } from "@/lib/analytics";
import { TESTIMONIALS } from "@/data/testimonials";
import { trackTourFormStart, trackTourSubmission } from "@/lib/tour-analytics";
import { useTouringSeasonOpen } from "@/lib/touring-season";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [preferredContact, setPreferredContact] = useState("text");
  const [searchParams] = useSearchParams();
  const isQuestion = searchParams.get("intent") === "question";
  const [formStarted, setFormStarted] = useState(false);
  const touringSeasonOpen = useTouringSeasonOpen();

  useEffect(() => {
    setPreferredContact("text");
    setFormStarted(false);
    setIsSubmitted(false);
  }, [isQuestion]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set("inquiryType", isQuestion ? "Question" : "Tour request");
    formData.set("landingSource", sessionStorage.getItem("rustic_landing_source") || document.referrer || "Direct / unknown");

    try {
      const response = await fetch("https://formspree.io/f/mgooaleg", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        trackLead({ source: isQuestion ? "Question" : "Tour request" });
        trackTourSubmission(isQuestion ? "question" : "tour");
        toast({
          title: "Message sent!",
          description: isQuestion ? "We'll be in touch within 24 hours." : "We'll be in touch within 24 hours to schedule your property visit.",
        });
        form.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly at rusticretreatalberta@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <SEO
        title="Book a Venue Tour Near Edmonton"
        description="Book a tour or ask a question about Rustic Retreat, an outdoor wedding venue an hour northwest of Edmonton near Barrhead, Onoway and Alberta Beach. By appointment."
        path="/contact"
        image={receptionEvening}
        keywords={["wedding venue tour edmonton", "property visit rustic retreat", "wedding venue consultation alberta", "book wedding venue viewing", "outdoor wedding venue edmonton contact"]}
      />
      <BreadcrumbSchema />
      <div className="min-h-screen">
        <Navigation />

        <PageHero
          backgroundImage={receptionEvening}
          backgroundImageAlt="Couple and friends in an open field at Rustic Retreat"
          title="Discover Your Venue"
          subtitle="Property tours by appointment only, scheduled around existing bookings. Come feel the space and see if this is where your story wants to unfold."
          overlayOpacity="none"
          contentClassName="translate-y-[15vh] drop-shadow-md"
        />

        {/* Contact Section */}
        <section className="section">
          <div className="container mx-auto px-4">
            {/* What to Expect - full-width above the grid */}
            <div className="max-w-6xl mx-auto mb-8">
              <ScrollReveal>
                <div className="flex flex-col gap-6">
                  <Card className="border-2 border-primary bg-primary/5 w-full">
                    <CardContent className="p-6 md:p-8">
                      <h3 className="text-xl md:text-2xl font-bold mb-3">What to Expect</h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                        Come as you are. Walk the property, ask every question, take all the time you need.
                      </p>
                      <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-4 text-sm md:text-base text-muted-foreground">
                        <li className="flex items-start"><span className="mr-2 flex-shrink-0">•</span><span>Up to 90 minutes at your pace</span></li>
                        <li className="flex items-start"><span className="mr-2 flex-shrink-0">•</span><span>Walk ceremony and reception spaces</span></li>
                        <li className="flex items-start"><span className="mr-2 flex-shrink-0">•</span><span>See the cabin and camping areas</span></li>
                        <li className="flex items-start"><span className="mr-2 flex-shrink-0">•</span><span>Browse the Wedding Décor Collection</span></li>
                        <li className="flex items-start"><span className="mr-2 flex-shrink-0">•</span><span>Discuss packages and pricing openly</span></li>
                        <li className="flex items-start"><span className="mr-2 flex-shrink-0">•</span><span>Just an honest, relaxed conversation</span></li>
                      </ul>
                    </CardContent>
                  </Card>
                  <div className="w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-soft shrink-0 img-card">
                    <img
                      src={contactExpectImage}
                      alt="Couple portrait in the forest at Rustic Retreat"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="max-w-6xl mx-auto mb-10 text-center">
              <h2 className="text-2xl font-bold mb-5">Picture your weekend here</h2>
              <div className="grid grid-cols-3 gap-2 md:gap-4 mb-5">
                <img src={contactExpectImage} alt="Newlyweds among the trees" loading="lazy" className="w-full h-36 md:h-56 object-cover rounded-xl" />
                <img src={contactMiddleImage} alt="Rustic Retreat venue outdoors" loading="lazy" className="w-full h-36 md:h-56 object-cover rounded-xl" />
                <img src={contactBottomLeft} alt="Couple at sunset at Rustic Retreat" loading="lazy" className="w-full h-36 md:h-56 object-cover rounded-xl" />
              </div>
              <blockquote className="max-w-3xl mx-auto text-lg italic text-primary">“{TESTIMONIALS[0].quote}”</blockquote>
              <p className="mt-2 text-sm text-muted-foreground">— {TESTIMONIALS[0].name}, {TESTIMONIALS[0].source} review</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <ScrollReveal direction="left">
                <Card className="border-2">
                  <CardContent className="p-8">
                    {isSubmitted ? (
                      <div className="text-center py-12">
                        <CheckCircle2 className="w-16 h-16 text-secondary mx-auto mb-6" />
                        <h2 className="text-2xl font-bold mb-4">We Got Your Message!</h2>
                        <p className="text-muted-foreground mb-6">
                          {isQuestion ? "We'll be in touch within 24 hours." : "We'll be in touch within 24 hours to schedule your property visit."}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          In the meantime, feel free to explore more of the property through our{" "}
                          <a href="/gallery" className="text-secondary hover:underline">photo gallery</a> or{" "}
                          <a href="/venue" className="text-secondary hover:underline">venue details</a>.
                        </p>
                      </div>
                    ) : (
                      <>
                        {/* Response Time Badge */}
                        <div className="flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm mb-6 w-fit">
                          <Clock className="w-4 h-4" />
                          <span className="font-medium">We respond within 24 hours.</span>
                        </div>

                        <h2 className="text-2xl font-bold mb-2">{isQuestion ? "Ask Us a Question" : "Request a Tour"}</h2>
                        <p className="text-sm text-muted-foreground mb-6">{isQuestion ? "Ask anything before deciding whether to visit." : "Come see what your wedding weekend could feel like. Walk the ceremony space, see the cabin and camping areas, and talk through your plans with Shannon and Chris. Tours are by appointment, and we'll reply within 24 hours."}</p>
                        {touringSeasonOpen && !isQuestion && <p className="text-sm font-medium text-primary mb-6">Want to see the property in full bloom? Tour appointments are available before our September 27 touring season ends. You can still inquire about 2027 dates afterward.</p>}
                        <p className="text-sm mb-6">{isQuestion ? <Link to="/contact" className="text-secondary underline">Ready to visit? Request a Tour</Link> : <Link to="/contact?intent=question" className="text-secondary underline">Have a question first? Ask us</Link>}</p>
                        <form onSubmit={handleSubmit} onFocus={() => { if (!formStarted) { setFormStarted(true); trackTourFormStart(isQuestion ? "question" : "tour"); } }} className="space-y-6">
                          <div>
                            <Label htmlFor="partner1FirstName">Your Name</Label>
                            <Input
                              id="partner1FirstName"
                              name="partner1FirstName"
                              required
                              className="mt-2"
                              placeholder="Your name"
                            />
                          </div>

                          <div>
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              required
                              className="mt-2"
                              placeholder="your.email@example.com"
                            />
                          </div>

                          <div>
                            <Label htmlFor="weddingDate">Wedding month or date{isQuestion && " (optional)"}</Label>
                            <Input
                              id="weddingDate"
                              name="weddingDate"
                              type="text"
                              required={!isQuestion}
                              className="mt-2"
                              placeholder="e.g., Summer 2027, August 14th, 2027, etc."
                            />
                          </div>

                          <div>
                            <Label htmlFor="guestCount">Estimated guest count{isQuestion && " (optional)"}</Label>
                            <Input id="guestCount" name="guestCount" required={!isQuestion} className="mt-2" placeholder="e.g., 50–60, or not sure yet" />
                          </div>

                          <div>
                            <Label className="mb-3 block">How should we reach you?</Label>
                            <input type="hidden" name="preferredContact" value={preferredContact} />
                            <RadioGroup value={preferredContact} onValueChange={setPreferredContact} className="flex flex-wrap gap-4">
                              <div className="flex items-center space-x-2"><RadioGroupItem value="text" id="contact-text" /><Label htmlFor="contact-text" className="font-normal cursor-pointer">Text message</Label></div>
                              <div className="flex items-center space-x-2"><RadioGroupItem value="email" id="contact-email" /><Label htmlFor="contact-email" className="font-normal cursor-pointer">Email</Label></div>
                              <div className="flex items-center space-x-2"><RadioGroupItem value="phone" id="contact-phone" /><Label htmlFor="contact-phone" className="font-normal cursor-pointer">Phone call</Label></div>
                            </RadioGroup>
                          </div>

                          <div>
                            <Label htmlFor="phone">Phone Number <span className="text-xs text-muted-foreground">{preferredContact === "email" ? "(optional)" : "(required for text or call)"}</span></Label>
                            <Input id="phone" name="phone" type="tel" required={preferredContact !== "email"} className="mt-2" placeholder="(780) 555-0123" />
                          </div>

                          <div className="relative my-2">
                            <div className="absolute inset-0 flex items-center">
                              <span className="w-full border-t border-border" />
                            </div>
                            <div className="relative flex justify-center">
                              <span className="bg-card px-3 text-sm font-medium text-muted-foreground">
                                A little more detail (optional)
                              </span>
                            </div>
                          </div>

                          {!isQuestion && <div>
                            <Label htmlFor="tourDates">Preferred tour dates (weekday appointments, June–September)</Label>
                            <Textarea
                              id="tourDates"
                              name="tourDates"
                              className="mt-2 min-h-20"
                              placeholder="Please provide 2-3 dates that work for you (we schedule around existing bookings)"
                            />
                          </div>}

                          <div>
                            <Label htmlFor="partner2FirstName">Partner's name (optional)</Label>
                            <Input id="partner2FirstName" name="partner2FirstName" className="mt-2" placeholder="Their name" />
                          </div>

                          <div>
                            <Label htmlFor="message">{isQuestion ? "Your question" : "Tell us about your vision (optional)"}</Label>
                            <Textarea
                              id="message"
                              name="message"
                              required={isQuestion}
                              className="mt-2 min-h-32"
                              placeholder="What would make this weekend unforgettable for you and your guests?"
                            />
                          </div>

                          <CTAButton
                            type="submit"
                            className="w-full text-lg py-6"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? "Sending..." : isQuestion ? "Send Question" : "Request a Tour"}
                          </CTAButton>

                          {/* Carriers and inboxes filter unknown senders hard now, so a
                              reply to a first-time enquiry can be silently binned. Kept to
                              roughly a grade-three reading level: short sentences, plain
                              words, no jargon about filtering or providers. */}
                          <div className="rounded-xl border border-secondary/25 bg-secondary/5 px-5 py-4">
                            <p className="text-sm leading-relaxed text-muted-foreground">
                              <span className="font-medium text-primary">One quick thing:</span>{" "}
                              please add us to your contacts before you go —{" "}
                              <a
                                href="tel:+17802106252"
                                className="whitespace-nowrap text-primary underline underline-offset-2 hover:no-underline"
                              >
                                (780) 210-6252
                              </a>{" "}
                              and{" "}
                              <a
                                href="mailto:rusticretreatalberta@gmail.com"
                                className="break-words text-primary underline underline-offset-2 hover:no-underline"
                              >
                                rusticretreatalberta@gmail.com
                              </a>
                              . New numbers often go to spam. We&rsquo;d hate for you to miss
                              our reply.
                            </p>
                          </div>

                        </form>
                      </>
                    )}
                  </CardContent>
                </Card>
              </ScrollReveal>

              {/* Contact Info */}
              <div className="space-y-6">
                <ScrollReveal direction="right">
                  <div className="relative">
                    <div className="absolute -inset-4 rounded-2xl bg-secondary/10 blur-2xl" />
                    <img
                      src={contactMiddleImage}
                      alt="Rustic Retreat Alberta wedding venue"
                      loading="lazy"
                      decoding="async"
                      className="relative w-full h-[240px] sm:h-[280px] object-cover rounded-2xl shadow-elegant img-card"
                    />
                  </div>
                </ScrollReveal>
                <ScrollReveal direction="right" delay={100}>
                  <Card className="border-2">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Location</p>
                            <p className="text-muted-foreground text-sm">
                              About 1 hour from Edmonton<br />
                              Near Lac La Nonne, Alberta<br />
                              Weekday tours by appointment, June–September
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Phone className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Phone</p>
                            <a href="tel:+17802106252" className="text-primary hover:underline text-sm">
                              (780) 210-6252
                            </a>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Mail className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Email</p>
                            <a href="mailto:rusticretreatalberta@gmail.com" className="text-primary hover:underline text-sm">
                              rusticretreatalberta@gmail.com
                            </a>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Calendar className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Wedding Season</p>
                            <p className="text-muted-foreground text-sm">
                              June through September
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>

              </div>
            </div>
          </div>
        </section>

        {/* Visual Inspiration - Unique Wedding Moments */}
        <section className="section bg-card">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <ScrollReveal delay={0}>
                <HoverImage
                  src={contactBottomLeft}
                  alt="Stunning sunset silhouette at Rustic Retreat"
                  description="Connect with nature-your day, your way"
                  category="Bridal"
                  className="shadow-lg rounded-2xl"
                />
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <HoverImage
                  src={contactBottomRight}
                  alt="Wedding details at Rustic Retreat"
                  description="Your dress deserves a magical backdrop"
                  category="Details"
                  className="shadow-lg rounded-2xl"
                />
              </ScrollReveal>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Contact;
