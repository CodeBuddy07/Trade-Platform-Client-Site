import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";

const ServiceSeeker = () => {
  const [selectedTradeArea, setSelectedTradeArea] = useState("");
  const [passShow, setPassShow] = useState(false);
  const [passConfirmShow, setPassConfirmShow] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [imagePreview, setImagePreview] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const firstName = form.get("firstName");
    const lastName = form.get("lastName");
    const email = form.get("email");
    const phone = form.get("phone");
    const postcode = form.get("postcode");
    const tradeArea = selectedTradeArea || "Not selected";

    const formDetails = {
      firstName,
      lastName: lastName || "Not provided",
      email,
      phone,
      postcode,
      tradeArea,
    };
    console.log(formDetails);
  };

  const inputValidationHandler = (e) => {
    e.target.value
      ? e.target.classList.add("bg-gray-200")
      : e.target.classList.remove("bg-gray-200");
  };

  const handlePasswordValidation = (e) => {
    setConfirmPassword(e.target.value);
    setIsPasswordValid(e.target.value === password);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <form
        onSubmit={handleFormSubmit}
        className="max-w-4xl bg-white shadow-md border border-gray-200 rounded-lg p-8 space-y-8 lg:my-10 my-0 w-full"
      >
        <div>
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Create a Customer Account
          </h2>
          <p className="text-gray-600 text-center">Join and Get your work done.</p>
        </div>

        <div className="flex justify-center items-center relative">
          <div className="relative group w-36 h-36">
            <img
              src={imagePreview || "https://picsum.photos/200"}
              alt="Profile"
              className="w-36 h-36 rounded-full object-cover border-4 border-gray-300"
            />
            <label
              htmlFor="imageInput"
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity rounded-full cursor-pointer"
            >
              <FaCamera className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </label>
            <input
              type="file"
              id="imageInput"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>
        </div>

        {/* Name Inputs */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-gray-600"
            >
              First Name<span className="text-red-500 ml-1">*</span>
            </label>
            <input
              onChange={inputValidationHandler}
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Enter your first name"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="lastName"
              className="text-sm font-medium text-gray-600"
            >
              Last Name
            </label>
            <input
              onChange={inputValidationHandler}
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Enter your last name"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Contact and Postcode */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full">
            <label
              htmlFor="phone"
              className="text-sm font-medium text-gray-600"
            >
              Phone<span className="text-red-500 ml-1">*</span>
            </label>
            <input
              onChange={inputValidationHandler}
              type="tel"
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="postcode"
              className="text-sm font-medium text-gray-600"
            >
              Postcode<span className="text-red-500 ml-1">*</span>
            </label>
            <input
              onChange={inputValidationHandler}
              type="text"
              name="postcode"
              id="postcode"
              placeholder="Enter your postcode"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Trade Area */}
        {/* <div className="w-full">
          <label
            htmlFor="tradeArea"
            className="text-sm font-medium text-gray-600"
          >
            Trade Area<span className="text-red-500 ml-1">*</span>
          </label>
          <select
            value={selectedTradeArea}
            onChange={(e) => setSelectedTradeArea(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-green-500 focus:outline-none"
          >
            <option value="">Select a trade area</option>
            <option value="Construction">Construction</option>
            <option value="Electrical">Electrical</option>
            <option value="Plumbing">Plumbing</option>
            <option value="Painting">Painting</option>
            <option value="Other">Other</option>
          </select>
        </div> */}

        {/* Email and Password */}
        <div className="space-y-6">
          <div className="w-full">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-600"
            >
              Email<span className="text-red-500 ml-1">*</span>
            </label>
            <input
              onChange={inputValidationHandler}
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full relative">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-600"
              >
                Password<span className="text-red-500 ml-1">*</span>
              </label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                  inputValidationHandler(e);
                }}
                type={passShow ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Enter a password"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
              <div
                onClick={() => setPassShow(!passShow)}
                className="absolute bottom-3 right-3 cursor-pointer"
              >
                {passShow ? (
                  <FaRegEye size={20} className="text-gray-500" />
                ) : (
                  <FaRegEyeSlash size={20} className="text-gray-500" />
                )}
              </div>
            </div>

            <div className="w-full relative">
              <label
                htmlFor="confirmPassword"
                className="text-sm font-medium text-gray-600"
              >
                Confirm Password
              </label>
              <input
                onChange={handlePasswordValidation}
                type={passConfirmShow ? "text" : "password"}
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm your password"
                className={`w-full p-3 border ${
                  confirmPassword &&
                  (isPasswordValid
                    ? "border-green-500 bg-green-50"
                    : "border-red-500 bg-red-50")
                } rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none`}
              />
              <div
                onClick={() => setPassConfirmShow(!passConfirmShow)}
                className="absolute bottom-3 right-3 cursor-pointer"
              >
                {passConfirmShow ? (
                  <FaRegEye size={20} className="text-gray-500" />
                ) : (
                  <FaRegEyeSlash size={20} className="text-gray-500" />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Terms and Submit */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            className="h-4 w-4 rounded text-green-500"
            required
          />
          <p className="text-sm text-gray-600">
            I agree to the <span className="text-green-600">Terms of Use</span>{" "}
            and <span className="text-green-600">Privacy Policy</span>.
          </p>
        </div>

        <div className="text-center">
          <button className="py-2 px-8 text-white text-sm bg-green-600 hover:bg-green-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
            Sign Up Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default ServiceSeeker;
