import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import propertyLandscape from "@/assets/property-landscape-view.avif";

const FAQs = () => {
  const faqs = [
    {
      question: "When can we book our wedding at Rustic Retreat?",
      answer: "We don't let couples book until they visit the property. This isn't a sales tactic—it's our commitment to making sure you're certain, not just convinced."
    },
    {
      question: "What's the difference between the 3-day and 5-day packages?",
      answer: "The 3-day package (Friday-Sunday) gives you 60 hours together. The 5-day package (Thursday-Monday) provides 108 hours and is our most popular option. With 5 days, guests bond before your wedding, creating a community atmosphere."
    },
    {
      question: "How many guests can you accommodate?",
      answer: "Up to 80 guests for ceremony and reception, with overnight camping for 60 guests across 15 camper/tent sites plus the cabin. Half a dozen Airbnbs sit 5 minutes away around the lake, or RVezy.com can deliver trailers to your campsites."
    },
    {
      question: "What if some of our guests don't want to camp?",
      answer: "Perfect! Half a dozen Airbnb properties sit within 5 minutes around the lake. RVezy.com delivers trailers right to your campsite—all the coziness, none of the setup."
    },
    {
      question: "What's included in the wedding package price?",
      answer: "Exclusive property access, the cabin, 15 camping sites, tables and benches for 80 guests, access to our Wedding Décor House collection (free!), groomed trails, outdoor games, campfire areas, and clear-top gazebo."
    },
    {
      question: "Can we bring our own vendors?",
      answer: "Complete freedom. Use our preferred vendors or bring your own team. This is your celebration, your vision, your rules."
    },
    {
      question: "What months are available for weddings?",
      answer: "June through September. Alberta weather is most reliable during these months."
    },
    {
      question: "Why do you wait 3 days between weddings?",
      answer: "Quality requires space. We give ourselves minimum 3 days between bookings so your celebration gets fresh grass, renewed energy, and our complete attention."
    },
    {
      question: "What happens if it rains?",
      answer: "The clear-top gazebo provides covered space for reception. We help couples create weather contingency plans during planning."
    },
    {
      question: "Is there electricity and running water?",
      answer: "The cabin has off-grid solar power and potable water. Our shower facilities provide modern comfort for campers."
    },
    {
      question: "How far is Rustic Retreat from Edmonton?",
      answer: "99 kilometers (approximately 1-hour drive) northwest of Edmonton, near Lac La Nonne."
    },
    {
      question: "Do you host multiple weddings per weekend?",
      answer: "Never. When you book, the property is exclusively yours. No other couples. No overlapping events."
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <PageHero
        backgroundImage={propertyLandscape}
        title="Questions? We've Got Answers"
        subtitle="Everything you need to know before walking the land with us."
      />

      {/* FAQs Accordion */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border-2 rounded-lg px-6 hover:border-secondary transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            The best way to get answers is during a property visit. Walk the land with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-[hsl(15,50%,75%)] via-[hsl(15,45%,65%)] to-[hsl(15,55%,80%)] hover:from-[hsl(15,55%,80%)] hover:via-[hsl(15,50%,70%)] hover:to-[hsl(15,60%,85%)] text-primary-foreground rounded-full px-8 shadow-lg">
                Walk the Land With Us
              </Button>
            </Link>
            <Link to="/weddings">
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rounded-full px-8">
                View Packages
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQs;
