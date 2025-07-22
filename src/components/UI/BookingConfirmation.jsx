import React from "react";
import { useNavigate } from "react-router";

const BookingConfirmation = () => {
  const navigate = useNavigate();

  const handleDoneClick = () => {
    navigate("/home");
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      {/* Glassmorphism Card */}
      <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-xl border border-white/20 max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          BOOKING CONFIRMED
        </h2>
        <p className="text-gray-700 mb-6">
          Your apartment has been successfully booked. Get ready to enjoy a
          comfortable and unforgettable stay. All your booking details have been
          sent to your email.
        </p>
        <button
          onClick={handleDoneClick}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default BookingConfirmation;
