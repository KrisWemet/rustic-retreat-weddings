import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CTAButton } from "@/components/ui/cta-button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import HoverImage from "@/components/HoverImage";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import venueHero from "@/assets/gallery/989fd5f8429eef3c3a6873a7ac4e595c-xxxlarge.jpeg";
import cabinExterior from "@/assets/gallery/seo/rustic-retreat-weddings-lac-la-nonne-alberta-rustic-pavilion-reception-entrance-guests-cheering-19.jpg";
import cabinInterior from "@/assets/gallery/Cabin/cabin-interior-living-area.jpeg";
import cabinPorch from "@/assets/gallery/Cabin/cabin-porch-view.jpeg";
import cabinBed from "@/assets/gallery/Cabin/cabin-bedroom-comfort.jpeg";
import cabinKitchen from "@/assets/gallery/Cabin/cabin-kitchenette-details.jpeg";
import cabinLoft from "@/assets/gallery/Cabin/cabin-loft-view.jpeg";
import cabinDeck from "@/assets/gallery/Cabin/cabin-deck-outdoor-seating.jpeg";
import cabinFullExterior from "@/assets/gallery/Cabin/cabin-exterior-woods.jpeg";
import campfireSetting from "@/assets/gallery/Cabin/cabin-campfire-evening.jpeg";
import familyPortrait from "@/assets/gallery/Cabin/cabin-bridal-portraits.jpeg";
import coupleRomantic from "@/assets/gallery/Cabin/cabin-romantic-couple.jpeg";
import cakeCuttingForest from "@/assets/gallery/seo/rustic-retreat-weddings-lac-la-nonne-alberta-cake-cutting-and-first-bite-40.jpg";
import receptionTable4 from "@/assets/gallery/seo/rustic-retreat-weddings-lac-la-nonne-alberta-rustic-head-table-candles-and-florals-38.jpg";
import receptionChairGame from "@/assets/gallery/ae544ad7d928a81729703820306114ae-xxxlarge.jpeg";
import ceremonyAisles from "@/assets/gallery/Images/4099316435379843506.jpg";
import ceremonyWide1 from "@/assets/gallery/Images/IMG_0002.jpg";
import ceremonyCloseUp from "@/assets/gallery/Images/IMG_0009.jpg";
import ceremonySeating from "@/assets/gallery/Images/IMG_0030.jpg";
import ceremonyAisleWalk from "@/assets/gallery/Images/IMG_5018.jpg";
import ceremonyForest1 from "@/assets/gallery/Images/IMG_6716.jpg";
import ceremonyForest2 from "@/assets/gallery/Images/IMG_6758.jpg";
import { Home, Coffee, Sparkles, Sun, Users, Battery, Package, Heart, Gift, DollarSign, Waves, Compass } from "lucide-react";

const Venue = () => {
  return (
    <PageTransition>
      <SEO
        title="The Venue"
        description="Explore our private cabin for newlyweds, 65-acre forest property, and curated wedding décor collection. Off-grid solar power, comfortable accommodations, and endless photo opportunities near Edmonton."
        path="/venue"
        image={venueHero}
        keywords={["wedding venue cabin alberta", "private wedding property edmonton", "65 acre wedding venue", "outdoor wedding ceremony spaces", "wedding décor collection alberta", "off-grid wedding venue"]}
      />
      <BreadcrumbSchema />
      <div className="min-h-screen">
        <Navigation />
        
        <PageHero
          backgroundImage={venueHero}
          backgroundImageAlt="A beautiful scenic view of the forest and meadow at Rustic Retreat"
          title="The Venue"
          subtitle="65 private acres of forest and meadow, a cozy cabin for newlyweds, and a treasure trove of décor waiting to be discovered."
          overlayOpacity="none"
          contentClassName="max-w-4xl mx-auto bg-black/60 p-8 md:p-12 rounded-3xl shadow-xl"
        />

        {/* The Cabin Section */}
        <section className="section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">The Cabin</h2>
                
                <p className="text-lg mb-6 text-muted-foreground">
                  The celebration keeps humming outside—voices drifting, the fire still crackling, that warm end-of-night glow settling in. When you’re ready, you step away without going far. Just a few steps from the fire, your cabin feels like a reset: quiet, cozy, and completely yours. It’s the kind of moment where everything slows down, you look at each other, and it finally sinks in… we did it.
                </p>

              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Cabin Features */}
        <section className="section section-muted">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What's Inside Your Private Sanctuary</h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
              {/* Row 1 */}
              <ScrollReveal delay={0}>
                <Card className="border-2 hover:border-secondary transition-colors">
                  <CardContent className="pt-6">
                    <Battery className="w-8 h-8 text-secondary mb-3" />
                    <h3 className="font-semibold mb-2">Off-Grid Solar Power</h3>
                    <p className="text-sm text-muted-foreground">
                      Modern comfort without sacrificing the off-grid experience. All the electricity you need, powered by Alberta sunshine.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div className="h-80 md:h-96 rounded-2xl overflow-hidden shadow-soft">
                  <img src={cabinFullExterior} alt="Cabin exterior nestled in the forest" className="w-full h-full object-cover" />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <Card className="border-2 hover:border-secondary transition-colors">
                  <CardContent className="pt-6">
                    <Users className="w-8 h-8 text-secondary mb-3" />
                    <h3 className="font-semibold mb-2">Room for Four</h3>
                    <p className="text-sm text-muted-foreground">
                      Perfect for a wedding night retreat, or invite your parents Sunday morning for coffee and the best recap conversation of your life.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              {/* Row 2 */}
              <ScrollReveal delay={300}>
                <div className="h-80 md:h-96 rounded-2xl overflow-hidden shadow-soft">
                  <img src={cabinInterior} alt="Cozy cabin interior" className="w-full h-full object-cover" />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <Card className="border-2 hover:border-secondary transition-colors">
                  <CardContent className="pt-6">
                    <Coffee className="w-8 h-8 text-secondary mb-3" />
                    <h3 className="font-semibold mb-2">Morning Coffee</h3>
                    <p className="text-sm text-muted-foreground">
                      Keurig with pods provided—because the day-after conversations are sometimes the best part.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={500}>
                <div className="h-80 md:h-96 rounded-2xl overflow-hidden shadow-soft">
                  <img src={cabinBed} alt="Comfortable bed in the cabin" className="w-full h-full object-cover" />
                </div>
              </ScrollReveal>

              {/* Row 3 */}
              <ScrollReveal delay={600}>
                <Card className="border-2 hover:border-secondary transition-colors">
                  <CardContent className="pt-6">
                    <Home className="w-8 h-8 text-secondary mb-3" />
                    <h3 className="font-semibold mb-2">Comfortable Furnishings</h3>
                    <p className="text-sm text-muted-foreground">
                      Cozy bed, seating area, charming rustic touches that photograph beautifully.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={700}>
                <div className="h-80 md:h-96 rounded-2xl overflow-hidden shadow-soft">
                  <img src={campfireSetting} alt="Campfire setting near the cabin" className="w-full h-full object-cover" />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={800}>
                <Card className="border-2 hover:border-secondary transition-colors">
                  <CardContent className="pt-6">
                    <Sun className="w-8 h-8 text-secondary mb-3" />
                    <h3 className="font-semibold mb-2">Forest Views</h3>
                    <p className="text-sm text-muted-foreground">
                      Wake up to Alberta wilderness stretching in every direction. No buildings. No roads. Just trees and sky.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Ceremony & Reception Spaces */}
        <section className="section section-muted">
          <div className="container mx-auto px-4">
            <ScrollReveal className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Ceremony Settings & Reception Glow</h2>
            </ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <div className="bg-primary/5 p-6 border-l-4 border-primary">
                  <p className="font-medium text-lg mb-2">
                    The Land Speaks for Itself
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Most couples choose their ceremony spot by simply walking the grounds until a particular clearing or view feels right. We encourage you to take that time during your visit.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <p className="mb-6 text-muted-foreground">
                  The land has its own way of guiding you. Whether it’s the sun-drenched open meadow, the quiet filter of light through the poplar grove, or the intimacy of a forest clearing, we invite you to wander the 65 acres and find the exact spot where your story feels most at home.
                </p>

                <p className="mb-6 text-muted-foreground">
                  When the sun dips low, most couples move the celebration to the clear-top gazebo. Under the glow of string lights and an open night sky, the space transforms into something truly magical.
                </p>

                <div className="bg-primary/5 p-6 border-l-4 border-primary mt-6">
                  <p className="font-medium text-lg mb-2">
                    We’ll walk you through ceremony options during your visit and help you choose the right flow for the day.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Want to see the gazebo lit up? Schedule an evening tour.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Ceremony Image Gallery - Masonry Layout to show full images */}
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 mt-12 space-y-4">
              <ScrollReveal delay={0} className="break-inside-avoid">
                <HoverImage 
                  src={ceremonyAisles}
                  alt="Ceremony setup with aisles at Rustic Retreat"
                  description="Beautifully prepared ceremony spaces"
                  category="Ceremony"
                  className="w-full rounded-2xl"
                />
              </ScrollReveal>
              
              <ScrollReveal delay={100} className="break-inside-avoid">
                <HoverImage 
                  src={ceremonyWide1}
                  alt="Wide shot of forest ceremony at Rustic Retreat"
                  description="Authentic wilderness settings"
                  category="Ceremony"
                  className="w-full rounded-2xl"
                />
              </ScrollReveal>

              <ScrollReveal delay={200} className="break-inside-avoid">
                <HoverImage 
                  src={ceremonyCloseUp}
                  alt="Close up of wedding ceremony detail"
                  description="Intimate details in nature"
                  category="Ceremony"
                  className="w-full rounded-2xl"
                />
              </ScrollReveal>

              <ScrollReveal delay={300} className="break-inside-avoid">
                <HoverImage 
                  src={ceremonySeating}
                  alt="Ceremony seating in the forest clearing"
                  description="Seating for your loved ones"
                  category="Ceremony"
                  className="w-full rounded-2xl"
                />
              </ScrollReveal>

              <ScrollReveal delay={400} className="break-inside-avoid">
                <HoverImage 
                  src={ceremonyAisleWalk}
                  alt="The walk down the aisle at Rustic Retreat"
                  description="Moments you'll never forget"
                  category="Ceremony"
                  className="w-full rounded-2xl"
                />
              </ScrollReveal>

              <ScrollReveal delay={500} className="break-inside-avoid">
                <HoverImage 
                  src={ceremonyForest1}
                  alt="Ceremony in the trees at Rustic Retreat"
                  description="Surrounded by ancient forest"
                  category="Ceremony"
                  className="w-full rounded-2xl"
                />
              </ScrollReveal>

              <ScrollReveal delay={600} className="break-inside-avoid">
                <HoverImage 
                  src={ceremonyForest2}
                  alt="Another beautiful ceremony spot in the forest"
                  description="Quiet, sacred spaces"
                  category="Ceremony"
                  className="w-full rounded-2xl"
                />
              </ScrollReveal>

              <ScrollReveal delay={700} className="break-inside-avoid">
                <HoverImage 
                  src={receptionChairGame}
                  alt="Wedding reception chair game at Rustic Retreat"
                  description="Laughter-filled reception moments"
                  category="Reception"
                  className="w-full rounded-2xl"
                />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Abundance & Décor Section - Combined and moved up */}
        <section className="section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollReveal>
                <div className="flex flex-col items-center mb-8">
                  <DollarSign className="w-12 h-12 text-secondary mb-4" />
                  <h2 className="text-3xl md:text-4xl font-bold">Abundance Without the Added Cost</h2>
                </div>
                
                <p className="text-lg md:text-xl mb-8 text-muted-foreground leading-relaxed">
                  Your wedding should feel like a celebration, not a series of line items on an invoice. While most venues charge per piece for rentals and decor, we believe in abundance. 
                </p>

                <div className="bg-secondary/10 p-8 rounded-2xl border-2 border-secondary/20 mb-10">
                  <p className="text-xl md:text-2xl font-bold text-primary italic">
                    "Our curated Wedding Décor Collection is included in every booking—at zero extra cost."
                  </p>
                </div>

                <div className="space-y-6 text-left md:text-center">
                  <h3 className="text-2xl font-bold">A Living Collection</h3>
                  <p className="text-muted-foreground text-lg">
                    The collection is always growing, shaped by new finds and the generosity of couples who leave pieces behind for the next story to unfold. It’s a flexible mix of ceremony arches, rustic wine barrels, table styling pieces, and vintage accents that you can weave into your own vision.
                  </p>
                  <p className="text-muted-foreground text-lg">
                    During your tour, we’ll walk you through the collection and help you start picturing how these pieces can transform the space into something uniquely yours.
                  </p>
                </div>

                <div className="mt-10 p-4 bg-card border rounded-xl inline-block italic text-sm text-muted-foreground">
                  Walk into a space where everything you need is already waiting for you.
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">See It In Person</h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto text-primary-foreground/90">
                Experience the cabin, explore the décor collection, and feel the magic of this space in person.
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

export default Venue;
