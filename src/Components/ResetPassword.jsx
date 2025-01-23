import React, { useState } from "react";

const ResetPassword = () => {
    const [showNotice, setShowNotice] = useState(false);

    const toggleNotice = () => {
        setShowNotice(!showNotice);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            {/* Modal for Notice */}
            {showNotice && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">
                            Password Reset Instructions
                        </h2>
                        <p className="text-sm text-gray-600">
                            Enter your email below and press the reset button. Then, check your email, open the link, and update your password.
                        </p>
                        <button
                            className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                            onClick={toggleNotice}
                        >
                            Got it
                        </button>
                    </div>
                </div>
            )}

            {/* Reset Password Form */}
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                    Reset Password
                </h2>
                <form className="space-y-5">
                    {/* Email Input */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-600 mb-1"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 text-gray-800 bg-gray-100 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                            required
                        />
                    </div>

                    {/* Reset Button */}
                    <button
                        type="submit"
                        className="w-full py-3 text-white bg-green-500 hover:bg-green-600 rounded-lg shadow-md transition-all duration-200"
                        onClick={(e) => {
                            e.preventDefault();
                            toggleNotice();
                        }}
                    >
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;
