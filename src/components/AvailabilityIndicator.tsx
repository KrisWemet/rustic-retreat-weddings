import { AlertCircle } from "lucide-react";
import content from "@/data/site-content.json";

// Update weekendsLeft in src/data/site-content.json (packages.seasons) whenever a date is booked.
const { weekendsLeft, months } = content.packages.seasons["2027"];

const AvailabilityIndicator = () => {
  if (weekendsLeft === 0) return null;

  return (
    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
      <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
      <div>
        <p className="font-semibold text-amber-900 mb-1">
          Limited Availability for 2027 Season
        </p>
        <p className="text-sm text-amber-800">
          Only <strong>{weekendsLeft} weekend{weekendsLeft === 1 ? "" : "s"}</strong> remain for {months} 2027.
          Most couples book 8-12 months in advance.
        </p>
      </div>
    </div>
  );
};

export default AvailabilityIndicator;
