import { useState } from "react";

// Reusable ToggleSwitch Component
const ToggleSwitch = ({ label, checked, onChange }) => (
    <label className="flex items-center space-x-3 mt-2 cursor-pointer">
        <input type="checkbox" className="sr-only" checked={checked} onChange={onChange} />
        <div
            role="switch"
            aria-checked={checked}
            className={`w-12 h-[23px] flex items-center rounded-full transition-all duration-300 ${checked ? "bg-green-500" : "bg-gray-300"}`}
        >
            <div className={`h-5 w-5 bg-white rounded-full shadow-md transform transition-all duration-300 ${checked ? "translate-x-6" : "translate-x-1"}`}></div>
        </div>
        <span className="text-sm font-medium text-gray-800">{label}</span>
    </label>
);

const Preferences = () => {
    const [receivingLeads, setReceivingLeads] = useState(true);
    const [groupTexts, setGroupTexts] = useState(false);
    const [importantNotifications, setImportantNotifications] = useState(true);
    const [promotionalMaterial, setPromotionalMaterial] = useState(false);
    const [workingFrom, setWorkingFrom] = useState("9:00 AM");
    const [workingTo, setWorkingTo] = useState("5:00 PM");
    const [isAlwaysOpen, setIsAlwaysOpen] = useState(false);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        setUploadedFile(file);
    };

    return (
        <div className="p-6 bg-white text-gray-700 rounded-lg min-h-screen overflow-auto">
            <h2 className="text-2xl font-semibold mb-4">Preferences</h2>

            {/* Busy Status */}
            <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-lg font-semibold">Let us know if you're busy</h3>
                <ToggleSwitch
                    label={receivingLeads ? "Receiving leads as normal" : "Not receiving leads"}
                    checked={receivingLeads}
                    onChange={() => setReceivingLeads(!receivingLeads)}
                />
            </div>

            {/* Working Periods */}
            <div className="bg-gray-100 p-6 rounded-lg mt-6">
                <h3 className="text-lg font-semibold">Working Periods</h3>
                <p className="text-sm text-gray-600">Select your working hours.</p>
                <label className="flex items-center space-x-3 mt-3 cursor-pointer">
                    <input
                        type="checkbox"
                        checked={isAlwaysOpen}
                        onChange={() => setIsAlwaysOpen(!isAlwaysOpen)}
                        className="w-5 h-5"
                    />
                    <span className="text-sm font-medium">Open 24/7 (Always Open)</span>
                </label>

                {/* Working Hours Dropdowns */}
                <div className="flex gap-4 mt-3">
                    <div className="w-1/2">
                        <label className="text-sm font-medium">FROM</label>
                        <select
                            className={`w-full p-2 border rounded ${isAlwaysOpen ? "bg-gray-200 cursor-not-allowed" : ""}`}
                            value={workingFrom}
                            onChange={(e) => setWorkingFrom(e.target.value)}
                            disabled={isAlwaysOpen}
                        >
                            <option>7:00 AM</option>
                            <option>8:00 AM</option>
                            <option>9:00 AM</option>
                            <option>10:00 AM</option>
                        </select>
                    </div>
                    <div className="w-1/2">
                        <label className="text-sm font-medium">TO</label>
                        <select
                            className={`w-full p-2 border rounded ${isAlwaysOpen ? "bg-gray-200 cursor-not-allowed" : ""}`}
                            value={workingTo}
                            onChange={(e) => setWorkingTo(e.target.value)}
                            disabled={isAlwaysOpen}
                        >
                            <option>4:00 PM</option>
                            <option>5:00 PM</option>
                            <option>6:00 PM</option>
                        </select>
                    </div>
                </div>
            </div>


            {/* Notifications */}
            <div className="bg-gray-100 p-6 rounded-lg mt-6">
                <h3 className="text-lg font-semibold">Notifications</h3>
                <ToggleSwitch
                    label="Receive Important Notifications (e.g., job & billing notifications)"
                    checked={importantNotifications}
                    onChange={() => setImportantNotifications(!importantNotifications)}
                />
                <ToggleSwitch
                    label="Receive Promotional Material (e.g., newsletters)"
                    checked={promotionalMaterial}
                    onChange={() => setPromotionalMaterial(!promotionalMaterial)}
                />
            </div>
        </div>
    );
};

export default Preferences;
