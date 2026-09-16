import { Testimonial } from "@/types/testimonial";

/**
 * Public link to the venue's Google Business Profile.
 * Also referenced from `public/llm.html` and `public/llms.txt`.
 */
export const GOOGLE_REVIEWS_URL = "https://maps.app.goo.gl/QLX79xtop3uLpnTq9";

/**
 * Reviews from couples who celebrated at Rustic Retreat, published with their
 * permission. Add new entries here only - the homepage section and `public/llm.html`
 * both read from this list, and the carousel handles any number of reviews.
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "The property is stunning, featuring a romantic couples cabin, enchanting forested areas, and a breathtaking gazebo adorned with lights and ample space. The seamless flow to a gorgeous dance floor and field area, endless paths, and an inviting fire pit hangout near the couples suite made for a fun way to end a long night of dancing. Roasting hotdogs and smores, camping with family and friends added an extra layer of joy to our wedding.",
    name: "Tabitha",
    date: "September 2025",
    source: "Google",
  },
  {
    quote: "Such an amazing experience from the moment we contacted Rustic Retreat to the time we checked out. The venue is absolutely beautiful and you will not be disappointed. I will absolutely recommend this amazing place to anyone and everyone looking for a small to medium romantic wedding. When you check in you are greeted by amazing hospitality.",
    name: "Ali",
    date: "August 2025",
    source: "Google",
  },
  {
    quote: "My husband and I got married here two weeks ago (planned a wedding in just over a month)-let me tell ya, it was an absolute blast! Shannon and her husband went above and beyond to make sure everything went smoothly for us.",
    name: "Viktoria",
    date: "June 2025",
    source: "Google",
  },
];
