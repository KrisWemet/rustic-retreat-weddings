import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Hero & Property Images
import heroCeremony from "@/assets/hero-ceremony-space.avif";
import propertyAerial from "@/assets/property-aerial-view.avif";
import propertyLandscape from "@/assets/property-landscape-view.avif";
import cabinExterior from "@/assets/cabin-exterior-forest.avif";
import receptionGazebo from "@/assets/reception-gazebo-evening.avif";

// Gallery Images for Storytelling
import galleryCouple from "@/assets/gallery/couple-kiss-meadow.avif";
import galleryReception from "@/assets/gallery/reception-tablescape-gold.avif";
import galleryCeremony from "@/assets/gallery/ceremony-forest-setup.avif";
import galleryArch from "@/assets/gallery/wedding-arch-pavilion.avif";
import galleryGazebo from "@/assets/gallery/gazebo-twinkle-lights.avif";
import galleryPath from "@/assets/gallery/forest-path-photos.avif";
import firstDance from "@/assets/gallery/first-dance-sparklers.jpg";
import veilKiss from "@/assets/gallery/veil-kiss-romantic.jpg";
import sunsetPortraits from "@/assets/gallery/sunset-clearing-portraits.avif";
import weddingParty from "@/assets/gallery/wedding-party-group.jpg";
import birchAltar from "@/assets/gallery/birch-grove-altar.avif";
import meadowKiss from "@/assets/gallery/meadow-sunset-kiss.jpg";

import { Calendar, MapPin, Sparkles, Users, Heart, TreePine, Sun, Quote } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section - Immersive & Emotional */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroCeremony})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/70" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground pt-20">
          <p className="text-sm md:text-base uppercase tracking-[0.3em] mb-6 text-primary-foreground/80 animate-fade-in">
            65 Private Acres · Near Edmonton · Your Weekend, Your Way
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-normal mb-8 animate-fade-in-up text-balance leading-tight">
            <span className="italic">Imagine</span> a wedding weekend<br className="hidden md:block" />
            where time slows down
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto animate-fade-in-up text-primary-foreground/90 leading-relaxed">
            No rushing between venues. No goodbyes after the reception. Just you, your people, and 65 acres of 
            forest and meadow—for as many days as you want.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up mb-12">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-rosegold-light via-rosegold to-rosegold-dark hover:from-rosegold hover:via-rosegold-dark hover:to-rosegold text-white text-lg px-10 py-6 rounded-full shadow-elegant transition-all duration-300">
                Schedule Your Tour
              </Button>
            </Link>
            <Link to="/weddings">
              <Button size="lg" variant="outline" className="bg-white/10 border-white/40 text-white hover:bg-white/20 text-lg px-10 py-6 rounded-full backdrop-blur-sm">
                View Packages
              </Button>
            </Link>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-1">
              <div className="w-1.5 h-3 bg-white/60 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Value Proposition */}
      <section className="section bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">
              This isn't just a venue.<br />
              <span className="italic text-secondary">It's the feeling of being home.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Picture morning coffee on the cabin porch with your bridesmaids. An afternoon lawn game tournament 
              that turns legendary. Your grandmother in a rocking chair, watching your flower girl chase butterflies. 
              A sparkler exit that melts into a bonfire under the stars—with nowhere else to be.
            </p>
          </div>

          {/* Cinematic Image Row */}
          <div className="grid grid-cols-3 gap-2 md:gap-4 max-w-6xl mx-auto">
            <img 
              src={veilKiss} 
              alt="Intimate bridal moment at Rustic Retreat Weddings"
              className="w-full h-48 md:h-72 object-cover rounded-2xl shadow-soft"
            />
            <img 
              src={galleryCouple} 
              alt="Bride and groom in wildflower meadow at sunset"
              className="w-full h-48 md:h-72 object-cover rounded-2xl shadow-soft"
            />
            <img 
              src={firstDance} 
              alt="First dance with sparklers at Rustic Retreat Alberta"
              className="w-full h-48 md:h-72 object-cover rounded-2xl shadow-soft"
            />
          </div>
        </div>
      </section>

      {/* Experience Highlights - Full Bleed */}
      <section className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${propertyAerial})` }}
        >
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="section-label text-primary-foreground/70">THE EXPERIENCE</p>
            <h2 className="text-3xl md:text-5xl font-serif text-primary-foreground mb-4">
              Everything you need. Nothing you don't.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center">
              <Calendar className="w-10 h-10 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-serif font-semibold mb-3 text-primary-foreground">2–10 Day Packages</h3>
              <p className="text-primary-foreground/80 text-sm">
                Celebrate at your pace. Setup, ceremony, reception, and memories—with time to spare.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center">
              <MapPin className="w-10 h-10 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-serif font-semibold mb-3 text-primary-foreground">65 Private Acres</h3>
              <p className="text-primary-foreground/80 text-sm">
                Forest, meadows, and a private lake. Complete seclusion just 45 minutes from Edmonton.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center">
              <Users className="w-10 h-10 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-serif font-semibold mb-3 text-primary-foreground">Up to 80 Guests</h3>
              <p className="text-primary-foreground/80 text-sm">
                Cabin sleeps 10. Camping for 50+. Everyone stays together, all weekend long.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center">
              <Sparkles className="w-10 h-10 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-serif font-semibold mb-3 text-primary-foreground">Free Décor Library</h3>
              <p className="text-primary-foreground/80 text-sm">
                Our Wedding Décor House has everything. Arches, linens, lanterns—all included.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/about">
              <Button variant="outline" className="bg-transparent border-white/40 text-white hover:bg-white/10 rounded-full px-8">
                Explore the Property
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Real Weddings Gallery - Storytelling Grid */}
      <section className="section bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-label">REAL LOVE STORIES</p>
            <h2 className="text-3xl md:text-4xl font-serif mb-4">See yourself here</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Every couple brings their own magic. Here's a glimpse of what's possible.
            </p>
          </div>

          {/* Masonry-style Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto">
            <div className="col-span-2 row-span-2">
              <img 
                src={meadowKiss} 
                alt="Romantic sunset kiss in meadow at Alberta wedding venue"
                className="w-full h-full object-cover rounded-2xl shadow-soft hover:shadow-medium transition-shadow"
              />
            </div>
            <img 
              src={galleryReception} 
              alt="Elegant gold reception table setting"
              className="w-full h-full object-cover rounded-2xl shadow-soft hover:shadow-medium transition-shadow aspect-square"
            />
            <img 
              src={birchAltar} 
              alt="Birch grove ceremony altar"
              className="w-full h-full object-cover rounded-2xl shadow-soft hover:shadow-medium transition-shadow aspect-square"
            />
            <img 
              src={galleryGazebo} 
              alt="Gazebo with twinkle lights at night"
              className="w-full h-full object-cover rounded-2xl shadow-soft hover:shadow-medium transition-shadow aspect-square"
            />
            <img 
              src={weddingParty} 
              alt="Wedding party group photo"
              className="w-full h-full object-cover rounded-2xl shadow-soft hover:shadow-medium transition-shadow aspect-square"
            />
          </div>

          <div className="text-center mt-10">
            <Link to="/gallery">
              <Button className="bg-secondary hover:bg-secondary-dark text-secondary-foreground rounded-full px-8">
                View Full Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof - Testimonial */}
      <section className="section section-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="w-12 h-12 text-secondary/40 mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl font-serif italic text-primary leading-relaxed mb-8">
              "We didn't just have a wedding—we had four days of the best memories of our lives. 
              Our guests still talk about it two years later."
            </blockquote>
            <p className="text-muted-foreground font-medium">— Sarah & Michael, June 2024</p>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="section bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-label">TRANSPARENT PRICING</p>
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Choose your timeline</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              All packages include exclusive use of 65 acres, the cabin, gazebo, ceremony spaces, camping, 
              and access to our full décor collection.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <Card className="bg-card border border-border hover:border-secondary transition-all hover:shadow-medium group">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-serif font-semibold mb-1">2-Day</h3>
                <p className="text-xs text-muted-foreground mb-4">Weekdays</p>
                <p className="text-3xl font-serif text-secondary mb-1">$3,000</p>
                <p className="text-xs text-muted-foreground mb-4">Perfect for intimate elopements</p>
              </CardContent>
            </Card>

            <Card className="bg-card border border-border hover:border-secondary transition-all hover:shadow-medium group">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-serif font-semibold mb-1">3-Day</h3>
                <p className="text-xs text-muted-foreground mb-4">Fri–Sun</p>
                <p className="text-3xl font-serif text-secondary mb-1">$4,500</p>
                <p className="text-xs text-muted-foreground mb-4">Our most popular choice</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-2 border-secondary relative shadow-medium">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-full">
                Best Value
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-serif font-semibold mb-1">5-Day</h3>
                <p className="text-xs text-muted-foreground mb-4">Wed–Sun</p>
                <p className="text-3xl font-serif text-secondary mb-1">$5,500</p>
                <p className="text-xs text-muted-foreground mb-4">Setup + celebration + recovery</p>
              </CardContent>
            </Card>

            <Card className="bg-card border border-border hover:border-secondary transition-all hover:shadow-medium group">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-serif font-semibold mb-1">10-Day</h3>
                <p className="text-xs text-muted-foreground mb-4">Full experience</p>
                <p className="text-3xl font-serif text-secondary mb-1">$8,500</p>
                <p className="text-xs text-muted-foreground mb-4">The ultimate retreat</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-10">
            <Link to="/weddings">
              <Button className="bg-secondary hover:bg-secondary-dark text-secondary-foreground rounded-full px-8">
                View Full Package Details
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Preview - Address Objections */}
      <section className="section section-cream">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <p className="section-label">PEACE OF MIND</p>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">
                We've thought of everything
              </h2>
              <p className="text-muted-foreground mb-8">
                Planning a wedding is stressful enough. We've solved the logistics so you can focus on what matters.
              </p>

              <div className="space-y-4">
                <div className="bg-card p-5 rounded-xl shadow-soft">
                  <h3 className="font-semibold mb-2">What if it rains?</h3>
                  <p className="text-sm text-muted-foreground">
                    Our gazebo seats 80 with sides that roll down. The cabin has a cozy indoor backup. Alberta weather has never ruined a wedding here.
                  </p>
                </div>
                <div className="bg-card p-5 rounded-xl shadow-soft">
                  <h3 className="font-semibold mb-2">Where do guests sleep & shower?</h3>
                  <p className="text-sm text-muted-foreground">
                    The cabin sleeps 10 with full bathrooms. We have 15 campsites with shower facilities on-site. Hotels are 15 minutes away.
                  </p>
                </div>
                <div className="bg-card p-5 rounded-xl shadow-soft">
                  <h3 className="font-semibold mb-2">Can we bring our own vendors?</h3>
                  <p className="text-sm text-muted-foreground">
                    Absolutely! We're a blank canvas. Bring your caterer, photographer, DJ—whoever you love.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Link to="/faqs">
                  <Button variant="outline" className="rounded-full px-8">
                    See All FAQs
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <img 
                src={cabinExterior} 
                alt="Cozy cabin exterior at Rustic Retreat Weddings"
                className="w-full h-40 md:h-52 object-cover rounded-2xl shadow-soft"
              />
              <img 
                src={receptionGazebo} 
                alt="Evening reception in the gazebo with string lights"
                className="w-full h-40 md:h-52 object-cover rounded-2xl shadow-soft"
              />
              <img 
                src={sunsetPortraits} 
                alt="Couple portraits at sunset in forest clearing"
                className="w-full h-40 md:h-52 object-cover rounded-2xl shadow-soft col-span-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Emotional Close */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${galleryPath})` }}
        >
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <Heart className="w-10 h-10 text-secondary mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-serif text-primary-foreground mb-6 italic">
            Come see if it feels like home
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            Most couples know within 10 minutes of walking the property. Let's find out if Rustic Retreat is your place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary-dark text-secondary-foreground text-lg px-12 py-6 rounded-full shadow-elegant">
                Schedule Your Tour
              </Button>
            </Link>
          </div>
          <p className="text-primary-foreground/60 text-sm mt-8">
            Tours available weekends and by appointment · Response within 24 hours
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
