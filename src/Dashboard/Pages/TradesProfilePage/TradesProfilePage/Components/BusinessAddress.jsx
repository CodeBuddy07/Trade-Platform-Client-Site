import { useState } from "react";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";
import { toast } from "sonner";

const BusinessAddress = ({ user }) => {
  const [businessAddress, setBusinessAddress] = useState(true);
  const [formData, setFormData] = useState({
    businessAddressLine1: user?.homeAddress?.addressLine1 || "",
    businessAddressLine2: user?.homeAddress?.addressLine2 || "",
    businessTown: user?.homeAddress?.town || "",
    businessCountry: user?.homeAddress?.country || "",
    businessPostCode:  user?.homeAddress?.postCode || "",
  });

  const axiosSecure = useAxiosSecure();

  // Mapping home address from user object (change these keys if needed)
  const homeAddress = {
    businessAddressLine1: user?.homeAddress?.addressLine1 || "",
    businessAddressLine2: user?.homeAddress?.addressLine2 || "",
    businessTown: user?.homeAddress?.town || "",
    businessCountry: user?.homeAddress?.country || "",
    businessPostCode: user?.homeAddress?.postCode || "",
  };

  // Handle Checkbox Change
  const handleCheckboxChange = () => {
    setBusinessAddress(!businessAddress);
    if (!businessAddress) {
      // Reset form if unchecked
      setFormData({
        businessAddressLine1: "",
        businessAddressLine2: "",
        businessTown: "",
        businessCountry: "",
        businessPostCode: "",
      });
    } else {
      // Copy home address to business address fields
      setFormData(homeAddress);
    }
  };

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit Business Address to API
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosSecure.post("/update-profile", formData);

      if (response?.data?.success) {
        toast.success("Business address updated successfully!");
      } else {
        toast.error("Failed to update business address.");
      }
    } catch (error) {
      console.error("Error updating business address:", error);
      toast.error("Failed to update business address.");
    }
  };

  return (
    <div className="space-y-10 lg:px-20 bg-white shadow-md rounded-md p-10">
      <div className="flex items-center">
        <input
          type="checkbox"
          id="sameAsHome"
          checked={businessAddress}
          onChange={handleCheckboxChange}
          className="w-4 h-4 cursor-pointer text-green-500 border-gray-300 rounded focus:ring-2 focus:ring-green-400"
        />
        <label htmlFor="sameAsHome" className="ml-2 text-sm text-gray-600">
          <span className="text-[18px]">Same as home address</span>
        </label>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {!businessAddress && (
          <>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Address line 1 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="businessAddressLine1"
                  value={formData.businessAddressLine1}
                  onChange={handleChange}
                  placeholder="Address line 1"
                  className="w-full px-4 py-2 border border-gray-300 bg-gray-50 rounded focus:outline-none focus:ring-1 focus:ring-blue-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Address line 2 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="businessAddressLine2"
                  value={formData.businessAddressLine2}
                  onChange={handleChange}
                  placeholder="Address line 2"
                  className="w-full px-4 py-2 border border-gray-300 bg-gray-50 rounded focus:outline-none focus:ring-1 focus:ring-blue-300"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Town <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="businessTown"
                  value={formData.businessTown}
                  onChange={handleChange}
                  placeholder="Town"
                  className="w-full px-4 py-2 border border-gray-300 bg-gray-50 rounded focus:outline-none focus:ring-1 focus:ring-blue-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Country <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="businessCountry"
                  value={formData.businessCountry}
                  onChange={handleChange}
                  placeholder="Country"
                  className="w-full px-4 py-2 border border-gray-300 bg-gray-50 rounded focus:outline-none focus:ring-1 focus:ring-blue-300"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Post Code <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="businessPostCode"
                  value={formData.businessPostCode}
                  onChange={handleChange}
                  placeholder="Post Code"
                  className="w-full px-4 py-2 border border-gray-300 bg-gray-50 rounded focus:outline-none focus:ring-1 focus:ring-blue-300"
                />
              </div>
            </div>
          </>
        )}
        <button
          type="submit"
          className="px-10 py-3 text-white bg-pink-500 hover:bg-pink-600 rounded-lg shadow-md transition-all duration-200"
        >
          Change Address
        </button>
      </form>
    </div>
  );
};

export default BusinessAddress;
