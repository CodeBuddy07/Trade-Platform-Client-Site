import { useContext, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import logo from "./../files/new Logo.png";
import { IoMenuSharp } from "react-icons/io5";
import { AuthContext } from "../Authentication/AuthProvider";

const MainLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const {userRole} = useContext(AuthContext);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/how-it-works", label: "How it works" },
    { path: "/ask-a-trade", label: "Ask a trade" },
    { path: "/cost-guides", label: "Cost guides" },
    { path: "/account/login", label: "Sign in" },
  ];

  const navContent = (
    <ul className="flex space-x-4 items-center">
      {navLinks.map(({ path, label }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) =>
            `relative py-2 px-4 text-nowrap font-medium text-gray-700 transition-all
                        ${isActive ? "text-green-600 bg-gray-100 rounded-md after:w-full" : "hover:text-green-600 hover:bg-gray-100 rounded-md"}`}
        >
          {label}
        </NavLink>
      ))}
      <NavLink
        to="/post-job"
        className="border border-pink-600 text-pink-600 px-6 py-2 rounded-md transition-all hover:bg-pink-600 hover:text-white"
      >
        Post a job
      </NavLink>
      <NavLink
        to="/register-as/trades-people"
        className="border border-green-600 text-green-600 px-5 py-2 rounded-md transition-all hover:bg-green-600 hover:text-white"
      >
        Trade signup
      </NavLink>
    </ul>
  );

  return (
    <div>
      {/* Navbar */}
      <div className="navbar bg-white backdrop-blur-sm shadow-lg">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center">
            <button onClick={toggleMenu} className="lg:hidden mr-5">
              <IoMenuSharp size={25} />
            </button>
            <Link to={userRole? `/${userRole}/profile` : `/admin/profile`}>
              <img src={logo} alt="Logo" className="h-20 bg-transparent lg:block hidden mr-5" />
            </Link>
          </div>
          <div className="hidden lg:block">{navContent}</div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white w-64 h-full p-4 shadow-lg transform transition-transform duration-300">
            <button onClick={toggleMenu} className="absolute top-4 right-4 text-gray-600">✖</button>
            <div className="flex items-center justify-center">
              <img src={logo} alt="Logo" className="w-36 h-auto" />
            </div>
            <ul className="mt-5 space-y-2">
              {navLinks.map(({ path, label }) => (
                <NavLink
                  key={path}
                  to={path}
                  className="block py-2 px-4 text-gray-700 hover:text-green-600 border-b"
                  onClick={toggleMenu} // Close menu on link click
                >
                  {label}
                </NavLink>
              ))}
              <NavLink
                to="/post-job"
                className="block text-center border border-pink-600 text-pink-600 px-6 py-2 rounded-md transition-all hover:bg-pink-600 hover:text-white"
                onClick={toggleMenu}
              >
                Post a job
              </NavLink>
              <NavLink
                to="/register-as/trades-people"
                className="block text-center border border-green-600 text-green-600 px-6 py-2 rounded-md transition-all hover:bg-green-600 hover:text-white"
                onClick={toggleMenu}
              >
                Trade signup
              </NavLink>
            </ul>
          </div>
        </div>
      )}

      {/* Page Content */}
      <Outlet />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
