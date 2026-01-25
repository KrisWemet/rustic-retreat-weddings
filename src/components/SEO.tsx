import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  keywords?: string[];
  publishedTime?: string;
  modifiedTime?: string;
}

const BASE_URL = "https://www.rusticretreat.xyz";
const DEFAULT_IMAGE = `${BASE_URL}/og-image.avif`;

const SEO = ({
  title = "Rustic Retreat Weddings | Multi-Day Outdoor Wedding Venue Near Edmonton",
  description = "65 private acres for your dream wedding weekend. Rustic Retreat offers 3 and 5-day celebration packages with cabin accommodation, campfire evenings, and complete creative freedom near Lac La Nonne, Alberta.",
  path = "",
  image = DEFAULT_IMAGE,
  keywords,
  publishedTime,
  modifiedTime,
}: SEOProps) => {
  const canonicalUrl = `${BASE_URL}${path}`;
  const fullTitle = path === "" ? title : `${title} | Rustic Retreat Weddings`;
  const resolvedImage = image.startsWith("http")
    ? image
    : `${BASE_URL}${image.startsWith("/") ? "" : "/"}${image}`;

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: fullTitle,
    description: description,
    url: canonicalUrl,
    image: resolvedImage,
    inLanguage: "en-CA",
    ...(publishedTime && { datePublished: publishedTime }),
    ...(modifiedTime && { dateModified: modifiedTime }),
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Keywords */}
      {keywords && keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(", ")} />
      )}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={resolvedImage} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Rustic Retreat Weddings" />

      {/* Article timestamps */}
      {publishedTime && (
        <>
          <meta property="article:published_time" content={publishedTime} />
          <meta property="og:updated_time" content={modifiedTime || publishedTime} />
        </>
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={resolvedImage} />

      {/* WebPage Schema */}
      <script type="application/ld+json">
        {JSON.stringify(webPageSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
