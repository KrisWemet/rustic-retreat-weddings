import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import HoverImage from "@/components/HoverImage";
import SEO from "@/components/SEO";
import weddingParty from "@/assets/gallery/wedding-party-group.jpg";
import propertyAerial from "@/assets/property-aerial-view.avif";
import campfireNight from "@/assets/campfire-evening-setting.avif";
import birchGrove from "@/assets/gallery/birch-grove-altar.avif";
import { Heart, MapPin, Quote } from "lucide-react";

const About = () => {
  return (
    <PageTransition>
      <SEO 
        title="Our Story & Philosophy"
        description="Family-owned since 2006. We threw our own 120-person wedding here in 2019—complete with paintball, axe throwing, and rubber boots in the rain. Now we share it with couples who want something different."
        path="/about"
      />
      <div className="min-h-screen">
        <Navigation />
        
        <PageHero
          backgroundImage={weddingParty}
          title="Our Story"
          subtitle="We aren't in this to be rich—we want to share the country with people who don't see it everyday."
        />

        {/* Origin Story - THE LEAD */}
        <section className="section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <div className="bg-secondary/10 p-8 md:p-12 rounded-2xl border-2 border-secondary mb-12">
                  <Quote className="w-10 h-10 text-secondary mb-6" />
                  <p className="text-xl md:text-2xl font-serif leading-relaxed mb-6">
                    "In 2019, I threw my own 120-person wedding right here. I built a 40x60' pole barn. We set up paintball and axe throwing and a giant slip-and-slide. And then it rained. For three months straight."
                  </p>
                  <p className="text-xl md:text-2xl font-serif leading-relaxed mb-6">
                    "So I got married in rubber boots, in the rain, and <span className="italic text-secondary">everyone had the time of their lives.</span>"
                  </p>
                  <p className="text-lg text-muted-foreground">
                    That's when we realized: other couples deserve this too.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h2 className="text-3xl md:text-4xl font-serif mb-6">How It Started</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Family-owned since 2006. It started with annual gatherings where friends brought RVs and camped for weekends. My brother married here in 2018. Then came my own wedding in 2019—and everything changed.
                </p>
                <p className="text-lg mb-8">
                  We saw what happens when you give people <strong>time</strong> together. Real connections. Three generations playing cards until midnight. College friends meeting grandparents. Strangers becoming family.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* The Philosophy */}
        <section className="section section-muted">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <HoverImage 
                  src={propertyAerial}
                  alt="Aerial drone view of Rustic Retreat Weddings 65-acre property showing forest ceremony areas and open meadow spaces near Edmonton"
                  description="65 acres of possibility—your entire weekend awaits"
                  category="The Property"
                  className="shadow-xl"
                />
              </ScrollReveal>

              <ScrollReveal direction="right">
                <p className="section-label">THE PHILOSOPHY</p>
                <h2 className="text-3xl md:text-4xl font-serif mb-6">We believe time changes everything</h2>
                
                <p className="mb-6 text-muted-foreground">
                  Traditional venue? Beautiful, but rushed. Everyone's on their best behavior. Surface-level conversations.
                </p>

                <p className="mb-6 text-muted-foreground">
                  A 3-day weekend? Better. People start to relax. Real connections form.
                </p>

                <div className="bg-secondary/10 p-6 border-2 border-secondary rounded-xl mb-6">
                  <p className="text-lg font-medium mb-2">But a 5-day celebration?</p>
                  <p className="text-muted-foreground">
                    Everything changes. Day one, people are in "event mode." Day two, walls come down. By day three, your yoga instructor friend is teaching your accountant friend sun salutations. <span className="italic">And then your wedding happens</span>—with a community already bonded, already invested, already celebrating.
                  </p>
                </div>

                <p className="font-medium text-lg">
                  The depth is incomparable. And you can't fake it, rush it, or buy it. It only comes from time.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="section">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <p className="section-label">THE SETTING</p>
                <h2 className="text-3xl md:text-4xl font-serif mb-6">65 Acres Near Lac La Nonne</h2>
                
                <p className="mb-6 text-lg text-muted-foreground">
                  Imagine waking up on your wedding day in a sun-drenched cabin surrounded by Alberta forest. No hotel hallway. No parking garage. Just trees and sky.
                </p>

                <div className="space-y-3 bg-card p-6 rounded-xl shadow-soft">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>99 km northwest of Edmonton (about 1 hour)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Near Lac La Nonne and Pembina River</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Private 65 acres surrounded by Alberta wilderness</span>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <HoverImage 
                  src={birchGrove}
                  alt="Birch grove wedding altar surrounded by white birch trees near Edmonton"
                  description="The birch grove altar—where vows become eternal"
                  category="Ceremony Space"
                  className="shadow-xl"
                />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Ceremony Fancy, Party Casual */}
        <section className="section section-muted">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <HoverImage 
                  src={campfireNight}
                  alt="Evening campfire gathering under stars at Rustic Retreat Weddings Alberta"
                  description="Where strangers become friends under Alberta stars"
                  category="Campfire Evenings"
                  className="shadow-xl"
                />
              </ScrollReveal>
              
              <ScrollReveal direction="right">
                <h2 className="text-3xl md:text-4xl font-serif mb-6">Ceremony Fancy, Party Casual</h2>
                <p className="text-lg mb-6 text-muted-foreground">
                  Yes, you can have that elegant ceremony. The dress, the photos, the formal moments—all of it.
                </p>

                <p className="mb-6 text-muted-foreground">
                  But after the vows and portraits? Kick off the heels. Trade the tux jacket for a flannel. Because you're camping now, and the real celebration is just getting started.
                </p>

                <div className="bg-secondary/10 p-6 border-2 border-secondary rounded-xl">
                  <p className="text-lg font-medium">
                    The beauty of a multi-day celebration: you get the fancy moments AND the relaxed ones. No need to choose.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <ScrollReveal>
              <Heart className="w-10 h-10 text-secondary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-serif mb-6">Ready to See It for Yourself?</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto text-primary-foreground/90">
                Photos can only show so much. The feeling of standing in the meadow at golden hour—that you have to experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-[hsl(15,50%,75%)] via-[hsl(15,45%,65%)] to-[hsl(15,55%,80%)] hover:from-[hsl(15,55%,80%)] hover:via-[hsl(15,50%,70%)] hover:to-[hsl(15,60%,85%)] text-primary-foreground rounded-full px-8 shadow-lg">
                    Walk the Land With Us
                  </Button>
                </Link>
                <Link to="/packages">
                  <Button size="lg" variant="outline" className="border-[hsl(15,50%,75%)] text-transparent bg-clip-text bg-gradient-to-r from-[hsl(15,50%,75%)] via-[hsl(15,45%,65%)] to-[hsl(15,55%,80%)] hover:bg-primary-foreground/10 rounded-full px-8">
                    View Packages
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

export default About;
