import { TreePine, Home, Heart, Sparkles } from "lucide-react";

const ExclusivityBanner = () => {
  return (
    <section className="bg-secondary/10 py-8 border-y border-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <TreePine className="w-8 h-8 text-secondary mx-auto mb-2" />
            <div className="text-3xl font-bold text-primary">65</div>
            <div className="text-sm text-muted-foreground">Private Acres</div>
          </div>
          <div className="text-center">
            <Home className="w-8 h-8 text-secondary mx-auto mb-2" />
            <div className="text-3xl font-bold text-primary">1</div>
            <div className="text-sm text-muted-foreground">Exclusive Couple</div>
          </div>
          <div className="text-center">
            <Heart className="w-8 h-8 text-secondary mx-auto mb-2" />
            <div className="text-3xl font-bold text-primary">Family</div>
            <div className="text-sm text-muted-foreground">Owned & Operated</div>
          </div>
          <div className="text-center">
            <Sparkles className="w-8 h-8 text-secondary mx-auto mb-2" />
            <div className="text-3xl font-bold text-primary">$0</div>
            <div className="text-sm text-muted-foreground">Décor Rental Fees</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExclusivityBanner;
