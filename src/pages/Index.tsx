import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroCeremony from "@/assets/hero-ceremony-space.avif";
import propertyAerial from "@/assets/property-aerial-view.avif";
import receptionEvening from "@/assets/reception-gazebo-evening.avif";
import { CheckCircle, MapPin, Users, Calendar, Home, Trees, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden mt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroCeremony})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/80" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up text-balance">
            Where Your Wedding Becomes a Weekend to Remember
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-up text-primary-foreground/90">
            An intimate 65-acre Alberta retreat where celebrations unfold naturally, love stories take center stage, and your guests become part of something truly unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <Link to="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-lg px-8">
                Schedule Your Property Visit
              </Button>
            </Link>
            <Link to="/weddings">
              <Button size="lg" variant="outline-light" className="text-lg px-8">
                View Wedding Packages
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* At a Glance */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Rustic Retreat Wedding At a Glance</h2>
            <p className="text-muted-foreground text-lg">Everything you need for an unforgettable celebration</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 hover:border-secondary transition-colors">
              <CardContent className="pt-6 text-center">
                <MapPin className="w-10 h-10 mx-auto mb-3 text-secondary" />
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-sm text-muted-foreground">99 km NW of Edmonton near Lac La Nonne</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-colors">
              <CardContent className="pt-6 text-center">
                <Users className="w-10 h-10 mx-auto mb-3 text-secondary" />
                <h3 className="font-semibold mb-2">Capacity</h3>
                <p className="text-sm text-muted-foreground">80 ceremony guests, 60 overnight camping</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-colors">
              <CardContent className="pt-6 text-center">
                <Trees className="w-10 h-10 mx-auto mb-3 text-secondary" />
                <h3 className="font-semibold mb-2">Property</h3>
                <p className="text-sm text-muted-foreground">65 private acres of Alberta wilderness</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-colors">
              <CardContent className="pt-6 text-center">
                <Calendar className="w-10 h-10 mx-auto mb-3 text-secondary" />
                <h3 className="font-semibold mb-2">Season</h3>
                <p className="text-sm text-muted-foreground">June through September celebrations</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Package Overview */}
      <section className="section section-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Two Paths to Your Perfect Celebration</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The question isn't where—it's how many days you give yourself to do this right
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* 3-Day Package */}
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-3">The 3-Day Weekend Wedding</h3>
                <p className="text-lg text-muted-foreground mb-4">Friday 8am - Sunday 8pm</p>
                
                <p className="mb-6">
                  The classic weekend wedding, elevated. Your guests arrive Friday morning with the whole day ahead of them. Saturday is your ceremony and celebration. Sunday becomes the leisurely goodbye no one wants to have.
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">60 hours together instead of 6</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Budget-friendly pricing</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Defined timeline for traveling guests</span>
                  </div>
                </div>

                <Link to="/weddings">
                  <Button variant="outline" className="w-full">Learn More</Button>
                </Link>
              </CardContent>
            </Card>

            {/* 5-Day Package */}
            <Card className="border-2 border-secondary hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium mb-3">
                  ⭐ Most Chosen
                </div>
                <h3 className="text-2xl font-bold mb-3">The 5-Day Celebration</h3>
                <p className="text-lg text-muted-foreground mb-4">Thursday 8am - Monday 8pm</p>
                
                <p className="mb-6">
                  Your wedding happens on Saturday, but you get two full days before to settle in, bond, and build anticipation, plus a recovery day after when no one has to rush home. This is what couples rave about.
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">108 hours of shared life</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Guests bond before your ceremony</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Recovery day included</span>
                  </div>
                </div>

                <Link to="/weddings">
                  <Button className="w-full bg-secondary hover:bg-secondary/90">Explore 5-Day Package</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Different Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={propertyAerial} 
                alt="Aerial view of Rustic Retreat Weddings 65-acre private wedding property near Edmonton Alberta with forest meadows and ceremony spaces"
                className="rounded-lg shadow-xl"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Rustic Retreat is Different</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-secondary" />
                    Your Weekend, Your Way
                  </h3>
                  <p className="text-muted-foreground">
                    No cookie-cutter weddings. Want sunrise yoga before vows? A lawn games tournament? Pancake breakfast in pajamas? This is your home for the weekend—fill it with joy.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <Trees className="w-5 h-5 text-secondary" />
                    Nature as Your Co-Host
                  </h3>
                  <p className="text-muted-foreground">
                    Towering pines, groomed forest trails, sunsets that paint the sky, and silence so peaceful you can hear your own joy. 65 acres of Alberta's natural beauty.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <Home className="w-5 h-5 text-secondary" />
                    Affordable Luxury
                  </h3>
                  <p className="text-muted-foreground">
                    A breathtaking venue, accommodations for 60, tables, benches, décor, and coordination—without the $10,000+ price tag of traditional Edmonton venues.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Link to="/about">
                  <Button size="lg" variant="outline">Discover Our Story</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Waiting */}
      <section className="section section-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What's Waiting for You</h2>
            <p className="text-muted-foreground text-lg">Beyond the ceremony and reception</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <Home className="w-8 h-8 text-secondary mb-3" />
                <h3 className="font-semibold mb-2">The Cabin</h3>
                <p className="text-sm text-muted-foreground">
                  Your private newlywed retreat with off-grid solar power and forest views
                </p>
                <Link to="/cabin" className="text-sm text-primary hover:underline mt-2 inline-block">
                  Learn more →
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Sparkles className="w-8 h-8 text-secondary mb-3" />
                <h3 className="font-semibold mb-2">Wedding Décor House</h3>
                <p className="text-sm text-muted-foreground">
                  Curated collection of decorations from past celebrations—free to use
                </p>
                <Link to="/decor" className="text-sm text-primary hover:underline mt-2 inline-block">
                  Explore décor →
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Trees className="w-8 h-8 text-secondary mb-3" />
                <h3 className="font-semibold mb-2">Groomed Trails</h3>
                <p className="text-sm text-muted-foreground">
                  Perfect for morning coffee walks or sunset strolls through Alberta wilderness
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Users className="w-8 h-8 text-secondary mb-3" />
                <h3 className="font-semibold mb-2">Outdoor Games</h3>
                <p className="text-sm text-muted-foreground">
                  Giant Jenga, Cornhole, Bocce Ball, Badminton, trampoline, and treehouse
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Calendar className="w-8 h-8 text-secondary mb-3" />
                <h3 className="font-semibold mb-2">Clear-Top Gazebo</h3>
                <p className="text-sm text-muted-foreground">
                  Where the stars attend your celebration under Alberta's night sky
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <MapPin className="w-8 h-8 text-secondary mb-3" />
                <h3 className="font-semibold mb-2">65 Private Acres</h3>
                <p className="text-sm text-muted-foreground">
                  Where your guests can wander, breathe, and just be themselves
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Three-Day Reset */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why We Book With Three Days Between Weddings</h2>
              
              <p className="text-lg mb-4">
                We give ourselves a minimum of <strong>3 full days</strong> between every wedding. Always.
              </p>

              <p className="mb-6 text-muted-foreground">
                Other Alberta wedding venues flip celebrations like pancakes—ceremony ends at 5, next setup starts at 7. We refuse to rush magic. The grass recovers. The energy settles. We prepare for YOUR weekend specifically, not just slot you into a generic timeblock.
              </p>

              <div className="bg-muted/50 p-6 rounded-lg border-l-4 border-secondary mb-6">
                <p className="font-medium mb-2">
                  You'll never arrive to tired grass, rushed setup, or someone else's scattered confetti.
                </p>
                <p className="text-muted-foreground text-sm">
                  When you check in at 8am, Rustic Retreat looks like it's been waiting just for you. Because it has been.
                </p>
              </div>

              <p className="text-muted-foreground">
                This is what happens when a venue chooses couples over volume. When quality matters more than quantity. When your celebration gets the attention it deserves.
              </p>
            </div>

            <div>
              <img 
                src={receptionEvening} 
                alt="Evening wedding reception under illuminated clear-top gazebo at Rustic Retreat Weddings Alberta venue near Lac La Nonne"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Start Planning Your Wedding Weekend</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            We don't let couples book until they visit the property. We want you certain, not just convinced.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Schedule Your Property Visit
              </Button>
            </Link>
            <Link to="/weddings">
              <Button size="lg" variant="outline-light" className="text-lg px-8">
                View Wedding Packages
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
