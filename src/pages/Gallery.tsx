import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";

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

const images = [
  { src: ceremonyVows, alt: "Real wedding ceremony at Rustic Retreat", category: "Ceremony" },
  { src: ceremonySetup, alt: "Outdoor wedding ceremony space", category: "Ceremony" },
  { src: firstDanceSparklers, alt: "First dance with sparklers", category: "Reception" },
  { src: veilKiss, alt: "Intimate wedding moment under veil", category: "Romance" },
  { src: firstDanceCloseup, alt: "First dance closeup", category: "Reception" },
  { src: cakeCutting, alt: "Cake cutting in forest setting", category: "Reception" },
  { src: receptionTable3, alt: "Elegant reception table setting", category: "Details" },
  { src: licenseSigning, alt: "Marriage license signing", category: "Ceremony" },
  { src: receptionTable4, alt: "Outdoor reception table", category: "Details" },
  { src: meadowKiss, alt: "Romantic couple embrace in meadow", category: "Romance" },
  { src: cardBox, alt: "Rustic wedding card box", category: "Details" },
  { src: bridalPortrait, alt: "Bride with bouquet on porch", category: "Bridal" },
  { src: dressGazebo, alt: "Wedding dress in gazebo", category: "Details" },
  { src: weddingParty, alt: "Full wedding party photo", category: "Group" },
  { src: dressPavilion, alt: "Wedding dress at pavilion", category: "Details" },
  { src: cakeCuttingSet, alt: "Gold cake cutting utensils", category: "Details" },
  { src: brideHorse, alt: "Bride with horse", category: "Portraits" },
  { src: guestFavor, alt: "Wedding guest favor box", category: "Details" },
  { src: weddingRings, alt: "Wedding rings on flowers", category: "Details" },
  { src: weddingRings2, alt: "Wedding rings detail", category: "Details" },
  { src: birchGroveAltar, alt: "Birch grove wedding altar", category: "Ceremony" },
  { src: bridalBouquetRoses, alt: "Bridal bouquet with roses", category: "Bridal" },
  { src: coupleKissMeadow, alt: "Couple kiss in meadow", category: "Romance" },
  { src: forestPathPhotos, alt: "Forest path photo spot", category: "Portraits" },
  { src: receptionTablescapeGold, alt: "Luxury reception tablescape", category: "Details" },
  { src: gazeboTwinkleLights, alt: "Gazebo with twinkle lights", category: "Reception" },
  { src: sunsetClearingPortraits, alt: "Sunset clearing portraits", category: "Portraits" },
  { src: weddingArchPavilion, alt: "Wedding arch at pavilion", category: "Ceremony" },
  { src: wineBarrelDecor, alt: "Wine barrel decor", category: "Details" },
  { src: woodlandCeremonyAisle, alt: "Woodland ceremony aisle", category: "Ceremony" },
  { src: ceremonyForestSetup, alt: "Forest ceremony setup", category: "Ceremony" },
  { src: propertyLandscapeView, alt: "Property landscape view", category: "Property" },
];

const categories = ["All", "Ceremony", "Reception", "Romance", "Portraits", "Details", "Bridal"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = activeCategory === "All" 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <PageTransition>
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
                  onClick={() => setSelectedImage(image.src)}
                >
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-primary-foreground">
                      <p className="text-sm font-medium">{image.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-5xl p-0 bg-transparent border-none">
            {selectedImage && (
              <img 
                src={selectedImage} 
                alt="Gallery image"
                className="w-full h-auto max-h-[90vh] object-contain"
              />
            )}
          </DialogContent>
        </Dialog>

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
