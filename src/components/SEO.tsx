import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}

const BASE_URL = "https://www.rusticretreat.xyz";
const DEFAULT_IMAGE = `${BASE_URL}/og-image.avif`;

const SEO = ({
  title = "Rustic Retreat Weddings | Multi-Day Outdoor Wedding Venue Near Edmonton",
  description = "65 private acres for your dream wedding weekend. Rustic Retreat offers 3 and 5-day celebration packages with cabin accommodation, campfire evenings, and complete creative freedom near Lac La Nonne, Alberta.",
  path = "",
  image = DEFAULT_IMAGE,
}: SEOProps) => {
  const canonicalUrl = `${BASE_URL}${path}`;
  const fullTitle = path === "" ? title : `${title} | Rustic Retreat Weddings`;
  const resolvedImage = image.startsWith("http")
    ? image
    : `${BASE_URL}${image.startsWith("/") ? "" : "/"}${image}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={resolvedImage} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Rustic Retreat Weddings" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={resolvedImage} />
    </Helmet>
  );
};

export default SEO;
