import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";
import receptionEvening from "@/assets/reception-gazebo-evening.avif";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    <div className="min-h-screen">
      <Navigation />
      
      <PageHero
        backgroundImage={receptionEvening}
        title="Walk the Land With Us"
        subtitle="Property tours available weekdays and weekends by appointment. Come feel the space and see if this is where your story wants to unfold."
      />

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
                      <Label htmlFor="weddingDate">Preferred Wedding Date</Label>
                      <Input id="weddingDate" type="date" className="mt-2" />
                    </div>

                    <div>
                      <Label htmlFor="message">Tell Us About Your Vision *</Label>
                      <Textarea 
                        id="message" 
                        required 
                        className="mt-2 min-h-32" 
                        placeholder="What kind of celebration are you envisioning?"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-[hsl(15,50%,75%)] via-[hsl(15,45%,65%)] to-[hsl(15,55%,80%)] hover:from-[hsl(15,55%,80%)] hover:via-[hsl(15,50%,70%)] hover:to-[hsl(15,60%,85%)] text-primary-foreground text-lg py-6 rounded-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Request Property Visit"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
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
                          Near Lac La Nonne, Alberta
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
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
