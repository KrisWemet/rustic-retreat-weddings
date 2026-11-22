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
        title="DIY Wedding Venue in Alberta"
        description="A DIY wedding venue near Edmonton with no mandatory vendors, no per-plate minimums and no corkage fees. Bring any caterer and run your own bar."
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
          title="Bring Your Own Vendors"
          subtitle="A DIY wedding venue near Edmonton with no mandatory vendors, no per-plate minimums and no corkage fees."
        />

        <section className="section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">How It Works</h2>
                <p className="text-lg mb-6 text-muted-foreground">
                  Most venues say you have options, then hand you a preferred-vendor list and a bar minimum. Rustic Retreat works differently: you rent the entire 65-acre property for multiple days, and what happens on it is up to you. Bring the photographer you love, the caterer who makes your favourite food, the aunt who bakes better than any bakery, or do the whole thing yourselves with family pitching in.
                </p>
              </ScrollReveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                <ScrollReveal delay={0}>
                  <Card className="border-2 hover:border-secondary transition-colors h-full">
                    <CardContent className="pt-6">
                      <ChefHat className="w-8 h-8 text-secondary mb-3" />
                      <h3 className="font-semibold mb-2">Any Caterer, or None</h3>
                      <p className="text-sm text-muted-foreground">
                        Food trucks, family potlucks, a hog roast, your favourite restaurant. There's no approved list and no per-plate minimum. Just let caterers know we're off-grid and solar-powered. Laura Rose Catering and the Curbside by A Cappella food truck have both worked here.
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
                        Bring your own alcohol, with no corkage fees or drink minimums. Self-serve coolers and a full DIY bar both work. You'll need an AGLC Special Event Licence, which is inexpensive, and we'll walk you through getting one.
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
                        Arches, table styling, hurricane vases, candle holders, faux florals, signage, sheer fabrics. It's a growing collection at no extra cost, so DIY doesn't mean buying everything.
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
                <ScrollReveal delay={0}>
                  <Card className="border-2 hover:border-secondary transition-colors h-full">
                    <CardContent className="pt-6">
                      <Clock className="w-8 h-8 text-secondary mb-3" />
                      <h3 className="font-semibold mb-2">Days to Set Up</h3>
                      <p className="text-sm text-muted-foreground">
                        DIY is hard when you only get the keys on the morning of the wedding. Here you check in days ahead, so you and your helpers can decorate without rushing. Check-in is 8am on day one and checkout is 8pm on the last day.
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
                        We live on the property and we're close by all weekend. Need a recommendation, a safety pin, or a hand figuring out layout? Ask. Prefer to be left alone? Also perfect. If you'd rather hand the day to someone, we offer coordination built around what you need.
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
                        The venue is one flat price. Every other dollar (food, drink, flowers, photos) goes where you decide, at prices you negotiate, which is how DIY couples keep costs down.
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              </div>
              <blockquote className="mt-6 border-l-2 border-secondary pl-4 italic text-muted-foreground">
                "They went above and beyond in so many ways - helping wherever they were needed, taking behind-the-scenes photos for us, keeping things running smoothly, and even running to get our rings when we realized they had been forgotten!"
                <footer className="mt-2 text-sm not-italic">Janelle &amp; Brian, Google review</footer>
              </blockquote>
            </div>
          </div>
        </section>

        <section className="section section-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">What a DIY Wedding Weekend Costs</h2>
                <p className="text-lg mb-6 text-muted-foreground">
                  2027 season venue pricing is all-in and transparent: the classic 3-day weekend is $6,500, and the full 5-day experience is $7,500. For 2028, the 3-day weekend is $7,500 and the 5-day experience is $8,500 (CAD, GST extra; payment plans available). Every package includes exclusive property access, the newlywed cabin, overnight camping for up to 60 guests, seating for 80, the wash house, the bridal suite, the décor collection, and a stocked firewood shed. Because there are no forced spends on top, many couples host their entire multi-day celebration for less than a single evening costs at a traditional venue.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Plan It on a Visit</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                Walk the property, see the décor shed, and start sketching your weekend. Tours are by appointment, and there's no pressure to book.
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
