import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

///'/'  or login
export const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth(); //isRefreshing

  const shouldRedirect = !isLoggedIn; //&& !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} replace /> : children;
};
