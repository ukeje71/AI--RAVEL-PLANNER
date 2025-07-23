import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const TourForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    date: "",
    durationpreference: "",
    Groupsize: "",
    experienceType: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const isFormValid = Object.values(formData).every(value => value.trim() !== "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      navigate("/paymentmethods", { state: { tourDetails: formData } });
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col px-4 pb-8">
      {/* Header */}
      <div className="pt-8 mb-8">
        <div className="flex items-center">
          <button className="mr-3" onClick={() => navigate(-1)}>
            <ArrowLeft />
          </button>
          <h1 className="text-lg font-semibold">Trip</h1>
        </div>
      </div>

      {/* Form */}
      <form className="flex-grow space-y-5" onSubmit={handleSubmit}>
        {/* Date / Time Preference */}
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1">
            Date / Time Preference
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            placeholder="Date / Time Preference"
            className="w-full px-4 py-3 bg-gray-100 rounded-lg text-gray-800 focus:outline-none"
            required
          />
        </div>

        {/*Duration Preference */}
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1">
           Duration Preference
          </label>
          <input
            type="text"
            name="durationpreference"
            value={formData.durationpreference}
            onChange={handleChange}
            placeholder="Duration Preference"
            className="w-full px-4 py-3 bg-gray-100 rounded-lg text-gray-800 focus:outline-none"
            required
          />
        </div>

        {/* Group Size */}
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1">
            Group Size
          </label>
          <input
            type="text"
            name="Groupsize"
            value={formData.Groupsize}
            onChange={handleChange}
            placeholder="Group Size"
            className="w-full px-4 py-3 bg-gray-100 rounded-lg text-gray-800 focus:outline-none"
            required
          />
        </div>

        {/* Experience Type */}
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1">
            Experience Type
          </label>
          <input
            type="text"
            name="experienceType"
            value={formData.experienceType}
            onChange={handleChange}
            placeholder="Experience Type"
            className="w-full px-4 py-3 bg-gray-100 rounded-lg text-gray-800 focus:outline-none"
            required
          />
        </div>

        {/* Next Button - Fixed at bottom */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200">
          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full py-3 rounded-xl font-medium transition-colors ${
              isFormValid
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default TourForm;