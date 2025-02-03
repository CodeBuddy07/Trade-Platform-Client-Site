import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { toast } from "sonner";
import { AuthContext } from "../../Authentication/AuthProvider";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const {loginSuccess} = useContext(AuthContext);
  const location = useLocation();


  const handleLogin = async (e) => {
    e.preventDefault();
    
    if(email && password){
        setLoading(true);
        try{
            const res = await axiosSecure.post('/auth/login', {email, password, remember});
            toast.success(res.data?.message);
            setLoading(false);
            loginSuccess();
            console.log(location.state);
            setTimeout(() => {
                navigate(location?.state || '/');
            }, 500);
         }catch(error){
             
             setLoading(false);
             toast.error(error.response?.data?.message || "Something went Wrong!")
         }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Welcome Back
        </h2>
        <form onSubmit={(e)=> handleLogin(e)} className="space-y-5">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 text-gray-800 bg-gray-100 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-400 focus:border-green-400 outline-none"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-3 text-gray-800 bg-gray-100 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-400 focus:border-green-400 outline-none"
              required
            />
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                onChange={(e) => setRemember(!remember)}
                id="remember"
                className="w-4 h-4 text-green-500 border-gray-300 rounded focus:ring-2 focus:ring-green-400"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                Remember me
              </label>
            </div>
            <Link
              to="/account/password-reset"
              className="text-sm text-blue-500 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="btn w-full py-3 text-white bg-green-500 hover:bg-green-600 rounded-lg shadow-md transition-all duration-200"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        {/* Register Link */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link to="/register-as" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
