import React from 'react';

const TradeManageCard = ({trades}) => {
    return (
        <div className="grid grid-cols-3 gap-10">
                {trades.map((trade, index) => (
                    <div key={index} className="">
                        <div className="overflow-hidden bg-white border border-gray-300 shadow-md rounded-lg">
                            <img
                                src={trade.img}
                                alt="Trade Image"
                                className="object-cover w-full h-56 rounded-t-lg"
                            />
                            <div className="p-6 space-y-4">
                                <h4 className="text-2xl font-semibold text-green-800">
                                    {trade.title}
                                </h4>
                                <hr className="w-12 border-2 border-green-600" />
                                <p className="text-sm">{trade.description}</p>
                                <hr />

                                {/* akhane skills gulo show korte hobe */}
                                {/* <div className="flex flex-wrap gap-2">
                                    {skills.map((skill, index) => (
                                        <span key={index} className="flex items-center bg-gray-200 px-3 py-1 rounded-md text-sm">
                                            {skill}
                                            <FaTimes
                                                className="ml-2 text-red-500 cursor-pointer"
                                                onClick={() => handleRemoveSkill(index)}
                                            />
                                        </span>
                                    ))}
                                </div> */}
                                <hr />
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-semibold">{trade.count}</p>
                                        <p>{trade.location}</p>
                                    </div>
                                    <button className="px-8 py-2 text-lg text-white bg-gradient-to-r from-green-500 to-green-700 rounded-md shadow-md hover:shadow-lg">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
    );
};

export default TradeManageCard;