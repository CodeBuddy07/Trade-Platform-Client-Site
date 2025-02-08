import React, { useState } from 'react';
import TradesPeopleCard from './Components/TradesPeopleCard';
import TradeDetailsModal from './Components/TradeDetailsModal';

const ManageTradesPeople = () => {


    const [activeTab, setActiveTab] = useState("active");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedTrade, setSelectedTrade] = useState(null);

    const tradesPeoples = {
        "active": [
            {
                "firstName": "John",
                "lastName": "Doe",
                "email": "johndoe@example.com",
                "phone": "1234567890",
                "password": "Password123!",
                "confirmPassword": "Password123!",
                "trade": "Electrician",
                "postcode": "12345",
                "status": "notVerified",
                "isSuspended": false,
                "experience": "5 years",
                "status": "active",
                "isSuspended": false,
                "companyName": "Doe Electricals",
                "registrationNumber": "REG12345",
                "photoUrl": "https://images.pexels.com/photos/6345317/pexels-photo-6345317.jpeg?auto=compress&cs=tinysrgb&w=600"
            },
            {
                "firstName": "Jane",
                "lastName": "Smith",
                "email": "janesmith@example.com",
                "phone": "9876543210",
                "password": "SecurePass456!",
                "confirmPassword": "SecurePass456!",
                "trade": "Plumber",
                "postcode": "67890",
                "status": "active",
                "isSuspended": false,
                "experience": "8 years",
                "companyName": "Smith Plumbing",
                "registrationNumber": "REG67890",
                "photoUrl": "https://images.pexels.com/photos/6345317/pexels-photo-6345317.jpeg?auto=compress&cs=tinysrgb&w=600"
            },
            {
                "firstName": "Michael",
                "lastName": "Brown",
                "email": "michaelbrown@example.com",
                "phone": "4561237890",
                "password": "MyPass789@",
                "confirmPassword": "MyPass789@",
                "trade": "Carpenter",
                "postcode": "34567",
                "status": "active",
                "isSuspended": false,
                "experience": "10 years",
                "companyName": "Brown Woodworks",
                "registrationNumber": "REG34567",
                "photoUrl": "https://images.pexels.com/photos/6345317/pexels-photo-6345317.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
        ],
        "notVerified": [
            {
                "firstName": "Emily",
                "lastName": "Davis",
                "email": "emilydavis@example.com",
                "phone": "3216549870",
                "password": "SafePass321!",
                "confirmPassword": "SafePass321!",
                "trade": "Painter",
                "postcode": "78901",
                "status": "notVerified",
                "isSuspended": false,
                "experience": "6 years",
                "companyName": "Davis Painting",
                "registrationNumber": "REG78901",
                "photoUrl": "https://images.pexels.com/photos/6345317/pexels-photo-6345317.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
        ],
        "suspended": [
            {
                "firstName": "Robert",
                "lastName": "Wilson",
                "email": "robertwilson@example.com",
                "phone": "7418529630",
                "password": "PassWord963@",
                "confirmPassword": "PassWord963@",
                "trade": "Welder",
                "postcode": "15975",
                "status": "suspended",
                "isSuspended": false,
                "experience": "7 years",
                "companyName": "Wilson Welding",
                "registrationNumber": "REG15975",
                "photoUrl": "https://images.pexels.com/photos/6345317/pexels-photo-6345317.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
        ]
    };




    const tabs = [

        { key: "active", label: "Active" },
        { key: "notVerified", label: "notVerified" },
        { key: "suspended", label: "Suspended" }
    ];


    const filteredData = tradesPeoples[activeTab]?.filter((trade) =>
        trade?.email?.toLowerCase().includes(searchQuery?.toLowerCase())
    );


    return (
        <div>
            <div className=" bg-white space-y-5 px-10 py-6">

                <h4 className="text-2xl font-bold text-center mb-10">Manage Trades People</h4>
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

                <div className='grid grid-cols-2  gap-x-14 gap-y-4'>
                    {
                        filteredData?.length > 0 ? filteredData?.map((trade, i) => <TradesPeopleCard key={i} trade={trade} setSelectedTrade={setSelectedTrade}></TradesPeopleCard>) : <div>
                            <h4>No {activeTab} Trades People found</h4>
                        </div>
                    }
                </div>
            </div>

            {selectedTrade && <TradeDetailsModal selectedTrade={selectedTrade} onClose={() => setSelectedTrade(null)} />}
        </div>
    );
};

export default ManageTradesPeople;