import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import HoverImage from "@/components/HoverImage";
import SEO from "@/components/SEO";
import { getStoryBySlug, weddingStories } from "@/data/wedding-stories";
import { Calendar, Users, Camera, Heart, Quote, ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const WeddingStory = () => {
  const { slug } = useParams<{ slug: string }>();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  
  const story = slug ? getStoryBySlug(slug) : undefined;
  
  // Find next and previous stories for navigation
  const currentIndex = story ? weddingStories.findIndex(s => s.id === story.id) : -1;
  const prevStory = currentIndex > 0 ? weddingStories[currentIndex - 1] : null;
  const nextStory = currentIndex < weddingStories.length - 1 ? weddingStories[currentIndex + 1] : null;

  if (!story) {
    return <Navigate to="/real-weddings" replace />;
  }

  const handlePrevImage = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (selectedImageIndex !== null && selectedImageIndex < story.galleryImages.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  return (
    <PageTransition>
      <SEO
        title={`${story.coupleNames} Wedding Story`}
        description={story.excerpt}
        path={`/real-weddings/${story.slug}`}
        image={story.heroImage}
      />
      <div className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-end overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${story.heroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
          </div>
          
          <div className="relative z-10 container mx-auto px-4 pb-16 pt-32 text-primary-foreground">
            <ScrollReveal>
              <Link 
                to="/real-weddings" 
                className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Real Weddings
              </Link>
              <div className="flex flex-wrap items-center gap-4 text-sm text-primary-foreground/80 mb-4">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {story.weddingDate}
                </span>
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  {story.guestCount} guests
                </span>
                <span className="bg-secondary/20 px-3 py-1 rounded-full text-xs">
                  {story.packageUsed}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-serif mb-4">{story.coupleNames}</h1>
              <p className="text-2xl md:text-3xl font-serif italic text-secondary">
                {story.headline}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Story Content */}
        <section className="section bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Excerpt */}
              <ScrollReveal>
                <p className="text-xl text-muted-foreground leading-relaxed mb-12 italic">
                  {story.excerpt}
                </p>
              </ScrollReveal>

              {/* Main Story */}
              <ScrollReveal delay={100}>
                <div className="prose prose-lg max-w-none mb-16">
                  {story.story.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-foreground leading-relaxed mb-6">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </ScrollReveal>

              {/* Highlights */}
              <ScrollReveal delay={200}>
                <Card className="border-2 border-secondary/30 bg-secondary/5 mb-12">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-serif font-semibold mb-6 flex items-center gap-2">
                      <Heart className="w-5 h-5 text-secondary" />
                      Weekend Highlights
                    </h3>
                    <ul className="grid md:grid-cols-2 gap-4">
                      {story.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </ScrollReveal>

              {/* Favorite Memory Quote */}
              {story.favoriteMemory && (
                <ScrollReveal delay={300}>
                  <div className="bg-card p-8 rounded-2xl shadow-soft mb-12 text-center">
                    <Quote className="w-10 h-10 text-secondary/40 mx-auto mb-4" />
                    <blockquote className="text-xl font-serif italic text-primary leading-relaxed mb-4">
                      "{story.favoriteMemory}"
                    </blockquote>
                    <p className="text-muted-foreground">— {story.coupleNames.split(' & ')[0]}'s favorite memory</p>
                  </div>
                </ScrollReveal>
              )}
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="section section-cream">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-12">
                <p className="section-label">THEIR GALLERY</p>
                <h2 className="text-3xl md:text-4xl font-serif mb-4">
                  Moments from {story.coupleNames.split(' & ')[0]} & {story.coupleNames.split(' & ')[1]}'s Weekend
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {story.galleryImages.map((image, index) => (
                <ScrollReveal key={index} delay={index * 75}>
                  <div onClick={() => setSelectedImageIndex(index)}>
                    <HoverImage 
                      src={image.src} 
                      alt={image.alt}
                      description={image.caption || "Click to view full size"}
                      className="h-48 md:h-64 shadow-soft"
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {story.photographerCredit && (
              <ScrollReveal delay={400}>
                <p className="text-center text-muted-foreground text-sm mt-8 flex items-center justify-center gap-2">
                  <Camera className="w-4 h-4" />
                  Photography by {story.photographerCredit}
                </p>
              </ScrollReveal>
            )}
          </div>
        </section>

        {/* Lightbox */}
        <Dialog open={selectedImageIndex !== null} onOpenChange={() => setSelectedImageIndex(null)}>
          <DialogContent className="max-w-5xl p-0 bg-transparent border-none">
            {selectedImageIndex !== null && (
              <div className="relative">
                <img 
                  src={story.galleryImages[selectedImageIndex].src} 
                  alt={story.galleryImages[selectedImageIndex].alt}
                  className="w-full h-auto max-h-[85vh] object-contain"
                />
                {story.galleryImages[selectedImageIndex].caption && (
                  <p className="absolute bottom-0 left-0 right-0 bg-primary/80 text-primary-foreground text-center py-3 px-4">
                    {story.galleryImages[selectedImageIndex].caption}
                  </p>
                )}
                {selectedImageIndex > 0 && (
                  <button 
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary/60 hover:bg-primary/80 text-primary-foreground p-2 rounded-full transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                )}
                {selectedImageIndex < story.galleryImages.length - 1 && (
                  <button 
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/60 hover:bg-primary/80 text-primary-foreground p-2 rounded-full transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                )}
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Story Navigation */}
        <section className="py-8 bg-card border-t border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center max-w-4xl mx-auto">
              {prevStory ? (
                <Link 
                  to={`/real-weddings/${prevStory.slug}`}
                  className="flex items-center gap-3 group"
                >
                  <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-secondary transition-colors" />
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground">Previous Story</p>
                    <p className="font-serif group-hover:text-secondary transition-colors">{prevStory.coupleNames}</p>
                  </div>
                </Link>
              ) : <div />}
              
              {nextStory ? (
                <Link 
                  to={`/real-weddings/${nextStory.slug}`}
                  className="flex items-center gap-3 group"
                >
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Next Story</p>
                    <p className="font-serif group-hover:text-secondary transition-colors">{nextStory.coupleNames}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-secondary transition-colors" />
                </Link>
              ) : <div />}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">
                Ready to write your own story?
              </h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto text-primary-foreground/90">
                Every love story is different. Let's discover what yours could look like at Rustic Retreat.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-[hsl(15,50%,75%)] via-[hsl(15,45%,65%)] to-[hsl(15,55%,80%)] hover:from-[hsl(15,55%,80%)] hover:via-[hsl(15,50%,70%)] hover:to-[hsl(15,60%,85%)] text-primary-foreground rounded-full px-8 shadow-lg">
                  Discover Your Venue
                </Button>
              </Link>
            </ScrollReveal>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default WeddingStory;
