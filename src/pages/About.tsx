import { Link } from "react-router-dom";
import { CTAButton } from "@/components/ui/cta-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import HoverImage from "@/components/HoverImage";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import weddingParty from "@/assets/gallery/wedding-party-group.jpg";
import familyPortrait from "@/assets/gallery/seo/rustic-retreat-weddings-lac-la-nonne-alberta-family-portrait-bride-groom-parents-fall-woods-11.jpg";
import campfireNight from "@/assets/campfire-evening-setting.avif";
import twoBridesDancing from "@/assets/gallery/seo/rustic-retreat-weddings-lac-la-nonne-alberta-black-and-white-two-brides-dancing-under-circle-arch-forest-10.jpg";
import groomsmenCheers from "@/assets/gallery/seo/rustic-retreat-weddings-lac-la-nonne-alberta-groomsmen-cheers-with-whiskey-and-cans-woods-17.jpg";
import coupleForestKiss from "@/assets/gallery/seo/rustic-retreat-weddings-lac-la-nonne-alberta-couple-kissing-forest-trail-41.jpg";
import cabinExterior from "@/assets/cabin-exterior-forest.avif";
import { Heart, MapPin, Users, Sparkles, Home, TreePine, Sun, CheckCircle } from "lucide-react";

const About = () => {
  return (
    <PageTransition>
      <SEO
        title="Our Story"
        description="Family-owned since 2006. What started as annual gatherings became a wedding venue after we threw our own celebrations here. Now we share 65 acres with couples who want something different."
        path="/about"
        image={weddingParty}
        keywords={["family owned wedding venue alberta", "rustic retreat story", "edmonton wedding venue owners", "personal wedding venue alberta", "intimate wedding venue near edmonton", "private property wedding alberta"]}
      />
      <BreadcrumbSchema />
      <div className="min-h-screen">
        <Navigation />

        <PageHero
          backgroundImage={weddingParty}
          backgroundImageAlt="Wedding party group photo in a forest clearing at Rustic Retreat"
          title="About Rustic Retreat"
          subtitle="Family-owned since 2006. We built this place for ourselves—now we share it with couples who want something real."
        />

        {/* How It All Started */}
        <section className="section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <p className="section-label">THE BEGINNING</p>
                <h2 className="text-3xl md:text-4xl font-serif mb-8">How It All Started</h2>

                <p className="text-lg mb-6">
                  In 2006, my parents bought 65 acres near Lac La Nonne with a dream of creating something self-sufficient—an off-grid homestead with pasture, forest, and everything they needed to live on their own terms. No power lines. No city noise. Just land that felt like theirs.
                </p>

                <p className="text-lg text-muted-foreground mb-6">
                  That first year, they hosted a small gathering. Family and friends came out with their RVs, sat around the campfire, and soaked in the quiet. At the end of the weekend, someone said, <span className="italic">"We should do this every year."</span>
                </p>

                <p className="text-lg mb-6">
                  So we did.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div className="bg-secondary/10 p-8 rounded-2xl border-l-4 border-secondary mb-8">
                  <p className="text-lg leading-relaxed">
                    What started as a single weekend became an annual tradition. Some years we'd have 80 people camping across the property—kids running wild during the day, adults around the campfire at night with music from every genre, impromptu dancing, laughter that carried through the trees. We'd play beer pong and cornhole and giant Jenga. We'd do potlucks where everyone brought their best recipes, and there was always too much food.
                  </p>
                </div>

                <p className="text-lg text-muted-foreground mb-6">
                  Sometimes we'd plan structured activities—outdoor movie nights, birthday celebrations, anniversary parties. Other times we'd just… exist together. Slowed down. Undistracted.
                </p>

                <p className="text-lg mb-8">
                  My parents fell in love with hosting. And the more they did it, the more the land evolved to welcome people. Close enough to Edmonton that friends could easily make the drive, but tucked away enough that it felt like a true escape.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* The Seed Gets Planted */}
        <section className="section section-muted">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <HoverImage
                  src={familyPortrait}
                  alt="Bride and groom with family in golden fall foliage at Rustic Retreat"
                  description="Families come together—real moments in the autumn woods"
                  category="Family"
                  className="shadow-xl"
                />
              </ScrollReveal>

              <ScrollReveal direction="right">
                <p className="section-label">THE TURNING POINT</p>
                <h2 className="text-3xl md:text-4xl font-serif mb-6">The Seed Gets Planted</h2>

                <p className="mb-6 text-muted-foreground">
                  In 2018, my dad built the first part of the gazebo. After finishing it, he turned to my wife Shannon and said, <span className="italic">"Looks nice. Good place to get married."</span>
                </p>

                <p className="mb-6">
                  He didn't know how right he'd be.
                </p>

                <p className="mb-6 text-muted-foreground">
                  My brother got married here that same year. Then Shannon and I got married in 2019. After our wedding weekend, we couldn't stop hearing the same thing: <strong>"Best wedding ever."</strong> People told us stories about moments we'd missed—the connections made, the laughter shared, the way time seemed to stop for three days.
                </p>

                <div className="bg-secondary/20 p-6 rounded-xl border-2 border-secondary">
                  <p className="font-medium text-lg">
                    The seed wasn't just planted anymore. It had taken root.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Building the Dream */}
        <section className="section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <p className="section-label">THE JOURNEY</p>
                <h2 className="text-3xl md:text-4xl font-serif mb-8">Building the Dream</h2>

                <p className="text-lg mb-6">
                  After our wedding, Shannon and I moved out to the property full-time. Suddenly there were four of us living here, and the idea of opening the land as a venue shifted from "someday maybe" to "we could actually do this."
                </p>

                <p className="text-lg text-muted-foreground mb-6">
                  My dad and Shannon fed off each other's excitement. We made big plans—a reception barn, developed campsites, all these grand visions. Then COVID hit. Wood prices skyrocketed. What was feasible became impossible overnight.
                </p>

                <p className="text-lg mb-6">
                  <strong>But we didn't stop. We just adapted.</strong>
                </p>

                <p className="text-lg text-muted-foreground mb-8">
                  Instead of one massive project, we did dozens of smaller ones. We renovated the cabin. Extended the gazebo. Started manicuring parts of the land while keeping the wild beauty intact. We spent 2020 adjusting to off-grid life—living in our RV year-round and learning what this land needed. In 2023, we built our permanent house. In 2024, we started renting the cabin to families as weekend getaways, testing the waters.
                </p>

                <div className="bg-primary/5 p-8 rounded-2xl border-l-4 border-primary">
                  <p className="text-xl font-serif italic">
                    Then in 2025, we opened to weddings.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* What We Learned */}
        <section className="section section-muted">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <p className="section-label">CONSTANT EVOLUTION</p>
                <h2 className="text-3xl md:text-4xl font-serif mb-6">What We Learned (And Keep Learning)</h2>

                <p className="mb-6 text-muted-foreground">
                  Each wedding taught us something. Each one showed us what was missing and what we needed to add. So we built an outdoor dance floor. Added modern picnic tables and rustic ceremony benches. Kept expanding our Décor Collection.
                </p>

                <p className="mb-6">
                  Started projects that are still in progress—a wash house, a bridal suite, a dedicated decor building, flush washrooms.
                </p>

                <p className="mb-6 text-muted-foreground">
                  The land keeps evolving, but we're intentional about it. We don't clear trees unless absolutely necessary. When we create walking trails, we weave between the trunks instead of cutting them down.
                </p>

                <div className="bg-card p-6 rounded-xl shadow-soft">
                  <p className="text-muted-foreground text-sm mb-3">
                    In 2024, a wildfire traveled through the west side of the property—it stayed low to the ground and cleared undergrowth but didn't climb the trees. You can still see signs of it if you walk that area, but new growth is filling back in.
                  </p>
                  <p className="font-medium">
                    The land heals itself. We're not trying to tame this place. We're trying to work with it.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <HoverImage
                  src={twoBridesDancing}
                  alt="Two brides dancing under a circle arch in a forest clearing"
                  description="Joyful, unposed moments in the woods"
                  category="Celebration"
                  className="shadow-xl"
                />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* What We Actually Do */}
        <section className="section">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-12">
                  <p className="section-label">HOW IT WORKS</p>
                  <h2 className="text-3xl md:text-4xl font-serif mb-4">What We Actually Do</h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Here's the truth: we're hands-on hosts, but this is your weekend, not ours.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
                  When you book Rustic Retreat, you get the blank canvas—65 acres, exclusive access, freedom to create exactly what you envision. We're around during your weekend in case you need anything from the venue itself, but we're not hovering. <strong>We trust you to bring your vision to life.</strong>
                </p>
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <div className="grid md:grid-cols-2 gap-4 mb-12">
                  <img
                    src={groomsmenCheers}
                    alt="Groomsmen celebrating with drinks on a forest path at Rustic Retreat"
                    className="w-full h-56 md:h-64 object-cover rounded-xl shadow-soft"
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    src={coupleForestKiss}
                    alt="Couple kissing on the forest trail at Rustic Retreat"
                    className="w-full h-56 md:h-64 object-cover rounded-xl shadow-soft"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <ScrollReveal delay={0}>
                  <Card className="border-2 border-secondary h-full">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-secondary" />
                        </div>
                        <h3 className="text-xl font-semibold">What's Included</h3>
                      </div>
                      <ul className="space-y-3 text-muted-foreground">
                        <li>Modern picnic tables & rustic ceremony benches</li>
                        <li>Two-speaker sound system with wireless microphones</li>
                        <li>Arch options & selection of decor</li>
                        <li>Giant outdoor games & hammocks</li>
                        <li>Firewood & BBQ with propane</li>
                        <li>Trampoline, playset & treehouse for kids</li>
                        <li>Cabin (sleeps 4) with Keurig & meal prep basics</li>
                        <li>Farm-fresh eggs when the chickens are laying</li>
                      </ul>
                    </CardContent>
                  </Card>
                </ScrollReveal>

                <ScrollReveal delay={100}>
                  <Card className="border-2 h-full">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Users className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">What You Handle</h3>
                      </div>
                      <ul className="space-y-3 text-muted-foreground">
                        <li>Arranging vendors</li>
                        <li>Decorating</li>
                        <li>Cleanup</li>
                      </ul>
                      <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                        <p className="text-sm">
                          This isn't a "show up and everything's done for you" venue. <strong>You're building your day.</strong> We're giving you the tools and the space to do it.
                        </p>
                      </div>
                      <p className="mt-4 text-sm text-muted-foreground">
                        We'll offer suggestions on anything that might help. But we're not going to tell you how your wedding should be. That's not our place.
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              </div>

              <ScrollReveal delay={200}>
                <p className="text-center text-lg">
                  We're constantly adding things we think will elevate your experience. <strong>If you have an idea or need something we don't have yet, tell us. We're listening.</strong>
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* What Drives Us */}
        <section className="section section-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <p className="section-label">OUR PHILOSOPHY</p>
                <h2 className="text-3xl md:text-4xl font-serif mb-8">What Drives Us</h2>

                <p className="text-lg mb-6">
                  So many venues charge $10,000+ for a single day and then lock you into mandatory minimums—you have to use their caterer, their bar staff, their timeline.
                </p>

                <p className="text-xl font-medium mb-6">
                  We don't do that.
                </p>

                <p className="text-lg text-muted-foreground mb-8">
                  We want you to build your day YOUR way. Bring in vendors for every detail and go extravagant? Great. DIY all your decor and do a potluck BBQ to keep costs low? Also great. We don't care how you spend your money. We care that you get to choose.
                </p>

                <div className="bg-secondary/10 p-8 rounded-2xl border-2 border-secondary mb-8">
                  <p className="text-lg mb-4">
                    <strong>Our goal is simple:</strong> be fully booked during our four-month season with one wedding per week, every year, with very little advertising.
                  </p>
                  <p className="text-muted-foreground">
                    We want couples to hear about us from a friend who got married here and couldn't stop talking about it. Word of mouth. Real stories.
                  </p>
                </div>

                <p className="text-lg">
                  We're not in this to get rich. We're in this because we love hosting people. We love watching couples fall in love with this place the way we did. We love seeing memories get made. And we want you to do it <strong>your way</strong>—not ours, not some venue template, not what Instagram says weddings should look like.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="section">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-12">
                  <p className="section-label">THE TEAM</p>
                  <h2 className="text-3xl md:text-4xl font-serif mb-4">Who We Are</h2>
                  <p className="text-lg text-muted-foreground">
                    This is a family operation.
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 gap-8">
                <ScrollReveal delay={0}>
                  <Card className="border-2 h-full">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <Heart className="w-8 h-8 text-secondary" />
                        <h3 className="text-xl font-semibold">Shannon</h3>
                      </div>
                      <p className="text-muted-foreground">
                        The heart of Rustic Retreat. Shannon guides couples from first message to final details with calm confidence and real care. She handles communication, scheduling, and the day-to-day rhythm of the venue, making the whole experience feel steady, personal, and easy. When nerves show up, she’s the voice that brings you back to what matters.
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>

                <ScrollReveal delay={100}>
                  <Card className="border-2 h-full">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <Home className="w-8 h-8 text-secondary" />
                        <h3 className="text-xl font-semibold">Chris</h3>
                      </div>
                      <p className="text-muted-foreground">
                        The steady hand behind the scenes. Chris keeps the land and logistics running—power management (solar + generator), setup, and all the practical details that make the weekend feel effortless. He builds, moves, fixes, and adapts fast, usually with a joke that breaks the tension at exactly the right moment.
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                  <Card className="border-2 h-full">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <TreePine className="w-8 h-8 text-secondary" />
                        <h3 className="text-xl font-semibold">Dad</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Handles firewood refills at the cabin firepit. He builds the bigger projects—the gazebo was almost entirely him. Last year he worked on framing the dance floor. This winter, he's building the wash house. In the spring, Shannon and I will finish the bridal suite.
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>

                <ScrollReveal delay={300}>
                  <Card className="border-2 h-full">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <Sun className="w-8 h-8 text-secondary" />
                        <h3 className="text-xl font-semibold">Mom</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Takes care of cleaning and resetting the cabin, maintaining the outhouses, all the gardening around the property. She pitches in wherever else is needed.
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              </div>

              <ScrollReveal delay={400}>
                <div className="mt-12 text-center">
                  <p className="text-lg">
                    We're all invested. We all care. <strong>This isn't a side hustle or a passive income stream. This is our life.</strong>
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* What Makes This Land Special */}
        <section className="section section-muted">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <HoverImage
                  src={campfireNight}
                  alt="Evening campfire gathering under stars at Rustic Retreat Weddings Alberta"
                  description="Where time slows down and connections deepen"
                  category="The Experience"
                  className="shadow-xl"
                />
              </ScrollReveal>

              <ScrollReveal direction="right">
                <p className="section-label">THE FEELING</p>
                <h2 className="text-3xl md:text-4xl font-serif mb-6">What Makes This Land Special</h2>

                <p className="mb-6">
                  The moment you turn down our winding driveway and the trees close in around you, something shifts. The smell of nature hits you when you step out of your car. Birds singing. Sun filtering through branches.
                </p>

                <p className="mb-6 text-lg font-medium">
                  You feel it immediately—you've entered somewhere different.
                </p>

                <p className="mb-6 text-muted-foreground">
                  There's a mix of open fields and forest. Trails winding between trees. Natural beauty around every turn. It feels like a place to explore, to let go of whatever stress you brought with you. Time slows down here. Or at least it feels that way.
                </p>

                <div className="bg-card p-6 rounded-xl shadow-soft">
                  <div className="flex items-center gap-3 mb-3">
                    <Sparkles className="w-6 h-6 text-secondary" />
                    <p className="font-semibold">Completely Off-Grid</p>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    No power lines come into this property. Everything runs on solar—my dad's original vision of self-sufficiency made real. It's not a gimmick. It's just how we live.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* What We Want You to Know */}
        <section className="section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollReveal>
                <p className="section-label">IN CLOSING</p>
                <h2 className="text-3xl md:text-4xl font-serif mb-8">What We Want You to Know</h2>

                <p className="text-xl font-medium mb-6">
                  We are not your average wedding venue.
                </p>

                <p className="text-lg text-muted-foreground mb-6">
                  We care almost as much about your wedding as you do. We want it to be exactly what you envision, and we'll give you the freedom to make that happen.
                </p>

                <p className="text-lg mb-8">
                  We're family-owned and family-run, and when you're here, <strong>we want you to feel like family too.</strong>
                </p>

                <div className="bg-secondary/10 p-8 rounded-2xl border-2 border-secondary mb-8">
                  <p className="text-lg">
                    That's what success looks like to us. Not revenue. Not metrics. <strong>Smiles on your faces. Memories being made. Stories we get to hear afterward.</strong>
                  </p>
                </div>

                <p className="text-xl font-serif italic mb-2">
                  If that sounds like what you're looking for, we'd love to meet you.
                </p>
                <p className="text-lg text-secondary font-medium">
                  — Shannon & Chris
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <ScrollReveal>
              <Heart className="w-10 h-10 text-secondary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-serif mb-6">Come Feel the Difference</h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto text-primary-foreground/90">
                Photos can only show so much. The feeling of standing in the meadow at golden hour—that you have to experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <CTAButton className="px-8">
                    Discover Your Venue
                  </CTAButton>
                </Link>
                <Link to="/packages">
                  <Button size="lg" variant="outline" className="bg-white/90 border-2 border-rosegold text-primary hover:bg-white rounded-full px-8 font-medium">
                    View Packages
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-primary-foreground/70 mt-4">
                Most couples hear back within 24 hours
              </p>
            </ScrollReveal>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default About;
