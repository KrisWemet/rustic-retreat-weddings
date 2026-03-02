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
      answer: "No problem at all. There's something for everyone!\n\nA handful of beautiful Airbnb properties are located just 5–15 minutes away along the shores of Lac la Nonne, with several stunning lakefront options that make for a little retreat of their own. Alberta Beach also has a great selection of Airbnbs about 30 minutes away, with even more options to choose from.\n\nFor guests who want to stay right on the property but prefer not to tent camp, RVs are absolutely welcome. We can accommodate up to 15 RVs on site, so if your group has them, bring them along. There's something really wonderful about having your people tucked in close for the whole weekend.\n\nDon't own an RV? No problem. RVezy.com is a fantastic option for renting one. Some listings even offer delivery and full setup right on the property, with pickup again at the end of the weekend. Just be sure to select the delivery option when browsing to find the listings that offer this service. All your guests need to do is show up, enjoy every moment, and head home. No owning, no towing, no fuss.\n\nFor those who prefer a more traditional stay, hotels are available approximately 15 minutes away in both Barrhead and Onoway."
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
      answer: "Our wedding season runs from June through September, when Alberta weather is theoretically at its best, though as any Albertan knows, Mother Nature doesn't always get the memo!\n\nWe open in June once the land has had a chance to dry out from spring, and the grass and leaves have returned to give the property that lush, full feeling that makes it so magical. Earlier in the season the land can be soft and the trees still waking up, so we wait until everything is at its best before welcoming our first celebrations.\n\nOn the other end, we wrap up in September to stay comfortably ahead of both the falling leaves and the cooler temperatures that creep in as the season turns. Once the trees begin to show their fall colours and shed, the ambiance of the property shifts significantly. And while autumn in Alberta is undeniably beautiful, we want your celebration filled with warm evenings, comfortable nights around the campfire, and that gorgeous late-summer light rather than chilly mornings and a colourful but bare canopy overhead.\n\nIn a province where you can experience all four seasons in a single weekend, we've learned to work with the land rather than against it. This sweet spot of June through September is where the magic happens."
    },
    {
      category: "Property Rules & Policies",
      question: "When does the party have to wind down?",
      answer: "We don't have quiet hours here. We have noise reduction hours, which feels much more fitting for a celebration!\n\nOn most evenings, we ask that amplified music be brought down to a neighbour and guest friendly level by 11pm. On your wedding night, we extend that to midnight. Because some moments deserve a little extra time.\n\nThis isn't about cutting the fun short. It's about being thoughtful of your early-to-bed guests tucked into their tents and campers nearby (tent walls are thin, and we've all been there!), as well as our neighbours who share this little corner of the world with us. The music plays on, the dancing under the stars doesn't have to end, the volume just comes down a little, the fire keeps burning, and the night is still very much yours.\n\nAnd a little heads up for your camping guests: generators are absolutely welcome on the property, but do have a mandatory shutoff at 10pm nightly. Yes, that includes onboard generators in RVs and motorhomes. Once they go quiet, you'd be amazed how beautiful the night sounds without them."
    },
    {
      category: "Weather & Logistics",
      question: "What happens if it rains?",
      answer: "Honestly? Some of our most beautiful weddings have had a little rain in them.\n\nThe clear-top gazebo comfortably seats your entire guest list of 80 for the reception, and the ceremony can move under cover if needed. The sky might be grey, but the celebration doesn't skip a beat.\n\nAnd here's the thing about rain and photos: it does something magical. The light softens, the colours deepen, and couples who have a spontaneous moment in the rain almost always end up with their favourite shots of the day.\n\nAlberta weather is famously unpredictable, and we've made peace with that. We plan for every possibility, and we've yet to have a wedding that wasn't wonderful regardless of the forecast."
    },
    {
      category: "Property Amenities",
      question: "Is there electricity and running water?",
      answer: "Yes to both, with a little context on each.\n\nThe entire property runs on solar power. No power lines come in from the road — it's completely off-grid, just as it's been since day one. You'll have reliable electricity for your essentials throughout your stay: the cabin, the sound system, lighting, and everything you need to run a great celebration.\n\nPotable water is available on-site, so drinking water is never a concern.\n\nFor bathroom facilities, the property currently has well-maintained outhouses. They're kept clean and are very much part of the genuine off-grid experience that makes this place feel different. A proper wash house with flush facilities is currently under construction and will be ready for the 2027 season."
    },
    {
      category: "Location & Access",
      question: "How far is Rustic Retreat from Edmonton?",
      answer: "About an hour northwest of Edmonton, 99 kilometres to be exact, near the shores of Lac la Nonne.\n\nClose enough that your guests won't dread the drive. Far enough that the moment you turn off the highway and head toward the property, the city genuinely feels like it belongs to another world.\n\nNo traffic noise. No skyline. Just trees, sky, and the smell of nature when you step out of the car.\n\nFor out-of-town guests, it's an easy trip from Edmonton's airport as well. Straight northwest, a scenic drive, and a destination worth every kilometre."
    },
    {
      category: "Exclusivity & Privacy",
      question: "Do you host multiple weddings per weekend?",
      answer: "Never. Not once, not ever.\n\nWhen you book Rustic Retreat, the entire venue is yours for the full duration of your package. No other couple is setting up on the other side of a dividing wall. No strangers wandering through your ceremony. No overlapping timelines or competing sound systems.\n\nJust you, your people, and the venue entirely yours to fill with whatever makes your celebration feel like you.\n\nWe only host one wedding per weekend by design, and that's a promise we take seriously."
    },
    {
      category: "Property Rules & Policies",
      question: "Can we bring our dog (or other pets)?",
      answer: "Well-behaved pets are absolutely welcome here.\n\nDogs especially seem to love this property. We've had pups walk down the aisle, pose for portraits in the trees, and curl up by the campfire like they've lived here their whole lives. Some of our favourite wedding photos have featured a very happy, very photogenic dog.\n\nJust give us a heads-up before your weekend so we can share a few simple guidelines about the property. We want to make sure your furry family members have just as wonderful a time as everyone else.\n\nIf they're part of your family, they're part of your celebration."
    },
    {
      category: "Guest Accommodations",
      question: "Is there a minimum guest count?",
      answer: "Not at all. We genuinely mean it when we say this place works for every size of celebration.\n\nSome of our most memorable weekends have been intimate elopements — just the couple, a handful of their closest people, and the venue feeling like it was made for exactly this moment. There's something incredibly beautiful about a small wedding on a big property. The space doesn't overwhelm. It just holds you.\n\nOn the other end, a full weekend with 80 guests has an energy all its own. The campfire buzzing, lawn games going in every direction, laughter carrying through the trees.\n\nBoth are wonderful. Both are exactly right. It all comes down to what feels like you."
    },
    {
      category: "Property Amenities",
      question: "Is there WiFi on the property?",
      answer: "There's limited WiFi available at the cabin for anything essential — checking in on a few last-minute details, that kind of thing.\n\nBut we'll be honest with you: most couples tell us afterward that the unexpected digital detox was one of their favourite parts of the whole weekend. Guests actually put their phones down. They look up. They talk to each other, really talk. Old friends reconnect in ways that just don't happen when everyone's scrolling.\n\nThe forest has a way of doing that.\n\nConsider the limited WiFi a gentle nudge toward being fully present for one of the most important weekends of your life. The Instagram posts can wait."
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
