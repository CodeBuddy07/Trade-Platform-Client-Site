import { useState } from "react";
import { FaCamera } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const RegistrationTrade = () => {
  const [imagePreview, setImagePreview] = useState("");
  const [showCompanyInput, setShowCompanyInput] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [certificationPreview, setCertificationPreview] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleCertificationUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setCertificationPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const toggleCompanyInput = () => setShowCompanyInput(!showCompanyInput);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="w-full lg:my-10 max-w-4xl bg-white shadow-lg rounded-lg p-8 space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Create a Trade Account
          </h1>
          <p className="text-gray-600">Join and showcase your trade skills.</p>
        </div>

        {/* Image Upload */}
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

        {/* Personal Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="First Name"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Last Name"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Password Section */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-3 top-5 flex items-center cursor-pointer"
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </div>
          </div>
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-3 top-5 flex items-center cursor-pointer"
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible />
              ) : (
                <AiOutlineEye />
              )}
            </div>
          </div>
        </div>

        {/* Trade Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Trade/Profession <span className="text-red-500">*</span>
            </label>
            <select className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Select Trade</option>
              <option value="Electrician">Electrician</option>
              <option value="Plumber">Plumber</option>
              <option value="Heating Engineer">Heating Engineer</option>
              <option value="Plasterer">Plasterer</option>
              <option value="Joiner">Joiner</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Years of Experience <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              placeholder="Years of Experience"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Certifications/Licenses (Upload){" "}
            <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center space-x-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleCertificationUpload}
              className="w-full px-4 py-2 border rounded"
            />
            {certificationPreview && (
              <img
                src={certificationPreview}
                alt="Certification Preview"
                className="w-16 h-16 object-cover rounded"
              />
            )}
          </div>
        </div>

        {/* Company Information */}
        <div>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              onChange={toggleCompanyInput}
              className="checkbox checkbox-sm checkbox-success [--chkfg:white] rounded border-gray-300 focus:ring-green-500"
            />
            <span className="text-sm font-medium text-gray-700">
              Register as a company
            </span>
          </label>
          {showCompanyInput && (
            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Proof of Insurance (Upload)
                </label>
                <input
                  type="file"
                  accept=".jpg,.jpeg,.png"
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
            </div>
          )}
        </div>

        <div className="flex w-full justify-end items-start gap-2">
          <input type="checkbox" required className="checkbox checkbox-sm checkbox-success [--chkfg:white] text-white " />
          <p className="text-sm font-medium text-gray-700">
            I agree to the <span className="text-blue-600">Terms of Use</span>{" "}
            and <span className="text-blue-600">Privacy Policy.</span>
          </p>
        </div>

<div className="flex justify-center">
<button
          type="submit"
          className="w-max px-10 py-3 bg-green-500 text-white font-bold rounded hover:bg-green-600"
        >
          Register
        </button>
</div>

        <div>
          <p className="text-center">
            <span className="italic">Already have account?</span>{" "}
            <Link
              to={"/account/login"}
              className="text-green-600 hover:underline underline-offset-4 underline"
            >
              login now
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegistrationTrade;
