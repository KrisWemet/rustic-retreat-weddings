import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import SEO from "@/components/SEO";
import { weddingStories } from "@/data/wedding-stories";
import { Calendar, Users, ArrowRight } from "lucide-react";

import heroImage from "@/assets/gallery/couple-kiss-meadow.avif";

const RealWeddings = () => {
  return (
    <PageTransition>
      <SEO 
        title="Real Wedding Stories"
        description="Read stories from real couples who celebrated at Rustic Retreat. Discover how multi-day wedding weekends created unforgettable memories for families and friends."
        path="/real-weddings"
      />
      <div className="min-h-screen">
        <Navigation />
        
        <PageHero
          backgroundImage={heroImage}
          title="Real Love Stories"
          subtitle="Every couple brings their own magic. These are their stories—unscripted, unfiltered, unforgettable."
        />

        {/* Stories Grid */}
        <section className="section bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-12">
                <p className="section-label">FEATURED WEDDINGS</p>
                <h2 className="text-3xl md:text-4xl font-serif mb-4">
                  See what's possible here
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Real couples, real weekends, real memories. Click to read their full stories.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {weddingStories.map((story, index) => (
                <ScrollReveal key={story.id} delay={index * 100}>
                  <Link to={`/real-weddings/${story.slug}`}>
                    <Card className="group overflow-hidden border-2 hover:border-secondary transition-all duration-300 hover:shadow-xl h-full">
                      <div className="relative overflow-hidden">
                        <img 
                          src={story.heroImage} 
                          alt={`${story.coupleNames} wedding at Rustic Retreat Alberta`}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-4 left-4 right-4 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-sm flex items-center gap-2">
                            Read their story <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {story.season}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            {story.guestCount} guests
                          </span>
                        </div>
                        <h3 className="text-xl font-serif font-semibold mb-2 group-hover:text-secondary transition-colors">
                          {story.coupleNames}
                        </h3>
                        <p className="text-lg font-serif italic text-secondary mb-3">
                          {story.headline}
                        </p>
                        <p className="text-sm text-muted-foreground line-clamp-3">
                          {story.excerpt}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Share Your Story CTA */}
        <section className="section bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">
                Ready to write your own story?
              </h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto text-primary-foreground/90">
                Your weekend, your way. Let's find out if Rustic Retreat is where your story begins.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-[hsl(15,50%,75%)] via-[hsl(15,45%,65%)] to-[hsl(15,55%,80%)] hover:from-[hsl(15,55%,80%)] hover:via-[hsl(15,50%,70%)] hover:to-[hsl(15,60%,85%)] text-primary-foreground rounded-full px-8 shadow-lg">
                    Walk the Land With Us
                  </Button>
                </Link>
                <Link to="/gallery">
                  <Button size="lg" variant="outline" className="bg-transparent border-white/40 text-white hover:bg-white/10 rounded-full px-8">
                    View Full Gallery
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default RealWeddings;
