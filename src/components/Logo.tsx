import { cn } from "@/lib/utils";
import BrandMark from "@/components/BrandMark";

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
      <BrandMark className={cn("shrink-0 h-8 md:h-10", iconClassName)} />
      <span className={cn(textClassName)}>{text}</span>
    </span>
  );
};

export default Logo;
