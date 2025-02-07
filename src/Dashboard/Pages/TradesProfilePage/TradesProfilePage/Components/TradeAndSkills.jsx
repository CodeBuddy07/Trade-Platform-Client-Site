import { useState, useEffect } from "react";

const TradeAndSkills = ({user}) => {
    const [selectedTrade, setSelectedTrade] = useState("Plumber");
    const [selectedSkills, setSelectedSkills] = useState([]);

    // Fetch the selected skills and selectedTrade from localStorage when the component mounts
    useEffect(() => {
        const storedSkills = JSON.parse(localStorage.getItem("selectedSkills")) || [];
        const storedTrade = localStorage.getItem("selectedTrade") || "Plumber";
        setSelectedSkills(storedSkills);
        setSelectedTrade(storedTrade);
    }, []);

    const trades = [
        {
            name: "Electrician",
            skills: [
                "Wiring and Rewiring",
                "Electrical Panel Upgrade",
                "Lighting Installation",
                "Ceiling Fan Installation",
                "Outdoor and Security Lighting",
                "Electrical Safety Inspections",
                "Smart Home Installation",
                "Generator Installation",
                "Surge Protection",
                "Fire Alarm Systems",
                "EV Charger Installation",
                "CCTV and Access Control Systems"
            ]
        },
        {
            name: "Plumber",
            skills: [
                "Bathroom Installation",
                "Kitchen and WC Plumbing",
                "Electric Showers",
                "Gas Boiler Installation",
                "Guttering and Rainwater Pipe",
                "Plumbing Repair & Maintenance",
                "Power Showers and Pump",
                "Radiator Installation",
                "Solar Heating System",
                "Sprinkler System",
                "Underfloor Heating - Water System",
                "Water Tanks and Immersion Heater",
                "Leak Detection and Repair",
                "Drain Cleaning & Unclogging",
                "Sewer Line Repair & Replacement",
                "Water Softener Installation",
                "Pipe Repair & Replacement",
                "Septic Tank Installation & Maintenance",
                "Sump Pump Installation & Repair",
                "Backflow Prevention & Testing",
                "Water Pressure Adjustment",
                "Emergency Plumbing Services"
            ]
        },
        {
            name: "Joiner",
            skills: [
                "Furniture Making",
                "Cabinet Installation",
                "Window and Door Fitting",
                "Wooden Flooring Installation",
                "Custom Staircases",
                "Skirting and Architraves",
                "Roofing Joinery",
                "Partition Walls",
                "Shopfitting and Commercial Joinery",
                "Decking and Outdoor Structures",
                "Bespoke Woodwork",
                "Timber Frame Construction",
                "Shelving and Storage Solutions",
                "Handrails and Banisters",
                "Cladding and Paneling"
            ]
        },
        {
            name: "Heating Engineer",
            skills: [
                "Gas Boiler Installation & Repair",
                "Central Heating Installation",
                "Radiator Maintenance & Repair",
                "Underfloor Heating Installation",
                "Thermostat Installation & Repair",
                "Heat Pump Installation",
                "Boiler Servicing & Maintenance",
                "Carbon Monoxide Testing",
                "Emergency Heating Repairs",
                "Heating System Design & Optimization"
            ]
        },
        {
            name: "Plasterer",
            skills: [
                "Wall Plastering",
                "Ceiling Plastering",
                "Skimming",
                "Drywall Installation & Repair",
                "Coving & Cornice Installation",
                "Rendering & External Plastering",
                "Venetian Plastering",
                "Textured Finishes",
                "Patch Repairs",
                "Damp Proof Plastering"
            ]
        }
    ];

    const selectedTradeSkills = trades.find((trade) => trade.name === selectedTrade)?.skills || [];

    // Handle skill selection
    const handleSkillSelection = (skill) => {
        setSelectedSkills((prevSkills) => {
            let newSkills;
            if (prevSkills.includes(skill)) {
                newSkills = prevSkills.filter((item) => item !== skill);
            } else {
                newSkills = [...prevSkills, skill];
            }
            // Save the updated selected skills in localStorage
            localStorage.setItem("selectedSkills", JSON.stringify(newSkills));
            return newSkills;
        });
    };

    // Handle select/deselect all skills
    const handleSelectDeselectAll = () => {
        if (selectedSkills.length === selectedTradeSkills.length) {
            // Deselect all skills
            setSelectedSkills([]);
            localStorage.setItem("selectedSkills", JSON.stringify([]));
        } else {
            // Select all skills
            setSelectedSkills(selectedTradeSkills);
            localStorage.setItem("selectedSkills", JSON.stringify(selectedTradeSkills));
        }
    };

    const tradeAndSkills = {
        trade: selectedTrade,
        skills: selectedSkills,
    };

    return (
        <div className="bg-white shadow-md rounded-md p-10 space-y-6">
            <div>
                <label className="block text-sm font-medium text-gray-700">
                    Trade/Profession <span className="text-red-500">*</span>
                </label>
                <select
                    onChange={(e) => {
                        setSelectedTrade(e.target.value);
                        // Save the selected trade in localStorage
                        localStorage.setItem("selectedTrade", e.target.value);
                    }}
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Select a trade</option>
                    {trades.length > 0
                        ? trades.map((trade, i) => (
                            <option
                                key={i}
                                value={trade.name}
                                selected={selectedTrade.toUpperCase() === trade.name.toUpperCase()}
                            >
                                {trade.name}
                            </option>
                        ))
                        : null}
                </select>
            </div>
            <div className="mt-6 space-y-2">
                <p className="text-xl inline">Skills</p>
                <button
                    onClick={handleSelectDeselectAll}
                    className="bg-blue-500 text-white text-sm px-4 py-1 rounded ml-4"
                >
                    {selectedSkills.length === selectedTradeSkills.length ? "Deselect All" : "Select All"}
                </button>
                <div>
                    {selectedTradeSkills.length > 0 ? (
                        <div>
                            {selectedTradeSkills.map((skill, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleSkillSelection(skill)}
                                    className={`${selectedSkills.includes(skill) ? "bg-gray-300 text-white" : "bg-white text-gray-700"
                                        } border border-gray-400 px-4 p-1 m-1 text-xs md:text-sm`}
                                >
                                    <label
                                        className={`flex items-center gap-2 cursor-pointer ${selectedSkills.includes(skill) ? "text-black" : "text-gray-700"
                                            }`}
                                    >
                                        <span
                                            className={`w-6 h-6 rounded-full border-2 ${selectedSkills.includes(skill)
                                                    ? "bg-blue-600 border-blue-600"
                                                    : "bg-white border-gray-400"
                                                } transition-all flex items-center justify-center`} // Apply flex here
                                        >
                                            {/* Custom checkmark */}
                                            {selectedSkills.includes(skill) && (
                                                <span className="w-4 h-4 bg-white rounded-full"></span> // No need for mx-auto or mt-1
                                            )}
                                        </span>
                                        {skill}
                                    </label>
                                </button>
                            ))}
                        </div>
                    ) : (
                        <p>No skills available for this trade.</p>
                    )}
                </div>
            </div>
            <button
                    type="submit"
                    className="px-10 py-3 text-white bg-pink-500 hover:bg-pink-600 rounded-lg shadow-md transition-all duration-200"
                >
                   Save
                </button>
        </div>
    );
};

export default TradeAndSkills;
