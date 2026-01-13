import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
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
import birchGroveAltar from "@/assets/gallery/birch-grove-altar.avif";
import bridalBouquetRoses from "@/assets/gallery/bridal-bouquet-roses.avif";
import coupleKissMeadow from "@/assets/gallery/couple-kiss-meadow.avif";
import forestPathPhotos from "@/assets/gallery/forest-path-photos.avif";
import receptionTablescapeGold from "@/assets/gallery/reception-tablescape-gold.avif";
import gazeboTwinkleLights from "@/assets/gallery/gazebo-twinkle-lights.avif";
import sunsetClearingPortraits from "@/assets/gallery/sunset-clearing-portraits.avif";
import weddingArchPavilion from "@/assets/gallery/wedding-arch-pavilion.avif";
import wineBarrelDecor from "@/assets/gallery/wine-barrel-decor.avif";
import woodlandCeremonyAisle from "@/assets/gallery/woodland-ceremony-aisle.avif";
import ceremonyForestSetup from "@/assets/gallery/ceremony-forest-setup.avif";
import propertyLandscapeView from "@/assets/gallery/property-landscape-view.avif";

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
    alt: "Gold cake cutting knife set from venue decor collection", 
    description: "Details from our collection—everything you need is here",
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
    src: birchGroveAltar, 
    alt: "Natural birch grove ceremony altar at woodland wedding venue", 
    description: "The birch grove altar—nature creates the most beautiful cathedral",
    category: "Ceremony" 
  },
  { 
    src: bridalBouquetRoses, 
    alt: "Lush bridal bouquet with roses and greenery", 
    description: "Blooming beauty—fresh florals that complement the natural surroundings",
    category: "Bridal" 
  },
  { 
    src: coupleKissMeadow, 
    alt: "Newlyweds kissing in sun-drenched meadow at Rustic Retreat", 
    description: "The meadow moments—soft grass, warm sun, and endless love",
    category: "Romance" 
  },
  { 
    src: forestPathPhotos, 
    alt: "Couple walking forest path for portraits at Edmonton area venue", 
    description: "Countless photo opportunities—the forest paths offer endless backdrops",
    category: "Portraits" 
  },
  { 
    src: receptionTablescapeGold, 
    alt: "Luxury gold-accented reception tablescape with candles", 
    description: "Elegance meets nature—gold accents shimmer in candlelight",
    category: "Details" 
  },
  { 
    src: gazeboTwinkleLights, 
    alt: "Gazebo illuminated with twinkle lights for evening reception", 
    description: "When the sun sets, the real magic begins—twinkle lights transform the gazebo",
    category: "Reception" 
  },
  { 
    src: sunsetClearingPortraits, 
    alt: "Couple portraits in sunset clearing at private Alberta property", 
    description: "The clearing opens up for golden hour magic—a photographer's dream",
    category: "Portraits" 
  },
  { 
    src: weddingArchPavilion, 
    alt: "Floral wedding arch at forest pavilion ceremony space", 
    description: "Say I do under the pavilion arch, framed by flowers and forest",
    category: "Ceremony" 
  },
  { 
    src: wineBarrelDecor, 
    alt: "Rustic wine barrel decor at outdoor wedding reception", 
    description: "Rustic touches everywhere—wine barrels add character and charm",
    category: "Details" 
  },
  { 
    src: woodlandCeremonyAisle, 
    alt: "Woodland ceremony aisle lined with petals at forest venue", 
    description: "Walk this aisle surrounded by nature—no walls needed",
    category: "Ceremony" 
  },
  { 
    src: ceremonyForestSetup, 
    alt: "Forest ceremony setup with decorated arch and seating", 
    description: "Your ceremony, designed by you, set by nature",
    category: "Ceremony" 
  },
  { 
    src: propertyLandscapeView, 
    alt: "Panoramic view of 65-acre Rustic Retreat wedding property", 
    description: "65 acres of possibility—your entire weekend awaits",
    category: "Property" 
  },
];

const categories = ["All", "Ceremony", "Reception", "Romance", "Portraits", "Details", "Bridal"];

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
      />
      <div className="min-h-screen">
        <Navigation />
        
        <PageHero
          backgroundImage={coupleKissMeadow}
          title="Real Weddings at Rustic Retreat"
          subtitle="See yourself here. These are real couples who trusted us with their most important day."
        />

        {/* Category Filter */}
        <section className="py-8 bg-card border-b border-border sticky top-16 z-40">
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

        {/* Read Real Stories CTA */}
        <section className="py-16 bg-card border-t border-border">
          <div className="container mx-auto px-4 text-center">
            <ScrollReveal>
              <h3 className="text-2xl font-serif mb-4">Want to know the stories behind the photos?</h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Read about real couples who celebrated at Rustic Retreat—their favorite moments, their families' reactions, and why they chose this place.
              </p>
              <Link to="/real-weddings">
                <Button className="bg-secondary hover:bg-secondary-dark text-secondary-foreground rounded-full px-8">
                  Read Their Stories
                </Button>
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Story Belongs Here</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto text-primary-foreground/90">
                Ready to write your own chapter?
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-[hsl(15,50%,75%)] via-[hsl(15,45%,65%)] to-[hsl(15,55%,80%)] hover:from-[hsl(15,55%,80%)] hover:via-[hsl(15,50%,70%)] hover:to-[hsl(15,60%,85%)] text-primary-foreground rounded-full px-8 shadow-lg">
                  Walk the Land With Us
                </Button>
              </Link>
            </ScrollReveal>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Gallery;
