import { useEffect, useMemo, useState } from "react";

interface FirefliesProps {
  /** Number of fireflies to render. */
  count?: number;
  className?: string;
}

// Three depth layers: distant (small, dim, blurred) → near (large, bright, sharp).
const LAYERS = [
  { size: [1.5, 2.5], blur: 1.2, peak: [0.3, 0.5], drift: [13, 20] }, // far
  { size: [2.5, 4], blur: 0.4, peak: [0.55, 0.8], drift: [10, 16] },  // mid
  { size: [4, 6.5], blur: 0, peak: [0.8, 1], drift: [8, 13] },        // near
];

// Warm woodland glow palette — pale gold through amber.
const HUES = [
  { core: "46 95% 90%", glow: "44 90% 74%" }, // pale gold
  { core: "40 92% 84%", glow: "36 88% 68%" }, // honey
  { core: "32 90% 76%", glow: "28 85% 62%" }, // warm amber
];

const lerp = (i: number, [min, max]: number[], steps = 9) =>
  min + ((i * 7) % steps) / (steps - 1) * (max - min);

/**
 * A field of softly drifting, twinkling fireflies for an enchanted-forest
 * atmosphere. Sprites are spread across three depth layers with varied
 * hue, blur, size and pulse so the field reads as alive rather than uniform.
 * Purely decorative; hidden for users who prefer reduced motion.
 */
const Fireflies = ({ count = 14, className = "" }: FirefliesProps) => {
  // Thin the field on small / touch screens: dozens of blurred, glowing,
  // continuously-animating sprites are cheap on a desktop GPU but cause
  // visible jank on phones. Roughly halve the count below the md breakpoint.
  const [effectiveCount, setEffectiveCount] = useState(count);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const apply = () => setEffectiveCount(mq.matches ? Math.ceil(count * 0.5) : count);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, [count]);

  const sprites = useMemo(
    () =>
      Array.from({ length: effectiveCount }).map((_, i) => {
        // Weight toward far/mid layers so the near ones feel special.
        const layer = LAYERS[i % 3 === 2 ? 2 : i % 2];
        const hue = HUES[(i * 5) % HUES.length];
        const left = (i * 67) % 100;
        const top = (i * 41 + 13) % 100;
        const size = lerp(i, layer.size);
        const peak = lerp(i + 2, layer.peak).toFixed(2);
        const driftDuration = lerp(i, layer.drift);
        const twinkleDuration = 2.4 + ((i % 5) * 0.7); // 2.4–5.2s
        const delay = (i % 9) * 0.6;
        return { layer, hue, left, top, size, peak, driftDuration, twinkleDuration, delay, key: i };
      }),
    [effectiveCount]
  );

  return (
    <div className={`firefly-field pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {sprites.map((s) => (
        <span
          key={s.key}
          className="firefly"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            filter: s.layer.blur ? `blur(${s.layer.blur}px)` : undefined,
            // @ts-expect-error custom props consumed by CSS
            "--firefly-core": `hsl(${s.hue.core} / 0.95)`,
            "--firefly-glow": `hsl(${s.hue.glow})`,
            "--firefly-peak": s.peak,
            "--drift-duration": `${s.driftDuration}s`,
            "--twinkle-duration": `${s.twinkleDuration}s`,
            "--firefly-delay": `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Fireflies;
