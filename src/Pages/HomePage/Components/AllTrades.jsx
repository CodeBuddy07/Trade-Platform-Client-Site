import plumber from './../../../files/plumber.jpg';

const AllTrades = () => {
    return (
        <div className="flex flex-col items-center justify-center p-5 py-20 text-gray-700 md:px-10 lg:px-20 bg-white">
            {/* Section Header */}
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-green-800">All Trades</h1>
                <hr className="w-16 mx-auto mt-2 border-2 border-green-600" />
            </div>

            {/* Card Grid */}
            <div className="grid max-w-7xl grid-cols-1 gap-10 p-5 md:grid-cols-2 lg:grid-cols-3">
                {[...Array(3)].map((_, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden transition-transform transform bg-white border border-gray-300 shadow-md rounded-lg hover:scale-105"
                    >
                        {/* Image Section */}
                        <img
                            src={plumber}
                            alt="Trade Image"
                            className="object-cover w-full h-56 rounded-t-lg"
                        />
                        {/* Content Section */}
                        <div className="p-6 space-y-4">
                            <h4 className="text-2xl font-semibold text-green-800">Electrician</h4>
                            <hr className="w-12 border-2 border-green-600" />
                            <p className="text-sm">
                                Ensure your home’s electrical systems are safe and efficient with our
                                expert electricians. From installations to repairs, we handle it all
                                with precision and care.
                            </p>
                            <hr />
                            <div>
                                <p className="font-semibold">28,765 electricians</p>
                                <p>in the UK</p>
                            </div>
                        </div>
                        {/* Button */}
                        <div className="absolute inset-x-0 bottom-0 p-4 text-center">
                            <button className="px-8 py-2 text-lg text-white transition-shadow bg-gradient-to-r from-green-500 to-green-700 rounded-md shadow-md hover:shadow-lg">
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllTrades;
