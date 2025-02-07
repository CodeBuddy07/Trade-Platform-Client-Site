import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { toast } from 'sonner';
import LoadingScreen from '../Components/LoadingScreen';
import { AuthContext } from './AuthProvider';


const ProtectedRoute = ({ children, requiredRole }) => {

  const { isAuthenticated, userRole, isLoading, loginSuccess } = useContext(AuthContext);
  
  console.log(isAuthenticated, userRole);

  if(isLoading) {
    return <LoadingScreen />;
  }

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    toast.warning("You are not authenticated.", {id: 1});
    return <Navigate state={location.pathname} to="/account/login" />;
  }

  // Check user role for access control
  if (!requiredRole.includes(userRole)) {
    toast.warning("You Have No Access To This Page.", {id: 1});
    return <Navigate to="/" />;
  }

  return children;
};
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  requiredRole: PropTypes.arrayOf(PropTypes.string),
};

export default ProtectedRoute;
