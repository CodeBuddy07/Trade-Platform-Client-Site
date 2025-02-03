import axios from "axios";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { toast } from "sonner";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userRole, setUserRole] = useState(null);


  const serverURL = "http://localhost:5000/api/auth/jwt";


  // Check authentication status on initial load

  // Function to manually update authentication status
  const loginSuccess = () => {
    axios
      .get(serverURL, { withCredentials: true })
      .then((response) => {
        setUserRole(response.data.role);
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

  useEffect(() => {
    axios
      .get(serverURL, { withCredentials: true })
      .then((response) => {
        setUserRole(response.data.role);
        setIsAuthenticated(true);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsAuthenticated(false);
        setIsLoading(false);
      });
  }, []);

  const authValue = { isAuthenticated, isLoading, userRole, loginSuccess };

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
// Prop types validation
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
