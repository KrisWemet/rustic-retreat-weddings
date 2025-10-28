import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-ceremony.jpg";
import cabinExterior from "@/assets/cabin-exterior.jpg";
import decorCollection from "@/assets/decor-collection.jpg";
import receptionEvening from "@/assets/reception-evening.jpg";
import propertyAerial from "@/assets/property-aerial.jpg";
import campfireNight from "@/assets/campfire-night.jpg";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  const images = [
    {
      src: heroImage,
      alt: "Outdoor wedding ceremony with wooden benches in Alberta forest at golden hour",
      category: "Ceremony"
    },
    {
      src: receptionEvening,
      alt: "Evening wedding reception under clear-top gazebo with string lights and guests dining",
      category: "Reception"
    },
    {
      src: cabinExterior,
      alt: "Cozy off-grid cabin with solar panels at dusk surrounded by pine trees",
      category: "The Cabin"
    },
    {
      src: propertyAerial,
      alt: "Aerial view of 65-acre wedding venue property showing forest meadows and trails",
      category: "Property"
    },
    {
      src: campfireNight,
      alt: "Wedding guests gathered around campfire at night with string lights in trees",
      category: "Celebration"
    },
    {
      src: decorCollection,
      alt: "Curated collection of rustic wedding decorations including mason jars and vintage items",
      category: "Décor House"
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="section mt-20 pt-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            See Rustic Retreat Alberta
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
