import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Star } from "lucide-react";

import { Link } from "react-router-dom";

interface AdCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  city: string;
  phone: string;
  isFeatured?: boolean;
  postedDate: string;
}

const AdCard = ({ id, title, description, category, city, phone, isFeatured, postedDate }: AdCardProps) => {
  return (
    <Link to={`/ad/${id}`}>
      <Card className={`hover:shadow-lg transition-all duration-300 cursor-pointer ${isFeatured ? 'border-kerala-gold bg-gradient-to-br from-background to-kerala-gold/5 shadow-[var(--shadow-featured)]' : 'shadow-[var(--shadow-card)]'}`}>
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              {isFeatured && (
                <Badge className="bg-kerala-gold text-white">
                  <Star className="w-3 h-3 mr-1" />
                  Featured
                </Badge>
              )}
              <Badge variant="secondary" className="text-xs">
                {category}
              </Badge>
            </div>
            <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
              {title}
            </h3>
          </div>
        </div>
        
        <p className="text-muted-foreground text-sm mb-3 line-clamp-3">
          {description}
        </p>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              <span>{city}</span>
            </div>
            <div className="flex items-center gap-1">
              <Phone className="w-3 h-3" />
              <span>{phone}</span>
            </div>
          </div>
          <span className="text-xs">{postedDate}</span>
        </div>
      </CardContent>
    </Card>
    </Link>
  );
};

export default AdCard;