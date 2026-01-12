import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ceremonyVows from "@/assets/ceremony-vows-outdoor.avif";
import receptionEvening from "@/assets/reception-outdoor-celebration.avif";
import { CheckCircle, Clock, Users, Home, MapPin, Calendar, DollarSign, Sparkles } from "lucide-react";

const Packages = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden mt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${ceremonyVows})` }}
        >
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
          </div>
        </div>
      </section>

      {/* Two Package Options */}
      <section className="section section-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Two Wedding Package Options, One Perfect Property</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            {/* 3-Day Package */}
            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-3">The 3-Day Weekend Wedding Package</h3>
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

                <div className="bg-primary/10 p-6 rounded-lg mb-6 border-2 border-primary">
                  <p className="text-3xl font-bold mb-2">$4,500</p>
                  <p className="text-sm text-muted-foreground">2026 Package Price</p>
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

                <Link to="/contact">
                  <Button variant="outline" className="w-full">Schedule Your Property Visit</Button>
                </Link>
              </CardContent>
            </Card>

            {/* 5-Day Package */}
            <Card className="border-2 border-secondary hover:shadow-xl transition-shadow bg-secondary/5">
              <CardContent className="p-8">
                <div className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium mb-3">
                  ⭐ The One Couples Rave About
                </div>
                <h3 className="text-3xl font-bold mb-3">The 5-Day Celebration Package</h3>
                <p className="text-lg text-muted-foreground mb-6">Thursday - Monday OR Friday - Tuesday</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">The Timeline (Thursday Arrival Option):</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Thursday:</strong> Arrival day. People trickle in. Camp setup. First dinner together. Early bedtime.</p>
                    <p><strong>Friday:</strong> The "settling in" day. Morning hike. Afternoon games. Evening bonfire. Walls start coming down.</p>
                    <p><strong>Saturday:</strong> YOUR DAY. But now it's happening in the middle of something bigger. Your ceremony at golden hour, reception under stars.</p>
                    <p><strong>Sunday:</strong> Recovery day. Lazy morning. Shared breakfast. Stories from last night. That afternoon energy of not wanting it to end.</p>
                    <p><strong>Monday:</strong> The goodbye. But softer. Extended. "We should do this every year" becomes a real plan.</p>
                  </div>
                </div>

                <div className="bg-secondary/20 p-4 rounded-lg mb-6">
                  <p className="font-medium mb-2">Perfect for:</p>
                  <p className="text-sm">
                    Couples who want families to actually bond. Anyone who's left a 6-hour wedding thinking "I barely talked to anyone." Those who understand that the best celebrations unfold naturally, not on a tight schedule.
                  </p>
                </div>

                <div className="bg-secondary/20 p-6 rounded-lg mb-6 border-2 border-secondary">
                  <p className="text-3xl font-bold mb-2">$5,500</p>
                  <p className="text-sm">2026 Package Price</p>
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

                <Link to="/contact">
                  <Button className="w-full bg-secondary hover:bg-secondary/90">Schedule Your Property Visit</Button>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Weekend. Your Rules.</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Rustic Retreat isn't only about the ceremony and reception—<strong>the whole weekend should show who you are as a couple.</strong> When you rent the land, your imagination is the only limit.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            <div className="bg-background p-6 rounded-xl shadow-md text-center">
              <div className="text-4xl mb-3">🎆</div>
              <h3 className="font-semibold mb-2">Fireworks & Sparklers</h3>
              <p className="text-sm text-muted-foreground">Light up the night sky with your own celebration.</p>
            </div>

            <div className="bg-background p-6 rounded-xl shadow-md text-center">
              <div className="text-4xl mb-3">🏊</div>
              <h3 className="font-semibold mb-2">Giant Slip-and-Slide</h3>
              <p className="text-sm text-muted-foreground">Turn the meadow into your personal water park.</p>
            </div>

            <div className="bg-background p-6 rounded-xl shadow-md text-center">
              <div className="text-4xl mb-3">🗺️</div>
              <h3 className="font-semibold mb-2">Treasure Hunts</h3>
              <p className="text-sm text-muted-foreground">Hide surprises across 65 acres of adventure.</p>
            </div>

            <div className="bg-background p-6 rounded-xl shadow-md text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-semibold mb-2">Games & Adventures</h3>
              <p className="text-sm text-muted-foreground">Paintball, lawn games, forest explorations.</p>
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
                <span>Your imagination is the only limit</span>
              </div>
            </div>
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
                  <p className="font-bold text-lg">Contact us for current pricing</p>
                  <p className="text-sm mt-2">Your celebration in ONE connected place</p>
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
                <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                  Schedule Your Visit to Discuss Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <img 
            src={receptionEvening}
            alt="Evening outdoor wedding reception celebration under stars at Rustic Retreat Weddings Alberta multi-day venue near Edmonton"
            className="shadow-2xl max-w-5xl mx-auto"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to See It for Yourself?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            We don't let couples book until they visit the property. Experience Rustic Retreat in person and discover why couples call this their best decision.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Schedule Your Property Visit
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Packages;
