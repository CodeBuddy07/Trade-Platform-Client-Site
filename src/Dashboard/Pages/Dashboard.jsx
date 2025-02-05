import { FaUserCircle, FaTasks } from "react-icons/fa";
import { useContext, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import DashboardSidebar from "../Shared/DashboardSidebar";
import MobileNavbar from "../Shared/MobileNav.jsx";
import { AuthContext } from "../../Authentication/AuthProvider.jsx";

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { userRole, user, logOut} = useContext(AuthContext);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  // useEffect(()=>{
  //   const getUserFunction=async()=>{
  //     try{
  //       const res = await axiosSecure.get(`/auth/get/${user.id}`);
  //       console.log(res);

  //     }catch(error){
  //       console.log(error);
  //     }
  //   }

  //   // getUserFunction();
  // },[])

  

  return (
    <div className="flex flex-col md:flex-row text-gray-800 bg-gray-200 h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-200 ">
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
          <h2 className="text-2xl font-semibold">Welcome {user?.firstName}</h2>
          <button
            onClick={() => logOut()}
            className="px-7 btn-sm bg-pink-600 border-0 hover:bg-pink-700 text-white py-1 rounded-md flex justify-center items-center gap-2"
          >
            {" "}
            <FaUserCircle size={20} className="" /> Log out
          </button>
        </div>
        <div className="mt-4 md:p-10 rounded-lg ">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
