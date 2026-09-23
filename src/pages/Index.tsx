import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CTAButton } from "@/components/ui/cta-button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";
import HoverImage from "@/components/HoverImage";
import Flourish from "@/components/Flourish";
import Fireflies from "@/components/Fireflies";
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
import { Calendar, MapPin, Sparkles, Users, Heart, Quote, Star, Play, Volume2, VolumeX, Waves, Compass, Target, Bath, Film, Music, Flag, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect, type KeyboardEvent, type ReactNode } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import content from "@/data/site-content.json";
import { fetchSanityHomepageContent, toSanityImageUrl } from "@/lib/sanity-homepage";
import { HomepageBuilderSection, HomepageCmsContent, HomepageIntroCard } from "@/types/homepage-cms";
import { createDataAttribute } from "@sanity/visual-editing";
import { FAQS } from "@/content/faqs";
import { TESTIMONIALS, GOOGLE_REVIEWS_URL } from "@/data/testimonials";
import { Testimonial } from "@/types/testimonial";
import { useTouringSeasonOpen } from "@/lib/touring-season";

type ExpandedQuotePanelProps = {
  testimonial: Testimonial;
  children: ReactNode;
};

// The open card. It sits inside the card because the rail is a horizontal scroll
// container and clips its children on both axes, so a long review scrolls here
// rather than overflowing. A fade marks that there is more, but only when the
// text actually overflows - otherwise it would sit over the reviewer's name.
const ExpandedQuotePanel = ({ testimonial, children }: ExpandedQuotePanelProps) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [hasMoreBelow, setHasMoreBelow] = useState(false);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const update = () => {
      setHasMoreBelow(
        scroller.scrollHeight - scroller.clientHeight - scroller.scrollTop > 4,
      );
    };

    update();
    scroller.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(scroller);

    return () => {
      scroller.removeEventListener("scroll", update);
      observer.disconnect();
    };
  }, [testimonial.quote]);

  return (
    <div className="absolute inset-0 z-30 overflow-hidden rounded-2xl border border-secondary/25 bg-white shadow-xl">
      <div
        ref={scrollerRef}
        className="h-full overflow-y-auto overscroll-contain px-7 py-8 text-center"
      >
        {children}
      </div>
      {hasMoreBelow && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 rounded-b-2xl bg-gradient-to-t from-white via-white/85 to-transparent" />
      )}
    </div>
  );
};

// Quotes are trimmed to six lines before the reader has to open them. Eight only
// caught the two longest reviews and left the block as uneven as before; six
// trims about half of them, so the quotes read at a similar length.
// Tailwind's line-clamp utility is what emits the -webkit-box display and
// box-orient that Safari and Firefox both require; setting -webkit-line-clamp
// alone only happens to work in Chromium.
const QUOTE_CLAMP_CLASS = "line-clamp-[6]";

type QuotePreviewProps = {
  testimonial: Testimonial;
  isClamped: boolean;
  isExpanded: boolean;
  onToggle: () => void;
  registerQuote: (element: HTMLElement | null) => void;
};

const QuotePreview = ({
  testimonial,
  isClamped,
  isExpanded,
  onToggle,
  registerQuote,
}: QuotePreviewProps) => {
  // Paragraph breaks are worth their space in the full review but waste lines in
  // a trimmed preview, so the preview runs them together.
  const preview = testimonial.quote.replace(/\s*\n+\s*/g, " ");

  const quote = (
    <blockquote
      ref={registerQuote}
      className={`font-serif italic text-primary/90 leading-relaxed text-[0.95rem] ${QUOTE_CLAMP_CLASS}`}
    >
      {preview}
    </blockquote>
  );

  if (!isClamped) {
    return <div className="mb-7">{quote}</div>;
  }

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={isExpanded}
      className="mb-7 block w-full cursor-pointer rounded-lg text-center transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50"
    >
      {quote}
      <span className="mt-3 inline-block text-xs uppercase tracking-widest text-secondary/80 underline underline-offset-4">
        Read full review
      </span>
    </button>
  );
};

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
  const heroImgRef = useRef<HTMLImageElement>(null);
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const touringSeasonOpen = useTouringSeasonOpen();
  // Set while a smooth scroll is running, so the loop recentring does not
  // cancel the animation by reassigning scrollLeft mid-flight.
  const isProgrammaticScrollRef = useRef(false);
  const programmaticScrollTimeoutRef = useRef<number | null>(null);
  // Once the reader drives the rail themselves, stop repositioning it for them.
  const hasUserDrivenRailRef = useRef(false);

  // Long reviews are clamped to a fixed number of lines so every card reads at a
  // similar length; the full text opens on hover, focus or tap.
  const [expandedQuote, setExpandedQuote] = useState<number | null>(null);
  const expandedQuoteRef = useRef<number | null>(null);
  // Dismissing a card while the pointer is still over it would otherwise reopen
  // it instantly: unmounting the panel under the cursor re-fires the card's
  // mouseenter. Hover stays suppressed until the pointer actually leaves.
  const [hoverSuppressedFor, setHoverSuppressedFor] = useState<number | null>(null);
  // Which reviews actually overflow the clamp - only those get an affordance.
  const [clampedQuotes, setClampedQuotes] = useState<Set<number>>(new Set());
  const quoteElementsRef = useRef(new Map<number, HTMLElement>());

  // Three reviews fit one desktop row; any more and the rail becomes a carousel
  // at every breakpoint so extra reviews never leave a ragged trailing row.
  const testimonialsOverflowDesktop = TESTIMONIALS.length > 3;

  // The carousel loops by rendering three copies of the list and silently
  // recentring on the middle one whenever the reader drifts into an outer copy.
  // Because every copy is identical the jump is invisible, and native scrolling,
  // snapping and touch momentum all keep working. The outer copies are hidden
  // from assistive tech so the reviews are only announced once.
  const TESTIMONIAL_COPIES = 3;
  const middleCopy = Math.floor(TESTIMONIAL_COPIES / 2);
  const railSlides = testimonialsOverflowDesktop
    ? Array.from({ length: TESTIMONIAL_COPIES }, (_, copy) =>
        TESTIMONIALS.map((testimonial, realIndex) => ({ testimonial, realIndex, copy })),
      ).flat()
    : TESTIMONIALS.map((testimonial, realIndex) => ({ testimonial, realIndex, copy: 0 }));

  // Index within railSlides where the middle copy starts.
  const loopStartPosition = testimonialsOverflowDesktop ? middleCopy * TESTIMONIALS.length : 0;

  const getRailSlides = (track: HTMLDivElement) =>
    Array.from(track.querySelectorAll<HTMLElement>("[data-slide-position]"));

  // Distance between the same card in consecutive copies, gap included.
  const getCopyWidth = (slides: HTMLElement[]) =>
    slides.length > TESTIMONIALS.length
      ? slides[TESTIMONIALS.length].offsetLeft - slides[0].offsetLeft
      : 0;

  // Keep the scroll position inside the middle copy so there is always a full
  // copy of runway in either direction.
  const recentreLoop = (track: HTMLDivElement) => {
    if (!testimonialsOverflowDesktop || isProgrammaticScrollRef.current) return;

    const slides = getRailSlides(track);
    const copyWidth = getCopyWidth(slides);
    if (copyWidth <= 0) return;

    // "instant" is required, not cosmetic: the rail sets CSS scroll-behavior:
    // smooth, which both scrollLeft assignment and behavior:"auto" defer to, and
    // an animated jump would visibly whip the rail back a whole copy.
    const base = slides[loopStartPosition].offsetLeft;
    if (track.scrollLeft < base - copyWidth / 2) {
      track.scrollTo({ left: track.scrollLeft + copyWidth, behavior: "instant" });
    } else if (track.scrollLeft > base + copyWidth / 2) {
      track.scrollTo({ left: track.scrollLeft - copyWidth, behavior: "instant" });
    }
  };

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

    // Open on the first review of the middle copy, so there is a full copy of
    // rail to scroll through in either direction before anything recentres.
    const applyStartPosition = () => {
      const slides = getRailSlides(track);
      if (slides.length === 0) return;

      // Centring the first review would park the previous one (the oldest) on its
      // left, since a looping rail has no left edge. Centre the middle of the
      // visible run instead, so the rail opens on the newest reviews exactly as a
      // non-looping one did: three across on desktop, one on mobile.
      const pitch = slides.length > 1 ? slides[1].offsetLeft - slides[0].offsetLeft : 0;
      const visibleCount = pitch > 0 ? Math.max(1, Math.round(track.clientWidth / pitch)) : 1;
      const centreOffset = Math.floor(visibleCount / 2);

      const firstSlide = track.querySelector<HTMLElement>(
        `[data-slide-position="${loopStartPosition + centreOffset}"]`,
      );
      if (!firstSlide) return;

      // Set the testimonial rail position without scrolling the page vertically.
      const targetLeft = firstSlide.offsetLeft - (track.clientWidth - firstSlide.offsetWidth) / 2;
      const clampedLeft = Math.max(0, Math.min(targetLeft, track.scrollWidth - track.clientWidth));
      track.scrollTo({ left: clampedLeft, behavior: "instant" });
    };

    const frame = requestAnimationFrame(applyStartPosition);

    // Web fonts and the reveal animation land after mount and reflow the rail,
    // which drags its scroll offset along. With three copies there is no left
    // edge to clamp against any more, so without this the rail can settle in the
    // middle of the list. Re-apply until the reader takes over.
    const reapply = () => {
      if (!hasUserDrivenRailRef.current) applyStartPosition();
    };

    // The track's own box is fixed by its container, so watch a card instead -
    // the cards are what reflow as fonts swap in and heights equalise.
    const observer = new ResizeObserver(reapply);
    observer.observe(track);
    const firstCard = track.firstElementChild;
    if (firstCard) observer.observe(firstCard);

    // Font swap reflows the rail after the observer has already settled once.
    let cancelled = false;
    document.fonts?.ready.then(() => {
      if (!cancelled) requestAnimationFrame(reapply);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [loopStartPosition]);

  useEffect(() => {
    const measure = () => {
      // Skip while a card is open: its clamp is lifted, so it would measure as
      // not overflowing and the affordance would vanish under the reader.
      if (expandedQuoteRef.current !== null) return;

      const next = new Set<number>();
      quoteElementsRef.current.forEach((element, realIndex) => {
        if (element.scrollHeight > element.clientHeight + 1) next.add(realIndex);
      });

      setClampedQuotes((previous) => {
        const unchanged =
          previous.size === next.size && [...next].every((index) => previous.has(index));
        return unchanged ? previous : next;
      });
    };

    measure();

    // Card width and font swap both change where the clamp falls.
    const observer = new ResizeObserver(measure);
    quoteElementsRef.current.forEach((element) => observer.observe(element));
    let cancelled = false;
    document.fonts?.ready.then(() => {
      if (!cancelled) measure();
    });

    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    expandedQuoteRef.current = expandedQuote;
  }, [expandedQuote]);

  useEffect(() => {
    if (expandedQuote === null) return;
    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setHoverSuppressedFor(expandedQuote);
      setExpandedQuote(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [expandedQuote]);

  useEffect(
    () => () => {
      if (programmaticScrollTimeoutRef.current !== null) {
        window.clearTimeout(programmaticScrollTimeoutRef.current);
      }
    },
    [],
  );

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

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const img = heroImgRef.current;
    if (!img) return;
    const onScroll = () => {
      img.style.transform = `translateY(${window.scrollY * 0.22}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
  const introCards: HomepageIntroCard[] =
    cmsHomepage?.introCards?.filter((card) => Boolean(card?.text)) ||
    content.homepage.intro.text.map((text) => ({ text }));
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

    // A looping rail holds the same review in every copy; scroll to whichever
    // instance is closest, so stepping past the last card continues forwards
    // into the next copy rather than rewinding the whole rail.
    const matches = getRailSlides(track).filter(
      (slide) => Number(slide.dataset.testimonialIndex) === normalizedIndex,
    );
    if (matches.length === 0) return;

    const viewportCentre = track.scrollLeft + track.clientWidth / 2;
    const slide = matches.reduce((closest, candidate) => {
      const candidateDistance = Math.abs(candidate.offsetLeft + candidate.offsetWidth / 2 - viewportCentre);
      const closestDistance = Math.abs(closest.offsetLeft + closest.offsetWidth / 2 - viewportCentre);
      return candidateDistance < closestDistance ? candidate : closest;
    });

    isProgrammaticScrollRef.current = true;
    if (programmaticScrollTimeoutRef.current !== null) {
      window.clearTimeout(programmaticScrollTimeoutRef.current);
    }
    programmaticScrollTimeoutRef.current = window.setTimeout(() => {
      isProgrammaticScrollRef.current = false;
      programmaticScrollTimeoutRef.current = null;
      if (testimonialTrackRef.current) recentreLoop(testimonialTrackRef.current);
    }, 700);

    slide.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    setActiveTestimonialIndex(normalizedIndex);
  };

  const handleTestimonialScroll = () => {
    const track = testimonialTrackRef.current;
    if (!track) return;

    const slides = getRailSlides(track);
    if (slides.length === 0) return;

    const viewportCenter = track.scrollLeft + track.clientWidth / 2;
    let closestSlide = slides[0];
    let closestDistance = Number.POSITIVE_INFINITY;

    slides.forEach((slide) => {
      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
      const distance = Math.abs(slideCenter - viewportCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestSlide = slide;
      }
    });

    // Several copies share a real index, so read it off the slide rather than
    // using its position in the rail.
    const closestIndex = Number(closestSlide.dataset.testimonialIndex);
    if (!Number.isNaN(closestIndex) && closestIndex !== activeTestimonialIndex) {
      setActiveTestimonialIndex(closestIndex);
    }

    recentreLoop(track);
  };

  const markRailUserDriven = () => {
    hasUserDrivenRailRef.current = true;
  };

  const handleTestimonialKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    markRailUserDriven();

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
      keywords={["edmonton wedding venue", "outdoor wedding alberta", "multi-day wedding", "camping wedding venue", "rustic wedding alberta", "private wedding property", "weekend wedding venue", "wedding venue with accommodation", "diy wedding venue alberta", "byob wedding venue", "dog friendly wedding venue alberta"]}
    />
    <OrganizationSchema />
    <BreadcrumbSchema />
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section - Locked Composition */}
      <section className="relative w-full overflow-hidden min-h-[700px] md:min-h-[800px] lg:min-h-[900px] xl:min-h-[1000px]">
        <img
          ref={heroImgRef}
          src={heroImage}
          alt={heroImageAlt}
          loading="eager"
          decoding="async"
          // @ts-expect-error - React 18 types don't support lowercase fetchpriority, but React runtime complains about camelCase
          fetchpriority="high"
          className="absolute w-full object-cover object-[50%_40%] will-change-transform"
          style={{ top: "-8%", height: "116%" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_40%,rgba(0,0,0,0.84)_85%,rgba(0,0,0,0.96)_100%)]" />
        <Fireflies count={32} className="z-[5]" />
        <div className="absolute inset-0 z-10 flex items-end justify-center pb-8 md:pb-12 lg:pb-16">
          <div className="mx-auto w-full max-w-6xl px-4 md:px-8 text-center text-white">
            <div className="mx-auto max-w-2xl rounded-2xl md:rounded-3xl bg-[linear-gradient(to_bottom,rgba(0,0,0,0.62),rgba(0,0,0,0.53),rgba(0,0,0,0.43))] px-6 py-6 md:px-10 md:py-7 lg:px-12 lg:py-8">
              <p className="hero-rise text-[10px] md:text-xs lg:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] text-white/85" style={{ "--rise-delay": "0.1s" } as React.CSSProperties} data-sanity={sanityDataAttribute ? sanityDataAttribute("heroKicker") : undefined}>
                {heroKicker}
              </p>
              <h1 className="mt-3 md:mt-4 lg:mt-5 font-serif font-normal leading-[1.05] [text-wrap:balance] [text-shadow:_0_2px_12px_rgba(0,0,0,0.5)]">
                <span className="hero-rise block text-white text-3xl md:text-5xl lg:text-6xl" style={{ "--rise-delay": "0.25s" } as React.CSSProperties} data-sanity={sanityDataAttribute ? sanityDataAttribute("heroHeadlinePart1") : undefined}>{heroHeadlinePart1}</span>
                <span className="hero-rise block text-white text-3xl md:text-5xl lg:text-6xl" style={{ "--rise-delay": "0.4s" } as React.CSSProperties} data-sanity={sanityDataAttribute ? sanityDataAttribute("heroHeadlinePart2") : undefined}>{heroHeadlinePart2}</span>
                <span className="hero-rise block" style={{ "--rise-delay": "0.55s" } as React.CSSProperties}>
                  <span className="text-enchanted italic text-4xl md:text-6xl lg:text-7xl" data-sanity={sanityDataAttribute ? sanityDataAttribute("heroHeadlineHighlight") : undefined}>{heroHeadlineHighlight}</span>
                </span>
              </h1>
              <p className="hero-rise mx-auto mt-3 md:mt-4 lg:mt-5 max-w-3xl text-sm md:text-base lg:text-lg text-white/95" style={{ "--rise-delay": "0.72s" } as React.CSSProperties} data-sanity={sanityDataAttribute ? sanityDataAttribute("heroSubheadline") : undefined}>
                {heroSubheadline}
              </p>
              <div className="hero-rise mt-5 md:mt-6 lg:mt-7 flex flex-col items-center gap-3 md:gap-4 sm:flex-row sm:justify-center" style={{ "--rise-delay": "0.88s" } as React.CSSProperties}>
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

      <section className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="font-serif text-2xl md:text-3xl">2027 wedding weekends from $6,500*</p>
          {touringSeasonOpen && <p className="mt-2 text-sm md:text-base">Tour appointments are available before our September 27 touring season ends. You can still inquire about 2027 dates afterward.</p>}
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Link to="/contact"><CTAButton>Request a Tour</CTAButton></Link>
            <Link to="/contact?intent=question"><Button variant="outline">Ask a Question</Button></Link>
          </div>
          <p className="mt-3 text-xs">* GST not included.</p>
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
              <h2 className="display-lg font-serif text-primary">
                What couples had to say about Rustic Retreat
              </h2>
              <Flourish className="text-secondary/60 mt-5" size="md" />
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
                  onPointerDown={markRailUserDriven}
                  onTouchStart={markRailUserDriven}
                  onWheel={markRailUserDriven}
                  className={`flex gap-5 lg:gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-4 md:px-0 ${
                    testimonialsOverflowDesktop ? "" : "md:grid md:grid-cols-3 md:overflow-visible md:snap-none"
                  }`}
                >
                  {railSlides.map(({ testimonial, realIndex, copy }, position) => {
                    const isClamped = clampedQuotes.has(realIndex);
                    const isExpanded = expandedQuote === position;

                    return (
                    <article
                      key={`${copy}-${testimonial.name}-${testimonial.date}`}
                      data-slide-position={position}
                      data-testimonial-index={realIndex}
                      // Only the middle copy is announced; the rest are scroll runway.
                      aria-hidden={testimonialsOverflowDesktop && copy !== middleCopy}
                      className={`snap-center shrink-0 w-[88%] sm:w-[80%] ${
                        testimonialsOverflowDesktop
                          ? "md:w-[calc((100%-2.5rem)/3)] lg:w-[calc((100%-4rem)/3)]"
                          : "md:shrink md:flex-1 md:w-auto"
                      }`}
                    >
                      <div
                        className="card-enchant relative bg-white/70 backdrop-blur-sm rounded-2xl border border-secondary/15 px-7 py-8 shadow-soft flex flex-col h-full text-center"
                        onMouseEnter={() => {
                          if (isClamped && hoverSuppressedFor !== position) setExpandedQuote(position);
                        }}
                        onMouseLeave={() => {
                          setExpandedQuote((open) => (open === position ? null : open));
                          setHoverSuppressedFor((suppressed) =>
                            suppressed === position ? null : suppressed,
                          );
                        }}
                      >
                        {/* Stars */}
                        <div className="flex justify-center gap-1 mb-5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                          ))}
                        </div>
                        {/* Quotes vary a lot in length; centre them so short ones
                            don't leave a gap when cards stretch to equal height. */}
                        <div className="flex-1 flex flex-col justify-center">
                          {/* Decorative opening quote */}
                          <div className="quote-glyph font-serif text-[6rem] -mb-4 select-none" aria-hidden="true">"</div>
                          <QuotePreview
                            testimonial={testimonial}
                            isClamped={isClamped}
                            isExpanded={isExpanded}
                            onToggle={() => {
                              const closing = expandedQuote === position;
                              setHoverSuppressedFor(closing ? position : null);
                              setExpandedQuote(closing ? null : position);
                            }}
                            registerQuote={(element) => {
                              // Measure one copy per review; the clones are identical.
                              if (copy !== middleCopy) return;
                              if (element) quoteElementsRef.current.set(realIndex, element);
                              else quoteElementsRef.current.delete(realIndex);
                            }}
                          />
                        </div>
                        <div className="mt-auto">
                          <p className="font-handwriting text-secondary text-2xl leading-none">{testimonial.name}</p>
                          <p className="text-xs text-muted-foreground mt-1.5 tracking-widest uppercase">
                            {testimonial.date}
                            {testimonial.source && testimonial.source !== "Direct" && (
                              <span className="text-muted-foreground/70"> &middot; via {testimonial.source}</span>
                            )}
                          </p>
                        </div>

                        {/* The full review covers the card rather than growing it,
                            so opening one never resizes the rail or shunts its
                            neighbours. It has to sit inside the card: the rail is a
                            horizontal scroll container, which clips its children on
                            both axes, so a panel overflowing the card is cut off.
                            Long reviews scroll within it instead. */}
                        {isExpanded && (
                          <ExpandedQuotePanel testimonial={testimonial}>
                            <div className="flex justify-center gap-1 mb-5">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                              ))}
                            </div>
                            <blockquote className="font-serif italic text-primary/90 leading-relaxed text-[0.95rem] whitespace-pre-line">
                              {testimonial.quote}
                            </blockquote>
                            <p className="font-handwriting text-secondary text-2xl leading-none mt-6">{testimonial.name}</p>
                            <p className="text-xs text-muted-foreground mt-1.5 tracking-widest uppercase">
                              {testimonial.date}
                              {testimonial.source && testimonial.source !== "Direct" && (
                                <span className="text-muted-foreground/70"> &middot; via {testimonial.source}</span>
                              )}
                            </p>
                          </ExpandedQuotePanel>
                        )}
                      </div>
                    </article>
                    );
                  })}
                </div>
              </div>

              {/* Dot indicators - shown wherever the rail scrolls */}
              <div className={`mt-5 flex items-center justify-center gap-2 ${
                testimonialsOverflowDesktop ? "" : "md:hidden"
              }`}>
                {TESTIMONIALS.map((testimonial, index) => (
                  <button
                    key={`${testimonial.name}-${testimonial.date}-dot`}
                    type="button"
                    aria-label={`Go to testimonial ${index + 1}`}
                    aria-current={activeTestimonialIndex === index ? "true" : undefined}
                    onClick={() => {
                      markRailUserDriven();
                      scrollToTestimonial(index);
                    }}
                    className={`h-2 rounded-full transition-all ${activeTestimonialIndex === index ? "w-6 bg-secondary" : "w-2 bg-secondary/35 hover:bg-secondary/60"}`}
                  />
                ))}
              </div>

              {/* Link out to the full, independently hosted review list */}
              <div className="mt-8 text-center">
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-primary/80 hover:text-primary underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors"
                >
                  Read every review on Google
                  <ChevronRight className="w-4 h-4" />
                </a>
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
                Booking now open for 2027 &amp; 2028
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
              <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">
                While traditional venues say<br /><span className="italic text-muted-foreground">"this is what you're allowed to do, and the schedule you'll follow,"</span><br />we ask <span className="italic text-secondary">"what do you want to create?"</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                No rigid timelines. No cookie-cutter packages. Just you, your people, and multiple days to bring your celebration to life.
              </p>
              <Flourish className="text-secondary/55" size="lg" />
            </div>
          </ScrollReveal>

          {/* Cinematic Image Row */}
          <div className="grid grid-cols-3 gap-2 md:gap-4 max-w-6xl mx-auto">
            <ScrollReveal delay={0}>
              <HoverImage src={ceremonyWideShot} alt="Wide outdoor ceremony with wedding party in forest clearing at Rustic Retreat" description="Your ceremony in the heart of the forest-surrounded by nature and loved ones" category="Ceremony" className="h-48 md:h-72 shadow-soft" />
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <HoverImage src={coupleWalkingTrail} alt="Newlyweds walking hand in hand down forest trail at Lac La Nonne wedding venue" description="Just married-strolling the forest trails, just the two of you" category="Portraits" className="h-48 md:h-72 shadow-soft" />
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <HoverImage src={cakeCutting} alt="Cake cutting and first bite moment under rustic pavilion" description="Sweet moments-cutting the cake and sharing the first bite" category="Reception" className="h-48 md:h-72 shadow-soft" />
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
              <h2 className="display-lg font-serif mb-4">
                Take a virtual walk with us
              </h2>
              <Flourish className="text-secondary/55" size="md" />
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
              <h2 className="display-lg font-serif mb-4">This is for couples who want...</h2>
              <Flourish className="text-secondary/55 lg:mx-0" size="md" />
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-10 items-stretch">
            <div className="grid sm:grid-cols-2 gap-4">
              {introCards.map((card, index) => (
                <ScrollReveal key={card._key || index} delay={index * 100}>
                  <div className="card-enchant bg-card p-5 rounded-2xl shadow-soft h-full border border-secondary/10">
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
      <div className="text-center py-8 bg-card">
        <Link to="/contact"><CTAButton>Request a Tour</CTAButton></Link>
      </div>
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
                  "We didn't want to build just another venue. We wanted to create something deeper-a place where people could slow down, truly connect, and celebrate life and love across an
                  <span className="block text-center -ml-[10%] text-[#D8A799] italic text-[1.2em]">entire weekend."</span>
                </blockquote>
                <p className="mt-4 text-sm text-primary-foreground/80">
                  - Chris & Shannon
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
                <div className="relative overflow-hidden rounded-3xl enchanted-glow w-full max-w-[520px] img-card">
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
              <div className="card-enchant bg-background p-6 rounded-2xl shadow-soft text-center h-full border border-secondary/10">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">Fireworks & Sparklers</h3>
                <p className="text-sm text-muted-foreground">Light up the night sky with an unforgettable full fireworks display and a sparkler send-off.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="card-enchant bg-background p-6 rounded-2xl shadow-soft text-center h-full border border-secondary/10">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Music className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">Live Bands & DJs</h3>
                <p className="text-sm text-muted-foreground">Go all out. Bring in an incredible live band or DJ to keep the dance floor packed late into the night.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="card-enchant bg-background p-6 rounded-2xl shadow-soft text-center h-full border border-secondary/10">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Flag className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">Epic Outdoor Activities</h3>
                <p className="text-sm text-muted-foreground">Rent a giant inflatable obstacle course or set up a massive slip-and-slide for unapologetic fun.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="card-enchant bg-background p-6 rounded-2xl shadow-soft text-center h-full border border-secondary/10">
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
                <h2 className="display-lg font-serif mb-3 text-primary">
                  Choose your weekend
                </h2>
                <Flourish className="text-secondary/60 mb-4" size="md" />
                <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base mb-2">
                  Pick the timeline that fits your vision-then make the land your own.
                </p>
                <p className="text-xs text-secondary font-medium">
                  Popular dates book 12-18 months in advance
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
              {[...content.packages.packages].reverse().map((pkg, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card
                    className={`card-enchant bg-card group h-full min-h-[300px] relative overflow-hidden flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${pkg.isRecommended
                      ? "border-2 border-secondary shadow-medium"
                      : "border border-border"
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
                    <CardContent className={`w-full p-6 text-center ${pkg.isRecommended ? "pt-10" : ""}`}>
                      <h3 className="text-xl font-serif font-semibold mb-1">{pkg.shortName}</h3>
                      <p className="text-xs text-muted-foreground mb-4">{pkg.duration}</p>
                      <p className="text-3xl font-serif text-secondary mb-1">${pkg.price}*</p>
                      <p className="text-xs text-muted-foreground mb-4">{pkg.subtitle}</p>
                      <Link to="/contact" className="inline-flex rounded-full bg-secondary px-5 py-2 text-sm font-medium text-secondary-foreground hover:bg-secondary-dark">Request a Tour</Link>
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
                <div className="mt-4"><Link to="/contact"><CTAButton>Request a Tour</CTAButton></Link></div>
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

      {/* Placeholder: "Our Story" section intentionally hidden for now. Re-enable once additional bride stories are available. */}
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
          <Fireflies count={36} className="z-[1]" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <ScrollReveal>
            <Heart className="w-10 h-10 text-secondary mx-auto mb-6 animate-float" />
            <h2 className="display-lg font-serif text-primary-foreground mb-6">
              Come see if this is where your <span className="italic text-enchanted">Forever</span> begins
            </h2>
            <Flourish className="text-secondary/70 mb-6" size="md" />
            <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
              Most couples know within 10 minutes of walking the property.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <CTAButton className="text-lg px-12 py-6">
                  Request a Tour
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
