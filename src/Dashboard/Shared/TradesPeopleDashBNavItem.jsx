
import { HiOutlineUserCircle } from "react-icons/hi2";
import { FaQuestion } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoBriefcaseOutline } from "react-icons/io5";
import { MdSupportAgent } from "react-icons/md";
import { GoCreditCard } from "react-icons/go";
import { LiaWalletSolid } from "react-icons/lia";
import { TbMessageDots, TbPlus } from "react-icons/tb";
import { SlSettings } from "react-icons/sl";
import { PiShoppingCartSimpleLight } from "react-icons/pi";

const TradesPeopleDashBNavItem = ({ isSidebarOpen }) => {
    const Routes = [
        {
            path: "/tradePerson/dashboard",
            label: "dashboard",
            icon: <LuLayoutDashboard size={25} />,
        },
        {
            path: "/tradePerson/profile",
            label: "profile",
            icon: <HiOutlineUserCircle size={25} />,
        },
        {
            path: "/tradePerson/message",
            label: "message",
            icon: <TbMessageDots size={25} />,
        },
        {
            path: "/tradePerson/jobs",
            label: "jobs",
            icon: <IoBriefcaseOutline size={25} />,
        },
        {
            path: "/tradePerson/credits",
            label: "Credits",
            icon: <PiShoppingCartSimpleLight size={25} />,
        },
        {
            path: "/tradePerson/membership",
            label: "membership",
            icon: <GoCreditCard size={25} />,
        },
        {
            path: "/tradePerson/billing",
            label: "billing",
            icon: <LiaWalletSolid  size={25} />,
        },
        // {
        //     path: "/tradePerson/addons",
        //     label: "addons",
        //     icon: <TbPlus size={25} />,
        // },
        {
            path: "/tradePerson/settings/account",
            label: "settings",
            icon: <SlSettings size={25} />,
        },
    ];

    return (
        <ul className="space-y-6 flex flex-col py-20 justify-between h-full p-1 ">
            <div className="flex flex-col gap-6 px-4">
                {Routes.map(({ path, label, icon }) => (
                    <NavLink
                        key={path}
                        to={path}
                        className={({ isActive }) =>
                            `relative text-nowrap font-medium text-gray-700 transition-all
                            ${isActive ? "after:w-full text-center" : "hover:bg-gray-200 rounded-md"}
                            after:content-[''] after:absolute after:bottom-0 after:left-0
                            after:w-0 after:h-0.5 after:bg-pink-500 capitalize
                            hover:after:w-full text-center hover:after:transition-all hover:after:duration-500`
                        }
                    >
                        <p
                            className={`md:bg-gray-100 p-1 bg-gray-300 flex items-center gap-3 md:p-2 rounded-lg ${
                                isSidebarOpen ? "text-center" : ""
                            } bg-gray-100 hover:bg-gray-200`}
                        >
                            <span className="min-w-6">{icon}</span>
                            {!isSidebarOpen && <span>{label}</span>}
                        </p>
                    </NavLink>
                ))}
            </div>

            <li className="space-y-4 px-4 flex flex-col border-t border-gray-300 pt-5">
                
                <button
                    className={`md:bg-gray-200 bg-gray-300 md:p-2 rounded-lg ${
                        isSidebarOpen ? "text-center" : ""
                    } bg-gray-100 hover:bg-gray-300`}
                >
                    <a href="#!" className="flex items-center gap-4">
                        <MdSupportAgent size={25} />
                        {!isSidebarOpen && <span className="">Support</span>}
                    </a>
                </button>

                <button
                    className={`md:bg-gray-200 bg-gray-300 md:p-2 rounded-lg ${
                        isSidebarOpen ? "text-center" : ""
                    } bg-gray-100 hover:bg-gray-300`}
                >
                    <a href="#!" className="flex items-center gap-4">
                        <FaQuestion size={25} />
                        {!isSidebarOpen && <span className="">FAQ</span>}
                    </a>
                </button>
            </li>
        </ul>
    );
};

export default TradesPeopleDashBNavItem;
