import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import weddingParty from "@/assets/gallery/wedding-party-group.jpg";
import propertyAerial from "@/assets/property-aerial.jpg";
import campfireNight from "@/assets/campfire-night.jpg";
import { Heart, Clock, Sparkles, MapPin } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="section mt-20 pt-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            This Is How Weddings Were Always Meant to Feel
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            You've been to those weddings. You know the ones. They cost a fortune, looked perfect in photos, and somehow felt... hollow. There has to be a better way.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section section-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={weddingParty}
                alt="Real wedding celebration at Rustic Retreat Alberta with full wedding party and family group photo at forest gazebo ceremony space"
                className="rounded-lg shadow-xl"
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
      <section className="section">
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
              <div className="bg-muted/50 p-6 rounded-lg">
                <p className="font-medium mb-2">A 6-hour wedding?</p>
                <p className="text-muted-foreground">Beautiful, but rushed. Everyone's on their best behavior. Surface-level conversations. Photo-worthy but not soul-filling.</p>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg">
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

      {/* Your Vision */}
      <section className="section section-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-10 h-10 text-secondary" />
              <h2 className="text-3xl md:text-4xl font-bold">Your Wedding, Your Vision, Your Freedom</h2>
            </div>

            <p className="text-lg mb-6">
              Notice how we haven't handed you a menu of three identical packages? How we haven't told you which flowers to choose or which schedule to follow?
            </p>

            <p className="mb-6 font-medium text-lg">
              That's intentional.
            </p>

            <p className="mb-6 text-muted-foreground">
              You're not booking a pre-packaged experience. You're claiming a canvas—65 acres of Alberta wilderness where your vision becomes reality. Want Tuesday yoga, Wednesday wine tasting, Thursday cooking competition, Friday bonfire, Saturday wedding, Sunday recovery brunch? <strong>Do it.</strong>
            </p>

            <p className="text-muted-foreground">
              Bring your own vendors. Use our trusted partners. Mix and match. Create something that feels so <em>you</em> that your guests will never forget it.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Makes Rustic Retreat Different From Other Alberta Wedding Venues</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card p-6 rounded-lg border-2 hover:border-secondary transition-colors">
              <MapPin className="w-8 h-8 text-secondary mb-3" />
              <h3 className="text-xl font-semibold mb-3">The Space</h3>
              <p className="text-muted-foreground">
                65 private acres that become your temporary home. Not a "venue" you rent for hours. Not a space with 6 other weddings that same weekend. <strong>Yours. Completely.</strong>
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
                A fraction of what traditional Edmonton wedding venues charge, with infinitely more freedom and authenticity. Spend money on your marriage, not just your wedding day.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border-2 hover:border-secondary transition-colors">
              <Sparkles className="w-8 h-8 text-secondary mb-3" />
              <h3 className="text-xl font-semibold mb-3">The Transparency</h3>
              <p className="text-muted-foreground">
                You can't book until you visit. Because we want you certain, not just committed. And when you <em>are</em> certain? Payment plans make it manageable.
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
                This is the one you can't photograph, but you'll know it the moment you arrive: relief. Rightness. The sense that you're finally planning something true.
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
                Imagine waking up on your wedding day, not in a hotel room, but in a sun-drenched cabin surrounded by Alberta forest. Imagine your guests arriving Friday evening, setting up camp, and immediately feeling their shoulders drop.
              </p>

              <p className="mb-6 text-muted-foreground">
                This isn't a venue where nature is the "rustic touch." Nature is the main event, and your wedding gets to be part of its rhythm.
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
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Accessible from St. Albert, Morinville, and surrounding areas</span>
                </div>
              </div>
            </div>

            <div>
              <img 
                src={propertyAerial}
                alt="Aerial view of 65-acre Rustic Retreat Alberta property with forest and open meadows"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">We Only Work With Couples Who Want This</h2>
          
          <div className="max-w-3xl mx-auto space-y-6 text-left">
            <div>
              <p className="text-lg mb-4">Not every couple is right for Rustic Retreat, and that's okay. If you want:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>A traditional ballroom with crystal chandeliers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>A venue that provides everything so you don't have to think</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>A one-day event that starts and ends on schedule</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Something cookie-cutter that's been done a thousand times</span>
                </li>
              </ul>
              <p className="mt-4 font-medium">
                We're not your place. And we'll tell you that honestly.
              </p>
            </div>

            <div className="bg-primary/5 p-8 rounded-lg border-l-4 border-primary">
              <p className="text-lg font-medium mb-4">But if you want:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Nature as your backdrop and your witness</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Time to actually connect with your guests</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Creative freedom without the stress</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>A celebration that feels earned, not purchased</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>A weekend your family will reference for decades</span>
                </li>
              </ul>
              <p className="mt-6 text-xl font-bold">
                Then you're already home. You just haven't visited yet.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Link to="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-lg px-8">
                Schedule Your Property Visit
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
