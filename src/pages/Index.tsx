import Header from "@/components/Header";
import AdCard from "@/components/AdCard";
import BannerAd from "@/components/BannerAd";
import keralaBanner from "@/assets/kerala-banner.jpg";

// Mock data for demonstration
const featuredAds = [
  {
    id: "1",
    title: "2BHK Apartment for Rent in Kochi",
    description: "Spacious 2BHK apartment with modern amenities, parking space, and excellent connectivity. Located in prime area with schools and hospitals nearby. Ideal for families.",
    category: "Residential Rental",
    city: "Kochi",
    phone: "+91 98765 43210",
    isFeatured: true,
    postedDate: "2 hours ago"
  },
  {
    id: "2", 
    title: "Plot for Sale in Thrissur - 8 Cents",
    description: "Prime residential plot in developing area. Clear title, ready for construction. Good road connectivity and all facilities available. Ideal for building your dream home.",
    category: "Real Estate Sales",
    city: "Thrissur",
    phone: "+91 98765 43211",
    isFeatured: true,
    postedDate: "1 day ago"
  }
];

const regularAds = [
  {
    id: "3",
    title: "Maruti Swift for Sale - 2018 Model",
    description: "Well maintained Swift in excellent condition. Single owner, all papers clear. Regular servicing done. Excellent fuel efficiency. Urgent sale.",
    category: "Personal Vehicle Sales",
    city: "Kozhikode",
    phone: "+91 98765 43212",
    postedDate: "3 hours ago"
  },
  {
    id: "4",
    title: "House Construction Services Available",
    description: "Experienced construction contractor available for residential projects. Quality work guaranteed. We handle everything from foundation to finishing. Get free quotation.",
    category: "Construction Services",
    city: "Thiruvananthapuram",
    phone: "+91 98765 43213",
    postedDate: "5 hours ago"
  },
  {
    id: "5",
    title: "Commercial Space for Rent - Ground Floor",
    description: "Prime commercial space available for rent. Suitable for shops, offices, or showrooms. High footfall area with excellent visibility. Immediate possession available.",
    category: "Commercial Rental",
    city: "Palakkad",
    phone: "+91 98765 43214",
    postedDate: "1 day ago"
  },
  {
    id: "6",
    title: "Home Repair and Maintenance Services",
    description: "Professional home repair services including plumbing, electrical, painting, and carpentry. Experienced team with quality materials. Reasonable rates and quick service.",
    category: "Repair Services",
    city: "Alappuzha",
    phone: "+91 98765 43215",
    postedDate: "2 days ago"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Banner */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img 
          src={keralaBanner} 
          alt="Kerala Klassifieds" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-kerala-green/80 to-kerala-blue/60 flex items-center justify-center">
          <div className="text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Find What You Need</h2>
            <p className="text-lg opacity-90">Kerala's Trusted Local Marketplace</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {/* Top Banner Ad */}
        <div className="mb-6">
          <BannerAd 
            variant="top"
            title="Promote Your Business Here"
            description="Reach thousands of Kerala customers with our banner ads"
            ctaText="Advertise Now"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Ads Section */}
            {featuredAds.length > 0 && (
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-kerala-gold">⭐</span>
                  Featured Ads
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {featuredAds.map((ad) => (
                    <AdCard key={ad.id} {...ad} />
                  ))}
                </div>
              </section>
            )}

            {/* Latest Ads Section */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Latest Ads
              </h2>
              <div className="space-y-4">
                {regularAds.map((ad, index) => (
                  <div key={ad.id}>
                    <AdCard {...ad} />
                    {/* Inline banner ad after every 2 ads */}
                    {index === 1 && (
                      <div className="my-4">
                        <BannerAd 
                          title="Professional Services Directory"
                          description="Connect with verified service providers across Kerala"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
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

export default Index;
