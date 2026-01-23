import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CTAButton } from "@/components/ui/cta-button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";
import HoverImage from "@/components/HoverImage";
import SEO from "@/components/SEO";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

// Hero & Property Images
import heroCeremony from "@/assets/hero-ceremony-space.avif";
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
import { Calendar, MapPin, Sparkles, Users, Heart, Quote, Star, Play, Volume2, VolumeX, Waves, Compass, Target, ArrowRight, Bath, Film, Music, Flag } from "lucide-react";
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
      <SEO image={heroCeremony} />
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section - Transformation Focus */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: `url(${heroCeremony})`
        }}>
            <div className="absolute inset-0 bg-gradient-to-b from-primary/55 via-primary/45 to-primary/65" />
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground pt-20">
            <div className="bg-primary/20 backdrop-blur-sm rounded-3xl py-10 md:py-14 px-6 md:px-12 max-w-4xl mx-auto">
              <p className="text-sm md:text-base uppercase tracking-[0.3em] mb-6 text-primary-foreground/90 opacity-0 animate-hero-fade-in [text-shadow:_0_2px_12px_rgba(0,0,0,0.6)]">
                65 Private Acres · Just 50 minutes north of Edmonton
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-normal mb-8 opacity-0 animate-hero-fade-in text-balance leading-tight [text-shadow:_0_2px_8px_rgba(0,0,0,0.6),_0_4px_24px_rgba(0,0,0,0.4)]">
                <span className="block">Your People.</span>
                <span className="block">Your Vision.</span>
                <span className="block italic">Your Legendary Weekend.</span>
              </h1>
              <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto opacity-0 animate-hero-fade-in text-primary-foreground/95 leading-relaxed [text-shadow:_0_2px_12px_rgba(0,0,0,0.6)]">
                You’re not booking for hours or a single day—you’re claiming a weekend. 65 private acres and a wedding your guests will never forget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="opacity-0 animate-hero-fade-in-delayed">
                  <CTAButton className="text-lg px-10 py-6">
                    Discover Your Venue
                  </CTAButton>
                </Link>
                <Link to="/packages" className="opacity-0 animate-hero-fade-in-delayed">
                  <CTAButton variant="outline" className="text-lg px-10 py-6">
                    View Packages
                  </CTAButton>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Carousel - Immediate Social Proof */}
        <section className="section-cream py-16 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-secondary/15 blur-3xl" />
            <div className="absolute -bottom-28 -right-16 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
          </div>
          <div className="container mx-auto px-4 relative">
            <ScrollReveal>
              <div className="text-center mb-8 md:mb-10">
                <p className="section-label">REAL WORDS, REAL WEEKENDS</p>
                <h2 className="text-3xl md:text-4xl font-serif text-primary">
                  What brides had to say about Rustic Retreat
                </h2>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <Carousel opts={{
              align: "center",
              loop: true
            }} className="max-w-4xl mx-auto">
                <CarouselContent>
                  <CarouselItem>
                    <div className="text-center bg-white/60 backdrop-blur-sm rounded-3xl border border-secondary/10 px-6 py-10 md:px-12 md:py-12 shadow-soft">
                      <Quote className="w-10 h-10 text-secondary/40 mx-auto mb-6" />
                      <blockquote className="text-base md:text-lg font-serif italic text-primary leading-relaxed mb-6">
                        "The property is stunning, featuring a romantic couples cabin, enchanting forested areas, and a breathtaking gazebo adorned with lights and ample space. The seamless flow to a gorgeous dance floor and field area, endless paths, and an inviting fire pit hangout near the couples suite made for a fun way to end a long night of dancing. Roasting hotdogs and smores, camping with family and friends added an extra layer of joy to our wedding."
                      </blockquote>
                      <p className="text-sm text-muted-foreground">— Tabitha, September 2025</p>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="text-center bg-white/60 backdrop-blur-sm rounded-3xl border border-secondary/10 px-6 py-10 md:px-12 md:py-12 shadow-soft">
                      <Quote className="w-10 h-10 text-secondary/40 mx-auto mb-6" />
                      <blockquote className="text-base md:text-lg font-serif italic text-primary leading-relaxed mb-6">
                        "Such an amazing experience from the moment we contacted Rustic Retreat to the time we checked out. The venue is absolutely beautiful and you will not be disappointed. I will absolutely recommend this amazing place to anyone and everyone looking for a small to medium romantic wedding. When you check in you are greeted by amazing hospitality."
                      </blockquote>
                      <p className="text-sm text-muted-foreground">— Ali, August 2025</p>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="text-center bg-white/60 backdrop-blur-sm rounded-3xl border border-secondary/10 px-6 py-10 md:px-12 md:py-12 shadow-soft">
                      <Quote className="w-10 h-10 text-secondary/40 mx-auto mb-6" />
                      <blockquote className="text-base md:text-lg font-serif italic text-primary leading-relaxed mb-6">
                        "My husband and I got married here two weeks ago (planned a wedding in just over a month)—let me tell ya, it was an absolute blast! Shannon and her husband went above and beyond to make sure everything went smoothly for us."
                      </blockquote>
                      <p className="text-sm text-muted-foreground">— Viktoria, June 2025</p>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex -left-12 bg-white/80 hover:bg-white shadow-soft border-secondary/20" />
                <CarouselNext className="hidden md:flex -right-12 bg-white/80 hover:bg-white shadow-soft border-secondary/20" />
              </Carousel>
              <div className="flex justify-center gap-3 mt-6 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary/60" />
                  Swipe or use arrows to read more
                </span>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Social Proof Bar */}
        <section className="py-8 bg-secondary/10 border-y border-secondary/20">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-10 text-base">
              <Link to="/contact" className="flex w-full max-w-xl items-center justify-center gap-3 bg-primary/10 hover:bg-primary/20 px-5 py-3 rounded-full transition-colors cursor-pointer group text-center">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="text-primary font-medium group-hover:underline">
                  2026: Only a few select weekends left
                  <span className="block">Now booking for 2027, 2028</span>
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* This Is Different - Differentiation Statement */}
        <section className="section bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto text-center">
                <p className="section-label">THIS QUESTION CHANGES EVERYTHING</p>
                <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">
                  While traditional venues say<br /><span className="italic text-muted-foreground">"this is what you're allowed to do, and the schedule you'll follow,"</span><br />we ask <span className="italic text-secondary">"what do you want to create?"</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  No rigid timelines. No cookie-cutter packages. Just you, your people, and five days to celebrate your way.
                </p>
              </div>
            </ScrollReveal>

            {/* Cinematic Image Row */}
            <div className="grid grid-cols-3 gap-2 md:gap-4 max-w-6xl mx-auto">
              <ScrollReveal delay={0}>
                <HoverImage src={veilKiss} alt="Intimate bridal veil kiss moment at Rustic Retreat Weddings Alberta" description="A stolen moment—the intimacy of a veil kiss in dappled forest light" category="Ceremony" className="h-48 md:h-72 shadow-soft" />
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <HoverImage src={galleryCouple} alt="Bride and groom romantic kiss in wildflower meadow at sunset near Edmonton" description="Golden hour in the meadow—when the light is just right" category="Portraits" className="h-48 md:h-72 shadow-soft" />
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <HoverImage src={firstDance} alt="First dance with sparklers at Rustic Retreat Alberta wedding venue" description="Magic happens here—sparklers light up an unforgettable first dance" category="Reception" className="h-48 md:h-72 shadow-soft" />
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
              </div>
            </ScrollReveal>
            
            <div ref={videoSectionRef} className="max-w-4xl mx-auto">
              <div className="relative overflow-hidden shadow-xl group">
                <video ref={videoRef} muted={isMuted} loop playsInline className="w-full h-auto" src="/videos/venue-tour.mp4" />
                <button onClick={() => setIsMuted(!isMuted)} className="absolute bottom-4 right-4 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110" aria-label={isMuted ? "Unmute video" : "Mute video"}>
                  {isMuted ? <VolumeX className="w-5 h-5 text-primary" /> : <Volume2 className="w-5 h-5 text-primary" />}
                </button>
                <button onClick={() => setIsVideoOpen(true)} className="absolute bottom-4 left-4 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110" aria-label="Play fullscreen">
                  <Play className="w-5 h-5 text-primary ml-0.5" fill="currentColor" />
                </button>
              </div>
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

        {/* Is This Your Place? - Streamlined */}
        <section className="section bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-10">
                  <p className="section-label">IS THIS YOUR PLACE?</p>
                  <h2 className="text-3xl md:text-4xl font-serif mb-4">This is for couples who...</h2>
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 gap-4 mb-10">
                <ScrollReveal delay={0}>
                  <div className="bg-card p-5 rounded-2xl shadow-soft">
                    <p className="font-medium">Want families to actually get to know each other—not just wave across a reception hall</p>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={100}>
                  <div className="bg-card p-5 rounded-2xl shadow-soft">
                    <p className="font-medium">Want to actually enjoy your wedding—not watch it fly by in four hours</p>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={200}>
                  <div className="bg-card p-5 rounded-2xl shadow-soft">
                    <p className="font-medium">Light up around campfires, forest paths, and open skies</p>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={300}>
                  <div className="bg-card p-5 rounded-2xl shadow-soft">
                    <p className="font-medium">Believe the best memories happen when no one's watching the clock</p>
                  </div>
                </ScrollReveal>
              </div>

              <ScrollReveal delay={400}>
                <div className="text-center">
                  <Link to="/contact">
                    <CTAButton className="px-8">
                      Walk the Land With Us
                    </CTAButton>
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
                  Your Weekend. <span className="italic text-secondary">Your Way.</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  When you rent the land, you'll have the freedom to make it yours. A few ideas to spark your planning.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <ScrollReveal delay={0}>
                <div className="bg-background p-6 rounded-2xl shadow-soft text-center h-full">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold mb-2">Fireworks & Sparklers</h3>
                  <p className="text-sm text-muted-foreground">Plan a sparkler send-off or fireworks moment if it fits your weekend.</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div className="bg-background p-6 rounded-2xl shadow-soft text-center h-full">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Waves className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold mb-2">Giant Slip-and-Slide</h3>
                  <p className="text-sm text-muted-foreground">Set one up and turn the meadow into your personal water park.</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="bg-background p-6 rounded-2xl shadow-soft text-center h-full">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Compass className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold mb-2">Treasure Hunts</h3>
                  <p className="text-sm text-muted-foreground">Create a treasure hunt with surprises across 65 acres.</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="bg-background p-6 rounded-2xl shadow-soft text-center h-full">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold mb-2">Paintball & Games</h3>
                  <p className="text-sm text-muted-foreground">Bring your favorite games for friendly competition in the forest.</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <div className="bg-background p-6 rounded-2xl shadow-soft text-center h-full">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Flag className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold mb-2">Inflatable Obstacle Course</h3>
                  <p className="text-sm text-muted-foreground">Rent a giant course for playful, laugh-out-loud races.</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={500}>
                <div className="bg-background p-6 rounded-2xl shadow-soft text-center h-full">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Bath className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold mb-2">Portable Hot Tub</h3>
                  <p className="text-sm text-muted-foreground">Bring in a rental for a cozy soak under the stars.</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={600}>
                <div className="bg-background p-6 rounded-2xl shadow-soft text-center h-full">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Film className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold mb-2">Outdoor Movie Night</h3>
                  <p className="text-sm text-muted-foreground">Set up a screen and host a movie under the trees.</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={700}>
                <div className="bg-background p-6 rounded-2xl shadow-soft text-center h-full">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Music className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold mb-2">Campfire Karaoke</h3>
                  <p className="text-sm text-muted-foreground">Cue up a playlist and pass the mic around the fire.</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="section bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-12">
                <p className="section-label">PHOTO GALLERY</p>
                <h2 className="text-3xl md:text-4xl font-serif mb-4">See yourself here</h2>
              </div>
            </ScrollReveal>

            {/* Masonry-style Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto">
              <ScrollReveal delay={0} className="col-span-2 row-span-2">
                <HoverImage src={meadowKiss} alt="Romantic sunset kiss in wildflower meadow at Alberta wedding venue near Lac La Nonne" description="Sunset kisses in the wildflower meadow—pure romance" category="Golden Hour" className="w-full h-full shadow-soft" />
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <HoverImage src={galleryReception} alt="Elegant gold reception tablescape with candles at Rustic Retreat wedding" description="Elegance meets nature—gold accents shimmer in candlelight" category="Reception" className="shadow-soft" aspectRatio="square" />
              </ScrollReveal>
              <ScrollReveal delay={150}>
                <HoverImage src={birchAltar} alt="Birch grove ceremony altar surrounded by nature near Edmonton" description="The birch grove altar—nature creates the most beautiful cathedral" category="Ceremony" className="shadow-soft" aspectRatio="square" />
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <HoverImage src={galleryGazebo} alt="Wedding gazebo illuminated with twinkle lights at night" description="When the sun sets, twinkle lights transform the gazebo" category="Evening" className="shadow-soft" aspectRatio="square" />
              </ScrollReveal>
              <ScrollReveal delay={250}>
                <HoverImage src={weddingParty} alt="Wedding party group photo in forest setting at Alberta venue" description="Your favorite people, all in one place" category="Wedding Party" className="shadow-soft" aspectRatio="square" />
              </ScrollReveal>
            </div>

            <ScrollReveal delay={300}>
              <div className="text-center mt-10">
                <Link to="/gallery" className="inline-flex items-center gap-2 text-secondary hover:text-secondary-dark font-medium transition-colors">
                  View the full gallery <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Pricing Preview */}
        <section className="section section-cream">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-12">
                <p className="section-label">TRANSPARENT PRICING</p>
                <h2 className="text-3xl md:text-4xl font-serif mb-4">Choose your timeline</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-sm mb-2">
                  Most couples who chose 3-day wished they had 5—they didn't want the weekend to end.
                </p>
                <p className="text-xs text-secondary font-medium">
                  Popular dates book 12-18 months in advance
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              <ScrollReveal delay={0}>
                <Card
                  className="bg-card border border-border hover:border-secondary transition-all hover:shadow-medium group h-full relative overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  tabIndex={0}
                >
                  <div className="absolute inset-0 flex items-center justify-center p-6 text-center bg-card/95 backdrop-blur-sm opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none">
                    <p className="text-sm text-muted-foreground">
                      Full property access, ceremony + reception spaces, cabin suite, décor collection, and essentials for a simple weekday celebration.
                    </p>
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-serif font-semibold mb-1">2-Day</h3>
                    <p className="text-xs text-muted-foreground mb-4">Weekdays</p>
                    <p className="text-3xl font-serif text-secondary mb-1">$3,000</p>
                    <p className="text-xs text-muted-foreground mb-4">Intimate elopements</p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <Card
                  className="bg-card border border-border hover:border-secondary transition-all hover:shadow-medium group h-full relative overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  tabIndex={0}
                >
                  <div className="absolute inset-0 flex items-center justify-center p-6 text-center bg-card/95 backdrop-blur-sm opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none">
                    <p className="text-sm text-muted-foreground">
                      Weekend access Fri–Sun with ceremony + reception areas, cabin stay, décor collection, and room for camping guests.
                    </p>
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-serif font-semibold mb-1">3-Day</h3>
                    <p className="text-xs text-muted-foreground mb-4">Fri–Sun</p>
                    <p className="text-3xl font-serif text-secondary mb-1">$4,500</p>
                    <p className="text-xs text-muted-foreground mb-4">Weekend wedding</p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <Card
                  className="bg-card border-2 border-secondary relative shadow-medium h-full group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  tabIndex={0}
                >
                  <div className="absolute inset-0 flex items-center justify-center p-6 text-center bg-card/95 backdrop-blur-sm opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none">
                    <p className="text-sm text-muted-foreground">
                      Extended midweek-to-weekend access with full property amenities, cabin + camping, décor collection, and space for multiple events.
                    </p>
                  </div>
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-full">
                    Most Desired Package
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-serif font-semibold mb-1">5-Day</h3>
                    <p className="text-xs text-muted-foreground mb-4">Wed–Sun</p>
                    <p className="text-3xl font-serif text-secondary mb-1">$5,500</p>
                    <p className="text-xs text-muted-foreground mb-4">The complete experience</p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <Card
                  className="bg-card border border-border hover:border-secondary transition-all hover:shadow-medium group h-full relative overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  tabIndex={0}
                >
                  <div className="absolute inset-0 flex items-center justify-center p-6 text-center bg-card/95 backdrop-blur-sm opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none">
                    <p className="text-sm text-muted-foreground">
                      Full 10-day retreat with complete property access, cabin + camping, décor collection, and flexibility for multiple gatherings.
                    </p>
                  </div>
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
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="section bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <ScrollReveal direction="left">
                  <p className="section-label">PEACE OF MIND</p>
                  <h2 className="text-3xl md:text-4xl font-serif mb-6">
                    We've thought of everything
                  </h2>
                </ScrollReveal>

                <div className="space-y-4">
                  <ScrollReveal delay={100}>
                    <div className="bg-card p-5 rounded-xl shadow-soft">
                      <h3 className="font-semibold mb-2">What if it rains?</h3>
                      <p className="text-sm text-muted-foreground">
                        Our clear-top gazebo seats 80. Alberta weather has never stopped a party here.
                      </p>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={200}>
                    <div className="bg-card p-5 rounded-xl shadow-soft">
                      <h3 className="font-semibold mb-2">Where do guests sleep?</h3>
                      <p className="text-sm text-muted-foreground">
                        Cabin sleeps 4. Room for 60 to camp. Airbnbs nearby for non-campers.
                      </p>
                    </div>
                  </ScrollReveal>
                </div>

                <ScrollReveal delay={300}>
                  <div className="mt-6">
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
                  <img src={cabinExterior} alt="Cozy cabin exterior at Rustic Retreat Weddings" loading="lazy" className="w-full h-40 md:h-52 object-cover shadow-soft" />
                  <img src={receptionGazebo} alt="Evening reception in the gazebo with string lights" loading="lazy" className="w-full h-40 md:h-52 object-cover shadow-soft" />
                  <img src={sunsetPortraits} alt="Couple portraits at sunset in forest clearing" loading="lazy" className="w-full h-40 md:h-52 object-cover shadow-soft col-span-2" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Origin Story Teaser */}
        <section className="section section-cream">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center">
                <p className="section-label">OUR STORY</p>
                <h2 className="text-2xl md:text-3xl font-serif mb-6 italic">
                  "It poured for months beforehand, so the rubber boots were real—but our four-day wedding weekend stayed dry, and everyone had the time of their lives."
                </h2>
                <p className="text-muted-foreground mb-8">
                  In 2019, we threw our own 120-person wedding right here—complete with a 40x60' pole barn, paintball, axe throwing, and a giant slip-and-slide. That's when we realized: other couples deserve this too.
                </p>
                <Link to="/about" className="inline-flex items-center gap-2 text-secondary hover:text-secondary-dark font-medium transition-colors">
                  Read our full story <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Final CTA */}
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
                Most couples know within 10 minutes of walking the property.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <CTAButton className="text-lg px-12 py-6">
                    Discover Your Venue
                  </CTAButton>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>;
};
export default Index;
