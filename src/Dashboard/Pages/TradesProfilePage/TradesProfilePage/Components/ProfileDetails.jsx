import { useState } from "react";
import { FaCamera } from "react-icons/fa";


const ProfileDetails = () => {

    const [imagePreview, setImagePreview] = useState("");
    console.log(imagePreview);

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



    return (
        <div className="space-y-10 px-20 ">

            {/* Image Upload */}
            <div className="flex  gap-10">
                <div>
                    <div className="flex justify-center items-center  relative">
                        <div className="relative group border w-40 h-40">
                            <img
                                src={imagePreview || "https://picsum.photos/200"}
                                alt="Profile"
                                className="w-40 h-40  object-cover "
                            />
                            <label
                                htmlFor="imageInput"
                                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity cursor-pointer"
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
                    <h6 className="text-center mt-1">Profile Photo</h6>

                </div>
                <div className=" flex-1">
                    <textarea
                        placeholder="Write about your trade"
                        className="textarea  focus:outline-none h-40 w-full border border-gray-300 bg-gray-50 p-2 textarea-md  "></textarea>
                    <h6 className="text-start mt-1">Description</h6>
                </div>
            </div>

            <hr className="border-gray-300" />

            <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            First Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="First Name"
                            className="w-full px-4 py-2 border border-gray-300 bg-gray-50 rounded focus:outline-none focus:ring-1 focus:ring-blue-300"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Company Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="w-full px-4 py-2 border border-gray-300 bg-gray-50 rounded focus:outline-none focus:ring-1 focus:ring-blue-300"
                        />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Phone <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="First Name"
                            className="w-full px-4 py-2 border border-gray-300 bg-gray-50 rounded focus:outline-none focus:ring-1 focus:ring-blue-300"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Years of experience <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="w-full px-4 py-2 border border-gray-300 bg-gray-50 rounded focus:outline-none focus:ring-1 focus:ring-blue-300"
                        />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Business Type <span className="text-red-500">*</span>
                        </label>
                        <select className="w-full px-4 py-2 border capitalize border-gray-400 bg-gray-50 rounded focus:outline-none focus:ring-1 focus:ring-blue-300">
                            <option value="Solo Trader">Solo Trader</option>
                            <option value="Partnership">Partnership</option>
                            <option value="Limited Liability Partnership">Limited Liability Partnership</option>
                            <option value="Limited Company">Limited company</option>

                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Employers <span className="text-red-500">*</span>
                        </label>
                        <select className="w-full px-4 py-2 border border-gray-300 bg-gray-50 rounded focus:outline-none focus:ring-1 focus:ring-blue-300">
                            <option value="2-5">2-5</option>
                            <option value="5-10">5-10</option>
                            <option value="10-15">10-15</option>
                            <option value="15-20">15-20</option>
                            <option value="20-30">20-30</option>
                            <option value="30-50">30-50</option>
                            <option value="50+">50+</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Company website URL <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Last Name"
                        className="w-full px-4 py-2 border border-gray-300 bg-gray-50 rounded focus:outline-none focus:ring-1 focus:ring-blue-300"
                    />
                </div>
                <button
                        type="submit"
                        className="px-10 py-3 text-white bg-pink-500 hover:bg-pink-600 rounded-lg shadow-md transition-all duration-200"
                    >
                       Save changes
                    </button>

            </form>

        </div>
    );
};

export default ProfileDetails;