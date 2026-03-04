export interface HomepageIntroCard {
  _key?: string;
  text: string;
}

export interface HomepageBuilderSection {
  _key?: string;
  _type: "homeTextBlock" | "homeImageBlock";
  heading?: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageUrl?: string;
  imageAlt?: string;
}

export interface HomepageCmsContent {
  _id?: string;
  _type?: string;
  heroKicker?: string;
  heroHeadlinePart1?: string;
  heroHeadlinePart2?: string;
  heroHeadlineHighlight?: string;
  heroSubheadline?: string;
  heroPrimaryCtaText?: string;
  heroPrimaryCtaHref?: string;
  heroSecondaryCtaText?: string;
  heroSecondaryCtaHref?: string;
  heroImageUrl?: string;
  heroImageAlt?: string;
  introCards?: HomepageIntroCard[];
  pageBuilder?: HomepageBuilderSection[];
}

export interface HomepageCmsResponse {
  result: HomepageCmsContent | null;
  preview: boolean;
  hasDraftAccess: boolean;
}
