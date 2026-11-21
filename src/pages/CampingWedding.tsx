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
        description="A camping wedding venue near Edmonton. Overnight camping is included for up to 60 guests in tents and RVs, with campfires on 65 private acres."
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
          title="Camping Weddings Near Edmonton"
          subtitle="Your favourite people, tents and campers in the trees, a fire that never quite goes out, and a wedding right in the middle of it."
        />

        <section className="section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">What Is a Camping Wedding?</h2>
                <p className="text-lg mb-6 text-muted-foreground">
                  A camping wedding turns your wedding day into a wedding weekend. Instead of guests arriving at 3pm and driving home at midnight, everyone sets up camp and stays: Friday campfires, Saturday vows, Sunday morning coffee in the trees. It feels closer to a small festival with your favourite people than a scheduled event, and couples consistently tell us it's the reason their wedding actually felt like time together.
                </p>
                <p className="text-lg mb-6 text-muted-foreground">
                  Rustic Retreat was built for exactly this. We're a family-owned, off-grid camping wedding venue on 65 private acres near Lac La Nonne, Alberta, about an hour northwest of Edmonton, and we host just one wedding per weekend, so the entire property is yours.
                </p>
                <blockquote className="mt-6 border-l-2 border-secondary pl-4 italic text-muted-foreground">
                  "It was nice to have camping on-site so many guests can stay late and enjoy the evening."
                  <footer className="mt-2 text-sm not-italic">Brian Dodd, Google review</footer>
                </blockquote>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="section section-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Camping Is Included</h2>
              </ScrollReveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <ScrollReveal delay={0}>
                  <Card className="border-2 hover:border-secondary transition-colors h-full">
                    <CardContent className="pt-6">
                      <Users className="w-8 h-8 text-secondary mb-3" />
                      <h3 className="font-semibold mb-2">Up to 60 Guests Camp Free</h3>
                      <p className="text-sm text-muted-foreground">
                        Overnight camping for up to 60 guests comes with every package. There are no per-tent or nightly fees.
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
                        A filled firewood shed comes with every booking, and the fire pit is where most nights end up.
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
                        There are no numbered or assigned sites. Families cluster together, the night owls drift toward the fire, and the early sleepers tuck into the quiet edges of the forest.
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
                        There are no electrical hookups or water connections at the campsites. There are outhouses, a wash house with two shower stalls and on-demand hot water, and generators are allowed until 10pm. Pack bug spray too; some summers are buggier than others.
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
                        Grandma doesn't have to sleep in a tent. Lakefront Airbnbs on Lac la Nonne are 5 to 15 minutes away, there are hotels in Barrhead and Onoway about 15 minutes out, and RVezy can deliver a trailer that's set up before she arrives.
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              </div>
              <blockquote className="mt-8 max-w-2xl mx-auto text-center italic text-muted-foreground">
                "Roasting hotdogs and smores, camping with family and friends added an extra layer of joy to our wedding."
                <footer className="mt-2 text-sm not-italic">Tabitha, Facebook review</footer>
              </blockquote>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Three Days or Five</h2>
                <p className="text-lg mb-6 text-muted-foreground">
                  Every package is multi-day, because a camping wedding needs room to breathe. The 3-day weekend gives you Friday setup and campfires, Saturday vows, and a slow Sunday. The 5-day experience, our most popular, adds the settling-in days where guests actually bond before the big day arrives. And as the couple, you retreat each night to the newlywed cabin: private, stocked, and a few steps from the fire.
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
                The camping area, the fire pit and the gazebo under the trees all make more sense in person. Tours are by appointment, and evenings show the property at its best.
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
