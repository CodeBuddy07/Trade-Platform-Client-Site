import { BsChatFill } from "react-icons/bs";
import { FaQuestion } from "react-icons/fa6";
import { GoHome } from "react-icons/go";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";


const AdminDashBNavItem = ({isSidebarOpen}) => {


const Routes=[
    {
        path:'admin/dashboard',
        label:'dashboard'
    }
]



    return (
        <ul className="space-y-4  flex flex-col py-20 justify-between  h-full p-1 mt-10">



        <div className="flex flex-col gap-3 px-4">
            {Routes.map(({ path, label }) => (
                <NavLink
                    key={path}
                    to={path}
                    className={({ isActive }) =>
                        `relative   text-nowrap  font-medium text-gray-700 transition-all
                    ${isActive ? " after:w-full text-center" : " hover:bg-gray-200 rounded-md"}
                    after:content-[''] after:absolute after:bottom-0 after:left-0 
                    after:w-0 after:h-0.5 after:bg-pick-500 capitalize
                    hover:after:w-full text-center hover:after:transition-all hover:after:duration-500`
                    }
                >
                    <p className={`md:bg-gray-200 p-1 bg-gray-300 flex  items-center gap-3 md:p-2 rounded-lg ${isSidebarOpen ? "text-center" : ""} bg-gray-100 hover:bg-gray-200`}> <GoHome size={25}></GoHome>

                        {!isSidebarOpen && <span>{label}</span>}

                    </p>

                </NavLink>
            ))}
        </div>



        <li className="space-y-4 px-4 flex flex-col border-t pt-5">

            <button className={`md:bg-gray-200 bg-gray-300  md:p-2 rounded-lg ${isSidebarOpen ? "text-center" : ""} bg-gray-100 hover:bg-gray-300`}>
                <a href="#!" className="flex items-center gap-4">
                    <BsChatFill size={25}></BsChatFill >
                    {!isSidebarOpen && <span className="">Support</span>}
                </a>
            </button>

            <button className={`md:bg-gray-200 bg-gray-300  md:p-2 rounded-lg ${isSidebarOpen ? "text-center" : ""} bg-gray-100 hover:bg-gray-300`}>
                <a href="#!" className="flex items-center gap-4">
                    <FaQuestion size={25}></FaQuestion>
                    {!isSidebarOpen && <span className="">FAQ</span>}
                </a>
            </button>
        </li>
    </ul>
    );
};

export default AdminDashBNavItem;