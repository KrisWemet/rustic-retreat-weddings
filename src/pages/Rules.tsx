import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import SEO from "@/components/SEO";
import { AlertTriangle, AlertCircle, Phone, FireExtinguisher, Cross, MapPin } from "lucide-react";

import heroBg from "@/assets/gallery/Images/gazebo-empty.webp";

// Internal specialized components for the Rules page to keep it clean
const RuleSection = ({ id, number, title, children }: { id?: string, number: string, title: string, children: React.ReactNode }) => (
    <section id={id} className="mb-14 scroll-mt-24">
        <div className="flex items-center gap-4 mb-6 pb-4 border-b-2 border-primary/20">
            <span className="bg-primary text-primary-foreground text-xs font-bold tracking-widest px-3 py-1 rounded-sm whitespace-nowrap">
                SECTION {number}
            </span>
            <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-foreground">{title}</h2>
        </div>
        {children}
    </section>
);

const Subsection = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="mb-8">
        <h3 className="font-sans font-bold text-sm uppercase tracking-widest text-primary mb-4">{title}</h3>
        {children}
    </div>
);

const RuleList = ({ items }: { items: React.ReactNode[] }) => (
    <ul className="space-y-3">
        {items.map((item, i) => (
            <li key={i} className="relative pl-6 text-[0.93rem] border-b border-primary/10 pb-3 last:border-0 last:pb-0 text-muted-foreground">
                <span className="absolute left-0 top-[0.4rem] w-2 h-2 rounded-full bg-secondary/80"></span>
                {item}
            </li>
        ))}
    </ul>
);

const WarnAlert = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 md:p-5 mb-5 rounded-r-md">
        <div className="font-bold uppercase text-xs tracking-widest text-amber-600 mb-2 flex items-center gap-2">
            <AlertTriangle className="h-4 w-4" /> {title}
        </div>
        <div className="text-sm text-amber-900">{children}</div>
    </div>
);

const DangerAlert = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="bg-red-50 border-l-4 border-red-500 p-4 md:p-5 mb-5 rounded-r-md">
        <div className="font-bold uppercase text-xs tracking-widest text-red-600 mb-2 flex items-center gap-2">
            <AlertCircle className="h-4 w-4" /> {title}
        </div>
        <div className="text-sm text-red-900">{children}</div>
    </div>
);

const Rules = () => {
    return (
        <PageTransition>
            <SEO
                title="Site Rules & Guidelines | Rustic Retreat"
                description="Important guidelines, policies, and rules for couples and guests attending an event at Rustic Retreat. We look forward to hosting you safely."
            />

            <div className="min-h-screen flex flex-col pt-24">
                <Navigation />

                <PageHero
                    title="Site Rules & Guidelines"
                    subtitle="Everything you need to know before walking the land with us."
                    backgroundImage={heroBg}
                />

                {/* Info Banner */}
                <div className="bg-primary text-primary-foreground py-3 border-y border-primary/20">
                    <div className="container mx-auto px-4 flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-sm tracking-wide">
                        <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 opacity-70" />
                            <span>3121 TWP RD 572A, Lac Ste. Anne County, AB</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <AlertTriangle className="h-4 w-4 opacity-70" />
                            <span>Fire Ban Status: <a href="http://www.albertafirebans.ca" target="_blank" rel="noreferrer" className="hover:text-secondary underline underline-offset-2">albertafirebans.ca</a></span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4 opacity-70" />
                            <span>Event Emergency: <strong>(780) 210-6252</strong></span>
                        </div>
                    </div>
                </div>

                {/* Emergency Banner */}
                <div className="bg-red-900 text-white py-4 text-center text-sm md:text-base tracking-wide border-b-4 border-red-950 px-4">
                    <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
                        <span className="font-semibold text-lg flex items-center gap-2"><AlertCircle className="h-5 w-5" /> ALL EMERGENCIES: Call 9-1-1</span>
                        <span className="hidden sm:inline opacity-50">|</span>
                        <span className="text-red-100">Non-Emergency RCMP: (780) 967-2020</span>
                    </div>
                </div>

                <main className="flex-1 py-16 md:py-24">
                    <div className="container mx-auto px-4 max-w-4xl">

                        <ScrollReveal>
                            <div className="bg-card border-l-4 border-primary p-6 md:p-8 mb-12 rounded-r-lg shadow-sm text-muted-foreground italic text-[0.95rem] leading-relaxed">
                                These site rules apply to all guests, vendors, contractors, and staff present on the property during events. The event host is responsible for ensuring all guests are aware of and comply with these rules. Violations may result in removal from the property and forfeiture of the security deposit.
                            </div>
                        </ScrollReveal>

                        {/* Quick Navigation / Table of Contents */}
                        <ScrollReveal delay={100}>
                            <div className="bg-muted/30 border border-primary/10 rounded-xl p-8 mb-16">
                                <h2 className="font-playfair text-xl mb-6 font-semibold">Sections</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-6">
                                    {[
                                        "Fire Safety & Smoking", "Noise & Quiet Hours", "Camping & RV Rules",
                                        "Vehicle & Traffic", "Alcohol & Responsible Service", "Waste & Environment",
                                        "Pets", "Prohibited Activities", "Children & Safety",
                                        "Weather & Emergencies", "Respect & Conduct", "Booking & Contracts",
                                        "Emergency Contacts"
                                    ].map((item, i) => (
                                        <a
                                            key={i}
                                            href={`#s${i + 1}`}
                                            className="text-primary hover:text-secondary text-sm font-medium flex items-center gap-2 group transition-colors"
                                        >
                                            <span className="opacity-50 group-hover:opacity-100 transition-opacity">→</span> {item}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>

                        <div>
                            <RuleSection id="s1" number="1" title="Fire Safety & Smoking">
                                <Subsection title="1.1 Fire Pits & Open Fires">
                                    <WarnAlert title="Fire Safety - Rural Property Rules Strictly Enforced">
                                        <ul className="list-disc pl-5 mt-2 space-y-1">
                                            <li>Check fire ban status before every event: <a href="http://www.albertafirebans.ca" target="_blank" rel="noreferrer" className="underline hover:text-amber-700">albertafirebans.ca</a></li>
                                            <li>No fires of any kind are permitted during a Fire Ban or Fire Advisory</li>
                                            <li>Violations may result in fines under the Alberta Forest and Prairie Protection Act</li>
                                        </ul>
                                    </WarnAlert>
                                    <RuleList items={[
                                        "Designated fire pits only - no fires outside marked fire pit locations",
                                        "Fire pits must be attended at all times - never leave a fire unattended",
                                        "Fires must be fully extinguished before guests retire for the night and before departure",
                                        "Dead-out check required - ashes must be cold to the touch; use water or sand to extinguish",
                                        "Maximum fire size: 1 metre diameter, 60 cm height",
                                        <strong key="noshow" className="text-foreground">No fires during any Fire Ban or Fire Advisory - no exceptions</strong>
                                    ]} />
                                </Subsection>

                                <Subsection title="1.2 Smoking">
                                    <RuleList items={[
                                        "Use cigarette disposal containers or fire pit",
                                        <span key="1"><strong>No smoking inside any buildings</strong> - all structures are non-smoking</span>,
                                        "If smoking while walking through forested trail or grassy areas: fully extinguish cigarette safely (with water or in a dirt patch) and dispose of butt appropriately. Do not flick into grass, brush, forest, or discard on the ground.",
                                        "Enhanced caution during dry conditions - no smoking while walking through forested or grassy areas during any Fire Advisory period"
                                    ]} />
                                </Subsection>

                                <Subsection title="1.3 Fireworks Policy">
                                    <WarnAlert title="Notice">
                                        All fireworks at this venue are managed exclusively by venue staff. Guest-supplied fireworks are strictly prohibited.
                                    </WarnAlert>
                                    <RuleList items={[
                                        "Venue-coordinated only - all fireworks must be approved, organized, and purchased through the venue",
                                        "Venue handles all permits and approvals - County Fire Services approval secured when required",
                                        "Professional setup, discharge, and cleanup - venue staff will handle all aspects of any firework display",
                                        "Advance booking required - fireworks must be requested and confirmed during final event planning",
                                        "No fireworks during any Fire Ban, Fire Advisory, or Restriction",
                                        "Fire safety measures maintained - fire extinguishers, water supply, and safety personnel present during all displays",
                                        "Post-discharge inspection - venue staff will inspect discharge area for smoldering materials"
                                    ]} />
                                </Subsection>

                                <Subsection title="1.4 Candles & Decorative Flames">
                                    <RuleList items={[
                                        "LED flameless candles strongly encouraged - preferred over real candles for all décor",
                                        "Real candles: must be in stable holders, attended at all times, and extinguished before leaving area unattended",
                                        "No candles in tents or fabric structures - serious fire hazard",
                                        "Tiki torches: must be secured, positioned away from structures, and extinguished before leaving unattended"
                                    ]} />
                                </Subsection>
                            </RuleSection>

                            <RuleSection id="s2" number="2" title="Noise & Quiet Hours">
                                <Subsection title="2.1 Music & Amplified Sound">
                                    <div className="overflow-x-auto mb-6">
                                        <table className="w-full text-sm border-collapse">
                                            <thead>
                                                <tr>
                                                    <th className="bg-primary text-primary-foreground p-3 text-left font-bold uppercase tracking-wider text-xs border border-primary">Noise Reduction Time</th>
                                                    <th className="bg-primary text-primary-foreground p-3 text-left font-bold uppercase tracking-wider text-xs border border-primary">Requirement</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="p-3 border border-primary/20 bg-muted/20 font-medium">11:00 PM (Sunday–Thursday)</td>
                                                    <td className="p-3 border border-primary/20 bg-card text-muted-foreground">Music reduced to reasonable conversational level</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-3 border border-primary/20 bg-muted/40 font-medium">12:00 Midnight (Friday–Saturday / Wedding Night)</td>
                                                    <td className="p-3 border border-primary/20 bg-muted/10 text-muted-foreground">Music reduced to be minimally audible at property line</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <RuleList items={[
                                        "Music must be minimally audible at the property line after noise reduction time",
                                        "Speakers must be aimed inward under gazebo, away from property lines",
                                        "DJ/sound equipment: professional setup only; volume monitored by staff"
                                    ]} />
                                </Subsection>

                                <Subsection title="2.2 Generator Use">
                                    <RuleList items={[
                                        <span key="gen"><strong>Guest generators off by 10:00 PM</strong> - mandatory shutoff time, no exceptions</span>,
                                        "Exhaust must be directed away from people and structures",
                                        "Generator refueling: unit must be turned off and allowed to cool before refueling"
                                    ]} />
                                </Subsection>

                                <Subsection title="2.3 Guest Noise">
                                    <RuleList items={[
                                        "Respect noise reduction hours for the comfort of fellow guests and neighbours",
                                        "Vehicle noise: no revving engines, loud exhaust, or car stereos after 10:00 PM",
                                        "Respect other campers and guests - keep noise to a reasonable level at all times"
                                    ]} />
                                </Subsection>
                            </RuleSection>

                            <RuleSection id="s3" number="3" title="Camping & RV Rules">
                                <Subsection title="3.1 RV Guidelines">
                                    <DangerAlert title="Wastewater Discharge is Strictly Prohibited">
                                        <ul className="list-disc pl-5 mt-2 space-y-1">
                                            <li>No greywater or blackwater may be discharged anywhere on this property</li>
                                            <li>Violations are subject to environmental cleanup fees per contract</li>
                                            <li>Self-contained RVs only - no hookups of any kind are available on-site</li>
                                        </ul>
                                    </DangerAlert>
                                    <RuleList items={[
                                        "Maximum RVs per event as stated in contract - capacity is strictly enforced",
                                        "Self-contained RVs only - all RVs must have functional fresh water and holding tanks",
                                        "No hookups provided - no electrical, water, or sewer connections; off-grid / boondocking only",
                                        "No RV dump station on-site - guests must be self-sufficient or use off-site facilities",
                                        "Guest generators off by 10:00 PM - RV generators are subject to the same generator rules",
                                        "Slide-outs and awnings: ensure adequate clearance from neighbouring units and trees"
                                    ]} />
                                </Subsection>

                                <Subsection title="3.2 Tent Camping">
                                    <RuleList items={[
                                        "Respect spacing - maintain reasonable distance from other campers",
                                        "Proper waste disposal - use provided facilities and waste bins"
                                    ]} />
                                </Subsection>

                                <Subsection title="3.3 General Camping Rules">
                                    <RuleList items={[
                                        "Maximum overnight guests as stated in contract - capacity enforced",
                                        "Campfires in designated pits only - no personal fires outside approved areas",
                                        "Pack in, pack out - leave your camping area cleaner than you found it",
                                        "Respect property - no damage to trees, plants, structures, or facilities"
                                    ]} />
                                </Subsection>
                            </RuleSection>

                            <RuleSection id="s4" number="4" title="Vehicle & Traffic Rules">
                                <Subsection title="4.1 Parking & Traffic Flow">
                                    <RuleList items={[
                                        "On-site parking only - no parking on TWP RD 572A or any County roads",
                                        <span key="park">Emergency access lane must remain clear at all times - <strong>no parking on the gravel driveway</strong></span>,
                                        "Speed limit: 15 km/h on all internal roads and driveways",
                                        "Watch for pedestrians, animals, and wildlife - guests frequently walk to/from camping areas"
                                    ]} />
                                </Subsection>

                                <Subsection title="4.2 Arrivals & Departures">
                                    <div className="overflow-x-auto mb-6">
                                        <table className="w-full text-sm border-collapse">
                                            <tbody>
                                                <tr>
                                                    <td className="p-3 border border-primary/20 bg-muted/20 font-bold w-1/3">Check-In</td>
                                                    <td className="p-3 border border-primary/20 bg-card text-muted-foreground">After 8:00 AM on Day 1</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-3 border border-primary/20 bg-muted/40 font-bold">Check-Out</td>
                                                    <td className="p-3 border border-primary/20 bg-muted/10 text-muted-foreground">By 8:00 PM on final day (or as specified by event host)</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-3 border border-primary/20 bg-muted/20 font-bold">RVs over 30 feet</td>
                                                    <td className="p-3 border border-primary/20 bg-card text-muted-foreground">Use alternate exit route for safer departure: 572A → RR31 → 570 → Hwy 33</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <RuleList items={[
                                        "Headlights on at dusk and night - improve visibility on internal roads"
                                    ]} />
                                </Subsection>

                                <Subsection title="4.3 Vehicle Safety">
                                    <DangerAlert title="Zero Tolerance - Impaired Driving">
                                        <ul className="list-disc pl-5 mt-2 space-y-1">
                                            <li>No impaired driving under any circumstances</li>
                                            <li>Arrange a sober driver before the event, use a shuttle/taxi, or stay overnight on-site</li>
                                            <li>Venue staff and event hosts are empowered to hold keys if impaired driving is suspected</li>
                                        </ul>
                                    </DangerAlert>
                                    <RuleList items={[
                                        "Secure loads - use tarps and straps on trailers and truck beds",
                                        "Children supervised near vehicles - drivers must watch carefully for children at play",
                                        "No vehicle maintenance on-site - oil changes, repairs, and vehicle washing are prohibited"
                                    ]} />
                                </Subsection>
                            </RuleSection>

                            <RuleSection id="s5" number="5" title="Alcohol & Responsible Service">
                                <Subsection title="5.1 Alcohol Policies">
                                    <RuleList items={[
                                        "AGLC Special Event Licence required - event host is responsible for obtaining the licence when alcohol is being served",
                                        "No alcohol service to minors - ID checks required for anyone appearing under 25",
                                        "Drink responsibly - know your limits; water and food should be provided by host throughout the event"
                                    ]} />
                                </Subsection>
                                <Subsection title="5.2 Safe Transportation">
                                    <RuleList items={[
                                        "Designated drivers encouraged - arrange a designated driver before the event begins",
                                        "Overnight camping encouraged - guests consuming alcohol are encouraged to stay on-site",
                                        "Keys held if necessary - hosts and venue staff may intervene to prevent impaired driving"
                                    ]} />
                                </Subsection>
                            </RuleSection>

                            <RuleSection id="s6" number="6" title="Waste & Environmental Protection">
                                <Subsection title="6.1 Waste Disposal">
                                    <div className="overflow-x-auto mb-6">
                                        <table className="w-full text-sm border-collapse">
                                            <thead>
                                                <tr>
                                                    <th className="bg-primary text-primary-foreground p-3 text-left font-bold uppercase tracking-wider text-xs border border-primary">Bin Type</th>
                                                    <th className="bg-primary text-primary-foreground p-3 text-left font-bold uppercase tracking-wider text-xs border border-primary">Colour / Label</th>
                                                    <th className="bg-primary text-primary-foreground p-3 text-left font-bold uppercase tracking-wider text-xs border border-primary">Accepted Materials</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="p-3 border border-primary/20 bg-muted/20 font-medium">General Waste</td>
                                                    <td className="p-3 border border-primary/20 bg-card">Black / General Waste Bins</td>
                                                    <td className="p-3 border border-primary/20 bg-card text-muted-foreground">Non-recyclable waste and garbage</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-3 border border-primary/20 bg-muted/40 font-medium">Recycling</td>
                                                    <td className="p-3 border border-primary/20 bg-muted/10">Blue Bins</td>
                                                    <td className="p-3 border border-primary/20 bg-muted/10 text-muted-foreground">Cans and bottles</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-3 border border-primary/20 bg-muted/20 font-medium">Organics / Compost</td>
                                                    <td className="p-3 border border-primary/20 bg-card">White Bins (where provided)</td>
                                                    <td className="p-3 border border-primary/20 bg-card text-muted-foreground">Food scraps and organic waste</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <RuleList items={[
                                        "No littering - pack out what you pack in",
                                        "Cigarette butts in disposal containers or fire pit only - not on ground or in vegetation",
                                        "Event cleanup prior to departure - event hosts are responsible for post-event cleanup"
                                    ]} />
                                </Subsection>

                                <Subsection title="6.2 Sanitation">
                                    <RuleList items={[
                                        "Use designated washroom facilities - outhouses and/or portable toilets are provided",
                                        "No outdoor urination or defecation - use provided facilities at all times",
                                        "RV holding tanks: no dumping of greywater or blackwater on property",
                                        "Report facility issues - contact on-site staff immediately if toilets are full or require servicing"
                                    ]} />
                                </Subsection>

                                <Subsection title="6.3 Environmental Stewardship">
                                    <RuleList items={[
                                        "Leave no trace - minimize your impact on the land",
                                        "Stay on paths and roads - avoid trampling vegetation or creating new trails",
                                        "No tree cutting or damage - do not cut, carve, or damage trees in any way",
                                        "No firewood collection from property - firewood is provided (refills available for a fee); do not cut trees or branches",
                                        "Protect wildlife - observe from a safe distance; do not feed or harass animals",
                                        "No dumping of any kind - fuel, chemicals, wastewater, and garbage must be disposed of properly",
                                        "Spill reporting - report any fuel, chemical, or sewage spills to staff immediately"
                                    ]} />
                                </Subsection>
                            </RuleSection>

                            <RuleSection id="s7" number="7" title="Pets">
                                <RuleList items={[
                                    "Pets allowed with advance approval - event host must notify venue in advance (pet fee may apply)",
                                    "Leashed at all times in main areas - maximum 6-foot leash",
                                    "Off-leash permitted in back field and on walking trails - pet must remain under owner's verbal control",
                                    "Owner responsible for control - pets must be under owner's control at all times as there are other animals on the property including chickens, goats, turkeys, ducks, cats and dogs",
                                    "Clean up after pets - waste bags are provided; dispose in designated bins",
                                    "No aggressive animals - pets showing aggression must be removed from the property immediately",
                                    "No pets in Bridal Suite or Décor Shed - these buildings are pet-free zones",
                                    "Quiet pets only - excessive barking or noise is not permitted and may result in removal",
                                    "Tie-outs in camping area only - pets may be tied to trees/stakes only in camping areas to prevent tripping hazards in common areas"
                                ]} />
                            </RuleSection>

                            <RuleSection id="s8" number="8" title="Prohibited Activities">
                                <DangerAlert title="Strictly Prohibited - Zero Tolerance">
                                    <ul className="list-disc pl-5 mt-2 space-y-1">
                                        <li>ATVs, UTVs, dirt bikes, or off-road vehicles - motorized recreation vehicles prohibited (mobility devices excepted)</li>
                                        <li>Hunting or firearms - hunting is prohibited; no firearms permitted on property during events</li>
                                        <li>Weapons - knives (except small pocket knives), bows, and other weapons prohibited</li>
                                        <li>Illegal drugs or substances - possession or use will result in immediate removal and authorities contacted</li>
                                        <li>Unauthorized fires - only fires in designated pits; no personal campfires outside approved areas</li>
                                        <li>Firewood collection - do not cut or collect any wood from the property</li>
                                        <li>Tree cutting, carving, or damage - respect all vegetation</li>
                                        <li>Unauthorized use of buildings or equipment - gazebo, buildings, sound system, etc. for event use only</li>
                                        <li>Fishing or swimming in the pond</li>
                                    </ul>
                                </DangerAlert>
                            </RuleSection>

                            <RuleSection id="s9" number="9" title="Children & Safety">
                                <Subsection title="9.1 Supervision Requirements">
                                    <RuleList items={[
                                        "Children supervised at all times - parents and guardians are responsible for supervision at all times",
                                        "No unattended children near fire pits - adult supervision is mandatory at all fires",
                                        "Watch for vehicle traffic - children must be supervised near parking areas and internal roads",
                                        "Pond safety - children are not permitted near the pond without direct adult supervision"
                                    ]} />
                                </Subsection>

                                <Subsection title="9.2 Natural Environment & Wildlife Awareness">
                                    <WarnAlert title="Rural Property Notice">
                                        This is a natural, wooded rural property. Wildlife including deer, coyotes, porcupines, skunks, and various bird species can be present and active at any time.
                                    </WarnAlert>
                                    <RuleList items={[
                                        "Always know where your children are - young children can wander quickly in forested areas",
                                        "Do not approach or feed wildlife - observe from a safe distance; wildlife can be unpredictable",
                                        "Be aware at dawn and dusk - wildlife is most active during these periods",
                                        "Secure food and garbage - prevent attracting wildlife to camping areas"
                                    ]} />
                                </Subsection>

                                <Subsection title="9.3 General Hazards">
                                    <RuleList items={[
                                        "Stay away from equipment and machinery - generators, sound equipment, etc. are not toys",
                                        "No climbing on structures - gazebo, buildings, fences, and other structures are not for climbing"
                                    ]} />
                                </Subsection>
                            </RuleSection>

                            <RuleSection id="s10" number="10" title="Weather & Emergency Procedures">
                                <Subsection title="10.1 Severe Weather">
                                    <RuleList items={[
                                        "Monitor weather conditions - staff will provide updates if severe weather is approaching",
                                        "Stay indoors during lightning - avoid open areas, tents, and elevated ground during lightning",
                                        "Follow staff directions - in extreme severe weather, evacuate to designated shelter immediately"
                                    ]} />
                                </Subsection>

                                <Subsection title="10.2 Fire Emergency">
                                    <DangerAlert title="Fire Emergency Response - All Guests Must Know This">
                                        <ul className="list-disc pl-5 mt-2 space-y-1">
                                            <li><strong>Assembly Point:</strong> Venue Administration Building (Residence 2) - evacuate here immediately</li>
                                            <li>Call 911 immediately - do NOT assume someone else has called</li>
                                            <li>Notify staff immediately - event emergency number: <strong>(780) 210-6252</strong></li>
                                            <li>Do NOT re-enter any building - wait outside for Fire Department all-clear</li>
                                            <li>Fire extinguishers located at: gazebo, bridal suite, and generator area - use ONLY if trained and safe to do so</li>
                                            <li>Wildfire: Evacuate the entire property immediately - do not shelter in buildings</li>
                                        </ul>
                                    </DangerAlert>
                                </Subsection>

                                <Subsection title="10.3 Medical Emergency">
                                    <div className="overflow-x-auto mb-6">
                                        <table className="w-full text-sm border-collapse border border-primary/20">
                                            <tbody>
                                                <tr>
                                                    <td className="p-3 border border-primary/20 bg-muted/20 font-bold w-1/3">First Aid Kits</td>
                                                    <td className="p-3 border border-primary/20 bg-card text-muted-foreground">Bridal Suite and Couple's Cabin</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-3 border border-primary/20 bg-muted/40 font-bold text-red-700">Serious Injuries</td>
                                                    <td className="p-3 border border-primary/20 bg-muted/10 text-muted-foreground">Call 911 immediately - do not delay treatment</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-3 border border-primary/20 bg-muted/20 font-bold">Event Emergency Hotline</td>
                                                    <td className="p-3 border border-primary/20 bg-card font-bold text-lg">(780) 210-6252</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </Subsection>
                            </RuleSection>

                            <RuleSection id="s11" number="11" title="Respect & Conduct">
                                <Subsection title="11.1 General Conduct">
                                    <RuleList items={[
                                        "Respect other guests - be courteous and considerate at all times",
                                        "Respect property and facilities - treat the venue as if it were your own home",
                                        "Respect neighbours - keep noise reasonable",
                                        "No harassment or discrimination - all guests deserve a safe and welcoming environment",
                                        "Follow staff directions - on-site operators and marshals are present for your safety and comfort",
                                        "Photography etiquette - respect the couple's wishes regarding photos and social media posting"
                                    ]} />
                                </Subsection>

                                <Subsection title="11.2 Property Respect">
                                    <RuleList items={[
                                        "No vandalism or damage - any damage will be charged to the event host",
                                        "Return the venue as you found it - return all picnic tables, ceremony benches, arches, hammocks, and other items to their original locations",
                                        "Return borrowed items - décor, lawn chairs, games, fire extinguishers, first aid kits, and equipment must be returned to original locations, clean and properly stored"
                                    ]} />
                                </Subsection>
                            </RuleSection>

                            <RuleSection id="s12" number="12" title="Booking & Contract Provisions">
                                <Subsection title="12.1 Guest Responsibilities">
                                    <RuleList items={[
                                        "Event host responsible for guest conduct - the event host is liable for all guest violations",
                                        "Environmental fee clause - guests are liable for cleanup costs if any wastewater violation occurs",
                                        "Damage deposit - the refundable deposit may be held for property damage and/or cleanup; event host is liable for any additional fees"
                                    ]} />
                                </Subsection>

                                <Subsection title="12.2 Violation Consequences">
                                    <div className="overflow-x-auto mb-6">
                                        <table className="w-full text-sm border-collapse">
                                            <thead>
                                                <tr>
                                                    <th className="bg-primary text-primary-foreground p-3 text-left font-bold uppercase tracking-wider text-xs border border-primary">Violation Level</th>
                                                    <th className="bg-primary text-primary-foreground p-3 text-left font-bold uppercase tracking-wider text-xs border border-primary">Consequence</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="p-3 border border-primary/20 bg-muted/20 font-medium w-1/3">First violation</td>
                                                    <td className="p-3 border border-primary/20 bg-card text-muted-foreground">Verbal warning, documented by staff</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-3 border border-primary/20 bg-muted/40 font-medium text-amber-700">Repeat violation</td>
                                                    <td className="p-3 border border-primary/20 bg-muted/10 text-muted-foreground">Removal from property without refund</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-3 border border-primary/20 bg-red-50 text-red-900 font-bold">Serious violation <br /><span className="text-xs font-normal text-red-700">(safety, fire, environmental)</span></td>
                                                    <td className="p-3 border border-primary/20 bg-red-50 font-bold text-red-900">Immediate removal from property and authorities contacted</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </Subsection>
                            </RuleSection>
                        </div>

                        {/* Quick Reference Emergency Contacts grid */}
                        <div>
                            <section id="s13">
                                <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 mt-16 shadow-xl relative overflow-hidden">
                                    {/* Decorative background overlay pattern */}
                                    <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>

                                    <h2 className="font-playfair text-2xl md:text-3xl text-center mb-10 font-bold relative z-10 text-white">Quick Reference - Emergency Contacts</h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
                                        <div className="bg-red-500/20 border-2 border-red-400 p-5 rounded-lg flex flex-col justify-center">
                                            <div className="text-xs font-bold uppercase tracking-widest text-red-200 mb-1">All Emergencies</div>
                                            <div className="text-3xl font-bold text-white tracking-wide">9-1-1</div>
                                        </div>

                                        <div className="bg-white/10 border border-white/20 p-5 rounded-lg">
                                            <div className="text-xs font-bold uppercase tracking-widest text-[#d9c9a8] mb-1">Event Emergency Hotline</div>
                                            <div className="text-xl font-bold text-white">(780) 210-6252</div>
                                        </div>

                                        <div className="bg-white/10 border border-white/20 p-5 rounded-lg">
                                            <div className="text-xs font-bold uppercase tracking-widest text-[#d9c9a8] mb-1">Non-Emergency RCMP</div>
                                            <div className="text-xl font-bold text-white">(780) 967-2020</div>
                                        </div>

                                        <div className="bg-white/10 border border-white/20 p-5 rounded-lg">
                                            <div className="text-xs font-bold uppercase tracking-widest text-[#d9c9a8] mb-1">Poison Control</div>
                                            <div className="text-xl font-bold text-white">1-800-332-1414</div>
                                        </div>

                                        <div className="bg-white/10 border border-white/20 p-5 rounded-lg">
                                            <div className="text-xs font-bold uppercase tracking-widest text-[#d9c9a8] mb-1">Fire Ban Status</div>
                                            <div className="text-lg font-medium text-white hover:text-secondary"><a href="http://www.albertafirebans.ca" target="_blank" rel="noreferrer">albertafirebans.ca</a></div>
                                        </div>

                                        <div className="bg-white/10 border border-white/20 p-5 rounded-lg">
                                            <div className="text-xs font-bold uppercase tracking-widest text-[#d9c9a8] mb-1">Property Address</div>
                                            <div className="text-sm font-medium text-white leading-tight">3121 TWP RD 572A, <br />Lac Ste. Anne County, AB</div>
                                        </div>

                                        <div className="bg-white/5 border border-white/10 p-5 rounded-lg col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <div className="text-[0.65rem] font-bold uppercase tracking-widest text-[#d9c9a8]">Assembly Point (Fire)</div>
                                                <div className="text-sm text-white">Venue Administration Building (Residence 2)</div>
                                            </div>
                                            <div>
                                                <div className="text-[0.65rem] font-bold uppercase tracking-widest text-[#d9c9a8]">Fire Extinguishers & First Aid</div>
                                                <div className="text-sm text-white flex gap-3">
                                                    <span className="flex items-center gap-1 opacity-90"><FireExtinguisher className="h-3 w-3" /> Gazebo, Bridal Suite</span>
                                                    <span className="flex items-center gap-1 opacity-90"><Cross className="h-3 w-3" /> Couple's Cabin</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                    </div>
                </main>

                <Footer />
            </div>
        </PageTransition>
    );
};

export default Rules;
