import content from "@/data/site-content.json";
import { Helmet } from "react-helmet-async";

const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "EventVenue"],
    name: "Rustic Retreat Weddings",
    description: "Multi-day outdoor wedding venue near Edmonton with 65 private acres, cabin accommodation, and complete décor collection",
    url: "https://www.rusticretreatalberta.ca",
    logo: "https://www.rusticretreatalberta.ca/logo-512.png",
    image: "https://www.rusticretreatalberta.ca/og-image.jpg",
    telephone: "+17802106252",
    email: "rusticretreatalberta@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lac La Nonne",
      addressRegion: "AB",
      addressCountry: "CA",
      description: "99 km northwest of Edmonton"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "53.9249453",
      longitude: "-114.3413119"
    },
    hasMap: "https://maps.app.goo.gl/QLX79xtop3uLpnTq9",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
      description: "Wedding season June through September, property tours by appointment"
    },
    priceRange: "$$$",
    sameAs: [
      "https://www.facebook.com/share/1J4ztXhiSk/?mibextid=wwXIfr",
      "https://maps.app.goo.gl/QLX79xtop3uLpnTq9"
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Wedding Packages",
      itemListElement: content.packages.packages.flatMap((pkg) =>
        [["2027", pkg.price], ["2028", pkg.price2028]].map(([year, price]) => ({
          "@type": "Offer",
          price: price.replace(/,/g, ""),
          priceCurrency: "CAD",
          itemOffered: {
            "@type": "Service",
            name: `${pkg.name} (${year} season)`,
            description: `${pkg.description} ${year} season; GST extra.`
          }
        }))
      )
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
