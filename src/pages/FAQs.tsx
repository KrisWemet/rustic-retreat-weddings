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
import SEO from "@/components/SEO";
import ceremonyVowsGazebo from "@/assets/gallery/Images/ceremony-vows-gazebo-2.jpeg";

const FAQs = () => {
  const faqs = [
    {
      category: "Booking & Scheduling",
      question: "When can we book our wedding at Rustic Retreat?",
      answer: "Every booking starts with a visit to the property. We want you to walk the land, feel the space, and know for certain that this is where you want to get married. After your tour, if you're ready to make it official, we can get everything started that same day. Or if you'd like a few days to let it sink in, that's completely fine too. We'll follow your lead. No pressure, no rush."
    },
    {
      category: "Booking & Scheduling",
      question: "Which package would be best for me?",
      answer: "The 3-day package (Friday–Sunday) is a beautiful choice for couples who want a heartfelt, focused celebration. The wedding weekend comes together warmly and intentionally, with everyone present for the moments that matter most.\n\nThe 5-day package (Thursday–Monday or Friday–Tuesday) is our most popular option, and it's easy to see why. It's where the full Rustic Retreat experience truly unfolds. The extra days give everyone room to arrive, settle in, and just be together. Evenings gather naturally around the campfire, laughter carries through the trees, and by the time your wedding day arrives, it already feels like a cherished reunion. There's space for an activity day, unhurried meals, and the kind of slow, sweet visiting that guests will carry home in their hearts.\n\nUltimately, the choice comes down to how immersive you want your celebration to be. It's also worth thinking about your decorating plans. If you're bringing in vendors to handle setup and takedown, a 3-day package can work beautifully. But if you're envisioning a more personal touch, with friends and family pitching in to help bring your vision to life, the extra days give everyone the time and space to do that joyfully, without it feeling rushed.\n\nWe'd love to help you find the perfect fit during your property visit."
    },
    {
      category: "Guest Accommodations",
      question: "How many guests can you accommodate?",
      answer: "We can welcome up to 80 guests for your ceremony and reception.\n\nFor those spending the night or the full weekend with you, we have a main camping area perfect for both RVs and tents. Just know that this is true boondocking, with no electrical hookups or water connections.\n\nThink starlit skies, crackling fires, and waking up surrounded by nature.\n\nIt's rustic at its finest, and guests tend to absolutely love it."
    },
    {
      category: "Guest Accommodations",
      question: "What if some of our guests don't want to camp?",
      answer: "No problem at all. There's something for everyone!\n\nA handful of beautiful Airbnb properties are located just 5–15 minutes away along the shores of Lac la Nonne, with several stunning lakefront options that make for a little retreat of their own.\n\nFor guests who prefer to stay closer to the action, RVezy.com is a wonderful option. Some trailers on the platform offer delivery and full setup right on the property, with pickup again at the end of the weekend. Just be sure to select the delivery option when browsing to find the listings that offer this service. All your guests need to do is bring their supplies, enjoy every moment, tidy up, and head home. No owning, no towing, no fuss. It's the perfect way to experience the magic of camping on site without any of the hassle.\n\nFor those who prefer a more traditional stay, hotels are available approximately 15 minutes away in both Barrhead and Onoway."
    },
    {
      category: "Packages & Pricing",
      question: "What's included in the wedding package price?",
      answer: "Quite a lot, actually.\n\nYou get exclusive access to the full venue grounds: the ceremony spaces, the clear-top gazebo, the groomed trails, the campfire areas, and everything in between. We live on the property and are nearby if you need anything, but your celebration spaces are entirely yours. Picnic tables and rustic ceremony benches for up to 80 guests are already set up and ready.\n\nThe newlywed cabin is yours for the weekend, stocked with a Keurig, pods, and the basics you need for a relaxed morning after.\n\nOur Bluetooth two-speaker sound system with wireless microphones is included, along with firewood and a BBQ with propane for all those meals and late-night fires.\n\nYou also get full access to our Wedding Décor Collection: arch options, table styling pieces, vintage accents, and more, all at no extra cost. It's a living collection that keeps growing.\n\nFor the little ones (and the young at heart), there's a trampoline, a playhouse, a full lineup of lawn games, and a selection of board games for rainy days or whenever the mood strikes.\n\nOh, and farm-fresh eggs when the chickens are laying. It's one of those little things guests always remember.\n\nConsumables like batteries and candles are available for an additional fee."
    },
    {
      category: "Planning & Flexibility",
      question: "Can we have a rehearsal dinner or other events?",
      answer: "Absolutely, and this is where a Rustic Retreat wedding really shines.\n\nYour time here is truly yours, and we love seeing every couple make it their own. Whether you envision a relaxed rehearsal dinner under the stars, a lively lawn games tournament featuring some fierce Connect Four competition, a group hike through the trees, or a quiet afternoon where everyone simply naps, reads, and recharges. You set the schedule.\n\nMornings might start with yoga on the grass, afternoons could unfold into lawn games, good conversation, and easy laughter, and evenings have a way of naturally drifting toward the campfire with a drink in hand and stories being shared.\n\nNo itinerary but your own. You're renting the space, and we encourage you to fill it with whatever brings you and your favourite people joy."
    },
    {
      category: "Planning & Flexibility",
      question: "Can we bring our own vendors?",
      answer: "Absolutely! When it comes to vendors, you have complete flexibility to celebrate exactly the way you envision.\n\nWhether you have a beloved photographer you've already fallen in love with, a caterer who makes your favourite foods, or a florist whose style speaks to your heart, bring them along. Almost any vendor you choose is welcome here.\n\nPrefer to keep things close and personal? Many of our couples choose to DIY their weekend entirely, leaning on the love and helping hands of family and friends to bring their vision to life. There's something really special about that.\n\nIf you're looking for guidance, we're also happy to recommend vendors we've had the pleasure of working with and trust to help make your day beautiful. However you choose to approach it, we're here to support you."
    },
    {
      category: "Booking & Scheduling",
      question: "When is wedding season?",
      answer: "June through September, when Alberta weather is at its best."
    },
    {
      category: "Property Rules & Policies",
      question: "What are the quiet hours?",
      answer: "Your wedding night? Celebrate until midnight. All other nights, quiet hours run 11pm to 8am for generators and amplified music. Your neighbors (the owls) will thank you."
    },
    {
      category: "Weather & Logistics",
      question: "What happens if it rains?",
      answer: "Alberta weather has never stopped a party at Rustic Retreat. The clear-top gazebo seats 80 for your reception, and rain often makes for the most dramatic photos. Some of our favorite wedding shots happened during surprise showers."
    },
    {
      category: "Property Amenities",
      question: "Is there electricity and running water?",
      answer: "Yes! The property has solar power for your essentials and potable water on-site. Our shower facilities provide modern comfort while keeping that rustic, off-grid feel."
    },
    {
      category: "Location & Access",
      question: "How far is Rustic Retreat from Edmonton?",
      answer: "99 kilometres northwest of Edmonton, about an hour's drive. Close enough to make the trip easy, far enough that it actually feels like a true escape."
    },
    {
      category: "Exclusivity & Privacy",
      question: "Do you host multiple weddings per weekend?",
      answer: "Never. When you book, the property is exclusively yours. No other couples. No overlapping events."
    },
    {
      category: "Property Rules & Policies",
      question: "Can we bring our dog (or other pets)?",
      answer: "Yes! Well-behaved pets are welcome. Many couples have included their dogs in the ceremony. Just let us know in advance so we can share a few guidelines about the property."
    },
    {
      category: "Guest Accommodations",
      question: "Is there a minimum guest count?",
      answer: "No minimum. Whether you're planning an intimate elopement with 10 guests or a celebration with 80, the property is yours to enjoy your way."
    },
    {
      category: "Property Amenities",
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
            <div className="max-w-3xl mx-auto">
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
                        <div className="space-y-3">
                          {faq.answer.split('\n\n').map((paragraph, i) => (
                            <p key={i}>{paragraph}</p>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </ScrollReveal>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Still Have Questions?</h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto text-primary-foreground/90">
                The best way to get answers is during a property visit. Walk the land with us. Still have questions? Feel free to <a href="sms:+17802106252" className="underline hover:text-secondary transition-colors">text us at (780) 210-6252</a>.
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
