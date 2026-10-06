import { cn } from "@/lib/utils";
import { SEASONS, isSoldOut, seasonNote, type Season } from "@/data/seasons";

interface SeasonToggleProps {
  value: Season;
  onChange: (season: Season) => void;
  className?: string;
}

const SeasonToggle = ({ value, onChange, className }: SeasonToggleProps) => (
  <div className={cn("flex flex-col items-center gap-3 text-center", className)}>
    <div role="radiogroup" aria-label="Wedding season" className="inline-flex rounded-full border border-secondary/40 bg-card p-1 shadow-soft">
      {SEASONS.map((season) => (
        <button
          key={season}
          type="button"
          role="radio"
          aria-checked={value === season}
          onClick={() => onChange(season)}
          className={cn(
            "rounded-full px-5 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/60",
            value === season ? "bg-secondary text-secondary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
          )}
        >
          {season} Season{isSoldOut(season) ? " (booked)" : ""}
        </button>
      ))}
    </div>
    <p className="text-sm text-secondary font-medium" aria-live="polite">
      {seasonNote(value)}
    </p>
  </div>
);

export default SeasonToggle;
