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
import { faqs } from "@/data/faqs";

const FAQs = () => {

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
      about: {
        "@type": "Thing",
        name: faq.category,
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
            <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
              <div>
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
              <ScrollReveal delay={150}>
                <div className="relative">
                  <div className="absolute -inset-4 rounded-[32px] bg-secondary/10 blur-2xl" />
                  <div className="relative grid gap-4">
                    <img
                      src={meadowSunsetKiss}
                      alt="Romantic sunset kiss in wildflower meadow at Rustic Retreat"
                      loading="lazy"
                      decoding="async"
                      className="h-56 sm:h-64 object-cover rounded-3xl shadow-elegant"
                    />
                    <img
                      src={firstDanceSparklers}
                      alt="First dance with sparklers at Alberta wedding venue"
                      loading="lazy"
                      decoding="async"
                      className="h-56 sm:h-64 object-cover rounded-3xl shadow-soft"
                    />
                  </div>
                </div>
              </ScrollReveal>
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
