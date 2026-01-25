import { AlertCircle } from "lucide-react";
import { useEffect, useState } from "react";

const AvailabilityIndicator = () => {
  const [availableWeekends, setAvailableWeekends] = useState<number>(12);

  // In real implementation, fetch from Supabase or calendar API
  useEffect(() => {
    // Mock: Calculate remaining weekends in wedding season
    // June-September = 4 months × 4 weekends = 16 weekends
    // Subtract booked weekends (manually update this number or connect to booking system)
    setAvailableWeekends(12);
  }, []);

  return (
    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
      <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
      <div>
        <p className="font-semibold text-amber-900 mb-1">
          Limited Availability for 2026 Season
        </p>
        <p className="text-sm text-amber-800">
          Only <strong>{availableWeekends} weekends</strong> remain for June-September 2026.
          Most couples book 8-12 months in advance.
        </p>
      </div>
    </div>
  );
};

export default AvailabilityIndicator;
