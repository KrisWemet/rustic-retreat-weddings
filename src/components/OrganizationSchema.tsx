import { Helmet } from "react-helmet-async";

const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "EventVenue"],
    name: "Rustic Retreat Weddings",
    description: "Multi-day outdoor wedding venue near Edmonton with 65 private acres, cabin accommodation, and complete décor collection",
    url: "https://rusticretreatweddings.ca",
    logo: "https://rusticretreatweddings.ca/logo.png",
    image: "https://rusticretreatweddings.ca/hero-couple.jpg",
    telephone: "+17802106252",
    email: "rusticretreatalberta@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lac La Nonne",
      addressRegion: "AB",
      addressCountry: "CA",
      description: "99 km northwest of Edmonton"
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
      description: "Wedding season June through September, property tours by appointment"
    },
    priceRange: "$$$",
    sameAs: [
      "https://www.facebook.com/share/1J4ztXhiSk/?mibextid=wwXIfr"
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Wedding Packages",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "3-Day Weekend Package",
            description: "Friday-Sunday exclusive property access"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "5-Day Extended Package",
            description: "Thursday-Monday exclusive property access"
          }
        }
      ]
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default OrganizationSchema;
