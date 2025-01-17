import { useState } from 'react';
import banner from './../../files/banner.png'
import { CiSearch } from 'react-icons/ci';

const Banner = () => {

    const [showText, setShowText] = useState(false)

    return (
        <div>
            <div
                className="hero h-[600px]"
                style={{
                    // backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
                    backgroundImage: "url(https://cdn.pixabay.com/photo/2021/06/24/11/18/background-6360867_960_720.png)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Find Tradespeople,
                            compare up to 3 quotes!</h1>
                        <p className="mb-5">
                            It's FREE and there are no obligations
                        </p>
                        <div>
                            <div className="flex items-center justify-between bg-white border border-gray-300 rounded-md shadow-md px-4 py-2 max-w-md mx-auto">
                                {/* Search Icon */}
                                <div className="flex items-center text-gray-400">
                                <CiSearch size={30}></CiSearch> 
                                </div>

                                {/* Input Field */}
                                <input
                                    type="text"
                                    placeholder="Enter your postcode"
                                    className="flex-grow px-2 text-gray-700 focus:outline-none"
                                />

                                {/* Button */}
                                <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;