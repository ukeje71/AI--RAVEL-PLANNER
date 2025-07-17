import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';

const CheckemailPage = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = useRef([]);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const [resendTimer, setResendTimer] = useState(30);

  // Handle OTP input change
  const handleChange = (index, value) => {
    if (value && !/^[0-9]$/.test(value)) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto focus to next input
    if (value && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Handle backspace
  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const code = otp.join('');
    console.log('OTP submitted:', code);
    navigate('/reset-password'); // Redirect to password reset page
  };

  // Resend OTP countdown
  useEffect(() => {
    let timer;
    if (resendTimer > 0) {
      timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
    } else {
      setIsResendDisabled(false);
    }
    return () => clearTimeout(timer);
  }, [resendTimer]);

  const handleResendCode = () => {
    // Resend OTP logic here
    console.log('Resending code...');
    setIsResendDisabled(true);
    setResendTimer(30);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-[#2563EB] hover:text-blue-700 mb-6"
        >
          <ArrowLeft className="h-5 w-5 mr-1" />
          Back
        </button>

        {/* Header */}
        <h2 className="text-center text-3xl font-bold text-[#2563EB]">
          Password Recovery
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Input the code sent to your email.
        </p>

        {/* OTP Form */}
        <div className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex justify-center space-x-4">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-16 h-16 text-2xl text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
                  pattern="[0-9]"
                  inputMode="numeric"
                  required
                />
              ))}
            </div>

            {/* Resend Code */}
            <div className="text-center text-sm">
              <span className="text-gray-600">Didn't receive Code? </span>
              <button
                type="button"
                onClick={handleResendCode}
                disabled={isResendDisabled}
                className={`font-medium ${
                  isResendDisabled
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-[#2563EB] hover:text-blue-700 hover:underline'
                }`}
              >
                Click here {isResendDisabled && `(${resendTimer}s)`}
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={otp.some(digit => digit === '')}
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                otp.every(digit => digit !== '')
                  ? 'bg-[#2563EB] hover:bg-blue-700'
                  : 'bg-gray-400 cursor-not-allowed'
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2563EB] transition-colors`}
            >
              Verify Code
            </button>
          </form>

          {/* Back to Login */}
          <div className="mt-6 text-center">
            <button
              onClick={() => navigate('/login')}
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

export default CheckemailPage;