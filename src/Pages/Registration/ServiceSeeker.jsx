import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import axios from "axios"; // Import axios
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { toast } from "sonner";

const ServiceSeeker = () => {
  const [passShow, setPassShow] = useState(false);
  const [passConfirmShow, setPassConfirmShow] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [imagePreview, setImagePreview] = useState("");
  const [image, setImage] = useState(null);
  const [terms, setTerms] = useState(false);

  const axiosSecure = useAxiosSecure();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage( file);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Create FormData
    const form = new FormData(e.target);
    const firstName = form.get("firstName");
    const lastName = form.get("lastName");
    const email = form.get("email");
    const phone = form.get("phone");
    const postCode = form.get("postcode");
    const confirmPassword = form.get("confirmPassword");

    // Collecting form details
    const formDetails = {
      firstName,
      lastName: lastName || "Not provided",
      email,
      phone,
      postCode,
      password,
    };

    const formDataToSend = new FormData();

    Object.entries(formDetails).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    // Append profile image to form data
    if (image) {
      formDataToSend.append("profileImage", image);
    }else{
      toast.error("upload a profile Image!");
      return;
    }

    if(confirmPassword !== password){
      toast.error("Passwords don't match");
      return;
    }

    if(!terms){
      toast.error("Accept terms & conditions.");
      return;
    }

    try {
      // Sending form data to API
      const response = await axiosSecure.post("/auth/customer/register", formDataToSend);
      toast.success(response?.data?.message)
    } catch (error) {
      console.error("Error submitting the form: ", error);
      toast.error(error?.response?.data?.message || "Error submitting the form." );
    }
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
        encType="multipart/form-data" // Important for file upload
      >
        <div>
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Create a Customer Account
          </h2>
          <p className="text-gray-600 text-center">
            Join and Get your work done.
          </p>
        </div>

        <div className="flex justify-center items-center relative">
          <div className="relative group w-36 h-36">
            <img
              src={imagePreview || "data:image/jpeg;base64,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"}
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
              name="imageInput"
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
              required
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
              required
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
              required
            />
          </div>
        </div>

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
              required
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
                required
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
                required
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
            checked={terms}
            onChange={()=>setTerms(!terms)}
            className="h-5 w-5 border-gray-300 rounded"
          />
          <label htmlFor="terms" className="text-sm text-gray-500">
            I agree to the{" "}
            <a href="#" className="text-green-500">
              Terms & Conditions
            </a>
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default ServiceSeeker;
