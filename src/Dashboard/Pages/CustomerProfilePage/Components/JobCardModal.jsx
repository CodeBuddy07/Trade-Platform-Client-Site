import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5"; 

const JobCardModal = ({ job, onClose }) => {
    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4"
            onClick={onClose} 
        >
            <div
                className="relative w-full sm:w-3/4 md:w-2/3 lg:w-1/2 max-h-[90vh] bg-white shadow rounded-lg p-6 overflow-y-auto"
                onClick={(e) => e.stopPropagation()} 
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 p-2 text-gray-600 hover:text-black"
                >
                    <IoClose size={24} />
                </button>

              

                {/* Owner Profile Section */}
                <div className="flex items-center mb-4">
                    <img
                        src={job?.owner.image}
                        alt={job?.owner.name}
                        className="w-12 h-12 rounded-full object-cover border"
                    />
                    <div className="ml-3">
                        <h4 className="text-lg font-semibold">{job?.owner.name}</h4>
                        <p className="text-gray-500 text-sm">{job?.date}</p>
                    </div>
                </div>

                {/* Job Title */}
                <h2 className="text-2xl font-bold mb-2">{job?.title}</h2>
                <p className="text-gray-500">{job?.category}</p>

                {/* Job Images */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4">
                    {job?.images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt="Job"
                            className="w-full h-28 object-cover rounded-md"
                        />
                    ))}
                </div>

                {/* Job Description */}
                <p className="mt-4 text-gray-700">{job?.description}</p>

                {/* Location */}
                <p className="flex items-center text-gray-600 mt-2">
                    <FaMapMarkerAlt className="mr-1 text-red-500" /> {job?.location}
                </p>

                {/* Contact Details */}
                <div className="mt-4 p-4 border rounded-lg bg-gray-100">
                    <h3 className="text-lg font-semibold">📞 Contact Details</h3>
                    <p className="flex items-center mt-2 text-gray-700">
                        <FaPhoneAlt className="mr-2 text-blue-600" /> {job?.contact.phone}
                    </p>
                    <p className="flex items-center mt-2 text-gray-700">
                        <FaEnvelope className="mr-2 text-blue-600" /> {job?.contact.email}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default JobCardModal;
