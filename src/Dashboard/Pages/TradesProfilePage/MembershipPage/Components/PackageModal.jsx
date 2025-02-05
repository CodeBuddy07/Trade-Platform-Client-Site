import { PiShoppingCartSimpleLight } from "react-icons/pi";

const PackageModal = ({ plan, onClose, isVerified }) => {
    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            onClick={onClose} // Close when clicking the background
        >
            <div
                className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl mx-4 sm:mx-0 relative"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
                <button
                    className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
                    onClick={onClose}
                >
                    ✖
                </button>
                <div className="text-center">
                    <p className="text-orange-500 text-3xl flex items-center justify-center"><PiShoppingCartSimpleLight /></p>

                    <h2 className="text-lg font-semibold mt-2">Subscribe to the {plan.name} Package</h2>
                    <p className="mt-2 text-gray-600">
                        The {plan.name} package gives you <strong>{plan.credits} credits per month</strong>, plus:
                    </p>
                    <ul className="text-gray-600 mt-3 text-left space-y-2">
                        {plan.benefits.map((benefit, i) => (
                            <li key={i}>✅ {benefit}</li>
                        ))}
                    </ul>
                    <p className="mt-3 font-bold text-lg">£{plan.price}.00 + VAT / month</p>
                    <p className="text-green-600 font-bold mt-1">Your 1st month is FREE!</p>





                    <div>
                        {
                            isVerified || <div className="bg-red-100 text-red-600 p-3 rounded-md mt-4">
                                ⚠ Please <span className="text-blue-500 underline cursor-pointer">verify</span> your account before selecting a package.
                            </div>
                        }
                    </div>
                    <div className="my-4">
                        {
                            isVerified ? <button
                                className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-md mt-4"
                            // onClick={onClose}
                            >
                                Purchase {plan?.credits} credits
                            </button> : <button
                                className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-md mt-4"
                            // onClick={onClose}
                            >
                                Verify
                            </button>
                        }
                    </div>


                </div>
            </div>
        </div>
    );
};

export default PackageModal;
