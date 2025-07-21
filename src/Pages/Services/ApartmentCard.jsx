import React, { useEffect } from "react";
import {
  KeyRound,
  MapPin,
  ArrowLeft,
  Bed,
  Heart,
  Star,
  BedDoubleIcon,
} from "lucide-react";
import { useNavigate } from "react-router";
import useDetailsStore from "../../components/Store/details";

const ApartmentCard = () => {
  const navigate = useNavigate();
  const { selectedProduct, clearSelectedProduct } = useDetailsStore();

  useEffect(() => {
    if (!selectedProduct) {
      navigate(-1);
    }
  }, [selectedProduct, navigate]);

  if (!selectedProduct) return null;

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col overflow-hidden md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
      {/* Image Section - Responsive height */}
      <div className="relative flex-shrink-0 h-[40vh] sm:h-[50vh] md:h-[60vh]">
        <img
          src={selectedProduct.image}
          alt={selectedProduct.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

        {/* Back Button - Responsive positioning */}
        <button
          onClick={() => {
            clearSelectedProduct();
            navigate(-1);
          }}
          className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-all"
        >
          <ArrowLeft size={20} className="text-gray-800 sm:w-6 sm:h-6" />
        </button>

        {/* Save Button - Responsive positioning */}
        <button className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-all">
          <Heart size={20} className="text-gray-800 sm:w-6 sm:h-6" />
        </button>

        {/* Floating Rating Badge - Responsive positioning */}
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/90 rounded-full px-3 py-1 flex items-center shadow-sm">
          <Star size={14} className="text-yellow-500 fill-yellow-500 mr-1 sm:w-4 sm:h-4" />
          <span className="text-xs font-medium sm:text-sm">
            {selectedProduct.rating || "2.8"}
          </span>
        </div>
      </div>

      {/* Content Section - Responsive layout */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Details Card - Responsive margins and padding */}
        <div className="bg-white rounded-t-3xl -mt-10 sm:-mt-16 flex-1 flex flex-col absolute mx-4 sm:mx-8 md:mx-12">
          <div className="p-4 sm:p-6 pb-4 flex-1 overflow-y-auto">
            {/* Title Section - Responsive text and layout */}
            <div className="mb-4 text-center w-full mx-auto flex flex-col justify-center items-center font-semibold max-w-xs sm:max-w-sm md:max-w-md">
              <h2 className="text-lg sm:text-xl md:text-2xl text-gray-900">
                {selectedProduct.title}
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                {selectedProduct.location}
              </p>
            </div>

            {/* Features Grid for larger screens */}
            <div className="hidden md:grid grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-xs text-gray-500">Type</p>
                <p className="font-medium text-sm">Apartment</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-xs text-gray-500">Price</p>
                <p className="font-medium text-sm">${selectedProduct.Price}/night</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-xs text-gray-500">Rating</p>
                <p className="font-medium text-sm flex items-center">
                  <Star size={14} className="text-yellow-500 fill-yellow-500 mr-1" />
                  {selectedProduct.rating || "2.8"}
                </p>
              </div>
            </div>

            {/* Details Sections - Responsive spacing */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3">
                <KeyRound size={18} className="text-[#1e1e1e] mt-0.5 flex-none sm:w-5 sm:h-5" />
                <div className="flex-1">
                  <p className="font-medium text-sm sm:text-base">
                    Exceptional check-in experience
                  </p>
                  <p className="text-xs text-gray-500 sm:text-sm">
                  {selectedProduct.Text1}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <BedDoubleIcon size={18} className="text-[#1e1e1e] mt-0.5 flex-none sm:w-5 sm:h-5" />
                <div className="flex-1">
                  <p className="font-medium text-sm sm:text-base">Apartment Overview</p>
                  <p className="text-xs text-gray-500 sm:text-sm">
                    {selectedProduct.Text2 ||
                      "Chic executive suite with ocean views, modern amenities, and 24/7 electricity."}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#1e1e1e] mt-0.5 flex-none sm:w-5 sm:h-5" />
                <div className="flex-1">
                  <p className="font-medium text-sm sm:text-base">Location Overview</p>
                  <p className="text-xs text-gray-500 sm:text-sm">
                    {selectedProduct.location || "..."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Fixed Price Section - Responsive padding and button size */}
          <div className="p-4 sm:p-6 pt-4 border-t border-gray-100 bg-white sticky bottom-0">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-base sm:text-lg font-semibold text-gray-900">
                  ${selectedProduct.Price}
                </p>
                <p className="text-xs text-gray-500">
                  {selectedProduct.TimeFrame || "For 1 night – 18 June 20"}
                </p>
              </div>
              <button onClick={() => navigate("/booking")} className="bg-blue-600 text-white text-sm sm:text-base font-medium px-4 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-blue-700 transition-colors">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;