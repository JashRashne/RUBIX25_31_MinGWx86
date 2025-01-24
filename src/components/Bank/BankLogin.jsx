import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import arrow from "../../assets/arrow1.png";

const BankLogin = () => {
  const [step, setStep] = useState(1);

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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center relative">
      <div className={`${step == 1 ? "flex" : "hidden"}`}>
        <img
          src={arrow}
          height={50}
          width={100}
          className="absolute left-[240px] top-[170px] rotate-[30deg] z-20"
          alt=""
        />

        <div className="h-[200px] w-[350px] bg-white border-2 border-black absolute left-[10px] bottom-[100px] rounded-xl flex flex-col z-20">
          <div className="w-full h-[60%]  flex flex-col items-center justify-center">
            <span className="font-black text-lg pt-2">ENTER USERNAME</span>
            <span className=" mb-2 text-sm text-center px-4 leading-tight">
              Enter the correct username provided by the bank to you in order to
              access online banking services and forms.
            </span>
          </div>
          <div className="w-full h-[40%]  flex items-center justify-center gap-2">
            <div className="w-[40%] h-[80%] bg-gray-100 border-2 border-gray-600 rounded-xl flex items-center justify-center hover:scale-95 cursor-pointer">
              <i class="ri-volume-up-line text-xl"></i>
              <span className="px-3 text-xm font-bold">LISTEN</span>
            </div>
            <div className="w-[40%] h-[80%] bg-gray-100 border-2 border-gray-600 rounded-xl flex items-center justify-center hover:scale-95 cursor-pointer">
              <i class="ri-skip-right-line text-xl"></i>
              <span
                className="px-3 text-xm font-bold"
                onClick={() => {
                  setStep(2);
                }}
              >
                NEXT
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={`${step == 2 ? "flex" : "hidden"}`}>
        <img
          src={arrow}
          height={50}
          width={100}
          className="absolute left-[240px] top-[220px] rotate-[30deg] z-20"
          alt=""
        />

        <div className="h-[200px] w-[350px] bg-white border-2 border-black absolute left-[10px] bottom-[60px] rounded-xl flex flex-col z-20">
          <div className="w-full h-[60%]  flex flex-col items-center justify-center">
            <span className="font-black text-lg pt-2">ENTER PASSWORD</span>
            <span className=" mb-2 text-sm text-center px-4 leading-tight">
              Enter the correct password for your respective account in order to
              access online banking services and forms.
            </span>
          </div>
          <div className="w-full h-[40%]  flex items-center justify-center gap-2">
            <div className="w-[40%] h-[80%] bg-gray-100 border-2 border-gray-600 rounded-xl flex items-center justify-center hover:scale-95 cursor-pointer">
              <i class="ri-volume-up-line text-xl"></i>
              <span className="px-3 text-xm font-bold">LISTEN</span>
            </div>
            <div className="w-[40%] h-[80%] bg-gray-100 border-2 border-gray-600 rounded-xl flex items-center justify-center hover:scale-95 cursor-pointer">
              <i class="ri-skip-right-line text-xl"></i>
              <span
                className="px-3 text-xm font-bold"
                onClick={() => {
                  setStep(3);
                }}
              >
                NEXT
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={`${step == 3 ? "flex" : "hidden"}`}>
        <img
          src={arrow}
          height={50}
          width={100}
          className="absolute left-[280px] bottom-[290px] rotate-[120deg] z-20"
          alt=""
        />

        <div className="h-[200px] w-[350px] bg-white border-2 border-black absolute left-[80px] top-[10px] rounded-xl flex flex-col z-20">
          <div className="w-full h-[60%]  flex flex-col items-center justify-center">
            <span className="font-black text-lg pt-2">
              ENTER CAPTCHA
            </span>
            <span className=" mb-2 text-sm text-center px-4 leading-tight">
              Enter the correct captcha code in order to proceed. The captcha code adds on a level of security so that breaches dont occur.
            </span>
          </div>
          <div className="w-full h-[40%]  flex items-center justify-center gap-2">
            <div className="w-[80%] h-[80%] bg-gray-100 border-2 border-gray-600 rounded-xl flex items-center justify-center hover:scale-95 cursor-pointer">
              <i class="ri-volume-up-line text-xl"></i>
              <span className="px-3 text-xm font-bold">
                LISTEN INSTRUCTION{" "}
              </span>
            </div>
            <div></div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-8 w-96 max-w-full">
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
