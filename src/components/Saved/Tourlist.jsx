import React from "react";
import { ArrowLeft, CameraIcon } from "lucide-react";
import { useNavigate } from "react-router";

const tours = new Array(10).fill({
  message: "You have successfully booked a tour visit to Rome Ancients Ruins",
  timestamp: "July 15th, 18:09:09",
});

const Tourlist = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white px-4 py-6">
      {/* Header */}
      <div className="flex items-center mb-6">
        <ArrowLeft onClick={() => navigate(-1)} className="cursor-pointer w-5 h-5 mr-4" />
        <h1 className="text-lg font-semibold">Trips</h1>
      </div>

      {/* tour Cards */}
      <div className="space-y-4">
        {tours.map((tour, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-gray-100 p-4 rounded-xl shadow-sm"
          >
            <div className="flex items-start space-x-4">
              <div className="bg-indigo-100 p-2 rounded-full">
                <CameraIcon className="text-indigo-600 w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">
                  {tour.message}
                </p>
                <p className="text-xs text-gray-500 mt-1">{tour.timestamp}</p>
              </div>
            </div>
            <button className="bg-indigo-100 text-indigo-700 text-sm px-3 py-1 rounded-md hover:bg-indigo-200 transition">
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tourlist;
