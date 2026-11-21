import content from "@/data/site-content.json";
import { Helmet } from "react-helmet-async";

const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "EventVenue"],
    // Same @id as the static schema in index.html and the venue node in llm.html, so all three describe one business.
    "@id": "https://www.rusticretreatalberta.ca/#venue",
    name: "Rustic Retreat Weddings",
    legalName: "Rustic Retreat Weddings & Events Ltd.",
    alternateName: ["Rustic Retreat", "Rustic Retreat Alberta", "Rustic Retreat Weddings & Events"],
    description: "Multi-day outdoor forest wedding venue near Edmonton on 65 private acres of forest and meadow, with cabin accommodation, camping for 60 guests, and a complete décor collection",
    url: "https://www.rusticretreatalberta.ca",
    logo: "https://www.rusticretreatalberta.ca/logo-512.png",
    image: "https://www.rusticretreatalberta.ca/og-image.jpg",
    telephone: "+17802106252",
    email: "rusticretreatalberta@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3121 Township Road 572A",
      addressLocality: "Lac La Nonne",
      addressRegion: "AB",
      addressCountry: "CA",
      description: "Lac Ste. Anne County, 99 km northwest of Edmonton"
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
    maximumAttendeeCapacity: 80,
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
