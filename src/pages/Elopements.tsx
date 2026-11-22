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
        title="Elopement Packages in Alberta"
        description="Elopement and small wedding packages an hour from Edmonton. No minimum guest count, and the whole 65-acre property is yours for 3 or 5 days."
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
          title="Elopements and Small Weddings"
          subtitle="Just the two of you, or the twenty people you actually want there, on 65 acres that belong entirely to you."
        />

        <section className="section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">A Small Wedding on a Big Property</h2>
                <p className="text-lg mb-6 text-muted-foreground">
                  A small wedding works well on a big property. There's no minimum guest count, the space never feels half-empty, and with one wedding per weekend there are no strangers from another event in your photos. It might be just the two of you and a few close friends: vows in the meadow at golden hour, then a quiet fire under more stars than you've seen in years.
                </p>
                <p className="text-lg mb-6 text-muted-foreground">
                  We're an hour northwest of Edmonton near Lac La Nonne, close enough for an easy drive, far enough that the city disappears completely.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="section section-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Your Elopement Includes</h2>
              </ScrollReveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <ScrollReveal delay={0}>
                  <Card className="border-2 hover:border-secondary transition-colors h-full">
                    <CardContent className="pt-6">
                      <CalendarDays className="w-8 h-8 text-secondary mb-3" />
                      <h3 className="font-semibold mb-2">Unhurried Days</h3>
                      <p className="text-sm text-muted-foreground">
                        Arrive, settle in, rehearse if you like, and spend the evening by the fire. The ceremony can be the next day, as small as you want it.
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
                        All 65 acres are exclusively yours: meadow, forest trails, clear-top gazebo, fire pit. Pick whichever ceremony spot you like best.
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
                        Private, stocked, and solar-powered, with comfortable bedding, a Keurig, cookware, and a deck BBQ. Your guests can camp steps away if they're staying.
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
                        The décor collection, ceremony benches, sound system, and firewood all come with the property. Bring your own officiant, photographer, and picnic, and you're done.
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              </div>
              <ScrollReveal>
                <p className="text-center text-muted-foreground mt-10 max-w-3xl mx-auto">
                  Both packages work well for small groups; 20 guests feel just as at home here as 80. For 2027, the 3-day weekend is $6,500 and the full 5-day experience is $7,500. For 2028, the 3-day weekend is $7,500 and the full 5-day experience is $8,500 (CAD, GST extra).
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
                Come see the property and find your spot. Every booking starts with a visit, in person or by video call, and there's no pressure to decide that day.
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
