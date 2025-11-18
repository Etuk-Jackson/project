import React, { useEffect, useState } from "react";

const SignUp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return !newErrors.firstName && !newErrors.lastName && !newErrors.email && !newErrors.password && !newErrors.confirmPassword;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, proceed with sign up
      console.log("Sign up successful", formData);
      // Add your sign up logic here
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-20 pb-16">
     
      {/* Subtle blurred light behind the card */}
      <div 
        className={`absolute top-1/3 left-1/2 -translate-x-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-white/10 blur-[120px] rounded-full transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}
      ></div>

      {/* Sign Up Card - Increased top margin */}
      <div 
        className={`relative z-10 w-full max-w-md p-6 sm:p-8 md:p-10 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-700 delay-500 mt-16 mb-8 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-white text-center mb-6 sm:mb-8 transition-all duration-700 delay-700">
          {isVisible ? 'Sign Up' : ''}
        </h1>

        <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
          {/* Name Fields - Side by side on larger screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all duration-700 delay-800">
            {/* First Name */}
            <div>
              <label className="block text-gray-300 mb-2 text-sm font-medium">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First name"
                className={`w-full px-4 py-3 rounded-lg bg-white/10 border text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all duration-300 hover:bg-white/15 ${
                  errors.firstName ? 'border-red-400/50' : 'border-white/10'
                }`}
              />
              {errors.firstName && (
                <p className="text-red-400 text-xs mt-1 transition-all duration-300">
                  {errors.firstName}
                </p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-gray-300 mb-2 text-sm font-medium">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last name"
                className={`w-full px-4 py-3 rounded-lg bg-white/10 border text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all duration-300 hover:bg-white/15 ${
                  errors.lastName ? 'border-red-400/50' : 'border-white/10'
                }`}
              />
              {errors.lastName && (
                <p className="text-red-400 text-xs mt-1 transition-all duration-300">
                  {errors.lastName}
                </p>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="transition-all duration-700 delay-900">
            <label className="block text-gray-300 mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className={`w-full px-4 py-3 rounded-lg bg-white/10 border text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all duration-300 hover:bg-white/15 ${
                errors.email ? 'border-red-400/50' : 'border-white/10'
              }`}
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1 transition-all duration-300">
                {errors.email}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="transition-all duration-700 delay-1000">
            <label className="block text-gray-300 mb-2 text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              className={`w-full px-4 py-3 rounded-lg bg-white/10 border text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all duration-300 hover:bg-white/15 ${
                errors.password ? 'border-red-400/50' : 'border-white/10'
              }`}
            />
            {errors.password && (
              <p className="text-red-400 text-xs mt-1 transition-all duration-300">
                {errors.password}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="transition-all duration-700 delay-1100">
            <label className="block text-gray-300 mb-2 text-sm font-medium">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Confirm your password"
              className={`w-full px-4 py-3 rounded-lg bg-white/10 border text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all duration-300 hover:bg-white/15 ${
                errors.confirmPassword ? 'border-red-400/50' : 'border-white/10'
              }`}
            />
            {errors.confirmPassword && (
              <p className="text-red-400 text-xs mt-1 transition-all duration-300">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* Sign Up button */}
          <button
            type="submit"
            className="w-full py-3 bg-white/10 text-white rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm hover:scale-105 hover:-translate-y-1 active:scale-100 active:translate-y-0 delay-1200 shadow-lg hover:shadow-xl hover:shadow-white/5"
          >
            Sign Up
          </button>
        </form>

        {/* Login prompt */}
        <p className="text-center text-gray-400 text-sm mt-6 sm:mt-8 transition-all duration-700 delay-1300">
          Already have an account?{" "}
          <a href="/login" className="text-white hover:underline transition duration-200">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;