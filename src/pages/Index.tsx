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
                Walk the Land With Us
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
                Cabin sleeps 4. Camping for 50+. Everyone stays together, all weekend long.
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

      {/* Social Proof - Enhanced Testimonials */}
      <section className="section section-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-label">REAL COUPLES, REAL WORDS</p>
            <h2 className="text-3xl md:text-4xl font-serif mb-4">This is what they remember</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-card p-8 rounded-2xl shadow-soft">
              <Quote className="w-8 h-8 text-secondary/40 mb-4" />
              <blockquote className="text-lg font-serif italic text-primary leading-relaxed mb-6">
                "We didn't just have a wedding—we had four days of the best memories of our lives. 
                Our guests still talk about it two years later."
              </blockquote>
              <p className="text-muted-foreground font-medium">— Sarah & Michael, June 2024</p>
            </div>
            
            <div className="bg-card p-8 rounded-2xl shadow-soft">
              <Quote className="w-8 h-8 text-secondary/40 mb-4" />
              <blockquote className="text-lg font-serif italic text-primary leading-relaxed mb-6">
                "My grandmother played cards with my college friends until midnight. My dad and his brothers 
                went fishing at dawn. That never happens at a 6-hour wedding."
              </blockquote>
              <p className="text-muted-foreground font-medium">— Amanda & Josh, August 2024</p>
            </div>
            
            <div className="bg-card p-8 rounded-2xl shadow-soft">
              <Quote className="w-8 h-8 text-secondary/40 mb-4" />
              <blockquote className="text-lg font-serif italic text-primary leading-relaxed mb-6">
                "We budgeted $40,000 for our venue and couldn't believe when we found this. 
                More time, more magic, more memories—for a fraction of the cost."
              </blockquote>
              <p className="text-muted-foreground font-medium">— Priya & Daniel, September 2024</p>
            </div>
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
            <p className="text-muted-foreground text-sm mt-4">
              Only 12-15 weddings per season · 3-day reset between celebrations
            </p>
          </div>
        </div>
      </section>

      {/* Price Anchoring - The Math Section */}
      <section className="section section-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="section-label">THE MATH THAT CHANGES EVERYTHING</p>
              <h2 className="text-3xl md:text-4xl font-serif mb-4">
                What most Alberta couples spend
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-card p-8 rounded-2xl shadow-soft border-2 border-muted">
                <h3 className="text-xl font-serif font-semibold mb-4 text-muted-foreground">Traditional Venue</h3>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li className="flex justify-between">
                    <span>Venue rental (6 hours)</span>
                    <span className="font-semibold">$5,000–$15,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Table & chair rentals</span>
                    <span className="font-semibold">$1,500–$3,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Décor rentals</span>
                    <span className="font-semibold">$2,000–$5,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Hotel block (guests)</span>
                    <span className="font-semibold">$3,000–$8,000</span>
                  </li>
                  <li className="flex justify-between border-t pt-3 text-primary font-bold">
                    <span>Venue-related costs</span>
                    <span>$15,000–$35,000</span>
                  </li>
                </ul>
                <p className="text-center text-2xl font-serif text-muted-foreground">
                  ~$2,500/hour of celebration
                </p>
              </div>

              <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 p-8 rounded-2xl shadow-medium border-2 border-secondary">
                <h3 className="text-xl font-serif font-semibold mb-4 text-secondary">Rustic Retreat (5-Day)</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex justify-between">
                    <span>Exclusive 65-acre venue (108 hours)</span>
                    <span className="font-semibold text-secondary">Included</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Tables & benches for 80</span>
                    <span className="font-semibold text-secondary">Included</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Full décor collection</span>
                    <span className="font-semibold text-secondary">Included</span>
                  </li>
                  <li className="flex justify-between">
                    <span>60-guest accommodation</span>
                    <span className="font-semibold text-secondary">Included</span>
                  </li>
                  <li className="flex justify-between border-t pt-3 font-bold">
                    <span>Complete package</span>
                    <span className="text-secondary">$5,500</span>
                  </li>
                </ul>
                <p className="text-center text-2xl font-serif text-secondary">
                  ~$51/hour of celebration
                </p>
              </div>
            </div>

            <div className="text-center mt-10">
              <p className="text-lg text-muted-foreground mb-6">
                That's not a typo. <span className="font-semibold text-primary">50x more time together for a fraction of the cost.</span>
              </p>
              <Link to="/contact">
                <Button className="bg-gradient-to-r from-rosegold-light via-rosegold to-rosegold-dark hover:from-rosegold hover:via-rosegold-dark hover:to-rosegold text-white rounded-full px-8 shadow-elegant transition-all duration-300">
                  See It For Yourself
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Guests Text After */}
      <section className="section bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="section-label">THE TEXTS YOU'LL RECEIVE</p>
            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              What your guests say <span className="italic">after</span>
            </h2>
            <p className="text-muted-foreground">
              This is what happens when your wedding guests actually have time to connect.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            <div className="bg-card p-5 rounded-2xl shadow-soft border-l-4 border-secondary">
              <p className="text-sm italic mb-2">"Your mom and I became best friends over that bonfire. We're having lunch next week."</p>
              <p className="text-xs text-muted-foreground">— Bride's college roommate</p>
            </div>
            <div className="bg-card p-5 rounded-2xl shadow-soft border-l-4 border-secondary">
              <p className="text-sm italic mb-2">"I've been to 20+ weddings. This is the only one where I actually talked to everyone."</p>
              <p className="text-xs text-muted-foreground">— Groom's uncle</p>
            </div>
            <div className="bg-card p-5 rounded-2xl shadow-soft border-l-4 border-secondary">
              <p className="text-sm italic mb-2">"My kids are still talking about the trampoline and catching frogs. Best wedding ever."</p>
              <p className="text-xs text-muted-foreground">— Bride's cousin</p>
            </div>
            <div className="bg-card p-5 rounded-2xl shadow-soft border-l-4 border-secondary">
              <p className="text-sm italic mb-2">"We didn't want to leave. Like, genuinely did not want to pack up Monday morning."</p>
              <p className="text-xs text-muted-foreground">— College friend group</p>
            </div>
            <div className="bg-card p-5 rounded-2xl shadow-soft border-l-4 border-secondary">
              <p className="text-sm italic mb-2">"The sunrise yoga, the midnight s'mores... when's the 1-year reunion?"</p>
              <p className="text-xs text-muted-foreground">— Bridesmaid</p>
            </div>
            <div className="bg-card p-5 rounded-2xl shadow-soft border-l-4 border-secondary">
              <p className="text-sm italic mb-2">"This is what weddings should be. More life, less production."</p>
              <p className="text-xs text-muted-foreground">— Father of the bride</p>
            </div>
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
                    Our clear-top gazebo seats 80 for covered celebrations. The cabin has a cozy indoor backup. Alberta weather has never ruined a wedding here.
                  </p>
                </div>
                <div className="bg-card p-5 rounded-xl shadow-soft">
                  <h3 className="font-semibold mb-2">Where do guests sleep & shower?</h3>
                  <p className="text-sm text-muted-foreground">
                    The cabin sleeps 4 with full bathrooms. We have 15 campsites with shower facilities ready for 2026 season. Half a dozen Airbnbs sit 5 minutes away around the lake, and RVezy.com can deliver trailers directly to your campsites.
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
              <Button size="lg" className="bg-gradient-to-r from-rosegold-light via-rosegold to-rosegold-dark hover:from-rosegold hover:via-rosegold-dark hover:to-rosegold text-white text-lg px-12 py-6 rounded-full shadow-elegant transition-all duration-300">
                Walk the Land With Us
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-transparent border-white/40 text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full">
                Questions? Let's Chat First
              </Button>
            </Link>
          </div>
          <p className="text-primary-foreground/60 text-sm mt-8">
            Tours available weekdays and weekends by appointment · Response within 24 hours
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
