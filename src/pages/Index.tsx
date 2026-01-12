import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";
import HoverImage from "@/components/HoverImage";

// Hero & Property Images
import heroCeremony from "@/assets/hero-ceremony-space.avif";
import propertyAerial from "@/assets/property-aerial-view.avif";
import cabinExterior from "@/assets/cabin-exterior-forest.avif";
import receptionGazebo from "@/assets/reception-gazebo-evening.avif";

// Gallery Images for Storytelling
import galleryCouple from "@/assets/gallery/couple-kiss-meadow.avif";
import galleryReception from "@/assets/gallery/reception-tablescape-gold.avif";
import galleryGazebo from "@/assets/gallery/gazebo-twinkle-lights.avif";
import galleryPath from "@/assets/gallery/forest-path-photos.avif";
import firstDance from "@/assets/gallery/first-dance-sparklers.jpg";
import veilKiss from "@/assets/gallery/veil-kiss-romantic.jpg";
import sunsetPortraits from "@/assets/gallery/sunset-clearing-portraits.avif";
import weddingParty from "@/assets/gallery/wedding-party-group.jpg";
import birchAltar from "@/assets/gallery/birch-grove-altar.avif";
import meadowKiss from "@/assets/gallery/meadow-sunset-kiss.jpg";
import { Calendar, MapPin, Sparkles, Users, Heart, Quote, Star, CheckCircle2, Play, Volume2, VolumeX } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
const Index = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const {
    ref: videoSectionRef,
    isVisible: isVideoVisible
  } = useScrollAnimation({
    threshold: 0.3,
    triggerOnce: false
  });
  useEffect(() => {
    if (videoRef.current) {
      if (isVideoVisible) {
        videoRef.current.play().catch(() => {
          // Autoplay was prevented, that's okay
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVideoVisible]);
  return <PageTransition>
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section - Immersive & Emotional */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: `url(${heroCeremony})`
        }}>
          <div className="absolute inset-0 bg-gradient-to-b from-primary/55 via-primary/45 to-primary/65" />
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground pt-20">
            <div className="bg-primary/20 backdrop-blur-sm rounded-3xl py-10 md:py-14 px-6 md:px-12 max-w-4xl mx-auto">
              <p className="text-sm md:text-base uppercase tracking-[0.3em] mb-6 text-primary-foreground/90 opacity-0 animate-hero-fade-in [text-shadow:_0_2px_12px_rgba(0,0,0,0.6)]">
                65 Private Acres · Just North of Edmonton · Your Weekend, Your Way
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-normal mb-8 opacity-0 animate-hero-fade-in text-balance leading-tight [text-shadow:_0_2px_8px_rgba(0,0,0,0.6),_0_4px_24px_rgba(0,0,0,0.4)]">
                <span className="italic">Imagine</span> a wedding weekend<br className="hidden md:block" />
                where time slows down
              </h1>
              <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto opacity-0 animate-hero-fade-in text-primary-foreground/95 leading-relaxed [text-shadow:_0_2px_12px_rgba(0,0,0,0.6)]">
                No rushing between venues. No goodbyes after the reception. Just you, your people, 
                and endless forest and meadow—for as many days as you want.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="opacity-0 animate-hero-fade-in-delayed">
                  <Button size="lg" className="bg-gradient-to-r from-rosegold-light via-rosegold to-rosegold-dark hover:from-rosegold hover:via-rosegold-dark hover:to-rosegold text-white text-lg px-10 py-6 rounded-full shadow-elegant transition-all duration-300 hover:shadow-xl hover:scale-105">
                    Book Your Tour
                  </Button>
                </Link>
                <Link to="/packages" className="opacity-0 animate-hero-fade-in-delayed">
                  <Button size="lg" variant="outline" className="bg-white/10 border-[hsl(15,50%,75%)] text-white hover:bg-white/20 text-lg px-10 py-6 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105">
                    View Packages
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Bar */}
        <section className="py-6 bg-secondary/10 border-y border-secondary/20">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm">
              
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-secondary fill-secondary" />
                <span className="text-muted-foreground"><strong className="text-foreground">5.0 rating</strong> from couples</span>
              </div>
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium">2026 Season: Limited dates remaining</span>
              </div>
            </div>
          </div>
        </section>

        {/* Emotional Value Proposition */}
        <section className="section bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">
                  This isn't just a venue.<br />
                  <span className="italic text-secondary">It's the feeling of being home.</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                  Picture morning coffee on the cabin porch with your bridesmaids. An afternoon lawn game tournament 
                  that turns legendary. Your grandmother watching your flower girl chase butterflies. 
                  A sparkler exit that melts into a bonfire under the stars—with nowhere else to be.
                </p>
              </div>
            </ScrollReveal>

            {/* Cinematic Image Row */}
            <div className="grid grid-cols-3 gap-2 md:gap-4 max-w-6xl mx-auto">
              <ScrollReveal delay={0}>
                <HoverImage 
                  src={veilKiss} 
                  alt="Intimate bridal veil kiss moment at Rustic Retreat Weddings Alberta" 
                  description="A stolen moment—the intimacy of a veil kiss in dappled forest light"
                  category="Ceremony"
                  className="h-48 md:h-72 shadow-soft"
                />
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <HoverImage 
                  src={galleryCouple} 
                  alt="Bride and groom romantic kiss in wildflower meadow at sunset near Edmonton" 
                  description="Golden hour in the meadow—when the light is just right"
                  category="Portraits"
                  className="h-48 md:h-72 shadow-soft"
                />
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <HoverImage 
                  src={firstDance} 
                  alt="First dance with sparklers at Rustic Retreat Alberta wedding venue" 
                  description="Magic happens here—sparklers light up an unforgettable first dance"
                  category="Reception"
                  className="h-48 md:h-72 shadow-soft"
                />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto text-center mb-8">
                <p className="section-label">EXPERIENCE THE PROPERTY</p>
                <h2 className="text-3xl md:text-4xl font-serif mb-4">
                  Take a virtual walk with us
                </h2>
                <p className="text-muted-foreground">
                  See the gazebo, ceremony spaces, and where the magic happens.
                </p>
              </div>
            </ScrollReveal>
            
            <div ref={videoSectionRef} className="max-w-4xl mx-auto">
              <div className="relative overflow-hidden shadow-xl group">
                <video ref={videoRef} muted={isMuted} loop playsInline className="w-full h-auto" src="/videos/venue-tour.mp4" poster={receptionGazebo} />
                {/* Sound toggle button */}
                <button onClick={() => setIsMuted(!isMuted)} className="absolute bottom-4 right-4 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110" aria-label={isMuted ? "Unmute video" : "Mute video"}>
                  {isMuted ? <VolumeX className="w-5 h-5 text-primary" /> : <Volume2 className="w-5 h-5 text-primary" />}
                </button>
                {/* Fullscreen button */}
                <button onClick={() => setIsVideoOpen(true)} className="absolute bottom-4 left-4 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110" aria-label="Play fullscreen">
                  <Play className="w-5 h-5 text-primary ml-0.5" fill="currentColor" />
                </button>
              </div>
              <p className="text-center text-muted-foreground text-sm mt-4">
                Video plays automatically • Click speaker to unmute
              </p>
            </div>
          </div>
        </section>

        {/* Video Modal */}
        <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
          <DialogContent className="max-w-5xl p-0 bg-black border-none">
            <video controls autoPlay className="w-full h-auto max-h-[80vh]" src="/videos/venue-tour.mp4">
              Your browser does not support the video tag.
            </video>
          </DialogContent>
        </Dialog>

        {/* This Is For You Section */}
        <section className="section bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-12">
                  <p className="section-label">IS THIS YOUR PLACE?</p>
                  <h2 className="text-3xl md:text-4xl font-serif mb-4">
                    Rustic Retreat is for you if...
                  </h2>
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 gap-6">
                <ScrollReveal delay={0}>
                  <div className="flex items-start gap-4 bg-card p-6 rounded-2xl shadow-soft">
                    <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">You want your families to actually get to know each other</h3>
                      <p className="text-sm text-muted-foreground">
                        Not just a wave across a reception hall—real conversations, shared meals, and memories that stick.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
                
                <ScrollReveal delay={100}>
                  <div className="flex items-start gap-4 bg-card p-6 rounded-2xl shadow-soft">
                    <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">You'd rather have an experience than a production</h3>
                      <p className="text-sm text-muted-foreground">
                        Less about the perfect timeline, more about the moments that happen when no one's watching.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
                
                <ScrollReveal delay={200}>
                  <div className="flex items-start gap-4 bg-card p-6 rounded-2xl shadow-soft">
                    <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">Nature makes you feel alive</h3>
                      <p className="text-sm text-muted-foreground">
                        You light up around campfires, forest paths, and open skies. Walls feel limiting.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
                
                <ScrollReveal delay={300}>
                  <div className="flex items-start gap-4 bg-card p-6 rounded-2xl shadow-soft">
                    <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">You believe the best memories happen when no one's watching the clock</h3>
                      <p className="text-sm text-muted-foreground">
                        That 2am guitar circle, the sunrise hike, the lazy breakfast—those become the stories.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              <ScrollReveal delay={400}>
                <div className="text-center mt-10">
                  <p className="text-muted-foreground mb-6 italic">
                    "If you nodded along to any of these, you're going to love it here."
                  </p>
                  <Link to="/contact">
                    <Button className="bg-gradient-to-r from-rosegold-light via-rosegold to-rosegold-dark hover:from-rosegold hover:via-rosegold-dark hover:to-rosegold text-white rounded-full px-8 shadow-elegant transition-all duration-300 hover:shadow-xl hover:scale-105">
                      Come See For Yourself
                    </Button>
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Your Weekend, Your Rules Section */}
        <section className="section bg-card">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-12">
                <p className="section-label">BEYOND THE CEREMONY</p>
                <h2 className="text-3xl md:text-5xl font-serif mb-6">
                  Your Weekend. <span className="italic text-secondary">Your Rules.</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Rustic Retreat isn't only about the ceremony and reception—the whole weekend should show who you are as a couple. When you rent the land, your imagination is the only limit.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
              <ScrollReveal delay={0}>
                <div className="bg-background p-6 rounded-2xl shadow-soft text-center h-full">
                  <div className="text-4xl mb-4">🎆</div>
                  <h3 className="font-semibold mb-2">Fireworks & Sparklers</h3>
                  <p className="text-sm text-muted-foreground">Light up the night sky with your own celebration.</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div className="bg-background p-6 rounded-2xl shadow-soft text-center h-full">
                  <div className="text-4xl mb-4">🏊</div>
                  <h3 className="font-semibold mb-2">Giant Slip-and-Slide</h3>
                  <p className="text-sm text-muted-foreground">Turn the meadow into your personal water park.</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="bg-background p-6 rounded-2xl shadow-soft text-center h-full">
                  <div className="text-4xl mb-4">🗺️</div>
                  <h3 className="font-semibold mb-2">Treasure Hunts</h3>
                  <p className="text-sm text-muted-foreground">Hide surprises across 65 acres of adventure.</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="bg-background p-6 rounded-2xl shadow-soft text-center h-full">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="font-semibold mb-2">Paintball & Games</h3>
                  <p className="text-sm text-muted-foreground">Friendly competition in the forest.</p>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={400}>
              <div className="bg-secondary/10 p-8 rounded-2xl max-w-4xl mx-auto text-center">
                <p className="text-lg mb-4">
                  <strong>Morning yoga. Campfire karaoke. Stargazing parties. Group hikes. Whatever brings your people joy.</strong>
                </p>
                <p className="text-muted-foreground italic">
                  "The ceremony is just the beginning. The weekend is where the real magic happens."
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Experience Highlights - Full Bleed */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: `url(${propertyAerial})`
        }}>
            <div className="absolute inset-0 bg-primary/80" />
          </div>
          
          <div className="relative z-10 container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-16">
                <p className="section-label text-primary-foreground/70">THE EXPERIENCE</p>
                <h2 className="text-3xl md:text-5xl font-serif text-primary-foreground mb-4">
                  Everything you need. Nothing you don't.
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <ScrollReveal delay={0}>
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center h-full">
                  <Calendar className="w-10 h-10 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-serif font-semibold mb-3 text-primary-foreground">2–10 Day Packages</h3>
                  <p className="text-primary-foreground/80 text-sm">
                    Celebrate at your pace. Setup, ceremony, reception, and memories—with time to spare.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center h-full">
                  <MapPin className="w-10 h-10 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-serif font-semibold mb-3 text-primary-foreground">65 Private Acres</h3>
                  <p className="text-primary-foreground/80 text-sm">
                    Forest, meadows, and a private lake. Complete seclusion just north of Edmonton.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center h-full">
                  <Users className="w-10 h-10 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-serif font-semibold mb-3 text-primary-foreground">Up to 80 Guests</h3>
                  <p className="text-primary-foreground/80 text-sm">
                    Cabin sleeps 4. Room for 60 to camp—you choose where the party sets up.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center h-full">
                  <Sparkles className="w-10 h-10 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-serif font-semibold mb-3 text-primary-foreground">Wedding Décor Collection</h3>
                  <p className="text-primary-foreground/80 text-sm">
                    Our Décor House has a curated selection. Arches, lanterns, centerpieces—choose what fits your vision.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={400}>
              <div className="text-center mt-12">
                <Link to="/about">
                  <Button variant="outline" className="bg-transparent border-white/40 text-white hover:bg-white/10 rounded-full px-8">
                    Explore the Property
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Real Weddings Gallery - Storytelling Grid */}
        <section className="section bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-12">
                <p className="section-label">REAL LOVE STORIES</p>
                <h2 className="text-3xl md:text-4xl font-serif mb-4">See yourself here</h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Every couple brings their own magic. Here's a glimpse of what's possible.
                </p>
              </div>
            </ScrollReveal>

            {/* Masonry-style Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto">
              <ScrollReveal delay={0} className="col-span-2 row-span-2">
                <HoverImage 
                  src={meadowKiss} 
                  alt="Romantic sunset kiss in wildflower meadow at Alberta wedding venue near Lac La Nonne" 
                  description="Sunset kisses in the wildflower meadow—pure romance"
                  category="Golden Hour"
                  className="w-full h-full shadow-soft"
                />
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <HoverImage 
                  src={galleryReception} 
                  alt="Elegant gold reception tablescape with candles at Rustic Retreat wedding" 
                  description="Elegance meets nature—gold accents shimmer in candlelight"
                  category="Reception"
                  className="shadow-soft"
                  aspectRatio="square"
                />
              </ScrollReveal>
              <ScrollReveal delay={150}>
                <HoverImage 
                  src={birchAltar} 
                  alt="Birch grove ceremony altar surrounded by nature near Edmonton" 
                  description="The birch grove altar—nature creates the most beautiful cathedral"
                  category="Ceremony"
                  className="shadow-soft"
                  aspectRatio="square"
                />
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <HoverImage 
                  src={galleryGazebo} 
                  alt="Wedding gazebo illuminated with twinkle lights at night" 
                  description="When the sun sets, twinkle lights transform the gazebo"
                  category="Evening"
                  className="shadow-soft"
                  aspectRatio="square"
                />
              </ScrollReveal>
              <ScrollReveal delay={250}>
                <HoverImage 
                  src={weddingParty} 
                  alt="Wedding party group photo in forest setting at Alberta venue" 
                  description="Your favorite people, all in one place"
                  category="Wedding Party"
                  className="shadow-soft"
                  aspectRatio="square"
                />
              </ScrollReveal>
            </div>

            <ScrollReveal delay={300}>
              <div className="text-center mt-10">
                <Link to="/gallery">
                  <Button className="bg-secondary hover:bg-secondary-dark text-secondary-foreground rounded-full px-8">
                    View Full Gallery
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Social Proof - Softer Testimonials */}
        <section className="section section-cream">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-12">
                <p className="section-label">WHAT COUPLES SAY</p>
                <h2 className="text-3xl md:text-4xl font-serif mb-4">This is what they remember</h2>
              </div>
            </ScrollReveal>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <ScrollReveal delay={0}>
                <div className="bg-card p-8 rounded-2xl shadow-soft h-full">
                  <Quote className="w-8 h-8 text-secondary/40 mb-4" />
                  <blockquote className="text-lg font-serif italic text-primary leading-relaxed mb-6">
                    "We had time. That's what I remember most—we actually had time."
                  </blockquote>
                  <p className="text-muted-foreground font-medium">— Sarah & Mike</p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={100}>
                <div className="bg-card p-8 rounded-2xl shadow-soft h-full">
                  <Quote className="w-8 h-8 text-secondary/40 mb-4" />
                  <blockquote className="text-lg font-serif italic text-primary leading-relaxed mb-6">
                    "Everyone still talks about our weekend. Not just the wedding. The whole weekend."
                  </blockquote>
                  <p className="text-muted-foreground font-medium">— Jenna & Tyler</p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <div className="bg-card p-8 rounded-2xl shadow-soft h-full">
                  <Quote className="w-8 h-8 text-secondary/40 mb-4" />
                  <blockquote className="text-lg font-serif italic text-primary leading-relaxed mb-6">
                    "It was the first time both families really got to know each other."
                  </blockquote>
                  <p className="text-muted-foreground font-medium">— Amanda & Chris</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Pricing Preview */}
        <section className="section bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-12">
                <p className="section-label">TRANSPARENT PRICING</p>
                <h2 className="text-3xl md:text-4xl font-serif mb-4">Choose your timeline</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  All packages include exclusive use of 65 acres, the cabin, gazebo, ceremony spaces, camping areas, 
                  and access to our décor collection. <span className="font-medium">2026 Season Pricing.</span>
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              <ScrollReveal delay={0}>
                <Card className="bg-card border border-border hover:border-secondary transition-all hover:shadow-medium group h-full">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-serif font-semibold mb-1">2-Day</h3>
                    <p className="text-xs text-muted-foreground mb-4">Weekdays</p>
                    <p className="text-3xl font-serif text-secondary mb-1">$3,000</p>
                    <p className="text-xs text-muted-foreground mb-4">Perfect for intimate elopements</p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <Card className="bg-card border border-border hover:border-secondary transition-all hover:shadow-medium group h-full">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-serif font-semibold mb-1">3-Day</h3>
                    <p className="text-xs text-muted-foreground mb-4">Fri–Sun</p>
                    <p className="text-3xl font-serif text-secondary mb-1">$4,500</p>
                    <p className="text-xs text-muted-foreground mb-4">Our most popular choice</p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <Card className="bg-card border-2 border-secondary relative shadow-medium h-full">
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
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <Card className="bg-card border border-border hover:border-secondary transition-all hover:shadow-medium group h-full">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-serif font-semibold mb-1">10-Day</h3>
                    <p className="text-xs text-muted-foreground mb-4">Full experience</p>
                    <p className="text-3xl font-serif text-secondary mb-1">$8,500</p>
                    <p className="text-xs text-muted-foreground mb-4">The ultimate retreat</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={400}>
              <div className="text-center mt-10">
                <Link to="/packages">
                  <Button className="bg-secondary hover:bg-secondary-dark text-secondary-foreground rounded-full px-8">
                    View Full Package Details
                  </Button>
                </Link>
                <p className="text-muted-foreground text-sm mt-4">
                  Only 12-15 weddings per season · 3-day reset between celebrations
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Value Comparison - Softer Approach */}
        <section className="section section-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-12">
                  <p className="section-label">VALUE THAT MAKES SENSE</p>
                  <h2 className="text-3xl md:text-4xl font-serif mb-4">
                    Here's what you get
                  </h2>
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <ScrollReveal direction="left">
                  <div className="bg-card p-8 rounded-2xl shadow-soft border-2 border-muted h-full">
                    <h3 className="text-xl font-serif font-semibold mb-4 text-muted-foreground">Traditional Venue</h3>
                    <ul className="space-y-3 text-muted-foreground mb-6">
                      <li className="flex justify-between">
                        <span>Venue rental (6 hours)</span>
                        <span className="font-semibold">$8,000–$15,000</span>
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
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="right">
                  <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 p-8 rounded-2xl shadow-medium border-2 border-secondary h-full">
                    <h3 className="text-xl font-serif font-semibold mb-4 text-secondary">Rustic Retreat (5-Day) — 2026 Pricing</h3>
                    <ul className="space-y-3 mb-6">
                      <li className="flex justify-between">
                        <span>Exclusive 65-acre venue (108 hours)</span>
                        <span className="font-semibold text-secondary">Included</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Modern picnic tables & rustic benches for 80</span>
                        <span className="font-semibold text-secondary">Included</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Décor collection access</span>
                        <span className="font-semibold text-secondary">Included</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Room for 60 to camp</span>
                        <span className="font-semibold text-secondary">Included</span>
                      </li>
                      <li className="flex justify-between border-t pt-3 font-bold">
                        <span>Complete package</span>
                        <span className="text-secondary">$5,500</span>
                      </li>
                    </ul>
                  </div>
                </ScrollReveal>
              </div>

              <ScrollReveal delay={200}>
                <div className="text-center mt-10">
                  <p className="text-lg text-muted-foreground mb-6">
                    Traditional venue rentals in Alberta typically run $8,000-15,000 for a few hours. Our 2026 packages include multiple days, accommodation, and décor access—giving you more time together at a fraction of typical costs.
                  </p>
                  <Link to="/contact">
                    <Button className="bg-gradient-to-r from-rosegold-light via-rosegold to-rosegold-dark hover:from-rosegold hover:via-rosegold-dark hover:to-rosegold text-white rounded-full px-8 shadow-elegant transition-all duration-300">
                      See It For Yourself
                    </Button>
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Moments That Stay With Everyone */}
        <section className="section bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto text-center mb-12">
                <p className="section-label">THE EXPERIENCE</p>
                <h2 className="text-3xl md:text-4xl font-serif mb-4">
                  Moments that stay with everyone
                </h2>
                <p className="text-muted-foreground">
                  When you give people time together, connection happens naturally.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <ScrollReveal delay={0}>
                <div className="bg-card p-5 rounded-2xl shadow-soft border-l-4 border-secondary h-full">
                  <p className="text-sm mb-2">Morning coffee around the campfire with three generations</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={75}>
                <div className="bg-card p-5 rounded-2xl shadow-soft border-l-4 border-secondary h-full">
                  <p className="text-sm mb-2">Your nephew catching his first fish with your uncle</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={150}>
                <div className="bg-card p-5 rounded-2xl shadow-soft border-l-4 border-secondary h-full">
                  <p className="text-sm mb-2">That 2am guitar circle that becomes legendary</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={225}>
                <div className="bg-card p-5 rounded-2xl shadow-soft border-l-4 border-secondary h-full">
                  <p className="text-sm mb-2">Your grandmother playing cards with your college friends until midnight</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <div className="bg-card p-5 rounded-2xl shadow-soft border-l-4 border-secondary h-full">
                  <p className="text-sm mb-2">The sunrise yoga session that nobody planned</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={375}>
                <div className="bg-card p-5 rounded-2xl shadow-soft border-l-4 border-secondary h-full">
                  <p className="text-sm mb-2">Kids playing freely while adults remember what it feels like to relax</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* FAQ Preview - Address Objections */}
        <section className="section section-cream">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <ScrollReveal direction="left">
                  <p className="section-label">PEACE OF MIND</p>
                  <h2 className="text-3xl md:text-4xl font-serif mb-6">
                    We've thought of everything
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Planning a wedding is stressful enough. We've solved the logistics so you can focus on what matters.
                  </p>
                </ScrollReveal>

                <div className="space-y-4">
                  <ScrollReveal delay={100}>
                    <div className="bg-card p-5 rounded-xl shadow-soft">
                      <h3 className="font-semibold mb-2">What if it rains?</h3>
                      <p className="text-sm text-muted-foreground">
                        Our clear-top gazebo seats 80 for covered celebrations. Alberta weather has never stopped a party at Rustic Retreat.
                      </p>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={200}>
                    <div className="bg-card p-5 rounded-xl shadow-soft">
                      <h3 className="font-semibold mb-2">Where do guests sleep & shower?</h3>
                      <p className="text-sm text-muted-foreground">
                        The cabin sleeps 4. Room for 60 guests to camp—you choose where to set up. Shower facilities ready for 2026 season. Half a dozen Airbnbs sit 5-15 minutes away around the lake, and RVezy.com can deliver trailers directly to your camping area.
                      </p>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={300}>
                    <div className="bg-card p-5 rounded-xl shadow-soft">
                      <h3 className="font-semibold mb-2">Can we bring our own vendors?</h3>
                      <p className="text-sm text-muted-foreground">
                        Absolutely! We're a blank canvas. Bring your caterer, photographer, DJ—whoever you love.
                      </p>
                    </div>
                  </ScrollReveal>
                </div>

                <ScrollReveal delay={400}>
                  <div className="mt-8">
                    <Link to="/faqs">
                      <Button variant="outline" className="rounded-full px-8">
                        See All FAQs
                      </Button>
                    </Link>
                  </div>
                </ScrollReveal>
              </div>

              <ScrollReveal direction="right">
                <div className="grid grid-cols-2 gap-3">
                  <img src={cabinExterior} alt="Cozy cabin exterior at Rustic Retreat Weddings" className="w-full h-40 md:h-52 object-cover shadow-soft" />
                  <img src={receptionGazebo} alt="Evening reception in the gazebo with string lights" className="w-full h-40 md:h-52 object-cover shadow-soft" />
                  <img src={sunsetPortraits} alt="Couple portraits at sunset in forest clearing" className="w-full h-40 md:h-52 object-cover shadow-soft col-span-2" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Final CTA - Emotional Close */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: `url(${galleryPath})`
        }}>
            <div className="absolute inset-0 bg-primary/85" />
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <ScrollReveal>
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
                Tours by appointment only, scheduled around existing bookings
              </p>
            </ScrollReveal>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>;
};
export default Index;