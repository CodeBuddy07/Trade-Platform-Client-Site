import { useState } from "react";
import { toast } from "sonner";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";

const HomeAddress = ({ user }) => {
    const [formData, setFormData] = useState({
        homeAddress1: user?.homeAddress?.addressLine1 || "",
        homeAddress2: user?.homeAddress?.addressLine2 || "",
        homeTown: user?.homeAddress?.town || "",
        homeCountry: user?.homeAddress?.country || "",
        homePostCode: user?.homeAddress?.postCode || "",
    });

    const [loading, setLoading] = useState(false);
    const axiosSecure = useAxiosSecure();

    // Handle Input Change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle Form Submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.homeAddress1 || !formData.homeTown || !formData.homeCountry|| !formData.homePostCode) {
            toast.error("Please fill in all required fields.");
            return;
        }

        setLoading(true);

        try {
            const response = await axiosSecure.post("/update-profile", formData);
            toast.success(response.data.message || "Address updated successfully!");
        } catch (error) {
            toast.error("Failed to update address. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-10 lg:px-20 shadow-md rounded-md bg-white p-10">
            {/* Info */}
            <div className="max-w-2xl text-center mx-auto">
                <p className="text-gray-500">
                    We'll use your home address to contact you and verify your identity. Changing your home address
                    will require a verification check.
                </p>
            </div>

            {/* Address Form */}
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Address line 1 <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="homeAddress1"
                            value={formData.homeAddress1}
                            onChange={handleChange}
                            placeholder="Address line 1"
                            className="w-full px-4 py-2 border border-gray-300 bg-gray-50 rounded focus:outline-none focus:ring-1 focus:ring-blue-300"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Address line 2</label>
                        <input
                            type="text"
                            name="homeAddress2"
                            value={formData.homeAddress2}
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
                            name="homeTown"
                            value={formData.homeTown}
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
                            name="homeCountry"
                            value={formData.homeCountry}
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
                            name="homePostCode"
                            value={formData.homePostCode}
                            onChange={handleChange}
                            placeholder="Post Code"
                            className="w-full px-4 py-2 border border-gray-300 bg-gray-50 rounded focus:outline-none focus:ring-1 focus:ring-blue-300"
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={loading}
                    className={`px-10 py-3 text-white rounded-lg shadow-md transition-all duration-200 ${
                        loading ? "bg-gray-400 cursor-not-allowed" : "bg-pink-500 hover:bg-pink-600"
                    }`}
                >
                    {loading ? "Updating..." : "Change Address"}
                </button>
            </form>
        </div>
    );
};

export default HomeAddress;
