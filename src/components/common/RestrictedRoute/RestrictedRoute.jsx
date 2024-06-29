import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../../redux/auth/authSelectors';
// import { useAuth } from '../../hooks/useAuth';

export const RestrictedRoute = ({ children }) => {
  // const { loggedInStatus } = useAuth();
  const loggedInStatus = useSelector(selectIsLoggedIn)
  
  return loggedInStatus ? <Navigate to="/home" replace /> : children;
};
