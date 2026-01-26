import { ReactNode } from "react";

interface PageHeroProps {
  backgroundImage: string;
  backgroundImageAlt?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  overlayOpacity?: "light" | "medium" | "heavy";
}

const PageHero = ({ 
  backgroundImage, 
  backgroundImageAlt,
  title, 
  subtitle, 
  children,
  overlayOpacity = "medium" 
}: PageHeroProps) => {
  const overlayClasses = {
    light: "from-primary/50 via-primary/40 to-primary/50",
    medium: "from-primary/70 via-primary/60 to-primary/70",
    heavy: "from-primary/85 via-primary/75 to-primary/85"
  };

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt={backgroundImageAlt || title}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="h-full w-full object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-b ${overlayClasses[overlayOpacity]}`} />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground pt-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl max-w-3xl mx-auto animate-fade-in-up text-primary-foreground/90">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
};

export default PageHero;
