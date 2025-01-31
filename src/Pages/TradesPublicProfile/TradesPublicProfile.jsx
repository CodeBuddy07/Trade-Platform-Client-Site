import ReviewSection from "./Components/ReviewSection";
import GalleriesSection from "./Components/GalleriesSection";
import PublicProfileHeader from "./Components/PublicProfileHeader";

const TradesPublicProfile = () => {



    const galleryImages = [
        { link: "https://cdn.pixabay.com/photo/2022/10/23/02/26/hotel-7540353_640.jpg" },
        { link: "https://cdn.pixabay.com/photo/2016/11/29/01/25/adult-1866533_640.jpg" },
        { link: "https://cdn.pixabay.com/photo/2024/01/10/16/18/computer-8499917_640.jpg" },
        { link: "https://cdn.pixabay.com/photo/2012/11/28/10/32/welding-67640_640.jpg" },
        { link: "https://cdn.pixabay.com/photo/2012/11/28/10/32/welding-67640_640.jpg" },
        { link: "https://cdn.pixabay.com/photo/2012/11/28/10/32/welding-67640_640.jpg" },
        { link: "https://cdn.pixabay.com/photo/2012/11/28/10/32/welding-67640_640.jpg" },
    ];

    const reviews = [
        {
            id: 1,
            name: "sharielehman",
            country: "United States",
            profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
            rating: 5,
            date: "2024-01-01",
            reviewText: "Excellent work! I'm really impressed by Ali's dedication and skill...",
        },
        {
            id: 2,
            name: "john_doe",
            profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
            rating: 5,
            date: "2025-01-15",
            reviewText: "Great experience! The seller provided an outstanding solution...",
        },
        {
            id: 3,
            name: "emily_smith",
            profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
            rating: 4,
            date: "2024-01-20",
            reviewText: "Very happy with the service. The delivery was quick and accurate.",
        },
        {
            id: 4,
            name: "alex_jones",
            profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
            rating: 3,
            date: "2024-01-22",
            reviewText: "Good product, but delivery could be improved. Some delays occurred.",
        },
        {
            id: 5,
            name: "kate_wilson",
            profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
            rating: 5,
            date: "2025-01-25",
            reviewText: "Top-notch service, would definitely recommend to my friends!",
        },
        {
            id: 6,
            name: "michael_brown",
            profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
            rating: 2,
            date: "2023-11-15",
            reviewText: "The quality of the product didn't meet my expectations. Disappointing.",
        },
        {
            id: 7,
            name: "susan_davis",
            profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
            rating: 4,
            date: "2025-01-18",
            reviewText: "Good overall experience, but the customer support could be more helpful.",
        },
        {
            id: 8,
            name: "mike_lee",
            profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
            rating: 3,
            date: "2024-01-28",
            reviewText: "The product was fine, but there were some issues with the payment system.",
        },
        {
            id: 9,
            name: "sarah_taylor",
            profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
            rating: 5,
            date: "2024-01-30",
            reviewText: "Absolutely loved it! Excellent quality and service. Worth every penny.",
        },
        {
            id: 10,
            name: "david_martin",
            profilePic: "https://randomuser.me/api/portraits/men/6.jpg",
            rating: 4,
            date: "2024-01-29",
            reviewText: "Overall great experience, but the website was a bit slow during checkout.",
        },
    ];

    const tradeAndSkills = {
        name: "Heating Engineer",
        skills: [
            "Gas Boiler Installation & Repair",
            "Central Heating Installation",
            "Radiator Maintenance & Repair",
            "Underfloor Heating Installation",
            "Thermostat Installation & Repair",
            "Heat Pump Installation",
            "Boiler Servicing & Maintenance",
            "Carbon Monoxide Testing",
            "Emergency Heating Repairs",
            "Heating System Design & Optimization",
        ],
    };

    const reviewCount = reviews?.length


    return (
        <div className="max-w-3xl mt-10 mx-auto text-gray-700 bg-white shadow-2xl rounded-2xl p-8 flex flex-col items-center gap-8 relative overflow-hidden">
            <PublicProfileHeader reviewCount={reviewCount} />


            <div className="w-full space-y-2 px-4">
                <h3 className="text-xl font-semibold">About</h3>
                <p className="text-gray-600 text-md leading-relaxed p-4 bg-gray-200 rounded-md">
                    Passionate full-stack developer specializing in modern web technologies.
                    I love creating seamless user experiences and scalable applications.
                </p>
            </div>

            <div className="w-full space-y-2 px-4">
                <h3 className="text-xl font-semibold">Trade and Skills</h3>

                <div className=" space-y-2">
                    <p className="mt-2">Trade</p>
                    <p>
                        <span className="px-4  py-2 text-sm bg-gray-200 rounded-full text-gray-700 shadow-sm hover:bg-gray-300 transition duration-200">
                            {tradeAndSkills?.name}
                        </span>
                    </p>
                </div>
                <div className=" space-y-2">
                    <p className="mt-2">Skills</p>
                    <div className="flex flex-wrap gap-2">
                        {
                            tradeAndSkills?.skills?.length > 0 ?
                                tradeAndSkills.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-2 text-sm bg-gray-200 rounded-full text-gray-700 shadow-sm hover:bg-gray-300 transition duration-200"
                                    >
                                        {skill}
                                    </span>
                                )) : null
                        }
                    </div>
                </div>

            </div>


            <div className="">
                <GalleriesSection galleryImages={galleryImages} />
            </div>
            <ReviewSection reviews={reviews} />
        </div>
    );
};

export default TradesPublicProfile;
