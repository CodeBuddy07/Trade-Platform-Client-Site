// Import necessary icons
import {IoMenuSharp} from "react-icons/io5";

  // Import reusable components
  import CustomerDashBNavItem from "../Shared/CustomerDashBNavItem";
  import TradesPeopleDashBNavItem from "../Shared/TradesPeopleDashBNavItem";
  import AdminDashBNavItem from "../Shared/AdminDashBNavItem";
const MobileNavbar = ({ userRole }) => {
    return (
      <div className="md:hidden bg-white shadow p-4">
        <div className="flex items-center justify-between">
          <div className="drawer">
            <input id="drawer-toggle" type="checkbox" className="drawer-toggle" />
            <label htmlFor="drawer-toggle" className="drawer-button btn btn-ghost">
              <IoMenuSharp size={25} />
            </label>
            <div className="drawer-side">
              <label htmlFor="drawer-toggle" className="drawer-overlay"></label>
              <ul className="menu bg-white h-full w-64 p-4 text-gray-700 shadow-lg">
                {userRole === "customer" && <CustomerDashBNavItem />}
                {userRole === "trades-people" && <TradesPeopleDashBNavItem />}
                {userRole === "admin" && <AdminDashBNavItem />}
              </ul>
            </div>
          </div>
          <h1 className="text-lg font-semibold">Dashboard</h1>
        </div>
      </div>
    );
  };
  
  export default MobileNavbar;