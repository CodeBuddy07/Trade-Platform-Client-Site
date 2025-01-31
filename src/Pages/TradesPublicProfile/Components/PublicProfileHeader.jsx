import { Link } from "react-router-dom";


const PublicProfileHeader = ({ reviewCount }) => {
    return (
        <div className=" relative ">

            <div className="relative my-4 max-w-60  flex flex-col justify-center">

                <div className="flex items-center justify-center">
                    <img
                        src="https://cdn.pixabay.com/photo/2016/11/29/01/25/adult-1866533_640.jpg" // Replace with actual image URL
                        alt="Profile"
                        className="w-28 h-28 rounded-full border-4 border-gray-200 shadow-md object-cover"
                    />

                </div>


                <h2 className="text-3xl font-bold text-center text-gray-900">CodeBuddy07</h2>
                <div className="flex items-center justify-center gap-1">
                    <span className="text-yellow-400 text-2xl">★★★★★</span>
                    <span className="text-gray-500 text-sm">({reviewCount ? reviewCount : '0'} reviews)</span>
                </div>

            </div>
            <Link to='/my-trade-account/profile'>
                <button className="absolute top-0 right-0 bg-red-500 text-white text-xs px-3 py-1 rounded-full shadow-md transition hover:bg-red-600">
                    Edit
                </button>
            </Link>

            <div>

                {/* User Information Badges */}
                <div className="flex flex-wrap gap-4 justify-center w-full">
                    {[
                        { icon: "📅", text: "Joined Jan 2025" },
                        { icon: "🛠️", text: "Established 2023" },
                        { icon: "📍", text: "Based in London" },
                        { icon: "🏢", text: "Sole Trader" },
                    ].map((item, index) => (
                        <span
                            key={index}
                            className="bg-gray-100 px-4 py-2 rounded-full text-sm flex items-center gap-2 shadow-sm transition hover:bg-gray-200"
                        >
                            {item.icon} {item.text}
                        </span>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default PublicProfileHeader;