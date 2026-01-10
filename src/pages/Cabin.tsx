import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import cabinExterior from "@/assets/cabin-exterior-forest.avif";
import bridalPortrait from "@/assets/gallery/bridal-portrait-porch.jpg";
import forestPath from "@/assets/gallery/forest-path-photos.avif";
import { Home, Coffee, Sparkles, Sun, Users, Battery } from "lucide-react";

const Cabin = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden mt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${cabinExterior})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/60 to-primary/70" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Where Your Forever Begins in Perfect Privacy
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-fade-in-up text-primary-foreground/90">
            While your celebration continues around the campfire, slip away to your own forest sanctuary and remember why you're doing all of this.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-6 text-muted-foreground">
              Picture this moment:
            </p>

            <p className="text-lg mb-6">
              It's Saturday night. The toasts have been made, the dancing exhausted, the stars impossibly bright. Your guests are still gathered around the fire, telling stories about you, about love, about life. And you—you and your brand new spouse—slip away.
            </p>

            <p className="text-lg mb-6">
              Down a path lit by lanterns. Through the trees that have witnessed your vows. To a cabin that's been waiting just for you.
            </p>

            <div className="bg-primary/5 p-8 rounded-lg border-l-4 border-primary">
              <p className="text-xl font-bold">
                This is where the performance ends and the marriage begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Not a Hotel Room */}
      <section className="section section-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Not a Hotel Room. Not Even Close.</h2>
            
            <p className="mb-6 text-muted-foreground">
              You're not checking into some generic suite where your wedding photos go to die. You're walking into a space that understands what you need right now: privacy, intimacy, and the chance to finally <em>exhale</em>.
            </p>

            <p className="mb-6 text-lg">
              <strong>Off-grid but perfectly appointed.</strong> Solar-powered but fully comfortable. Rustic in all the ways that matter (wood beams, forest views, the sound of absolutely nothing) and modern where it counts (cozy bed, morning coffee setup, your own little world).
            </p>

            <p className="text-muted-foreground">
              This isn't just accommodation—it's your private newlywed sanctuary on our Alberta property, where the only agenda is each other.
            </p>
          </div>
        </div>
      </section>

      {/* Morning After */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Coffee className="w-10 h-10 text-secondary" />
              <h2 className="text-3xl md:text-4xl font-bold">The Morning After Will Be Your First Favorite Married Memory</h2>
            </div>

            <p className="text-lg mb-6">
              Imagine waking up to this:
            </p>

            <div className="space-y-4 mb-8 text-muted-foreground">
              <p>Sunlight filtering through pine trees. Your spouse's hand finding yours. Coffee brewing in the Keurig because someone thought ahead.</p>
              
              <p>And when you step onto the cabin porch in your pajamas, carrying those warm mugs, you hear it: the sounds of your wedding weekend continuing without you.</p>
              
              <p>Distant laughter. Someone making breakfast over the campfire. The crunch of footsteps on the trail. Your nephew yelling, "I found a frog!"</p>
            </div>

            <div className="bg-secondary/10 p-8 rounded-lg border-2 border-secondary">
              <p className="text-xl font-medium mb-3">
                You're not separated from the celebration. You're just wrapped in each other first.
              </p>
              <p className="text-muted-foreground">
                And when you're ready—maybe noon, maybe later—you'll wander back, and everyone will cheer, and someone will hand you pancakes, and you'll realize: this is what marriage is supposed to feel like. <strong>Present. Unhurried. Surrounded by love.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Opportunities */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src={bridalPortrait}
                alt="Bride portrait on rustic cabin porch at Rustic Retreat Weddings Alberta venue with natural forest background"
                className="rounded-lg shadow-xl"
              />
              <img 
                src={forestPath}
                alt="Forest trail photo spot for wedding portraits at Rustic Retreat with couple walking wooded path"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Picture-Perfect From Every Angle</h2>
              <p className="text-lg mb-6">
                The cabin's rustic charm creates stunning backdrops for bridal portraits, getting-ready photos, and those quiet couple moments your photographer will treasure.
              </p>
              <p className="text-muted-foreground mb-6">
                Wooden porch with forest views. Soft natural light filtering through trees. Authentic Alberta wilderness surrounding your private sanctuary.
              </p>
              <p className="font-medium">
                Your wedding album will tell a story of genuine beauty—no artificial backdrops needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="section section-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What's Inside Your Private Sanctuary</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-secondary transition-colors">
              <CardContent className="pt-6">
                <Battery className="w-8 h-8 text-secondary mb-3" />
                <h3 className="font-semibold mb-2">Off-Grid Solar Power</h3>
                <p className="text-sm text-muted-foreground">
                  Modern comfort without sacrificing the off-grid experience. All the electricity you need, powered by Alberta sunshine.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-colors">
              <CardContent className="pt-6">
                <Users className="w-8 h-8 text-secondary mb-3" />
                <h3 className="font-semibold mb-2">Sleeps 4 Comfortably</h3>
                <p className="text-sm text-muted-foreground">
                  Perfect for a wedding night retreat, or bring your parents or best friends Sunday morning for coffee and recap.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-colors">
              <CardContent className="pt-6">
                <Coffee className="w-8 h-8 text-secondary mb-3" />
                <h3 className="font-semibold mb-2">Coffee Station</h3>
                <p className="text-sm text-muted-foreground">
                  Keurig machine with pods provided—because morning-after coffee is essential, and you shouldn't have to walk to the main area.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-colors">
              <CardContent className="pt-6">
                <Home className="w-8 h-8 text-secondary mb-3" />
                <h3 className="font-semibold mb-2">Comfortable Furnishings</h3>
                <p className="text-sm text-muted-foreground">
                  Cozy bed, seating area, charming rustic touches that photograph beautifully.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-colors">
              <CardContent className="pt-6">
                <Sun className="w-8 h-8 text-secondary mb-3" />
                <h3 className="font-semibold mb-2">Forest Views</h3>
                <p className="text-sm text-muted-foreground">
                  Wake up to Alberta wilderness stretching in every direction. No buildings. No roads. Just trees and sky.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-colors">
              <CardContent className="pt-6">
                <Sparkles className="w-8 h-8 text-secondary mb-3" />
                <h3 className="font-semibold mb-2">Complete Privacy</h3>
                <p className="text-sm text-muted-foreground">
                  Close enough to hear the joy of your celebration, far enough to be completely alone.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tradition Worth Starting */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">A Tradition Worth Starting</h2>
            
            <p className="mb-6 text-lg">
              Many of our couples create a new tradition at our Alberta wedding venue:
            </p>

            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border-l-4 border-secondary">
                <h3 className="font-semibold mb-2">Wedding night:</h3>
                <p className="text-muted-foreground">
                  Just the two of you in the cabin. No interruptions. No distractions. Your first night as married humans in the forest that witnessed your vows.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border-l-4 border-secondary">
                <h3 className="font-semibold mb-2">Sunday morning:</h3>
                <p className="text-muted-foreground">
                  Bring your parents (or best friends, or siblings) to the cabin for coffee in pajamas and quiet recap. The intimacy of newlyweds combined with the wisdom of the people who raised you.
                </p>
              </div>
            </div>

            <div className="bg-primary/5 p-8 rounded-lg mt-8">
              <p className="text-lg font-medium">
                These become the stories you'll tell your own children.
              </p>
              <p className="text-muted-foreground mt-3">
                Someone inevitably says, "Remember that Sunday morning after our wedding when..." and everyone smiles because they were there, and it was perfect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect for Multi-Day */}
      <section className="section section-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Perfect for Your Multi-Day Celebration</h2>
            
            <p className="mb-6 text-lg">
              The cabin is included in both our 3-day and 5-day wedding packages. Whether you're celebrating Friday through Sunday or Thursday through Monday, you have access to this private space for your entire stay.
            </p>

            <h3 className="text-xl font-semibold mb-4">Use it however serves you:</h3>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span>Newlywed retreat each night</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span>Pre-wedding quiet space for meditation or journaling</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span>Recovery space when you need 30 minutes away from the party</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span>Post-wedding family gathering space</span>
              </li>
            </ul>

            <p className="text-xl font-medium text-center">
              Your cabin. Your celebration. Your choice.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Picture Your Morning After</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Experience the cabin in person. See where your marriage story begins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Schedule Your Property Visit
              </Button>
            </Link>
            <Link to="/weddings">
              <Button size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                View Wedding Packages
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cabin;
