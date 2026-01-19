import * as React from "react";
import { cn } from "@/lib/utils";
import { Button, type ButtonProps } from "./button";

interface CTAButtonProps extends Omit<ButtonProps, "variant"> {
  variant?: "primary" | "outline" | "secondary";
}

/**
 * Reusable CTA Button component with consistent rose-gold gradient styling
 *
 * Variants:
 * - primary: Rose-gold gradient (default)
 * - outline: Transparent with rose-gold border
 * - secondary: Solid secondary color
 */
const CTAButton = React.forwardRef<HTMLButtonElement, CTAButtonProps>(
  ({ className, variant = "primary", size = "lg", children, ...props }, ref) => {
    const variantClasses = {
      primary: "bg-gradient-to-r from-rosegold-light via-rosegold to-rosegold-dark hover:from-rosegold hover:via-rosegold-dark hover:to-rosegold text-white rounded-full shadow-elegant transition-all duration-300 hover:shadow-xl hover:scale-105",
      outline: "bg-white/90 border-2 border-rosegold text-primary hover:bg-white hover:border-rosegold-dark rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105 font-medium",
      secondary: "bg-secondary hover:bg-secondary-dark text-secondary-foreground rounded-full transition-all duration-300 hover:shadow-md",
    };

    return (
      <Button
        ref={ref}
        size={size}
        className={cn(variantClasses[variant], className)}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

CTAButton.displayName = "CTAButton";

export { CTAButton, type CTAButtonProps };
