import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="p-6 text-gray-600  min-h-screen flex justify-center items-center">
            <form className="w-full shadow-xl bg-white border-2 rounded-md border-gray-300 p-10 max-w-lg space-y-6">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email <span className="text-red-500">*</span>
                    </label>
                    <div className="flex flex-col">
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            className="px-4 py-2  rounded-full border border-gray-300 shadow-sm focus:outline-none focus:border-pink-600 bg-gray-50 "
                        />

                    </div>
                </div>
                {/* Name Field */}
                <div>
                    <label htmlFor="password" className="block  font-medium text-gray-700 mb-1">
                        Password <span className="text-red-500">*</span>
                    </label>
                    <div className="flex space-x-4">
                        {/* First Name */}
                        <div className="flex flex-col w-full">
                            <input
                                type="email"
                                id="email"
                                placeholder="Email"
                                className="px-4 py-2  rounded-full border border-gray-300 shadow-sm focus:outline-none focus:border-pink-600 bg-gray-50 "
                            />

                        </div>
                    </div>
                </div>

                {/* Email Field */}
                <div className="">
                    <button className=" w-full text-xl btn rounded-full text-white bg-gradient-to-b  from-blue-700 to-blue-400 border-none shadow-sm shadow-blue-500 hover:shadow-blue-600 hover:shadow-md ">
                        login
                    </button>
                    <p className="text-center">Or</p>
                    <button className="w-full text-xl btn rounded-full text-blue-600 border-gradient-to-r  from-blue-700 to-blue-400 border-none shadow-sm shadow-blue-500 hover:shadow-blue-600 hover:shadow-md ">
                        Login by email link
                    </button>

                </div>

                <div>
                    <p className="text-center"><span className="italic">Haven’t joined yet?</span> <Link
                    to={'/register-as'}
                    className="text-pink-600 hover:underline underline-offset-4">Create an account now!</Link></p>
                </div>

            </form>
        </div>
    );
};

export default Login;