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
import OrganizationSchema from "@/components/OrganizationSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

// Hero & Property Images
import heroSunsetMeadow from "@/assets/gallery/Images/IMG_9996.jpeg";
import cabinExterior from "@/assets/cabin-exterior-forest.avif";
import receptionGazebo from "@/assets/gallery/Images/IMG_5103.jpg";

// Gallery Images for Storytelling
import ceremonyWideShot from "@/assets/gallery/ceremony-wide-shot.jpg";
import loveMarqueeArch from "@/assets/gallery/love-marquee-arch.jpg";
import pavilionReception from "@/assets/gallery/pavilion-reception.jpg";
import meadowSunsetKiss from "@/assets/gallery/meadow-sunset-kiss.jpg";
import coupleWalkingTrail from "@/assets/gallery/couple-walking-trail.jpg";
import weddingPartyCheer from "@/assets/gallery/wedding-party-cheer.jpg";
import firstDanceColor from "@/assets/gallery/first-dance-color.jpg";
import cakeCutting from "@/assets/gallery/cake-cutting.jpg";
import headTable from "@/assets/gallery/head-table.jpg";
import weddingPartyFormal from "@/assets/gallery/wedding-party-formal.jpg";
import ringsBouquet from "@/assets/gallery/rings-bouquet.jpg";
import goldCakeCuttingSet from "@/assets/gallery/gold-cake-cutting-set.jpg";
import firstDanceBW from "@/assets/gallery/Images/first-dance-string-lights.jpg";
import sweetheartTable from "@/assets/gallery/Images/sweetheart-table-laughing.jpg";
import dressGazebo from "@/assets/gallery/dress-forest-gazebo.jpg";
import { Calendar, MapPin, Sparkles, Users, Heart, Quote, Star, Play, Volume2, VolumeX, Waves, Compass, Target, ArrowRight, Bath, Film, Music, Flag } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
const Index = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoSectionRef = useRef<HTMLDivElement>(null);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [isVideoNear, setIsVideoNear] = useState(false);
  useEffect(() => {
    const element = videoSectionRef.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsVideoNear(true);
      setIsVideoVisible(true);
      return;
    }

    const preloadObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVideoNear(true);
          preloadObserver.unobserve(entry.target);
        }
      },
      { threshold: 0, rootMargin: "200px 0px 200px 0px" }
    );

    const playObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          setIsVideoVisible(true);
        } else {
          setIsVideoVisible(false);
        }
      },
      { threshold: [0, 0.5] }
    );

    preloadObserver.observe(element);
    playObserver.observe(element);

    return () => {
      preloadObserver.disconnect();
      playObserver.disconnect();
    };
  }, []);
  useEffect(() => {
    if (isVideoNear && !videoSrc) {
      setVideoSrc("/videos/venue-tour.mp4");
    }
  }, [isVideoNear, videoSrc]);
  useEffect(() => {
    if (!videoSrc || !videoRef.current) {
      return;
    }
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
      <SEO
        image={heroSunsetMeadow}
        keywords={["edmonton wedding venue", "outdoor wedding alberta", "multi-day wedding", "camping wedding venue", "rustic wedding alberta", "private wedding property", "weekend wedding venue"]}
      />
      <OrganizationSchema />
      <BreadcrumbSchema />
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section - Locked Composition */}
        <section className="relative w-full min-h-[700px] md:min-h-[800px] lg:min-h-[900px] xl:min-h-[1000px]">
          <img
            src={heroSunsetMeadow}
            alt="Couple in the woodland at Rustic Retreat"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover object-[50%_40%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_40%,rgba(0,0,0,0.75)_85%,rgba(0,0,0,0.9)_100%)]" />
          <div className="absolute inset-0 z-10 flex items-end justify-center pb-8 md:pb-12 lg:pb-16">
            <div className="mx-auto w-full max-w-6xl px-4 md:px-8 text-center text-white">
              <div className="mx-auto max-w-2xl rounded-2xl md:rounded-3xl bg-black/35 px-6 py-6 md:px-10 md:py-7 lg:px-12 lg:py-8">
                <p className="text-[10px] md:text-xs lg:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] text-white/85">
                  You're not booking for hours or a single day...
                </p>
                <h1 className="mt-3 md:mt-4 lg:mt-5 font-serif font-normal leading-[1.05] [text-wrap:balance] [text-shadow:_0_2px_12px_rgba(0,0,0,0.5)]">
                  <span className="block text-white text-3xl md:text-5xl lg:text-6xl">Your People.</span>
                  <span className="block text-white text-3xl md:text-5xl lg:text-6xl">Your Vision.</span>
                  <span className="block text-[#D8A799] italic text-4xl md:text-6xl lg:text-7xl">Your Legendary Weekend.</span>
                </h1>
                <p className="mx-auto mt-3 md:mt-4 lg:mt-5 max-w-3xl text-sm md:text-base lg:text-lg text-white/95">
                  You're claiming a weekend. 65 private acres and a wedding your guests will never forget.
                </p>
                <div className="mt-5 md:mt-6 lg:mt-7 flex flex-col items-center gap-3 md:gap-4 sm:flex-row sm:justify-center">
                  <Link to="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#D8A799] text-white px-8 md:px-10 lg:px-12 py-3 md:py-4 rounded-full text-sm md:text-base lg:text-lg font-medium hover:bg-[#cfa08f] transition-colors">
                    Schedule a Visit
                  </Link>
                  <Link to="/packages" className="w-full sm:w-auto inline-flex items-center justify-center border border-white/70 bg-white/10 text-white px-8 md:px-10 lg:px-12 py-3 md:py-4 rounded-full text-sm md:text-base lg:text-lg font-medium hover:bg-white/20 transition-colors">
                    View Packages
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Carousel - Immediate Social Proof */}
        <section className="section-compact section-cream relative overflow-hidden">
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
            }} className="max-w-4xl mx-auto pb-6 md:pb-10">
                <CarouselContent>
                  <CarouselItem>
                    <div className="text-center bg-white/60 backdrop-blur-sm rounded-3xl border border-secondary/10 px-6 py-10 md:px-12 md:py-12 shadow-soft flex flex-col h-full">
                      <Quote className="w-10 h-10 text-secondary/40 mx-auto mb-6" />
                      <blockquote className="text-base md:text-lg font-serif italic text-primary leading-relaxed mb-6">
                        "The property is stunning, featuring a romantic couples cabin, enchanting forested areas, and a breathtaking gazebo adorned with lights and ample space. The seamless flow to a gorgeous dance floor and field area, endless paths, and an inviting fire pit hangout near the couples suite made for a fun way to end a long night of dancing. Roasting hotdogs and smores, camping with family and friends added an extra layer of joy to our wedding."
                      </blockquote>
                      <p className="text-sm text-muted-foreground">— Tabitha, September 2025</p>
                      <div className="mt-6 flex items-center justify-between">
                        <CarouselPrevious className="static translate-y-0 bg-white/80 hover:bg-white shadow-soft border-secondary/20" />
                        <CarouselNext className="static translate-y-0 bg-white/80 hover:bg-white shadow-soft border-secondary/20" />
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="text-center bg-white/60 backdrop-blur-sm rounded-3xl border border-secondary/10 px-6 py-10 md:px-12 md:py-12 shadow-soft flex flex-col h-full">
                      <Quote className="w-10 h-10 text-secondary/40 mx-auto mb-6" />
                      <blockquote className="text-base md:text-lg font-serif italic text-primary leading-relaxed mb-6">
                        "Such an amazing experience from the moment we contacted Rustic Retreat to the time we checked out. The venue is absolutely beautiful and you will not be disappointed. I will absolutely recommend this amazing place to anyone and everyone looking for a small to medium romantic wedding. When you check in you are greeted by amazing hospitality."
                      </blockquote>
                      <p className="text-sm text-muted-foreground">— Ali, August 2025</p>
                      <div className="mt-6 flex items-center justify-between">
                        <CarouselPrevious className="static translate-y-0 bg-white/80 hover:bg-white shadow-soft border-secondary/20" />
                        <CarouselNext className="static translate-y-0 bg-white/80 hover:bg-white shadow-soft border-secondary/20" />
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="text-center bg-white/60 backdrop-blur-sm rounded-3xl border border-secondary/10 px-6 py-10 md:px-12 md:py-12 shadow-soft flex flex-col h-full">
                      <Quote className="w-10 h-10 text-secondary/40 mx-auto mb-6" />
                      <blockquote className="text-base md:text-lg font-serif italic text-primary leading-relaxed mb-6">
                        "My husband and I got married here two weeks ago (planned a wedding in just over a month)—let me tell ya, it was an absolute blast! Shannon and her husband went above and beyond to make sure everything went smoothly for us."
                      </blockquote>
                      <p className="text-sm text-muted-foreground">— Viktoria, June 2025</p>
                      <div className="mt-6 flex items-center justify-between">
                        <CarouselPrevious className="static translate-y-0 bg-white/80 hover:bg-white shadow-soft border-secondary/20" />
                        <CarouselNext className="static translate-y-0 bg-white/80 hover:bg-white shadow-soft border-secondary/20" />
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
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
                  <span className="block">Booking now open for 2027 & 2028</span>
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
                  No rigid timelines. No cookie-cutter packages. Just you, your people, and multiple days to bring your celebration to life.
                </p>
              </div>
            </ScrollReveal>

            {/* Cinematic Image Row */}
            <div className="grid grid-cols-3 gap-2 md:gap-4 max-w-6xl mx-auto">
              <ScrollReveal delay={0}>
                <HoverImage src={ceremonyWideShot} alt="Wide outdoor ceremony with wedding party in forest clearing at Rustic Retreat" description="Your ceremony in the heart of the forest—surrounded by nature and loved ones" category="Ceremony" className="h-48 md:h-72 shadow-soft" />
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <HoverImage src={coupleWalkingTrail} alt="Newlyweds walking hand in hand down forest trail at Lac La Nonne wedding venue" description="Just married—strolling the forest trails, just the two of you" category="Portraits" className="h-48 md:h-72 shadow-soft" />
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <HoverImage src={cakeCutting} alt="Cake cutting and first bite moment under rustic pavilion" description="Sweet moments—cutting the cake and sharing the first bite" category="Reception" className="h-48 md:h-72 shadow-soft" />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="section-compact bg-card">
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
                <video
                  ref={videoRef}
                  muted={isMuted}
                  loop
                  playsInline
                  preload="auto"
                  poster="/videos/venue-tour-poster.jpg"
                  className="w-full h-auto"
                  src={videoSrc || undefined}
                  onCanPlay={() => {
                    if (isVideoVisible) {
                      videoRef.current?.play().catch(() => {
                        // Autoplay can be blocked; ignore.
                      });
                    }
                  }}
                />
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
          {isVideoOpen && (
            <DialogContent className="max-w-5xl p-0 bg-black border-none">
              <video
                controls
                autoPlay
                loop
                preload="metadata"
                poster="/videos/venue-tour-poster.jpg"
                className="w-full h-auto max-h-[80vh]"
                src="/videos/venue-tour.mp4"
              >
                Your browser does not support the video tag.
              </video>
            </DialogContent>
          )}
        </Dialog>

        {/* Is This Your Place? - Streamlined */}
        <section className="section bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center lg:text-left mb-10">
                <p className="section-label">IS THIS YOUR PLACE?</p>
                <h2 className="text-3xl md:text-4xl font-serif mb-4">This is for couples who want...</h2>
              </div>
            </ScrollReveal>

            <div className="grid lg:grid-cols-2 gap-10 items-stretch">
              <div className="grid sm:grid-cols-2 gap-4">
                <ScrollReveal delay={0}>
                  <div className="bg-card p-5 rounded-2xl shadow-soft h-full">
                    <p className="font-medium">A weekend that unfolds naturally, not a wedding that ends before it really begins.</p>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={100}>
                  <div className="bg-card p-5 rounded-2xl shadow-soft h-full">
                    <p className="font-medium">Open air and rustling poplars, not a ballroom ceiling and a strict schedule.</p>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={200}>
                  <div className="bg-card p-5 rounded-2xl shadow-soft h-full">
                    <p className="font-medium">A celebration that reflects your story, not a template you're expected to fit into.</p>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={300}>
                  <div className="bg-card p-5 rounded-2xl shadow-soft h-full">
                    <p className="font-medium">Music and dancing under the open sky, not the same indoor routine you've seen a hundred times.</p>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={400}>
                  <div className="bg-card p-5 rounded-2xl shadow-soft h-full">
                    <p className="font-medium">The freedom to be themselves, whether that's creating a DIY celebration or an extravagant event that reflects their unique story.</p>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={500}>
                  <div className="bg-card p-5 rounded-2xl shadow-soft h-full">
                    <p className="font-medium">A venue that feels like a getaway, not a place where you’re watching the clock all day.</p>
                  </div>
                </ScrollReveal>
              </div>

              <ScrollReveal delay={150} className="h-full">
                <div className="relative h-full flex items-end">
                  <div className="absolute -inset-4 rounded-[32px] bg-secondary/10 blur-2xl" />
                  <div className="relative grid grid-cols-2 gap-3 lg:gap-4">
                    <img
                      src={ceremonyWideShot}
                      alt="Outdoor wedding ceremony in a forest clearing at Rustic Retreat"
                      loading="lazy"
                      decoding="async"
                      className="col-span-2 aspect-[16/9] w-full object-cover rounded-3xl shadow-elegant"
                    />
                    <img
                      src={pavilionReception}
                      alt="Rustic pavilion reception with guests cheering"
                      loading="lazy"
                      decoding="async"
                      className="aspect-[4/3] w-full object-cover rounded-2xl shadow-soft"
                    />
                    <img
                      src={meadowSunsetKiss}
                      alt="Romantic sunset kiss in a meadow at Rustic Retreat"
                      loading="lazy"
                      decoding="async"
                      className="aspect-[4/3] w-full object-cover rounded-2xl shadow-soft"
                    />
                    <img
                      src={loveMarqueeArch}
                      alt="LOVE marquee letters with ceremony arch in a forest clearing"
                      loading="lazy"
                      decoding="async"
                      className="aspect-[4/3] w-full object-cover rounded-2xl shadow-soft"
                    />
                    <img
                      src={headTable}
                      alt="Rustic head table with candles and florals at a wedding reception"
                      loading="lazy"
                      decoding="async"
                      className="aspect-[4/3] w-full object-cover rounded-2xl shadow-soft"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Visual Reset - Full Width Moment */}
        <section className="relative overflow-hidden">
          <div className="relative">
            <img
              src={dressGazebo}
              alt="Wedding dress displayed under the forest gazebo at Rustic Retreat"
              loading="lazy"
              decoding="async"
              className="w-full h-[70vh] sm:h-[80vh] md:h-auto object-cover object-[center_60%] md:object-center block"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-transparent" />
          </div>
          <div className="absolute inset-0 z-10">
            <div className="container mx-auto px-4 py-12 md:py-16 h-full flex items-start">
              <ScrollReveal>
                <div className="w-full max-w-3xl text-primary-foreground bg-gradient-to-b from-black/70 via-black/50 to-black/10 rounded-2xl px-6 py-6 md:px-10 md:py-9">
                  <p className="text-sm uppercase tracking-[0.3em] text-primary-foreground/80 mb-4">
                    A weekend that is completely yours
                  </p>
                  <blockquote className="text-lg font-serif leading-snug [text-shadow:_0_2px_12px_rgba(0,0,0,0.5)]">
                    “We didn’t want to build just another venue. We wanted to create something deeper—a place where people could slow down, truly connect, and celebrate life and their unique individual love stories across an
                    <span className="block text-center -ml-[10%] text-[#D8A799] italic text-[1.2em]">entire weekend.”</span>
                  </blockquote>
                  <p className="mt-4 text-sm text-primary-foreground/80">
                    — Chris & Shannon
                    <br />
                    (Rustic Retreat)
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Your Weekend, Your Rules Section */}
        <section className="section bg-card">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center mb-12">
              <ScrollReveal>
                <div className="text-center lg:text-left lg:order-2">
                  <p className="section-label">BEYOND THE CEREMONY</p>
                  <h2 className="text-3xl md:text-5xl font-serif mb-6">
                    <span className="block">Your Weekend.</span>
                    <span className="block italic text-secondary">Your Way.</span>
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl lg:max-w-none">
                    When you book Rustic Retreat, you'll have the freedom to make it yours. A few ideas to spark your planning, your options are near endless.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={150}>
                <div className="relative lg:order-1">
                  <div className="absolute -inset-4 rounded-[32px] bg-secondary/10 blur-2xl" />
                  <div className="relative overflow-hidden rounded-3xl shadow-elegant">
                    <img
                      src={firstDanceColor}
                      alt="First dance under string lights at Rustic Retreat"
                      loading="lazy"
                      decoding="async"
                      className="h-[280px] sm:h-[320px] w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" />
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <ScrollReveal delay={0}>
                <div className="bg-background p-6 rounded-2xl shadow-soft text-center h-full">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold mb-2">Fireworks & Sparklers</h3>
                  <p className="text-sm text-muted-foreground">Plan a sparkler send-off or fireworks.</p>
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
                  <h3 className="font-semibold mb-2">Bubble Soccer & Games</h3>
                  <p className="text-sm text-muted-foreground">Bring your favorite games for friendly competition.</p>
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

        {/* Pricing Preview */}
        <section className="section bg-secondary/20 border-y border-secondary/30">
          <div className="container mx-auto px-4">
            <div className="rounded-3xl border border-secondary/30 bg-background/70 shadow-soft px-6 py-10 md:px-10 md:py-12 backdrop-blur-sm">
              <ScrollReveal>
                <div className="text-center mb-10">
                  <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.3em] mb-4">
                    Packages
                  </div>
                  <h2 className="text-3xl md:text-5xl font-serif mb-3 text-primary">
                    Choose your weekend
                  </h2>
                  <div className="mx-auto h-1 w-16 rounded-full bg-secondary/60 mb-4" />
                  <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base mb-2">
                    Pick the timeline that fits your vision—then make the land your own.
                  </p>
                  <p className="text-xs text-secondary font-medium">
                    Popular dates book 12-18 months in advance
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                <ScrollReveal delay={0}>
                  <Card
                    className="bg-card border border-border hover:border-secondary transition-all hover:shadow-medium group h-full min-h-[220px] relative overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    tabIndex={0}
                  >
                    <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 text-center bg-card/95 backdrop-blur-sm opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none">
                      <p className="text-[11px] sm:text-sm leading-relaxed text-muted-foreground">
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
                    className="bg-card border border-border hover:border-secondary transition-all hover:shadow-medium group h-full min-h-[220px] relative overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    tabIndex={0}
                  >
                    <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 text-center bg-card/95 backdrop-blur-sm opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none">
                      <p className="text-[11px] sm:text-sm leading-relaxed text-muted-foreground">
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
                    className="bg-card border-2 border-secondary relative shadow-medium h-full min-h-[220px] group overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    tabIndex={0}
                  >
                    <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 text-center bg-card/95 backdrop-blur-sm opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none">
                      <p className="text-[11px] sm:text-sm leading-relaxed text-muted-foreground">
                        Extended midweek-to-weekend access with full property amenities, cabin + camping, décor collection, and space for multiple events.
                      </p>
                    </div>
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 rounded-full bg-gradient-to-r from-secondary to-secondary-dark text-secondary-foreground text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] px-3 py-1 shadow-lg">
                      <Star className="w-3 h-3" />
                      <span>Most Desired</span>
                    </div>
                    <CardContent className="p-6 pt-10 text-center">
                      <h3 className="text-xl font-serif font-semibold mb-1">5-Day</h3>
                      <p className="text-xs text-muted-foreground mb-4">Wed–Sun</p>
                      <p className="text-3xl font-serif text-secondary mb-1">$5,500</p>
                      <p className="text-xs text-muted-foreground mb-4">The complete experience</p>
                    </CardContent>
                  </Card>
                </ScrollReveal>

                <ScrollReveal delay={300}>
                  <Card
                    className="bg-card border border-border hover:border-secondary transition-all hover:shadow-medium group h-full min-h-[220px] relative overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    tabIndex={0}
                  >
                    <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 text-center bg-card/95 backdrop-blur-sm opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none">
                      <p className="text-[11px] sm:text-sm leading-relaxed text-muted-foreground">
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
                  <img src={cabinExterior} alt="Cozy cabin exterior at Rustic Retreat Weddings" loading="lazy" decoding="async" className="w-full h-40 md:h-52 object-cover shadow-soft" />
                  <img src={receptionGazebo} alt="Couple and friends in an open field at Rustic Retreat" loading="lazy" decoding="async" className="w-full h-40 md:h-52 object-cover shadow-soft" />
                  <img src={pavilionReception} alt="Rustic pavilion reception with guests cheering" loading="lazy" decoding="async" className="w-full h-40 md:h-52 object-cover shadow-soft col-span-2" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Origin Story Teaser */}
        <section className="section section-cream">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <ScrollReveal>
                <div className="relative lg:order-2">
                  <div className="absolute -inset-4 rounded-[32px] bg-secondary/10 blur-2xl" />
                  <img
                    src={coupleWalkingTrail}
                    alt="Newlyweds walking hand in hand down a forest trail at Rustic Retreat"
                    loading="lazy"
                    decoding="async"
                    className="relative w-full h-[320px] sm:h-[360px] md:h-[420px] object-cover rounded-3xl shadow-elegant"
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal delay={150}>
                <div className="bg-card/80 backdrop-blur-sm rounded-3xl border border-secondary/10 p-8 md:p-10 shadow-soft lg:order-1">
                  <p className="section-label">OUR STORY</p>
                  <h2 className="text-2xl md:text-3xl font-serif mb-6 italic">
                    "It poured for months beforehand, so the rubber boots were real—but our four-day wedding weekend stayed dry, and everyone had the time of their lives."
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    In 2019, we threw our own 120-person wedding right here—complete with a 40x60' pole barn, paintball, axe throwing, and a giant slip-and-slide. That's when we realized: other couples deserve this too.
                  </p>
                  <Link to="/real-weddings" className="inline-flex items-center gap-2 text-secondary hover:text-secondary-dark font-medium transition-colors">
                    Read our full story <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={weddingPartyCheer}
              alt="Wedding party cheering outdoors at Rustic Retreat"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-center"
            />
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
