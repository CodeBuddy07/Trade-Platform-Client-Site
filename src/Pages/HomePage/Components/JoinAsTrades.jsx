import image from "../../../files/joinAsTrader.jpg";

const JoinAsTrades = () => {
    return (
        <div className="md:px-20 px-5 py-20 bg-gray-100 text-black">
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 p-8 bg-white rounded-xl shadow-lg max-w-7xl mx-auto">
                
                {/* Image Section */}
                <div className="w-full md:w-1/2">
                    <img 
                        className="w-full h-auto object-cover rounded-xl shadow-md" 
                        src={image} 
                        alt="Join as Trades" 
                    />
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 space-y-6">
                    <h3 className="text-3xl font-semibold text-green-600">Looking for More Work?</h3>
                    <p className="text-lg text-gray-700">
                        Expand your business with MyBuilder. Sign up for free and start receiving job opportunities that match your expertise. Whether you're looking for large projects or smaller tasks, you'll find the right leads to grow your business.
                    </p>
                    
                    {/* CTA Button */}
                    <button className="text-lg font-semibold text-white bg-gradient-to-r from-green-500 to-green-700 hover:bg-green-800 rounded-lg px-8 py-3 shadow-md hover:shadow-lg transition duration-300">
                        Join for Free
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JoinAsTrades;
