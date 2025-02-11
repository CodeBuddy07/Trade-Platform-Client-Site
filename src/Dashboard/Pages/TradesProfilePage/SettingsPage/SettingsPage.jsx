import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const SettingsPage = () => {
    const settingsNav = [
        { path: "/tradePerson/settings/account", label: "Account" },
      
    ];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-6 min-h-screen p-6 bg-[#eeeeef]">
            {/* Sidebar Navigation */}
            <nav className="bg-white p-4 rounded-lg shadow">
                <ul className="flex flex-col space-y-2">
                    {settingsNav.map(({ path, label }) => (
                        <NavLink
                            key={path}
                            to={path}
                            className={({ isActive }) =>
                                `relative py-2 px-4 font-medium transition-all rounded-md 
                                ${isActive ? "text-green-600 bg-gray-100" : "text-gray-700 hover:text-green-600 hover:bg-gray-100"}`
                            }
                        >
                            {label}
                        </NavLink>
                    ))}
                </ul>
            </nav>

            {/* Main Content */}
            <div className="bg-white p-6 rounded-lg shadow">
                <Outlet />
            </div>
        </div>
    );
};

export default SettingsPage;
