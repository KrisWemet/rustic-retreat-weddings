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
import { Heart, Home, TreePine, CalendarDays } from "lucide-react";

import heroImage from "@/assets/gallery/sunset-silhouette-couple.webp";

const Elopements = () => {
  return (
    <PageTransition>
      <SEO
        title="Elopement & Small Wedding Venue Near Edmonton"
        description="Elope on 65 private acres an hour from Edmonton. The 2-day weekday escape ($5,000, 2027 season) includes the whole property, a newlywed cabin, camping for your closest people, and zero crowds."
        path="/elopements"
        image={heroImage}
        keywords={["elopement venue alberta", "elopement venue near edmonton", "small wedding venue edmonton", "intimate wedding venue alberta", "micro wedding alberta", "weekday wedding venue"]}
      />
      <BreadcrumbSchema />
      <div className="min-h-screen">
        <Navigation />

        <PageHero
          backgroundImage={heroImage}
          backgroundImageAlt="Couple silhouetted against the sunset at Rustic Retreat"
          title="Elope, Beautifully"
          subtitle="Just the two of you — or the twenty people you actually want there — on 65 acres that belong entirely to you."
        />

        <section className="section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">A Small Wedding on a Big Property</h2>
                <p className="text-lg mb-6 text-muted-foreground">
                  There's something incredibly beautiful about a small wedding on a big property. The space doesn't overwhelm you — it holds you. No minimum guest count, no venue that feels half-empty, no strangers from another event in the background of your photos. Some of our most memorable weekends have been elopements: a couple, a handful of their closest people, golden-hour vows in the meadow, and a quiet fire afterward under more stars than you've seen in years.
                </p>
                <p className="text-lg mb-6 text-muted-foreground">
                  We're an hour northwest of Edmonton near Lac La Nonne — close enough for an easy drive, far enough that the city disappears completely.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="section section-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">The 2-Day Weekday Escape — $5,000</h2>
              </ScrollReveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <ScrollReveal delay={0}>
                  <Card className="border-2 hover:border-secondary transition-colors h-full">
                    <CardContent className="pt-6">
                      <CalendarDays className="w-8 h-8 text-secondary mb-3" />
                      <h3 className="font-semibold mb-2">Two Unhurried Days</h3>
                      <p className="text-sm text-muted-foreground">
                        Arrive, settle in, rehearse if you like, and spend the evening by the fire. Day two is yours: an intimate ceremony, exactly as you dreamed it. Weekday dates, 2027 season pricing.
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
                <ScrollReveal delay={100}>
                  <Card className="border-2 hover:border-secondary transition-colors h-full">
                    <CardContent className="pt-6">
                      <TreePine className="w-8 h-8 text-secondary mb-3" />
                      <h3 className="font-semibold mb-2">The Whole Property</h3>
                      <p className="text-sm text-muted-foreground">
                        All 65 acres are exclusively yours — meadow, forest trails, clear-top gazebo, fire pit. Choose the ceremony spot that feels like your story.
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
                <ScrollReveal delay={200}>
                  <Card className="border-2 hover:border-secondary transition-colors h-full">
                    <CardContent className="pt-6">
                      <Home className="w-8 h-8 text-secondary mb-3" />
                      <h3 className="font-semibold mb-2">The Newlywed Cabin</h3>
                      <p className="text-sm text-muted-foreground">
                        Private, stocked, and solar-powered — comfortable bedding, a Keurig, cookware, and a deck BBQ. Your guests can camp steps away if they're staying.
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
                <ScrollReveal delay={300}>
                  <Card className="border-2 hover:border-secondary transition-colors h-full">
                    <CardContent className="pt-6">
                      <Heart className="w-8 h-8 text-secondary mb-3" />
                      <h3 className="font-semibold mb-2">Everything Included</h3>
                      <p className="text-sm text-muted-foreground">
                        The décor collection, ceremony benches, sound system, and firewood all come with the property. Bring your own officiant, photographer, and picnic — done.
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              </div>
              <ScrollReveal>
                <p className="text-center text-muted-foreground mt-10 max-w-3xl mx-auto">
                  Want your small wedding to stretch into a full weekend? The 3-day ($6,500) and 5-day ($7,500) packages work beautifully for intimate groups too — the property makes 20 guests feel just as right as 80.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="section bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Start With a Quiet Walk</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                Come see the property, find your spot, and picture the day. Every booking starts with a visit — no pressure, no rush.
              </p>
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="rounded-full px-8">Book a Property Tour</Button>
              </Link>
            </ScrollReveal>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Elopements;
