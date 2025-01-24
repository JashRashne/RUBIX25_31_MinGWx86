import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const BankLogin = () => {
  const navigate = useNavigate();
  const generateCaptcha = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
      captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return captcha;
  };

  const [generatedCaptcha, setGeneratedCaptcha] = useState(generateCaptcha());
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    captcha: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCaptchaChange = (e) => {
    setFormData({
      ...formData,
      captcha: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, password, captcha } = formData;

    if (!username || !password || !captcha) {
      toast.error("Please fill in all fields!");
      return;
    }

    if (captcha !== generatedCaptcha) {
      toast.error("Captcha is incorrect!");
      return;
    }

    toast.success("Login successful!");
    navigate("/bank-home");
    console.log("Login Data:", formData);
    // Proceed with the login logic (e.g., redirect to dashboard)
  };

  const handleCaptchaRefresh = () => {
    setGeneratedCaptcha(generateCaptcha());
    setCaptchaVerified(false);
    setFormData({ ...formData, captcha: "" });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-[30rem] max-w-full">
        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">
          Bank Portal Login
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Fake Captcha */}
          <div className="mb-4">
            <label
              htmlFor="captcha"
              className="block text-sm font-medium text-gray-700"
            >
              Captcha
            </label>
            <div className="flex items-center">
              <input
                type="text"
                id="captcha"
                name="captcha"
                value={formData.captcha}
                onChange={handleCaptchaChange}
                className="mt-1 p-2 w-2/3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Captcha"
                required
              />
              <span className="ml-2 font-semibold text-xl text-blue-600">
                {generatedCaptcha}
              </span>
              <button
                type="button"
                onClick={handleCaptchaRefresh}
                className="ml-2 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Refresh
              </button>
            </div>
          </div>

          {/* Forgot Password Link */}
          <div className="text-right mb-4">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <div className="text-center mb-6">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg w-full hover:bg-blue-700"
            >
              Login
            </button>
          </div>

          {/* Sign-Up Link */}
          <div className="text-center">
            <p className="text-sm">
              Don't have an account?{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </form>
      </div>

      {/* Toast Notification */}
      <ToastContainer />
    </div>
  );
};

export default BankLogin;
