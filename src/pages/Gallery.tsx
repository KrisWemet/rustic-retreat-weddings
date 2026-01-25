import { useState } from "react";
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

// Gallery imports
import bridalPortrait from "@/assets/gallery/bridal-portrait-porch.jpg";
import cakeCutting from "@/assets/gallery/cake-cutting-forest.jpg";
import ceremonyVows from "@/assets/gallery/ceremony-vows-gazebo.jpg";
import ceremonySetup from "@/assets/gallery/ceremony-setup-wide.jpg";
import licenseSigning from "@/assets/gallery/marriage-license-signing.jpg";
import meadowKiss from "@/assets/gallery/meadow-sunset-kiss.jpg";
import veilKiss from "@/assets/gallery/veil-kiss-romantic.jpg";
import weddingParty from "@/assets/gallery/wedding-party-group.jpg";
import brideHorse from "@/assets/gallery/bride-with-horse.jpg";
import weddingRings from "@/assets/gallery/wedding-rings-flower.jpg";
import firstDanceCloseup from "@/assets/gallery/first-dance-closeup.jpg";
import firstDanceSparklers from "@/assets/gallery/first-dance-sparklers.jpg";
import cakeCuttingSet from "@/assets/gallery/gold-cake-cutting-set.jpg";
import guestFavor from "@/assets/gallery/guest-favor-box.jpg";
import cardBox from "@/assets/gallery/card-box-wine-barrel.jpg";
import receptionTable3 from "@/assets/gallery/reception-table-3.jpg";
import receptionTable4 from "@/assets/gallery/reception-table-4.jpg";
import dressGazebo from "@/assets/gallery/dress-forest-gazebo.jpg";
import dressPavilion from "@/assets/gallery/dress-forest-pavilion.jpg";
import weddingRings2 from "@/assets/gallery/wedding-rings-flower-2.jpg";
import ceremonyWideShot from "@/assets/gallery/ceremony-wide-shot.jpg";
import loveMarqueeArch from "@/assets/gallery/love-marquee-arch.jpg";
import veilKissMistyForest from "@/assets/gallery/veil-kiss-misty-forest.jpg";
import coupleWalkingTrail from "@/assets/gallery/couple-walking-trail.jpg";
import headTable from "@/assets/gallery/head-table.jpg";
import firstDanceColor from "@/assets/gallery/first-dance-color.jpg";
import cakeCutting from "@/assets/gallery/cake-cutting.jpg";
import weddingPartyFormal from "@/assets/gallery/wedding-party-formal.jpg";
import ringsBouquet from "@/assets/gallery/rings-bouquet.jpg";
import weddingPartyCheer from "@/assets/gallery/wedding-party-cheer.jpg";
import pavilionReception from "@/assets/gallery/pavilion-reception.jpg";
import weddingCakeGold from "@/assets/gallery/Images/wedding-cake-gold-antler.jpg";

interface GalleryImage {
  src: string;
  alt: string;
  description: string;
  category: string;
}

const images: GalleryImage[] = [
  { 
    src: ceremonyVows, 
    alt: "Couple exchanging vows under rustic gazebo at Rustic Retreat Alberta", 
    description: "The moment that changes everything—exchanging vows surrounded by towering pines",
    category: "Ceremony" 
  },
  { 
    src: ceremonySetup, 
    alt: "Outdoor ceremony space with white chairs at private Alberta venue", 
    description: "Where your guests will witness your love story unfold",
    category: "Ceremony" 
  },
  { 
    src: firstDanceSparklers, 
    alt: "First dance with sparklers at outdoor Alberta wedding reception", 
    description: "Magic happens here—sparklers light up an unforgettable first dance under the stars",
    category: "Reception" 
  },
  { 
    src: veilKiss, 
    alt: "Intimate veil kiss moment at forest wedding venue Edmonton area", 
    description: "A stolen moment—the intimacy of a veil kiss in dappled forest light",
    category: "Romance" 
  },
  { 
    src: firstDanceCloseup, 
    alt: "Close-up of couple during emotional first dance", 
    description: "Lost in the moment—when the world disappears and only you two remain",
    category: "Reception" 
  },
  { 
    src: cakeCutting, 
    alt: "Couple cutting wedding cake in forest setting at outdoor reception", 
    description: "Sweet celebration—cutting the cake surrounded by nature's beauty",
    category: "Reception" 
  },
  { 
    src: receptionTable3, 
    alt: "Elegant outdoor reception table with floral centerpiece", 
    description: "Every detail matters—from linens to florals, the tables tell your story",
    category: "Details" 
  },
  { 
    src: licenseSigning, 
    alt: "Couple signing marriage license at ceremony", 
    description: "Making it official—the moment your names join forever",
    category: "Ceremony" 
  },
  { 
    src: receptionTable4, 
    alt: "Rustic outdoor dining setup at forest wedding reception", 
    description: "Gather, feast, celebrate—long tables bring everyone together",
    category: "Details" 
  },
  { 
    src: meadowKiss, 
    alt: "Romantic sunset kiss in wildflower meadow near Lac La Nonne Alberta", 
    description: "Golden hour in the meadow—when the light is just right and love is in the air",
    category: "Romance" 
  },
  { 
    src: cardBox, 
    alt: "Rustic wine barrel card box at wedding reception", 
    description: "Collect well-wishes in style with our wine barrel card box",
    category: "Details" 
  },
  { 
    src: bridalPortrait, 
    alt: "Bride with bouquet on rustic cabin porch Rustic Retreat Weddings", 
    description: "Morning of magic—a quiet moment on the cabin porch before the day begins",
    category: "Bridal" 
  },
  { 
    src: dressGazebo, 
    alt: "Wedding dress displayed at forest gazebo", 
    description: "Your dress deserves this backdrop—photographed in natural beauty",
    category: "Details" 
  },
  { 
    src: weddingParty, 
    alt: "Full wedding party group photo at outdoor venue", 
    description: "Your favorite people, all in one place—memories that last generations",
    category: "Group" 
  },
  { 
    src: dressPavilion, 
    alt: "Bridal gown at forest pavilion venue", 
    description: "The pavilion frames your gown in woodland elegance",
    category: "Details" 
  },
  {
    src: cakeCuttingSet,
    alt: "Gold cake cutting knife set from venue Décor Collection",
    description: "The little touches that tell your story",
    category: "Details"
  },
  { 
    src: brideHorse, 
    alt: "Bride posing with horse at rustic Alberta wedding venue", 
    description: "Your wedding, your way—one bride brought her beloved horse for portraits",
    category: "Portraits" 
  },
  { 
    src: guestFavor, 
    alt: "Elegant wedding favor box for guests", 
    description: "Send guests home with love—small touches make big memories",
    category: "Details" 
  },
  { 
    src: weddingRings, 
    alt: "Wedding rings resting on flower petals", 
    description: "The rings that seal your promise, nestled in nature's beauty",
    category: "Details" 
  },
  { 
    src: weddingRings2, 
    alt: "Detail shot of wedding bands with floral arrangement", 
    description: "Forever begins here—a symbol of your commitment",
    category: "Details" 
  },
  {
    src: ceremonyWideShot,
    alt: "Wide outdoor ceremony with wedding party in forest clearing at Rustic Retreat",
    description: "Your ceremony in the heart of the forest—surrounded by nature and loved ones",
    category: "Ceremony"
  },
  {
    src: ringsBouquet,
    alt: "Wedding rings nestled in white bridal bouquet closeup",
    description: "Forever begins here—a symbol of your commitment and love",
    category: "Details"
  },
  {
    src: veilKissMistyForest,
    alt: "Romantic veil kiss in misty forest at Rustic Retreat Weddings",
    description: "Dreamy moments under the veil in the enchanted forest",
    category: "Romance"
  },
  {
    src: coupleWalkingTrail,
    alt: "Newlyweds walking hand in hand down forest trail",
    description: "Just married—strolling the forest trails, just the two of you",
    category: "Portraits"
  },
  {
    src: headTable,
    alt: "Rustic head table with candles and white florals at reception",
    description: "Elegance meets nature—candles and florals create magic",
    category: "Reception"
  },
  {
    src: firstDanceColor,
    alt: "Outdoor first dance under string lights at forest venue",
    description: "Your first dance under the open sky and twinkling lights",
    category: "Reception"
  },
  {
    src: cakeCutting,
    alt: "Cake cutting and first bite moment at rustic pavilion",
    description: "Sweet moments—cutting the cake and sharing the first bite",
    category: "Reception"
  },
  {
    src: loveMarqueeArch,
    alt: "LOVE marquee letters with ceremony arch in forest clearing",
    description: "Iconic LOVE sign lights up your ceremony backdrop",
    category: "Ceremony"
  },
  {
    src: weddingCakeGold,
    alt: "Two-tier semi-naked wedding cake with florals and gold antler topper",
    description: "Rustic elegance—your cake is a work of art",
    category: "Details"
  },
  {
    src: weddingPartyFormal,
    alt: "Wedding party formal portrait with lavender bridesmaids in forest",
    description: "Your favorite people, all dressed up in the woods",
    category: "Wedding Party"
  },
  {
    src: weddingPartyCheer,
    alt: "Wedding party celebrating and cheering with couple kissing",
    description: "Pure joy—your people celebrating your love",
    category: "Wedding Party"
  },
  {
    src: pavilionReception,
    alt: "Rustic pavilion reception entrance with guests cheering",
    description: "Welcome to the party—your reception under the rustic pavilion",
    category: "Reception"
  },
];

const categories = ["All", "Ceremony", "Reception", "Romance", "Portraits", "Details", "Bridal", "Property"];

// Count images per category
const getCategoryCount = (category: string) => {
  if (category === "All") return images.length;
  return images.filter(img => img.category === category).length;
};

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = activeCategory === "All" 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <PageTransition>
      <SEO
        title="Wedding Photo Gallery"
        description="Browse real wedding photos from Rustic Retreat. See ceremony setups, reception details, romantic portraits, and more from couples who celebrated on our 65-acre Alberta property."
        path="/gallery"
        image={veilKissMistyForest}
      />
      <div className="min-h-screen">
        <Navigation />

        <PageHero
          backgroundImage={veilKissMistyForest}
          title="Wedding Photo Gallery"
          subtitle="Every photo is a real couple. A real moment. A real celebration."
        />

        {/* Category Filter */}
        <section className="py-8 bg-card border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                  className="rounded-full"
                >
                  {category}
                  <span className="ml-1.5 text-xs opacity-70">
                    ({getCategoryCount(category)})
                  </span>
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid with Soft Reveal */}
        <section className="section">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image, index) => (
                <div 
                  key={index}
                  className="gallery-item group relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                  style={{ animationDelay: `${Math.min(index * 75, 600)}ms` }}
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
                    <div className="p-6 text-primary-foreground">
                      <p className="text-xs font-medium uppercase tracking-wider mb-2 text-secondary">
                        {image.category}
                      </p>
                      <p className="text-sm leading-relaxed">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox with description */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-5xl p-0 bg-transparent border-none">
            {selectedImage && (
              <div className="relative">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt}
                  className="w-full h-auto max-h-[85vh] object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-6 text-primary-foreground">
                  <p className="text-xs font-medium uppercase tracking-wider mb-2 text-secondary">
                    {selectedImage.category}
                  </p>
                  <p className="text-base leading-relaxed">
                    {selectedImage.description}
                  </p>
                </div>
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
