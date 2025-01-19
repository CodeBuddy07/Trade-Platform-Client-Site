import { NavLink, Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import logo from './../files/logo.png'
import './Navbar.css'
import { IoMenuSharp } from "react-icons/io5";

const MainLayout = () => {




    const navContent = <ul className="space-x-2">
        <NavLink to='/' className={`${location.pathname === '/' ? 'buttonActive' : 'buttonHover'}     py-1 transition-all  rounded-md px-5`}>Home</NavLink>
        <NavLink to='/' className={`${location.pathname === '/s' ? 'buttonActive' : 'buttonHover'}     py-1 transition-all  rounded-md px-5`}>How it works</NavLink>
        <NavLink to='/' className={`${location.pathname === '/sd' ? 'buttonActive' : 'buttonHover'}     py-1 transition-all  rounded-md px-5`}>Ask a trade</NavLink>
        <NavLink to='/' className={`${location.pathname === '/s' ? 'buttonActive' : 'buttonHover'}     py-1 transition-all  rounded-md px-5`}>Cost guides</NavLink>
        <NavLink to='/' className={`btn btn-sm border-pink-600 hover:bg-pink-800  px-8   font-bold text-white bg-pink-600  transition-all rounded-md text-[18px]`}>Post a job</NavLink>
        <NavLink to='/' className={`btn btn-sm border-green-600 hover:bg-green-800  px-8    text-white bg-green-600  transition-all rounded-md text-[18px]`}>Trade signup</NavLink>
       
        <NavLink to='/account/login' className={`${location.pathname === '/s' ? 'buttonActive' : 'buttonHover'}     py-1 transition-all  rounded-md px-5`}>Login</NavLink>


        {/* {
        user ? <NavLink to='/dashboard/profile' className={`${dashboard ? 'border-b-4 border-red-600 hover:text-black text-red-700 hover:bg-transparent' : ''} px-5   font-bold  hover:bg-blue-100 py-3 transition-all rounded-md`}>dashboard</NavLink> : null
    } */}

        {/* {
        user && <NavLink to={'/funding'} className={`${location.pathname === '/funding' ? 'border-b-4 border-red-600 hover:text-black text-red-700 hover:bg-transparent' : ''} px-5   font-bold  hover:bg-blue-100 py-3 transition-all rounded-md`}>funding</NavLink>
    } */}
        {/* <NavLink to='/blogs' className={`${location.pathname === '/blogs' ? 'border-b-4 border-red-600 hover:text-black text-red-700 hover:bg-transparent' : ''} px-5   font-bold  hover:bg-blue-100 py-3 transition-all rounded-md`}>blogs</NavLink> */}

        {/* <div className="flex relative items-center">
        {user ?
            isLoading ? <span className="loading loading-spinner loading-lg"></span> :
                data?.donarImage ?
                    <div>
                        <div className="w-14 lg:block hidden relative h-14 rounded-full bg-red-600 text-white">
                            <img className="rounded-full object-cover w-full h-full" src={data?.donarImage} alt="" />
                            <span className={`w-[20px] absolute top-0 right-0 rounded-full h-[20px] ${data?.status == 'active' ? 'bg-green-500 border-white border-2' : data?.status == 'blocked' ? 'bg-red-500 border-white border-2' : 'bg-gray-300'}`}></span>
                        </div>
                    </div> :
                    <div className="w-14 relative h-14 rounded-full bg-red-600 text-white">
                        <span className="flex items-center justify-center font-semibold text-4xl" >{userName}</span>
                        <span className={`w-[20px] absolute top-0 right-0 rounded-full h-[20px] ${data?.status == 'active' ? 'bg-green-500' : data?.status == 'blocked' ? 'bg-red-500' : 'bg-gray-300'}`}></span>
                    </div> :
            <NavLink to='/login' className=" rounded-md bg-red-700 text-white font-bold  py-2  transition-all  hover:bg-red-900 border-2 px-10">join</NavLink>}

        {
            user ? <select onChange={handleLogOut} className="absolute lg:block hidden w-[100px] cursor-pointer h-full bg-transparent  bottom-0 -right-4" name="" id="">
                <option className="" value=""></option>
                <option className=" rounded-md w-full bg-red-700 text-white font-bold  py-2  transition-all  hover:bg-red-900 border-2 px-10" value=""> logout</option>
            </select> : null
        }
        {
            user && <button onClick={handleLogOut} className="lg:hidden rounded-md w-full bg-red-700 text-white font-bold  py-2  transition-all  hover:bg-red-900 border-2 px-10" value=""> logout</button>
        }
    </div> */}
    </ul>
    return (
        <div className="">

            <div className="drawer bg-transparent ">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content  flex flex-col">
                    {/* Navbar */}
                    <div className="navbar shadow-md; rounded-md bg-[rgba(255,255,255,0.79)] text-gray-700">
                        <div className="max-w-7xl mx-auto w-full">
                            <div className="flex-none lg:hidden">
                                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn bg-transparent border-none">
                                    <IoMenuSharp size={30} className="cursor-pointer"></IoMenuSharp>
                                </label>
                            </div>
                            <div className="mx-2 flex-1 px-2 hidden lg:block">
                                <img className="w-[150px] h-[60px]" src={logo} alt="" />
                            </div>
                            <div className="hidden  flex-none lg:block">
                                {navContent}
                            </div>
                        </div>
                    </div>
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <Footer></Footer>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu space-y-4
                     bg-gray-600  min-h-full w-80 p-4">
                        <NavLink to='/' className={`${location.pathname === '/' ? 'buttonActive' : 'buttonHover'} py-1 transition-all  rounded-md px-5`}>Home</NavLink>

                        <NavLink to='/' className={`${location.pathname === '/s' ? 'buttonActive' : 'buttonHover'} py-1 transition-all  rounded-md px-5`}>How it works</NavLink>
                        <NavLink to='/' className={`${location.pathname === '/sd' ? 'buttonActive' : 'buttonHover'} py-1 transition-all  rounded-md px-5`}>Ask a trade</NavLink>

                        <NavLink to='/' className={` button-1  transition-all rounded-md `}>Post a job</NavLink>
                        <NavLink to='/' className={` button-2  transition-all rounded-md `}>Trade SignUp</NavLink>
                        <NavLink to='/' className={`${location.pathname === '/s' ? 'buttonActive' : 'buttonHover'} py-1 transition-all  rounded-md px-5`}>Login</NavLink>
                    </ul>
                </div>
            </div>





        </div>
    );
};

export default MainLayout;