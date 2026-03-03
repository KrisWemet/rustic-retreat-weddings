import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import SEO from "@/components/SEO";

const Guidelines = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <SEO
                title="Site Rules & Guidelines"
                description="Important information, guidelines, and rules for a safe and beautiful celebration at Rustic Retreat Weddings."
                path="/guidelines"
            />

            <Navigation />

            <main className="flex-grow">
                <PageHero
                    title="Site Rules & Guidelines"
                    subtitle="A few simple agreements to keep the property beautiful and safe for everyone."
                    backgroundImage="/src/assets/gallery/Images/hero-sunset-meadow.webp"
                />

                <section className="py-20 md:py-32">
                    <div className="container px-4 md:px-6 max-w-4xl mx-auto">
                        <ScrollReveal>
                            <div className="prose prose-stone lg:prose-lg max-w-none">
                                <p className="lead text-xl text-muted-foreground mb-12">
                                    At Rustic Retreat, we believe your wedding weekend should feel as relaxed and free as possible. Because we are an open, off-grid property surrounded by nature, we have a few common-sense guidelines in place. These ensure the safety of your guests, the protection of the land, and the comfort of our neighbors.
                                </p>

                                <div className="space-y-12">
                                    {/* Category 1 */}
                                    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-primary/10">
                                        <h3 className="text-2xl font-playfair text-primary mb-4 flex items-center gap-3">
                                            <span className="bg-secondary/30 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-secondary-foreground">1</span>
                                            Noise & Curfews
                                        </h3>
                                        <ul className="space-y-4 text-foreground/80">
                                            <li className="flex gap-3">
                                                <span className="text-secondary mt-1">•</span>
                                                <span><strong>Music Volume:</strong> We don't have a strict cut-off time for your celebration! However, to respect our rural neighbors, we require that amplified music be turned down to a "conversation-friendly" level by 11:00 PM (midnight on the night of your wedding). The campfire and acoustic guitars can keep going all night.</span>
                                            </li>
                                            <li className="flex gap-3">
                                                <span className="text-secondary mt-1">•</span>
                                                <span><strong>Generators:</strong> For guests camping in RVs, all generators (including built-in RV generators) must be turned off by 10:00 PM to ensure a peaceful night's sleep for all guests in tents.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Category 2 */}
                                    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-primary/10">
                                        <h3 className="text-2xl font-playfair text-primary mb-4 flex items-center gap-3">
                                            <span className="bg-secondary/30 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-secondary-foreground">2</span>
                                            Fires & Safety
                                        </h3>
                                        <ul className="space-y-4 text-foreground/80">
                                            <li className="flex gap-3">
                                                <span className="text-secondary mt-1">•</span>
                                                <span><strong>Campfires:</strong> Fires are strictly permitted <em>only</em> in the designated fire pit areas. All fires must be attended by a responsible adult at all times and fully extinguished with water before the last person goes to sleep.</span>
                                            </li>
                                            <li className="flex gap-3">
                                                <span className="text-secondary mt-1">•</span>
                                                <span><strong>Fire Bans:</strong> We strictly adhere to all Lac Ste. Anne County fire bans. If a county fire ban is in effect during your weekend, wood fires and sparklers will not be permitted (propane fire pits are usually exempt, but we will confirm at the time).</span>
                                            </li>
                                            <li className="flex gap-3">
                                                <span className="text-secondary mt-1">•</span>
                                                <span><strong>Fireworks & Lanterns:</strong> Due to absolute fire risk in the forest environment, fireworks and floating sky lanterns are strictly prohibited at all times.</span>
                                            </li>
                                            <li className="flex gap-3">
                                                <span className="text-secondary mt-1">•</span>
                                                <span><strong>Smoking:</strong> Smoking and vaping are only permitted in designated outdoor areas where proper disposal receptacles are provided. Please, absolutely no cigarette butts thrown on the ground or in the fire pits.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Category 3 */}
                                    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-primary/10">
                                        <h3 className="text-2xl font-playfair text-primary mb-4 flex items-center gap-3">
                                            <span className="bg-secondary/30 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-secondary-foreground">3</span>
                                            Pets
                                        </h3>
                                        <ul className="space-y-4 text-foreground/80">
                                            <li className="flex gap-3">
                                                <span className="text-secondary mt-1">•</span>
                                                <span><strong>Furry Friends Welcome:</strong> We love dogs! Well-behaved pets are welcome on the property. We ask that they are kept under control at all times so they don't wander off into the deep woods or bother other guests.</span>
                                            </li>
                                            <li className="flex gap-3">
                                                <span className="text-secondary mt-1">•</span>
                                                <span><strong>Clean Up:</strong> It goes without saying, but please ensure you (or a designated bridal party member) pick up after your pets throughout the weekend.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Category 4 */}
                                    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-primary/10">
                                        <h3 className="text-2xl font-playfair text-primary mb-4 flex items-center gap-3">
                                            <span className="bg-secondary/30 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-secondary-foreground">4</span>
                                            Decorations & Cleanup
                                        </h3>
                                        <ul className="space-y-4 text-foreground/80">
                                            <li className="flex gap-3">
                                                <span className="text-secondary mt-1">•</span>
                                                <span><strong>What not to throw:</strong> To protect the local wildlife and environment, we do not allow artificial confetti, faux flower petals outdoors, glitter, or rice. We highly encourage natural alternatives like eco-friendly bubbles, dried leaves, or real flower petals for your ceremony exit.</span>
                                            </li>
                                            <li className="flex gap-3">
                                                <span className="text-secondary mt-1">•</span>
                                                <span><strong>Nails & Staples:</strong> Please do not use nails, staples, or screws on any of the trees or buildings. Command hooks, zip ties, and string/twine work wonderfully and leave no trace!</span>
                                            </li>
                                            <li className="flex gap-3">
                                                <span className="text-secondary mt-1">•</span>
                                                <span><strong>Garbage:</strong> While we handle general property maintenance, we ask that you and your guests utilize the provided garbage and recycling bins throughout the weekend. The site must be left reasonably tidy, with all personal belongings and outside decor removed by the end of your rental period.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Category 5 */}
                                    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-primary/10">
                                        <h3 className="text-2xl font-playfair text-primary mb-4 flex items-center gap-3">
                                            <span className="bg-secondary/30 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-secondary-foreground">5</span>
                                            Vehicles & Parking
                                        </h3>
                                        <ul className="space-y-4 text-foreground/80">
                                            <li className="flex gap-3">
                                                <span className="text-secondary mt-1">•</span>
                                                <span><strong>Designated Parking:</strong> All vehicles must remain in the designated parking areas. Driving into the grassed ceremony spaces or deep into the trails is not permitted.</span>
                                            </li>
                                            <li className="flex gap-3">
                                                <span className="text-secondary mt-1">•</span>
                                                <span><strong>Safe Rides:</strong> We strongly encourage having a plan for designated drivers or pre-arranged transportation if your guests will be drinking and not camping on-site.</span>
                                            </li>
                                        </ul>
                                    </div>

                                </div>

                                <div className="mt-16 text-center border-t border-primary/10 pt-12">
                                    <p className="text-muted-foreground italic">
                                        If you have any specific questions about these guidelines or want to run an idea by us, just ask! We are here to help make your vision work within the bounds of a safe and respectful environment.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Guidelines;
