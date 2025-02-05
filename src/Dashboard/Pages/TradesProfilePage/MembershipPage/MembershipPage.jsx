import React, { useState } from "react";
import PackageCard from "./Components/PackageCard";
import PackageModal from "./Components/PackageModal";



const MembershipPage = () => {

    const [selectedPlan, setSelectedPlan] = useState(null);

    const plans = [
        {
            name: "Basic",
            price: 20,
            credits: 15,
            get perCredit() {
                return (this.price / this.credits).toFixed(2);
            },
            benefits: ["Profile Page", "Directory listing", "Daily job alerts"],
            buttonColor: "bg-pink-500 hover:bg-pink-600",
            highlight: false,
        },
        {
            name: "Advanced",
            price: 45,
            get perCredit() {
                return (this.price / this.credits).toFixed(2);
            },
            credits: 40,
            benefits: ["Profile Page", "Directory listing", "Instant job alerts"],
            buttonColor: "bg-green-600 hover:bg-green-700",
            highlight: false,
        },
        {
            name: "Elite",
            price: 70,
            get perCredit() {
                return (this.price / this.credits).toFixed(2);
            },
            credits: 65,
            benefits: ["Profile Page", "Directory listing", "Priority job alerts"],
            buttonColor: "bg-green-600 hover:bg-green-700",
            highlight: true, // This will be emphasized
        },
        {
            name: "Unlimited",
            price: 175,
            perCredit: "Unlimited",
            credits: "Unlimited",
            benefits: ["Profile Page", "Directory listing", "Instant & unlimited job alerts"],
            buttonColor: "bg-green-600 hover:bg-green-700",
            highlight: false,
        },
    ];



// user verification korece naki korenai ai data ta lagbe apatoto constant rakhlam
const isVerified = true


    return (
        <div className="py-10 px-4 bg-white text-gray-700">
            <h2 className="text-3xl font-bold text-center my-10">
                Choose Your Membership Plan
            </h2>

            <div className="grid grid-cols-1 mt-32  md:grid-cols-2 lg:grid-cols-4 lg:gap-1 md:gap-y-20  md:gap-2 gap-24">
                {plans.map((plan, index) =><PackageCard plan={plan} key={index} onSelect={() => setSelectedPlan(plan)} ></PackageCard>
                )}
            </div>

            {selectedPlan && <PackageModal isVerified={isVerified} plan={selectedPlan} onClose={() => setSelectedPlan(null)} />}
        </div>
    );
};

export default MembershipPage;
