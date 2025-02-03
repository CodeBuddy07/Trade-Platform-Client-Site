import axios from "axios";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { toast } from "sonner";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userRole, setUserRole] = useState(null);
  const [user, setUser] = useState(null);

  const axiosSecure = useAxiosSecure();
  // const navigate = useNavigate();


  // Check authentication status on initial load

  // Function to manually update authentication status
  const loginSuccess = () => {
    axiosSecure
      .get("/auth/jwt")
      .then((response) => {
        setUserRole(response.data.role);
        setUser(response.data.user);
        setIsAuthenticated(true);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.response?.data?.message || "Something went wrong")
        setIsAuthenticated(false);
        setIsLoading(false);
      });
  };

  const logOut = async () => {
    try {
      const res = await axiosSecure.post(`/auth/logout`);
      toast.success(res?.data?.message, {id:1});
      window.location.href = "/";

    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Something went wrong!" , {id:1});
    }
  };

  useEffect(() => {
    axiosSecure
    .get("/auth/jwt")
      .then((response) => {
        setUserRole(response.data.role);
        setUser(response.data.user);
        setIsAuthenticated(true);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsAuthenticated(false);
        setIsLoading(false);
      });
  }, []);

  const authValue = { isAuthenticated, isLoading, userRole, user, logOut, loginSuccess };

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
// Prop types validation
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
