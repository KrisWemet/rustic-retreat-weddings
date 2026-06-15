import { ReactNode } from "react";
import Fireflies from "@/components/Fireflies";
import Flourish from "@/components/Flourish";

interface PageHeroProps {
  backgroundImage: string;
  backgroundImageAlt?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  overlayOpacity?: "none" | "light" | "medium" | "heavy";
  contentClassName?: string;
  /** Toggle the drifting fireflies atmosphere (default on). */
  fireflies?: boolean;
}

const PageHero = ({
  backgroundImage,
  backgroundImageAlt,
  title,
  subtitle,
  children,
  overlayOpacity = "medium",
  contentClassName = "",
  fireflies = true
}: PageHeroProps) => {
  const overlayClasses = {
    none: "",
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
        {overlayOpacity !== "none" && (
          <div className={`absolute inset-0 bg-gradient-to-b ${overlayClasses[overlayOpacity]}`} />
        )}
        {fireflies && <Fireflies count={28} className="z-[1]" />}
      </div>

      <div className={`relative z-10 container mx-auto px-4 text-center text-primary-foreground pt-20 ${contentClassName}`}>
        <h1 className="display-xl font-serif mb-5 animate-fade-in-up [text-shadow:_0_2px_18px_rgba(0,0,0,0.45)]">
          {title}
        </h1>
        <Flourish className="text-primary-foreground/70 mb-6 animate-fade-in-up" size="md" />
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
