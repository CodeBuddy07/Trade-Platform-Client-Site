import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaEdit, FaCheckCircle, FaSave, FaTimes, FaEye } from "react-icons/fa";
import { motion } from 'framer-motion';
import JobCardModal from "./Components/JobCardModal";

const CustomerProfilePage = () => {
    const [isEdit, setIsEdit] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);
    const [activeTab, setActiveTab] = useState("totalJobs");
    const [searchQuery, setSearchQuery] = useState("");
    // const [filter, setFilter] = useState("all");
    const [customer, setCustomer] = useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 234 567 890",
        email: "johndoe@example.com",
        postCode: "HSL 9LZKD",
        verified: true,
        profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
        jobsPosted: 12,
        jobsCompleted: 9,
    });




    // Dummy Data
    const historyData = {
        totalJobs: [
            {
                id: 1,
                owner: {
                    name: "Ruhul Amin",
                    image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600",
                },
                title: "Need a Web Developer for E-commerce Site",
                date: "Jan 31, 2025",
                category: "Web Development",
                description:
                    "Looking for an experienced web developer to build an online store. The project requires a skilled React and Node.js developer to integrate payment gateways and ensure a smooth user experience.",
                location: "Dhaka, Bangladesh",
                price: 20,
                images: [
                    "https://images.pexels.com/photos/70441/pexels-photo-70441.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "https://images.pexels.com/photos/70441/pexels-photo-70441.jpeg?auto=compress&cs=tinysrgb&w=600",
                ],
                contact: { email: "client@example.com", phone: "+880 1234-567890" },
            },
            {
                id: 2,
                owner: {
                    name: "John Doe",
                    image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600",
                },
                title: "Graphic Designer Needed for Branding",
                date: "Jan 30, 2025",
                category: "Graphic Design",
                description:
                    "Need a creative designer for logo, banners, and business cards. The branding should be modern and align with our company’s vision.",
                location: "Chittagong, Bangladesh",
                price: 15,
                images: [
                    "https://images.pexels.com/photos/70441/pexels-photo-70441.jpeg?auto=compress&cs=tinysrgb&w=600",
                ],
                contact: { email: "designer@example.com", phone: "+880 9876-543210" },
            },
            {
                id: 3,
                owner: {
                    name: "Sara Smith",
                    image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600",
                },
                title: "SEO Expert Needed for E-commerce Website",
                date: "Feb 5, 2025",
                category: "Digital Marketing",
                description:
                    "Looking for an SEO expert to optimize product pages and improve search rankings for an e-commerce website.",
                location: "New York, USA",
                price: 30,
                images: [
                    "https://images.pexels.com/photos/70441/pexels-photo-70441.jpeg?auto=compress&cs=tinysrgb&w=600",
                ],
                contact: { email: "seoexpert@example.com", phone: "+1 456-789-0123" },
            },
            {
                id: 4,
                owner: {
                    name: "David Johnson",
                    image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600",
                },
                title: "Mobile App Developer Required",
                date: "Feb 10, 2025",
                category: "Mobile Development",
                description:
                    "Need a Flutter developer to create a cross-platform mobile application with payment integration.",
                location: "London, UK",
                price: 40,
                images: [
                    "https://images.pexels.com/photos/70441/pexels-photo-70441.jpeg?auto=compress&cs=tinysrgb&w=600",
                ],
                contact: { email: "appdev@example.com", phone: "+44 789-456-1230" },
            },
            {
                id: 5,
                owner: {
                    name: "Emma Wilson",
                    image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600",
                },
                title: "Video Editor Needed for YouTube Channel",
                date: "Feb 12, 2025",
                category: "Video Editing",
                description:
                    "Looking for an experienced video editor to edit high-quality YouTube videos with transitions and effects.",
                location: "Sydney, Australia",
                price: 25,
                images: [
                    "https://images.pexels.com/photos/70441/pexels-photo-70441.jpeg?auto=compress&cs=tinysrgb&w=600",
                ],
                contact: { email: "videoedit@example.com", phone: "+61 432-678-901" },
            },
            {
                id: 6,
                owner: {
                    name: "Mark Anderson",
                    image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600",
                },
                title: "Social Media Manager Required",
                date: "Feb 14, 2025",
                category: "Social Media Marketing",
                description:
                    "Looking for a social media expert to manage Instagram, Facebook, and Twitter for our brand.",
                location: "Berlin, Germany",
                price: 22,
                images: [
                    "https://images.pexels.com/photos/70441/pexels-photo-70441.jpeg?auto=compress&cs=tinysrgb&w=600",
                ],
                contact: { email: "smm@example.com", phone: "+49 321-654-9870" },
            },
            {
                id: 7,
                owner: {
                    name: "Alice Green",
                    image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600",
                },
                title: "Content Writer Needed for Blog",
                date: "Feb 18, 2025",
                category: "Content Writing",
                description:
                    "Looking for a professional content writer to create engaging blog articles related to travel and technology.",
                location: "Toronto, Canada",
                price: 18,
                images: [
                    "https://images.pexels.com/photos/70441/pexels-photo-70441.jpeg?auto=compress&cs=tinysrgb&w=600",
                ],
                contact: { email: "writer@example.com", phone: "+1 987-654-3210" },
            },
            {
                id: 8,
                owner: {
                    name: "William Brown",
                    image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600",
                },
                title: "UX/UI Designer Required",
                date: "Feb 20, 2025",
                category: "UI/UX Design",
                description:
                    "Need a UX/UI designer to revamp the design of an existing mobile app for better user experience.",
                location: "San Francisco, USA",
                price: 35,
                images: [
                    "https://images.pexels.com/photos/70441/pexels-photo-70441.jpeg?auto=compress&cs=tinysrgb&w=600",
                ],
                contact: { email: "design@example.com", phone: "+1 234-567-8901" },
            },
            {
                id: 9,
                owner: {
                    name: "Sophia Martinez",
                    image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600",
                },
                title: "Python Developer Needed for AI Project",
                date: "Feb 22, 2025",
                category: "Software Development",
                description:
                    "Hiring a Python developer with experience in AI and machine learning to work on an innovative AI-powered chatbot.",
                location: "Bangalore, India",
                price: 45,
                images: [
                    "https://images.pexels.com/photos/70441/pexels-photo-70441.jpeg?auto=compress&cs=tinysrgb&w=600",
                ],
                contact: { email: "pythondev@example.com", phone: "+91 87654-32109" },
            },
            {
                id: 10,
                owner: {
                    name: "James Wilson",
                    image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600",
                },
                title: "Business Consultant Required",
                date: "Feb 25, 2025",
                category: "Business Consulting",
                description:
                    "Looking for an experienced business consultant to analyze market trends and create a strategy for business growth.",
                location: "Dubai, UAE",
                price: 50,
                images: [
                    "https://images.pexels.com/photos/70441/pexels-photo-70441.jpeg?auto=compress&cs=tinysrgb&w=600",
                ],
                contact: { email: "consultant@example.com", phone: "+971 9876-543210" },
            },
        ],

        drafts: [
            { id: 6, title: "Painting Work" },
            { id: 7, title: "Kitchen Remodeling Job" },
            { id: 8, title: "Bathroom Tiling Design" }
        ],
        accepted: [
            { id: 9, title: "Roof Repair" },
            { id: 10, title: "AC Installation" },
            { id: 11, title: "Home Security System Setup" },
            { id: 12, title: "Hardwood Floor Installation" }
        ],
        completed: [
            { id: 13, title: "Door Fixing" },
            { id: 14, title: "Gutter Cleaning" },
            { id: 15, title: "Fence Installation" },
            { id: 16, title: "Basement Waterproofing" }
        ],
        pending: [
            { id: 17, title: "Window Glass Replacement" },
            { id: 18, title: "Plaster Wall Repair" },
            { id: 19, title: "Chimney Cleaning" }
        ],
        cancelled: [
            { id: 20, title: "Leak Fixing" },
            { id: 21, title: "Tree Removal Service" },
            { id: 22, title: "Driveway Resurfacing" }
        ]
    };


    const tabs = [
        { key: "totalJobs", label: "Total Jobs" },
        { key: "drafts", label: "Drafts" },
        { key: "accepted", label: "Accepted" },
        { key: "completed", label: "Completed" },
        { key: "pending", label: "pending" },
        { key: "cancelled", label: "cancelled" },
    ];

    const filteredData = historyData[activeTab].filter((job) =>
        job?.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const updatingInputs = [
        { type:'text',name: "firstName", label: "First Name", value: '' },
        { type:'text', name: "lastName", label: "Last Name", value: customer.lastName },
        { type:'tel', name: "phone", label: "Phone Number", value: customer.phone },
        { type:'email', name: "email", label: "Email", value: customer.email },
        {  type:'text',name: "postCode", label: "Post Code", value: customer.postCode },
    ]


    return (
        <div>
            <div className="grid grid-cols-12 gap-4 text-gray-700">
                <div className="lg:col-span-4 md:col-span-6 col-span-12 bg-white shadow-lg rounded-xl p-6  relative">
                    {/* Profile Header */}
                    <div className="flex items-center gap-6">
                        <img
                            src={customer.profileImage}
                            alt="Profile"
                            className="w-24 h-24 rounded-full border-4 border-pink-500"
                        />
                        <div>
                            <h2 className="text-2xl font-bold  flex items-center gap-2">
                                {customer.firstName} {customer.lastName}
                                {customer.verified && <FaCheckCircle className="text-green-500" />}
                            </h2>
                            <p className="text-gray-600 flex items-center gap-2">
                                <FaMapMarkerAlt /> {customer.postCode}
                            </p>
                        </div>
                        {/* Edit Button */}

                    </div>


                    {/* Contact Info */}
                    <div className="mt-6 border-t pt-4 space-y-3">
                        <div className="flex items-center gap-3 text-gray-700">
                            <FaPhoneAlt className="text-pink-500" /> {customer.phone}
                        </div>
                        <div className="flex items-center gap-3 text-gray-700">
                            <FaEnvelope className="text-pink-500" /> {customer.email}
                        </div>
                    </div>


                    <button
                        onClick={() => setIsEdit(true)}
                        className="mx-auto mt-10 bg-pink-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-pink-700 transition"
                    >
                        <FaEdit /> Edit Profile
                    </button>
                </div>

                <div className="lg:col-span-8 md:col-span-6 col-span-12 h-full border flex justify-between items-center  bg-white p-4">
                    <div className="grid w-full md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-10">
                        <div className="flex flex-col items-center bg-gray-200 p-8 rounded-md">
                            <h2 className="font-bold">totalJobs</h2>
                            <p className="mt-2 text-gray-700 font-semibold text-xl">30</p>
                        </div>
                        <div className="flex flex-col items-center bg-gray-200 p-8 rounded-md">
                            <h2 className="font-bold text-xl text-gray-700">drafts</h2>
                            <p className="mt-2 text-gray-700 font-semibold text-xl">30</p>
                        </div>
                        <div className="flex flex-col items-center bg-gray-200 p-8 rounded-md">
                            <h2 className="font-bold text-xl text-gray-700">accepted</h2>
                            <p className="mt-2 text-gray-700 font-semibold text-xl">30</p>
                        </div>
                        <div className="flex flex-col items-center bg-gray-200 p-8 rounded-md">
                            <h2 className="font-bold text-xl text-gray-700">completed</h2>
                            <p className="mt-2 text-gray-700 font-semibold text-xl">30</p>
                        </div>
                        <div className="flex flex-col items-center bg-gray-200 p-8 rounded-md">
                            <h2 className="font-bold text-xl text-gray-700">pending</h2>
                            <p className="mt-2 text-gray-700 font-semibold text-xl">30</p>
                        </div>
                        <div className="flex flex-col items-center bg-gray-200 p-8 rounded-md">
                            <h2 className="font-bold text-xl text-gray-700">cancelled</h2>
                            <p className="mt-2 text-gray-700 font-semibold text-xl">30</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-14">
                {/* Header */}
                <div className="f bg-white p-4 rounded-lg">
                    <div className="flex justify-between flex-col lg:flex-row  items-center mb-6">
                        <h2 className="text-2xl font-bold lg:my-0 my-4">Job history</h2>
                        <div className="space-y-3">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.key}
                                    onClick={() => setActiveTab(tab.key)}
                                    
                                    className={`py-2 px-4 text-lg border-b-2 font-semibold ${activeTab === tab.key ? "border-b-2 border-green-600 text-green-600" : "text-gray-500"
                                        } transition-all duration-300`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="mx-6">
                        <input
                            type="search"
                            placeholder="Search jobs..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}

                            className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:border focus:border-pink-600"
                        />
                    </div>
                </div>


                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className=" mt-6"
                >

                    <div className="mt-4 p-10 bg-white space-y-2">
                        {
                            filteredData?.length > 0 ? filteredData.map((job, i) => (
                                <div
                                    key={job?.id}
                                    className={`p-4 flex flex-col lg:flex-row  items-center space-y-4 justify-between shadow-md rounded-lg border border-gray-200 ${i % 2 !== 0 ? "bg-gray-100" : "bg-white"
                                        }`}
                                >
                                    <div className="space-y-1">
                                        <h3 className="text-lg font-semibold text-gray-800">{job?.title}</h3>
                                        <p className="text-sm text-gray-500">Post date : {job?.date ? job.date : 'not given'}</p>
                                    </div>
                                    <button
                                        onClick={() => setSelectedJob(job)}
                                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
                                        <FaEye /> View
                                    </button>

                                </div>
                            )):<div className="pb-20">
                                <h3 className="text-center text-xl font-bold text-gray-600">No jobs found of <span className="ml-2">"{searchQuery}"</span></h3>
                            </div>
                        }
                    </div>

                </motion.div>

            </div>

            {/* Edit Profile Form (Visible if isEdit is true) */}
            {isEdit && (
                <div className="absolute top-0 left-0 w-full  h-full bg-black bg-opacity-40 flex justify-center items-center p-6 rounded-xl shadow-2xl">
                    <div className="w-full max-w-lg bg-white p-6 rounded-xl shadow-lg">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Edit Profile</h3>
                        <div className="flex justify-center items-center mb-4">
                            <img
                                src={customer.profileImage}
                                alt="Profile"
                                className="w-24 h-24 rounded-full border-4 border-pink-500"
                            />
                        </div>
                        {/* Form Fields */}
                        <div className="space-y-6">
                            {updatingInputs?.map((field) => (
                                <div key={field.name} className="relative w-full">
                                    <input
                                        type={field?.type}
                                        name={field.name}
                                        defaultValue={field.value}
                                        disabled={field?.type=='email'}
                                        onChange={(e) => handleInputChange(e)} // Ensure input can change
                                        className={` ${field?.type =='email' && 'cursor-not-allowed'}  peer w-full border-2 border-gray-400 bg-transparent px-3 pt-4 pb-1 text-lg rounded-md focus:border-green-500 focus:outline-none`}
                                        placeholder=" "
                                    />
                                    <label
                                        className={`absolute left-3 transition-all text-lg ${field.value
                                            ? "-top-2 text-sm text-green-500 bg-white px-1"
                                            : "top-4 text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-green-500 peer-focus:bg-white peer-focus:px-1"
                                            }`}
                                    >
                                        {field.label}
                                    </label>
                                </div>

                            ))}
                        </div>
                        {/* Save and Cancel Buttons */}
                        <div className="mt-4 flex justify-between">
                            <button
                                onClick={() => setIsEdit(false)}
                                className="border border-red-600 text-red-700  px-4 py-2 rounded-lg flex items-center gap-2 transition"
                            >
                                <FaTimes /> close
                            </button>
                            <button
                                onClick={() => setIsEdit(false)}
                                className="border text-pink-700 border-pink-600  px-4 py-2 rounded-lg flex items-center gap-2 hover:border-pink-700 transition"
                            >
                                <FaSave /> Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {selectedJob && <JobCardModal job={selectedJob} onClose={() => setSelectedJob(null)} />}



        </div>
    );
};

export default CustomerProfilePage;
