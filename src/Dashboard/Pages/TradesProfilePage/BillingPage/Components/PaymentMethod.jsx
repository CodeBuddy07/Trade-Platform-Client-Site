import React from 'react';
import cards from './../../../../../files/cards.png'; // Ensure the path is correct
import { div } from 'framer-motion/client';

const PaymentMethod = () => {
    return (
        <div className="  flex flex-col items-center justify-center py-10 px-4">
            {/* Header Section Outside the Card */}
            <div className="text-center mb-8 max-w-md">
                <h2 className="text-3xl font-semibold text-gray-900 mb-2">Add Your Payment Method</h2>
                <p className="text-gray-600 text-sm text-center">
                    To access our job purchasing services, you must have an active and billable debit or credit card linked to your account.
                    For more details, please visit our FAQ section.
                </p>


            </div>

            {/* Payment Card Section */}
            <div className='flex justify-center items-center'>
                <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">
                    {/* Payment Methods Section */}
                    <h4 className="text-lg font-medium text-gray-800 mb-4">Card Details</h4>

                    {/* Payment Form */}
                    <form className="space-y-6">
                        {/* Name on Card */}
                        <div>
                            <label htmlFor="cardName" className="block text-sm font-medium text-gray-700">Name on Card</label>
                            <input
                                type="text"
                                id="cardName"
                                placeholder="Enter Name"
                                className="w-full p-4 mt-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        {/* Card Number */}
                        <div>
                            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
                            <input
                                type="text"
                                id="cardNumber"
                                placeholder="1234 5678 9101 1121"
                                className="w-full p-4 mt-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        {/* Expiry Date and CVC */}
                        <div className="flex justify-between gap-4">
                            <div className="w-1/2">
                                <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">Expiry Date</label>
                                <input
                                    type="text"
                                    id="expiryDate"
                                    placeholder="MM/YY"
                                    className="w-full p-4 mt-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                            </div>
                            <div className="w-1/2">
                                <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">CVC</label>
                                <input
                                    type="text"
                                    id="cvc"
                                    placeholder="CVC"
                                    className="w-full p-4 mt-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                            </div>
                        </div>

                        {/* Add Card Button */}
                        <div>
                            <button className="w-full py-3 bg-pink-600 text-white rounded-lg hover:bg-green-700 focus:outline-none transition-all duration-200">
                                Add Card
                            </button>
                        </div>
                    </form>
                </div>

                {/* Cards Image */}
                <div className="w-full max-w-md mt-8">
                    <img src={cards} alt="Payment Cards" className="w-full rounded-lg " />
                </div>
            </div>
            <p className="text-gray-700 font-medium mt-10">
                🔒 Your information is securely encrypted for your protection.
            </p>
        </div>
    );
};

export default PaymentMethod;
