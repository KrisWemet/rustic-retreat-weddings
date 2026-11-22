import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Trees, Sun, Sparkles, Tent, Home, MapPin } from "lucide-react";
import content from "@/data/site-content.json";
import { SEASONS, priceFor, seasonNote, isSoldOut } from "@/data/seasons";

import heroImage from "@/assets/gallery/wedding-party-woods-hero.webp";

const packages = content.packages.packages;
const threeDay = packages.find((pkg) => pkg.shortName === "3-Day") ?? packages[packages.length - 1];
const fiveDay = packages.find((pkg) => pkg.shortName === "5-Day") ?? packages[0];

// e.g. "$X for 2027 or $Y for 2028", built from site-content.json so prices never drift.
const priceLine = (pkg: (typeof packages)[number]) =>
  SEASONS.map((season) => `$${priceFor(pkg, season)} for ${season}`).join(" or ");

const openSeason = SEASONS.find((season) => !isSoldOut(season)) ?? SEASONS[SEASONS.length - 1];

const faqs = [
  {
    question: "Can we get married in the forest at Rustic Retreat?",
    answer:
      "Yes. The property is 65 private acres of forest and meadow, and couples choose their ceremony spot by walking the land: a quiet poplar grove with filtered light, an intimate forest clearing, the open meadow, or the hand-crafted gazebo set in the trees. Ceremony arches and rustic benches for up to 80 guests are included, so you can set up wherever the spot feels right.",
  },
  {
    question: "Where is Rustic Retreat, and how far is it from Edmonton?",
    answer:
      "We're at 3121 Township Road 572A in Lac Ste. Anne County, near Lac La Nonne: 99 km northwest of Edmonton, about an hour's drive, and about 15 minutes from both Barrhead and Onoway.",
  },
  {
    question: "How much does a forest wedding at Rustic Retreat cost?",
    answer: `The 3-day weekend (Friday to Sunday) is ${priceLine(threeDay)}. The 5-day experience (Thursday to Monday), our most popular, is ${priceLine(fiveDay)}. Prices are in CAD and GST is extra. Every package includes exclusive use of the whole property, the newlywed cabin, overnight camping for up to 60 guests, the décor collection, a dance floor and sound system, and firewood for the weekend. There are no mandatory vendors and no catering minimums.`,
  },
  {
    question: "How many guests can a forest wedding here hold?",
    answer:
      "The property is set up for weddings of 60 to 80 guests, with seating for 80 at the ceremony and reception (we can host up to 100 at most). The clear-top gazebo seats all 80 for the reception. Overnight camping is included for up to 60 guests in tents and RVs (8 RVs included, up to 15 on site), with no hookups.",
  },
  {
    question: "What happens if it rains on a forest wedding?",
    answer:
      "The clear-top gazebo covers all 80 guests for the reception, and the ceremony can move under it too. There is also room on the property for a rented tent if you want extra peace of mind.",
  },
  {
    question: "Are there a lot of mosquitoes in the forest?",
    answer:
      "It depends on the year; some summers are much buggier than others. Thermacell repellers work really well under the gazebo, so bring a few for the reception (we don't supply them), and pack bug spray for the trails and campsites.",
  },
  {
    question: "Do you host more than one wedding per weekend?",
    answer:
      "No. We host one wedding per weekend, June through September, so the forest, the trails, the gazebo and the campground are yours alone for the whole stay.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const features = [
  {
    icon: Trees,
    title: "Ceremony Spots in the Trees",
    text: "A poplar grove with filtered light, intimate forest clearings, or the hand-crafted gazebo pavilion. Most couples walk the land until one spot feels right.",
  },
  {
    icon: Sun,
    title: "A Clear-Top Gazebo in the Forest",
    text: "The reception moves to the clear-top gazebo, set among the trees under string lights. It seats all 80 guests and keeps the party going if it rains.",
  },
  {
    icon: Sparkles,
    title: "Nights Under the Stars",
    text: "Live bands or DJs, a sparkler send-off, a food truck for midnight snacks. With no neighbours sharing the property, the evening is yours.",
  },
  {
    icon: Tent,
    title: "Camping in the Woods, Included",
    text: "Overnight camping for up to 60 guests in tents and RVs comes with every package. Guests pick their own spot along the forest edge.",
  },
  {
    icon: Home,
    title: "A Cabin of Your Own",
    text: "The newlywed cabin sleeps 4, runs on solar like the rest of the property, and sits a short walk from the fire.",
  },
  {
    icon: MapPin,
    title: "An Hour From Edmonton",
    text: "99 km northwest of the city, near Lac La Nonne in Lac Ste. Anne County. Close enough for guests, far enough to feel like the woods.",
  },
];

const ForestWedding = () => {
  return (
    <PageTransition>
      <SEO
        title="Forest Wedding Venue Near Edmonton"
        description="A forest wedding venue near Edmonton on 65 private acres near Lac La Nonne. Woodland ceremonies, a clear-top gazebo in the trees, camping for 60 and one wedding per weekend."
        path="/forest-wedding-venue-edmonton"
        image={heroImage}
        keywords={["forest wedding venue edmonton", "woodland wedding venue alberta", "forest wedding alberta", "wedding in the woods near edmonton", "outdoor forest ceremony edmonton", "best value wedding venue near edmonton", "wedding venue near barrhead", "lac ste anne county wedding venue"]}
      />
      <BreadcrumbSchema />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="min-h-screen">
        <Navigation />

        <PageHero
          backgroundImage={heroImage}
          backgroundImageAlt="Wedding guests dancing under string lights at the gazebo, surrounded by forest at night at Rustic Retreat"
          title="A Forest Wedding Venue Near Edmonton"
          subtitle="65 private acres of forest and meadow, one wedding per weekend, and the whole weekend to enjoy it."
        />

        <section className="section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Vows Under the Trees</h2>
                <p className="text-lg mb-6 text-muted-foreground">
                  Rustic Retreat is a family-owned forest wedding venue on 65 private acres near Lac La Nonne, in Lac Ste. Anne County, Alberta. We're about an hour northwest of Edmonton and about 15 minutes from Barrhead. Couples come for a woodland ceremony and stay for the whole weekend, with nobody else's wedding on the property.
                </p>
                <p className="text-lg mb-6 text-muted-foreground">
                  The land is a mix of poplar forest, meadow and groomed trails, with a hand-crafted gazebo set in the trees. Ceremonies happen wherever you choose. Receptions move to the clear-top gazebo under string lights, then carry on around the fire.
                </p>
                <blockquote className="mt-6 border-l-2 border-secondary pl-4 italic text-muted-foreground">
                  "The property is stunning, featuring a romantic couples cabin, enchanting forested areas, and a breathtaking gazebo adorned with lights and ample space."
                  <footer className="mt-2 text-sm not-italic">Tabitha, Facebook review</footer>
                </blockquote>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="section section-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What a Forest Weekend Here Looks Like</h2>
              </ScrollReveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map(({ icon: Icon, title, text }, index) => (
                  <ScrollReveal key={title} delay={(index % 3) * 100}>
                    <Card className="border-2 hover:border-secondary transition-colors h-full">
                      <CardContent className="pt-6">
                        <Icon className="w-8 h-8 text-secondary mb-3" />
                        <h3 className="font-semibold mb-2">{title}</h3>
                        <p className="text-sm text-muted-foreground">{text}</p>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Packages and Value</h2>
                <p className="text-lg mb-6 text-muted-foreground">
                  Every package books the whole property for several days. The price covers the ceremony spaces, the gazebo, the newlywed cabin, camping for up to 60 guests, the décor collection, a dance floor and sound system, and a full firewood shed. You choose your own caterer, bar and vendors, with no minimums.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {[threeDay, fiveDay].map((pkg) => (
                    <Card key={pkg.name} className="border-2 h-full">
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-semibold mb-1">{pkg.name}</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          {pkg.duration}
                          {pkg.isRecommended ? " · Most popular" : ""}
                        </p>
                        <ul className="space-y-1 mb-4">
                          {SEASONS.map((season) => (
                            <li key={season} className="flex justify-between">
                              <span>{season} weddings</span>
                              <strong>${priceFor(pkg, season)}</strong>
                            </li>
                          ))}
                        </ul>
                        <p className="text-sm text-muted-foreground">{pkg.previewDescription}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  Prices in CAD. GST not included. {seasonNote(openSeason)}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/packages">
                    <Button size="lg" className="rounded-full">See Full Package Details</Button>
                  </Link>
                  <Link to="/venue">
                    <Button size="lg" variant="outline" className="rounded-full">Explore the Venue</Button>
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="section section-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Forest Wedding Questions</h2>
              </ScrollReveal>
              <div className="space-y-6">
                {faqs.map((faq) => (
                  <ScrollReveal key={faq.question}>
                    <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </ScrollReveal>
                ))}
              </div>
              <p className="mt-8">
                <Link to="/faqs" className="text-secondary underline underline-offset-4">
                  More questions? Read all our FAQs.
                </Link>
              </p>
            </div>
          </div>
        </section>

        <section className="section bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Come Walk the Forest</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                The trails, the clearings and the gazebo in the trees make the most sense in person. Tours are by appointment. Call (780) 210-6252 or send us a note.
              </p>
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="rounded-full px-8">Book a Tour</Button>
              </Link>
            </ScrollReveal>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default ForestWedding;
