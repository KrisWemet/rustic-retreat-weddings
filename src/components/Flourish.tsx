import { useEffect, useRef, useState } from "react";

interface FlourishProps {
  /** Tailwind text color class controls the stroke/fill via currentColor. */
  className?: string;
  /** Visual size of the flourish. */
  size?: "sm" | "md" | "lg";
}

const SIZES: Record<NonNullable<FlourishProps["size"]>, string> = {
  sm: "w-28",
  md: "w-40",
  lg: "w-56",
};

/**
 * A small botanical flourish used as an ornamental divider beneath
 * section labels and headings. Two trailing vines sweep out from a
 * central leaf-and-sparkle motif, and the whole ornament draws itself
 * in — vines tracing outward, leaves blooming — as it scrolls into view.
 */
const Flourish = ({ className = "text-secondary/70", size = "md" }: FlourishProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDrawn(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <span
      ref={ref}
      className={`flourish mx-auto block ${SIZES[size]} ${className} ${drawn ? "is-drawn" : ""}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 220 28" fill="none" className="w-full h-auto">
        {/* left vine */}
        <path
          className="flourish-vine flourish-vine-left"
          pathLength={1}
          d="M4 14 C 40 14, 60 6, 86 14"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
        <path className="flourish-leaf" style={{ transitionDelay: "0.55s" }} d="M40 12 c -6 -7, -14 -7, -18 -1 c 7 3, 14 3, 18 1Z" fill="currentColor" opacity="0.5" />
        <path className="flourish-leaf" style={{ transitionDelay: "0.65s" }} d="M62 16 c 6 6, 14 6, 18 0 c -7 -3, -14 -3, -18 0Z" fill="currentColor" opacity="0.5" />
        {/* right vine (mirror) */}
        <path
          className="flourish-vine flourish-vine-right"
          pathLength={1}
          d="M216 14 C 180 14, 160 6, 134 14"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
        <path className="flourish-leaf" style={{ transitionDelay: "0.55s" }} d="M180 12 c 6 -7, 14 -7, 18 -1 c -7 3, -14 3, -18 1Z" fill="currentColor" opacity="0.5" />
        <path className="flourish-leaf" style={{ transitionDelay: "0.65s" }} d="M158 16 c -6 6, -14 6, -18 0 c 7 -3, 14 -3, 18 0Z" fill="currentColor" opacity="0.5" />
        {/* center diamond/sparkle */}
        <path
          className="flourish-bloom"
          d="M110 4 L114 14 L110 24 L106 14 Z"
          fill="currentColor"
          opacity="0.85"
        />
        <circle className="flourish-bloom" cx="110" cy="14" r="1.6" fill="currentColor" />
        {/* tiny twinkles */}
        <path className="flourish-leaf" style={{ transitionDelay: "0.8s" }} d="M96 14 l2.5 0 M121.5 14 l2.5 0" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      </svg>
    </span>
  );
};

export default Flourish;
