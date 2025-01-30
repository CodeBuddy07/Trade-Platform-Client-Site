import React from 'react';

const HomeAddress = () => {
    return (
        <div className="space-y-10 lg:px-20 bg-white p-10">

            <div className='max-w-2xl text-center mx-auto'>
                <p className='text-gray-500'>We'll use your home address to contact you and verify your identity. Changing your home address will require a verification check.</p>
            </div>
            <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Address line 1 <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Address line 1"
                            className="w-full px-4 py-2 border border-gray-300 bg-gray-50 rounded focus:outline-none focus:ring-1 focus:ring-blue-300"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Address line 2 <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Address line 2"
                            className="w-full px-4 py-2 border border-gray-300 bg-gray-50 rounded focus:outline-none focus:ring-1 focus:ring-blue-300"
                        />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Town <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Town"
                            className="w-full px-4 py-2 border border-gray-300 bg-gray-50 rounded focus:outline-none focus:ring-1 focus:ring-blue-300"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Country <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="w-full px-4 py-2 border border-gray-300 bg-gray-50 rounded focus:outline-none focus:ring-1 focus:ring-blue-300"
                        />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Post Code <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Post Code"
                            className="w-full px-4 py-2 border border-gray-300 bg-gray-50 rounded focus:outline-none focus:ring-1 focus:ring-blue-300"
                        />
                    </div>
                    {/*  */}
                </div>

                <button
                    type="submit"
                    className="px-10 py-3 text-white bg-pink-500 hover:bg-pink-600 rounded-lg shadow-md transition-all duration-200"
                >
                    Change Address
                </button>

            </form>

        </div>
    );
};

export default HomeAddress;