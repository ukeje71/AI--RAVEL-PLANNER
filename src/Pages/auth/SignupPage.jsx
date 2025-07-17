import { Eye, EyeOff, Lock } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    travelBudget: "",
    country: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear password error when user types
    if (name === "password" || name === "confirmPassword") {
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    if (formData.password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      return;
    }

    // Add your signup logic here
    console.log("Form submitted:", formData);
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold text-[#2563EB]">
          Sign Up
        </h2>
        <p className="mt-2 text-center text-sm text-black">
          Kindly provide your details to get started
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#2563EB] focus:border-[#2563EB]"
              />
            </div>

            {/* Travel Budget */}
            <div>
              <label
                htmlFor="travelBudget"
                className="block text-sm font-medium text-gray-700"
              >
                Travel Budget
              </label>
              <select
                id="travelBudget"
                name="travelBudget"
                required
                value={formData.travelBudget}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#2563EB] focus:border-[#2563EB]"
              >
                <option value="">Select budget range</option>
                <option value="500-1000">$500 - $1000</option>
                <option value="1000-3000">$1000 - $3000</option>
                <option value="3000+">$3000+</option>
              </select>
            </div>

            {/* Country */}
            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                Country
              </label>
              <input
                id="country"
                name="country"
                type="text"
                required
                value={formData.country}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#2563EB] focus:border-[#2563EB]"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#2563EB] focus:border-[#2563EB]"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#2563EB] focus:border-[#2563EB]"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 flex items-center border border-gray-300 rounded-md shadow-sm py-2 px-3 focus-within:ring-1 focus-within:ring-[#2563EB] focus-within:border-[#2563EB]">
                <Lock className="text-gray-500 w-5 h-5" />
                <input
                  required
                  name="password"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  className="ml-3 outline-none w-full bg-transparent text-gray-800 placeholder-gray-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="ml-3 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <div className="mt-1 flex items-center border border-gray-300 rounded-md shadow-sm py-2 px-3 focus-within:ring-1 focus-within:ring-[#2563EB] focus-within:border-[#2563EB]">
                <Lock className="text-gray-500 w-5 h-5" />
                <input
                  required
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="ml-3 outline-none w-full bg-transparent text-gray-800 placeholder-gray-400"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="ml-3 text-gray-500 hover:text-gray-700"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {passwordError && (
                <p className="mt-1 text-sm text-red-600">{passwordError}</p>
              )}
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center">
              <input
                id="agreeToTerms"
                name="agreeToTerms"
                type="checkbox"
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
                className="h-4 w-4 text-[#2563EB] focus:ring-[#2563EB] border-gray-300 rounded"
              />
              <label
                htmlFor="agreeToTerms"
                className="ml-2 block text-sm text-gray-700"
              >
                I agree to the{" "}
                <a href="#" className="text-[#2563EB] hover:underline">
                  Terms and Conditions
                </a>
              </label>
            </div>

            {/* Sign Up Button */}
            <div>
              <button
                type="submit"
                disabled={!agreeToTerms || passwordError}
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                  agreeToTerms && !passwordError
                    ? "bg-[#2563EB] hover:bg-blue-700"
                    : "bg-gray-400 cursor-not-allowed"
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2563EB] transition-colors`}
              >
                Sign Up
              </button>
            </div>

            <div className="flex flex-row gap-3">
              <p>Already have an account?</p>
              <p
                onClick={() => navigate("/signin")}
                className="text-[#2563EB] cursor-pointer"
              >
                Login
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
