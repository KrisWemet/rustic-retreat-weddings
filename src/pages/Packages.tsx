import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { CTAButton } from "@/components/ui/cta-button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import loveMarqueeArch from "@/assets/gallery/love-marquee-arch.jpg";
import receptionTable from "@/assets/gallery/reception-table-3.jpg";
import ceremonySetupWide from "@/assets/gallery/ceremony-setup-wide.jpg";
import groomsmenToast from "@/assets/gallery/seo/rustic-retreat-weddings-lac-la-nonne-alberta-groomsmen-cheers-toast-low-angle-wedding-day-13.jpg";
import loveMarquee from "@/assets/gallery/seo/rustic-retreat-weddings-lac-la-nonne-alberta-love-marquee-letters-ceremony-arch-42.jpg";
import brideDancing from "@/assets/gallery/seo/rustic-retreat-weddings-lac-la-nonne-alberta-bride-dancing-at-rustic-pavilion-reception-20.jpg";
import weddingParty from "@/assets/gallery/wedding-party-group.jpg";
import cardBoxWineBarrel from "@/assets/gallery/card-box-wine-barrel.jpg";
import guestFavorBox from "@/assets/gallery/guest-favor-box.jpg";
import firstDanceSparklers from "@/assets/gallery/first-dance-sparklers.jpg";
import { CheckCircle, Clock, Users, Home, MapPin, Calendar, DollarSign, Sparkles, Waves, Compass, Target, Bath, Film, Music, Flag } from "lucide-react";

const Packages = () => {
  const packageSchema = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Rustic Retreat Wedding Packages",
    url: "https://www.rusticretreat.xyz/packages",
    itemListElement: [
      {
        "@type": "Offer",
        name: "The Grand Adventure",
        description: "10-day destination-style wedding experience with maximum flexibility.",
        price: "8500",
        priceCurrency: "CAD",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "The Full Experience",
        description: "5-day celebration (Wed-Sun or Thu-Mon) with immersive guest time.",
        price: "5500",
        priceCurrency: "CAD",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "The Classic Weekend",
        description: "3-day Friday-to-Sunday wedding weekend with exclusive access.",
        price: "4500",
        priceCurrency: "CAD",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "The Intimate Escape",
        description: "2-day weekday elopement experience with full property access.",
        price: "3000",
        priceCurrency: "CAD",
        availability: "https://schema.org/InStock",
      },
    ],
  };

  return (
    <>
      <SEO 
        title="Wedding Packages & Pricing"
        description="Choose from 3-day ($4,500) or 5-day ($5,500) wedding packages at Rustic Retreat. Both include exclusive property access, cabin accommodation, décor collection, and complete creative freedom."
        path="/packages"
        image={loveMarqueeArch}
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(packageSchema)}
        </script>
      </Helmet>
      <div className="min-h-screen overflow-x-hidden">
        <Navigation />
      
      {/* Hero */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0">
          <img
            src={loveMarqueeArch}
            alt="LOVE marquee letters with a ceremony arch in a forest clearing at Rustic Retreat"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/60 to-primary/70" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            The Question Isn't "Where Should We Get Married?"
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-fade-in-up text-primary-foreground/90">
            You already know where. You can feel it. The real question is: "How many days do we give ourselves to do this right?"
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-4 text-muted-foreground">
              Let's be honest about what's happening right now.
            </p>

            <p className="mb-6">
              You've toured venues around Edmonton and central Alberta. Watched a hundred wedding videos. Scrolled Instagram until the pretty pictures all blurred together. You've said "yes, but..." to a dozen options that were fine, gorgeous even, but not quite <em>right</em>.
            </p>

            <div className="grid md:grid-cols-2 gap-6 items-center my-8">
              <div className="bg-primary/5 p-8 rounded-lg border-l-4 border-primary">
                <p className="text-xl font-bold mb-3">
                  And then you found this place.
                </p>
                <p className="text-muted-foreground">
                  Something shifted when you saw those photos, didn't it? Read that description. Felt your heart start whispering, "Yes. This one. Here."
                </p>
                <p className="mt-4 font-medium">
                  That's not random. <strong>That's recognition. Your intuition already knows this is where your story wants to be told.</strong>
                </p>
              </div>
              <img
                src={weddingParty}
                alt="Wedding party celebrating at Rustic Retreat"
                className="rounded-lg shadow-lg w-full h-[300px] object-cover"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-10">
              <img
                src={groomsmenToast}
                alt="Groomsmen cheering with drinks on a forest trail at Rustic Retreat"
                className="rounded-lg shadow-lg w-full h-[240px] object-cover"
                loading="lazy"
              />
              <img
                src={loveMarquee}
                alt="LOVE marquee letters with ceremony backdrop in a forest clearing"
                className="rounded-lg shadow-lg w-full h-[240px] object-cover"
                loading="lazy"
              />
              <img
                src={brideDancing}
                alt="Bride dancing at the rustic pavilion reception at Rustic Retreat"
                className="rounded-lg shadow-lg w-full h-[240px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Four Package Options */}
      <section className="section section-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Perfect Timeline</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-3">
              From intimate elopements to the ultimate retreat—find the package that fits your vision.
            </p>
            <p className="text-sm text-secondary font-medium">
              2026 Season: Only 16 weekend dates available. June and September book first.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            {/* 10-Day Package */}
            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium mb-3">
                  Premium
                </div>
                <h3 className="text-3xl font-bold mb-3">The Grand Adventure</h3>
                <p className="text-lg text-muted-foreground mb-6">Full Experience</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">The Experience:</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Days 1-3:</strong> Early arrivals settle in. Setup at your own pace. Pre-wedding adventures.</p>
                    <p><strong>Days 4-6:</strong> Wedding events unfold naturally. Ceremony, reception, after-parties.</p>
                    <p><strong>Days 7-10:</strong> Extended celebration. Day trips. Bonding. The moments you'll remember forever.</p>
                  </div>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg mb-6">
                  <p className="font-medium mb-2">The ultimate retreat:</p>
                  <p className="text-sm text-muted-foreground">
                    For couples who want to transform their wedding into a true destination experience. Turn your celebration into a family reunion, a friend reunion, and a honeymoon preview all in one.
                  </p>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">216+ hours of celebration</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Ultimate destination wedding experience</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Time for multiple events and activities</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Maximum flexibility and no rushing</span>
                  </div>
                </div>

                <div className="bg-primary/10 p-6 rounded-lg mb-6 border-2 border-primary">
                  <p className="text-3xl font-bold mb-2">$8,500</p>
                  <p className="text-sm text-muted-foreground">2026 Package Price</p>
                </div>

                <Link to="/contact">
                  <Button variant="outline" className="w-full">Schedule Your Property Visit</Button>
                </Link>
              </CardContent>
            </Card>

            {/* 5-Day Package */}
            <Card className="border-2 border-secondary hover:shadow-xl transition-shadow bg-secondary/5">
              <CardContent className="p-8">
                <div className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium mb-3">
                  ⭐ Our Recommendation
                </div>
                <h3 className="text-3xl font-bold mb-3">The Full Experience</h3>
                <p className="text-lg text-muted-foreground mb-6">Wed–Sun or Thu–Mon</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">The Timeline (Wednesday Arrival Option):</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Wednesday:</strong> Arrival day. People trickle in. Camp setup. First dinner together. Early bedtime.</p>
                    <p><strong>Thursday:</strong> The "settling in" day. Morning hike. Afternoon games. Evening bonfire. Walls start coming down.</p>
                    <p><strong>Friday:</strong> Pre-wedding festivities. Rehearsal dinner. The anticipation builds.</p>
                    <p><strong>Saturday:</strong> YOUR DAY. Ceremony at golden hour, reception under stars.</p>
                    <p><strong>Sunday:</strong> The goodbye. But softer. Extended. "We should do this every year" becomes a real plan.</p>
                  </div>
                </div>

                <div className="bg-secondary/20 p-4 rounded-lg mb-6">
                  <p className="font-medium mb-2">The complete experience:</p>
                  <p className="text-sm">
                    Couples who want families to actually bond. Anyone who's left a 6-hour wedding thinking "I barely talked to anyone." Those who understand that the best celebrations unfold naturally, not on a tight schedule.
                  </p>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">108 hours of shared life</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Extended family wedding celebration</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Immersive multi-day experience</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Maximum value for out-of-town guests</span>
                  </div>
                </div>

                <div className="bg-secondary/20 p-6 rounded-lg mb-6 border-2 border-secondary">
                  <p className="text-3xl font-bold mb-2">$5,500</p>
                  <p className="text-sm">2026 Package Price</p>
                </div>

                <Link to="/contact">
                  <Button className="w-full bg-secondary hover:bg-secondary/90">Schedule Your Property Visit</Button>
                </Link>
              </CardContent>
            </Card>

            {/* 3-Day Package */}
            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-3">The Classic Weekend</h3>
                <p className="text-lg text-muted-foreground mb-6">Friday through Sunday</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">The Timeline:</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Friday:</strong> Gates open. Your people arrive throughout the day. Tents up, gear settled, the weekend officially begins.</p>
                    <p><strong>Friday afternoon/evening:</strong> Exploration, campfires, the first wave of reconnection</p>
                    <p><strong>Saturday:</strong> Your wedding day, dawn to starlight</p>
                    <p><strong>Sunday:</strong> Slow morning, tearful goodbyes, promises to do this again</p>
                  </div>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg mb-6">
                  <p className="font-medium mb-2">Perfect for:</p>
                  <p className="text-sm text-muted-foreground">
                    Couples working with tighter schedules or budgets, or guests traveling from far away who need defined arrival/departure times. You still get that "wedding weekend" magic—exponentially more connection than a single-day event—in a contained timeframe.
                  </p>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">60 hours together instead of 6</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Budget-friendly multi-day celebration</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Intimate outdoor wedding with accommodation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Private venue without $10,000+ price tag</span>
                  </div>
                </div>

                <div className="bg-primary/10 p-6 rounded-lg mb-6 border-2 border-primary">
                  <p className="text-3xl font-bold mb-2">$4,500</p>
                  <p className="text-sm text-muted-foreground">2026 Package Price</p>
                </div>

                <Link to="/contact">
                  <Button variant="outline" className="w-full">Schedule Your Property Visit</Button>
                </Link>
              </CardContent>
            </Card>

            {/* 2-Day Package */}
            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-3">The Intimate Escape</h3>
                <p className="text-lg text-muted-foreground mb-6">Weekdays Only</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">The Timeline:</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Day 1:</strong> Arrive, settle in, rehearse if you wish. Evening bonfire under the stars.</p>
                    <p><strong>Day 2:</strong> Your wedding day—intimate, unhurried, exactly as you dreamed.</p>
                  </div>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg mb-6">
                  <p className="font-medium mb-2">Perfect for:</p>
                  <p className="text-sm text-muted-foreground">
                    Couples seeking an intimate elopement experience with just your closest people. All the magic of Rustic Retreat in a focused, meaningful two-day celebration.
                  </p>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Intimate elopement experience</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Weekday availability</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Most affordable option</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Full property access</span>
                  </div>
                </div>

                <div className="bg-primary/10 p-6 rounded-lg mb-6 border-2 border-primary">
                  <p className="text-3xl font-bold mb-2">$3,000</p>
                  <p className="text-sm text-muted-foreground">2026 Package Price</p>
                </div>

                <Link to="/contact">
                  <Button variant="outline" className="w-full">Schedule Your Property Visit</Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Not sure which package is right for you? Let's talk during your property visit.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="outline">Schedule Your Visit</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What's Included in Every Rustic Retreat Wedding Package</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="border-2">
              <CardContent className="pt-6">
                <MapPin className="w-8 h-8 text-secondary mb-3" />
                <h3 className="font-semibold mb-2">The Venue & Property</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Exclusive use of 65 private acres</li>
                  <li>• Ceremony space framed by Alberta forest</li>
                  <li>• Flexible reception area</li>
                  <li>• Groomed walking trails</li>
                  <li>• Multiple campfire locations</li>
                  <li>• Clear-top gazebo</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6">
                <Home className="w-8 h-8 text-secondary mb-3" />
                <h3 className="font-semibold mb-2">Accommodations</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• The Cabin: Sleeps 4 (newlywed suite)</li>
                  <li>• Room for 60 guests to camp</li>
                  <li>• You choose where to set up—no defined sites</li>
                  <li>• Shower facilities ready for 2026 season</li>
                  <li>• Airbnbs 5-15 minutes away</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6">
                <DollarSign className="w-8 h-8 text-secondary mb-3" />
                <h3 className="font-semibold mb-2">Furniture & Essentials</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Modern picnic tables and rustic benches for 80 guests</li>
                  <li>• No rental fees!</li>
                  <li>• Setup flexibility</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6">
                <Sparkles className="w-8 h-8 text-secondary mb-3" />
                <h3 className="font-semibold mb-2">Wedding Décor Collection</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Curated selection of décor pieces</li>
                  <li>• Vintage pieces & centerpieces</li>
                  <li>• Free to use—no rental fees</li>
                  <li>• Add your own touches</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6">
                <Users className="w-8 h-8 text-secondary mb-3" />
                <h3 className="font-semibold mb-2">Activity Amenities</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Giant Jenga, Cornhole, Bocce Ball</li>
                  <li>• Badminton, Yardzee</li>
                  <li>• Trampoline & treehouse</li>
                  <li>• Play set & hammocks</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6">
                <Calendar className="w-8 h-8 text-secondary mb-3" />
                <h3 className="font-semibold mb-2">Planning Support</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Vendor recommendations</li>
                  <li>• Emergency kit</li>
                  <li>• Property guidance and tips</li>
                  <li>• Optional paid coordination available</li>
                </ul>
              </CardContent>
            </Card>
          </div>

        </div>
      </section>

      {/* Your Weekend, Your Way - Full Width Section */}
      <section className="section bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-secondary mb-4">BEYOND THE CEREMONY</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Weekend. Your Way.</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Rustic Retreat isn't only about the ceremony and reception—<strong>the whole weekend should show who you are as a couple.</strong> When you rent the land, you'll have the freedom to make it yours. A few ideas to spark your planning.
          </p>
        </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            <div className="bg-background p-6 rounded-xl shadow-md text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-secondary/10 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Fireworks & Sparklers</h3>
              <p className="text-sm text-muted-foreground">Plan a sparkler send-off or fireworks moment if it fits your weekend.</p>
            </div>

            <div className="bg-background p-6 rounded-xl shadow-md text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-secondary/10 flex items-center justify-center">
                <Waves className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Giant Slip-and-Slide</h3>
              <p className="text-sm text-muted-foreground">Set one up and turn the meadow into your personal water park.</p>
            </div>

            <div className="bg-background p-6 rounded-xl shadow-md text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-secondary/10 flex items-center justify-center">
                <Compass className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Treasure Hunts</h3>
              <p className="text-sm text-muted-foreground">Create a treasure hunt with surprises across 65 acres.</p>
            </div>

            <div className="bg-background p-6 rounded-xl shadow-md text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-secondary/10 flex items-center justify-center">
                <Target className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Games & Adventures</h3>
              <p className="text-sm text-muted-foreground">Bring paintball, lawn games, or forest explorations.</p>
            </div>

            <div className="bg-background p-6 rounded-xl shadow-md text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-secondary/10 flex items-center justify-center">
                <Flag className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Inflatable Obstacle Course</h3>
              <p className="text-sm text-muted-foreground">Rent a giant course for playful, laugh-out-loud races.</p>
            </div>

            <div className="bg-background p-6 rounded-xl shadow-md text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-secondary/10 flex items-center justify-center">
                <Bath className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Portable Hot Tub</h3>
              <p className="text-sm text-muted-foreground">Bring in a rental for a cozy soak under the stars.</p>
            </div>

            <div className="bg-background p-6 rounded-xl shadow-md text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-secondary/10 flex items-center justify-center">
                <Film className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Outdoor Movie Night</h3>
              <p className="text-sm text-muted-foreground">Set up a screen and host a movie under the trees.</p>
            </div>

            <div className="bg-background p-6 rounded-xl shadow-md text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-secondary/10 flex items-center justify-center">
                <Music className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Campfire Karaoke</h3>
              <p className="text-sm text-muted-foreground">Cue up a playlist and pass the mic around the fire.</p>
            </div>
          </div>

          <div className="bg-background p-8 rounded-xl shadow-md max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <p className="text-lg font-medium mb-4">
                Morning yoga. Campfire karaoke. Stargazing parties. Group hikes. Whatever brings your people joy.
              </p>
              <p className="text-muted-foreground italic">
                "The ceremony is just the beginning. The weekend is where the real magic happens."
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                <span>No other weddings during your weekend</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                <span>Complete creative control</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                <span>65 private acres to make your own</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                <span>You'll have the freedom to make it yours</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Break - Details */}
      <section className="section bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <img
              src={cardBoxWineBarrel}
              alt="Rustic card box on wine barrel at wedding reception"
              className="rounded-lg shadow-md w-full h-48 object-cover"
            />
            <img
              src={guestFavorBox}
              alt="Wedding guest favor boxes with rustic details"
              className="rounded-lg shadow-md w-full h-48 object-cover"
            />
            <img
              src={firstDanceSparklers}
              alt="First dance with sparklers at evening reception"
              className="rounded-lg shadow-md w-full h-48 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Capacity */}
      <section className="section section-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Ceremony & Reception Capacity</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:border-secondary transition-colors">
              <CardContent className="pt-6 text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-secondary" />
                <h3 className="font-semibold text-lg mb-3">Ceremony Space</h3>
                <p className="text-3xl font-bold mb-2">80</p>
                <p className="text-sm text-muted-foreground">
                  Guests comfortably seated in natural forest ceremony area with towering Alberta pines as backdrop
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-colors">
              <CardContent className="pt-6 text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-secondary" />
                <h3 className="font-semibold text-lg mb-3">Reception Area</h3>
                <p className="text-3xl font-bold mb-2">80</p>
                <p className="text-sm text-muted-foreground">
                  Guests for dining and celebration under clear-top gazebo or open field arrangements
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-colors">
              <CardContent className="pt-6 text-center">
                <Home className="w-12 h-12 mx-auto mb-4 text-secondary" />
                <h3 className="font-semibold text-lg mb-3">Overnight Stay</h3>
                <p className="text-3xl font-bold mb-2">60</p>
                <p className="text-sm text-muted-foreground">
                  Guests can camp on the property—you choose where to set up, plus the cabin
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Non-Camping Guests */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">For the Guests Who Don't Camp</h2>
              
              <p className="mb-6 text-lg">
                Your outdoor-loving friends will pitch tents and call it heaven. Your grandmother? She needs air conditioning and a real bed. <strong>Both can attend your 5-day celebration without stress.</strong>
              </p>

              <p className="mb-6 text-muted-foreground">
                Half a dozen Airbnb properties sit within 5-15 minutes around the lake. For guests who want on-site comfort without tent camping, RVezy.com delivers trailers right to your camping area—all the coziness, none of the setup.
              </p>

              <div className="bg-secondary/10 p-6 rounded-lg border-l-4 border-secondary">
                <p className="font-medium mb-2">The result?</p>
                <p className="text-muted-foreground text-sm">
                  Your non-camping guests wake up, drive a few minutes, and arrive for sunrise yoga or breakfast prep or just quiet coffee before the property fully wakes. They're not missing anything. They're not disconnected. They're just sleeping in a bed instead of a tent, and that's perfect.
                </p>
              </div>

              <p className="mt-6 font-medium text-lg">
                Everyone gets to participate fully in your multi-day wedding package. That's the whole point.
              </p>
            </div>

            <div>
              <Card className="border-2">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Nearby Accommodation:</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Home className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Half a dozen Airbnbs around the lake</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>5-15 minute drive to venue</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Sparkles className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>RVezy.com trailer delivery to your camping area</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Users className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Comfortable for elderly guests or families with infants</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Flexible Arrival */}
      <section className="section section-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-10 h-10 text-secondary" />
              <h2 className="text-3xl md:text-4xl font-bold">Flexible Arrival & Departure</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-3">Arrival Day</h3>
                  <p className="text-muted-foreground mb-4">
                    The property is yours from the start of your booking. Guests can arrive whenever works for them throughout the day—no strict check-in time.
                  </p>
                  <p className="text-sm">
                    Early birds can set up camp at dawn. Night owls can roll in after dinner. Everyone arrives on their own schedule.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-3">Departure Day</h3>
                  <p className="text-muted-foreground mb-4">
                    You have the ENTIRE last day. Recovery breakfast at 10am? Do it. Afternoon final hike? Absolutely. Long goodbyes that stretch through dinner? That's the point.
                  </p>
                  <p className="text-sm">
                    No 11am hotel checkout rushing you. No "you've got 2 hours to clear out" stress.
                  </p>
                </CardContent>
              </Card>
            </div>

            <p className="text-center mt-8 text-xl font-medium">
              You paid for these days. We give you every hour of them.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Your Wedding Weekend Costs (And Why It's Smarter)</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="border-2">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4 text-muted-foreground">Traditional Edmonton/Alberta Venue:</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    <li>• Venue rental (6 hours): $8,000-15,000+</li>
                    <li>• Hotel rooms: $200-400/night × multiple rooms</li>
                    <li>• Rehearsal dinner venue: $1,500-3,000</li>
                    <li>• Day-after brunch venue: $800-1,500</li>
                    <li>• Decoration rentals: $2,000-4,000</li>
                  </ul>
                  <p className="font-bold text-lg">Total: Often $15,000-25,000+</p>
                  <p className="text-sm text-muted-foreground mt-2">For disconnected events</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-secondary bg-secondary/5">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Rustic Retreat Multi-Day Package:</h3>
                  <ul className="space-y-2 text-sm mb-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                      <span>Venue for 3-5 full days</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                      <span>Accommodation for 60 guests on-property</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                      <span>Tables, benches, décor included</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                      <span>Property guidance and support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                      <span>All activities and amenities</span>
                    </li>
                  </ul>
                  <p className="font-bold text-lg">$3,000–$8,500</p>
                  <p className="text-sm mt-2">Based on your timeline—all in ONE connected place</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-primary/5 p-8 rounded-lg border-l-4 border-primary text-center">
              <p className="text-2xl font-bold mb-3">
                You're not spending more. You're spending smarter.
              </p>
              <p className="text-muted-foreground mb-6">
                Payment plans available • Down payment holds your date • No hidden fees • Transparent pricing
              </p>
              <Link to="/contact">
                <CTAButton>
                  Schedule Your Visit to Discuss Pricing
                </CTAButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <img
              src={ceremonySetupWide}
              alt="Forest ceremony setup with decorated arch at Rustic Retreat Weddings"
              loading="lazy"
              className="shadow-xl w-full h-full object-cover"
            />
            <img
              src={receptionTable}
              alt="Evening outdoor wedding reception celebration at Rustic Retreat"
              loading="lazy"
              className="shadow-xl w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Walk the Land With Us</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto text-primary-foreground/90">
            We don't let couples book until they visit. Experience Rustic Retreat in person and discover why couples call this their best decision.
          </p>
          <Link to="/contact">
            <CTAButton className="text-lg px-8">
              Schedule Your Visit
            </CTAButton>
          </Link>
          <p className="text-sm text-primary-foreground/70 mt-4">
            Most couples hear back within 24 hours
          </p>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
};

export default Packages;
