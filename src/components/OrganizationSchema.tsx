import { Helmet } from "react-helmet-async";

/**
 * Canonical LocalBusiness / EventVenue entity for the site.
 *
 * Rendered once site-wide from App.tsx so every route carries the local
 * business signals (address, geo, service area) rather than the homepage only.
 *
 * NOTE: index.html carries a matching static copy for crawlers that don't run
 * JS. Both blocks share the same "@id", so search engines merge them into one
 * entity — keep the two in sync when facts change.
 */

const BASE_URL = "https://www.rusticretreatalberta.ca";

const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "EventVenue"],
    "@id": `${BASE_URL}/#venue`,
    name: "Rustic Retreat Weddings",
    description:
      "Multi-day outdoor wedding venue on 65 private acres near Lac La Nonne, Alberta — about an hour northwest of Edmonton. Cabin accommodation, overnight camping included for up to 60 guests, and no mandatory vendors.",
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    image: `${BASE_URL}/og-image.jpg`,
    telephone: "+17802106252",
    email: "rusticretreatalberta@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lac La Nonne",
      addressRegion: "AB",
      addressCountry: "CA",
      description: "99 km northwest of Edmonton",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 53.95,
      longitude: -114.3,
    },
    areaServed: [
      { "@type": "City", name: "Edmonton" },
      { "@type": "City", name: "St. Albert" },
      { "@type": "City", name: "Spruce Grove" },
      { "@type": "Town", name: "Stony Plain" },
      { "@type": "Town", name: "Barrhead" },
      { "@type": "Town", name: "Onoway" },
      { "@type": "Town", name: "Westlock" },
      { "@type": "Place", name: "Alberta Beach" },
      { "@type": "Place", name: "Lac La Nonne" },
      { "@type": "State", name: "Alberta" },
    ],
    knowsAbout: [
      "Outdoor wedding venues near Edmonton",
      "Camping weddings",
      "Multi-day wedding weekends",
      "DIY weddings with no mandatory vendors",
      "Elopements and micro weddings in Alberta",
    ],
    maximumAttendeeCapacity: 80,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
      description: "Wedding season June through September, property tours by appointment",
    },
    currenciesAccepted: "CAD",
    priceRange: "$$$",
    sameAs: ["https://www.facebook.com/share/1J4ztXhiSk/?mibextid=wwXIfr"],
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Exclusive single-event property access", value: true },
      { "@type": "LocationFeatureSpecification", name: "Cabin accommodation for the couple (sleeps 4)", value: true },
      {
        "@type": "LocationFeatureSpecification",
        name: "Overnight camping included for up to 60 guests (tents and RVs)",
        value: true,
      },
      { "@type": "LocationFeatureSpecification", name: "Outdoor ceremony spaces", value: true },
      { "@type": "LocationFeatureSpecification", name: "Reception gazebo seating 80", value: true },
      { "@type": "LocationFeatureSpecification", name: "Curated décor collection included", value: true },
      { "@type": "LocationFeatureSpecification", name: "No mandatory vendors or corkage fees", value: true },
      { "@type": "LocationFeatureSpecification", name: "Pet friendly", value: true },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Wedding Packages",
      itemListElement: [
        {
          "@type": "Offer",
          price: "5000",
          priceCurrency: "CAD",
          itemOffered: {
            "@type": "Service",
            name: "2-Day Weekday Escape",
            description: "Weekday exclusive property access for intimate elopements (2027 season)",
          },
        },
        {
          "@type": "Offer",
          price: "6500",
          priceCurrency: "CAD",
          itemOffered: {
            "@type": "Service",
            name: "3-Day Weekend Package",
            description: "Friday-Sunday exclusive property access (2027 season)",
          },
        },
        {
          "@type": "Offer",
          price: "7500",
          priceCurrency: "CAD",
          itemOffered: {
            "@type": "Service",
            name: "5-Day Extended Package",
            description: "Wednesday-Sunday or Thursday-Monday exclusive property access (2027 season)",
          },
        },
      ],
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default OrganizationSchema;
