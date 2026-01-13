import { useState } from "react";
import { Button } from "@/components/ui/button";
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
import SEO from "@/components/SEO";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Calendar, Clock, CheckCircle2 } from "lucide-react";
import receptionEvening from "@/assets/reception-gazebo-evening.avif";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [preferredContact, setPreferredContact] = useState("email");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll be in touch within 24 hours to schedule your property visit.",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <PageTransition>
      <SEO 
        title="Book Your Property Tour"
        description="Schedule a property tour at Rustic Retreat. Walk the 65-acre grounds, see ceremony spaces, browse our décor collection, and discuss your wedding vision. Tours by appointment only."
        path="/contact"
      />
      <div className="min-h-screen">
        <Navigation />
        
        <PageHero
          backgroundImage={receptionEvening}
          title="Walk the Land With Us"
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
                    {/* Response Time Badge */}
                    <div className="flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm mb-6 w-fit">
                      <Clock className="w-4 h-4" />
                      <span className="font-medium">We respond within 24 hours</span>
                    </div>

                    <h2 className="text-2xl font-bold mb-6">Request Your Visit</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input 
                            id="firstName" 
                            required 
                            className="mt-2" 
                            placeholder="Your first name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input 
                            id="lastName" 
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
                          type="tel" 
                          required 
                          className="mt-2" 
                          placeholder="(780) 555-0123"
                        />
                      </div>

                      {/* Preferred Contact Method */}
                      <div>
                        <Label className="mb-3 block">How should we reach you?</Label>
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
                        <Label htmlFor="weddingDate">When are you thinking of having your celebration? (approximate is fine)</Label>
                        <Input 
                          id="weddingDate" 
                          type="text" 
                          className="mt-2" 
                          placeholder="e.g., Summer 2026, August 2026, or 'still deciding'"
                        />
                      </div>

                      <div>
                        <Label htmlFor="guestCount">How many guests are you expecting?</Label>
                        <Input 
                          id="guestCount" 
                          type="text" 
                          className="mt-2" 
                          placeholder="e.g., 50-60 guests, or 'not sure yet'"
                        />
                      </div>

                      <div>
                        <Label htmlFor="message">Tell us about your vision *</Label>
                        <Textarea 
                          id="message" 
                          required 
                          className="mt-2 min-h-32" 
                          placeholder="What draws you to an outdoor, multi-day celebration? What's your dream wedding weekend look like?"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-[hsl(15,50%,75%)] via-[hsl(15,45%,65%)] to-[hsl(15,55%,80%)] hover:from-[hsl(15,55%,80%)] hover:via-[hsl(15,50%,70%)] hover:to-[hsl(15,60%,85%)] text-primary-foreground text-lg py-6 rounded-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Request Property Visit"}
                      </Button>

                      <p className="text-xs text-center text-muted-foreground">
                        No spam, no pressure. Just a real conversation about your wedding vision.
                      </p>
                    </form>
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

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Contact;
