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
import cabinExterior from "@/assets/cabin-exterior-forest.avif";
import bridalPortrait from "@/assets/gallery/bridal-portrait-porch.jpg";
import veilKissRomantic from "@/assets/gallery/veil-kiss-romantic.jpg";
import cakeCuttingForest from "@/assets/gallery/cake-cutting-forest.jpg";
import receptionTable4 from "@/assets/gallery/reception-table-4.jpg";
import firstDanceCloseup from "@/assets/gallery/first-dance-closeup.jpg";
import { Home, Coffee, Sparkles, Sun, Users, Battery, Package, Heart, Gift, DollarSign, Waves, Compass } from "lucide-react";

const Venue = () => {
  return (
    <PageTransition>
      <SEO 
        title="The Venue"
        description="Explore our private cabin for newlyweds, 65-acre forest property, and curated wedding décor collection. Off-grid solar power, comfortable accommodations, and endless photo opportunities near Edmonton."
        path="/venue"
        image={cabinExterior}
      />
      <div className="min-h-screen">
        <Navigation />
        
        <PageHero
          backgroundImage={cabinExterior}
          backgroundImageAlt="Rustic cabin exterior in the forest at Rustic Retreat"
          title="The Venue"
          subtitle="65 private acres of forest and meadow, a cozy cabin for newlyweds, and a treasure trove of décor waiting to be discovered."
          overlayOpacity="heavy"
        />

        {/* The Cabin Section */}
        <section className="section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">The Cabin: Your Private Sanctuary</h2>
                
                <p className="text-lg mb-6 text-muted-foreground">
                  Saturday night. Stars impossibly bright. Your guests still gathered around the fire. And you—you and your brand new spouse—slip away down a lantern-lit path to a cabin that's been waiting just for you.
                </p>

                <div className="bg-primary/5 p-8 border-l-4 border-primary mb-8">
                  <p className="text-xl font-bold">
                    This is where the performance ends and the marriage begins.
                  </p>
                </div>
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <ScrollReveal delay={0}>
                <Card className="border-2 hover:border-secondary transition-colors h-full">
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
                <Card className="border-2 hover:border-secondary transition-colors h-full">
                  <CardContent className="pt-6">
                    <Users className="w-8 h-8 text-secondary mb-3" />
                    <h3 className="font-semibold mb-2">Room for Four</h3>
                    <p className="text-sm text-muted-foreground">
                      Perfect for a wedding night retreat, or invite your parents Sunday morning for coffee and the best recap conversation of your life.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <Card className="border-2 hover:border-secondary transition-colors h-full">
                  <CardContent className="pt-6">
                    <Coffee className="w-8 h-8 text-secondary mb-3" />
                    <h3 className="font-semibold mb-2">Morning Coffee</h3>
                    <p className="text-sm text-muted-foreground">
                      Keurig with pods provided—because the day-after conversations are sometimes the best part.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <Card className="border-2 hover:border-secondary transition-colors h-full">
                  <CardContent className="pt-6">
                    <Home className="w-8 h-8 text-secondary mb-3" />
                    <h3 className="font-semibold mb-2">Comfortable Furnishings</h3>
                    <p className="text-sm text-muted-foreground">
                      Cozy bed, seating area, charming rustic touches that photograph beautifully.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <Card className="border-2 hover:border-secondary transition-colors h-full">
                  <CardContent className="pt-6">
                    <Sun className="w-8 h-8 text-secondary mb-3" />
                    <h3 className="font-semibold mb-2">Forest Views</h3>
                    <p className="text-sm text-muted-foreground">
                      Wake up to Alberta wilderness stretching in every direction. No buildings. No roads. Just trees and sky.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={500}>
                <Card className="border-2 hover:border-secondary transition-colors h-full">
                  <CardContent className="pt-6">
                    <Sparkles className="w-8 h-8 text-secondary mb-3" />
                    <h3 className="font-semibold mb-2">Complete Privacy</h3>
                    <p className="text-sm text-muted-foreground">
                      Close enough to hear the joy of your celebration, far enough to be completely alone.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Photo Opportunities */}
        <section className="section">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <div className="grid grid-cols-2 gap-4">
                  <HoverImage 
                    src={bridalPortrait}
                    alt="Bride portrait on rustic cabin porch at Rustic Retreat Weddings Alberta venue with natural forest background"
                    description="Morning of magic—a quiet moment on the cabin porch"
                    category="Getting Ready"
                    className="shadow-xl"
                  />
                  <HoverImage 
                    src={veilKissRomantic}
                    alt="Forest trail photo spot for wedding portraits at Rustic Retreat with couple walking wooded path"
                    description="Countless photo opportunities—the forest paths offer endless backdrops"
                    category="Photo Spots"
                    className="shadow-xl"
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right">
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
                  src={firstDanceCloseup}
                  alt="Clear-top gazebo reception space glowing with string lights at night"
                  description="The clear-top gazebo glows after dark with twinkle lights"
                  category="Reception"
                  className="shadow-xl"
                />
              </ScrollReveal>

              <ScrollReveal direction="right">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ceremony Settings & Reception Glow</h2>

                <p className="mb-6 text-muted-foreground">
                  Choose the ceremony backdrop that fits your vibe—an open meadow, the poplar grove, a forest clearing, or under the gazebo. Each spot gives you a different feel while keeping everything close for guests.
                </p>

                <p className="mb-6 text-muted-foreground">
                  Most couples host the reception in the clear-top gazebo. At night, the string lights and open ceiling create that warm, glowing atmosphere everyone remembers.
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

        {/* Décor Collection Details */}
        <section className="section">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How the Décor Collection Works</h2>
            </ScrollReveal>

            <div className="max-w-4xl mx-auto">
              <ScrollReveal delay={100}>
                <div className="bg-card border-2 rounded-2xl p-8 shadow-soft">
                  <p className="text-lg mb-4">
                    The collection is always evolving as couples leave pieces behind and we add new finds. It’s a flexible mix of ceremony accents, table styling pieces, and rustic details that you can blend with your own décor.
                  </p>
                  <p className="text-muted-foreground">
                    We’ll walk you through what’s available during your visit and help you picture what fits your vision. If you want a current snapshot ahead of time, just ask and we’ll send the latest overview.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Zero Extra Cost */}
        <section className="section section-muted">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <div className="flex items-center gap-3 mb-6">
                  <DollarSign className="w-10 h-10 text-secondary" />
                  <h2 className="text-3xl md:text-4xl font-bold">Zero Extra Cost</h2>
                </div>
                <p className="text-lg mb-6">
                  Most venues charge decoration rental fees. Companies demand deposits. You spend thousands on purchases you'll never use again.
                </p>
                <div className="bg-secondary/10 p-6 border-2 border-secondary">
                  <p className="text-xl font-bold">
                    Here, you walk into abundance. Ready. Waiting. Free.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right">
                <div className="grid grid-cols-2 gap-4">
                  <HoverImage 
                    src={cakeCuttingForest}
                    alt="Rustic wine barrel wedding décor at Alberta venue"
                    description="Rustic touches everywhere—wine barrels add character"
                    category="Rustic Details"
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
