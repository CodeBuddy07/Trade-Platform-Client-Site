import { Link, NavLink, Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import logo from "./../files/logo.png";
import { IoMenuSharp } from "react-icons/io5";

const MainLayout = () => {
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/how-it-works", label: "How it works" },
    { path: "/ask-a-trade", label: "Ask a trade" },
    { path: "/cost-guides", label: "Cost guides" },
    { path: "/account/login", label: "Login" },
  ];

  const navContent = (
    <ul className="flex space-x-4 items-center">
      {navLinks.map(({ path, label }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) =>
            `relative py-2 px-4 text-nowrap font-medium text-gray-700 transition-all
                        ${isActive ? "text-green-600 bg-gray-100 rounded-md after:w-full" : "hover:text-green-600 hover:bg-gray-100 rounded-md"}
                        after:content-[''] after:absolute after:bottom-0 after:left-0 
                        after:w-0 after:h-0.5 after:bg-green-600
                        hover:after:w-full hover:after:transition-all hover:after:duration-500`
          }
        >
          {label}
        </NavLink>
      ))}
      <NavLink
        to="/post-job"
        className="btn border border-pink-600 text-pink-600 px-6 py-2 rounded-md transition-all hover:bg-pink-600 hover:text-white"
      >
        Post a job
      </NavLink>
      <NavLink
        to="/register-as/trades-people"
        className="btn border border-green-600 text-green-600 px-5 py-2 rounded-md transition-all hover:bg-green-600 hover:text-white"
      >
        Trade signup
      </NavLink>
    </ul>
  );

  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar bg-white backdrop-blur-sm shadow-lg">
            <div className="container mx-auto flex items-center justify-between px-4">
              <div className="flex items-center">
                <label htmlFor="my-drawer-3" className=" lg:hidden mr-5">
                  <IoMenuSharp size={25} />
                </label>
                <Link to='/my-trade-account/profile'>
                  <img
                    src={logo}
                    alt="Logo"
                    className="w-40  bg-transparent  h-auto lg:block hidden mr-5"
                  /></Link>
              </div>
              <div className="hidden lg:block">{navContent}</div>
            </div>
          </div>
          {/* Page Content */}

          <Outlet />

          {/* Footer */}
          <Footer />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu bg-white z-10 h-full w-64 p-4 space-y-2">
            <div className="flex items-center justify-center">
              <img src={logo} alt="Logo" className="w-36 h-auto " />
            </div>
            {navLinks.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `relative py-2  px-4 border-b font-medium transition-all 
                                    ${isActive
                    ? "text-green-600"
                    : "hover:text-green-600"
                  } 
                                    after:content-[''] after:absolute after:bottom-0 after:left-0 
                                    after:w-0 after:h-0.5 after:bg-green-600 
                                    hover:after:w-full hover:after:transition-all hover:after:duration-500`
                }
              >
                {label}
              </NavLink>
            ))}
            <NavLink
              to="/post-job"
              className="btn border border-pink-600 text-pink-600 px-6 py-2 rounded-md transition-all hover:bg-pink-600 hover:text-white"
            >
              Post a job
            </NavLink>
            <NavLink
              to="/register-as/trades-people"
              className="btn border border-green-600 text-green-600 px-6 py-2 rounded-md transition-all hover:bg-green-600 hover:text-white"
            >
              Trade signup
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
