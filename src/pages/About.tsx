import { Link } from "react-router-dom";
import { CTAButton } from "@/components/ui/cta-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Flourish from "@/components/Flourish";
import { Heart, Sparkles, Home, TreePine, Sun } from "lucide-react";

const About = () => {
  return (
    <PageTransition>
      <SEO
        title="Our Story"
        description="Family-owned since 2006. We opened our 65 acres near Edmonton to weddings in 2025, after hosting our own celebrations on the property."
        path="/about"
        keywords={["family owned wedding venue alberta", "rustic retreat story", "edmonton wedding venue owners", "personal wedding venue alberta", "intimate wedding venue near edmonton", "private property wedding alberta"]}
      />
      <BreadcrumbSchema />
      <div className="min-h-screen">
        <Navigation />

        <section className="section section-cream mt-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="display-xl font-serif mb-5">About Rustic Retreat</h1>
            <Flourish className="text-secondary/60 mb-6" size="md" />
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
              Family-owned since 2006. When my dad finished the first part of the gazebo in 2018, he said, "Looks nice. Good place to get married." In 2025, we opened to weddings.
            </p>
          </div>
        </section>

        {/* How It All Started */}
        <section className="section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div>
                <ScrollReveal>
                  <p className="section-label">THE BEGINNING</p>
                  <h2 className="text-3xl md:text-4xl font-serif mb-8">How It All Started</h2>

                  <p className="text-lg mb-6">
                    In 2006, my parents bought 65 acres near Lac La Nonne with a plan to live self-sufficiently: an off-grid homestead with pasture and forest, no power lines, and no city noise.
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
                      That one weekend became an annual tradition. Some years we'd have 80 people camping across the property. The kids ran wild all day, and at night the adults sat around the campfire with music going until somebody started dancing. We played beer pong and cornhole and giant Jenga, and at the potlucks everyone brought their best recipe, so there was always too much food.
                    </p>
                  </div>

                  <p className="text-lg text-muted-foreground mb-6">
                    Some years we planned things, like an outdoor movie night or a birthday or anniversary party. Other years we just hung out.
                  </p>

                  <p className="text-lg mb-8">
                    My parents loved hosting, and the more they did it, the more they set the land up for guests. It was close enough to Edmonton for friends to drive out, and far enough to feel like a getaway.
                  </p>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* The Seed Gets Planted */}
        <section className="section section-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal direction="right">
                <p className="section-label">THE TURNING POINT</p>
                <h2 className="text-3xl md:text-4xl font-serif mb-6">Where the Idea Came From</h2>

                <p className="mb-6 text-muted-foreground">
                  In 2018, my dad built the first part of the gazebo. After finishing it, he turned to my wife Shannon and said, <span className="italic">"Looks nice. Good place to get married."</span>
                </p>


                <p className="mb-6 text-muted-foreground">
                  My brother got married here that same year. Then Shannon and I got married in 2019. For weeks after our wedding weekend, people kept telling us it was the best wedding they'd ever been to, and kept telling us stories about moments we'd missed.
                </p>

                <div className="bg-secondary/20 p-6 rounded-xl border-2 border-secondary">
                  <p className="font-medium text-lg">
                    That's when we started talking seriously about hosting other couples' weddings.
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
                <h2 className="text-3xl md:text-4xl font-serif mb-8">Building It</h2>

                <p className="text-lg mb-6">
                  After our wedding, Shannon and I moved out to the property full-time. Suddenly there were four of us living here, and the idea of opening the land as a venue shifted from "someday maybe" to "we could actually do this."
                </p>

                <p className="text-lg text-muted-foreground mb-6">
                  My dad and Shannon got each other excited, and we made big plans: a reception barn, developed campsites and more. Then COVID hit, wood prices shot up, and the big projects were suddenly out of reach.
                </p>


                <p className="text-lg text-muted-foreground mb-8">
                  So we took on dozens of smaller projects instead. We renovated the cabin, extended the gazebo, and tidied up parts of the land while leaving the rest wild. We spent 2020 getting used to off-grid life, living in our RV year-round and learning what the land needed. In 2023, we built our permanent house. In 2024, we started renting the cabin to families as weekend getaways, testing the waters.
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
            <div className="max-w-4xl mx-auto">
              <ScrollReveal direction="left">
                <p className="section-label">CONSTANT EVOLUTION</p>
                <h2 className="text-3xl md:text-4xl font-serif mb-6">What Each Wedding Taught Us</h2>

                <p className="mb-6 text-muted-foreground">
                  Every wedding showed us something that was missing. So we built an outdoor dance floor, added picnic tables and rustic ceremony benches, and kept adding to the décor collection.
                </p>

                <p className="mb-6">
                  Built a wash house with two shower stalls and on-demand hot water, and a bridal suite with two hair and makeup stations. A dedicated décor building and flush washrooms are still in progress.
                </p>

                <p className="mb-6 text-muted-foreground">
                  We're careful about how the land changes. We don't clear trees unless we have to. When we create walking trails, we weave between the trunks instead of cutting them down.
                </p>

                <div className="bg-card p-6 rounded-xl shadow-soft">
                  <p className="text-muted-foreground text-sm mb-3">
                    In 2024, a wildfire went through the west side of the property. It stayed low to the ground and cleared the undergrowth, but it didn't climb the trees. You can still see signs of it if you walk that area, but new growth is filling back in.
                  </p>
                </div>
              </ScrollReveal>

            </div>
          </div>
        </section>

        {/* What Drives Us */}
        <section className="section section-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <div>
                  <p className="section-label">OUR PHILOSOPHY</p>
                  <h2 className="text-3xl md:text-4xl font-serif mb-8">How We Run It</h2>

                  <p className="text-lg mb-6">
                    Plenty of venues charge $10,000 or more for a single day and then require you to use their caterer, their bar staff and their timeline.
                  </p>

                  <p className="text-xl font-medium mb-6">
                    We don't require any of that.
                  </p>

                  <p className="text-lg text-muted-foreground mb-8">
                    You can hire vendors for every detail, or do your own décor and a potluck BBQ to keep costs down. How you spend your money is up to you.
                  </p>

                  <div className="bg-secondary/10 p-8 rounded-2xl border-2 border-secondary mb-8">
                    <p className="text-lg mb-4">
                      Our goal is to be fully booked every season, one wedding a week for four months, without much advertising.
                    </p>
                    <p className="text-muted-foreground">
                      We'd like most couples to hear about us from a friend who got married here.
                    </p>
                  </div>

                  <p className="text-lg">
                    We do this because we love hosting people, and because we love watching couples fall for this place the way we did.
                  </p>
                </div>
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
                        Shannon is who you'll hear from, from your first message to the last details. She handles communication, scheduling and the day-to-day running of the venue, and she's good at calming nerves.
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
                        Chris looks after the land and the logistics: the solar and generator power, setup, and the practical details. He builds, moves and fixes things, usually with a joke ready.
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                  <Card className="border-2 h-full">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <TreePine className="w-8 h-8 text-secondary" />
                        <h3 className="text-xl font-semibold">Wilf (aka Dad)</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Handles firewood refills at the cabin firepit. He builds the bigger projects; the gazebo was almost entirely him. He framed the dance floor, and he built the wash house over the winter. Shannon and I finished the bridal suite in the spring.
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>

                <ScrollReveal delay={300}>
                  <Card className="border-2 h-full">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <Sun className="w-8 h-8 text-secondary" />
                        <h3 className="text-xl font-semibold">Patsy (aka Mom)</h3>
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
                    It's a family business, and this is where we live.
                  </p>
                  <blockquote className="mt-8 max-w-2xl mx-auto text-center italic text-muted-foreground">
                    "Shannon and her husband went above and beyond to make sure everything went smoothly for us."
                    <footer className="mt-2 text-sm not-italic">Viktoria, Facebook review</footer>
                  </blockquote>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* What Makes This Land Special */}
        <section className="section section-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal direction="right">
                <p className="section-label">THE FEELING</p>
                <h2 className="text-3xl md:text-4xl font-serif mb-6">Arriving</h2>

                <p className="mb-6">
                  Our driveway winds in through the trees, and by the time you park, the city feels a long way off. Most people notice the smell of the forest and the birds before they've closed the car door.
                </p>


                <p className="mb-6 text-muted-foreground">
                  The land is a mix of open fields and forest, with trails winding between the trees. Time slows down here, or at least it feels that way.
                </p>

                <div className="bg-card p-6 rounded-xl shadow-soft">
                  <div className="flex items-center gap-3 mb-3">
                    <Sparkles className="w-6 h-6 text-secondary" />
                    <p className="font-semibold">Completely Off-Grid</p>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    No power lines come into the property. Everything runs on solar, the way my dad planned it from the start, and it's simply how we live.
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


                <p className="text-lg text-muted-foreground mb-6">
                  We care almost as much about your wedding as you do, and we'll give you the room to make it what you want.
                </p>

                <p className="text-lg mb-8">
                  We're family-owned and family-run, and when you're here, <strong>we want you to feel like family too.</strong>
                </p>

                <div className="bg-secondary/10 p-8 rounded-2xl border-2 border-secondary mb-8">
                  <p className="text-lg">
                    That, and hearing your stories afterward, is how we measure a good season.
                  </p>
                </div>

                <p className="text-xl font-serif italic mb-2">
                  If that sounds like what you're looking for, we'd love to meet you.
                </p>
                <p className="text-lg text-secondary font-medium">
                  - Shannon & Chris
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
              <h2 className="text-3xl md:text-4xl font-serif mb-6">Come for a Visit</h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto text-primary-foreground/90">
                Photos only show so much. Standing in the meadow at golden hour is something you have to do in person.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <CTAButton className="px-8">
                    Book a Tour
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
