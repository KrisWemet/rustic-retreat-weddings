import { useState } from "react";
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
import receptionEvening from "@/assets/gallery/Images/IMG_5103.jpg";
import brideWithHorse from "@/assets/gallery/bride-with-horse.jpg";
import dressForestPavilion from "@/assets/gallery/dress-forest-pavilion.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [preferredContact, setPreferredContact] = useState("email");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

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
        toast({
          title: "Message sent!",
          description: "We'll be in touch within 24 hours to schedule your property visit.",
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
        title="Book Your Property Tour"
        description="Schedule a property tour at Rustic Retreat. Walk the 65-acre grounds, see ceremony spaces, browse our décor collection, and discuss your wedding vision. Tours by appointment only."
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
        />

        {/* Contact Section */}
        <section className="section">
          <div className="container mx-auto px-4">
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
                          We'll be in touch within 24 hours to schedule your property visit.
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
                          <span className="font-medium">We respond within 24 hours</span>
                        </div>

                        <h2 className="text-2xl font-bold mb-2">Request Your Visit</h2>
                        <p className="text-sm text-muted-foreground mb-6">Tell us a bit about yourselves. No pressure—this is just the start of a conversation.</p>
                        <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            required
                            className="mt-2"
                            placeholder="Your first name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            required
                            className="mt-2"
                            placeholder="Your last name"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email">Email Address *</Label>
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
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          className="mt-2"
                          placeholder="(780) 555-0123"
                        />
                      </div>

                      {/* Preferred Contact Method */}
                      <div>
                        <Label className="mb-3 block">How should we reach you?</Label>
                        <input type="hidden" name="preferredContact" value={preferredContact} />
                        <RadioGroup
                          value={preferredContact}
                          onValueChange={setPreferredContact}
                          className="flex gap-6"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="email" id="contact-email" />
                            <Label htmlFor="contact-email" className="font-normal cursor-pointer">Email</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="phone" id="contact-phone" />
                            <Label htmlFor="contact-phone" className="font-normal cursor-pointer">Phone call</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="text" id="contact-text" />
                            <Label htmlFor="contact-text" className="font-normal cursor-pointer">Text message</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div>
                        <Label htmlFor="tourDates">When would you like to visit? *</Label>
                        <Textarea
                          id="tourDates"
                          name="tourDates"
                          required
                          className="mt-2 min-h-20"
                          placeholder="Please provide 2-3 dates that work for you (we schedule around existing bookings)"
                        />
                      </div>

                      <div>
                        <Label htmlFor="weddingDate">When are you thinking of having your celebration? (approximate is fine)</Label>
                        <Input
                          id="weddingDate"
                          name="weddingDate"
                          type="text"
                          className="mt-2"
                          placeholder="e.g., Summer 2026, August 2026, or 'still deciding'"
                        />
                      </div>

                      <div>
                        <Label htmlFor="guestCount">How many guests are you expecting?</Label>
                        <Input
                          id="guestCount"
                          name="guestCount"
                          type="text"
                          className="mt-2"
                          placeholder="e.g., 50-60 guests, or 'not sure yet'"
                        />
                      </div>

                      <div>
                        <Label htmlFor="message">Describe your dream wedding weekend in a few sentences</Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          className="mt-2 min-h-32"
                          placeholder="What draws you to an outdoor, multi-day celebration? What would make this weekend unforgettable for you and your guests?"
                        />
                      </div>

                      <CTAButton
                        type="submit"
                        className="w-full text-lg py-6"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Request Property Visit"}
                      </CTAButton>

                      <p className="text-xs text-center text-muted-foreground">
                        No spam, no pressure. Just a real conversation about your vision.
                      </p>
                      <p className="text-xs text-center text-muted-foreground italic mt-3">
                        "From our first email, we knew they got it." — Sarah & Mike
                      </p>
                        </form>
                      </>
                    )}
                  </CardContent>
                </Card>
              </ScrollReveal>

              {/* Contact Info */}
              <div className="space-y-6">
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
                              99 km NW of Edmonton<br />
                              Near Lac La Nonne, Alberta
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

                <ScrollReveal direction="right" delay={200}>
                  <Card className="border-2 border-primary bg-primary/5">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-bold mb-4">What to Expect</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Full property tour (60-90 minutes)</li>
                        <li>• Walk ceremony and reception areas</li>
                        <li>• See the cabin and camping areas</li>
                        <li>• Browse the Wedding Décor Collection</li>
                        <li>• Discuss packages and pricing</li>
                        <li>• No pressure—just honest conversation</li>
                      </ul>
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
                  src={brideWithHorse}
                  alt="Bride with horse at Rustic Retreat Alberta wedding venue"
                  description="Connect with nature—your day, your way"
                  category="Bridal"
                  className="shadow-lg"
                />
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <HoverImage
                  src={dressForestPavilion}
                  alt="Wedding dress displayed at forest pavilion"
                  description="Your dress deserves a magical backdrop"
                  category="Details"
                  className="shadow-lg"
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
