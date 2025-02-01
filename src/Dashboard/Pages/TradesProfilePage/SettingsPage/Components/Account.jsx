import React, { useState } from 'react';

const Account = () => {
    const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);


    return (
        <div>
        <h2 className="text-xl font-semibold">Account Settings</h2>
        <div className="mt-4">
            <label className="block font-medium">Full Name</label>
            <input type="text" value="Waleed Al Jafar" className="w-full p-2 border rounded mt-1" readOnly />
        </div>
        <div className="mt-4">
            <label className="block font-medium">Email</label>
            <input disabled type="email" value="s**********9@gmail.com" className="w-full p-2 border rounded mt-1" readOnly />
        </div>
        {/* <div className="mt-4">
            <label className="block font-medium">Online Status</label>
            <div className="flex items-center gap-2 mt-1">
                <span className={`h-3 w-3 rounded-full ${isOnline ? "bg-green-500" : "bg-gray-400"}`}></span>
                <p>{isOnline ? "Online" : "Offline"}</p>
               
            </div>
        </div> */}
        <button className="mt-6 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Save Changes</button>

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
                    <h3 className="text-lg font-semibold">Phone Verification</h3>
                    <p className="text-sm text-gray-600">
                        Your phone is verified with Fiverr. Click Edit to change your phone number.
                    </p>
                </div>
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                    Edit
                </button>
            </div>

            {/* Security Question Section */}
            <div className="border-b pb-4 mb-4 flex justify-between items-center">
                <div>
                    <h3 className="text-lg font-semibold">Security Question</h3>
                    <p className="text-sm text-gray-600">
                        Adding a security question provides extra protection for revenue withdrawals.
                    </p>
                </div>
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                    Edit
                </button>
            </div>

            {/* Two-Factor Authentication Section */}
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="text-lg font-semibold flex items-center">
                        Two-Factor Authentication
                        <span className="text-green-500 ml-2 text-sm">Recommended</span>
                    </h3>
                    <p className="text-sm text-gray-600">
                        To help keep your account secure, we'll ask for a code when logging in from a new device.
                    </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={twoFactorEnabled}
                        onChange={() => setTwoFactorEnabled(!twoFactorEnabled)}
                    />
                    <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-green-500 after:absolute after:top-1 after:left-1 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-5"></div>
                </label>
            </div>
        </div>
        </div>
    );
};

export default Account;