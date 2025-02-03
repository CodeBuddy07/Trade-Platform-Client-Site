import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import CustomerDashBNavItem from "../Shared/CustomerDashBNavItem";
import TradesPeopleDashBNavItem from "../Shared/TradesPeopleDashBNavItem";
import AdminDashBNavItem from "../Shared/AdminDashBNavItem";

const MobileNavbar = ({ userRole }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  // Dynamic component mapping
  const roleComponentMap = {
    customer: CustomerDashBNavItem,
    "tradePerson": TradesPeopleDashBNavItem,
    admin: AdminDashBNavItem,
  };

  const SelectedNavComponent = roleComponentMap[userRole] || null;

  return (
    <div className="md:hidden bg-white shadow p-4">
      <div className="flex items-center justify-between">
        {/* Menu Button */}
        <button onClick={toggleDrawer} className="btn btn-ghost">
          <IoMenuSharp size={25} />
        </button>

        {/* Dashboard Title */}
        <h1 className="text-lg font-semibold">Dashboard</h1>
      </div>

      {/* Sidebar (Mobile Menu) */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={toggleDrawer}>
          <div className="absolute top-0 left-0 w-64 bg-white h-full p-4 shadow-lg">
            {SelectedNavComponent && <SelectedNavComponent />}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
