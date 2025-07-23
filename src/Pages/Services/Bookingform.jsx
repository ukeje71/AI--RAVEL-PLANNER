import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import BookingConfirmation from "../../components/UI/BookingConfirmation";

const BookingForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    arrivalDate: "",
    guestDetails: "",
    numberOfGuests: "",
    departureDate: "",
  });
  // const [showConfirmation, setShowConfirmation] = useState(false);

  // Check if all fields are filled
  const isFormComplete = Object.values(formData).every(
    (field) => field.trim() !== ""
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormComplete) {
      // setShowConfirmation(true);
      console.log("Form submitted:", formData);
      navigate("/paymentmethods")
    }
  };

  return (
    <div className="min-h-screen bg-white p-4 flex flex-col items-center relative">
      {/* Header */}
      <div className="flex items-center justify-center relative mb-8 w-full max-w-md">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-0 text-2xl"
        >
          <ArrowLeft />
        </button>
        <h2 className="text-lg font-medium text-[#262626]">
          Available Apartment
        </h2>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-5 w-full max-w-md flex-1 flex flex-col justify-between"
      >
        <div className="space-y-5">
          <div>
            <label className="block mb-4 text-sm font-medium">
              Arrival Date
            </label>
            <input
              type="date"
              name="arrivalDate"
              value={formData.arrivalDate}
              onChange={handleChange}
              className="w-full bg-gray-100 px-4 py-3 rounded-md outline-none"
              placeholder="Arrival Date"
            />
          </div>

          <div>
            <label className="block mb-4 text-sm font-medium">
              Guest Details
            </label>
            <input
              type="text"
              name="guestDetails"
              value={formData.guestDetails}
              onChange={handleChange}
              className="w-full bg-gray-100 px-4 py-3 rounded-md outline-none"
              placeholder="Guest Details"
            />
          </div>

          <div>
            <label className="block mb-4 text-sm font-medium">
              Number of Guests
            </label>
            <input
              type="number"
              name="numberOfGuests"
              value={formData.numberOfGuests}
              onChange={handleChange}
              className="w-full bg-gray-100 px-4 py-3 rounded-md outline-none"
              placeholder="Number of Guests"
            />
          </div>

          <div>
            <label className="block mb-4 text-sm font-medium">
              Departure Date
            </label>
            <input
              type="date"
              name="departureDate"
              value={formData.departureDate}
              onChange={handleChange}
              className="w-full bg-gray-100 px-4 py-3 rounded-md outline-none"
              placeholder="Departure Date"
            />
          </div>
        </div>

        {/* Complete Button */}
        <button
          type="submit"
          disabled={!isFormComplete}
          className={`w-full py-3 rounded-sm text-black text-sm font-medium ${
            isFormComplete
              ? "bg-[#2563EB] text-white"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Complete
        </button>
      </form>

      {/* {showConfirmation && (
        <BookingConfirmation onClose={() => setShowConfirmation(false)} />
      )} */}
    </div>
  );
};

export default BookingForm;
