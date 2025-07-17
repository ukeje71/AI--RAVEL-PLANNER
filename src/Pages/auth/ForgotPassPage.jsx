import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Mail, ArrowRight } from 'lucide-react';
import Whisk from  "../../assets/Images/Whisk.png"; 
const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Add your password reset logic here
    console.log('Reset password for:', email);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/check-email'); // Redirect to confirmation page
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* Image Placeholder - Add your image here */}
        <img src={Whisk} alt="Whisk" />
        <h2 className="mt-6 text-center text-3xl font-bold text-[#2563EB]">
          Forgot Password?
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Enter your email address to reset password
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="focus:ring-[#2563EB] focus:border-[#2563EB] block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={!email || isLoading}
                className={`w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                  email ? 'bg-[#2563EB] hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2563EB] transition-colors`}
              >
                {isLoading ? (
                  'Sending...'
                ) : (
                  <>
                    Reset Password <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Back to Login */}
          <div className="mt-6 text-center">
            <button
              onClick={() => navigate('/signin')}
              className="text-sm font-medium text-[#2563EB] hover:text-blue-700 hover:underline"
            >
              Back to login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;