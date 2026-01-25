import { Heart, DollarSign, Sparkles, Users } from "lucide-react";

const TrustBadges = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
      <div className="text-center">
        <Heart className="w-10 h-10 text-secondary mx-auto mb-2" />
        <p className="text-xs font-medium">Family-Owned</p>
      </div>
      <div className="text-center">
        <DollarSign className="w-10 h-10 text-secondary mx-auto mb-2" />
        <p className="text-xs font-medium">No Hidden Fees</p>
      </div>
      <div className="text-center">
        <Sparkles className="w-10 h-10 text-secondary mx-auto mb-2" />
        <p className="text-xs font-medium">Exclusive Access</p>
      </div>
      <div className="text-center">
        <Users className="w-10 h-10 text-secondary mx-auto mb-2" />
        <p className="text-xs font-medium">One Couple Only</p>
      </div>
    </div>
  );
};

export default TrustBadges;
