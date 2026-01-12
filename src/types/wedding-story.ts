export interface WeddingStory {
  id: string;
  slug: string;
  coupleNames: string;
  weddingDate: string;
  season: string;
  headline: string;
  excerpt: string;
  heroImage: string;
  galleryImages: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  story: string;
  highlights: string[];
  guestCount: number;
  packageUsed: string;
  favoriteMemory?: string;
  photographerCredit?: string;
}
