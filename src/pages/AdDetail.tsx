import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import BannerAd from "@/components/BannerAd";
import { ArrowLeft, MapPin, Phone, Calendar, Star, Share2, Flag } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const AdDetail = () => {
  const { id } = useParams();
  
  // Mock data - in real app, this would be fetched based on ID
  const ad = {
    id: "1",
    title: "2BHK Apartment for Rent in Kochi - Prime Location",
    description: `Spacious and well-maintained 2BHK apartment available for rent in the heart of Kochi. This beautiful property offers modern amenities and excellent connectivity to all major areas of the city.

Features:
• 2 large bedrooms with attached bathrooms
• Spacious living room and dining area
• Modern kitchen with all fittings
• Balcony with city view
• Car parking space included
• 24/7 security and water supply
• Power backup available

Location Benefits:
• Walking distance to Metro station
• Close to schools, hospitals, and shopping centers
• Easy access to IT parks and business districts
• Well-connected bus routes

The apartment is suitable for families and working professionals. Immediate possession available. Genuine inquiries only.

Rent: ₹25,000/month
Deposit: ₹50,000
Maintenance: ₹2,000/month`,
    category: "Residential Rental",
    city: "Kochi",
    phone: "+91 98765 43210",
    isFeatured: true,
    postedDate: "2 hours ago",
    postedBy: "Rajesh Kumar",
    adId: "KK001234"
  };

  const relatedAds = [
    {
      id: "2",
      title: "3BHK House for Rent - Kochi",
      category: "Residential Rental",
      city: "Kochi",
      postedDate: "1 day ago"
    },
    {
      id: "3", 
      title: "1BHK Apartment - Prime Area",
      category: "Residential Rental", 
      city: "Kochi",
      postedDate: "3 days ago"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3 mb-6">
              <Link to="/">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Listings
                </Button>
              </Link>
            </div>

            <Card className={`shadow-[var(--shadow-card)] ${ad.isFeatured ? 'border-kerala-gold' : ''}`}>
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      {ad.isFeatured && (
                        <Badge className="bg-kerala-gold text-white">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                      <Badge variant="secondary">
                        {ad.category}
                      </Badge>
                      <span className="text-sm text-muted-foreground">ID: {ad.adId}</span>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {ad.title}
                    </h1>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Share2 className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Flag className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Description */}
                <div className="prose max-w-none mb-6">
                  <div className="whitespace-pre-line text-foreground">
                    {ad.description}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-foreground mb-3">Contact Information</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary" />
                      <span className="font-medium">{ad.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{ad.city}</span>
                    </div>
                  </div>
                  <Button size="lg" className="w-full mt-4 bg-primary hover:bg-primary/90">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </div>

                {/* Ad Details */}
                <div className="flex items-center justify-between text-sm text-muted-foreground border-t pt-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>Posted {ad.postedDate}</span>
                    </div>
                    <span>by {ad.postedBy}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Ads */}
            <div className="mt-8">
              <h2 className="text-xl font-bold text-foreground mb-4">Related Ads</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {relatedAds.map((relatedAd) => (
                  <Card key={relatedAd.id} className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2">{relatedAd.title}</h3>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <Badge variant="secondary" className="text-xs">
                          {relatedAd.category}
                        </Badge>
                        <span>{relatedAd.postedDate}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <BannerAd 
                variant="sidebar"
                title="Post Your Ad Free"
                description="Reach customers across Kerala"
                ctaText="Start Now"
              />
              <BannerAd 
                variant="sidebar"
                title="Premium Listings"
                description="Get more visibility for your ads"
                ctaText="Upgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdDetail;