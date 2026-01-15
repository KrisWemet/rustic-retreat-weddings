import { WeddingStory } from "@/types/wedding-story";

// Import gallery images for stories
import ceremonyVows from "@/assets/gallery/ceremony-vows-gazebo.jpg";
import firstDanceSparklers from "@/assets/gallery/first-dance-sparklers.jpg";
import meadowKiss from "@/assets/gallery/meadow-sunset-kiss.jpg";
import veilKiss from "@/assets/gallery/veil-kiss-romantic.jpg";
import bridalPortrait from "@/assets/gallery/bridal-portrait-porch.jpg";
import weddingParty from "@/assets/gallery/wedding-party-group.jpg";
import receptionTablescape from "@/assets/gallery/reception-tablescape-gold.avif";
import gazeboLights from "@/assets/gallery/gazebo-twinkle-lights.avif";
import birchAltar from "@/assets/gallery/birch-grove-altar.avif";
import coupleKissMeadow from "@/assets/gallery/couple-kiss-meadow.avif";
import sunsetClearing from "@/assets/gallery/sunset-clearing-portraits.avif";
import forestPath from "@/assets/gallery/forest-path-photos.avif";

/**
 * Wedding Stories Data
 * 
 * To add a new wedding story:
 * 1. Add your images to src/assets/gallery/
 * 2. Import them at the top of this file
 * 3. Add a new object to the weddingStories array below
 * 4. The story will automatically appear on the Real Weddings page
 */

export const weddingStories: WeddingStory[] = [
  {
    id: "1",
    slug: "sarah-and-mike-summer-2024",
    coupleNames: "Sarah & Mike",
    weddingDate: "August 15, 2024",
    season: "Summer 2024",
    headline: "A Weekend of Unscripted Magic",
    excerpt: "What started as a simple outdoor wedding became a 4-day family reunion that no one wanted to end.",
    heroImage: meadowKiss,
    galleryImages: [
      { src: meadowKiss, alt: "Sarah and Mike kissing in the sunset meadow", caption: "The golden hour moment" },
      { src: ceremonyVows, alt: "Exchanging vows under the gazebo", caption: "Saying I do" },
      { src: firstDanceSparklers, alt: "First dance surrounded by sparklers", caption: "The night came alive" },
    ],
    story: `When Sarah and Mike first walked the property, they knew within minutes. "It felt like coming home," Sarah recalls.

They chose the 5-day package, giving their families time to really connect. What happened exceeded every expectation.

"By day two, people who'd never met were sharing breakfast and planning hiking adventures," Mike shares. "My college roommates were teaching Sarah's nephews how to skip rocks."

The ceremony was intimate—just 65 of their closest people in the birch grove. "No rushing, no timeline pressure," Sarah remembers. "We actually got to talk to everyone."

But it's the unplanned moments they treasure most: the 2am guitar circle around the bonfire. Her father's impromptu speech the morning after.

"Everyone still talks about that weekend," Sarah says. "Not just the wedding. The whole weekend."`,
    highlights: [
      "4-day celebration with 65 guests",
      "Sunrise yoga on day two",
      "Bonfire guitar circle until 2am",
    ],
    guestCount: 65,
    packageUsed: "5-Day Package",
    favoriteMemory: "Watching both grandmothers share a bottle of wine by the fire, becoming fast friends.",
    photographerCredit: "Emily Rose Photography",
    // New case study fields
    testimonialQuote: "We had time. That's what I remember most—we actually had time.",
    whatMadeItSpecial: [
      "Five days gave families time to truly bond",
      "No rushing between formal events",
      "Unplanned moments became the highlights",
    ],
    unexpectedMoment: "Her father's impromptu sunrise speech the morning after the wedding—there wasn't a dry eye at the campfire.",
  },
  {
    id: "2",
    slug: "jenna-and-tyler-fall-2023",
    coupleNames: "Jenna & Tyler",
    weddingDate: "September 22, 2023",
    season: "Fall 2023",
    headline: "Where Autumn Met Forever",
    excerpt: "Fall colors, cozy sweaters, and a ceremony in the birch grove that left guests reaching for tissues.",
    heroImage: birchAltar,
    galleryImages: [
      { src: birchAltar, alt: "Birch grove altar ceremony", caption: "Nature's cathedral" },
      { src: veilKiss, alt: "Intimate veil kiss moment", caption: "Stolen moments" },
      { src: bridalPortrait, alt: "Jenna on the cabin porch", caption: "Morning calm" },
    ],
    story: `Jenna had always dreamed of a fall wedding—the colors, the crisp air, the cozy atmosphere. When she and Tyler discovered Rustic Retreat, she knew the birch grove was meant to be their altar.

"We didn't want a stage," Tyler explains. "We wanted to stand in nature, surrounded by trees that had seen a hundred seasons."

Their September weekend was blessed with perfect weather—warm days, cool nights, and leaves just beginning to turn. Guests arrived Thursday, setting up camp and helping string lights through the trees.

"Everyone contributed something," Jenna remembers. "Tyler's dad built the arch. My sister arranged all the flowers."

Their reception extended late into the night, guests wrapped in blankets around the fire. Many refused to leave the next day.

"We had to kick people out," Tyler laughs. "They wanted to stay for a fourth night."`,
    highlights: [
      "Ceremony in the birch grove at golden hour",
      "DIY arch built by father of the groom",
      "Guests who didn't want to leave",
    ],
    guestCount: 70,
    packageUsed: "3-Day Package",
    favoriteMemory: "My dad getting emotional while Tyler's mom held his hand during the vows.",
    photographerCredit: "Northern Light Studios",
    // New case study fields
    testimonialQuote: "Everyone still talks about our weekend. Not just the wedding. The whole weekend.",
    whatMadeItSpecial: [
      "Fall colors created a magical backdrop",
      "DIY touches made it deeply personal",
      "The birch grove ceremony was unforgettable",
    ],
    unexpectedMoment: "Both families ended up doing an impromptu sing-along around the campfire that went until 3am.",
  },
  {
    id: "3",
    slug: "amanda-and-chris-summer-2024",
    coupleNames: "Amanda & Chris",
    weddingDate: "July 8, 2024",
    season: "Summer 2024",
    headline: "Two Families Became One",
    excerpt: "Before this weekend, Amanda's family from BC had never met Chris's family from Ontario. By Sunday, they were planning Christmas together.",
    heroImage: coupleKissMeadow,
    galleryImages: [
      { src: coupleKissMeadow, alt: "Amanda and Chris in the wildflower meadow", caption: "Our meadow moment" },
      { src: forestPath, alt: "Walking the forest path together", caption: "Just the two of us" },
      { src: sunsetClearing, alt: "Sunset portraits", caption: "The day we'll never forget" },
    ],
    story: `For Amanda and Chris, the biggest challenge wasn't the flowers or the food—it was that their families lived 4,000 kilometers apart and had never met.

"We knew we had about 6 hours at a traditional wedding for them to connect," Amanda explains. "That wasn't going to cut it."

They booked the 5-day package specifically to give their families time. And what happened was better than they'd hoped.

"By day two, my mom and Chris's mom were cooking breakfast together," Amanda recalls. "My brother was teaching his little cousins to fish."

The wedding became part of a bigger tapestry. "The ceremony was beautiful," Chris says. "But honestly? The moment I'll never forget is seeing both our dads by the campfire, sharing stories like they'd known each other for years."

Their families now have a group text. They've visited each other three times since the wedding. They're planning Christmas together.`,
    highlights: [
      "First-ever meeting of families from opposite coasts",
      "Families now have an active group chat",
      "Planning their first joint Christmas",
    ],
    guestCount: 55,
    packageUsed: "5-Day Package",
    favoriteMemory: "Overhearing my dad tell Chris's dad, 'I've never been more sure about a son-in-law.'",
    photographerCredit: "Wild Heart Photography",
    // New case study fields
    testimonialQuote: "It was the first time both families really got to know each other.",
    whatMadeItSpecial: [
      "Five days bridged a 4,000km family gap",
      "Shared meals created lasting connections",
      "The wedding became a family reunion",
    ],
    unexpectedMoment: "Chris's mother and Amanda's mother now talk weekly—they've become close friends.",
  },
];

// Helper function to get a story by slug
export const getStoryBySlug = (slug: string): WeddingStory | undefined => {
  return weddingStories.find((story) => story.slug === slug);
};

// Helper function to get all story slugs (for routing)
export const getAllStorySlugs = (): string[] => {
  return weddingStories.map((story) => story.slug);
};
