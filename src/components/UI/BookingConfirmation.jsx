import React from "react";

const BookingConfirmation = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center border border-gray-200">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">BOOKING CONFIRMED</h2>
        <p className="text-gray-700 mb-6">
          Your apartment has been successfully booked. Get ready to enjoy a comfortable and unforgettable stay. All your booking details have been sent to your email.
        </p>
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
          Done
        </button>
      </div>
    </div>
  );
};

export default BookingConfirmation;