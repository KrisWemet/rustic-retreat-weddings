import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <SEO
        title="Page Not Found"
        description="This page does not exist. Return to Rustic Retreat Weddings to find the venue, packages, gallery and contact details."
        path={location.pathname}
        noindex={true}
      />
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold font-serif">404</h1>
        <p className="mb-4 text-xl text-muted-foreground font-serif italic">Oops! Page not found</p>
        <Link to="/" className="text-primary underline hover:text-primary/80 transition-colors">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
