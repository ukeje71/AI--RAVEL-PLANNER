import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const AddCard = () => {
  const [cardInfo, setCardInfo] = useState({
    name: "",
    number: "",
    cvv: "",
    expiry: "",
    saveInfo: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCardInfo((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      navigate("/payment-success");
    }
  };

  // Check if all required fields are filled
  const isFormValid =
    cardInfo.name.trim() &&
    cardInfo.number.replace(/\s/g, "").length >= 16 &&
    cardInfo.cvv.length >= 3 &&
    cardInfo.expiry.length >= 5;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-8">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className=" absolute gap-15 top-0 flex items-center mt-6">
          <button className="mr-3 text-xl" onClick={() => navigate(-1)}>
            <ArrowLeft />
          </button>
          <h1 className="text-lg font-semibold">Add Card</h1>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={cardInfo.name}
              onChange={handleChange}
              placeholder="Samuel Kalu Okorie"
              className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none"
              required
            />
          </div>

          {/* Card Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Card Number
            </label>
            <input
              type="text"
              name="number"
              value={cardInfo.number}
              onChange={handleChange}
              placeholder="6729 0982 8729 9827"
              className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none"
              required
              maxLength={19}
            />
          </div>

          {/* CVV & Expiry */}
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                CVV
              </label>
              <input
                type="text"
                name="cvv"
                value={cardInfo.cvv}
                onChange={handleChange}
                placeholder="9804"
                className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none"
                required
                maxLength={4}
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Expires
              </label>
              <input
                type="text"
                name="expiry"
                value={cardInfo.expiry}
                onChange={handleChange}
                placeholder="09/25"
                className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none"
                required
                maxLength={5}
              />
            </div>
          </div>

          {/* Save checkbox */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="saveInfo"
              checked={cardInfo.saveInfo}
              onChange={handleChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
            />
            <label className="text-sm text-gray-600">
              Save Credit Card Information
            </label>
          </div>

          {/* Save Button */}
          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full text-sm py-3 rounded-xl mt-2 transition ${
              isFormValid
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Save Card
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCard;
