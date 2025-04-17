import React, { useState } from "react";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import logo from "../assets/images/celtic-logo.png"

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // Simulate API call for frontend demo
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Simulate login success
      localStorage.setItem(
        "propflow-user",
        JSON.stringify({
          email: formData.email,
          isAuthenticated: true,
          createdAt: new Date().toISOString(),
        })
      );

      // Redirect to dashboard (for demo purposes, simulate navigation)
        //   alert("Login successful!");
      // navigate("/dashboard");
      window.location.href = "/dashboard";
    } catch (error) {
      alert("There was an error logging in. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="mb-4">
        <img className="w-40" src={logo} alt="logo" />
      </div>
      <form onSubmit={handleSubmit} className="space-y-6 w-md mx-auto p-6 bg-white shadow-lg rounded-xl border border-gray-300">
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl">Login</h2>
            <p>Enter your email and password to access your account</p>
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleChange}
              disabled={isLoading}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <p className="block text-sm font-medium text-gray-700 hover:underline cursor-pointer">Forgot Password?</p>
            </div>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                disabled={isLoading}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <button
                type="button"
                className="absolute right-0 top-0 h-full px-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaRegEyeSlash className="h-5 w-5 text-gray-500" /> : <FaEye className="h-5 w-5 text-gray-500" />}
                <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
              </button>
            </div>
            {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
          </div>

          <div>
            <p className="hover:underline cursor-pointer text-sm">Show Test Options</p>
          </div>

          <div className="pt-4">
            <button
              className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 disabled:bg-gray-400 focus:ring-2 focus:ring-blue-500"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Logging In..." : "Log In"}
            </button>
          </div>

          <div className="text-center text-sm">
            <p>
              Don't have an account?{" "}
              <a href="/register" className="text-blue-500 hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
