import React, { useState } from "react";
import icon1 from "../../assets/Images/Googleicon.png";
import icon2 from "../../assets/Images/Paypalicon.png";
import icon3 from "../../assets/Images/Mastercardicon.png";
import icon4 from "../../assets/Images/Appleicon.png";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

const paymentOptions = [
  {
    id: "google",
    label: "Google Account",
    icon: icon1,
  },
  {
    id: "apple",
    label: "Apple Account",
    icon: icon4,
  },
  {
    id: "mastercard",
    label: "Master Card",
    icon: icon3,
  },
  {
    id: "paypal",
    label: "Paypal",
    icon: icon2,
  },
];

const PaymentMethods = () => {
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();

  const handleContinue = () => {
    if (selected) {
      navigate("/addcard");
    }
  };
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="px-4 pt-8">
        <div className="flex items-center gap-15 mx-auto">
          <button className="mr-3 text-xl" onClick={() => navigate(-1)}>
            <ArrowLeft />
          </button>
          <h1 className="text-lg font-semibold">Payment Method</h1>
        </div>
      </div>

      {/* Centered Payment Section */}
      <div className="flex-grow flex flex-col items-center justify-between px-4 pb-8">
        <div className="w-full max-w-md mt-8">
          {/* Title */}
          <p className="mb-4 text-sm font-medium text-gray-700">
            Add Payment Method
          </p>

          {/* Payment Options */}
          <section className="space-y-4 mb-8">
            {paymentOptions.map((method) => (
              <div
                key={method.id}
                onClick={() => setSelected(method.id)}
                className={`flex items-center justify-between border rounded-lg px-4 py-3 cursor-pointer transition ${
                  selected === method.id ? "border-black" : "border-gray-300"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={method.icon}
                    alt={method.label}
                    className="w-16 h-16 object-contain"
                  />
                  <span className="text-sm font-medium text-gray-800">
                    {method.label}
                  </span>
                </div>

                {/* Custom radio button */}
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selected === method.id
                      ? "border-blue-600"
                      : "border-gray-400"
                  }`}
                >
                  {selected === method.id && (
                    <div className="w-2.5 h-2.5 bg-blue-600 rounded-full"></div>
                  )}
                </div>
              </div>
            ))}
          </section>
        </div>

        {/* Continue Button - Fixed at the bottom */}
        <div className="w-full max-w-md">
          <button
            onClick={handleContinue}
            disabled={!selected}
            className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-colors ${
              selected
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
