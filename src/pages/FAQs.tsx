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
import ceremonyVowsGazebo from "@/assets/gallery/Images/ceremony-vows-gazebo-2.webp";

type FAQEntry = {
  category: string;
  question: string;
  answer: string;
  link?: { url: string; text: string };
};

const FAQs = () => {
  const faqs: FAQEntry[] = [
    {
      category: "Booking & Scheduling",
      question: "When can we book our wedding at Rustic Retreat?",
      answer: "Every booking starts with a visit to the property. We want you to walk the land, feel the space, and know for certain that this is where you want to get married. After your tour, if you're ready to make it official, we can get everything started that same day. Or if you'd like a few days to let it sink in, that's completely fine too. We'll follow your lead. No pressure, no rush."
    },
    {
      category: "Booking & Scheduling",
      question: "Which package would be best for me?",
      answer: "The 3-day package (Friday-Sunday) is a beautiful choice for couples who want a heartfelt, focused celebration. The wedding weekend comes together warmly and intentionally, with everyone present for the moments that matter most.\n\nThe 5-day package (Thursday-Monday or Friday-Tuesday) is our most popular option, and it's easy to see why. It's where the full Rustic Retreat experience truly unfolds. The extra days give everyone room to arrive, settle in, and just be together. Evenings gather naturally around the campfire, laughter carries through the trees, and by the time your wedding day arrives, it already feels like a cherished reunion. There's space for an activity day, unhurried meals, and the kind of slow, sweet visiting that guests will carry home in their hearts.\n\nUltimately, the choice comes down to how immersive you want your celebration to be. It's also worth thinking about your decorating plans. If you're bringing in vendors to handle setup and takedown, a 3-day package can work beautifully. But if you're envisioning a more personal touch, with friends and family pitching in to help bring your vision to life, the extra days give everyone the time and space to do that joyfully, without it feeling rushed.\n\nWhichever package you choose, check-in begins at 8am on your first day and the property is yours right through to 8pm on your last - every hour thoughtfully yours from start to finish.\n\nWe'd love to help you find the perfect fit during your property visit."
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
      answer: "More than you'd expect. Probably more than you've seen anywhere else.\n\nThe venue grounds are yours for the full weekend: the ceremony spaces, the clear-top gazebo, the groomed trails winding through the property, and the campfire area. We live on the property so we're close by if you need anything at all, and we mean anything. Forgot a toothbrush? Need a safety pin five minutes before the ceremony? Check with us first. We can't promise everything, but we'll do our best. This weekend belongs to you, and we want it to feel that way.\n\nFor the celebration itself, you'll have a dance floor beneath the stars, a Bluetooth sound system with wireless microphones, along with picnic tables and hand-crafted rustic ceremony benches for up to 80 guests. They're yours to arrange wherever your vision calls for them.\n\nOur Wedding Décor Collection is included at no extra cost: an arch selection, table styling pieces, hurricane vases, votive candle holders, faux florals and greenery, wood signs, sheer fabrics, and a collection that keeps growing, both from pieces we've fallen in love with along the way, and from items generously left behind by past couples for future ones to enjoy. Consumables like candles and batteries are available for an additional fee depending on what you need, or feel free to bring your own.\n\nThe newlywed cabin is stocked and waiting. Comfortable bedding, a Keurig with pods, cookware, and everything you need for a slow, quiet morning after. It's private, it's cozy, and it's the perfect place to exhale after the best day of your life.\n\nA filled firewood shed is stocked and ready for your full weekend, for shared meals, evening gatherings, and the kind of late-night fires nobody wants to leave. Propane is included for the cabin deck BBQ, and when the chickens are cooperating, fresh eggs in the morning are a lovely little bonus that somehow always makes it into the stories people tell about their time here.\n\nFor the little ones, the property has them covered, a treehouse, a trampoline, a playhouse, lawn games, and a stash of board games for rainy afternoons. The best weddings are the ones where every guest, big and small, feels right at home."
    },
    {
      category: "Booking & Scheduling",
      question: "Do you offer payment plans, and what are your deposit and cancellation terms?",
      answer: "Yes, we do offer payment plans. Most couples choose a simple staged plan so payments are spread out between booking day and the wedding weekend.\n\nTo secure your date, we require a signed agreement and a booking deposit. The remaining balance is then paid on the schedule we agree to together. We are happy to map out timing that feels manageable for your household.\n\nBecause we host only one wedding per weekend, cancellations can have a major impact on that date. Deposit and cancellation terms, including timelines and any non-refundable portions, are laid out in your contract before you sign anything.\n\nIf plans ever need to change, communicate with us early. We are reasonable people, and we will always do our best to work with you within the contract terms."
    },
    {
      category: "Planning & Flexibility",
      question: "Can we have a rehearsal dinner, ceremony rehearsal or other events?",
      answer: "Absolutely, and this is where a Rustic Retreat wedding really shines.\n\nYour time here is truly yours, and we love seeing every couple make it their own. Whether you envision a relaxed rehearsal dinner under the stars, a lively lawn games tournament featuring some fierce Connect Four competition, a group hike through the trees, or a quiet afternoon where everyone simply naps, reads, and recharges. You set the schedule.\n\nMornings might start with yoga on the grass, afternoons could unfold into lawn games, good conversation, and easy laughter, and evenings have a way of naturally drifting toward the campfire with a drink in hand and stories being shared.\n\nNo itinerary but your own. You're renting the space, and we encourage you to fill it with whatever brings you and your favourite people joy."
    },
    {
      category: "Planning & Flexibility",
      question: "No mandatory vendors, no minimum spends - just your wedding, your way. How does that actually work?",
      answer: "Absolutely! When it comes to vendors, you have complete flexibility to celebrate exactly the way you envision.\n\nWhether you have a beloved photographer you've already fallen in love with, a caterer who makes your favourite foods, or a florist whose style speaks to your heart, bring them along. Almost any vendor you choose is welcome here, with no restrictions on the number of vendors on site - this is your day and your vision, and we want it to reflect exactly that.\n\nPrefer to keep things close and personal? Many of our couples choose to DIY their weekend entirely, leaning on the love and helping hands of family and friends to bring their vision to life. There's something really special about that.\n\nIf you're looking for guidance, we're also happy to recommend vendors we've had the pleasure of working with and trust to help make your day beautiful. However you choose to approach it, we're here to support you.\n\nAs the couple, you set the timeline - vendor arrival, setup, and scheduling is entirely your call. There are no restrictions on timing within your booked package dates. Check-in is from 8am on your first day and checkout is at 8pm on your final day, and we want you to make the most of every hour in between.\n\nA few things worth sharing with your vendors ahead of time: the property runs on solar power, which may impact setup requirements - particularly for DJs and caterers. Please also let your caterer know that there is currently no kitchen or prep area on site so they can plan accordingly.\n\nVendors are welcome to offload near the venue and then move their vehicles to park near the house, keeping the venue area clear and unobstructed for your guests. We ask that all vendors carry their own liability insurance, and please note that booking, communication, and payment with your vendors is the responsibility of the couple.\n\nIf you'd like to arrange an early drop-off of items like decor or liquor ahead of your check-in date, this may be possible for a small early drop-off fee. Availability depends entirely on the previous event's checkout, so early drop-off is typically only possible one to two days before your start date and cannot be guaranteed. Decorating cannot begin until your booked start time."
    },
    {
      category: "Property Rules & Policies",
      question: "What are the bar and liquor licence requirements, and who handles them?",
      answer: "If alcohol is being served, the event host is responsible for securing the proper AGLC Special Event Licence. We can guide you on what to apply for and when, but the licence itself must be in the name of the host as required by Alberta rules.\n\nYou are welcome to run your bar in a way that suits your celebration, from simple self-serve coolers to a staffed bar setup. If you hire a bar service, make sure they are fully licensed and insured.\n\nWe also ask that you have a clear plan for responsible service and safe rides or overnight stays for guests. Keeping everyone safe is part of making the weekend feel good for everyone."
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
      answer: "Honestly? We'd like to think some of the most beautiful weddings have a little rain in them.\n\nThe clear-top gazebo comfortably covers your entire guest list of 80 for the reception, so even if Mother Nature decides to join the celebration, the party carries on without missing a beat. For the ceremony, a little planning goes a long way, whether that's having a party tent rental on standby, handing out umbrellas that double as the cutest photo props, adjusting the layout and moving the ceremony under the clear-top gazebo, or simply embracing whatever the sky decides to do. There's space on the property to accommodate a tent if you'd like that extra peace of mind, and we think a little preparation means you can relax and enjoy the day no matter what.\n\nThe dance floor is open air, and honestly, what's more romantic than dancing in the rain? There's something about it that turns an unexpected moment into an unforgettable one.\n\nAlberta weather is famously unpredictable, and we've made peace with that. A little rain never dampened a good celebration, and it does something genuinely beautiful to photographs, the light softens, the colours deepen, and those spontaneous rainy moments have a way of becoming the shots you treasure most."
    },
    {
      category: "Property Amenities",
      question: "Is there electricity and running water?",
      answer: "Yes to both, with a little context on each.\n\nThe entire property runs on solar power, no power lines come in to the property from the road. It's completely off-grid, just as it's been since day one. You'll have reliable electricity for your essentials throughout your stay: the cabin, the sound system, lighting, and everything you need to run a beautiful celebration. Supplemental generators are available when needed, such as after a few cloudy days or when there is a substantial additional power draw, and are placed well away from the venue area so they don't impact the peace and quiet of your celebration. If you have additional power requirements, a custom neon sign behind the head table, specialty lighting, or anything else you're envisioning, just let us know ahead of time so we can plan accordingly.\n\nIf you're bringing in vendors who require power, please give us a heads up early and make sure to let your vendors know ahead of time that the property runs on solar power. This is especially important for DJs and caterers. Some DJs prefer not to run their equipment on a generator and may bring their own power source, so it's worth having that conversation with them before the big day. A little communication goes a long way in making sure everything runs smoothly.\n\nPotable water is available on-site, though it isn't limitless. We always recommend planning ahead for drinking water for you and your guests, whether that's individual water bottles, large 5-gallon jugs with a dispenser, or whatever works best for your group. It's one of those simple things that makes a big difference on a warm summer day.\n\nFor bathroom facilities, the property has two well-maintained outhouses, and we bring in an additional portable outhouse depending on event size. They're kept clean and are very much part of the genuine off-grid experience that makes this place feel different. A wash house with two shower stalls is currently under construction, and a bathroom house with two flush toilets is in the planning phase for the 2027 season."
    },
    {
      category: "Location & Access",
      question: "How far is Rustic Retreat from Edmonton?",
      answer: "About an hour northwest of Edmonton — 99 kilometres from the city centre, near the shores of Lac la Nonne, and just 20 minutes from both Barrhead and Onoway.\n\nClose enough that your guests won’t dread the drive. Far enough that the moment you turn off the highway and head toward the property, the city genuinely feels like it belongs to another world.\n\nThe drive itself is pure Alberta — open fields, big skies, and the kind of quiet countryside that starts to slow your heart rate before you even arrive. For out-of-town guests travelling from Edmonton’s YEG airport, it’s a straightforward and scenic trip that sets the tone for the weekend ahead.\n\nNo traffic noise. No skyline. Just trees, sky, and the smell of nature when you step out of the car."
    },
    {
      category: "Guest Accommodations",
      question: "Is the property accessible for guests with mobility needs?",
      answer: "Parts of the venue are very accessible, and parts are naturally uneven because this is a rural outdoor property. The main event areas, including the gazebo, dance area, and key gathering spaces, can be planned with mobility in mind.\n\nThat said, some trails and field areas are grass, gravel, or natural ground and may be difficult for wheelchairs, walkers, or guests who need very flat footing.\n\nIf accessibility is important for members of your guest list, tell us early. We can help you design a layout, parking plan, and seating flow that minimizes difficult terrain and keeps important moments easy to reach."
    },
    {
      category: "Exclusivity & Privacy",
      question: "Do you host multiple weddings per weekend?",
      answer: "Never. Not once, not ever.\n\nWhen you book Rustic Retreat, the entire venue is yours for the full duration of your package. No other couple is setting up on the other side of a dividing wall. No strangers wandering through your ceremony. No overlapping timelines or competing sound systems.\n\nJust you, your people, and the venue entirely yours to fill with whatever makes your celebration feel like you.\n\nWe only host one wedding per weekend by design, and that's a promise we take seriously."
    },
    {
      category: "Property Rules & Policies",
      question: "Can we bring our dog (or other pets)?",
      answer: "Well-behaved pets are absolutely welcome here.\n\nDogs especially seem to love this property, and we love having them. Whether your pup walks down the aisle with you, poses for portraits among the trees, or simply spends the weekend making new friends and curling up by the campfire, they are absolutely part of the celebration as far as we're concerned. Some of the most memorable wedding photos we've seen have featured a very happy, very photogenic dog front and centre.\n\nJust reach out ahead of time so we can get everything arranged. If you'd like to have your dog in the cabin with you, a small pet cleaning fee applies, something we can easily sort out when we connect. For more detailed information, be sure to check out our Site Rules & Guidelines link found at the bottom of our website.\n\nFor other animal requests, please reach out to us directly. We're happy to entertain interesting ideas and will do everything we can to make it work.\n\nIf they're part of your family, they're part of your celebration."
    },
    {
      category: "Property Rules & Policies",
      question: "What is expected for cleanup before checkout?",
      answer: "A full spotless deep clean is not expected, but the property should be left tidy and event-ready for the next couple.\n\nThat means all personal items and rental items removed, décor packed out, garbage and recycling sorted into the proper bins, and borrowed venue items returned to their original locations.\n\nHosts are responsible for guest and vendor cleanup, including camping and bar areas. If there is unusual mess, damage, or extra waste handling required, those costs may come from the damage deposit as outlined in the contract.\n\nIf you are unsure about anything during teardown, ask us. We would rather answer one quick question than have you stress about it."
    },
    {
      category: "Property Rules & Policies",
      question: "Are there décor restrictions like candles, confetti, tape, nails, or sparklers?",
      answer: "Yes, there are a few restrictions to protect the property and keep everyone safe.\n\nOpen flame is limited and must follow fire safety rules. Real candles must be stable and attended. During fire advisories or bans, flame-based options may be restricted. Flameless candles are always encouraged.\n\nLoose confetti, glitter, and anything hard to clean from grass or gravel are not permitted. Anything that can harm wildlife or create cleanup risk is a no.\n\nPlease do not use nails, screws, staples, or anything that damages structures or trees. If you are unsure whether a décor idea is property-safe, send it to us in advance and we will help you find a beautiful way to make it work.",
      link: { url: "/rustic-retreat-site-rules.html", text: "Read the full Rustic Retreat Site Rules & Guidelines here." }
    },
    {
      category: "Property Rules & Policies",
      question: "Can we use drones, and are there photo or video rules?",
      answer: "Professional photography and videography are absolutely welcome, including drone footage where conditions and regulations allow.\n\nDrone pilots must follow current Transport Canada rules and any applicable airspace requirements. Flights should only happen when weather is safe, visibility is good, and guests are aware.\n\nFor privacy and safety, we ask that pilots avoid low flights over guests during key moments unless pre-coordinated, and always yield to ceremony flow, sound, and guest comfort.\n\nIf your photographer or pilot plans to use drones, let us know in advance so we can coordinate the best launch areas and timing on the property.",
      link: { url: "/rustic-retreat-site-rules.html", text: "View our complete Site Rules and Guidelines here." }
    },
    {
      category: "Guest Accommodations",
      question: "Is there a minimum guest count?",
      answer: "Not at all. We genuinely mean it when we say this place works for every size of celebration.\n\nSome of our most memorable weekends have been intimate elopements, just the couple, a handful of their closest people, and the venue feeling like it was made for exactly this moment. There's something incredibly beautiful about a small wedding on a big property. The space doesn't overwhelm. It just holds you. And with a little creative décor, the gazebo space can be beautifully modified to feel more intimate, cozy and intentional, even though it's designed to comfortably hold up to 80 guests.\n\nOn the other end, a full weekend with 80 guests has an energy all its own. The campfire buzzing, lawn games going in every direction, laughter carrying through the trees.\n\nBoth are wonderful. Both are exactly right. It all comes down to what feels like you."
    },
    {
      category: "Property Amenities",
      question: "Is there WiFi on the property?",
      answer: "There's no WiFi at the venue, and honestly, we think that's one of its quiet gifts.\n\nCell signal is good in most areas, so you're never truly unreachable if you need to be. But most couples tell us afterward that the unexpected chance to unplug was one of their favourite parts of the whole weekend. Guests actually put their phones down. They look up. They talk to each other, really talk. Old friends reconnect in ways that just don't happen when everyone's scrolling.\n\nThe forest has a way of doing that.\n\nConsider it a gentle nudge toward being fully present for one of the most important weekends of your life. All the posts can come later, when you return to normal life and want to share the beauty you were surrounded by when two became one."
    },
    {
      category: "Property Rules & Policies",
      question: "Are there any specific site rules or curfews we should know about?",
      answer: "At Rustic Retreat, we want your wedding weekend to feel as relaxed and free as possible. Because we are an open, off-grid property surrounded by nature, we do have a few common-sense guidelines in place to keep you and your guests safe, protect the land, and respect our neighbours.\n\nThis includes noise reduction hours, fire safety and smoking protocols, decor application guidelines, and a few important reminders about keeping little ones safe in a country setting, including some simple wildlife precautions that are just part of life out here.\n\nWe recommend giving our full Site Rules & Guidelines a read before your weekend so nothing catches you by surprise.",
      link: { url: "/rustic-retreat-site-rules.html", text: "View our complete Site Rules and Guidelines here." }
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
                          {faq.link && (
                            <p className="mt-2 text-primary font-medium hover:underline">
                              {faq.link.url.startsWith('http') || faq.link.url.endsWith('.html') || faq.link.url.endsWith('.pdf') ? (
                                <a href={faq.link.url} target="_blank" rel="noopener noreferrer">
                                  {faq.link.text}
                                </a>
                              ) : (
                                <Link to={faq.link.url}>
                                  {faq.link.text}
                                </Link>
                              )}
                            </p>
                          )}
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
