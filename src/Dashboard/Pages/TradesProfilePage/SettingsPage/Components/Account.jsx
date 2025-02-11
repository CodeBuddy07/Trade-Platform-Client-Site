import React, { useState } from 'react';
import Preferences from './Preferences';

const Account = () => {
    const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);


    return (
        <div>




            <div className=" bg-white  rounded-lg">
                <h2 className="text-xl font-semibold mt-10 mb-6">Security</h2>
                {/* Change Password Section */}
                <div className="border-b pb-4 mb-4">
                    <h3 className="  mb-2">Change Password</h3>
                    <form className="space-y-3">
                        <input
                            type="password"
                            placeholder="Current Password"
                            className="w-full p-2 border rounded"
                        />
                        <input
                            type="password"
                            placeholder="New Password"
                            className="w-full p-2 border rounded"
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="w-full p-2 border rounded"
                        />
                        <p className="text-sm text-gray-500">
                            8 characters or longer. Combine upper and lowercase letters and numbers.
                        </p>
                        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                            Save Changes
                        </button>
                    </form>
                </div>

                {/* Phone Verification Section */}
                <div className="border-b pb-4 mb-4 flex justify-between items-center">
                    <div>
                        <h3 className="text-lg font-semibold">Email Verification</h3>
                        <p className="text-sm text-gray-600">
                            Your phone is verified with Fiverr. Click Edit to change your phone number.
                        </p>
                    </div>
                    <button className="bg-gray-100 text-black px-4 py-2 rounded hover:bg-gray-200">
                        Verify now
                    </button>
                </div>
                <Preferences />



            </div>
        </div >
    );
};

export default Account;