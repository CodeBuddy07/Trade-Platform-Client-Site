import React from 'react';
import { FaEye } from 'react-icons/fa';

const TradesPeopleCard = ({ trade, setSelectedTrade }) => {
    return (
        <div className="bg-gray-50 p-2 rounded-md shadow-md hover:scale-105 duration-200 shadow-gray-400 flex items-center">
            <img
                src={trade?.photoUrl}
                alt="Aaradhya Anand"
                className="w-32 h-32  object-cover mr-6"
            />
            <div className="flex items-center  w-full">
                <div className='w-full '>
                    <p className="text-pink-600 font-semibold">Name : </p>
                    <p className='text-sm'>{trade?.firstName} {trade?.lastName}</p>
                    <p className="text-pink-600 font-semibold mt-2">Trade Category</p>
                    <p className='text-sm'>{trade?.trade}</p>
                    <p className="text-pink-600 font-semibold mt-2">Phone</p>
                    <p className='text-sm'>{trade?.phone}</p>
                </div>
                <div className=''>
                    <p className="text-pink-600 font-semibold">Email</p>
                    <p className='text-sm'>{trade?.email}</p>
                    <p className="text-pink-600 font-semibold mt-2">Address</p>
                    <p className='text-sm'>
                        E/7 Bhavna Society, Ajwa Road, Opp Mahavir Hall
                    </p>

                    <div className='w-full mt-4'>
                        <button
                            onClick={() => setSelectedTrade(trade)}
                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-t hover:ssc105
                         from-gray-500 to-gray-700 text-white text-sm font-medium rounded-sm shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
                            <FaEye /> View details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TradesPeopleCard;