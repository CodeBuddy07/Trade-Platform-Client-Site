import React, { useState } from 'react';
import TradesPeopleCard from '../ManageTradesPeople/Components/TradesPeopleCard';
import TradeDetailsModal from './../ManageTradesPeople/Components/TradeDetailsModal';
import CustomerDetailsModal from './Components/CustomerDetailsModal';

const ManageCustomers = () => {


    const [activeTab, setActiveTab] = useState("active");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCustomer, setSelectedCustomer] = useState(null);

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

                <h4 className="text-2xl font-bold text-center mb-10">Manage Customers</h4>
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

                {/* <div className='  gap-x-14 gap-y-4'>
                    {
                        filteredData?.length > 0 ? filteredData?.map((trade, i) => <div key={i}>

                        </div>) : <div>
                            <h4>No {activeTab} Trades People found</h4>
                        </div>
                    }
                </div> */}

                <div className="space-y-4">
                    {filteredData?.length > 0 ?
                        filteredData?.map((customer, i) => (
                            <div key={i} className={`${i % 2 !== 0 ? 'bg-gray-200' : ''} flex items-center flex-col md:flex-row gap-4 justify-between p-3 border rounded-lg hover:shadow-lg transition-al`}>
                                <div className="flex items-center">

                                    <div className="pr-4 border-r border-gray-300">
                                        <span className="text-xl font-medium text-gray-800">
                                            {i + 1}.
                                        </span>
                                    </div>
                                    <div>
                                        <img src={customer?.photoUrl} className='w-14 h-14 object-cover' alt="" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-xl font-medium text-gray-800">
                                            {customer.firstName} {customer?.lastName}
                                        </h3>
                                        <p className="text-sm text-gray-600">{customer?.email}</p>
                                    </div>
                                </div>
                                <button

                                    onClick={() => setSelectedCustomer(customer)}
                                    className="px-4 py-2 bg-pink-600 text-white text-sm font-medium rounded-lg hover:bg-pink-700 transition">
                                    View details
                                </button>
                            </div>
                        )) : null}
                </div>
            </div>

            {selectedCustomer && <CustomerDetailsModal selectedCustomer={selectedCustomer} onClose={() => setSelectedCustomer(null)} />}
        </div>
    );
};

export default ManageCustomers;

