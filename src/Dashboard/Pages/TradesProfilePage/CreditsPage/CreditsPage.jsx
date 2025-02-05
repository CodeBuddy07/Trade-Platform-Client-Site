import React, { useState } from "react";
import CreditModal from "./Components/CreditModal";

const CreditsPage = () => {


    const [selectedCredit, setSelectedCredit] = useState(null);

    const credits = [
        { credits: 10, price: 12.5, perCredit: 1.25 },
        { credits: 20, price: 25, perCredit: 1.25 },
        { credits: 45, price: 50, perCredit: 1.11 },
    ]


    // user verified or not
    const isVerified = true

    return (
        <div className="min-h-screen flex text-gray-700 flex-col items-center justify-center p-8 rounded-md bg-white">
            <h1 className="text-4xl font-semibold  mb-10">My Credits</h1>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 w-full">
                {/* Remaining Credits Card */}
                <div className="bg-gray-100 md:col-span-4 col-span-12 p-8  text-center">
                    <h2 className="text-lg font-semibold ">Remaining Credits</h2>
                    <p className="text-6xl font-semibold  mt-3">1</p>
                    <p className="text-sm  mt-2">Need more credits? Purchase now.</p>
                    {/* <a href="#" className="text-blue-500 text-sm mt-3 inline-block hover:underline transition">
            View usage details
          </a> */}
                </div>

                {/* Purchase Packages Section */}
                <div className="bg-gray-100 p-8 md:col-span-8 col-span-12 ">
                    <h2 className="text-2xl font-medium  text-center mb-6">Buy More Credits</h2>
                    <div className="space-y-6">
                        {credits?.length > 0 ? credits?.map((pack, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between p-5 bg-white shadow-md hover:shadow-lg transition"
                            >
                                <div>
                                    <h3 className="text-2xl font-medium">{pack.credits} Credits</h3>
                                    <p className="text-sm">£{pack.price.toFixed(2)} + VAT</p>
                                    <p className="text-xs text-gray-500">£{pack.perCredit.toFixed(2)} per credit</p>
                                </div>
                                <button
                                onClick={()=>setSelectedCredit(pack)}
                                className="bg-pink-600 hover:scale-105 duration-300 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition">
                                    Buy Now
                                </button>
                            </div>
                        )) : 'no credit added yet'}
                    </div>

                </div>
            </div>
            {
                selectedCredit && <CreditModal isVerified={isVerified} selectedCredit={selectedCredit} onClose={() => setSelectedCredit(null)} />
            }
        </div>
    );
};

export default CreditsPage;

