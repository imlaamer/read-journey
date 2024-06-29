import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export const PrivateRoute = ({ children, redirectTo = '/login' }) => {
  const { isLoggedIn } = useAuth(); //isRefreshing

  const shouldRedirect = !isLoggedIn; //&& !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} replace /> : children;
};
