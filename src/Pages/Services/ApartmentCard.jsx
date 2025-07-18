import React from "react";
import { KeyRound, Home, MapPin, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";
import useDetailsStore from "../../components/Store/details";
const ApartmentCard = () => {
  const navigate = useNavigate();
  const { selectedProduct } = useDetailsStore();

  // If no product is selected, show a message or redirect
  if (!selectedProduct) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>No product selected. Please go back and select a product.</p>
        <button 
          onClick={() => navigate(-1)}
          className="ml-2 text-blue-600 underline"
        >
          Go back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white overflow-hidden absolute top-0 left-0 right-0 bottom-0">
      {/* Image */}
      <div className="relative">
        <img
          src={selectedProduct.image} // Dynamic image from product data
          alt={selectedProduct.title}
          className="w-full rounded-b-xl h-[50vh] object-cover relative"
        />
        <button 
          onClick={() => navigate(-1)}
          className="absolute top-3 left-3 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
        >
          <ArrowLeft size={24} className="text-gray-800" />
        </button>
      </div>

      {/* Details */}
      <section className="p-5 space-y-4 mx-4 bottom-0 bg-white absolute left-0 right-0 rounded-2xl shadow-lg">
        <h2 className="text-xl text-center font-semibold text-gray-900">
          {selectedProduct.title} {/* Dynamic title */}
        </h2>

        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <KeyRound size={20} className="text-[#1e1e1e] mt-0.5 flex-none" />
            <div className="flex-1">
              <p className="font-medium text-sm">
                {selectedProduct.medium1} {/* Dynamic heading */}
              </p>
              <p className="text-sm text-gray-500">
                {selectedProduct.Text1} {/* Dynamic text */}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Home size={20} className="text-[#1e1e1e] mt-0.5 flex-none" />
            <div className="flex-1">
              <p className="font-medium text-sm">
                {selectedProduct.Medium2} {/* Dynamic heading */}
              </p>
              <p className="text-sm text-gray-500">
                {selectedProduct.Text2} {/* Dynamic text */}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin size={20} className="text-[#1e1e1e] mt-0.5 flex-none" />
            <div className="flex-1">
              <p className="font-medium text-sm">
                {selectedProduct.Medium3} {/* Dynamic heading */}
              </p>
              <p className="text-sm text-gray-500">
                {selectedProduct.Text3} {/* Dynamic text */}
              </p>
            </div>
          </div>
        </div>

        {/* Price and Button */}
        <div className="flex items-center justify-between pt-4 border-t mt-4">
          <div className="text-left">
            <p className="text-lg font-semibold text-gray-900">
              ${selectedProduct.Price} {/* Dynamic price */}
            </p>
            <p className="text-xs text-gray-500">
              {selectedProduct.TimeFrame} {/* Dynamic timeframe */}
            </p>
          </div>
          <button className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Book Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default ApartmentCard;