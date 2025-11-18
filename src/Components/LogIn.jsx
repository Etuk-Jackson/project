import React, { useEffect, useState } from "react";

const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({
    email: "",
    password: ""
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
      email: "",
      password: ""
    };

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

    setErrors(newErrors);
    return !newErrors.email && !newErrors.password;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, proceed with login
      console.log("Login successful", formData);
      // Add your login logic here
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden px-4 sm:px-6 lg:px-8 py-8">
      {/* Background glow */}
     

      {/* Subtle blurred light behind the card */}
      <div 
        className={`absolute top-1/3 left-1/2 -translate-x-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-white/10 blur-[120px] rounded-full transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}
      ></div>

      {/* Login Card */}
      <div 
        className={`relative z-10 w-full max-w-md p-6 sm:p-8 md:p-10 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-700 delay-500 my-8 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-white text-center mb-6 sm:mb-8 transition-all duration-700 delay-700">
          {isVisible ? 'Login' : ''}
        </h1>

        <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
          {/* Email */}
          <div className="transition-all duration-700 delay-800">
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
          <div className="transition-all duration-700 delay-900">
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

          {/* Forgot password */}
          <div className="text-right transition-all duration-700 delay-1000">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition duration-200 inline-block hover:scale-105">
              Forgot password?
            </a>
          </div>

          {/* Login button */}
          <button
            type="submit"
            className="w-full py-3 bg-white/10 text-white rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm hover:scale-105 hover:-translate-y-1 active:scale-100 active:translate-y-0 delay-1100 shadow-lg hover:shadow-xl hover:shadow-white/5"
          >
            Login
          </button>
        </form>

        {/* Optional Sign Up prompt */}
        <p className="text-center text-gray-400 text-sm mt-6 sm:mt-8 transition-all duration-700 delay-1200">
          Don't have an account?{" "}
          <a href="/signup" className="text-white hover:underline transition duration-200">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;