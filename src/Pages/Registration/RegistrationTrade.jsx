import { useEffect, useState } from "react";
import { FaCamera } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const RegistrationTrade = () => {
  const [imagePreview, setImagePreview] = useState("");
  const [showCompanyInput, setShowCompanyInput] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [certificationPreview, setCertificationPreview] = useState("");
  const [errors, setErrors] = useState({});
  const [trades, setTrades] = useState([]);
  const [loading, setLoading] = useState(false);

  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    trade: "",
    postcode: "",
    experience: "",
    companyName: "",
    registrationNumber: "",
  });

  useEffect(() => {
    const getTrades = async () => {
      try {
        const res = await axiosSecure.get("/trades");
        setTrades(res.data?.data?.trades);
      } catch (error) {
        console.log(error);
        toast.error(error.data?.message || "something went wrong");
      }
    };

    getTrades();
  }, []);


  const [images, setImages] = useState({
    profileImage: null,
    insuranceImage: null,
    licenseImage: null,
  });

  // Input Change Handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImages({ ...images, profileImage: file });
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleCertificationUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImages({ ...images, licenseImage: file });
      const reader = new FileReader();
      reader.onload = () => setCertificationPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const toggleCompanyInput = () => setShowCompanyInput(!showCompanyInput);

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    formDataToSend.append("profileImage", images.profileImage);
    formDataToSend.append("insuranceImage", images.insuranceImage);
    formDataToSend.append("licenseImage", images.licenseImage);

    if (formData.password === formData.confirmPassword) {
      if (images.profileImage) {
        if (!showCompanyInput) {
          try {
            const response = await axiosSecure.post("/auth/tradesperson/register", formDataToSend );
            toast.success(response.data.message);
            setLoading(false);
            navigate('/');
          } catch (error) {
            console.log(error);
            setLoading(false);
            toast.error(error?.response?.data?.message || " Something went wrong");
          }

        } else {
          if (formData.companyName) {
            if (formData.registrationNumber) {
              if (images.insuranceImage) {
                try {
                  const response = await axiosSecure.post("/auth/tradesperson/register", formDataToSend );
                  toast.success(response.data.message);
                  setLoading(false);
                  navigate('/');
                } catch (error) {
                  console.log(error);
                  setLoading(false);
                  toast.error(error?.response?.data?.message || " Something went wrong");
                }
              } else {
                setLoading(false);
                toast("Company Insurance is Required!");
              }
            } else {
              setLoading(false);
              toast("Company registration number is Required!");
            }
          } else {
            setLoading(false);
            toast("Company name is Required!");
          }
        }
      } else {
        setLoading(false);
        toast("Upload a Profile Image!");
      }
    } else {
      setLoading(false);
      toast("Password & Confirm Password Doesn't match!");
    }

    // try {
    //   const response = await axios.post("/tradesperson/register", formDataToSend, {
    //     headers: { "Content-Type": "multipart/form-data" },
    //   });
    //   console.log("Success:", response.data);
    //   alert("Registration successful!");
    // } catch (error) {
    //   console.error("Error:", error.response?.data || error.message);
    //   alert("Registration failed!");
    // }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="w-full lg:my-10 max-w-4xl bg-white shadow-lg rounded-lg p-8 space-y-8"
      >
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
              src={
                imagePreview ||
                "data:image/jpeg;base64,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"
              }
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
        {errors.profileImage && (
          <p className="text-red-500 text-center text-sm">
            {errors.profileImage}
          </p>
        )}

        {/* Personal Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              onChange={(e) => handleChange(e)}
              name="firstName"
              required
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
              onChange={(e) => handleChange(e)}
              name="lastName"
              required
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
              onChange={(e) => handleChange(e)}
              name="email"
              required
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
              onChange={(e) => handleChange(e)}
              name="phone"
              required
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
              onChange={(e) => handleChange(e)}
              name="password"
              required
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
              onChange={(e) => handleChange(e)}
              name="confirmPassword"
              required
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
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Trade/Profession <span className="text-red-500">*</span>
            </label>
            <select
              required
              onChange={(e) => handleChange(e)}
              name="trade"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Trade</option>
              {
                trades.map((trade)=><option key={trade._id} value={trade._id}>{trade.name}</option>)
              }
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Years of Experience <span className="text-red-500">*</span>
            </label>
            <input
              onChange={(e) => handleChange(e)}
              name="experience"
              required
              type="number"
              placeholder="Years of Experience"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Post Code <span className="text-red-500">*</span>
            </label>
            <input
              onChange={(e) => handleChange(e)}
              name="postcode"
              required
              type="number"
              placeholder="Post code"
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
              required
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
            <div>
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    onChange={(e) => handleChange(e)}
                    name="companyName"
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
                    onChange={(e) => {
                      setImages({
                        ...images,
                        insuranceImage: e.target.files[0],
                      });
                    }}
                    type="file"
                    accept=".jpg,.jpeg,.png"
                    className="w-full px-4 py-2 border rounded"
                  />
                </div>
              </div>
              <div className="mt-2">
                <label className="block text-sm font-medium text-gray-700">
                  Registration Number <span className="text-red-500"></span>
                </label>
                <input
                  onChange={(e) => handleChange(e)}
                  name="registrationNumber"
                  type="text"
                  placeholder="Registration Number"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
          )}
        </div>

        <div className="flex w-full justify-end items-start gap-2">
          <input
            type="checkbox"
            required
            className="checkbox checkbox-sm checkbox-success [--chkfg:white] text-white "
          />
          <p className="text-sm font-medium text-gray-700">
            I agree to the <span className="text-blue-600">Terms of Use</span>{" "}
            and <span className="text-blue-600">Privacy Policy.</span>
          </p>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={loading}
            className="btn w-max px-10 py-3 bg-green-500 text-white font-bold rounded hover:bg-green-600"
          >
            {loading? "Registering..." : "Register"}
          </button>
        </div>

        <div>
          <p className="text-center text-sm text-gray-700">
            <span className="">Already have account?</span>{" "}
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
