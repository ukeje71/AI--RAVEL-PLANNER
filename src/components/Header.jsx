// src/components/Header.tsx
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Search, Heart, User, House } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [destinations, setDestinations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate API fetch for destinations
  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        // Replace with actual API call (e.g., Google Places API)
        const mockData = [
          { id: "1", name: "Bali, Indonesia" },
          { id: "2", name: "Tokyo, Japan" },
          { id: "3", name: "Paris, France" },
        ];
        setDestinations(mockData);
      } catch (error) {
        console.error("Error fetching destinations:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Main Header Content */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <House stroke="#00a2e8" width="32" height="32" />
              <span className="text-xl font-bold text-[#003B71]">Voyago</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-[#00A2E8] transition">
                <span>Destinations</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 py-2 w-48 z-50 border border-gray-100">
                {isLoading ? (
                  <div className="px-4 py-2 text-gray-500">Loading...</div>
                ) : (
                  destinations.map((destination) => (
                    <a
                      key={destination.id}
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#00A2E8]"
                    >
                      {destination.name}
                    </a>
                  ))
                )}
              </div>
            </div>

            <a
              href="#"
              className="text-gray-700 hover:text-[#00A2E8] transition"
            >
              Deals
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-[#00A2E8] transition"
            >
              Activities
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-[#00A2E8] transition"
            >
              Help
            </a>
          </nav>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Where to next?"
                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#00A2E8] focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#00A2E8]">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-[#00A2E8] transition">
              <Heart className="w-5 h-5" />
            </button>
            <button className="text-gray-700 hover:text-[#00A2E8] transition">
              <User className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden my-3">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search destinations..."
              className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#00A2E8] focus:border-transparent"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#00A2E8]">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-3 space-y-3">
            <div className="relative">
              <button className="flex items-center justify-between w-full py-2 text-gray-700">
                <span>Destinations</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="pl-4 mt-2 space-y-2">
                {isLoading ? (
                  <div className="text-gray-500">Loading...</div>
                ) : (
                  destinations.map((destination) => (
                    <a
                      key={destination.id}
                      href="#"
                      className="block py-1 text-gray-700 hover:text-[#00A2E8]"
                    >
                      {destination.name}
                    </a>
                  ))
                )}
              </div>
            </div>
            <a
              href="#"
              className="block py-2 text-gray-700 hover:text-[#00A2E8]"
            >
              Deals
            </a>
            <a
              href="#"
              className="block py-2 text-gray-700 hover:text-[#00A2E8]"
            >
              Activities
            </a>
            <a
              href="#"
              className="block py-2 text-gray-700 hover:text-[#00A2E8]"
            >
              Help
            </a>
            <div className="flex space-x-4 pt-2">
              <button className="text-gray-700 hover:text-[#00A2E8]">
                <Heart className="w-5 h-5" />
              </button>
              <button className="text-gray-700 hover:text-[#00A2E8]">
                <User className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
