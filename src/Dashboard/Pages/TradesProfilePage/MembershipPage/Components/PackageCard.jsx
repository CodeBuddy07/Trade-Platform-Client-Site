import { useState } from "react";
import PackageModal from "./PackageModal";


const PackageCard = ({ plan, index,onSelect }) => {



    return (

        <div
            key={index}
            className={`relative w-full border border-gray-50  hover:border hover:border-gray-400 hover:shadow-2xl p-2 duration-300 shadow-sm shadow-gray-900 pt-20 pb-10 bg-gray-100 ${plan.highlight ? " text-black " : ""
                } transition transform hover:bg-white`}

        >
            {plan.highlight && (
                <div className="absolute top-0 left-0 w-full bg-pink-500 text-white text-sm py-1 text-center">
                    recommended
                </div>
            )}

            <div className="flex flex-col justify-between h-full">

                <div className="">
                    <h3 className="text-xl font-semibold text-center">{plan.name}</h3>
                    <p className="text-3xl font-bold text-center mt-3">
                        £{plan.price} <span className="text-sm font-normal">+VAT / month</span>
                    </p>
                    <p className="text-sm text-center">
                        £{plan.perCredit} +VAT per credit
                    </p>

                    <div className="mt-5 text-center">
                        <p className="text-lg font-medium">{plan.credits} credits / month</p>
                    </div>
                    <hr className="border-gray-300 my-4" />
                    <ul className="mt-4 space-y-2 pl-4 text-sm">

                        {plan.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center">
                                ✅ {benefit}
                            </li>
                        ))}
                    </ul>

                </div>
                <div className="flex flex-col gap-6 items-center">

                    <button
                        key={index}
                        className={`w-full mt-6 text-white py-3 ${plan.buttonColor} transition`}
                        aria-label={`Select ${plan.name} plan`}
                        onClick={() => onSelect(plan)}
                    >
                        Select {plan.name} Package
                    </button>


                </div>
            </div>
                 
        </div>

    );
};

export default PackageCard;