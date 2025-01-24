
import { IoMenuSharp } from 'react-icons/io5';
import DashboardSidebar from './../Shared/DashboardSidebar';
import { Outlet } from 'react-router-dom';
import CustomerDashBNavItem from '../Shared/CustomerDashBNavItem';
import TradesPeopleDashBNavItem from '../Shared/TradesPeopleDashBNavItem';
import AdminDashBNavItem from '../Shared/AdminDashBNavItem';

const Dashboard = () => {

    const userRole = 'trades-people'


    return (
        <div className="md:flex text-gray-700 bg-gray-300  ">
            
            
            {/* this is dashboard sidebar for md and lg device */}

            <div className="col-span-4 min-h-screen  h-full hidden md:block sticky top-0">
                <DashboardSidebar userRole={userRole}></DashboardSidebar>
            </div>



            {/* this is dashboard sidebar for sm device */}

            <div className="navbar md:hidden  bg-base-100">
                <div className="drawer drawer-start ">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">  <IoMenuSharp size={25} /></label>
                    </div>
                    <div className="drawer-side ">
                        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-base-200 text-base-content min-h-full w-60 ">
                            {/* Sidebar content here */}
                            {

                                userRole == 'customer' ? <CustomerDashBNavItem></CustomerDashBNavItem> : userRole == 'trades-people' ? <TradesPeopleDashBNavItem></TradesPeopleDashBNavItem> : <AdminDashBNavItem></AdminDashBNavItem>
                            }
                        </ul>
                    </div>
                </div>
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="flex-none gap-2">

                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>




            {/* this is dashboard content */}

            <div className="md:p-10 p-2">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
