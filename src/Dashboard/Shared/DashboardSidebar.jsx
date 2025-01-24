
import { useState } from "react";
import { FaMarsAndVenus } from "react-icons/fa6";
import { GoHome } from "react-icons/go";
import { IoIosArrowBack, IoMdMenu } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import CustomerDashBNavItem from './CustomerDashBNavItem';
import TradesPeopleDashBNavItem from "./TradesPeopleDashBNavItem";
import AdminDashBNavItem from "./AdminDashBNavItem";

const DashboardSidebar = ({ userRole }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState("");
    const [isVisible, setIsVisible] = useState(false)

    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
    const toggleDropdown = (dropdown) =>
        setActiveDropdown(activeDropdown === dropdown ? "" : dropdown);

    return (
        <div
            className={`${isSidebarOpen ? "md:w-28 w-16" : "md:w-40 lg:w-72 w-28"
                } bg-gray-100  shadow-2xl h-screen md:p-4  flex flex-col justify-between transition-all duration-500`}
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


            <div className="flex-1">
                {

                    userRole == 'customer' ? <CustomerDashBNavItem isSidebarOpen={isSidebarOpen}></CustomerDashBNavItem> : userRole == 'trades-people' ? <TradesPeopleDashBNavItem isSidebarOpen={isSidebarOpen}></TradesPeopleDashBNavItem> : <AdminDashBNavItem isSidebarOpen={isSidebarOpen}></AdminDashBNavItem>
                }
            </div>


        </div>
    );
};

export default DashboardSidebar;
