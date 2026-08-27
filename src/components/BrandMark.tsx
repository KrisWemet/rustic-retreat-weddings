import brandMark from "@/assets/logo/rr-monogram.svg";

/**
 * The mark is painted with currentColor through a CSS mask, so it inherits
 * whatever text colour its container sets. Callers size it with a height
 * class only — the aspect ratio here supplies the width.
 */
export default function BrandMark({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={className}
      style={{
        display: "block",
        aspectRatio: "480 / 364",
        backgroundColor: "currentColor",
        WebkitMaskImage: `url(${brandMark})`,
        WebkitMaskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskImage: `url(${brandMark})`,
        maskSize: "contain",
        maskRepeat: "no-repeat",
        maskPosition: "center",
      }}
    />
  );
}
