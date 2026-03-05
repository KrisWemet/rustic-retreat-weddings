import { cn } from "@/lib/utils";
import leafLogoRaw from "@/assets/logo/leaf-logo.svg?raw";

type LogoProps = {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  text?: string;
};

const Logo = ({
  className,
  iconClassName,
  textClassName,
  text = "Rustic Retreat",
}: LogoProps) => {
  return (
    <span className={cn("inline-flex items-center gap-2 leading-none", className)}>
      <span
        aria-hidden="true"
        className={cn("shrink-0 block [&>svg]:h-full [&>svg]:w-full", iconClassName)}
        dangerouslySetInnerHTML={{ __html: leafLogoRaw }}
      />
      <span className={cn(textClassName)}>{text}</span>
    </span>
  );
};

export default Logo;
