import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your interest. We'll be in touch within 24 hours to schedule your property visit.",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="section mt-20 pt-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Schedule Your Property Visit
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We don't let couples book until they visit the property. Experience Rustic Retreat in person and see why couples consistently call this "the best decision we made."
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <Card className="border-2">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Request Your Visit</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" required className="mt-2" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" required className="mt-2" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" required className="mt-2" />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" required className="mt-2" />
                    </div>

                    <div>
                      <Label htmlFor="weddingDate">Preferred Wedding Date (if known)</Label>
                      <Input id="weddingDate" type="date" className="mt-2" />
                    </div>

                    <div>
                      <Label htmlFor="package">Interested In</Label>
                      <select 
                        id="package" 
                        className="w-full mt-2 border border-input rounded-md p-2 bg-background"
                      >
                        <option value="">Select a package</option>
                        <option value="3-day">3-Day Weekend Wedding</option>
                        <option value="5-day">5-Day Celebration (Most Popular)</option>
                        <option value="not-sure">Not Sure Yet</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="guestCount">Expected Guest Count</Label>
                      <Input 
                        id="guestCount" 
                        type="number" 
                        placeholder="e.g., 60" 
                        className="mt-2" 
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Tell Us About Your Vision *</Label>
                      <Textarea 
                        id="message" 
                        required 
                        className="mt-2 min-h-32" 
                        placeholder="What drew you to Rustic Retreat? What kind of celebration are you envisioning?"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-secondary hover:bg-secondary/90 text-lg py-6"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Request Property Visit"}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      We'll respond within 24 hours to schedule your visit.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & Details */}
            <div className="space-y-6">
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
                          Near Lac La Nonne & Pembina River<br />
                          Alberta, Canada
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <a href="tel:+15879990000" className="text-primary hover:underline text-sm">
                          (587) 999-0000
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Email</p>
                        <a href="mailto:info@rusticretreatalberta.ca" className="text-primary hover:underline text-sm">
                          info@rusticretreatalberta.ca
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

              <Card className="border-2 border-primary bg-primary/5">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">What to Expect During Your Visit</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Full property tour (60-90 minutes)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Walk the ceremony space and reception areas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>See the cabin, camping sites, and amenities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Browse the Wedding Décor House collection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Discuss package options and pricing in detail</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Ask any questions on your mind</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>No pressure—just honest conversation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Why Visit Before Booking?</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Photos can only show so much. We want you to feel the energy of the land. Stand where you'll say your vows. Picture your grandmother sitting by the campfire. Hear the silence that makes people exhale.
                  </p>
                  <p className="font-medium text-sm">
                    When you leave your property visit, we want you thinking either "This is it" or "This isn't quite right." Both answers are perfect. Certainty is what matters.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="section section-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Before You Visit</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Bring Questions</h3>
                <p className="text-sm text-muted-foreground">
                  Write down everything you're wondering about. We'll answer honestly, even if the answer is "that won't work here."
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Bring Your Person</h3>
                <p className="text-sm text-muted-foreground">
                  Both partners should visit if possible. You both need to feel the rightness of this place.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Bring Open Minds</h3>
                <p className="text-sm text-muted-foreground">
                  Multi-day celebrations are different than traditional weddings. Let yourself imagine the possibilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
