import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export const RestrictedRoute = ({ children }) => {
  // const { isLoggedIn } = useAuth();
  const isLoggedIn = false;
  return isLoggedIn ? <Navigate to="/recommended" replace /> : children;
};
