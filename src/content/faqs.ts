export type FAQEntry = {
  category: string;
  question: string;
  answer: string;
  link?: { url: string; text: string };
};

// Bump this whenever an FAQ question or answer changes. It shows on the FAQs page,
// goes into its schema as dateModified, and should match the "Last updated" lines in
// public/faqs.txt and public/prerender/faqs.html.
export const FAQS_LAST_UPDATED = "2026-11-21";

export const FAQS: FAQEntry[] = [
    {
      category: "Packages & Pricing",
      question: "How much does a wedding at Rustic Retreat cost?",
      answer: "Our pricing is all-in:\n\n2027 season:\n- 3-Day Weekend: $6,500\n- 5-Day Experience: $7,500 (our most popular)\n\n2028 season:\n- 3-Day Weekend: $7,500\n- 5-Day Experience: $8,500 (our most popular)\n\nEvery package includes exclusive use of the whole 65-acre property, the newlywed cabin, overnight camping for up to 60 guests, ceremony and reception seating for 80, the wash house, the bridal suite, the full décor collection, a stocked firewood shed and the sound system. Prices are in CAD, and GST is extra.\n\nThere are no per-plate catering minimums, mandatory vendors, corkage fees, nightly camping charges or surprise line items. Because you bring your own caterer, bar and vendors, couples often host a whole multi-day celebration here for less than one evening costs at many traditional venues.\n\nPayment plans are available, and a down payment holds your date."
    },
    {
      category: "Guest Accommodations",
      question: "What if some of our guests don't want to camp?",
      answer: "They have a few options.\n\nThere are Airbnbs 5 to 15 minutes away along the shore of Lac la Nonne, including several right on the lake, and more in Alberta Beach, about 30 minutes away.\n\nGuests who want to stay on the property without a tent are welcome to bring RVs. Every package includes space for 8 RVs, and up to 15 fit on site (RVs beyond the included 8 carry an overage fee, which is set out in your contract).\n\nIf they don't own an RV, they can rent one on RVezy.com. Some listings deliver the RV, set it up on the property and pick it up at the end of the weekend; choose the delivery option when searching to find them.\n\nThere are also hotels about 15 minutes away in Barrhead and Onoway."
    },
    {
      category: "Location & Access",
      question: "How far is Rustic Retreat from Edmonton?",
      answer: "About an hour northwest of Edmonton: 99 kilometres from the city centre, near Lac la Nonne, and about 15 minutes from both Barrhead and Onoway.\n\nThe drive is mostly open fields and quiet country roads. For out-of-town guests flying into Edmonton's YEG airport, it's a straightforward trip."
    },
    {
      category: "Packages & Pricing",
      question: "What's included in the wedding package price?",
      answer: "The whole property is yours for your booking: the ceremony spaces, the clear-top gazebo, the groomed trails and the campfire area. We live on the property, so we're close by if you need something. Forgot a toothbrush, or need a safety pin five minutes before the ceremony? Ask us first. We can't promise everything, but we'll do our best.\n\nFor the celebration itself there's an outdoor dance floor, a Bluetooth sound system with wireless microphones, and picnic tables and hand-built ceremony benches for up to 80 guests, which you can set up wherever you like.\n\nThe Wedding Décor Collection is included at no extra cost: arches, table styling pieces, hurricane vases, votive candle holders, faux florals and greenery, wood signs and sheer fabrics. It keeps growing, partly from pieces we've bought along the way and partly from things past couples have left for the next ones. Consumables like candles and batteries cost extra, or you can bring your own.\n\nThe newlywed cabin comes stocked with bedding, a Keurig with pods and cookware. A full firewood shed covers the whole weekend, propane for the cabin deck BBQ is included, and when the chickens cooperate, there are fresh eggs in the morning.\n\nFor kids, there's a treehouse, a trampoline, a playhouse, lawn games, and board games for rainy afternoons."
    },
    {
      category: "Guest Accommodations",
      question: "How many guests can you accommodate?",
      answer: "Weddings here work best with 60 to 80 guests. There's ceremony and reception seating for 80, and we can host up to 100 at most; we'll go over the details on your tour.\n\nOvernight camping is included with every package for up to 60 guests, in tents or RVs, in our main camping area. It's boondocking, so there are no electrical hookups or water connections at the campsites, and guests tend to love it anyway."
    },
    {
      category: "Guest Accommodations",
      question: "Can our guests stay overnight at the venue?",
      answer: "Yes. Overnight camping is included with every package for up to 60 guests. The main camping area takes tents and RVs (8 RVs are included, and up to 15 fit on site), and guests pick their own spot for the weekend, so nobody has to drive home at midnight.\n\nThe two of you get the newlywed cabin, which is private, fully stocked and sleeps 4.\n\nGuests who want a real bed can stay at lakefront Airbnbs on Lac la Nonne, 5 to 15 minutes away, or at hotels in Barrhead and Onoway, about 15 minutes out."
    },
    {
      category: "Property Amenities",
      question: "Is there electricity and running water?",
      answer: "Yes to both, with some details.\n\nThe property runs entirely on solar power; no power lines come in from the road, and it has been off-grid from the start. You'll have reliable power for the essentials, including the cabin, the sound system and lighting. We bring in supplemental generators when needed, such as after a few cloudy days or for a large extra power draw, and place them well away from the venue area. If you're planning something that uses extra power, like a custom neon sign behind the head table or specialty lighting, let us know ahead of time.\n\nIf any of your vendors need power, tell us early, and make sure they know the property runs on solar. This matters most for DJs and caterers. Some DJs prefer not to run their equipment on a generator and bring their own power source, so it's worth asking yours.\n\nThere's potable water on site, but the supply is limited, so plan on drinking water for your guests, such as bottled water or 5-gallon jugs with a dispenser.\n\nFor bathrooms, there are two outhouses, and we bring in an extra portable one depending on the size of your event. The wash house has two shower stalls with on-demand hot water that comes through almost instantly, with good pressure. A bathroom house with two flush toilets is planned for the 2027 season."
    },
    {
      category: "Weather & Logistics",
      question: "What happens if it rains?",
      answer: "The clear-top gazebo covers all 80 guests for the reception, so the party carries on in the rain. For the ceremony, you can rent a party tent to keep on standby (there's room for one on the property), hand out umbrellas, or move the ceremony under the gazebo.\n\nThe dance floor is open air, so you may end up dancing in the rain. Alberta weather is hard to predict, and rain isn't all bad: it softens the light and deepens the colours in photos."
    },
    {
      category: "Weather & Logistics",
      question: "Are there a lot of mosquitoes?",
      answer: "It depends on the year; some summers are much buggier than others. Thermacell repellers work really well under the gazebo, so bring a few for the reception (we don't supply them), and pack bug spray for the trails and campsites."
    },
    {
      category: "Location & Access",
      question: "Where do guests park?",
      answer: "Almost anywhere on the property. We've easily fit 20 vehicles, and there's overflow parking if you need more."
    },
    {
      category: "Booking & Scheduling",
      question: "When can we book our wedding at Rustic Retreat?",
      answer: "Every booking starts with a visit, so you can see the property before you commit. In person is best, because walking the land tells you more than any photo, but if you live too far away, a video call tour counts as your visit.\n\nIf you're ready after your tour, we can get everything started that day. If you'd rather take a few days to think it over, that's fine too."
    },
    {
      category: "Booking & Scheduling",
      question: "Can we book on short notice?",
      answer: "Yes, if your date is still open. One couple planned their whole wedding here in just over a month. If your wedding is less than 90 days away, the full price is due when you book."
    },
    {
      category: "Booking & Scheduling",
      question: "Which package would be best for me?",
      answer: "The 3-day package (Friday to Sunday) suits couples who want a shorter, focused weekend with everyone there for the main events.\n\nThe 5-day package (Wednesday to Sunday or Thursday to Monday) is our most popular. The extra days give everyone time to arrive and settle in before the wedding, with room for an activity day, long meals and evenings around the campfire. By the wedding day, your families have already spent a few days together.\n\nYour decorating plans matter too. If vendors are handling setup and takedown, three days can work well. If friends and family are helping you decorate, the extra days mean nobody has to rush.\n\nWith either package, check-in starts at 8am on your first day and checkout is at 8pm on your last. We're happy to talk it through on your property visit."
    },
    {
      category: "Booking & Scheduling",
      question: "Do you offer payment plans, and what are your deposit and cancellation terms?",
      answer: "Yes, we offer payment plans. Most couples choose a staged plan that spreads payments between booking day and the wedding weekend.\n\nTo secure your date, we need a signed agreement and a booking deposit. The rest is paid on a schedule we agree on together, and we're happy to work out timing that suits your budget. If your wedding is less than 90 days away, the full price is due when you book.\n\nBecause we host only one wedding per weekend, a cancellation can leave that date empty. The deposit and cancellation terms, including timelines and any non-refundable portions, are set out in your contract before you sign anything.\n\nIf your plans change, tell us early. We're reasonable people and will do our best to work with you within the contract terms."
    },
    {
      category: "Planning & Flexibility",
      question: "Do we have to use your vendors, and are there minimum spends?",
      answer: "There are no mandatory vendors and no minimum spends. Almost any vendor you choose is welcome, and there's no limit on how many are on site, so bring the photographer, caterer or florist you love. Plenty of couples do the whole weekend themselves with help from family and friends. If you'd like recommendations, we're happy to share vendors we've worked with and trust; Laura Rose Catering and the Curbside by A Cappella food truck have both worked here.\n\nYou set the timeline for vendor arrival, setup and everything else, with no restrictions on timing within your booked dates. Check-in is from 8am on your first day, and checkout is at 8pm on your last. If you'd rather not run the day yourselves, we offer coordination built around what you need; ask us for a quote on your tour.\n\nA few things to tell your vendors ahead of time: the property runs on solar power, which can affect setup, particularly for DJs and caterers, and there's currently no kitchen or prep area on site, so caterers need to plan for that.\n\nVendors can unload near the venue and then park near the house to keep the venue area clear for guests. All vendors need their own liability insurance, and booking, communicating with and paying your vendors is up to you.\n\nIf you'd like to drop off décor or liquor before your check-in date, that may be possible for a small early drop-off fee. It depends on when the previous event checks out, so it's usually only possible one or two days before your start date and can't be guaranteed. Decorating can't begin until your booked start time."
    },
    {
      category: "Planning & Flexibility",
      question: "Can we bring our own alcohol and run our own bar?",
      answer: "Yes. There are no corkage fees, no drink minimums, and no requirement to buy alcohol through us or anyone else.\n\nYou can stock self-serve coolers, set up a full DIY bar with your own signature cocktails, or hire a licensed bar service. For a lot of couples, this is where they save the most compared with a traditional venue.\n\nThe one requirement is an AGLC Special Event Licence in the host's name whenever alcohol is served. That's an Alberta rule, not ours. It's inexpensive and simple to get, and we'll tell you what to apply for and when. If you hire a bar service, make sure it's licensed and insured.\n\nSince most guests are camping a short walk away, nobody needs to drive home."
    },
    {
      category: "Property Rules & Policies",
      question: "What are the bar and liquor licence requirements, and who handles them?",
      answer: "If alcohol is served, the event host has to get the AGLC Special Event Licence, and Alberta rules require it to be in the host's name. We can tell you what to apply for and when.\n\nYou can run the bar however suits you, from self-serve coolers to a staffed bar. If you hire a bar service, make sure it's fully licensed and insured.\n\nWe also ask that you plan for responsible service, and for safe rides home or overnight stays for guests."
    },
    {
      category: "Planning & Flexibility",
      question: "Can we have a rehearsal dinner, ceremony rehearsal or other events?",
      answer: "Yes. The property is yours for your whole booking, so you set the schedule. You could plan a rehearsal dinner under the stars, a lawn games tournament (Connect Four gets competitive), a group hike, or a quiet afternoon where everyone naps and reads.\n\nMornings might start with yoga on the grass, and most evenings end up at the campfire."
    },
    {
      category: "Property Amenities",
      question: "Where do we get ready on the wedding day, and can our guests shower?",
      answer: "Yes to both, in two of the newest buildings on the property.\n\nThe bridal suite is a getting-ready space with two hair and makeup stations, so your stylists can work on two people at once and the morning keeps moving. There's room for the wedding party to spread out and somewhere to hang the dress and garment bags. It's a pet-free building, and it's one of the places we keep a first aid kit and a fire extinguisher.\n\nThe wash house has two shower stalls with on-demand hot water, so it won't run out partway through the morning. The water heats almost instantly and the pressure is good, which surprises people on an off-grid property. Camping guests can shower here instead of driving into town.\n\nOur family built both buildings, and both are included with every package. The outhouses are still on site, and a bathroom house with two flush toilets is planned for the 2027 season."
    },
    {
      category: "Exclusivity & Privacy",
      question: "Do you host multiple weddings per weekend?",
      answer: "No. We host one wedding per weekend, so the whole venue is yours for your entire booking, with no other event sharing the property."
    },
    {
      category: "Booking & Scheduling",
      question: "When is wedding season?",
      answer: "June through September. We open in June, once the land has dried out from spring and the grass and leaves are back; earlier than that, the ground is soft and the trees are still bare.\n\nWe close in September, before the leaves fall and the nights turn cold. Autumn here is beautiful, but once the trees turn and drop their leaves the property feels quite different, and we'd rather your weekend have warm evenings and late-summer light than chilly mornings under bare branches.\n\nThis is Alberta, though, where you can get all four seasons in one weekend, so the weather doesn't always cooperate."
    },
    {
      category: "Property Rules & Policies",
      question: "When does the party have to wind down?",
      answer: "We don't have quiet hours, but we do have noise reduction hours. On most evenings, amplified music needs to come down to a level that's fair to neighbours and sleeping guests by 11pm. On your wedding night, that moves to midnight.\n\nThe party doesn't have to stop; the volume just comes down. Tent walls are thin, some of your guests will want to sleep, and we have neighbours too.\n\nGenerators are welcome on the property, but they have to be shut off by 10pm every night, including onboard generators in RVs and motorhomes."
    },
    {
      category: "Property Rules & Policies",
      question: "Can we bring our dog (or other pets)?",
      answer: "Well-behaved pets are welcome, and dogs especially seem to love it here. Your dog can walk down the aisle, be in the portraits and spend the weekend by the campfire with everyone else.\n\nLet us know ahead of time so we can plan for them. If you'd like your dog in the cabin with you, a small pet cleaning fee applies. There's more detail in our Site Rules & Guidelines, linked at the bottom of the website.\n\nFor other animals, get in touch and we'll see what we can do."
    },
    {
      category: "Guest Accommodations",
      question: "Is the property accessible for guests with mobility needs?",
      answer: "We want to be upfront about this one. It's a natural, off-grid property, and the ground is a mix of grass, gravel and wood chips, so we can't guarantee full accessibility.\n\nWe'll do what we can to help. If you have guests with mobility needs, plan the layout, parking and seating early, and we're happy to make suggestions based on the property.\n\nWe don't currently have wheelchair-accessible washrooms on site. It's something we're keeping in mind as we build."
    },
    {
      category: "Guest Accommodations",
      question: "Is there a minimum guest count?",
      answer: "No. The property works for an elopement with a handful of people as well as for a full weekend with 80 guests. The gazebo seats up to 80, but with a little décor it can feel cozy for a much smaller group."
    },
    {
      category: "Property Amenities",
      question: "Is there WiFi on the property?",
      answer: "There's no WiFi at the venue, but cell signal is good in most areas, so you can be reached if you need to be. Most couples tell us afterward that being a bit unplugged was one of their favourite parts of the weekend, because guests put their phones down and actually talked to each other."
    },
    {
      category: "Property Rules & Policies",
      question: "Are there décor restrictions like candles, confetti, tape, nails, or sparklers?",
      answer: "A few rules keep the property in good shape and everyone safe.\n\nOpen flame is allowed, following fire safety guidelines. Real candles must be stable and attended at all times, and during fire advisories or bans, flame-based décor may be restricted; flameless candles work well instead.\n\nLoose confetti and glitter aren't allowed. They're hard to clean out of grass and gravel and can harm wildlife. Natural options like dried flowers or rice paper confetti are fine because they break down quickly, but please clean up as much as you can before checkout.\n\nNothing can be nailed, screwed or stapled into any building, structure, tree, arch or table. Use removable fasteners like twine or zip ties, and take them all down before checkout.\n\nIf you're not sure whether a décor idea will work here, send it to us ahead of time and we'll help you find a way.\n\nThe full Rustic Retreat Site Rules & Guidelines are linked below.",
      link: { url: "/rustic-retreat-site-rules.html", text: "Read the full Rustic Retreat Site Rules & Guidelines here." }
    },
    {
      category: "Property Rules & Policies",
      question: "Can we use drones, and are there photo or video rules?",
      answer: "Professional photography and videography are welcome, including drone footage where conditions and regulations allow.\n\nDrone pilots must follow current Transport Canada rules and any airspace requirements, and should only fly when the weather is safe, visibility is good and guests know about it. Please respect our neighbours' privacy during flights.\n\nPilots should avoid flying low over guests during key moments unless it's been arranged ahead of time, and should always give way to the ceremony, the sound and guests' comfort.\n\nIf your photographer plans to fly a drone, let us know in advance so we can agree on launch areas and timing.\n\nThe full Rustic Retreat Site Rules & Guidelines are linked below.",
      link: { url: "/rustic-retreat-site-rules.html", text: "View our complete Site Rules and Guidelines here." }
    },
    {
      category: "Property Rules & Policies",
      question: "What is expected for cleanup before checkout?",
      answer: "You don't need to deep clean; we do that between bookings. We just ask that you leave the property tidy for the next couple.\n\nYou're welcome to rearrange the gazebo and ceremony spaces, so please put all picnic tables, ceremony benches and other venue items back where they were at check-in.\n\nLeave the cabin, the bridal suite and the grounds tidy. Wash and put away the cabin dishes, and tie up garbage bags and take them to the designated area. Before checkout, walk through the camping area, ceremony space, gazebo and fire pit area to pick up any garbage, confetti and décor.\n\nClean borrowed décor if it needs it, and return it to the labelled bins in the décor shed. If anything is damaged or missing, please tell us before you check out rather than leaving us to find it.\n\nPack out all personal items, rentals and anything your vendors brought in. As the hosts, you're responsible for making sure your guests and vendors clean up too.\n\nIf the property needs a lot of extra cleanup after checkout, a cleaning fee comes out of your damage deposit, as set out in your contract. If you're unsure about anything during teardown, just ask."
    },
    {
      category: "Property Rules & Policies",
      question: "Are there any specific site rules or curfews we should know about?",
      answer: "We keep the rules to a minimum, but as an open, off-grid property in the country we have a few common-sense guidelines to keep everyone safe, protect the land and respect our neighbours.\n\nThey cover noise reduction hours, fire safety and smoking, how to hang décor, keeping kids safe in a country setting, and some simple wildlife precautions. Please read the full Site Rules & Guidelines before your weekend so nothing catches you by surprise.",
      link: { url: "/rustic-retreat-site-rules.html", text: "View our complete Site Rules and Guidelines here." }
    },
  ];
