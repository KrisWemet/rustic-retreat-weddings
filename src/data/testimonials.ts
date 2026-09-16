import { Testimonial } from "@/types/testimonial";

/**
 * Public link to the venue's Google Business Profile.
 * Also referenced from `public/llm.html` and `public/llms.txt`.
 */
export const GOOGLE_REVIEWS_URL = "https://maps.app.goo.gl/QLX79xtop3uLpnTq9";

/**
 * Reviews from couples and guests who celebrated at Rustic Retreat.
 *
 * Add new entries here only - the homepage section reads from this list and the
 * carousel handles any number of reviews. Keep `public/llm.html` and
 * `public/llms.txt` in step when this list changes.
 *
 * Quotes are verbatim and complete; the card clamps long ones and lets the
 * reader open the rest. Google shows relative dates ("2 weeks ago"), so entries
 * sourced from Google carry the month they were captured: 16 September 2026.
 *
 * Ordered newest first, but reordered within a month so that reviews from the
 * same household are never on screen together - three cards are visible at once
 * on desktop, so these stay at least three apart: Brian Dodd / Janelle Hewson
 * (one couple), Christine / Kevin Williams, and Kail Jo / Kailyn Johnson (which
 * may be one person under two Google accounts).
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "We had our wedding at Rustic Retreat Weddings & Events Ltd, and we truly couldn't have asked for a better experience. Shannon and her husband were absolutely wonderful to deal with from beginning to end. They were welcoming, friendly, easygoing, and genuinely cared about making sure our day went smoothly.\n\nThey went above and beyond in so many ways — helping wherever they were needed, taking behind-the-scenes photos for us, keeping things running smoothly, and even running to get our rings when we realized they had been forgotten! 😂\n\nWhat meant the most to us was that they didn't just feel like the owners of the venue. By the end of the weekend, it honestly felt like we had two extra family members there supporting us and people we could lean on whenever we needed something. Having that kind of support on such a busy and emotional day meant more than we can say.\n\nIt was all of those little things that really stood out. They didn't just provide us with a beautiful place to have our wedding — they helped make the entire experience special, memorable, and so much less stressful.\n\nThe property was beautiful, we felt completely at home, and Shannon and her husband have such wonderful personalities. We are so thankful we chose Rustic Retreat Weddings & Events Ltd for our wedding and would absolutely recommend them to anyone looking for a beautiful, welcoming venue with people who truly care about your day.\n\nThank you both for everything you did for us and for making us feel like family. ❤️\n\n— Janelle & Brian",
    name: "Janelle Hewson",
    date: "September 2026",
    source: "Google",
  },
  {
    quote: "Amazing place! I had the opportunity to attend a wedding weekend at Rustic Retreat and had the best time. The owners were attentive and put in a lot of work to ensure everything was well taken care of. The space is beautiful and private. I would highly recommend anyone looking to check this place out! The stars at night were also a huge hit for myself!",
    name: "Kail Jo",
    date: "September 2026",
    source: "Google",
  },
  {
    quote: "Absolutely loved the location and privacy, very accommodating and the owners did an amazing job helping out wherever they were needed. Highly recommend for weddings, family reunions and even birthday events.",
    name: "Christine Williams",
    date: "September 2026",
    source: "Google",
  },
  {
    quote: "This is THE place I would recommend to host a wedding. We enjoyed every aspect of our entire weekend. We were greeted with a warm welcome as soon as we arrived. The owners went above and beyond to ensure everything was perfect for wedding and helping with anything we needed. It was nice to have camping on-site so many guests can stay late and enjoy the evening.",
    name: "Brian Dodd",
    date: "September 2026",
    source: "Google",
  },
  {
    quote: "Amazing venue, owners are friendly and attentive to needs of guests. Highly recommend this venue if you are looking for a special place!",
    name: "Kailyn Johnson",
    date: "September 2026",
    source: "Google",
  },
  {
    quote: "Beautiful property. Definitely recommended. Had a great time.",
    name: "Kevin Williams",
    date: "September 2026",
    source: "Google",
  },
  {
    quote: "I had the pleasure of attending a wedding at this venue, and it was absolutely beautiful! The venue itself was stunning, the atmosphere was incredible, and everything was so well organized. The owners were friendly, professional, and attentive throughout the whole weekend. It was clear that a lot of care went into making the experience special for the couple and their guests. From the beautiful setting to the overall atmosphere, it was a wonderful place to celebrate such a special occasion. I would definitely recommend this venue to anyone looking for an amazing wedding venue!",
    name: "Anthony Brassard",
    date: "August 2026",
    source: "Google",
  },
  {
    quote: "I cannot say enough good things about the venue and the owners!!! ❤️❤️❤️ It is a beautiful space and the owners went above and beyond!!! ❤️❤️❤️",
    name: "Rhonda Carpenter",
    date: "August 2026",
    source: "Google",
  },
  {
    quote: "Great venue. Great hosts.",
    name: "Derek",
    date: "August 2026",
    source: "Google",
  },
  // The three below predate the Google reviews above and are not on the current
  // Business Profile, so their original source is unconfirmed - `source` is left
  // unset rather than claimed. They are published with the couples' permission.
  {
    quote: "The property is stunning, featuring a romantic couples cabin, enchanting forested areas, and a breathtaking gazebo adorned with lights and ample space. The seamless flow to a gorgeous dance floor and field area, endless paths, and an inviting fire pit hangout near the couples suite made for a fun way to end a long night of dancing. Roasting hotdogs and smores, camping with family and friends added an extra layer of joy to our wedding.",
    name: "Tabitha",
    date: "September 2025",
  },
  {
    quote: "Such an amazing experience from the moment we contacted Rustic Retreat to the time we checked out. The venue is absolutely beautiful and you will not be disappointed. I will absolutely recommend this amazing place to anyone and everyone looking for a small to medium romantic wedding. When you check in you are greeted by amazing hospitality.",
    name: "Ali",
    date: "August 2025",
  },
  {
    quote: "My husband and I got married here two weeks ago (planned a wedding in just over a month)-let me tell ya, it was an absolute blast! Shannon and her husband went above and beyond to make sure everything went smoothly for us.",
    name: "Viktoria",
    date: "June 2025",
  },
];
