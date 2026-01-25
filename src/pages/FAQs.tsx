import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { CTAButton } from "@/components/ui/cta-button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import HoverImage from "@/components/HoverImage";
import SEO from "@/components/SEO";
import ceremonyVowsGazebo from "@/assets/gallery/ceremony-vows-gazebo.jpg";
import firstDanceSparklers from "@/assets/gallery/first-dance-sparklers.jpg";
import meadowSunsetKiss from "@/assets/gallery/meadow-sunset-kiss.jpg";

const FAQs = () => {
  const faqs = [
    {
      question: "When can we book our wedding at Rustic Retreat?",
      answer: "We don't let couples book until they visit the property. This isn't a sales tactic—it's our commitment to making sure you're certain, not just convinced."
    },
    {
      question: "Which package would be best for me?",
      answer: "The 3-day package (Friday-Sunday) gives you 60 hours together—perfect for tighter schedules. The 5-day package (Thursday-Monday) provides 108 hours and is our most popular option. With 5 days, guests bond before your wedding, creating a community atmosphere. We're happy to help you decide during your property visit."
    },
    {
      question: "How many guests can you accommodate?",
      answer: "Up to 80 guests for ceremony and reception. We have room for 60 guests to camp on the property—you choose where to set up. Half a dozen Airbnbs sit 5-15 minutes away around the lake, or RVezy.com can deliver trailers directly to your camping area."
    },
    {
      question: "What if some of our guests don't want to camp?",
      answer: "Perfect! Half a dozen Airbnb properties sit within 5-15 minutes around the lake. RVezy.com delivers trailers right to your camping area—all the coziness, none of the setup."
    },
    {
      question: "What's included in the wedding package price?",
      answer: "Exclusive property access, the cabin, flexible camping areas for your group, modern picnic tables and rustic benches for 80 guests, access to our Wedding Décor Collection (consumables like batteries and candles available at cost), groomed trails, outdoor games, campfire areas, and clear-top gazebo."
    },
    {
      question: "Can we have a rehearsal dinner or other events?",
      answer: "Your time is yours. Whether that means a rehearsal dinner, morning yoga, or late-night bonfire—you set the schedule. You're renting the land, so enjoy it however fits your vision."
    },
    {
      question: "Can we bring our own vendors?",
      answer: "Flexibility to choose. Use our preferred vendors or bring your own team. This is your celebration, your vision."
    },
    {
      question: "When is wedding season?",
      answer: "June through September—when Alberta weather is at its best."
    },
    {
      question: "What are the quiet hours?",
      answer: "Your wedding night? Celebrate until midnight. All other nights, quiet hours run 11pm to 8am for generators and amplified music. Your neighbors (the owls) will thank you."
    },
    {
      question: "What happens if it rains?",
      answer: "Alberta weather has never stopped a party at Rustic Retreat. The clear-top gazebo seats 80 for your reception, and rain often makes for the most dramatic photos. Some of our favorite wedding shots happened during surprise showers."
    },
    {
      question: "Is there electricity and running water?",
      answer: "Yes! The property has solar power for your essentials and potable water on-site. Our shower facilities provide modern comfort while keeping that rustic, off-grid feel."
    },
    {
      question: "How far is Rustic Retreat from Edmonton?",
      answer: "99 kilometers (approximately 1-hour drive) northwest of Edmonton, near Lac La Nonne."
    },
    {
      question: "Do you host multiple weddings per weekend?",
      answer: "Never. When you book, the property is exclusively yours. No other couples. No overlapping events."
    },
    {
      question: "Can we bring our dog (or other pets)?",
      answer: "Yes! Well-behaved pets are welcome. Many couples have included their dogs in the ceremony. Just let us know in advance so we can share a few guidelines about the property."
    },
    {
      question: "Is there a minimum guest count?",
      answer: "No minimum. Whether you're planning an intimate elopement with 10 guests or a celebration with 80, the property is yours to enjoy your way."
    },
    {
      question: "Is there WiFi on the property?",
      answer: "We have limited WiFi at the cabin for essential needs, but honestly? Most couples tell us the digital detox was one of the best parts of their weekend. Your guests will actually talk to each other."
    },
  ];

  // Generate FAQ schema markup
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <PageTransition>
      <SEO
        title="Frequently Asked Questions"
        description="Get answers about Rustic Retreat wedding packages, guest capacity, camping accommodations, vendor policies, and more. Everything you need to know before booking your property tour."
        path="/faqs"
        image={ceremonyVowsGazebo}
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <div className="min-h-screen">
        <Navigation />

        <PageHero
          backgroundImage={ceremonyVowsGazebo}
          backgroundImageAlt="Couple exchanging vows under the rustic gazebo at Rustic Retreat"
          title="Questions? We've Got Answers"
          subtitle="Everything you need to know before walking the land with us."
        />

        {/* FAQs Accordion */}
        <section className="section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <ScrollReveal key={index} delay={index * 50}>
                    <AccordionItem 
                      value={`item-${index}`}
                      className="bg-card border-2 px-6 hover:border-secondary transition-colors"
                    >
                      <AccordionTrigger className="text-left font-semibold hover:text-primary">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pt-2">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </ScrollReveal>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Visual Break - Showcase the Experience */}
        <section className="section bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <ScrollReveal delay={0}>
                <HoverImage
                  src={meadowSunsetKiss}
                  alt="Romantic sunset kiss in wildflower meadow at Rustic Retreat"
                  description="Golden hour magic in the meadow"
                  category="Romance"
                  className="shadow-lg"
                />
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <HoverImage
                  src={firstDanceSparklers}
                  alt="First dance with sparklers at Alberta wedding venue"
                  description="Your celebration under the stars"
                  category="Reception"
                  className="shadow-lg"
                />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Still Have Questions?</h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto text-primary-foreground/90">
                The best way to get answers is during a property visit. Walk the land with us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <CTAButton className="px-8">
                    Discover Your Venue
                  </CTAButton>
                </Link>
                <Link to="/packages">
                  <Button size="lg" variant="outline" className="bg-white/90 border-2 border-rosegold text-primary hover:bg-white rounded-full px-8 font-medium">
                    View Packages
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-primary-foreground/70 mt-4">
                Most couples hear back within 24 hours
              </p>
            </ScrollReveal>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default FAQs;
