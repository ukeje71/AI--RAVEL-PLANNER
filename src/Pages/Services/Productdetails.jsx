import React from "react";
import { KeyRound, Home, MapPin } from "lucide-react";
import Palour7 from "../../assets/Images/Palour7.jpg";

const ApartmentCard = () => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
      {/* Image */}
      <div className="relative">
        <img
          src={Palour7}
          alt="Apartment"
          className="w-full h-60 object-cover"
        />
        <button className="absolute top-3 left-3 bg-white rounded-full p-1 shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>

      {/* Details */}
      <div className="p-5 space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">
          Victoria Island Executive Suite (1 Bed, 1 Bath)
        </h2>

        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <KeyRound className="w-5 h-5 text-[#1e1e1e] mt-1" />
            <div>
              <p className="font-medium text-sm">
                Exceptional check-in experience
              </p>
              <p className="text-sm text-gray-500">
                Contactless check-in with a smart lock and personalized welcome
                gift.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Home className="w-5 h-5 text-[#1e1e1e] mt-1" />
            <div>
              <p className="font-medium text-sm">Apartment Overview</p>
              <p className="text-sm text-gray-500">
                Chic executive suite with ocean views, modern amenities, and
                24/7 electricity.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#1e1e1e] mt-1" />
            <div>
              <p className="font-medium text-sm">Location Overview</p>
              <p className="text-sm text-gray-500">
                Prime location in the city.
              </p>
            </div>
          </div>
        </div>

        {/* Price and Button */}
        <div className="flex items-center justify-between pt-4 border-t mt-4">
          <div className="text-left">
            <p className="text-lg font-semibold text-gray-900">$200</p>
            <p className="text-xs text-gray-500">For 1 night – 18 June 20</p>
          </div>
          <button className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-blue-700">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;
