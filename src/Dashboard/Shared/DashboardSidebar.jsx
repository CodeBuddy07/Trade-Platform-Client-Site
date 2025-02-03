
import { IoMdMenu } from "react-icons/io";
import CustomerDashBNavItem from "../Shared/CustomerDashBNavItem";
import TradesPeopleDashBNavItem from "../Shared/TradesPeopleDashBNavItem";
import AdminDashBNavItem from "../Shared/AdminDashBNavItem";


const DashboardSidebar = ({ isSidebarOpen, toggleSidebar, userRole }) => {

    return (
        <aside className="hidden overflow-auto md:block bg-white shadow-lg sticky top-0 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-200">


            <div className={`${!isSidebarOpen ? 'p-6' : 'p-0'} border-b border-gray-300 h-20`}>
                <h1
                    className={`${isSidebarOpen ? "hidden" : "block"
                        } text-center text-2xl font-bold text-gray-700`}
                >
                    Dashboard
                </h1>
            </div>

            <div
                className={`${isSidebarOpen ? "md:w-28 w-16" : "md:w-60 lg:w-72"
                    } md:p-4 flex flex-col justify-between transition-all duration-500`}
            >
                <div className="flex justify-center ">
                    <button
                        className="w-12 h-12 bg-gray-200 hover:bg-gray-300 transition-all rounded-full flex items-center justify-center"
                        onClick={toggleSidebar}
                    >
                        <IoMdMenu
                            size={25}
                            className={`${isSidebarOpen ? "rotate-0" : "rotate-180"
                                } transition-transform`}
                        ></IoMdMenu>
                    </button>
                </div>
                <div className="flex-1">
                    {
                        userRole === "customer" ? (
                            <CustomerDashBNavItem isSidebarOpen={isSidebarOpen} />
                        ) : userRole === "tradePerson" ? (
                            <TradesPeopleDashBNavItem isSidebarOpen={isSidebarOpen} />
                        ) : (
                            <AdminDashBNavItem isSidebarOpen={isSidebarOpen} />
                        )
                    }
                </div>
            </div>
        </aside>
    );
};

export default DashboardSidebar;