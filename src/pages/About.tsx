import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import weddingParty from "@/assets/gallery/wedding-party-group.jpg";
import propertyAerial from "@/assets/property-aerial-view.avif";
import campfireNight from "@/assets/campfire-evening-setting.avif";
import ceremonySetup from "@/assets/gallery/ceremony-forest-setup.avif";
import birchGrove from "@/assets/gallery/birch-grove-altar.avif";
import { Heart, Clock, Sparkles, MapPin } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <PageHero
        backgroundImage={weddingParty}
        title="Our Story & Philosophy"
        subtitle="You've been to those weddings. They cost a fortune, looked perfect in photos, and somehow felt... hollow. There has to be a better way."
      />

      {/* Story Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={propertyAerial}
                alt="Aerial drone view of Rustic Retreat Weddings 65-acre property showing forest ceremony areas and open meadow spaces near Edmonton"
                className="shadow-xl"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Truth About Modern Weddings</h2>
              
              <p className="mb-4 text-muted-foreground">
                Somewhere along the way, weddings became performances instead of celebrations. Day-of events instead of meaningful experiences. Instagram content instead of actual connection.
              </p>

              <p className="mb-6 text-lg font-medium">
                We're bringing them back.
              </p>

              <p className="text-muted-foreground">
                Back to campfires and conversations that last past midnight. Back to mornings where your grandmother shows your fiancé her old love letters. Back to afternoons where kids play freely while adults remember what it feels like to relax.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section section-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-10 h-10 text-secondary" />
              <h2 className="text-3xl md:text-4xl font-bold">The Philosophy: Time Changes Everything</h2>
            </div>

            <p className="text-lg mb-6">
              Here's what we've discovered after hosting dozens of weddings on our Alberta property: <strong>The length of your celebration directly impacts the depth of your experience.</strong>
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-card p-6 rounded-lg">
                <p className="font-medium mb-2">A 6-hour wedding?</p>
                <p className="text-muted-foreground">Beautiful, but rushed. Everyone's on their best behavior. Surface-level conversations. Photo-worthy but not soul-filling.</p>
              </div>

              <div className="bg-card p-6 rounded-lg">
                <p className="font-medium mb-2">A 3-day weekend?</p>
                <p className="text-muted-foreground">Better. People relax a little. Real connections start forming.</p>
              </div>

              <div className="bg-secondary/10 p-6 rounded-lg border-2 border-secondary">
                <p className="font-medium mb-2 text-lg">But a 5-day celebration?</p>
                <p className="text-muted-foreground">
                  Everything changes. Day one, people are still in "event mode." Day two, the walls come down. By day three, your yoga instructor friend is teaching your accountant friend sun salutations. And then your wedding happens.
                </p>
                <p className="mt-4 font-medium">
                  But now it's not strangers watching you marry. It's a community that's already bonded, already invested, already celebrating.
                </p>
              </div>
            </div>

            <div className="bg-primary/5 p-8 rounded-lg border-l-4 border-primary">
              <p className="text-xl font-medium mb-3">
                "This is why couples who choose 5 days consistently tell us: 'It was the best decision we made.'"
              </p>
              <p className="text-muted-foreground">
                The depth is incomparable. And you can't fake it, rush it, or buy it. It only comes from time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Makes Rustic Retreat Different</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card p-6 rounded-lg border-2 hover:border-secondary transition-colors">
              <MapPin className="w-8 h-8 text-secondary mb-3" />
              <h3 className="text-xl font-semibold mb-3">The Space</h3>
              <p className="text-muted-foreground">
                65 private acres that become your temporary home. Not a "venue" you rent for hours. <strong>Yours. Completely.</strong>
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border-2 hover:border-secondary transition-colors">
              <Clock className="w-8 h-8 text-secondary mb-3" />
              <h3 className="text-xl font-semibold mb-3">The Time</h3>
              <p className="text-muted-foreground">
                3 or 5 days. Your choice. (Though we'll quietly suggest 5, because we've seen what happens when you give love that much space to breathe.)
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border-2 hover:border-secondary transition-colors">
              <Heart className="w-8 h-8 text-secondary mb-3" />
              <h3 className="text-xl font-semibold mb-3">The Investment</h3>
              <p className="text-muted-foreground">
                A fraction of what traditional Edmonton wedding venues charge, with infinitely more freedom and authenticity.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border-2 hover:border-secondary transition-colors">
              <Sparkles className="w-8 h-8 text-secondary mb-3" />
              <h3 className="text-xl font-semibold mb-3">The Transparency</h3>
              <p className="text-muted-foreground">
                You can't book until you visit. Because we want you certain, not just committed.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border-2 hover:border-secondary transition-colors">
              <Clock className="w-8 h-8 text-secondary mb-3" />
              <h3 className="text-xl font-semibold mb-3">The Three-Day Reset</h3>
              <p className="text-muted-foreground">
                We give ourselves minimum 3 days between bookings—so your celebration gets fresh grass, renewed energy, and our complete attention.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border-2 hover:border-secondary transition-colors">
              <Heart className="w-8 h-8 text-secondary mb-3" />
              <h3 className="text-xl font-semibold mb-3">The Feeling</h3>
              <p className="text-muted-foreground">
                Relief. Rightness. The sense that you're finally planning something true.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section section-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Setting: 65 Acres Near Lac La Nonne</h2>
              
              <p className="mb-6 text-lg">
                Imagine waking up on your wedding day, not in a hotel room, but in a sun-drenched cabin surrounded by Alberta forest.
              </p>

              <div className="space-y-3 bg-card p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3">Location Details:</h3>
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>99 km northwest of Edmonton (approximately 1-hour drive)</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Near Lac La Nonne and Pembina River</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Private 65-acre property surrounded by Alberta wilderness</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img 
                src={ceremonySetup}
                alt="Forest wedding ceremony setup at Rustic Retreat"
                className="shadow-xl"
              />
              <img 
                src={birchGrove}
                alt="Birch grove wedding altar at Rustic Retreat"
                className="shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Campfire Evenings */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src={campfireNight}
                alt="Evening campfire gathering at Rustic Retreat Weddings"
                className="shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Campfire Evenings Create Lasting Bonds</h2>
              <p className="text-lg mb-6">
                Long after the formal celebration ends, your guests gather around crackling campfires, sharing stories, making s'mores, and creating memories.
              </p>
              <p className="text-muted-foreground mb-6">
                This is where your college friends meet your grandmother. Where strangers become friends under Alberta stars.
              </p>
              <p className="font-medium">
                The campfire doesn't care about your seating chart—it creates its own magic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to See It for Yourself?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Photos can only show so much. The feeling of standing in the meadow at golden hour—that you have to experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-[hsl(15,50%,75%)] via-[hsl(15,45%,65%)] to-[hsl(15,55%,80%)] hover:from-[hsl(15,55%,80%)] hover:via-[hsl(15,50%,70%)] hover:to-[hsl(15,60%,85%)] text-primary-foreground rounded-full px-8 shadow-lg">
                Walk the Land With Us
              </Button>
            </Link>
            <Link to="/gallery">
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rounded-full px-8">
                View Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
