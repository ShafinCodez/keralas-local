import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BannerAdProps {
  title: string;
  description: string;
  ctaText?: string;
  variant?: "top" | "inline" | "sidebar";
}

const BannerAd = ({ title, description, ctaText = "Learn More", variant = "inline" }: BannerAdProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "top":
        return "bg-gradient-to-r from-kerala-green to-kerala-blue text-primary-foreground";
      case "sidebar":
        return "bg-gradient-to-b from-kerala-gold/10 to-kerala-green/10 border-kerala-gold/30";
      default:
        return "bg-gradient-to-r from-accent/10 to-primary/10 border-accent/30";
    }
  };

  return (
    <Card className={`${getVariantStyles()} transition-all duration-300 hover:scale-[1.02]`}>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <Badge variant="secondary" className="mb-2 text-xs">
              Sponsored
            </Badge>
            <h4 className="font-semibold mb-1">{title}</h4>
            <p className="text-sm opacity-90">{description}</p>
          </div>
          <button className="ml-4 px-3 py-1 bg-background/20 hover:bg-background/30 rounded-md text-sm font-medium transition-colors">
            {ctaText}
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BannerAd;