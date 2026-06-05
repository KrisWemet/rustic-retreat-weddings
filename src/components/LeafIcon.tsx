import leafLogoPng from "@/assets/logo/ccfe919f-7ff1-4a50-bfeb-13b67b34b5e4.png";

export default function LeafIcon({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={className}
      style={{
        display: "block",
        backgroundColor: "currentColor",
        WebkitMaskImage: `url(${leafLogoPng})`,
        WebkitMaskMode: "luminance",
        WebkitMaskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskImage: `url(${leafLogoPng})`,
        maskMode: "luminance",
        maskSize: "contain",
        maskRepeat: "no-repeat",
        maskPosition: "center",
      }}
    />
  );
}