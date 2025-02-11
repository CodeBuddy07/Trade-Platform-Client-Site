import { useState } from "react";

const Preferences = () => {
    const [receivingLeads, setReceivingLeads] = useState(true);
    const [importantNotifications, setImportantNotifications] = useState(true);
    const [promotionalMaterial, setPromotionalMaterial] = useState(false);

    return (
        <div className="p-6 bg-white text-gray-700 rounded-lg ">
            <h2 className="text-2xl font-semibold mb-4">Preferences</h2>

            {/* Busy Status */}
            <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-lg font-semibold">Let us know if you're busy</h3>

                <label className="flex items-center space-x-3 mt-2 cursor-pointer">
                    <input 
                        type="checkbox" 
                        className="sr-only" 
                        checked={receivingLeads} 
                        onChange={() => setReceivingLeads(!receivingLeads)} 
                    />
                    <div
                        role="switch"
                        aria-checked={receivingLeads}
                        className={`w-12 h-[23px] flex items-center rounded-full transition-all duration-300 ${receivingLeads ? "bg-green-500" : "bg-gray-300"}`}
                    >
                        <div className={`h-5 w-5 bg-white rounded-full shadow-md transform transition-all duration-300 ${receivingLeads ? "translate-x-6" : "translate-x-1"}`}></div>
                    </div>
                    <span className="text-sm font-medium text-gray-800">
                        {receivingLeads ? "Receiving leads as normal" : "Not receiving leads"}
                    </span>
                </label>

                <h3 className="text-lg font-semibold mt-4">Notifications</h3>

                <label className="flex items-center space-x-3 mt-2 cursor-pointer">
                    <input 
                        type="checkbox" 
                        className="sr-only" 
                        checked={importantNotifications} 
                        onChange={() => setImportantNotifications(!importantNotifications)} 
                    />
                    <div
                        role="switch"
                        aria-checked={importantNotifications}
                        className={`w-12 h-[23px] flex items-center rounded-full transition-all duration-300 ${importantNotifications ? "bg-green-500" : "bg-gray-300"}`}
                    >
                        <div className={`h-5 w-5 bg-white rounded-full shadow-md transform transition-all duration-300 ${importantNotifications ? "translate-x-6" : "translate-x-1"}`}></div>
                    </div>
                    <span className="text-sm font-medium text-gray-800">
                        Receive Important Notifications (e.g., job & billing notifications)
                    </span>
                </label>

                <label className="flex items-center space-x-3 mt-2 cursor-pointer">
                    <input 
                        type="checkbox" 
                        className="sr-only" 
                        checked={promotionalMaterial} 
                        onChange={() => setPromotionalMaterial(!promotionalMaterial)} 
                    />
                    <div
                        role="switch"
                        aria-checked={promotionalMaterial}
                        className={`w-12 h-[23px] flex items-center rounded-full transition-all duration-300 ${promotionalMaterial ? "bg-green-500" : "bg-gray-300"}`}
                    >
                        <div className={`h-5 w-5 bg-white rounded-full shadow-md transform transition-all duration-300 ${promotionalMaterial ? "translate-x-6" : "translate-x-1"}`}></div>
                    </div>
                    <span className="text-sm font-medium text-gray-800">
                        Receive Promotional Material (e.g., newsletters)
                    </span>
                </label>
            </div>
        </div>
    );
};

export default Preferences;
