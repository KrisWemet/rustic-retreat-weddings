import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { ChefHat, Wine, Sparkles, HandHeart, Wallet, Clock } from "lucide-react";

import heroImage from "@/assets/gallery/reception-evening-lights.webp";

const DIYWedding = () => {
  return (
    <PageTransition>
      <SEO
        title="DIY Wedding Venue in Alberta — No Mandatory Vendors"
        description="A true DIY wedding venue near Edmonton: bring any caterer, run your own bar with no corkage fees, use our free décor collection, and take days — not hours — to set up. All-in pricing from $5,000."
        path="/diy-wedding-venue-alberta"
        image={heroImage}
        keywords={["diy wedding venue alberta", "no mandatory vendors wedding venue", "byob wedding venue alberta", "bring your own vendors wedding", "no corkage fee wedding venue", "affordable wedding venue near edmonton"]}
      />
      <BreadcrumbSchema />
      <div className="min-h-screen">
        <Navigation />

        <PageHero
          backgroundImage={heroImage}
          backgroundImageAlt="Evening reception under string lights at Rustic Retreat"
          title="Your Wedding, Your Way — Actually"
          subtitle="No mandatory vendors. No per-plate minimums. No corkage fees. A DIY wedding venue that means it."
        />

        <section className="section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">What "No Restrictions" Really Means Here</h2>
                <p className="text-lg mb-6 text-muted-foreground">
                  Most venues say you have options, then hand you a preferred-vendor list and a bar minimum. Rustic Retreat works differently: you rent the entire 65-acre property for multiple days, and what happens on it is up to you. Bring the photographer you love, the caterer who makes your favourite food, the aunt who bakes better than any bakery — or do the whole thing yourselves with family pitching in. That's not a loophole here; it's the design.
                </p>
              </ScrollReveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                <ScrollReveal delay={0}>
                  <Card className="border-2 hover:border-secondary transition-colors h-full">
                    <CardContent className="pt-6">
                      <ChefHat className="w-8 h-8 text-secondary mb-3" />
                      <h3 className="font-semibold mb-2">Any Caterer — Or None</h3>
                      <p className="text-sm text-muted-foreground">
                        Food trucks, family potlucks, a hog roast, your favourite restaurant — no approved lists and no per-plate minimums. Just let caterers know we're off-grid and solar-powered.
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
                <ScrollReveal delay={100}>
                  <Card className="border-2 hover:border-secondary transition-colors h-full">
                    <CardContent className="pt-6">
                      <Wine className="w-8 h-8 text-secondary mb-3" />
                      <h3 className="font-semibold mb-2">Run Your Own Bar</h3>
                      <p className="text-sm text-muted-foreground">
                        BYOB with zero corkage fees and zero drink minimums. Self-serve coolers or a full DIY bar — you just need an inexpensive AGLC Special Event Licence, and we'll guide you through it.
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
                <ScrollReveal delay={200}>
                  <Card className="border-2 hover:border-secondary transition-colors h-full">
                    <CardContent className="pt-6">
                      <Sparkles className="w-8 h-8 text-secondary mb-3" />
                      <h3 className="font-semibold mb-2">Décor Collection Included</h3>
                      <p className="text-sm text-muted-foreground">
                        Arches, table styling, hurricane vases, candle holders, faux florals, signage, sheer fabrics — a growing collection at no extra cost, so DIY doesn't mean buying everything.
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
                <ScrollReveal delay={0}>
                  <Card className="border-2 hover:border-secondary transition-colors h-full">
                    <CardContent className="pt-6">
                      <Clock className="w-8 h-8 text-secondary mb-3" />
                      <h3 className="font-semibold mb-2">Days to Set Up, Not Hours</h3>
                      <p className="text-sm text-muted-foreground">
                        DIY falls apart when you get the keys at 9am on wedding day. Here you check in days early — decorate slowly, with helpers, without panic. Check-in 8am day one, checkout 8pm final day.
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
                <ScrollReveal delay={100}>
                  <Card className="border-2 hover:border-secondary transition-colors h-full">
                    <CardContent className="pt-6">
                      <HandHeart className="w-8 h-8 text-secondary mb-3" />
                      <h3 className="font-semibold mb-2">Help When You Want It</h3>
                      <p className="text-sm text-muted-foreground">
                        We live on the property and we're close by all weekend. Need a recommendation, a safety pin, or a hand figuring out layout? Ask. Prefer to be left alone? Also perfect.
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
                <ScrollReveal delay={200}>
                  <Card className="border-2 hover:border-secondary transition-colors h-full">
                    <CardContent className="pt-6">
                      <Wallet className="w-8 h-8 text-secondary mb-3" />
                      <h3 className="font-semibold mb-2">A Budget You Control</h3>
                      <p className="text-sm text-muted-foreground">
                        The venue is one flat price. Every other dollar — food, drink, flowers, photos — goes where you decide, at prices you negotiate. That's how DIY couples celebrate for less.
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">What a DIY Wedding Weekend Costs</h2>
                <p className="text-lg mb-6 text-muted-foreground">
                  2027 season venue pricing is all-in and transparent: a 2-day weekday escape is $5,000, the classic 3-day weekend is $6,500, and the full 5-day experience is $7,500 (CAD, GST extra; payment plans available). Every package includes exclusive property access, the newlywed cabin, overnight camping for up to 60 guests, seating for 80, the décor collection, and a stocked firewood shed. Because there are no forced spends on top, many couples host their entire multi-day celebration for less than a single evening costs at a traditional venue.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/packages">
                    <Button size="lg" className="rounded-full">Compare Packages</Button>
                  </Link>
                  <Link to="/faqs">
                    <Button size="lg" variant="outline" className="rounded-full">Vendor & Bar FAQs</Button>
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="section bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Bring Your Vision. We'll Bring the Land.</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                Walk the property, see the décor shed, and start sketching your weekend. Tours are by appointment and completely pressure-free.
              </p>
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="rounded-full px-8">Schedule Your Tour</Button>
              </Link>
            </ScrollReveal>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default DIYWedding;
