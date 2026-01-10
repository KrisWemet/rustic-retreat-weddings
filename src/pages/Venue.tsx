import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import cabinExterior from "@/assets/cabin-exterior-forest.avif";
import bridalPortrait from "@/assets/gallery/bridal-portrait-porch.jpg";
import forestPath from "@/assets/gallery/forest-path-photos.avif";
import wineBarrelDecor from "@/assets/gallery/wine-barrel-decor.avif";
import receptionTablescape from "@/assets/gallery/reception-tablescape-gold.avif";
import { Home, Coffee, Sparkles, Sun, Users, Battery, Package, Heart, Gift, DollarSign } from "lucide-react";

const Venue = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navigation />
        
        <PageHero
          backgroundImage={cabinExterior}
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
                  Picture this moment: It's Saturday night. The toasts have been made, the dancing exhausted, the stars impossibly bright. Your guests are still gathered around the fire, telling stories about you, about love, about life. And you—you and your brand new spouse—slip away.
                </p>

                <p className="text-lg mb-6">
                  Down a path lit by lanterns. Through the trees that witnessed your vows. To a cabin that's been waiting just for you.
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
                    <h3 className="font-semibold mb-2">Sleeps 4 Comfortably</h3>
                    <p className="text-sm text-muted-foreground">
                      Perfect for a wedding night retreat, or bring your parents or best friends Sunday morning for coffee and recap.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <Card className="border-2 hover:border-secondary transition-colors h-full">
                  <CardContent className="pt-6">
                    <Coffee className="w-8 h-8 text-secondary mb-3" />
                    <h3 className="font-semibold mb-2">Coffee Station</h3>
                    <p className="text-sm text-muted-foreground">
                      Keurig machine with pods provided—because morning-after coffee is essential.
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
                  <img 
                    src={bridalPortrait}
                    alt="Bride portrait on rustic cabin porch at Rustic Retreat Weddings Alberta venue with natural forest background"
                    className="shadow-xl"
                  />
                  <img 
                    src={forestPath}
                    alt="Forest trail photo spot for wedding portraits at Rustic Retreat with couple walking wooded path"
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

        {/* Décor House Section */}
        <section className="section section-muted">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <img 
                  src={receptionTablescape}
                  alt="Wedding décor collection at Rustic Retreat"
                  className="shadow-xl"
                />
              </ScrollReveal>

              <ScrollReveal direction="right">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">The Décor Collection</h2>

                <p className="mb-6 text-muted-foreground">
                  When couples leave after their celebration, many choose to leave pieces of their décor behind. Not because they forgot them—<strong>because they want to pass the magic forward.</strong>
                </p>

                <p className="mb-6 text-muted-foreground">
                  Our Décor Collection isn't a complete décor package—it's a curated selection of pieces you can choose from to complement your vision. Mix them with your own items, or use them as a starting point.
                </p>

                <div className="bg-primary/5 p-6 border-l-4 border-primary mt-6">
                  <p className="font-medium text-lg mb-2">
                    Décor pieces are free to use. Consumables (batteries, candles, etc.) are available at cost.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Browse what's available during your property tour.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* What You'll Find */}
        <section className="section">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What You'll Find in the Collection</h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <ScrollReveal delay={0}>
                <Card className="border-2 h-full">
                  <CardContent className="pt-6">
                    <Package className="w-8 h-8 text-secondary mb-3" />
                    <h3 className="font-semibold text-lg mb-3">Vintage & Rustic Pieces</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Mason jars in various sizes</li>
                      <li>• Vintage tablecloths and runners</li>
                      <li>• Wooden crates and barrels</li>
                      <li>• Antique frames</li>
                    </ul>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <Card className="border-2 h-full">
                  <CardContent className="pt-6">
                    <Sparkles className="w-8 h-8 text-secondary mb-3" />
                    <h3 className="font-semibold text-lg mb-3">Ceremony & Reception</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Fabric for ceremony arches</li>
                      <li>• Aisle markers</li>
                      <li>• Lanterns and fairy lights</li>
                      <li>• Sign easels and boards</li>
                    </ul>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <Card className="border-2 h-full">
                  <CardContent className="pt-6">
                    <Gift className="w-8 h-8 text-secondary mb-3" />
                    <h3 className="font-semibold text-lg mb-3">Table Settings</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Centerpiece bases and vessels</li>
                      <li>• Candle holders</li>
                      <li>• Table numbers</li>
                      <li>• Place card holders</li>
                    </ul>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <Card className="border-2 h-full">
                  <CardContent className="pt-6">
                    <Heart className="w-8 h-8 text-secondary mb-3" />
                    <h3 className="font-semibold text-lg mb-3">Handmade Treasures</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Custom signs from previous weddings</li>
                      <li>• Hand-painted elements</li>
                      <li>• Crafted wooden pieces</li>
                      <li>• Unique personal touches</li>
                    </ul>
                  </CardContent>
                </Card>
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
                  <img 
                    src={wineBarrelDecor}
                    alt="Wine barrel wedding decor"
                    className="shadow-xl"
                  />
                  <img 
                    src={receptionTablescape}
                    alt="Elegant wedding reception tablescape"
                    className="shadow-xl"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Come See It for Yourself</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto text-primary-foreground/90">
                Experience the cabin, explore the décor collection, and feel the magic of this space in person.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-[hsl(15,50%,75%)] via-[hsl(15,45%,65%)] to-[hsl(15,55%,80%)] hover:from-[hsl(15,55%,80%)] hover:via-[hsl(15,50%,70%)] hover:to-[hsl(15,60%,85%)] text-primary-foreground rounded-full px-8 shadow-lg">
                    Walk the Land With Us
                  </Button>
                </Link>
                <Link to="/packages">
                  <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rounded-full px-8">
                    View Packages
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Venue;
