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

// Hero & Property Images
import heroSunsetMeadow from "@/assets/gallery/Images/hero-sunset-meadow.webp";
import cabinExterior from "@/assets/gallery/Cabin/cabin-exterior-woods.webp";
import receptionGazebo from "@/assets/gallery/Images/gazebo-empty.webp";

// Gallery Images for Storytelling
import ceremonyWideShot from "@/assets/gallery/seo/rustic-retreat-weddings-lac-la-nonne-alberta-groom-lifts-bride-on-dance-floor-33.webp";
import loveMarqueeArch from "@/assets/gallery/love-marquee-arch.webp";
import pavilionReception from "@/assets/gallery/pavilion-reception.webp";
import meadowSunsetKiss from "@/assets/gallery/meadow-sunset-kiss.webp";
import coupleWalkingTrail from "@/assets/gallery/couple-walking-trail.webp";
import chrisShannonUpscale from "@/assets/gallery/chris-shannon-upscale.webp";
import weddingPartyCheer from "@/assets/gallery/wedding-party-cheer.webp";
import weddingPartyLineup from "@/assets/gallery/wedding-party-lineup.webp";
import img7625 from "@/assets/gallery/wedding-party-woods-hero.webp";
import beyondCeremonyImage from "@/assets/gallery/beyond-ceremony-woods.webp";
import cakeCutting from "@/assets/gallery/cake-cutting.webp";
import headTable from "@/assets/gallery/head-table.webp";
import weddingPartyFormal from "@/assets/gallery/wedding-party-formal.webp";
import ringsBouquet from "@/assets/gallery/rings-bouquet.webp";
import goldCakeCuttingSet from "@/assets/gallery/gold-cake-cutting-set.webp";
import firstDanceBW from "@/assets/gallery/Images/first-dance-string-lights.webp";
import sweetheartTable from "@/assets/gallery/Images/sweetheart-table-laughing.webp";
import dressGazebo from "@/assets/gallery/dress-forest-gazebo.webp";
import { Calendar, MapPin, Sparkles, Users, Heart, Quote, Star, Play, Volume2, VolumeX, Waves, Compass, Target, ArrowRight, Bath, Film, Music, Flag, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect, type KeyboardEvent } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import content from "@/data/site-content.json";
import { fetchSanityHomepageContent, toSanityImageUrl } from "@/lib/sanity-homepage";
import { HomepageBuilderSection, HomepageCmsContent } from "@/types/homepage-cms";
import { createDataAttribute } from "@sanity/visual-editing";
import { FAQS } from "@/content/faqs";

const TESTIMONIALS = [
  {
    quote: "The property is stunning, featuring a romantic couples cabin, enchanting forested areas, and a breathtaking gazebo adorned with lights and ample space. The seamless flow to a gorgeous dance floor and field area, endless paths, and an inviting fire pit hangout near the couples suite made for a fun way to end a long night of dancing. Roasting hotdogs and smores, camping with family and friends added an extra layer of joy to our wedding.",
    name: "Tabitha",
    date: "September 2025",
  },
  {
    quote: "Such an amazing experience from the moment we contacted Rustic Retreat to the time we checked out. The venue is absolutely beautiful and you will not be disappointed. I will absolutely recommend this amazing place to anyone and everyone looking for a small to medium romantic wedding. When you check in you are greeted by amazing hospitality.",
    name: "Ali",
    date: "August 2025",
  },
  {
    quote: "My husband and I got married here two weeks ago (planned a wedding in just over a month)—let me tell ya, it was an absolute blast! Shannon and her husband went above and beyond to make sure everything went smoothly for us.",
    name: "Viktoria",
    date: "June 2025",
  },
];

const Index = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoSectionRef = useRef<HTMLDivElement>(null);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [isVideoNear, setIsVideoNear] = useState(false);
  const [cmsHomepage, setCmsHomepage] = useState<HomepageCmsContent | null>(null);
  const [openHomeFaqIndex, setOpenHomeFaqIndex] = useState<number | null>(null);
  const testimonialTrackRef = useRef<HTMLDivElement>(null);
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);

  useEffect(() => {
    let isMounted = true;

    const loadHomepageContent = async () => {
      try {
        const cmsResponse = await fetchSanityHomepageContent();
        if (isMounted && cmsResponse.result) {
          setCmsHomepage(cmsResponse.result);
        }
      } catch (error) {
        console.error("Failed to load homepage content from Sanity:", error);
      }
    };

    loadHomepageContent();
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    const track = testimonialTrackRef.current;
    if (!track) return;

    requestAnimationFrame(() => {
      const firstSlide = track.querySelector<HTMLElement>('[data-testimonial-index="0"]');
      firstSlide?.scrollIntoView({ behavior: "auto", inline: "center", block: "nearest" });
    });
  }, []);

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
  }, [isVideoVisible, videoSrc]);

  const heroImage = toSanityImageUrl(cmsHomepage?.heroImageUrl) || heroSunsetMeadow;
  const heroImageAlt = cmsHomepage?.heroImageAlt || "Couple in the woodland at Rustic Retreat";
  const heroKicker = cmsHomepage?.heroKicker || "You're not booking for hours or a single day...";
  const heroHeadlinePart1 = cmsHomepage?.heroHeadlinePart1 || content.homepage.hero.headline.part1;
  const heroHeadlinePart2 = cmsHomepage?.heroHeadlinePart2 || content.homepage.hero.headline.part2;
  const heroHeadlineHighlight = cmsHomepage?.heroHeadlineHighlight || content.homepage.hero.headline.part3;
  const heroSubheadline = cmsHomepage?.heroSubheadline || content.homepage.hero.subheadline;
  const heroPrimaryCtaText = cmsHomepage?.heroPrimaryCtaText || content.homepage.hero.ctaText.visit;
  const heroSecondaryCtaText = cmsHomepage?.heroSecondaryCtaText || content.homepage.hero.ctaText.packages;
  const heroPrimaryCtaHref = cmsHomepage?.heroPrimaryCtaHref || "/contact";
  const heroSecondaryCtaHref = cmsHomepage?.heroSecondaryCtaHref || "/packages";
  const introCards = cmsHomepage?.introCards?.filter((card) => Boolean(card?.text)) || content.homepage.intro.text.map((text) => ({ text }));
  const builderSections = cmsHomepage?.pageBuilder?.filter((section) => Boolean(section?._type)) || [];
  const homeFaqs = FAQS.slice(0, 2);
  const sanityDataAttribute = cmsHomepage?._id && cmsHomepage?._type
    ? createDataAttribute({
      id: cmsHomepage._id,
      type: cmsHomepage._type,
      projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
      dataset: import.meta.env.VITE_SANITY_DATASET,
      baseUrl: import.meta.env.VITE_SANITY_STUDIO_URL || "http://localhost:3333",
    })
    : null;

  const getArrayItemPath = (fieldName: string, key: string | undefined, index: number, suffix = "") => {
    if (key) {
      return `${fieldName}[_key=="${key}"]${suffix}`;
    }
    return `${fieldName}[${index}]${suffix}`;
  };

  const isExternalHref = (href: string) => /^https?:\/\//i.test(href);
  const renderHeroCta = (href: string, label: string, className: string) => {
    if (isExternalHref(href)) {
      return <a href={href} className={className} target="_blank" rel="noreferrer">{label}</a>;
    }
    return <Link to={href} className={className}>{label}</Link>;
  };

  const scrollToTestimonial = (index: number) => {
    const track = testimonialTrackRef.current;
    if (!track) return;

    const total = TESTIMONIALS.length;
    const normalizedIndex = ((index % total) + total) % total;
    const slide = track.querySelector<HTMLElement>(`[data-testimonial-index="${normalizedIndex}"]`);
    if (!slide) return;

    slide.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    setActiveTestimonialIndex(normalizedIndex);
  };

  const handleTestimonialScroll = () => {
    const track = testimonialTrackRef.current;
    if (!track) return;

    const slides = Array.from(track.querySelectorAll<HTMLElement>("[data-testimonial-index]"));
    if (slides.length === 0) return;

    const viewportCenter = track.scrollLeft + track.clientWidth / 2;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    slides.forEach((slide, index) => {
      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
      const distance = Math.abs(slideCenter - viewportCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== activeTestimonialIndex) {
      setActiveTestimonialIndex(closestIndex);
    }
  };

  const handleTestimonialKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollToTestimonial(activeTestimonialIndex + 1);
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollToTestimonial(activeTestimonialIndex - 1);
    }
  };

  const renderBuilderSection = (section: HomepageBuilderSection, index: number) => {
    const sectionPath = getArrayItemPath("pageBuilder", section._key, index);
    const sectionDataSanity = sanityDataAttribute ? sanityDataAttribute(sectionPath) : undefined;
    if (section._type === "homeImageBlock" && section.imageUrl) {
      return (
        <div className="group overflow-hidden rounded-3xl border border-secondary/20 bg-card shadow-soft img-card" data-sanity={sectionDataSanity}>
          <img
            src={toSanityImageUrl(section.imageUrl, 1400) || section.imageUrl}
            alt={section.imageAlt || section.heading || "Homepage image block"}
            loading="lazy"
            decoding="async"
            className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {(section.heading || section.body) && (
            <div className="space-y-3 p-6">
              {section.heading && (
                <h3 className="text-2xl font-serif text-primary" data-sanity={sanityDataAttribute ? sanityDataAttribute(`${sectionPath}.heading`) : undefined}>
                  {section.heading}
                </h3>
              )}
              {section.body && (
                <p className="text-muted-foreground" data-sanity={sanityDataAttribute ? sanityDataAttribute(`${sectionPath}.body`) : undefined}>
                  {section.body}
                </p>
              )}
            </div>
          )}
        </div>
      );
    }

    return (
      <div className="rounded-3xl border border-secondary/20 bg-card p-8 shadow-soft" data-sanity={sectionDataSanity}>
        {section.heading && (
          <h3 className="mb-4 text-2xl font-serif text-primary" data-sanity={sanityDataAttribute ? sanityDataAttribute(`${sectionPath}.heading`) : undefined}>
            {section.heading}
          </h3>
        )}
        {section.body && (
          <p className="mb-5 text-muted-foreground leading-relaxed" data-sanity={sanityDataAttribute ? sanityDataAttribute(`${sectionPath}.body`) : undefined}>
            {section.body}
          </p>
        )}
        {section.ctaLabel && section.ctaHref && (
          isExternalHref(section.ctaHref) ? (
            <a
              href={section.ctaHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-secondary px-5 py-2.5 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/90"
            >
              {section.ctaLabel}
            </a>
          ) : (
            <Link
              to={section.ctaHref}
              className="inline-flex items-center rounded-full bg-secondary px-5 py-2.5 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/90"
            >
              {section.ctaLabel}
            </Link>
          )
        )}
      </div>
    );
  };

  return <PageTransition>
    <SEO
      image={heroImage}
      keywords={["edmonton wedding venue", "outdoor wedding alberta", "multi-day wedding", "camping wedding venue", "rustic wedding alberta", "private wedding property", "weekend wedding venue"]}
    />
    <OrganizationSchema />
    <BreadcrumbSchema />
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section - Locked Composition */}
      <section className="relative w-full min-h-[700px] md:min-h-[800px] lg:min-h-[900px] xl:min-h-[1000px]">
        <img
          src={heroImage}
          alt={heroImageAlt}
          loading="eager"
          decoding="async"
          // @ts-expect-error - React 18 types don't support lowercase fetchpriority, but React runtime complains about camelCase
          fetchpriority="high"
          className="absolute inset-0 h-full w-full object-cover object-[50%_40%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_40%,rgba(0,0,0,0.84)_85%,rgba(0,0,0,0.96)_100%)]" />
        <div className="absolute inset-0 z-10 flex items-end justify-center pb-8 md:pb-12 lg:pb-16">
          <div className="mx-auto w-full max-w-6xl px-4 md:px-8 text-center text-white">
            <div className="mx-auto max-w-2xl rounded-2xl md:rounded-3xl bg-[linear-gradient(to_bottom,rgba(0,0,0,0.62),rgba(0,0,0,0.53),rgba(0,0,0,0.43))] px-6 py-6 md:px-10 md:py-7 lg:px-12 lg:py-8">
              <p className="text-[10px] md:text-xs lg:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] text-white/85" data-sanity={sanityDataAttribute ? sanityDataAttribute("heroKicker") : undefined}>
                {heroKicker}
              </p>
              <h1 className="mt-3 md:mt-4 lg:mt-5 font-serif font-normal leading-[1.05] [text-wrap:balance] [text-shadow:_0_2px_12px_rgba(0,0,0,0.5)]">
                <span className="block text-white text-3xl md:text-5xl lg:text-6xl" data-sanity={sanityDataAttribute ? sanityDataAttribute("heroHeadlinePart1") : undefined}>{heroHeadlinePart1}</span>
                <span className="block text-white text-3xl md:text-5xl lg:text-6xl" data-sanity={sanityDataAttribute ? sanityDataAttribute("heroHeadlinePart2") : undefined}>{heroHeadlinePart2}</span>
                <span className="block text-[#D8A799] italic text-4xl md:text-6xl lg:text-7xl" data-sanity={sanityDataAttribute ? sanityDataAttribute("heroHeadlineHighlight") : undefined}>{heroHeadlineHighlight}</span>
              </h1>
              <p className="mx-auto mt-3 md:mt-4 lg:mt-5 max-w-3xl text-sm md:text-base lg:text-lg text-white/95" data-sanity={sanityDataAttribute ? sanityDataAttribute("heroSubheadline") : undefined}>
                {heroSubheadline}
              </p>
              <div className="mt-5 md:mt-6 lg:mt-7 flex flex-col items-center gap-3 md:gap-4 sm:flex-row sm:justify-center">
                {renderHeroCta(
                  heroPrimaryCtaHref,
                  heroPrimaryCtaText,
                  "w-full sm:w-auto inline-flex items-center justify-center bg-[#D8A799] text-white px-8 md:px-10 lg:px-12 py-3 md:py-4 rounded-full text-sm md:text-base lg:text-lg font-medium hover:bg-[#cfa08f] transition-colors"
                )}
                {renderHeroCta(
                  heroSecondaryCtaHref,
                  heroSecondaryCtaText,
                  "w-full sm:w-auto inline-flex items-center justify-center border border-white/70 bg-white/10 text-white px-8 md:px-10 lg:px-12 py-3 md:py-4 rounded-full text-sm md:text-base lg:text-lg font-medium hover:bg-white/20 transition-colors"
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {builderSections.length > 0 && (
        <section className="section bg-background border-b border-border/50" data-sanity={sanityDataAttribute ? sanityDataAttribute("pageBuilder") : undefined}>
          <div className="container mx-auto px-4">
            <div className="mb-8 text-center">
              <p className="section-label">SANITY PAGE BUILDER</p>
              <h2 className="text-3xl md:text-4xl font-serif text-primary">Live Editable Homepage Blocks</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {builderSections.map((section, index) => (
                <ScrollReveal key={section._key || `${section._type}-${index}`} delay={Math.min(index * 100, 500)}>
                  {renderBuilderSection(section, index)}
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials - Social Proof */}
      <section className="section-compact section-cream relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-secondary/15 blur-3xl" />
          <div className="absolute -bottom-28 -right-16 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative">
          <ScrollReveal>
            <div className="text-center mb-10 md:mb-14">
              <p className="section-label">Real words, real weekends</p>
              <h2 className="text-3xl md:text-4xl font-serif text-primary">
                What couples had to say about Rustic Retreat
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="relative w-full pb-6 md:pb-0">
              {/* Mobile: swipe carousel | Desktop: 3-col grid */}
              <div
                className="outline-none focus-visible:ring-2 focus-visible:ring-secondary/50"
                tabIndex={0}
                onKeyDown={handleTestimonialKeyDown}
                aria-label="Testimonials"
              >
                <div
                  ref={testimonialTrackRef}
                  onScroll={handleTestimonialScroll}
                  className="flex md:grid md:grid-cols-3 gap-5 lg:gap-8 overflow-x-auto md:overflow-visible scroll-smooth snap-x snap-mandatory md:snap-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-4 md:px-0"
                >
                  {TESTIMONIALS.map((testimonial, index) => (
                    <article
                      key={testimonial.name}
                      data-testimonial-index={index}
                      className="snap-center shrink-0 md:shrink md:flex-1 w-[88%] sm:w-[80%] md:w-auto"
                    >
                      <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-secondary/15 px-7 py-8 shadow-soft flex flex-col h-full text-center">
                        {/* Stars */}
                        <div className="flex justify-center gap-1 mb-5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                          ))}
                        </div>
                        {/* Decorative opening quote */}
                        <div className="font-serif text-[6rem] leading-none text-secondary/20 -mb-4 select-none" aria-hidden="true">"</div>
                        <blockquote className="font-serif italic text-primary/90 leading-relaxed text-[0.95rem] mb-7">
                          {testimonial.quote}
                        </blockquote>
                        <div className="mt-auto">
                          <p className="font-handwriting text-secondary text-2xl leading-none">{testimonial.name}</p>
                          <p className="text-xs text-muted-foreground mt-1.5 tracking-widest uppercase">{testimonial.date}</p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* Dot indicators — mobile only */}
              <div className="mt-5 flex md:hidden items-center justify-center gap-2">
                {TESTIMONIALS.map((testimonial, index) => (
                  <button
                    key={`${testimonial.name}-dot`}
                    type="button"
                    aria-label={`Go to testimonial ${index + 1}`}
                    aria-current={activeTestimonialIndex === index ? "true" : undefined}
                    onClick={() => scrollToTestimonial(index)}
                    className={`h-2 rounded-full transition-all ${activeTestimonialIndex === index ? "w-6 bg-secondary" : "w-2 bg-secondary/35 hover:bg-secondary/60"}`}
                  />
                ))}
              </div>
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
                preload="metadata"
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
              {introCards.map((card, index) => (
                <ScrollReveal key={card._key || index} delay={index * 100}>
                  <div className="bg-card p-5 rounded-2xl shadow-soft h-full">
                    <p
                      className="font-medium"
                      data-sanity={sanityDataAttribute ? sanityDataAttribute(getArrayItemPath("introCards", card._key, index, ".text")) : undefined}
                    >
                      {card.text}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={150} className="h-full">
              <div className="relative h-full flex items-end">
                <div className="absolute -inset-4 rounded-[32px] bg-secondary/10 blur-2xl" />
                <div className="relative grid grid-cols-2 gap-3 lg:gap-4">
                  <img
                    src={weddingPartyLineup}
                    alt="Wedding party lineup portrait in the forest at Rustic Retreat"
                    loading="lazy"
                    decoding="async"
                    className="col-span-2 aspect-[16/9] w-full object-cover rounded-3xl shadow-elegant img-card"
                  />
                  <img
                    src={meadowSunsetKiss}
                    alt="Romantic sunset kiss in a meadow at Rustic Retreat"
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] w-full object-cover rounded-2xl shadow-soft img-card"
                  />
                  <img
                    src={img7625}
                    alt="Wedding reception moment under floral draping at Rustic Retreat"
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] w-full object-cover rounded-2xl shadow-soft img-card"
                  />
                  <img
                    src={loveMarqueeArch}
                    alt="LOVE marquee letters with ceremony arch in a forest clearing"
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] w-full object-cover rounded-2xl shadow-soft img-card"
                  />
                  <img
                    src={headTable}
                    alt="Rustic head table with candles and florals at a wedding reception"
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] w-full object-cover rounded-2xl shadow-soft img-card"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Visual Reset - Full Width Moment */}
      <section className="relative overflow-hidden img-card">
        <div className="relative">
          <img
            src={dressGazebo}
            alt="Wedding dress displayed under the forest gazebo at Rustic Retreat"
            loading="lazy"
            decoding="async"
            className="w-full h-[70vh] sm:h-[80vh] md:h-auto object-cover object-[center_60%] md:object-center block"
          />
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
              <div className="relative lg:order-1 flex justify-center lg:justify-start">
                <div className="absolute -inset-4 rounded-[32px] bg-secondary/10 blur-2xl" />
                <div className="relative overflow-hidden rounded-3xl shadow-elegant w-full max-w-[520px] img-card">
                  <img
                    src={beyondCeremonyImage}
                    alt="Couple portrait with sparkler heart light painting at Rustic Retreat"
                    loading="lazy"
                    decoding="async"
                    className="block w-full h-auto"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <ScrollReveal delay={0}>
              <div className="bg-background p-6 rounded-2xl shadow-soft text-center h-full border border-secondary/10">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">Fireworks & Sparklers</h3>
                <p className="text-sm text-muted-foreground">Light up the night sky with an unforgettable full fireworks display and a sparkler send-off.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="bg-background p-6 rounded-2xl shadow-soft text-center h-full border border-secondary/10">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Music className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">Live Bands & DJs</h3>
                <p className="text-sm text-muted-foreground">Go all out. Bring in an incredible live band or DJ to keep the dance floor packed late into the night.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-background p-6 rounded-2xl shadow-soft text-center h-full border border-secondary/10">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Flag className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">Epic Outdoor Activities</h3>
                <p className="text-sm text-muted-foreground">Rent a giant inflatable obstacle course or set up a massive slip-and-slide for unapologetic fun.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="bg-background p-6 rounded-2xl shadow-soft text-center h-full border border-secondary/10">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Film className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">Food Trucks & Late-Nights</h3>
                <p className="text-sm text-muted-foreground">Hire your favorite food truck for midnight snacking, or set up a massive outdoor movie projector.</p>
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {[...content.packages.packages].reverse().map((pkg, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card
                    className={`bg-card group h-full min-h-[220px] relative overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${pkg.isRecommended
                      ? "border-2 border-secondary shadow-medium"
                      : "border border-border hover:border-secondary transition-all hover:shadow-medium"
                      }`}
                    tabIndex={0}
                  >
                    <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 text-center bg-card/95 backdrop-blur-sm opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none">
                      <p className="text-[11px] sm:text-sm leading-relaxed text-muted-foreground">
                        {pkg.previewDescription}
                      </p>
                    </div>
                    {pkg.isRecommended && (
                      <div className="absolute top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 whitespace-nowrap rounded-full bg-gradient-to-r from-secondary to-secondary-dark text-secondary-foreground text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] px-3 py-1 shadow-lg">
                        <Star className="w-3 h-3" />
                        <span>Most Desired</span>
                      </div>
                    )}
                    <CardContent className={`p-6 text-center ${pkg.isRecommended ? "pt-10" : ""}`}>
                      <h3 className="text-xl font-serif font-semibold mb-1">{pkg.shortName}</h3>
                      <p className="text-xs text-muted-foreground mb-4">{pkg.duration}</p>
                      <p className="text-3xl font-serif text-secondary mb-1">${pkg.price}*</p>
                      <p className="text-xs text-muted-foreground mb-4">{pkg.subtitle}</p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={400}>
              <div className="text-center mt-10">
                <Link to="/packages">
                  <Button className="bg-secondary hover:bg-secondary-dark text-secondary-foreground rounded-full px-8">
                    View Full Package Details
                  </Button>
                </Link>
                <p className="text-xs text-muted-foreground mt-3">* GST not included.</p>
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
                {homeFaqs.map((faq, index) => (
                  <ScrollReveal key={faq.question} delay={100 + index * 100}>
                    <div className="bg-card rounded-xl shadow-soft border border-border/60 overflow-hidden">
                      <button
                        type="button"
                        id={`home-faq-trigger-${index}`}
                        aria-expanded={openHomeFaqIndex === index}
                        aria-controls={`home-faq-panel-${index}`}
                        onClick={() => setOpenHomeFaqIndex(openHomeFaqIndex === index ? null : index)}
                        className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-muted/30 transition-colors"
                      >
                        <span className="font-semibold">{faq.question}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${openHomeFaqIndex === index ? "rotate-180" : "rotate-0"}`}
                        />
                      </button>

                      <div
                        id={`home-faq-panel-${index}`}
                        role="region"
                        aria-labelledby={`home-faq-trigger-${index}`}
                        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${openHomeFaqIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                      >
                        <div className="overflow-hidden">
                          <div className="px-5 pb-5 space-y-3 text-sm text-muted-foreground">
                            {faq.answer.split("\n\n").map((paragraph, paragraphIndex) => (
                              <p key={paragraphIndex}>{paragraph}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
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
                <img src={cabinExterior} alt="Cozy cabin exterior at Rustic Retreat Weddings" loading="lazy" decoding="async" className="w-full h-40 md:h-52 object-cover shadow-soft img-card" />
                <img
                  src={receptionGazebo}
                  alt="Couple and friends in an open field at Rustic Retreat"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-40 md:h-52 object-cover shadow-soft img-card"
                  style={{ objectPosition: "center 80%" }}
                />
                <img src={pavilionReception} alt="Rustic pavilion reception with guests cheering" loading="lazy" decoding="async" className="w-full h-40 md:h-52 object-cover shadow-soft col-span-2 img-card" />
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
              <div className="relative lg:order-2 flex justify-center lg:justify-end">
                <div className="absolute -inset-4 rounded-[32px] bg-secondary/10 blur-2xl" />
                <img
                  src={chrisShannonUpscale}
                  alt="Newlyweds walking hand in hand down a forest trail at Rustic Retreat"
                  loading="lazy"
                  decoding="async"
                  className="relative block w-full max-w-md h-auto rounded-3xl shadow-elegant img-card"
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
      <section className="relative py-32 overflow-hidden img-card">
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
            <h2 className="text-3xl md:text-5xl font-serif text-primary-foreground mb-6">
              Come see if this is where your <span className="italic text-secondary">Forever</span> begins
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
