import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CTAButton } from "@/components/ui/cta-button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { seoGalleryMeta } from "@/data/seo-gallery";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  description: string;
  category: string;
}

const galleryImageMap = import.meta.glob("../assets/gallery/**/*.{webp,jpg,jpeg,png,avif}", {
  eager: true,
  import: "default"
}) as Record<string, string>;

const seoMetaByFile = new Map(
  seoGalleryMeta.map((image) => [image.file.toLowerCase(), image])
);

const normalizeCategory = (category: string) => {
  if (category === "Group") return "Wedding Party";
  return category;
};

const getFileName = (filePath: string) => filePath.split("/").pop() || filePath;
const stripExtension = (fileName: string) => fileName.replace(/\.[^/.]+$/, "");
const toTitle = (value: string) =>
  value
    .split(/[-_]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const inferCategory = (filePath: string, fileBase: string) => {
  const value = `${filePath.toLowerCase()} ${fileBase.toLowerCase()}`;
  if (/ceremony|aisle|vows|officiant|arch/.test(value)) return "Ceremony";
  if (/reception|dance|table|cake|dinner|toast|dj|head-table/.test(value)) return "Reception";
  if (/wedding-party|groomsmen|bridesmaid|family|group/.test(value)) return "Wedding Party";
  if (/portrait|couple|kiss|romantic|sunset|veil|walking/.test(value)) return "Romance";
  if (/bride|bridal|dress/.test(value)) return "Bridal";
  if (/ring|detail|favor|decor|bouquet|card-box|sign|cupcake/.test(value)) return "Details";
  if (/cabin|gazebo|venue|property|woods|forest|meadow|trail|playhouse|trampoline|yard|firepit/.test(value)) return "Property";
  return "Moments";
};

const dedupeKey = (fileName: string) =>
  stripExtension(fileName)
    .toLowerCase()
    .replace(/^rustic-retreat-weddings-lac-la-nonne-alberta-/, "")
    .replace(/-\d+$/, "")
    .replace(/[_\s]+/g, "-");

const stableHash = (value: string) => {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) >>> 0;
  }
  return hash;
};

const peopleKeywords = /\b(couple|bride|groom|wedding party|wedding-party|bridesmaid|bridesmaids|groomsmen|family|guest|guests|portrait|portraits|kiss|kissing|dance|dancing|newlywed|newlyweds|chris|shannon|man|woman|women|men|child|children|kids|parents|father|mother|party lined up|group|crowd)\b/i;
const nonPeopleKeywords = /\b(ring|rings|cake|cupcake|table|decor|d[eé]cor|bouquet|card box|card-box|favor|favour|sign|venue setup|empty|landscape|cabin|gazebo-empty|details)\b/i;

const hasPeople = (image: GalleryImage, sourceHint: string) => {
  const combined = `${image.alt} ${image.description} ${sourceHint}`;
  if (nonPeopleKeywords.test(combined)) {
    return false;
  }
  return peopleKeywords.test(combined);
};

const dedupedImages = new Map<string, GalleryImage & { hasSeoMeta: boolean }>();
for (const [filePath, src] of Object.entries(galleryImageMap)) {
  if (filePath.includes("/enchanted/") || filePath.includes("/Cabin/")) {
    continue;
  }

  const fileName = getFileName(filePath);
  const baseName = stripExtension(fileName);
  const key = dedupeKey(fileName);
  const seoMeta = seoMetaByFile.get(fileName.toLowerCase());
  const candidate = {
    src,
    alt: seoMeta?.alt || `Rustic Retreat gallery photo: ${toTitle(baseName)}`,
    description: seoMeta?.description || `Gallery image: ${toTitle(baseName)}`,
    category: normalizeCategory(seoMeta?.category || inferCategory(filePath, baseName)),
    hasSeoMeta: Boolean(seoMeta)
  };

  const existing = dedupedImages.get(key);
  if (!existing || (candidate.hasSeoMeta && !existing.hasSeoMeta)) {
    dedupedImages.set(key, candidate);
  }
}

const images: GalleryImage[] = Array.from(dedupedImages.entries())
  .filter(([, image]) => hasPeople(image, image.src))
  .sort(([a], [b]) => stableHash(a) - stableHash(b))
  .map(([, image]) => ({
    src: image.src,
    alt: image.alt,
    description: image.description,
    category: image.category
  }));

const galleryHero = images.find((image) => image.category === "Romance")?.src || images[0]?.src || "";

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const filteredImages = images;

  const selectedImage = selectedImageIndex !== null ? filteredImages[selectedImageIndex] : null;
  const totalImages = filteredImages.length;

  const handlePrevImage = useCallback(() => {
    if (selectedImageIndex === null || totalImages === 0) return;
    setSelectedImageIndex((prev) => {
      if (prev === null) return prev;
      return (prev - 1 + totalImages) % totalImages;
    });
  }, [selectedImageIndex, totalImages]);

  const handleNextImage = useCallback(() => {
    if (selectedImageIndex === null || totalImages === 0) return;
    setSelectedImageIndex((prev) => {
      if (prev === null) return prev;
      return (prev + 1) % totalImages;
    });
  }, [selectedImageIndex, totalImages]);

  useEffect(() => {
    if (selectedImageIndex === null) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        handlePrevImage();
      }
      if (event.key === "ArrowRight") {
        handleNextImage();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNextImage, handlePrevImage, selectedImageIndex]);

  return (
    <PageTransition>
      <SEO
        title="Wedding Photo Gallery"
        description="Browse real wedding photos from Rustic Retreat. See ceremony setups, reception details, romantic portraits, and more from couples who celebrated on our 65-acre Alberta property."
        path="/gallery"
        image={galleryHero}
        keywords={["wedding photos edmonton venue", "rustic wedding photography alberta", "outdoor wedding gallery", "wedding venue photo inspiration", "forest wedding photos", "alberta wedding venue pictures"]}
      />
      <BreadcrumbSchema />
      <div className="min-h-screen">
        <Navigation />

        <PageHero
          backgroundImage={galleryHero}
          backgroundImageAlt="Romantic veil kiss in a misty forest at Rustic Retreat"
          title="Wedding Photo Gallery"
          subtitle="Every photo is a real couple. A real moment. A real celebration."
        />

        {/* Gallery Grid with Soft Reveal */}
        <section className="section">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image, index) => (
                <div 
                  key={index}
                  className="gallery-item group relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer img-card"
                  style={{ animationDelay: `${Math.min(index * 75, 600)}ms` }}
                  onClick={() => setSelectedImageIndex(index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox with description */}
        <Dialog open={selectedImageIndex !== null} onOpenChange={() => setSelectedImageIndex(null)}>
          <DialogContent className="max-w-5xl p-0 bg-transparent border-none">
            {selectedImage && (
              <div className="relative">
                <button
                  onClick={() => setSelectedImageIndex(null)}
                  className="absolute right-3 top-3 z-20 inline-flex items-center gap-1 rounded-full bg-primary/70 px-3 py-1.5 text-xs font-medium text-primary-foreground hover:bg-primary/85 transition-colors"
                  aria-label="Close fullscreen image"
                >
                  <X className="w-4 h-4" />
                  <span>Close</span>
                </button>
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt}
                  decoding="async"
                  className="w-full h-auto max-h-[85vh] object-contain img-card"
                />
                {totalImages > 1 && (
                  <>
                    <button 
                      onClick={handlePrevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary/60 hover:bg-primary/80 text-primary-foreground p-2 rounded-full transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button 
                      onClick={handleNextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/60 hover:bg-primary/80 text-primary-foreground p-2 rounded-full transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* CTA Section */}
        <section className="section bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Story Belongs Here</h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto text-primary-foreground/90">
                Ready to write your own chapter?
              </p>
              <Link to="/contact">
                <CTAButton className="px-8">
                  Discover Your Venue
                </CTAButton>
              </Link>
              <p className="text-sm text-primary-foreground/70 mt-4">
                Most couples hear back within 24 hours
              </p>
            </ScrollReveal>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Gallery;
