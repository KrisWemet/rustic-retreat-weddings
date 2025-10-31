import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
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
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  const images = [
    {
      src: ceremonyVows,
      alt: "Real wedding ceremony at Rustic Retreat Weddings with couple exchanging vows under rustic gazebo decorated with white flowers",
      category: "Ceremony"
    },
    {
      src: ceremonySetup,
      alt: "Outdoor wedding ceremony space at Alberta venue featuring wooden benches, white flower aisle, and forest gazebo backdrop",
      category: "Ceremony"
    },
    {
      src: firstDanceSparklers,
      alt: "First dance with sparklers on forest deck at Rustic Retreat Weddings multi-day wedding celebration near Edmonton",
      category: "Reception"
    },
    {
      src: veilKiss,
      alt: "Intimate wedding moment at Rustic Retreat with bride and groom kissing under veil with romantic bokeh lights",
      category: "Romance"
    },
    {
      src: firstDanceCloseup,
      alt: "First dance closeup of bride and groom smiling during forest wedding reception at Alberta venue near Lac La Nonne",
      category: "Reception"
    },
    {
      src: cakeCutting,
      alt: "Couple cutting white wedding cake with bow decoration in forest setting near Edmonton Alberta",
      category: "Reception"
    },
    {
      src: receptionTable3,
      alt: "Elegant reception table setting with gold chargers, greenery centerpiece, and table number 3 at Alberta forest wedding venue",
      category: "Details"
    },
    {
      src: licenseSigning,
      alt: "Marriage license signing at rustic wooden table with I have found sign at Alberta outdoor wedding venue",
      category: "Ceremony"
    },
    {
      src: receptionTable4,
      alt: "Outdoor reception table with gold accents, crystal glassware, navy napkins, and table number 4 at Rustic Retreat Weddings",
      category: "Details"
    },
    {
      src: meadowKiss,
      alt: "Romantic couple embrace in open meadow at sunset during wedding celebration near Lac La Nonne Alberta",
      category: "Romance"
    },
    {
      src: cardBox,
      alt: "Rustic Mr and Mrs wedding card box on wine barrel with forest greenery at Alberta outdoor venue near Edmonton",
      category: "Details"
    },
    {
      src: bridalPortrait,
      alt: "Bride with cascading white rose bouquet on wooden cabin porch at Rustic Retreat Weddings venue",
      category: "Bridal"
    },
    {
      src: dressGazebo,
      alt: "Elegant wedding dress hanging in decorated forest gazebo with white flowers at Rustic Retreat Weddings ceremony space",
      category: "Details"
    },
    {
      src: weddingParty,
      alt: "Full wedding party and family group photo at forest gazebo ceremony space at Alberta multi-day wedding venue",
      category: "Group Photos"
    },
    {
      src: dressPavilion,
      alt: "Wedding dress displayed in forest pavilion reception area with rustic wooden beams at Alberta venue",
      category: "Details"
    },
    {
      src: cakeCuttingSet,
      alt: "Gold cake cutting utensils with white bows on wooden reception table at Rustic Retreat Weddings forest wedding",
      category: "Details"
    },
    {
      src: brideHorse,
      alt: "Country wedding photo with bride in lace dress and horse at Rustic Retreat Weddings outdoor venue",
      category: "Portraits"
    },
    {
      src: guestFavor,
      alt: "Wedding guest favor box with navy napkin, gold charger, and thank you tag on elegant reception table Alberta",
      category: "Details"
    },
    {
      src: weddingRings,
      alt: "Wedding rings macro detail photo on white flower petals at Alberta rustic wedding venue near Edmonton",
      category: "Details"
    },
    {
      src: weddingRings2,
      alt: "Close-up of wedding rings on delicate white flower at outdoor Alberta wedding venue near Lac La Nonne",
      category: "Details"
    },
    {
      src: birchGroveAltar,
      alt: "Natural birch grove wedding altar with forest backdrop at Rustic Retreat Weddings venue near Edmonton Alberta",
      category: "Ceremony"
    },
    {
      src: bridalBouquetRoses,
      alt: "Elegant bridal bouquet with white roses and greenery for outdoor Alberta forest wedding",
      category: "Bridal"
    },
    {
      src: coupleKissMeadow,
      alt: "Romantic couple kiss in woodland meadow clearing during golden hour at Rustic Retreat Weddings Alberta",
      category: "Romance"
    },
    {
      src: forestPathPhotos,
      alt: "Scenic forest path photo spot with natural lighting at Rustic Retreat Weddings venue near Lac La Nonne",
      category: "Portraits"
    },
    {
      src: receptionTablescapeGold,
      alt: "Luxury reception tablescape with gold chargers, crystal glassware, and elegant place settings at Alberta venue",
      category: "Details"
    },
    {
      src: gazeboTwinkleLights,
      alt: "Rustic gazebo decorated with twinkle lights for evening reception at Rustic Retreat Weddings forest venue",
      category: "Reception"
    },
    {
      src: sunsetClearingPortraits,
      alt: "Sunset clearing portrait spot with golden hour lighting at Rustic Retreat Weddings 65-acre property",
      category: "Portraits"
    },
    {
      src: weddingArchPavilion,
      alt: "Wooden wedding arch ceremony setup at log pavilion with forest backdrop near Edmonton Alberta",
      category: "Ceremony"
    },
    {
      src: wineBarrelDecor,
      alt: "Wine barrel decorated with greenery and florals for rustic wedding decor at Alberta outdoor venue",
      category: "Details"
    },
    {
      src: woodlandCeremonyAisle,
      alt: "Woodland ceremony aisle decorated with white florals and greenery at Rustic Retreat Weddings forest ceremony space",
      category: "Ceremony"
    },
    {
      src: ceremonyForestSetup,
      alt: "Forest ceremony setup with natural woodland backdrop at Rustic Retreat Weddings Alberta venue near Lac La Nonne",
      category: "Ceremony"
    },
    {
      src: propertyLandscapeView,
      alt: "Panoramic landscape view of Rustic Retreat Weddings 65-acre property with open meadows and forest near Edmonton",
      category: "Property"
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="section mt-20 pt-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            See Rustic Retreat Weddings
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our 65-acre property, ceremony spaces, accommodations, and the natural beauty that makes every celebration unforgettable.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-primary-foreground">
                    <p className="text-sm font-medium mb-1">{image.category}</p>
                    <p className="text-xs text-primary-foreground/80">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Highlights */}
      <section className="section section-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Experience Every Space</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card p-6 rounded-lg border-2 hover:border-secondary transition-colors">
              <h3 className="text-xl font-semibold mb-3">Ceremony Spaces</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Towering pines create a natural cathedral for your vows. Golden hour light filters through the trees, creating the perfect backdrop for your most important moment.
              </p>
              <Link to="/weddings" className="text-sm text-primary hover:underline">
                Learn more about our ceremony options →
              </Link>
            </div>

            <div className="bg-card p-6 rounded-lg border-2 hover:border-secondary transition-colors">
              <h3 className="text-xl font-semibold mb-3">The Cabin</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Your private newlywed sanctuary. Off-grid solar power, forest views, and complete privacy for those first precious moments as a married couple.
              </p>
              <Link to="/cabin" className="text-sm text-primary hover:underline">
                Explore the cabin →
              </Link>
            </div>

            <div className="bg-card p-6 rounded-lg border-2 hover:border-secondary transition-colors">
              <h3 className="text-xl font-semibold mb-3">Reception Area</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Dance under stars through our clear-top gazebo. Celebrate surrounded by nature with flexible arrangements for up to 80 guests.
              </p>
              <Link to="/weddings" className="text-sm text-primary hover:underline">
                View reception details →
              </Link>
            </div>

            <div className="bg-card p-6 rounded-lg border-2 hover:border-secondary transition-colors">
              <h3 className="text-xl font-semibold mb-3">The Property</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                65 private acres of Alberta wilderness. Groomed trails, open meadows, campfire areas, and endless photo opportunities throughout the property.
              </p>
              <Link to="/about" className="text-sm text-primary hover:underline">
                Discover our property →
              </Link>
            </div>

            <div className="bg-card p-6 rounded-lg border-2 hover:border-secondary transition-colors">
              <h3 className="text-xl font-semibold mb-3">Décor Collection</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Curated treasures from past celebrations. Vintage pieces, mason jars, handmade signs—all free to use and waiting to add magic to your day.
              </p>
              <Link to="/decor" className="text-sm text-primary hover:underline">
                See the décor house →
              </Link>
            </div>

            <div className="bg-card p-6 rounded-lg border-2 hover:border-secondary transition-colors">
              <h3 className="text-xl font-semibold mb-3">Celebration Spaces</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Campfire areas, outdoor games, trails for morning walks, and spaces where your guests can truly relax and connect over multiple days.
              </p>
              <Link to="/weddings" className="text-sm text-primary hover:underline">
                Explore wedding packages →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Tour Note */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-primary/5 p-12 rounded-lg border-l-4 border-primary text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Photos Can Only Show So Much
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              There's no substitute for experiencing Rustic Retreat in person. Walk the trails. Stand in the ceremony space. Feel the energy. See why couples consistently say, "We knew the moment we arrived."
            </p>
            <p className="mb-8 font-medium">
              We don't let couples book until they visit the property. Because we want you certain, not just convinced.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-lg px-8">
                Schedule Your Property Visit
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
