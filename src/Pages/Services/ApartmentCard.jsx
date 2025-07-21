import React, { useEffect } from "react";
import { KeyRound, Home, MapPin, ArrowLeft } from "lucide-react";
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
    <div className="max-w-md mx-auto bg-white h-screen flex flex-col overflow-hidden">
      {/* Image Section */}
      <div className="relative flex-shrink-0" style={{ height: "40vh" }}>
        <img
          src={selectedProduct.image}
          alt={selectedProduct.name}
          className="w-full h-full object-cover"
        />
        <button
          onClick={() => {
            clearSelectedProduct();
            navigate(-1);
          }}
          className="absolute top-3 left-3 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
        >
          <ArrowLeft size={24} className="text-gray-800" />
        </button>
      </div>

      {/* Content Section with Scroll */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Details Card */}
        <div className="bg-white rounded-t-3xl shadow-lg -mt-6 flex-1 flex flex-col">
          <div className="p-6 pb-4 flex-1 overflow-y-auto">
            <h2 className="text-xl text-center font-semibold text-gray-900 mb-4">
              {selectedProduct.name}
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <KeyRound size={20} className="text-[#1e1e1e] mt-0.5 flex-none" />
                <div className="flex-1">
                  <p className="font-medium text-sm">
                    Exceptional check-in experience
                  </p>
                  <p className="text-sm text-gray-500">
                    Contactless check-in with a smart lock and personalized welcome gift.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Home size={20} className="text-[#1e1e1e] mt-0.5 flex-none" />
                <div className="flex-1">
                  <p className="font-medium text-sm">Apartment Overview</p>
                  <p className="text-sm text-gray-500">
                    {selectedProduct.description || "Chic executive suite with ocean views, modern amenities, and 24/7 electricity."}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-[#1e1e1e] mt-0.5 flex-none" />
                <div className="flex-1">
                  <p className="font-medium text-sm">Location Overview</p>
                  <p className="text-sm text-gray-500">
                    {selectedProduct.location || "..."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Fixed Price Section at Bottom */}
          <div className="p-6 pt-4 border-t border-gray-100 bg-white sticky bottom-0">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold text-gray-900">
                  ${selectedProduct.Price}
                </p>
                <p className="text-xs text-gray-500">
                  {selectedProduct.TimeFrame || "For 1 night – 18 June 20"}
                </p>
              </div>
              <button className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
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