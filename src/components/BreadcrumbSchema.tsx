import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface BreadcrumbItem {
  name: string;
  path: string;
}

const BreadcrumbSchema = () => {
  const location = useLocation();

  const pathMap: Record<string, string> = {
    '/': 'Home',
    '/venue': 'The Venue',
    '/packages': 'Packages & Pricing',
    '/gallery': 'Gallery',
    '/about': 'About',
    '/faqs': 'FAQs',
    '/contact': 'Contact'
  };

  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const breadcrumbs: BreadcrumbItem[] = [
      { name: 'Home', path: '/' }
    ];

    if (location.pathname !== '/') {
      breadcrumbs.push({
        name: pathMap[location.pathname] || 'Page',
        path: location.pathname
      });
    }

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `https://rusticretreatweddings.ca${crumb.path}`
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default BreadcrumbSchema;
