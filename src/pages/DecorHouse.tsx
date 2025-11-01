import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import decorCollection from "@/assets/decor-house-collection.avif";
import wineBarrelDecor from "@/assets/gallery/wine-barrel-decor.avif";
import receptionTablescape from "@/assets/gallery/reception-tablescape-gold.avif";
import { Sparkles, Heart, Package, Lightbulb, Gift, DollarSign } from "lucide-react";

const DecorHouse = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="section mt-20 pt-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              The Treasures Past Brides Left Behind for You
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Inside this converted space lives a collection of beauty, each piece carrying the joy of celebrations that came before yours.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={decorCollection}
                alt="Wedding décor collection house at Rustic Retreat Weddings with vintage mason jars lace and rustic decorations available for couples"
                className="rounded-lg shadow-xl"
              />
            </div>

            <div>
              <p className="text-lg mb-6">
                Here's something magical about Rustic Retreat weddings:
              </p>

              <p className="mb-6 text-muted-foreground">
                When couples leave on Sunday morning (or Tuesday, or next Wednesday—because 5-day celebrations are something else), many choose to leave pieces of their décor behind. Not because they forgot them. <strong>Because they want to pass the magic forward.</strong>
              </p>

              <div className="space-y-3 text-sm text-muted-foreground">
                <p>That vintage tablecloth? From Sarah and Tom's 2023 wedding.</p>
                <p>The mason jar collection? Left by Jessica, who said, "The next bride will know what to do with these."</p>
                <p>The handmade wooden signs? Crafted by Michael's grandfather, gifted to the venue because "love should be shared."</p>
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

      {/* Inside the Décor House */}
      <section className="section section-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Inside the Wedding Décor House</h2>
            
            <p className="text-lg mb-6">
              Step into this converted space at our Alberta wedding venue and you'll find:
            </p>

            <div className="space-y-4 mb-8">
              <p className="font-medium text-lg">
                Layers of possibility.
              </p>
              <p className="text-muted-foreground">
                Fabric, candles, lanterns, signs, vases, frames, centerpiece elements, fairy lights, vintage pieces with stories, handmade treasures, unexpected delights.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg space-y-4">
              <p><strong>Browse slowly.</strong> Run your hands over options. Mix and match. Imagine your grandmother's face when she sees that particular centerpiece.</p>
              
              <p><strong>Take what speaks to you.</strong> Use everything. Use nothing. Supplement with your own vision. Combine eras, styles, stories.</p>
              
              <p className="font-medium">There are no rules here, only possibilities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Inspiration Gallery */}
      <section className="section section-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">See What's Possible</h2>
              <p className="text-lg mb-6">
                From rustic wine barrel displays adorned with greenery to elegant gold-accented tablescapes, couples have created stunning designs using pieces from our collection.
              </p>
              <p className="text-muted-foreground mb-6">
                The beauty isn't just in the individual pieces—it's in how you combine them, how you make them yours, how you weave your story through each table setting and ceremony detail.
              </p>
              <p className="font-medium">
                Your creativity + our collection = something uniquely beautiful.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src={wineBarrelDecor}
                alt="Wine barrel wedding decor with greenery at Rustic Retreat Weddings showing vintage rustic styling options"
                className="rounded-lg shadow-xl"
              />
              <img 
                src={receptionTablescape}
                alt="Elegant wedding reception tablescape with gold chargers at Rustic Retreat showing decoration possibilities"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Find */}
      <section className="section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What You'll Find</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2">
              <CardContent className="pt-6">
                <Package className="w-8 h-8 text-secondary mb-3" />
                <h3 className="font-semibold text-lg mb-3">Vintage & Rustic Pieces</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Mason jars in various sizes (perfect for wildflower centerpieces)</li>
                  <li>• Vintage tablecloths and fabric runners</li>
                  <li>• Wooden crates and barrels</li>
                  <li>• Antique frames</li>
                  <li>• Old books and vintage suitcases</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6">
                <Sparkles className="w-8 h-8 text-secondary mb-3" />
                <h3 className="font-semibold text-lg mb-3">Ceremony & Reception Décor</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Fabric for ceremony arches</li>
                  <li>• Aisle markers</li>
                  <li>• Sign easels and boards</li>
                  <li>• Lanterns (battery-operated and traditional)</li>
                  <li>• Fairy lights and string lights</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6">
                <Gift className="w-8 h-8 text-secondary mb-3" />
                <h3 className="font-semibold text-lg mb-3">Table Settings</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Centerpiece bases and vessels</li>
                  <li>• Candle holders (various styles)</li>
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
                  <li>• Personalized touches that others have chosen to share</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <p className="text-center mt-8 text-muted-foreground">
            The collection grows with each celebration. What you see today is different from what was here last month. That's the beauty of a living, evolving décor collection.
          </p>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="section section-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <DollarSign className="w-10 h-10 text-secondary" />
              <h2 className="text-3xl md:text-4xl font-bold">Why This Matters More Than You Think</h2>
            </div>

            <p className="text-lg mb-6">
              Most wedding venues charge decoration rental fees. Companies demand deposits. You spend hours on Pinterest, thousands on purchases, and when it's over, you're stuck with bins of stuff you'll never use again.
            </p>

            <div className="bg-secondary/10 p-8 rounded-lg border-2 border-secondary mb-8">
              <p className="text-xl font-bold mb-3">
                Here, you walk into abundance. Ready. Waiting. Free.
              </p>
              <p className="text-muted-foreground">
                Use our treasures. Add your own touches. And when you leave? Consider leaving something behind for the next couple. Because this is how traditions form. This is how wedding venues become sacred spaces. <strong>This is how love compounds.</strong>
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg space-y-4">
              <h3 className="font-semibold">Real savings from real couples:</h3>
              
              <blockquote className="italic text-muted-foreground border-l-4 border-primary pl-4">
                "We brought three items with us. Used twenty from the décor house. Our tables looked like they'd been professionally styled, and we spent maybe $200 total on wedding decorations."
              </blockquote>

              <blockquote className="italic text-muted-foreground border-l-4 border-primary pl-4">
                "I cried in the décor house. Not because it was overwhelming—because I could feel all the love that had been celebrated here before us. It made our Alberta wedding feel connected to something bigger."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Freedom Hub */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="w-10 h-10 text-secondary" />
              <h2 className="text-3xl md:text-4xl font-bold">Your Creative Freedom Hub</h2>
            </div>

            <p className="mb-6 text-lg">
              The Wedding Décor House isn't just storage—it's your creative headquarters during your wedding celebration.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <p><strong>Need a workspace for last-minute crafting?</strong> Come here.</p>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <p><strong>Want to prep centerpieces with your bridesmaids Thursday afternoon?</strong> Perfect.</p>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <p><strong>Looking for that one thing you can't quite visualize until you see it?</strong> It's probably waiting for you here.</p>
              </div>
            </div>

            <p className="text-lg font-medium">
              Think of it as your styling studio, your inspiration space, and your treasure chest all in one.
            </p>

            <p className="text-muted-foreground mt-4">
              For couples booking our 5-day wedding package, the Décor House becomes an integral part of the celebration experience. You have time to explore, experiment, and create without rush.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section section-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">How It Works</h2>

            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Before Your Wedding:</h3>
                <p className="text-muted-foreground">
                  During your property visit, we'll show you the Décor House so you know what's available. Many couples photograph pieces they love and incorporate them into their planning.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">During Your Celebration:</h3>
                <p className="text-muted-foreground">
                  The Décor House is open to you throughout your stay. Come and go as needed. Borrow, return, swap. Everything is yours to use.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">After Your Wedding:</h3>
                <p className="text-muted-foreground">
                  Return what you borrowed. Or, if something spoke to your heart, consider leaving it for the next couple. We'll help coordinate what stays and what goes.
                </p>
              </div>

              <div className="bg-secondary/10 p-6 rounded-lg border-2 border-secondary">
                <h3 className="font-semibold text-lg mb-2">Cost:</h3>
                <p className="text-lg font-bold">
                  Zero. This is included in your wedding package at Rustic Retreat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Come See What's Waiting for You</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Experience the Décor House in person. See the treasures left by couples who came before.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Schedule Your Property Visit
              </Button>
            </Link>
            <Link to="/weddings">
              <Button size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                Plan Your Wedding Weekend
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
