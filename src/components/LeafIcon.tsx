import leafLogoPng from "@/assets/logo/ccfe919f-7ff1-4a50-bfeb-13b67b34b5e4.png";

export default function LeafIcon({ className = "" }: { className?: string }) {
  return (
    <img
      src={leafLogoPng}
      alt=""
      aria-hidden="true"
      className={`object-contain ${className}`}
    />
  );
}