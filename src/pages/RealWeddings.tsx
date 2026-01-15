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
import { Calendar, Users, ArrowRight, Quote, Heart, CheckCircle2 } from "lucide-react";

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
          subtitle="Couples like you had amazing experiences here. These are their stories."
        />

        {/* Stories as Case Studies */}
        <section className="section bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-16">
              {weddingStories.map((story, index) => (
                <ScrollReveal key={story.id} delay={index * 100}>
                  <Card className="overflow-hidden border-2 hover:border-secondary transition-all duration-300">
                    <div className="grid lg:grid-cols-2 gap-0">
                      {/* Image Side */}
                      <div className="relative overflow-hidden">
                        <img 
                          src={story.heroImage} 
                          alt={`${story.coupleNames} wedding at Rustic Retreat Alberta`}
                          className="w-full h-72 lg:h-full object-cover"
                        />
                        <div className="absolute bottom-4 left-4">
                          <span className="bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-full font-medium">
                            {story.packageUsed}
                          </span>
                        </div>
                      </div>
                      
                      {/* Content Side */}
                      <CardContent className="p-8 flex flex-col justify-between">
                        <div>
                          {/* Header */}
                          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {story.season}
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="w-3 h-3" />
                              {story.guestCount} guests
                            </span>
                          </div>
                          
                          <h3 className="text-2xl font-serif font-semibold mb-2">
                            {story.coupleNames}
                          </h3>
                          <p className="text-lg font-serif italic text-secondary mb-4">
                            {story.headline}
                          </p>
                          
                          {/* Testimonial Quote - Prominent */}
                          {story.testimonialQuote && (
                            <div className="bg-secondary/10 p-4 rounded-xl mb-4">
                              <Quote className="w-5 h-5 text-secondary mb-2" />
                              <p className="font-serif italic text-primary">
                                "{story.testimonialQuote}"
                              </p>
                            </div>
                          )}
                          
                          {/* What Made It Special */}
                          {story.whatMadeItSpecial && (
                            <div className="mb-4">
                              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
                                What made their weekend special
                              </p>
                              <ul className="space-y-1">
                                {story.whatMadeItSpecial.map((item, i) => (
                                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          
                          {/* Unexpected Moment */}
                          {story.unexpectedMoment && (
                            <div className="mb-4">
                              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1">
                                Favorite unexpected moment
                              </p>
                              <p className="text-sm text-muted-foreground italic">
                                "{story.unexpectedMoment}"
                              </p>
                            </div>
                          )}
                        </div>
                        
                        {/* CTA */}
                        <Link 
                          to={`/real-weddings/${story.slug}`}
                          className="inline-flex items-center gap-2 text-secondary hover:text-secondary-dark font-medium transition-colors mt-4"
                        >
                          Read their full story <ArrowRight className="w-4 h-4" />
                        </Link>
                      </CardContent>
                    </div>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Your Story CTA */}
        <section className="section bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <ScrollReveal>
              <Heart className="w-10 h-10 text-secondary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-serif mb-6">
                Your story could be next
              </h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto text-primary-foreground/90">
                Every couple who visits knows within minutes if this is their place.
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
