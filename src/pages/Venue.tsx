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
import venueHero from "@/assets/gallery/ceremony-by-gazebo.webp";
import cabinExterior from "@/assets/gallery/pavilion-reception.webp";
import cabinInterior from "@/assets/gallery/Cabin/cabin-interior-living-area.webp";
import cabinPorch from "@/assets/gallery/Cabin/cabin-porch-view.webp";
import cabinBed from "@/assets/gallery/Cabin/cabin-bedroom-comfort.webp";
import cabinKitchen from "@/assets/gallery/Cabin/cabin-kitchenette-details.webp";
import cabinLoft from "@/assets/gallery/Cabin/cabin-loft-view.webp";
import cabinDeck from "@/assets/gallery/Cabin/cabin-deck-outdoor-seating.webp";
import cabinFullExterior from "@/assets/gallery/Cabin/cabin-exterior-woods.webp";
import campfireSetting from "@/assets/gallery/Cabin/cabin-campfire-evening.webp";
import familyPortrait from "@/assets/gallery/Cabin/cabin-bridal-portraits.webp";
import coupleRomantic from "@/assets/gallery/Cabin/cabin-romantic-couple.webp";
import cakeCuttingForest from "@/assets/gallery/seo/rustic-retreat-weddings-lac-la-nonne-alberta-cake-cutting-and-first-bite-40.webp";
import receptionTable4 from "@/assets/gallery/head-table.webp";
import receptionChairGame from "@/assets/gallery/ae544ad7d928a81729703820306114ae-xxxlarge.webp";
import ceremonyPavilion from "@/assets/gallery/Images/IMG_0036.webp";
import ceremonyAisles from "@/assets/gallery/Images/4099316435379843506.webp";
import ceremonyWide1 from "@/assets/gallery/seo/rustic-retreat-weddings-lac-la-nonne-alberta-wide-outdoor-ceremony-arch-wedding-party-forest-clearing-03.webp";
import ceremonyCloseUp from "@/assets/gallery/Images/IMG_0002.webp";
import ceremonySeating from "@/assets/gallery/Images/IMG_0030.webp";
import ceremonyAisleWalk from "@/assets/gallery/Images/IMG_5018.webp";
import ceremonyForest1 from "@/assets/gallery/Images/IMG_6716.webp";
import ceremonyForest2 from "@/assets/gallery/Images/IMG_6758.webp";
import extrasYardGames from "@/assets/gallery/Images/extras-yard-games.webp";
import extrasTrampolineKids from "@/assets/gallery/Images/extras-trampoline-kids.webp";
import extrasFirePitNight from "@/assets/gallery/Images/extras-firepit-night.webp";
import extrasPlayhouse from "@/assets/gallery/Images/extras-playhouse.webp";
import extrasGiantConnectFour from "@/assets/gallery/Images/extras-giant-connect-four.webp";

import { Home, Coffee, Sparkles, Sun, Users, Battery, Package, Heart, Gift, Waves, Compass, Flame, Trophy, Baby, Zap, Tent, Trees } from "lucide-react";

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
          backgroundImageAlt="A beautiful wedding ceremony setup by the gazebo at Rustic Retreat"
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
                <div className="h-80 md:h-96 rounded-2xl overflow-hidden shadow-soft img-card">
                  <img src={cabinFullExterior} alt="Cabin exterior nestled in the forest" loading="lazy" decoding="async" className="w-full h-full object-cover" />
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
                <div className="h-80 md:h-96 rounded-2xl overflow-hidden shadow-soft img-card">
                  <img src={cabinInterior} alt="Cozy cabin interior" loading="lazy" decoding="async" className="w-full h-full object-cover" />
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
                <div className="h-80 md:h-96 rounded-2xl overflow-hidden shadow-soft img-card">
                  <img src={cabinBed} alt="Comfortable bed in the cabin" loading="lazy" decoding="async" className="w-full h-full object-cover rotate-90 scale-110 md:scale-125" />
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
                <div className="h-80 md:h-96 rounded-2xl overflow-hidden shadow-soft img-card">
                  <img src={campfireSetting} alt="Campfire setting near the cabin" loading="lazy" decoding="async" className="w-full h-full object-cover" />
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
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <ScrollReveal direction="left">
                <div className="bg-primary/5 p-6 border-l-4 border-primary">
                  <p className="font-medium text-lg mb-2">
                    The Land Speaks for Itself
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Most couples choose their ceremony spot by simply walking the grounds until a particular clearing or view feels right. We encourage you to take that time during your visit to feel which space resonates with your story.
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
                  alt="Ceremony setup with flower-lined aisles at Rustic Retreat"
                  description="A sun-drenched meadow ceremony with hand-crafted benches and wildflower-lined aisles"
                  category="Meadow Ceremony"
                  className="w-full rounded-2xl"
                />
              </ScrollReveal>

              <ScrollReveal delay={100} className="break-inside-avoid">
                <HoverImage
                  src={ceremonyWide1}
                  alt="Wide shot of a wedding ceremony in the forest at Rustic Retreat"
                  description="Vows exchanged in a grand forest clearing with guests seated under the ancient poplar canopy"
                  category="Forest Clearing"
                  className="w-full rounded-2xl"
                />
              </ScrollReveal>

              <ScrollReveal delay={200} className="break-inside-avoid">
                <HoverImage
                  src={ceremonyCloseUp}
                  alt="Close up of a couple exchanging rings during the ceremony"
                  description="An intimate moment shared between the couple at the altar in the woods"
                  category="The Vows"
                  className="w-full rounded-2xl"
                />
              </ScrollReveal>

              <ScrollReveal delay={300} className="break-inside-avoid">
                <HoverImage
                  src={ceremonySeating}
                  alt="Ceremony seating setup in a quiet forest grove"
                  description="Rustic wooden benches perfectly placed for an intimate ceremony in a secluded forest grove"
                  category="Forest Grove Seating"
                  className="w-full rounded-2xl"
                />
              </ScrollReveal>

              <ScrollReveal delay={400} className="break-inside-avoid">
                <HoverImage
                  src={ceremonyAisleWalk}
                  alt="A father walking his daughter down the forest aisle"
                  description="The emotional walk down a natural forest aisle towards the clearing"
                  category="The Processional"
                  className="w-full rounded-2xl"
                />
              </ScrollReveal>

              <ScrollReveal delay={500} className="break-inside-avoid">
                <HoverImage
                  src={ceremonyForest1}
                  alt="Ceremony setup nestled deep in the forest trees"
                  description="A sacred ceremony space tucked away where the trees form a natural cathedral"
                  category="The Forest Cathedral"
                  className="w-full rounded-2xl"
                />
              </ScrollReveal>

              <ScrollReveal delay={600} className="break-inside-avoid">
                <HoverImage
                  src={ceremonyForest2}
                  alt="Another beautiful forest ceremony spot with natural light"
                  description="Soft afternoon light filtering through the trees during a quiet ceremony"
                  category="Woodland Sanctuary"
                  className="w-full rounded-2xl"
                />
              </ScrollReveal>

              <ScrollReveal delay={700} className="break-inside-avoid">
                <HoverImage
                  src={receptionChairGame}
                  alt="The couple playing the shoe game during the reception"
                  description="Laughter and joy during the reception shoe game under the glowing pavilion lights"
                  category="Reception Fun"
                  className="w-full rounded-2xl"
                />
              </ScrollReveal>

              <ScrollReveal delay={800} className="break-inside-avoid">
                <HoverImage
                  src={ceremonyPavilion}
                  alt="Ceremony under the rustic pavilion at Rustic Retreat"
                  description="A beautiful ceremony setting under the hand-crafted pavilion timbers"
                  category="Pavilion Ceremony"
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
                  <p className="text-secondary font-semibold uppercase tracking-[0.18em] mb-4">The Decor Collection</p>
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

        {/* All the Extras Section */}
        <section className="section section-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <ScrollReveal>
                <p className="text-secondary font-semibold uppercase tracking-[0.18em] mb-4">The Little Details</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">All the Extras, Because We Got You</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We know that it’s the small things that make a weekend unforgettable. We’ve built, gathered, and curated these "extras" so you don’t have to worry about the entertainment or the logistics. It's all here, ready for your guests to enjoy.
                </p>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <ScrollReveal delay={100}>
                <Card className="border-2 h-full hover:border-secondary/50 transition-all group bg-card overflow-hidden">
                  <div className="h-48 overflow-hidden img-card">
                    <img src={extrasGiantConnectFour} alt="Giant Connect Four at Rustic Retreat" loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <CardContent className="pt-6 text-center lg:text-left">
                    <Trophy className="w-10 h-10 text-secondary mb-4 mx-auto lg:mx-0" />
                    <h3 className="text-xl font-bold mb-2">Yard Games Galore</h3>
                    <p className="text-muted-foreground">
                      Giant Jenga, Connect Four, cornhole, and more. Keep the energy high and the guests laughing during cocktail hour or throughout the weekend.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <Card className="border-2 h-full hover:border-secondary/50 transition-all group bg-card overflow-hidden">
                  <div className="h-48 overflow-hidden img-card">
                    <img src={extrasPlayhouse} alt="Children's play house at Rustic Retreat" loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <CardContent className="pt-6 text-center lg:text-left">
                    <Baby className="w-10 h-10 text-secondary mb-4 mx-auto lg:mx-0" />
                    <h3 className="text-xl font-bold mb-2">Children's Play House</h3>
                    <p className="text-muted-foreground">
                      A dedicated space for the little ones to let their imaginations run wild, keeping them entertained while the adults celebrate.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <Card className="border-2 h-full hover:border-secondary/50 transition-all group bg-card overflow-hidden">
                  <div className="h-48 overflow-hidden img-card">
                    <img src={extrasTrampolineKids} alt="Trampoline at Rustic Retreat" loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <CardContent className="pt-6 text-center lg:text-left">
                    <Zap className="w-10 h-10 text-secondary mb-4 mx-auto lg:mx-0" />
                    <h3 className="text-xl font-bold mb-2">The Trampoline</h3>
                    <p className="text-muted-foreground">
                      For the young (and the young at heart). A fun addition to the property that adds a bit of bounce to your wedding weekend.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <Card className="border-2 h-full hover:border-secondary/50 transition-all group bg-card overflow-hidden">
                  <div className="h-48 overflow-hidden img-card">
                    <img src={extrasFirePitNight} alt="Fire pit at night at Rustic Retreat" loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <CardContent className="pt-6 text-center lg:text-left">
                    <Flame className="w-10 h-10 text-secondary mb-4 mx-auto lg:mx-0" />
                    <h3 className="text-xl font-bold mb-2">The Fire Pit</h3>
                    <p className="text-muted-foreground">
                      The heart of late-night conversations. We provide the pit and the setting; you bring the stories (and maybe some s'mores).
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={500}>
                <Card className="border-2 h-full hover:border-secondary/50 transition-all group bg-card overflow-hidden">
                  <div className="h-48 flex items-center justify-center bg-secondary/10">
                    <Sparkles className="w-16 h-16 text-secondary/40" />
                  </div>
                  <CardContent className="pt-6 text-center lg:text-left">
                    <Sparkles className="w-10 h-10 text-secondary mb-4 mx-auto lg:mx-0" />
                    <h3 className="text-xl font-bold mb-2">And So Much More</h3>
                    <p className="text-muted-foreground">
                      From unexpected photo ops to quiet corners, the property is full of little surprises waiting to be discovered.
                    </p>
                  </CardContent>
                </Card>
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
