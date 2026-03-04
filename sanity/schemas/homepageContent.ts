import { defineArrayMember, defineField, defineType } from "sanity";

const defaultIntroCards = [
  "A weekend that unfolds naturally, not a wedding that ends before it really begins.",
  "Open air and rustling poplars, not a ballroom ceiling and a strict schedule.",
  "A celebration that reflects your story, not a template you're expected to fit into.",
  "Music and dancing under the open sky, not the same indoor routine you've seen a hundred times.",
  "The freedom to be themselves, whether that's creating a DIY celebration or an extravagant event that reflects their unique story.",
  "A venue that feels like a getaway, not a place where you are watching the clock all day.",
];

const defaultHomepageDocument = {
  heroKicker: "You're not booking for hours or a single day...",
  heroHeadlinePart1: "Your People.",
  heroHeadlinePart2: "Your Vision.",
  heroHeadlineHighlight: "Your Legendary Weekend.",
  heroSubheadline: "You're claiming a weekend. 65 private acres and a wedding your guests will never forget.",
  heroPrimaryCtaText: "Schedule a Visit",
  heroPrimaryCtaHref: "/contact",
  heroSecondaryCtaText: "View Packages",
  heroSecondaryCtaHref: "/packages",
  heroImageAlt: "Couple in the woodland at Rustic Retreat",
  introCards: defaultIntroCards.map((text) => ({
    _type: "object",
    text,
  })),
  pageBuilder: [
    {
      _type: "homeTextBlock",
      heading: "Build Your Weekend, Your Way",
      body: "Use these draggable blocks in Sanity to reorder text and images on your homepage without touching code.",
      ctaLabel: "Explore Packages",
      ctaHref: "/packages",
    },
    {
      _type: "homeTextBlock",
      heading: "Visual Editing Is Enabled",
      body: "Open the Presentation tab, click on content in the preview, then edit directly in the side panel.",
    },
  ],
};

export const homeTextBlock = defineType({
  name: "homeTextBlock",
  title: "Text Block",
  type: "object",
  fields: [
    defineField({ name: "heading", title: "Heading", type: "string" }),
    defineField({ name: "body", title: "Body", type: "text", rows: 5 }),
    defineField({ name: "ctaLabel", title: "CTA Label", type: "string" }),
    defineField({ name: "ctaHref", title: "CTA Link", type: "string" }),
  ],
  preview: {
    select: { title: "heading", subtitle: "body" },
  },
});

export const homeImageBlock = defineType({
  name: "homeImageBlock",
  title: "Image Block",
  type: "object",
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "altText", title: "Alt Text", type: "string" }),
    defineField({ name: "heading", title: "Heading", type: "string" }),
    defineField({ name: "body", title: "Body", type: "text", rows: 4 }),
  ],
  preview: {
    select: { title: "heading", media: "image" },
    prepare({ title, media }) {
      return {
        title: title || "Image Block",
        media,
      };
    },
  },
});

export const homepageContent = defineType({
  name: "homepageContent",
  title: "Homepage Content",
  type: "document",
  initialValue: defaultHomepageDocument,
  fields: [
    defineField({ name: "heroKicker", title: "Hero Kicker", type: "string" }),
    defineField({ name: "heroHeadlinePart1", title: "Hero Headline Part 1", type: "string" }),
    defineField({ name: "heroHeadlinePart2", title: "Hero Headline Part 2", type: "string" }),
    defineField({ name: "heroHeadlineHighlight", title: "Hero Headline Highlight", type: "string" }),
    defineField({ name: "heroSubheadline", title: "Hero Subheadline", type: "text", rows: 3 }),
    defineField({ name: "heroPrimaryCtaText", title: "Primary CTA Text", type: "string" }),
    defineField({ name: "heroPrimaryCtaHref", title: "Primary CTA Link", type: "string" }),
    defineField({ name: "heroSecondaryCtaText", title: "Secondary CTA Text", type: "string" }),
    defineField({ name: "heroSecondaryCtaHref", title: "Secondary CTA Link", type: "string" }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "heroImageAlt", title: "Hero Image Alt", type: "string" }),
    defineField({
      name: "introCards",
      title: "Intro Cards",
      type: "array",
      description: "Drag to reorder card copy shown in the homepage intro grid.",
      of: [
        defineArrayMember({
          type: "object",
          fields: [defineField({ name: "text", title: "Text", type: "text", rows: 3 })],
          preview: {
            select: { title: "text" },
          },
        }),
      ],
    }),
    defineField({
      name: "pageBuilder",
      title: "Homepage Builder",
      type: "array",
      description: "Drag and drop text/image blocks to control homepage order.",
      of: [
        defineArrayMember({ type: "homeTextBlock" }),
        defineArrayMember({ type: "homeImageBlock" }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Homepage Content",
      };
    },
  },
});
