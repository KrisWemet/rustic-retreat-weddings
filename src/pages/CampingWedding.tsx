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
import { Tent, Flame, Caravan, Moon, Users, MapPin } from "lucide-react";

import heroImage from "@/assets/gallery/Images/extras-firepit-night.webp";

const CampingWedding = () => {
  return (
    <PageTransition>
      <SEO
        title="Camping Wedding Venue in Alberta"
        description="Host a true camping wedding weekend near Edmonton: overnight camping included for up to 60 guests (tents and RVs), nightly campfires, and 65 private acres. One wedding per weekend."
        path="/camping-wedding"
        image={heroImage}
        keywords={["camping wedding venue alberta", "camping wedding venue near edmonton", "campout wedding", "festival style wedding alberta", "wedding venue where guests can camp", "weekend wedding under the stars"]}
      />
      <BreadcrumbSchema />
      <div className="min-h-screen">
        <Navigation />

        <PageHero
          backgroundImage={heroImage}
          backgroundImageAlt="Guests gathered around the campfire at night at Rustic Retreat"
          title="The Camping Wedding, Perfected"
          subtitle="Your favourite people, tents and campers in the trees, a fire that never quite goes out, and a wedding right in the middle of it."
        />

        <section className="section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">What Is a Camping Wedding?</h2>
                <p className="text-lg mb-6 text-muted-foreground">
                  A camping wedding turns your wedding day into a wedding weekend. Instead of guests arriving at 3pm and driving home at midnight, everyone sets up camp and stays — Friday campfires, Saturday vows, Sunday morning coffee in the trees. It feels closer to a small festival with your favourite people than a scheduled event, and couples consistently tell us it's the reason their wedding actually felt like time together.
                </p>
                <p className="text-lg mb-6 text-muted-foreground">
                  Rustic Retreat was built for exactly this. We're a family-owned, off-grid camping wedding venue on 65 private acres near Lac La Nonne, Alberta — about an hour northwest of Edmonton — and we host just one wedding per weekend, so the entire property is yours.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="section section-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Camping Is Included — Not an Upsell</h2>
              </ScrollReveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <ScrollReveal delay={0}>
                  <Card className="border-2 hover:border-secondary transition-colors h-full">
                    <CardContent className="pt-6">
                      <Users className="w-8 h-8 text-secondary mb-3" />
                      <h3 className="font-semibold mb-2">Up to 60 Guests Camp Free</h3>
                      <p className="text-sm text-muted-foreground">
                        Overnight camping for up to 60 guests is included in every package. No per-tent fees, no nightly charges — it's simply part of booking the property.
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
                <ScrollReveal delay={100}>
                  <Card className="border-2 hover:border-secondary transition-colors h-full">
                    <CardContent className="pt-6">
                      <Caravan className="w-8 h-8 text-secondary mb-3" />
                      <h3 className="font-semibold mb-2">Tents & RVs Welcome</h3>
                      <p className="text-sm text-muted-foreground">
                        The main camping area takes both. Eight RVs are included with your package, with room for up to 15 total on site. Don't own one? RVezy.com delivers rentals right to the camping area.
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
                <ScrollReveal delay={200}>
                  <Card className="border-2 hover:border-secondary transition-colors h-full">
                    <CardContent className="pt-6">
                      <Flame className="w-8 h-8 text-secondary mb-3" />
                      <h3 className="font-semibold mb-2">Firewood Stocked All Weekend</h3>
                      <p className="text-sm text-muted-foreground">
                        A filled firewood shed comes with every booking. The fire pit is where your weekend actually happens — late-night stories, s'mores, and the goodbyes nobody wants to say.
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
                <ScrollReveal delay={0}>
                  <Card className="border-2 hover:border-secondary transition-colors h-full">
                    <CardContent className="pt-6">
                      <Tent className="w-8 h-8 text-secondary mb-3" />
                      <h3 className="font-semibold mb-2">Pick Your Own Spot</h3>
                      <p className="text-sm text-muted-foreground">
                        No numbered stalls or defined sites. Families cluster together, the night owls drift toward the fire, and the early sleepers tuck into the quiet edges of the forest.
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
                <ScrollReveal delay={100}>
                  <Card className="border-2 hover:border-secondary transition-colors h-full">
                    <CardContent className="pt-6">
                      <Moon className="w-8 h-8 text-secondary mb-3" />
                      <h3 className="font-semibold mb-2">True Boondocking</h3>
                      <p className="text-sm text-muted-foreground">
                        Honest heads-up: no electrical hookups or water connections. Outhouses on site, showers ready for 2027, and generators welcome until 10pm. It's rustic at its finest.
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
                <ScrollReveal delay={200}>
                  <Card className="border-2 hover:border-secondary transition-colors h-full">
                    <CardContent className="pt-6">
                      <MapPin className="w-8 h-8 text-secondary mb-3" />
                      <h3 className="font-semibold mb-2">Beds for the Non-Campers</h3>
                      <p className="text-sm text-muted-foreground">
                        Lakefront Airbnbs sit 5–15 minutes away on Lac la Nonne, and hotels in Barrhead and Onoway are about 15 minutes out. Everyone celebrates together; everyone sleeps their way.
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">The Weekend, Not Just the Day</h2>
                <p className="text-lg mb-6 text-muted-foreground">
                  Every package is multi-day, because a camping wedding needs room to breathe. The 3-day weekend gives you Friday setup and campfires, Saturday vows, and a slow Sunday. The 5-day experience — our most popular — adds the settling-in days where guests actually bond before the big day arrives. And as the couple, you retreat each night to the newlywed cabin: private, stocked, and a few steps from the fire.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/packages">
                    <Button size="lg" className="rounded-full">See Packages & Pricing</Button>
                  </Link>
                  <Link to="/faqs">
                    <Button size="lg" variant="outline" className="rounded-full">Camping FAQs</Button>
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="section bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Come Walk the Land</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                The camping area, the fire pit, the gazebo under the trees — it all makes more sense in person. Tours are by appointment, and evenings show the property at its best.
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

export default CampingWedding;
