import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import decorCollection from "@/assets/decor-house-collection.avif";
import wineBarrelDecor from "@/assets/gallery/wine-barrel-decor.avif";
import receptionTablescape from "@/assets/gallery/reception-tablescape-gold.avif";
import { Sparkles, Heart, Package, Lightbulb, Gift, DollarSign } from "lucide-react";

const DecorHouse = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <PageHero
        backgroundImage={decorCollection}
        title="The Wedding Décor House"
        subtitle="Treasures left behind by couples who came before. Every piece has a story—now they're waiting to be part of yours."
        overlayOpacity="heavy"
      />

      {/* Story Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={receptionTablescape}
                alt="Wedding décor collection at Rustic Retreat"
                className="shadow-xl"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Pass the Magic Forward</h2>

              <p className="mb-6 text-muted-foreground">
                When couples leave after their celebration, many choose to leave pieces of their décor behind. Not because they forgot them. <strong>Because they want to pass the magic forward.</strong>
              </p>

              <div className="space-y-3 text-sm text-muted-foreground">
                <p>That vintage tablecloth? From Sarah and Tom's 2023 wedding.</p>
                <p>The mason jar collection? Left by Jessica, who said, "The next bride will know what to do with these."</p>
                <p>The handmade wooden signs? Crafted by Michael's grandfather.</p>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary mt-6">
                <p className="font-medium text-lg">
                  This is what community looks like. And it's all available to you, free of charge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Find */}
      <section className="section section-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What You'll Find</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2">
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

            <Card className="border-2">
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

            <Card className="border-2">
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

            <Card className="border-2">
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
          </div>
        </div>
      </section>

      {/* Inspiration Gallery */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <DollarSign className="w-10 h-10 text-secondary" />
                <h2 className="text-3xl md:text-4xl font-bold">Zero Extra Cost</h2>
              </div>
              <p className="text-lg mb-6">
                Most venues charge decoration rental fees. Companies demand deposits. You spend thousands on purchases you'll never use again.
              </p>
              <div className="bg-secondary/10 p-6 rounded-lg border-2 border-secondary">
                <p className="text-xl font-bold">
                  Here, you walk into abundance. Ready. Waiting. Free.
                </p>
              </div>
            </div>
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Come See What's Waiting</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Experience the Décor House in person. See the treasures left by couples who came before.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-[hsl(15,50%,75%)] via-[hsl(15,45%,65%)] to-[hsl(15,55%,80%)] hover:from-[hsl(15,55%,80%)] hover:via-[hsl(15,50%,70%)] hover:to-[hsl(15,60%,85%)] text-primary-foreground rounded-full px-8 shadow-lg">
                Walk the Land With Us
              </Button>
            </Link>
            <Link to="/weddings">
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rounded-full px-8">
                View Packages
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DecorHouse;
