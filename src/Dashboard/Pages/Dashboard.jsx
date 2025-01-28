// Import necessary icons
import {
    IoMenuSharp,
    IoLogOutOutline,
    IoSettingsOutline,
    IoPersonOutline,
  } from "react-icons/io5";
  import { FaUserCircle, FaTasks } from "react-icons/fa";
  import { IoIosArrowBack, IoMdMenu } from "react-icons/io";
  import { useState } from "react";
  import { Outlet, NavLink } from "react-router-dom";
  
  // Import reusable components
  import CustomerDashBNavItem from "../Shared/CustomerDashBNavItem";
  import TradesPeopleDashBNavItem from "../Shared/TradesPeopleDashBNavItem";
  import AdminDashBNavItem from "../Shared/AdminDashBNavItem";
  import DashboardSidebar from "../Shared/DashboardSidebar";
  import MobileNavbar from "../Shared/MobileNav.jsx";


const Dashboard = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const userRole = "trades-people"; // Replace with dynamic user role if needed
  
    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  
    return (
      <div className="flex flex-col md:flex-row text-gray-800 bg-gray-200 h-screen overflow-y-scroll">
        {/* Sidebar for medium and larger devices */}
        <DashboardSidebar
          userRole={userRole}
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
  
        {/* Navbar and Sidebar for small devices */}
        <MobileNavbar userRole={userRole} />
  
        {/* Main content area */}
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Welcome, {userRole}</h2>
            <FaUserCircle size={30} className="text-gray-600" />
          </div>
          <div className="mt-4 p-10 rounded-lg ">
            <Outlet />
          </div>
        </main>
      </div>
    );
  };
  
  export default Dashboard;
  