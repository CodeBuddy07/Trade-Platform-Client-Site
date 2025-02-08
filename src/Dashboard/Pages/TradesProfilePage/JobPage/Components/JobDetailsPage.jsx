import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";

const jobs = [
  {
    id: 1,
    owner: {
      name: "Ruhul Amin",
      image: "/owner1.jpg", // Replace with actual image URL
    },
    title: "Need a Web Developer for E-commerce Site",
    date: "Jan 31, 2025",
    category: "Web Development",
    description:
      "Looking for an experienced web developer to build an online store. The project requires a skilled React and Node.js developer to integrate payment gateways and ensure a smooth user experience.",
    location: "Dhaka, Bangladesh",
    price: 20,
    images: ["/job1.jpg", "/job2.jpg"], // Replace with actual image URLs
    contact: { email: "client@example.com", phone: "+880 1234-567890" },
  },
  {
    id: 2,
    owner: {
      name: "John Doe",
      image: "/owner2.jpg", // Replace with actual image URL
    },
    title: "Graphic Designer Needed for Branding",
    date: "Jan 30, 2025",
    category: "Graphic Design",
    description:
      "Need a creative designer for logo, banners, and business cards. The branding should be modern and align with our company’s vision.",
    location: "Chittagong, Bangladesh",
    price: 15,
    images: ["/job3.jpg", "/job4.jpg"], // Replace with actual image URLs
    contact: { email: "designer@example.com", phone: "+880 9876-543210" },
  },
];

const JobDetail = () => {
  const { id } = useParams(); // Get Job ID from URL
  const navigate = useNavigate();
  const [isPurchased, setIsPurchased] = useState(false);


  const userRole = 'admin'

  // Find the job by ID
  const job = jobs.find((job) => job.id === parseInt(id));

  if (!job) {
    return (
      <p className="text-center text-red-500 font-bold mt-10">Job Not Found!</p>
    );
  }

  // Simulate a purchase process
  const handleBuyJob = () => {
    // Deduct user credits logic should be here (For now, we just update state)
    setIsPurchased(true);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded-lg mt-6">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-blue-600 font-semibold mb-4"
      >
        <AiOutlineArrowLeft className="mr-1" /> Back to Jobs
      </button>

      {/* Owner Profile Section (Like a Facebook Post) */}
      <div className="flex items-center mb-4">
        <img
          src={job.owner.image}
          alt={job.owner.name}
          className="w-12 h-12 rounded-full object-cover border"
        />
        <div className="ml-3">
          <h4 className="text-lg font-semibold">{job.owner.name}</h4>
          <p className="text-gray-500 text-sm">{job.date}</p>
        </div>
      </div>

      {/* Job Title */}
      <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
      <p className="text-gray-500">{job.category}</p>

      {/* Job Images */}
      <div className="flex gap-2 mt-4">
        {job.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Job"
            className="w-32 h-32 object-cover rounded-md"
          />
        ))}
      </div>

      {/* Job Description */}
      <p className="mt-4 text-gray-700">{job.description}</p>

      {/* Location */}
      <p className="flex items-center text-gray-600 mt-2">
        <FaMapMarkerAlt className="mr-1 text-red-500" /> {job.location}
      </p>

      {/* Price & Purchase Section */}
      {userRole == 'admin' ? <div>

      

      </div> : !isPurchased ? (
        <button
          onClick={handleBuyJob}
          className="mt-4 w-full bg-green-600 text-white p-2 rounded-lg font-semibold"
        >
          Buy Job for {job.price} Credits
        </button>
      ) : (
        <div className="mt-4 p-4 border rounded-lg bg-gray-100">
          <h3 className="text-lg font-semibold">📞 Contact Details</h3>
          <p className="flex items-center mt-2 text-gray-700">
            <FaPhoneAlt className="mr-2 text-blue-600" /> {job.contact.phone}
          </p>
          <p className="flex items-center mt-2 text-gray-700">
            <FaEnvelope className="mr-2 text-blue-600" /> {job.contact.email}
          </p>
        </div>
      )}
    </div>
  );
};

export default JobDetail;
