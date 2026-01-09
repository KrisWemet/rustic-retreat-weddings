import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroCeremony from "@/assets/hero-ceremony-space.avif";
import propertyAerial from "@/assets/property-aerial-view.avif";
import propertyLandscape from "@/assets/property-landscape-view.avif";
import galleryCouple from "@/assets/gallery/couple-kiss-meadow.avif";
import galleryReception from "@/assets/gallery/reception-tablescape-gold.avif";
import galleryCeremony from "@/assets/gallery/ceremony-forest-setup.avif";
import galleryArch from "@/assets/gallery/wedding-arch-pavilion.avif";
import galleryGazebo from "@/assets/gallery/gazebo-twinkle-lights.avif";
import galleryPath from "@/assets/gallery/forest-path-photos.avif";
import { Calendar, MapPin, Sparkles, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden mt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroCeremony})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/60 to-primary/70" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal mb-6 animate-fade-in-up text-balance italic">
            A wedding weekend on your own 65-acre retreat
          </h1>
          <p className="text-lg md:text-xl mb-4 max-w-2xl mx-auto animate-fade-in-up text-primary-foreground/90">
            Less rush. More time with your people. Total privacy just outside Edmonton.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8 text-sm text-primary-foreground/80">
            <span>2, 3, 5, and 10-day packages</span>
            <span>•</span>
            <span>Up to 80 guests</span>
            <span>•</span>
            <span>Cabin and gathering spaces</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <Link to="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary-dark text-secondary-foreground text-lg px-8 rounded-full">
                Schedule a Tour
              </Button>
            </Link>
            <Link to="/weddings">
              <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 rounded-full backdrop-blur-sm">
                View Packages & Pricing
              </Button>
            </Link>
          </div>
          <p className="mt-8 text-sm text-primary-foreground/70">
            65 acres · Near Edmonton · Wedding weekend packages · Up to 80 guests
          </p>
        </div>
      </section>

      {/* Real Weddings Gallery */}
      <section className="section bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-label">REAL WEDDINGS</p>
            <h2 className="text-3xl md:text-4xl font-serif">See it in action</h2>
          </div>

          {/* Photo Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            <div className="col-span-2 row-span-2">
              <img 
                src={galleryCouple} 
                alt="Bride and groom sharing a kiss in a wildflower meadow at Rustic Retreat Weddings near Edmonton Alberta"
                className="w-full h-full object-cover rounded-2xl shadow-soft"
              />
            </div>
            <div className="col-span-1">
              <img 
                src={galleryReception} 
                alt="Elegant gold reception tablescape at Rustic Retreat Weddings Alberta venue"
                className="w-full h-full object-cover rounded-2xl shadow-soft"
              />
            </div>
            <div className="col-span-1">
              <img 
                src={galleryCeremony} 
                alt="Forest ceremony setup with natural decorations at Lac La Nonne wedding venue"
                className="w-full h-full object-cover rounded-2xl shadow-soft"
              />
            </div>
            <div className="col-span-1">
              <img 
                src={galleryArch} 
                alt="Wedding arch pavilion decorated for ceremony at Alberta rustic wedding venue"
                className="w-full h-full object-cover rounded-2xl shadow-soft"
              />
            </div>
            <div className="col-span-1">
              <img 
                src={galleryGazebo} 
                alt="Gazebo with twinkle lights for evening wedding reception near Edmonton"
                className="w-full h-full object-cover rounded-2xl shadow-soft"
              />
            </div>
          </div>

          <div className="text-center mt-8">
            <Link to="/gallery">
              <Button variant="outline" className="rounded-full px-8">
                View Full Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Couples Choose Us */}
      <section className="section section-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-label">WHY COUPLES CHOOSE US</p>
            <h2 className="text-3xl md:text-4xl font-serif">Built for your celebration</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="bg-card border-0 shadow-soft hover:shadow-medium transition-shadow">
              <CardContent className="p-8">
                <Calendar className="w-8 h-8 text-secondary mb-4" />
                <h3 className="text-xl font-serif font-semibold mb-3">Wedding Weekend</h3>
                <p className="text-muted-foreground">
                  More time with your people. Less rush. 2, 3, 5, or 10-day packages that let you celebrate your way.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-0 shadow-soft hover:shadow-medium transition-shadow">
              <CardContent className="p-8">
                <MapPin className="w-8 h-8 text-secondary mb-4" />
                <h3 className="text-xl font-serif font-semibold mb-3">Private 65 Acres</h3>
                <p className="text-muted-foreground">
                  Complete privacy just outside Edmonton. Your own retreat. No other events. Just you and your guests.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-0 shadow-soft hover:shadow-medium transition-shadow">
              <CardContent className="p-8">
                <Sparkles className="w-8 h-8 text-secondary mb-4" />
                <h3 className="text-xl font-serif font-semibold mb-3">Blank Canvas</h3>
                <p className="text-muted-foreground">
                  Customize everything. Multiple ceremony locations. Flexible spaces. Make it entirely yours.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-0 shadow-soft hover:shadow-medium transition-shadow">
              <CardContent className="p-8">
                <Users className="w-8 h-8 text-secondary mb-4" />
                <h3 className="text-xl font-serif font-semibold mb-3">Built-In Gathering</h3>
                <p className="text-muted-foreground">
                  Gazebo, firewood, games, treehouse, hammocks, trampoline. Everything to keep your guests happy.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-10">
            <Link to="/contact">
              <Button className="bg-secondary hover:bg-secondary-dark text-secondary-foreground rounded-full px-8">
                Schedule a Tour
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Flexible Pricing */}
      <section className="section bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-label">FLEXIBLE PRICING</p>
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Choose your timeline</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              All packages include ceremony space, gazebo reception, cabin, camping for 60 guests, and all property amenities.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {/* 2-Day */}
            <Card className="bg-card border border-border hover:border-secondary transition-colors">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-serif font-semibold mb-1">2-Day</h3>
                <p className="text-sm text-muted-foreground mb-4">Weekdays only</p>
                <p className="text-3xl font-serif text-secondary mb-4">$3,000</p>
                <Link to="/weddings">
                  <Button variant="outline" size="sm" className="rounded-full">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* 3-Day */}
            <Card className="bg-card border border-border hover:border-secondary transition-colors">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-serif font-semibold mb-1">3-Day</h3>
                <p className="text-sm text-muted-foreground mb-4">Friday–Sunday</p>
                <p className="text-3xl font-serif text-secondary mb-4">$4,500</p>
                <Link to="/weddings">
                  <Button variant="outline" size="sm" className="rounded-full">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* 5-Day */}
            <Card className="bg-card border-2 border-secondary relative">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-serif font-semibold mb-1">5-Day</h3>
                <p className="text-sm text-muted-foreground mb-4">Setup + Event + Teardown</p>
                <p className="text-3xl font-serif text-secondary mb-4">$5,500</p>
                <Link to="/weddings">
                  <Button variant="outline" size="sm" className="rounded-full">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* 10-Day */}
            <Card className="bg-card border border-border hover:border-secondary transition-colors">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-serif font-semibold mb-1">10-Day</h3>
                <p className="text-sm text-muted-foreground mb-4">Ultimate experience</p>
                <p className="text-3xl font-serif text-secondary mb-4">$8,500</p>
                <Link to="/weddings">
                  <Button variant="outline" size="sm" className="rounded-full">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-10">
            <Link to="/weddings">
              <Button className="bg-secondary hover:bg-secondary-dark text-secondary-foreground rounded-full px-8">
                View Full Packages & What's Included
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Peace of Mind / FAQ Preview */}
      <section className="section section-cream">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <p className="section-label">PEACE OF MIND</p>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">Logistics made simple</h2>
              
              <p className="text-muted-foreground mb-6">
                We've thought through the details so you don't have to. Here are answers to the questions every couple asks.
              </p>

              <div className="space-y-4">
                <div className="bg-card p-4 rounded-xl shadow-soft">
                  <h3 className="font-semibold mb-1">What if it rains?</h3>
                  <p className="text-sm text-muted-foreground">We have backup plans for every scenario.</p>
                </div>
                <div className="bg-card p-4 rounded-xl shadow-soft">
                  <h3 className="font-semibold mb-1">Where do guests stay?</h3>
                  <p className="text-sm text-muted-foreground">Camping on-site for 60, plus nearby accommodations.</p>
                </div>
                <div className="bg-card p-4 rounded-xl shadow-soft">
                  <h3 className="font-semibold mb-1">Can you fit 80 guests?</h3>
                  <p className="text-sm text-muted-foreground">Absolutely—comfortably, with room to breathe.</p>
                </div>
              </div>

              <div className="mt-8">
                <Link to="/faqs">
                  <Button variant="outline" className="rounded-full px-8">
                    View All FAQs
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img 
                src={propertyAerial} 
                alt="Aerial view of Rustic Retreat Weddings 65-acre private property near Edmonton Alberta"
                className="w-full h-48 object-cover rounded-2xl shadow-soft"
              />
              <img 
                src={galleryPath} 
                alt="Forest path for wedding photos at Rustic Retreat Weddings Alberta"
                className="w-full h-48 object-cover rounded-2xl shadow-soft"
              />
              <img 
                src={propertyLandscape} 
                alt="Landscape view of Rustic Retreat Weddings venue near Lac La Nonne Alberta"
                className="w-full h-48 object-cover rounded-2xl shadow-soft col-span-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6 italic">Come see it in person</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Most couples know in 10 minutes if Rustic Retreat is their place. Let's find out if it's yours.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-secondary hover:bg-secondary-dark text-secondary-foreground text-lg px-10 rounded-full">
              Schedule a Tour
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
