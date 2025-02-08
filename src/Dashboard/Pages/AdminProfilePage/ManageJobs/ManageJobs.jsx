import { useState } from 'react';
import JobCard from './Components/JobCard';



const ManageJobs = () => {


    const [activeTab, setActiveTab] = useState("activeJobs");
    const [searchQuery, setSearchQuery] = useState("");


    const jobs = {
        activeJobs: [
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
        ],
        pendingJobs: [
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
        ],
        blockedJobs: [
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
        ],

    };


    const tabs = [

        { key: "activeJobs", label: "Active Jobs" },
        { key: "pendingJobs", label: "Pending Jobs" },
        { key: "blockedJobs", label: "Blocked Jobs" }
    ];


    const filteredData = jobs[activeTab]?.filter((job) =>
        job?.title?.toLowerCase().includes(searchQuery?.toLowerCase())
    );


    return (
        <div>
            <div className=" bg-white space-y-5 px-10 py-6">

                <h4 className="text-2xl font-bold text-center mb-10">Manage Jobs</h4>
                <div>
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
                <div className="">
                    <input
                        type="search"
                        placeholder="Search by email..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}

                        className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:border focus:border-pink-600"
                    />
                </div>
                <h2 className='text-2xl '><span className='text-xl'>Total</span> <span className={`
                    ${activeTab == 'active' ? 'text-green-700' : activeTab == 'notVerified' ? 'text-yellow-600' : 'text-pink-500'} font-semibold p-2 
                    `}>{filteredData?.length} </span><span className='text-xl'>{activeTab} account</span></h2>

            </div>


            <div className='bg-white mt-4 p-10'>

                <div className='grid grid-cols-4 gap-2 gap-y-4'>
                    {
                        filteredData?.length > 0 ? filteredData?.map((job, i) => <JobCard job={job} />) : <div>
                            <h4>No {activeTab} job found</h4>
                        </div>
                    }
                </div>
            </div>

        </div>
    );
};

export default ManageJobs;