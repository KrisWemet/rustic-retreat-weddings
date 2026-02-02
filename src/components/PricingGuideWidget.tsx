import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const PricingGuideWidget = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("leadType", "pricing-guide");

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
          title: "Request received",
          description: "We’ll email the pricing guide shortly.",
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
    <div className="fixed bottom-6 left-6 z-40 hidden md:block">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="rounded-full px-5 py-3 shadow-elegant" variant="secondary">
            Get the Pricing Guide
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-md">
          {isSubmitted ? (
            <div className="space-y-3 text-center">
              <h2 className="text-2xl font-semibold">You’re all set</h2>
              <p className="text-muted-foreground">
                We’ll email the 2026 pricing guide shortly. If you’re ready to tour, we can set that up too.
              </p>
              <a href="/contact" className="text-secondary underline">
                Schedule a property visit
              </a>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <h2 className="text-2xl font-semibold">Get the 2026 Pricing Guide</h2>
                <p className="text-sm text-muted-foreground">
                  Tell us a little about your plans and we’ll send pricing + availability tips.
                </p>
              </div>
              <div>
                <Label htmlFor="pricing-email">Email *</Label>
                <Input id="pricing-email" name="email" type="email" required className="mt-2" />
              </div>
              <div>
                <Label htmlFor="pricing-date">Ideal wedding date (approx.)</Label>
                <Input id="pricing-date" name="weddingDate" type="text" className="mt-2" placeholder="e.g., Summer 2026" />
              </div>
              <div>
                <Label htmlFor="pricing-guests">Estimated guest count</Label>
                <Input id="pricing-guests" name="guestCount" type="text" className="mt-2" placeholder="e.g., 60" />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send me the guide"}
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                We’ll only use this to send your guide and follow up if you ask.
              </p>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PricingGuideWidget;
