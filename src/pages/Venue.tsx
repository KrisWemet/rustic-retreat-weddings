import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CTAButton } from "@/components/ui/cta-button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import HoverImage from "@/components/HoverImage";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import venueHero from "@/assets/gallery/ceremony-by-gazebo.webp";
import cabinExterior from "@/assets/gallery/pavilion-reception.webp";
import cabinInterior from "@/assets/gallery/Cabin/cabin-interior-living-area.webp";
import cabinPorch from "@/assets/gallery/Cabin/cabin-porch-view.webp";
import cabinBed from "@/assets/gallery/Cabin/cabin-bedroom-comfort.webp";
import cabinKitchen from "@/assets/gallery/Cabin/cabin-kitchenette-details.webp";
import cabinLoft from "@/assets/gallery/Cabin/cabin-loft-view.webp";
import cabinDeck from "@/assets/gallery/Cabin/cabin-deck-outdoor-seating.webp";
import cabinFullExterior from "@/assets/gallery/Cabin/cabin-exterior-woods.webp";
import campfireSetting from "@/assets/gallery/Cabin/cabin-campfire-evening.webp";
import familyPortrait from "@/assets/gallery/Cabin/cabin-bridal-portraits.webp";
import coupleRomantic from "@/assets/gallery/Cabin/cabin-romantic-couple.webp";
import cakeCuttingForest from "@/assets/gallery/seo/rustic-retreat-weddings-lac-la-nonne-alberta-cake-cutting-and-first-bite-40.webp";
import receptionTable4 from "@/assets/gallery/head-table.webp";
import receptionChairGame from "@/assets/gallery/ae544ad7d928a81729703820306114ae-xxxlarge.webp";
import ceremonyPavilion from "@/assets/gallery/real-weddings/pavilion-ceremony-wide.webp";
import ceremonyAisles from "@/assets/gallery/Images/4099316435379843506.webp";
import ceremonyWide1 from "@/assets/gallery/seo/rustic-retreat-weddings-lac-la-nonne-alberta-wide-outdoor-ceremony-arch-wedding-party-forest-clearing-03.webp";
import ceremonyCloseUp from "@/assets/gallery/real-weddings/ceremony-hands-black-white.webp";
import ceremonySeating from "@/assets/gallery/Images/IMG_0030.webp";
import ceremonyAisleWalk from "@/assets/gallery/real-weddings/pavilion-newlyweds-walking.webp";
import ceremonyForest1 from "@/assets/gallery/real-weddings/outdoor-floral-arch-vows.webp";
import ceremonyForest2 from "@/assets/gallery/real-weddings/pavilion-ceremony-kiss.webp";
import extrasYardGames from "@/assets/gallery/Images/extras-yard-games.webp";
import extrasTrampolineKids from "@/assets/gallery/Images/extras-trampoline-kids.webp";
import extrasFirePitNight from "@/assets/gallery/Images/extras-firepit-night.webp";
import extrasPlayhouse from "@/assets/gallery/Images/Child-slide.jpeg";
import extrasGiantConnectFour from "@/assets/gallery/Images/extras-giant-connect-four.webp";
import extrasAndSoMuchMore from "@/assets/gallery/Images/IMG_7304.jpeg";

import { Home, Coffee, Sparkles, Sun, Users, Battery, Package, Heart, Gift, Waves, Compass, Flame, Trophy, Baby, Zap, Tent, Trees, ShowerHead, Scissors } from "lucide-react";

const Venue = () => {
  return (
    <PageTransition>
      <SEO
        title="65-Acre Wedding Venue in Alberta"
        description="Tour our 65-acre wedding venue an hour from Edmonton: forest trails, a clear-top gazebo, a newlywed cabin, and camping for up to 60 guests."
        path="/venue"
        image={venueHero}
        keywords={["camping wedding venue alberta", "wedding venue cabin alberta", "private wedding property edmonton", "65 acre wedding venue", "outdoor wedding ceremony spaces", "wedding décor collection alberta", "off-grid wedding venue", "wedding venue with bridal suite alberta", "wedding venue with showers alberta"]}
      />
      <BreadcrumbSchema />
      <div className="min-h-screen">
        <Navigation />

        <PageHero
          backgroundImage={venueHero}
          backgroundImageAlt="A beautiful wedding ceremony setup by the gazebo at Rustic Retreat"
          title="The Venue"
          subtitle="65 private acres of forest and meadow, a cabin for the two of you, and a shed full of décor you can use for free."
          overlayOpacity="none"
          contentClassName="max-w-4xl mx-auto bg-black/60 p-8 md:p-12 rounded-3xl shadow-xl"
        />

        {/* The Cabin Section */}
        <section className="section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">The Cabin</h2>

                <p className="text-lg mb-6 text-muted-foreground">
                  The newlywed cabin sits a few steps from the fire pit. When you're ready to call it a night, you can slip away while the party carries on outside, and still hear the fire crackling from the porch. It's quiet, it's yours, and it's a good place for it to finally sink in that you're married.
                </p>

              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Cabin Features */}
        <section className="section section-muted">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Inside the Cabin</h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
              {/* Row 1 */}
              <ScrollReveal delay={0}>
                <Card className="border-2 hover:border-secondary transition-colors">
                  <CardContent className="pt-6">
                    <Battery className="w-8 h-8 text-secondary mb-3" />
                    <h3 className="font-semibold mb-2">Solar Power</h3>
                    <p className="text-sm text-muted-foreground">
                      The cabin runs on the property's solar system, so you have lights and outlets even though we're off the grid.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div className="h-80 md:h-96 rounded-2xl overflow-hidden shadow-soft img-card">
                  <img src={cabinFullExterior} alt="Cabin exterior nestled in the forest" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <Card className="border-2 hover:border-secondary transition-colors">
                  <CardContent className="pt-6">
                    <Users className="w-8 h-8 text-secondary mb-3" />
                    <h3 className="font-semibold mb-2">Room for Four</h3>
                    <p className="text-sm text-muted-foreground">
                      It sleeps four. Some couples keep it to themselves; others have parents over on Sunday morning for coffee and a recap of the day.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              {/* Row 2 */}
              <ScrollReveal delay={300}>
                <div className="h-80 md:h-96 rounded-2xl overflow-hidden shadow-soft img-card">
                  <img src={cabinInterior} alt="Cozy cabin interior" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <Card className="border-2 hover:border-secondary transition-colors">
                  <CardContent className="pt-6">
                    <Coffee className="w-8 h-8 text-secondary mb-3" />
                    <h3 className="font-semibold mb-2">Morning Coffee</h3>
                    <p className="text-sm text-muted-foreground">
                      There's a Keurig and a supply of pods for the morning after.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={500}>
                <div className="h-80 md:h-96 rounded-2xl overflow-hidden shadow-soft img-card">
                  <img src={cabinBed} alt="Comfortable bed in the cabin" loading="lazy" decoding="async" className="w-full h-full object-cover rotate-90 scale-110 md:scale-125" />
                </div>
              </ScrollReveal>

              {/* Row 3 */}
              <ScrollReveal delay={600}>
                <Card className="border-2 hover:border-secondary transition-colors">
                  <CardContent className="pt-6">
                    <Home className="w-8 h-8 text-secondary mb-3" />
                    <h3 className="font-semibold mb-2">Furnishings</h3>
                    <p className="text-sm text-muted-foreground">
                      A comfortable bed, a seating area, and rustic furniture that looks good in photos.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={700}>
                <div className="h-80 md:h-96 rounded-2xl overflow-hidden shadow-soft img-card">
                  <img src={campfireSetting} alt="Campfire setting near the cabin" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={800}>
                <Card className="border-2 hover:border-secondary transition-colors">
                  <CardContent className="pt-6">
                    <Sun className="w-8 h-8 text-secondary mb-3" />
                    <h3 className="font-semibold mb-2">Forest Views</h3>
                    <p className="text-sm text-muted-foreground">
                      You wake up to trees in every direction, with no other buildings or roads in sight.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Ceremony & Reception Spaces */}
        <section className="section section-muted">
          <div className="container mx-auto px-4">
            <ScrollReveal className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Ceremony and Reception Spaces</h2>
            </ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <ScrollReveal direction="left">
                <div className="bg-primary/5 p-6 border-l-4 border-primary">
                  <p className="font-medium text-lg mb-2">
                    Choosing Your Spot
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Most couples pick their ceremony spot by walking the land during their visit and seeing which place feels right.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <p className="mb-6 text-muted-foreground">
                  The choices include the open meadow, the poplar grove with its filtered light, a smaller forest clearing, and the gazebo, and you're welcome to wander all 65 acres to compare them.
                </p>

                <p className="mb-6 text-muted-foreground">
                  In the evening, most couples move the party to the clear-top gazebo, which seats 80 under string lights with the sky overhead.
                </p>

                <div className="bg-primary/5 p-6 border-l-4 border-primary mt-6">
                  <p className="font-medium text-lg mb-2">
                    We'll go through the ceremony options with you on your visit and help you plan the order of the day.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Want to see the gazebo lit up? Schedule an evening tour.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Ceremony Image Gallery - Masonry Layout to show full images */}
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 mt-12 space-y-4">
              <ScrollReveal delay={0} className="break-inside-avoid">
                <HoverImage
                  src={ceremonyAisles}
                  alt="Ceremony setup with flower-lined aisles at Rustic Retreat"
                  description="A meadow ceremony with hand-built benches and wildflowers along the aisle"
                  category="Meadow Ceremony"
                  className="w-full rounded-2xl"
                />
              </ScrollReveal>

              <ScrollReveal delay={100} className="break-inside-avoid">
                <HoverImage
                  src={ceremonyWide1}
                  alt="Wide shot of a wedding ceremony in the forest at Rustic Retreat"
                  description="Vows in a forest clearing, with guests seated under the poplars"
                  category="Forest Clearing"
                  className="w-full rounded-2xl"
                />
              </ScrollReveal>

              <ScrollReveal delay={200} className="break-inside-avoid">
                <HoverImage
                  src={ceremonyCloseUp}
                  alt="Close up of a couple exchanging rings during the ceremony"
                  description="Exchanging rings at a ceremony in the woods"
                  category="The Vows"
                  className="w-full rounded-2xl"
                />
              </ScrollReveal>

              <ScrollReveal delay={300} className="break-inside-avoid">
                <HoverImage
                  src={ceremonySeating}
                  alt="Ceremony seating setup in a quiet forest grove"
                  description="Wooden benches set up for a small ceremony in a forest grove"
                  category="Forest Grove Seating"
                  className="w-full rounded-2xl"
                />
              </ScrollReveal>

              <ScrollReveal delay={400} className="break-inside-avoid">
                <HoverImage
                  src={ceremonyAisleWalk}
                  alt="Newlyweds smiling as they walk through the pavilion after their ceremony"
                  description="Your first walk together after saying your vows"
                  category="The Recessional"
                  className="w-full rounded-2xl"
                />
              </ScrollReveal>

              <ScrollReveal delay={500} className="break-inside-avoid">
                <HoverImage
                  src={ceremonyForest1}
                  alt="Couple exchanging vows beneath a floral arch outdoors"
                  description="Exchange your vows in the open air, surrounded by your people"
                  category="The Forest Cathedral"
                  className="w-full rounded-2xl"
                />
              </ScrollReveal>

              <ScrollReveal delay={600} className="break-inside-avoid">
                <HoverImage
                  src={ceremonyForest2}
                  alt="Newlyweds kissing under the timber pavilion with their wedding party nearby"
                  description="The just-married moment beneath the pavilion timbers"
                  category="Under the Pavilion"
                  className="w-full rounded-2xl"
                />
              </ScrollReveal>

              <ScrollReveal delay={700} className="break-inside-avoid">
                <HoverImage
                  src={receptionChairGame}
                  alt="The couple playing the shoe game during the reception"
                  description="The shoe game at the reception, under the pavilion lights"
                  category="Reception Fun"
                  className="w-full rounded-2xl"
                />
              </ScrollReveal>

              <ScrollReveal delay={800} className="break-inside-avoid">
                <HoverImage
                  src={ceremonyPavilion}
                  alt="Wide view down the timber pavilion aisle during a wedding ceremony"
                  description="A ceremony under the hand-built pavilion"
                  category="Pavilion Ceremony"
                  className="w-full rounded-2xl"
                />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Camping Section */}
        <section className="section bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Camping Under the Stars, Included for Up to 60 Guests</h2>
                <p className="text-lg mb-6 text-muted-foreground">
                  At a camping wedding, nobody has to drive home when the music winds down, because everyone stays on the property. Camping is included with every package for up to 60 guests, with room for tents and 8 RVs in the main camping area (up to 15 RVs in total). Guests pick their own spot and stay for the whole weekend.
                </p>
                <p className="text-lg mb-6 text-muted-foreground">
                  It's boondocking, so there are no electrical or water hookups at the campsites. Most guests are happy to trade those for a dark sky and a fire every night. If someone would rather not sleep in a tent, RVezy.com can deliver a rental trailer to the camping area.
                </p>
              </ScrollReveal>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
                <ScrollReveal delay={0}>
                  <Card className="border-2 hover:border-secondary transition-colors h-full">
                    <CardContent className="pt-6">
                      <Tent className="w-8 h-8 text-secondary mb-3" />
                      <h3 className="font-semibold mb-2">Tents & RVs Welcome</h3>
                      <p className="text-sm text-muted-foreground">
                        Up to 60 guests can camp on the property with any package. Eight RVs are included and up to 15 fit. There are no assigned sites and no nightly fees.
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
                <ScrollReveal delay={100}>
                  <Card className="border-2 hover:border-secondary transition-colors h-full">
                    <CardContent className="pt-6">
                      <Flame className="w-8 h-8 text-secondary mb-3" />
                      <h3 className="font-semibold mb-2">Campfires Every Night</h3>
                      <p className="text-sm text-muted-foreground">
                        A full firewood shed is included for your whole stay, and most evenings end at the fire pit.
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
                <ScrollReveal delay={200}>
                  <Card className="border-2 hover:border-secondary transition-colors h-full">
                    <CardContent className="pt-6">
                      <Trees className="w-8 h-8 text-secondary mb-3" />
                      <h3 className="font-semibold mb-2">Options for Non-Campers</h3>
                      <p className="text-sm text-muted-foreground">
                        Lakefront Airbnbs on Lac la Nonne are 5 to 15 minutes away, and there are hotels in Barrhead and Onoway, about 15 minutes out.
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Wash House & Bridal Suite Section */}
        <section className="section section-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <ScrollReveal>
                <p className="text-secondary font-semibold uppercase tracking-[0.18em] mb-4">Comfort on the Property</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">The Wash House & The Bridal Suite</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Two of the newest buildings on the property cover what camping can't: hot showers, and a proper
                  place to get ready on the wedding day.
                </p>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <ScrollReveal delay={0}>
                <Card className="border-2 hover:border-secondary transition-colors h-full">
                  <CardContent className="pt-6">
                    <ShowerHead className="w-10 h-10 text-secondary mb-4" />
                    <h3 className="text-xl font-bold mb-2">The Wash House</h3>
                    <p className="text-muted-foreground mb-4">
                      Two private shower stalls with on-demand hot water, so it doesn't run out and the pressure is good.
                      Guests camping for three or five days can shower here instead of driving into town.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Two separate shower stalls</li>
                      <li>• On-demand hot water, near-instant, with great pressure</li>
                      <li>• Steps from the main camping area</li>
                      <li>• Included with every package, no extra charge</li>
                    </ul>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <Card className="border-2 hover:border-secondary transition-colors h-full">
                  <CardContent className="pt-6">
                    <Scissors className="w-10 h-10 text-secondary mb-4" />
                    <h3 className="text-xl font-bold mb-2">The Bridal Suite</h3>
                    <p className="text-muted-foreground mb-4">
                      A building just for getting ready, with two hair and makeup stations so your stylists can work on
                      two people at once. There's room to hang the dress and spread out, so the wedding party can get
                      ready together.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Two hair and makeup stations</li>
                      <li>• Room for your wedding party and your stylists</li>
                      <li>• Pet-free building, with a first aid kit on hand</li>
                    </ul>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={200}>
              <div className="max-w-3xl mx-auto mt-10 text-center">
                <div className="p-4 bg-card border rounded-xl inline-block italic text-sm text-muted-foreground">
                  Both buildings are family-built, like most things here. Outhouses remain on site as well, and a
                  bathroom house with two flush toilets is in the works for the 2027 season.
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Abundance & Décor Section - Combined and moved up */}
        <section className="section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollReveal>
                <div className="flex flex-col items-center mb-8">
                  <p className="text-secondary font-semibold uppercase tracking-[0.18em] mb-4">The Décor Collection</p>
                  <h2 className="text-3xl md:text-4xl font-bold">Included at No Extra Cost</h2>
                </div>

                <p className="text-lg md:text-xl mb-8 text-muted-foreground leading-relaxed">
                  A lot of venues rent décor by the piece. Ours comes with every booking.
                </p>

                <div className="bg-secondary/10 p-8 rounded-2xl border-2 border-secondary/20 mb-10">
                  <p className="text-xl md:text-2xl font-bold text-primary italic">
                    "The pieces most couples need are already here, at no extra cost."
                  </p>
                </div>

                <div className="space-y-6 text-left md:text-center">
                  <h3 className="text-2xl font-bold">What's in It</h3>
                  <p className="text-muted-foreground text-lg">
                    The collection covers the pieces most weddings use but few couples want to buy: arches, hurricane vases, votive candle holders, wood signs, sheer fabrics, faux florals and greenery, and vintage accents. They're the things that get used once and then sit in a box in someone's garage. Use whatever fits your plans and leave the rest.
                  </p>
                  <p className="text-muted-foreground text-lg">
                    It doesn't include full floral arrangements, table linens, napkins, or anything for serving food, so you'll need to bring those.
                  </p>
                </div>

                <div className="mt-10 p-4 bg-card border rounded-xl inline-block italic text-sm text-muted-foreground">
                  Walk in with your vision. The finishing touches are already waiting.
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* All the Extras Section */}
        <section className="section section-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <ScrollReveal>
                <p className="text-secondary font-semibold uppercase tracking-[0.18em] mb-4">For Your Guests</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">The Extras</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Over the years we've built or collected a few things to keep guests of all ages busy between the big moments.
                </p>
              </ScrollReveal>
            </div>

            <div className="max-w-5xl mx-auto space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ScrollReveal delay={100}>
                  <Card className="border-2 h-full hover:border-secondary/50 transition-all group bg-card overflow-hidden">
                    <div className="aspect-[4/3] overflow-hidden img-card">
                      <img src={extrasGiantConnectFour} alt="Giant Connect Four at Rustic Retreat" loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <CardContent className="pt-6 text-center lg:text-left">
                      <Trophy className="w-10 h-10 text-secondary mb-4 mx-auto lg:mx-0" />
                      <h3 className="text-xl font-bold mb-2">Yard Games</h3>
                      <p className="text-muted-foreground">
                        Giant Jenga, Connect Four, cornhole and more, for cocktail hour or any time during the weekend.
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                  <Card className="border-2 h-full hover:border-secondary/50 transition-all group bg-card overflow-hidden">
                    <div className="aspect-[4/3] overflow-hidden img-card">
                      <img src={extrasPlayhouse} alt="Children's play house at Rustic Retreat" loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <CardContent className="pt-6 text-center lg:text-left">
                      <Baby className="w-10 h-10 text-secondary mb-4 mx-auto lg:mx-0" />
                      <h3 className="text-xl font-bold mb-2">Playhouse</h3>
                      <p className="text-muted-foreground">
                        A playhouse where kids can play while the adults visit.
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>

                <ScrollReveal delay={300}>
                  <Card className="border-2 h-full hover:border-secondary/50 transition-all group bg-card overflow-hidden">
                    <div className="overflow-hidden img-card">
                      <img src={extrasTrampolineKids} alt="Trampoline at Rustic Retreat" loading="lazy" decoding="async" className="w-full h-auto group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <CardContent className="pt-6 text-center lg:text-left">
                      <Zap className="w-10 h-10 text-secondary mb-4 mx-auto lg:mx-0" />
                      <h3 className="text-xl font-bold mb-2">The Trampoline</h3>
                      <p className="text-muted-foreground">
                        For the kids, and for any adults who want a turn.
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>

                <ScrollReveal delay={400}>
                  <Card className="border-2 h-full hover:border-secondary/50 transition-all group bg-card overflow-hidden">
                    <div className="overflow-hidden img-card">
                      <img src={extrasFirePitNight} alt="Fire pit at night at Rustic Retreat" loading="lazy" decoding="async" className="w-full h-auto group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <CardContent className="pt-6 text-center lg:text-left">
                      <Flame className="w-10 h-10 text-secondary mb-4 mx-auto lg:mx-0" />
                      <h3 className="text-xl font-bold mb-2">The Fire Pit</h3>
                      <p className="text-muted-foreground">
                        Where most nights end up. The firewood is on us; bring the s'mores.
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              </div>

              <ScrollReveal delay={500}>
                <Card className="border-2 h-full hover:border-secondary/50 transition-all group bg-card overflow-hidden">
                  <div className="h-64 md:h-72 lg:h-80 overflow-hidden img-card">
                    <img src={extrasAndSoMuchMore} alt="Guests enjoying extra moments around the property at Rustic Retreat" loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <CardContent className="pt-6 text-center md:text-left">
                    <Sparkles className="w-10 h-10 text-secondary mb-4 mx-auto md:mx-0" />
                    <h3 className="text-xl font-bold mb-2">And More</h3>
                    <p className="text-muted-foreground">
                      A treehouse, board games for rainy afternoons, and quiet spots along the trails.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Growing Venue Section */}
        <section className="section bg-card">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto">
                <p className="section-label">THE VENUE TODAY</p>
                <h2 className="text-3xl md:text-4xl font-serif mb-6">
                  The venue is still growing.
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The main pieces are in place: 65 acres, the ceremony clearing, the gazebo,
                  the couples cabin, the wash house, the bridal suite, the fire pit and
                  the field. We add something new every season, and couples who book
                  now will see the next round of it.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">See It in Person</h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto text-primary-foreground/90">
                Come see the cabin, the décor shed and the gazebo for yourself.
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

export default Venue;
