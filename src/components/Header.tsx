import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, User, Plus } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const keralaCities = [
  "All Cities", "Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", 
  "Kollam", "Palakkad", "Alappuzha", "Malappuram", "Kannur", "Kasaragod",
  "Pathanamthitta", "Idukki", "Ernakulam", "Wayanad"
];

const categories = [
  "All Categories", "Real Estate Sales", "Residential Rental", 
  "Commercial Rental", "Personal Vehicle Sales", "Commercial Vehicle Sales",
  "Construction Services", "Repair Services"
];

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-md bg-background/95">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-primary">Kerala Klassifieds</h1>
          </Link>
          
          <div className="hidden md:flex items-center gap-3">
            <Select>
              <SelectTrigger className="w-[160px]">
                <MapPin className="w-4 h-4" />
                <SelectValue placeholder="Select City" />
              </SelectTrigger>
              <SelectContent>
                {keralaCities.map((city) => (
                  <SelectItem key={city} value={city.toLowerCase().replace(/\s+/g, '-')}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category.toLowerCase().replace(/\s+/g, '-')}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2">
            <Link to="/login">
              <Button variant="outline" size="sm" className="hidden sm:flex">
                <User className="w-4 h-4 mr-2" />
                Login
              </Button>
            </Link>
            <Link to="/submit-ad">
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                <Plus className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Submit My Ad</span>
                <span className="sm:hidden">Post Ad</span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile filters */}
        <div className="md:hidden flex gap-2 mt-3">
          <Select>
            <SelectTrigger className="flex-1">
              <MapPin className="w-4 h-4" />
              <SelectValue placeholder="City" />
            </SelectTrigger>
            <SelectContent>
              {keralaCities.map((city) => (
                <SelectItem key={city} value={city.toLowerCase().replace(/\s+/g, '-')}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="flex-1">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category.toLowerCase().replace(/\s+/g, '-')}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </header>
  );
};

export default Header;