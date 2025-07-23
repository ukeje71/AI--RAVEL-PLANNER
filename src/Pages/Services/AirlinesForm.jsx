import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";
// import { useRouter } from "next/navigate";
import { useNavigate } from "react-router";

const AirlinesForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    passengerType: "",
    seatNumber: "",
    travelClass: "",
    carryOnBaggage: "",
    checkedInBaggage: "",
    airlineName: "",
    flightNumber: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      navigate("/paymentmethods");
    }
  };

  // Check if all required fields are filled
  const isFormValid = 
    formData.fullName && 
    formData.passengerType && 
    formData.travelClass && 
    formData.airlineName && 
    formData.flightNumber;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="px-4 pt-8">
        <div className="flex items-center justify-center relative mb-8">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 text-2xl"
          >
            <ArrowLeft />
          </button>
          <h2 className="text-lg font-medium">Available Airlines</h2>
        </div>
      </div>

      {/* Form Content */}
      <div className="flex-grow px-4 pb-4">
        <form className="space-y-8" onSubmit={handleSubmit}>
          {/* Passenger Details */}
          <section>
            <h3 className="text-sm font-semibold mb-4">Passenger Details</h3>

            <div className="space-y-4">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name (as on passport/ID)"
                className="w-full bg-[#F7F7F7] px-4 py-3 rounded-md outline-none"
                required
              />

              <input
                type="text"
                name="passengerType"
                value={formData.passengerType}
                onChange={handleChange}
                placeholder="Passenger Type (Adult, Child, Infant)"
                className="w-full bg-[#F7F7F7] px-4 py-3 rounded-md outline-none"
                required
              />

              <input
                type="text"
                name="seatNumber"
                value={formData.seatNumber}
                onChange={handleChange}
                placeholder="Seat Number (if selected)"
                className="w-full bg-[#F7F7F7] px-4 py-3 rounded-md outline-none"
              />

              <input
                type="text"
                name="travelClass"
                value={formData.travelClass}
                onChange={handleChange}
                placeholder="Class (Economy, Business, First)"
                className="w-full bg-[#F7F7F7] px-4 py-3 rounded-md outline-none"
                required
              />
            </div>
          </section>

          {/* Baggage Information */}
          <section>
            <h3 className="text-sm font-semibold mb-4">Baggage Information</h3>

            <div className="space-y-4">
              <input
                type="text"
                name="carryOnBaggage"
                value={formData.carryOnBaggage}
                onChange={handleChange}
                placeholder="Carry-on Baggage Allowance"
                className="w-full bg-[#F7F7F7] px-4 py-3 rounded-md outline-none"
              />

              <input
                type="text"
                name="checkedInBaggage"
                value={formData.checkedInBaggage}
                onChange={handleChange}
                placeholder="Checked-in Baggage Allowance"
                className="w-full bg-[#F7F7F7] px-4 py-3 rounded-md outline-none"
              />
            </div>
          </section>

          {/* Flight Information */}
          <section>
            <h3 className="text-sm font-semibold mb-4">Flight Information</h3>

            <div className="space-y-4">
              <input
                type="text"
                name="airlineName"
                value={formData.airlineName}
                onChange={handleChange}
                placeholder="Airline Name"
                className="w-full bg-[#F7F7F7] px-4 py-3 rounded-md outline-none"
                required
              />

              <input
                type="text"
                name="flightNumber"
                value={formData.flightNumber}
                onChange={handleChange}
                placeholder="Flight Number"
                className="w-full bg-[#F7F7F7] px-4 py-3 rounded-md outline-none"
                required
              />
            </div>
          </section>
        </form>
      </div>

      {/* Next Button - Fixed at the bottom */}
      <div className="p-4">
        <button
          onClick={handleSubmit}
          disabled={!isFormValid}
          className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-colors ${
            isFormValid
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AirlinesForm;