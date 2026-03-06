import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CTAButton } from "@/components/ui/cta-button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ScrollReveal from "@/components/ScrollReveal";
import loveMarqueeArch from "@/assets/gallery/seo/rustic-retreat-weddings-lac-la-nonne-alberta-first-dance-with-love-marquee-sign-32.webp";
import receptionTable from "@/assets/gallery/seo/rustic-retreat-weddings-lac-la-nonne-alberta-black-and-white-sweetheart-table-chandelier-draping-neon-sign-05.webp";
import ceremonySetupWide from "@/assets/gallery/seo/rustic-retreat-weddings-lac-la-nonne-alberta-wide-outdoor-ceremony-arch-wedding-party-forest-clearing-03.webp";
import groomsmenToast from "@/assets/gallery/seo/rustic-retreat-weddings-lac-la-nonne-alberta-black-and-white-groomsmen-lift-bride-funny-woods-photo-06.webp";
import loveMarquee from "@/assets/gallery/seo/rustic-retreat-weddings-lac-la-nonne-alberta-father-daughter-dance-love-marquee-37.webp";
import brideDancing from "@/assets/gallery/first-dance-color.webp";
import weddingParty from "@/assets/gallery/seo/rustic-retreat-weddings-lac-la-nonne-alberta-black-and-white-ceremony-signing-bride-groom-wooden-stand-02.webp";
import cardBoxWineBarrel from "@/assets/gallery/seo/rustic-retreat-weddings-lac-la-nonne-alberta-welcome-sign-mirror-display-39.webp";
import guestFavorBox from "@/assets/gallery/seo/rustic-retreat-weddings-lac-la-nonne-alberta-wedding-rings-in-white-rose-43.webp";
import firstDanceSparklers from "@/assets/gallery/first-dance-sparklers.webp";
import { CheckCircle, Clock, Users, Home, MapPin, Calendar, DollarSign, Sparkles, Target, Film, Music } from "lucide-react";
import content from "@/data/site-content.json";

const Packages = () => {
  const packageSchema = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Rustic Retreat Wedding Packages",
    url: "https://www.rusticretreat.xyz/packages",
    itemListElement: [
      {
        "@type": "Offer",
        name: "The Full 5-Day Experience",
        description: "5-day celebration (Wed-Sun or Thu-Mon) with immersive guest time.",
        price: "7500",
        priceCurrency: "CAD",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "The Classic 3-Day Weekend",
        description: "3-day Friday-to-Sunday wedding weekend with exclusive access.",
        price: "6500",
        priceCurrency: "CAD",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "The Intimate 2-Day Escape",
        description: "2-day weekday elopement experience with full property access.",
        price: "5000",
        priceCurrency: "CAD",
        availability: "https://schema.org/InStock",
      },
    ],
  };

  return (
    <>
      <SEO
        title="Wedding Packages & Pricing"
        description="Choose from 2-day ($5,000), 3-day ($6,500), or 5-day ($7,500) wedding packages at Rustic Retreat. All include exclusive property access, couples cabin access, camping space, and décor collection."
        path="/packages"
        image={loveMarqueeArch}
        keywords={["wedding packages edmonton", "weekend wedding pricing alberta", "multi-day wedding cost", "all-inclusive wedding venue edmonton", "wedding venue pricing alberta", "2 day wedding package", "3 day wedding package", "5 day wedding package"]}
      />
      <BreadcrumbSchema />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(packageSchema)}
        </script>
      </Helmet>
      <div className="min-h-screen overflow-x-hidden">
        <Navigation />

        {/* Hero */}
        <section className="relative min-h-[420px] sm:min-h-[480px] md:min-h-[540px] flex items-center justify-center overflow-hidden mt-20">
          <div className="absolute inset-0">
            <img
              src={loveMarqueeArch}
              alt="LOVE marquee letters with a ceremony arch in a forest clearing at Rustic Retreat"
              loading="eager"
              decoding="async"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/60 to-primary/70" />
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center text-primary-foreground">
            <h1 className="text-3xl sm:text-4xl md:text-6xl leading-tight font-bold mb-5 sm:mb-6 animate-fade-in-up">
              <span className="block">The question isn't ...</span>
              <span className="block">"Where should we get married?"</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto animate-fade-in-up text-primary-foreground/90">
              <span className="block">You already know where. You can feel it. The real question is:</span>
              <span className="block mt-2">"How many days should we give ourselves to do this right?"</span>
            </p>
          </div>
        </section>

        {/* Intro Section */}
        <section className="section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-base sm:text-lg mb-4 text-muted-foreground">
                Let's be honest about what's happening right now.
              </p>

              <p className="mb-6">
                You've toured venues around Edmonton and central Alberta. Watched a hundred wedding videos. Scrolled Instagram until the pretty pictures all blurred together. You've said "yes, but..." to a dozen options that were fine, gorgeous even, but not quite <em>right</em>.
              </p>

              <div className="grid md:grid-cols-2 gap-5 md:gap-6 items-center my-8">
                <div className="bg-primary/5 p-6 sm:p-8 rounded-lg border-l-4 border-primary">
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
                  loading="lazy"
                  decoding="async"
                  className="rounded-lg shadow-lg w-full h-[260px] sm:h-[300px] object-cover img-card"
                />
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
                <img
                  src={groomsmenToast}
                  alt="Groomsmen cheering with drinks on a forest trail at Rustic Retreat"
                  className="rounded-lg shadow-lg w-full h-[220px] sm:h-[240px] object-cover img-card"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={loveMarquee}
                  alt="LOVE marquee letters with ceremony backdrop in a forest clearing"
                  className="rounded-lg shadow-lg w-full h-[220px] sm:h-[240px] object-cover img-card"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={brideDancing}
                  alt="Bride dancing at the rustic pavilion reception at Rustic Retreat"
                  className="rounded-lg shadow-lg w-full h-[220px] sm:h-[240px] object-cover img-card"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Package Options */}
        <section className="section section-muted">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-10 items-center mb-12">
              <ScrollReveal>
                <div className="text-center lg:text-left">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Choose Your Perfect Timeline</h2>
                  <p className="text-base sm:text-lg text-muted-foreground max-w-2xl lg:max-w-none mb-3">
                    From intimate elopements to the ultimate retreat-find the package that fits your vision.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={150}>
                <div className="relative">
                  <div className="absolute -inset-4 rounded-[32px] bg-secondary/10 blur-2xl" />
                  <img
                    src={receptionTable}
                    alt="Evening outdoor wedding reception celebration at Rustic Retreat"
                    loading="lazy"
                    decoding="async"
                    className="relative w-full h-[260px] sm:h-[320px] object-cover rounded-3xl shadow-elegant img-card"
                  />
                </div>
              </ScrollReveal>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
              {content.packages.packages.map((pkg, idx) => (
                <Card
                  key={idx}
                  className={`border-2 hover:shadow-xl transition-shadow ${pkg.isRecommended ? "border-secondary bg-secondary/5" : ""}`}
                >
                  <CardContent className="p-6 sm:p-8">
                    {pkg.isRecommended && (
                      <div className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium mb-3">
                        ⭐ Our Recommendation
                      </div>
                    )}
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">{pkg.name}</h3>
                    <p className="text-base sm:text-lg text-muted-foreground mb-6">{pkg.duration}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">{pkg.timelineTitle}</h4>
                      <div className="space-y-2 text-sm">
                        {pkg.timeline?.map((item, tIdx) => (
                          <p key={tIdx}><strong>{item.day}</strong> {item.desc}</p>
                        ))}
                      </div>
                    </div>

                    <div className={`${pkg.isRecommended ? "bg-secondary/20" : "bg-muted/50"} p-4 rounded-lg mb-6`}>
                      <p className="font-medium mb-2">{pkg.perfectForTitle}</p>
                      <p className={`text-sm ${!pkg.isRecommended ? "text-muted-foreground" : ""}`}>
                        {pkg.perfectForText}
                      </p>
                    </div>

                    <div className="space-y-2 mb-6">
                      {pkg.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2">
                          <CheckCircle className={`w-5 h-5 ${pkg.isRecommended ? "text-secondary" : "text-primary"} mt-0.5 flex-shrink-0`} />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className={`${pkg.isRecommended ? "bg-secondary/20 border-secondary" : "bg-primary/10 border-primary"} p-5 sm:p-6 rounded-lg mb-6 border-2`}>
                      <p className="text-3xl font-bold mb-2">${pkg.price}*</p>
                      <p className={`text-sm ${!pkg.isRecommended ? "text-muted-foreground" : ""}`}>2027 Package Price</p>
                    </div>

                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <p className="text-xs text-muted-foreground">* GST not included.</p>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="section">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">What's Included in Every Rustic Retreat Wedding Package</h2>

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
                    <li>• Clear-top gazebo</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <Home className="w-8 h-8 text-secondary mb-3" />
                  <h3 className="font-semibold mb-2">Accommodations</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• The Cabin: Sleeps 4 (couples cabin)</li>
                    <li>• Keurig & meal prep basics in Cabin</li>
                    <li>• Room for 60 guests to camp (no defined sites)</li>
                    <li>• Shower facilities</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <DollarSign className="w-8 h-8 text-secondary mb-3" />
                  <h3 className="font-semibold mb-2">Furniture & Essentials</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Modern picnic tables & rustic benches for 80</li>
                    <li>• Two-speaker sound system with wireless mics</li>
                    <li>• Firewood & BBQ with propane included</li>
                    <li>• Reliable off-grid solar power</li>
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
                    <li>• It is not a full collection, but it helps fill in the pieces you are missing</li>
                    <li>• Variety of ceremony arch options</li>
                    <li>• Free to use-no rental fees</li>
                    <li>• Add your own touches</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <Users className="w-8 h-8 text-secondary mb-3" />
                  <h3 className="font-semibold mb-2">Activity Amenities</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Lawn Games: Jenga, Cornhole, Connect 4, Yardzee</li>
                    <li>• Trampoline, children's playhouse & treehouse</li>
                    <li>• Hammocks for lounging under the trees</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <Calendar className="w-8 h-8 text-secondary mb-3" />
                  <h3 className="font-semibold mb-2">Planning Support</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Vendor recommendations</li>
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Your Weekend. Your Way.</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
                Rustic Retreat is not only about the ceremony and reception. <strong>The whole weekend should reflect who you are as a couple.</strong> Here are a few ideas to spark your planning.
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
                  <Target className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">Games & Adventures</h3>
                <p className="text-sm text-muted-foreground">Bring paintball, lawn games, or forest explorations.</p>
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
            <p className="text-center text-sm text-muted-foreground max-w-3xl mx-auto mb-12">
              And more: treasure hunts, slip-and-slides, inflatable obstacle courses, and other activities that fit your group.
            </p>

            <div className="bg-background p-6 sm:p-8 rounded-xl shadow-md max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <p className="text-base sm:text-lg font-medium leading-relaxed max-w-3xl mx-auto mb-6">
                  <span className="block">Morning yoga. Campfire karaoke. Stargazing parties.</span>
                  <span className="block">Group hikes. Whatever brings your people joy.</span>
                </p>
                <p className="text-muted-foreground italic text-lg sm:text-xl leading-relaxed max-w-4xl mx-auto">
                  "The ceremony is just the beginning. The weekend is where the real magic happens."
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 text-sm max-w-5xl mx-auto">
                <div className="flex items-start sm:items-center gap-3 rounded-lg border bg-secondary/5 px-4 py-4 h-full">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span>No other weddings during your weekend</span>
                </div>
                <div className="flex items-start sm:items-center gap-3 rounded-lg border bg-secondary/5 px-4 py-4 h-full">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span>No strict check-in windows for your guests</span>
                </div>
                <div className="flex items-start sm:items-center gap-3 rounded-lg border bg-secondary/5 px-4 py-4 h-full">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span>Space for ceremony, reception, and activities</span>
                </div>
                <div className="flex items-start sm:items-center gap-3 rounded-lg border bg-secondary/5 px-4 py-4 h-full">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span>Set your own weekend timeline and activity flow</span>
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
                loading="lazy"
                decoding="async"
                className="rounded-lg shadow-md w-full h-48 object-cover img-card"
              />
              <img
                src={guestFavorBox}
                alt="Wedding guest favor boxes with rustic details"
                loading="lazy"
                decoding="async"
                className="rounded-lg shadow-md w-full h-48 object-cover img-card"
              />
              <img
                src={firstDanceSparklers}
                alt="First dance with sparklers at evening reception"
                loading="lazy"
                decoding="async"
                className="rounded-lg shadow-md w-full h-48 object-cover img-card"
              />
            </div>
          </div>
        </section>

        {/* Capacity */}
        <section className="section section-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">Ceremony & Reception Capacity</h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {content.packages.capacity.map((item, idx) => (
                <Card key={idx} className="border-2 hover:border-secondary transition-colors">
                  <CardContent className="pt-6 text-center">
                    {idx === 2 ? (
                      <Home className="w-12 h-12 mx-auto mb-4 text-secondary" />
                    ) : (
                      <Users className="w-12 h-12 mx-auto mb-4 text-secondary" />
                    )}
                    <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
                    <p className="text-3xl font-bold mb-2">{item.value}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Non-Camping Guests */}
        <section className="section">
          <div className="container mx-auto px-4">
            <Card className="border-2 max-w-6xl mx-auto">
              <CardContent className="p-6 md:p-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5">For the Guests Who Don't Camp</h2>

                <p className="mb-4 text-base sm:text-lg max-w-4xl">
                  Your outdoor-loving friends will pitch tents and call it heaven. Your grandmother? She may need air conditioning and a real bed. <strong>Both can attend your celebration without stress.</strong>
                </p>

                <p className="mb-8 text-muted-foreground max-w-4xl">
                  For guests who prefer a bed, nearby off-site stays make it easy to stay close to the celebration.
                </p>

                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="bg-secondary/10 p-6 rounded-lg border border-secondary/20">
                    <h3 className="font-semibold text-lg mb-3">The result</h3>
                    <p className="text-muted-foreground">
                      Your non-camping guests wake up, drive a few minutes, and arrive for sunrise yoga or breakfast prep or just quiet coffee before the property fully wakes. They are not missing anything. They are not disconnected. They are just sleeping in a bed instead of a tent, and that is perfect.
                    </p>
                  </div>

                  <div className="bg-background p-6 rounded-lg border">
                    <h3 className="font-semibold text-lg mb-4">Nearby Accommodation</h3>
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
                  </div>
                </div>

                <p className="mt-8 font-medium text-base sm:text-lg">
                  Everyone gets to participate fully in your multi-day wedding package. That's the whole point.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Flexible Arrival */}
        <section className="section section-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-10 h-10 text-secondary" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Flexible Arrival & Departure</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-2">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-xl mb-3">Arrival Day</h3>
                    <p className="text-muted-foreground mb-4">
                      The property is yours from the start of your booking. Guests can arrive whenever works for them throughout the day-no strict check-in time.
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

              <p className="text-center mt-8 text-lg sm:text-xl font-medium">
                You paid for these days. We give you every hour of them.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section id="pricing-comparison" className="section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">What Your Wedding Weekend Costs (And Why It's Smarter)</h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card className="border-2">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4 text-muted-foreground">{content.packages.pricingComparison.traditional.title}</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                      {content.packages.pricingComparison.traditional.items.map((item, idx) => (
                        <li key={idx}>• {item}</li>
                      ))}
                    </ul>
                    <p className="font-bold text-lg">Total: {content.packages.pricingComparison.traditional.total}</p>
                    <p className="text-sm text-muted-foreground mt-2">For disconnected events</p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-secondary bg-secondary/5">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4">{content.packages.pricingComparison.rusticRetreat.title}</h3>
                    <ul className="space-y-2 text-sm mb-4">
                      {content.packages.pricingComparison.rusticRetreat.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="font-bold text-lg">{content.packages.pricingComparison.rusticRetreat.priceRange}</p>
                    <p className="text-sm mt-2">Based on your timeline-all in ONE connected place</p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-primary/5 p-6 sm:p-8 rounded-lg border-l-4 border-primary text-center">
                <p className="text-xl sm:text-2xl font-bold mb-3">
                  You're not spending more. You're spending smarter.
                </p>
                <p className="text-muted-foreground mb-6">
                  Payment plans available • Down payment holds your date • No hidden fees • Transparent pricing
                </p>
                <p className="font-medium">
                  We will walk through exact pricing together during your visit.
                </p>
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
                decoding="async"
                className="shadow-xl w-full h-full object-cover img-card"
              />
              <img
                src={receptionTable}
                alt="Evening outdoor wedding reception celebration at Rustic Retreat"
                loading="lazy"
                decoding="async"
                className="shadow-xl w-full h-full object-cover img-card"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6">Walk the Land With Us</h2>
            <p className="text-lg sm:text-xl mb-6 max-w-2xl mx-auto text-primary-foreground/90">
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
