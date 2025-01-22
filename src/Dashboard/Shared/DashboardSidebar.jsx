
import { useState } from "react";
import { FaMarsAndVenus } from "react-icons/fa6";
import { GoHome } from "react-icons/go";
import { IoIosArrowBack, IoMdMenu } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const DashboardSidebar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState("");
    const [isVisible, setIsVisible] = useState(false)

    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
    const toggleDropdown = (dropdown) =>
        setActiveDropdown(activeDropdown === dropdown ? "" : dropdown);

    return (
        <div
            className={`${isSidebarOpen ? "md:w-28 w-16" : "md:w-64 w-28"
                } bg-gray-100 rounded-xl shadow-2xl h-screen md:p-4  flex flex-col justify-between transition-all duration-500`}
        >

            
                <div className="flex justify-center ">
                    <div className="hidden md:block">
                        <button
                            className="w-12  h-12 bg-gray-200 hover:bg-gray-300 transition-all rounded-full flex items-center justify-center"
                            onClick={toggleSidebar}
                        >

                            <IoMdMenu size={25} className={` ${isSidebarOpen ? "rotate-0" : "rotate-180"} transition-transform`}></IoMdMenu>
                        </button>
                    </div>
                </div>
            


            
                <ul className="space-y-4 flex-1 p-1 mt-10">

                    <li className={`p-4 rounded-lg ${isSidebarOpen ? "text-center" : ""} bg-gray-100 hover:bg-gray-200`}>
                        <a href="#!" className="flex items-center gap-4">
                            <GoHome size={25}></GoHome>
                            {!isSidebarOpen && <span className="">Home</span>}
                        </a>
                    </li>

                    {/* <li>
    <button
        className="flex items-center justify-between w-full p-4 rounded-lg bg-gray-100 hover:bg-gray-200"
        onClick={() => toggleDropdown("audience")}
    >
        <div className="flex items-center gap-4">
            <FaMarsAndVenus size={25}></FaMarsAndVenus>
            {!isSidebarOpen && <span>DropdownMenu</span>}
        </div>
        {!isSidebarOpen && (

            <IoIosArrowBack
                className={`w-4 transform ${activeDropdown === "audience" ? "-rotate-90" : ""
                    } transition-transform`}
            ></IoIosArrowBack>

        )}
    </button>
    <div
        className={`${activeDropdown === "audience" ? "max-h-screen" : "max-h-0"
            } overflow-hidden transition-all mt-1 duration-500`}
    >
        <a
            href="#!"
            className="flex items-center gap-4 px-8 py-2 hover:bg-gray-100"
        >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_FUNpkbm3tJHYt4I6WjtOtdizk-LcgPi0YA&s" alt="Audience 1" className="w-6 h-6" />
            <span>trades 1</span>
        </a>
        <a
            href="#!"
            className="flex items-center gap-4 px-8 py-2 hover:bg-gray-100"
        >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_FUNpkbm3tJHYt4I6WjtOtdizk-LcgPi0YA&s" alt="Audience 2" className="w-6 h-6" />
            <span>trades 2</span>
        </a>
    </div>
</li> */}
                </ul>


                <div className="space-y-4">
                    <div className={`p-4 border rounded-lg ${isSidebarOpen ? "text-center" : ""} bg-gray-100 hover:bg-gray-200`}>
                        <NavLink href="#!" className="flex items-center gap-4">
                            <IoSettingsOutline className="" size={25}></IoSettingsOutline>

                            {!isSidebarOpen && <span>Settings</span>}
                        </NavLink>
                    </div>
                    {/* <div className="flex items-center gap-4">
    <img src="./../../files/dashboardIcons/profile.svg" alt="Profile" className="w-10 h-10 rounded-full" />

    {!isSidebarOpen && (
        <div>
            <h3 className="text-sm font-bold text-gray-800"></h3>
            <p className="text-xs text-gray-600"></p>
        </div>
    )}
</div> */}
                </div>
          
        </div>
    );
};

export default DashboardSidebar;
