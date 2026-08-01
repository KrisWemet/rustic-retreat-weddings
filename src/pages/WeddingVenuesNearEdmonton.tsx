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
import { Car, MapPin, Tent, BedDouble, CalendarDays, Trees } from "lucide-react";

import heroImage from "@/assets/gallery/rustic-retreat-venue-exterior.webp";

/**
 * Local landing page targeting "wedding venue / wedding venues near Edmonton"
 * and the surrounding communities we actually draw couples from.
 * Facts here must stay consistent with /llms.txt and OrganizationSchema.tsx.
 */

const LOCAL_FAQS = [
  {
    question: "How far is Rustic Retreat from Edmonton?",
    answer:
      "We're about an hour northwest of Edmonton — roughly 99 km — on 65 private acres near Lac La Nonne, Alberta. It's a straightforward highway drive, and most of your guests will only make it once, because camping is included and they stay for the whole weekend.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "Most of our couples come from Edmonton and the surrounding region, including Barrhead, Onoway, Alberta Beach, Westlock, Spruce Grove, Stony Plain, and St. Albert. Because every package is multi-day with camping included, we also host couples from further afield who want everyone in one place for the weekend.",
  },
  {
    question: "Where do guests stay if they don't camp?",
    answer:
      "Overnight camping is included for up to 60 guests, and the newlywed cabin sleeps four. For guests who'd rather have a bed, lakefront Airbnbs sit 5–15 minutes away on Lac la Nonne, and there are hotels in Barrhead and Onoway about 15 minutes out.",
  },
  {
    question: "Is it worth driving out of the city for a wedding venue?",
    answer:
      "That's the trade we're built around. An hour's drive buys you the entire property, one wedding per weekend, no vendor restrictions, no corkage fees, and days instead of hours to set up. In-city venues generally give you a room for an evening; here you get 65 acres for several days.",
  },
  {
    question: "When is your wedding season?",
    answer:
      "June through September. We host one wedding per weekend, so dates are genuinely limited — couples typically book a season or more ahead. Property tours run by appointment year-round.",
  },
];

const WeddingVenuesNearEdmonton = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: LOCAL_FAQS.map((faq) => ({
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
        title="Wedding Venues Near Edmonton, Alberta"
        description="Looking for wedding venues near Edmonton? Rustic Retreat is an outdoor wedding venue on 65 private acres an hour northwest of the city, near Barrhead, Onoway, and Alberta Beach. One wedding per weekend, camping included for 60 guests, all-in pricing from $5,000."
        path="/wedding-venues-near-edmonton"
        image={heroImage}
        keywords={[
          "wedding venues near edmonton",
          "wedding venue near edmonton",
          "outdoor wedding venues edmonton",
          "rustic wedding venues near edmonton",
          "wedding venues barrhead alberta",
          "wedding venues onoway alberta",
          "wedding venues alberta beach",
          "acreage wedding venue near edmonton",
        ]}
      />
      <BreadcrumbSchema />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="min-h-screen">
        <Navigation />

        <PageHero
          backgroundImage={heroImage}
          backgroundImageAlt="The Rustic Retreat property, an outdoor wedding venue near Edmonton, Alberta"
          title="Wedding Venues Near Edmonton"
          subtitle="An hour northwest of the city, 65 private acres become entirely yours — for days, not hours."
        />

        <section className="section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  An Outdoor Wedding Venue an Hour From Edmonton
                </h2>
                <p className="text-lg mb-6 text-muted-foreground">
                  Most couples searching for wedding venues near Edmonton are weighing the same trade-off: stay in the
                  city and get a room for an evening, or drive a little and get somewhere that actually feels like
                  yours. Rustic Retreat is the second kind of place — a family-owned, off-grid wedding venue on 65
                  private acres near Lac La Nonne, Alberta, about 99 km northwest of Edmonton.
                </p>
                <p className="text-lg mb-6 text-muted-foreground">
                  We host one wedding per weekend. That's the whole model. When you book, the forest, the meadow, the
                  gazebo, the fire pit, and the camping area belong to your people alone — no other party setting up
                  across the lawn, no hard stop at midnight, and no schedule but your own.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="section section-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                  Serving Edmonton and the Communities Around Us
                </h2>
                <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
                  We're close enough to the city to be an easy drive, and far enough out that the sky actually goes
                  dark at night.
                </p>
              </ScrollReveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <ScrollReveal delay={0}>
                  <Card className="border-2 hover:border-secondary transition-colors h-full">
                    <CardContent className="pt-6">
                      <Car className="w-8 h-8 text-secondary mb-3" />
                      <h3 className="font-semibold mb-2">About an Hour From Edmonton</h3>
                      <p className="text-sm text-muted-foreground">
                        Roughly 99 km northwest of the city on highway the whole way. Guests make the drive once —
                        camping is included, so they arrive for the weekend rather than commuting to a single evening.
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
                <ScrollReveal delay={100}>
                  <Card className="border-2 hover:border-secondary transition-colors h-full">
                    <CardContent className="pt-6">
                      <MapPin className="w-8 h-8 text-secondary mb-3" />
                      <h3 className="font-semibold mb-2">Minutes From Barrhead & Onoway</h3>
                      <p className="text-sm text-muted-foreground">
                        Both towns sit about 15 minutes away, with hotels, groceries, and last-minute-emergency
                        hardware stores. Alberta Beach and the Lac la Nonne shoreline are close by as well.
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
                <ScrollReveal delay={200}>
                  <Card className="border-2 hover:border-secondary transition-colors h-full">
                    <CardContent className="pt-6">
                      <Trees className="w-8 h-8 text-secondary mb-3" />
                      <h3 className="font-semibold mb-2">Where Couples Come From</h3>
                      <p className="text-sm text-muted-foreground">
                        Edmonton, St. Albert, Spruce Grove, Stony Plain, Westlock, Barrhead, Onoway, and Alberta Beach
                        — plus couples who left the province years ago and want everyone home in one place.
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
                <ScrollReveal delay={0}>
                  <Card className="border-2 hover:border-secondary transition-colors h-full">
                    <CardContent className="pt-6">
                      <Tent className="w-8 h-8 text-secondary mb-3" />
                      <h3 className="font-semibold mb-2">Nobody Drives Home Tired</h3>
                      <p className="text-sm text-muted-foreground">
                        Overnight camping is included for up to 60 guests, tents and RVs alike. The drive out stops
                        being a downside the moment your people realise they're staying.
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
                <ScrollReveal delay={100}>
                  <Card className="border-2 hover:border-secondary transition-colors h-full">
                    <CardContent className="pt-6">
                      <BedDouble className="w-8 h-8 text-secondary mb-3" />
                      <h3 className="font-semibold mb-2">Beds Nearby for Non-Campers</h3>
                      <p className="text-sm text-muted-foreground">
                        Lakefront Airbnbs are 5–15 minutes away on Lac la Nonne, and hotels in Barrhead and Onoway are
                        about 15 minutes out. Everyone celebrates together; everyone sleeps how they like.
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
                <ScrollReveal delay={200}>
                  <Card className="border-2 hover:border-secondary transition-colors h-full">
                    <CardContent className="pt-6">
                      <CalendarDays className="w-8 h-8 text-secondary mb-3" />
                      <h3 className="font-semibold mb-2">One Wedding Per Weekend</h3>
                      <p className="text-sm text-muted-foreground">
                        Our season runs June through September and we book a single celebration each weekend, so
                        dates go early. Tours are by appointment year-round.
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  What You Get Out Here That You Don't Get In Town
                </h2>
                <p className="text-lg mb-6 text-muted-foreground">
                  City venues price by the head and the hour. We price by the property. Every package is multi-day and
                  all-in: the 2-day weekday escape from $5,000, the 3-day weekend from $6,500, and the 5-day
                  experience — our most popular — from $7,500 for the 2027 season, GST not included.
                </p>
                <p className="text-lg mb-6 text-muted-foreground">
                  Bring any caterer you like. Run your own bar with no corkage fee. Use our curated décor collection
                  at no extra cost. Set up on Wednesday instead of cramming it into a four-hour window on Saturday
                  morning. There are no mandatory vendors here and no per-plate minimums — the things that quietly
                  double a wedding budget in the city simply aren't part of the arrangement.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/packages">
                    <Button size="lg" className="rounded-full">
                      See Packages &amp; Pricing
                    </Button>
                  </Link>
                  <Link to="/venue">
                    <Button size="lg" variant="outline" className="rounded-full">
                      Tour the Property
                    </Button>
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="section section-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
                  Questions About Getting Here
                </h2>
              </ScrollReveal>
              <div className="space-y-6">
                {LOCAL_FAQS.map((faq, index) => (
                  <ScrollReveal key={faq.question} delay={index * 75}>
                    <Card className="border-2">
                      <CardContent className="pt-6">
                        <h3 className="font-semibold mb-2">{faq.question}</h3>
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
              <ScrollReveal>
                <p className="text-center text-muted-foreground mt-8">
                  More answers on our{" "}
                  <Link to="/faqs" className="underline hover:text-secondary transition-colors">
                    FAQs page
                  </Link>
                  , or see how other couples used the weekend in{" "}
                  <Link to="/real-weddings" className="underline hover:text-secondary transition-colors">
                    real weddings
                  </Link>
                  .
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="section bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Come See It For Yourself</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                An hour's drive is hard to judge from a photo gallery. Walk the trails, stand under the gazebo, and
                see whether the quiet out here is the kind you've been picturing. Tours are by appointment.
              </p>
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="rounded-full px-8">
                  Schedule Your Tour
                </Button>
              </Link>
            </ScrollReveal>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default WeddingVenuesNearEdmonton;
