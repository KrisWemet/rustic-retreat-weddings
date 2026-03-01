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

        {/* Abundance & Décor Section - Combined and moved up */}
        <section className="section">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <ScrollReveal direction="left">
                <div className="flex items-center gap-3 mb-6">
                  <DollarSign className="w-10 h-10 text-secondary" />
                  <h2 className="text-3xl md:text-4xl font-bold">Abundance Without the Added Cost</h2>
                </div>
                
                <p className="text-lg mb-6 text-muted-foreground">
                  Your wedding should feel like a celebration, not a series of line items on an invoice. While most venues charge per piece for rentals and decor, we believe in abundance. 
                </p>

                <div className="bg-secondary/10 p-6 border-l-4 border-secondary mb-8">
                  <p className="text-xl font-bold text-primary">
                    Our curated Wedding Décor Collection is included in every booking—at zero extra cost.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">A Living Collection</h3>
                  <p className="text-muted-foreground">
                    The collection is always growing, shaped by new finds and the generosity of couples who leave pieces behind for the next story to unfold. It’s a flexible mix of ceremony arches, rustic wine barrels, table styling pieces, and vintage accents that you can weave into your own vision.
                  </p>
                  <p className="text-muted-foreground">
                    During your tour, we’ll walk you through the collection and help you start picturing how these pieces can transform the space into something uniquely yours.
                  </p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal direction="right">
                <div className="grid grid-cols-2 gap-4">
                  <HoverImage 
                    src={cakeCuttingForest}
                    alt="Rustic wine barrel wedding décor at Alberta venue"
                    description="Rustic touches everywhere—wine barrels add character"
                    category="Included Décor"
                    className="shadow-xl"
                  />
                  <HoverImage 
                    src={receptionTable4}
                    alt="Elegant gold and white wedding reception table setting"
                    description="Elegance without the rental fees—all included"
                    category="Table Settings"
                    className="shadow-xl"
                  />
                </div>
                <div className="mt-4 p-4 bg-card border rounded-xl text-center italic text-sm text-muted-foreground">
                  "Walk into a space where everything you need is already waiting for you."
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Photo Opportunities */}
        <section className="section">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left" className="lg:order-1">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Picture-Perfect From Every Angle</h2>
                  <p className="text-lg mb-6">
                    The cabin's rustic charm creates stunning backdrops for bridal portraits, getting-ready photos, and those quiet couple moments your photographer will treasure.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Wooden porch with forest views. Soft natural light filtering through trees. Authentic Alberta wilderness surrounding your private sanctuary.
                  </p>
                  <p className="font-medium">
                    Your wedding album will tell a story of genuine beauty—no artificial backdrops needed.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" className="lg:order-2">
                <div className="grid grid-cols-2 gap-4">
                  <HoverImage 
                    src={familyPortrait}
                    alt="Bridal portraits near the rustic cabin at Rustic Retreat"
                    description="Beautiful backdrops for your wedding photos"
                    category="Portraits"
                    className="shadow-xl"
                  />
                  <HoverImage 
                    src={coupleRomantic}
                    alt="Couple enjoying a romantic moment near the cabin at Rustic Retreat"
                    description="Private, intimate moments away from the crowd"
                    category="Portraits"
                    className="shadow-xl"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Ceremony & Reception Spaces */}
        <section className="section section-muted">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <HoverImage 
                  src={receptionChairGame}
                  alt="Wedding reception chair game under string lights at Rustic Retreat"
                  description="Laughter-filled reception moments under the glowing pavilion"
                  category="Reception"
                  className="shadow-xl"
                />
              </ScrollReveal>

              <ScrollReveal direction="right">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ceremony Settings & Reception Glow</h2>

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
          </div>
        </section>

        {/* Freedom to Create Section */}
        <section className="section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollReveal>
                <p className="text-sm uppercase tracking-widest text-secondary mb-4">YOUR WEEKEND, YOUR WAY</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Freedom to Create</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  When you rent the land, you're not just booking a venue—you're claiming space for whatever celebration you imagine. Rustic Retreat isn't only about the ceremony and reception. <strong>The whole weekend should show who you are.</strong>
                </p>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  <div className="bg-card p-4 rounded-xl shadow-soft flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-5 h-5 text-secondary" />
                    </div>
                    <p className="text-sm font-medium">Fireworks at midnight</p>
                  </div>
                  <div className="bg-card p-4 rounded-xl shadow-soft flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Waves className="w-5 h-5 text-secondary" />
                    </div>
                    <p className="text-sm font-medium">Giant slip-and-slide</p>
                  </div>
                  <div className="bg-card p-4 rounded-xl shadow-soft flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Compass className="w-5 h-5 text-secondary" />
                    </div>
                    <p className="text-sm font-medium">Treasure hunts</p>
                  </div>
                  <div className="bg-card p-4 rounded-xl shadow-soft flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Sun className="w-5 h-5 text-secondary" />
                    </div>
                    <p className="text-sm font-medium">Sunrise yoga</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="bg-secondary/10 p-6 rounded-xl">
                  <p className="text-muted-foreground italic">
                    "Paintball with the groomsmen. Campfire karaoke. Stargazing with s'mores. A late-night poker tournament. Whatever brings your people joy—this is your space to do it."
                  </p>
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
