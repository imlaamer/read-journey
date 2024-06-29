import { useSelector } from 'react-redux';
import {
  selectUserName,
  selectIsLoggedIn,
  selectToken,
  selectLoading,
  selectLoadingUser,
  selectError,
  // getLoading,
  // getError,
  // getUser,
  // getLoggedInStatus,
  // getToken,
  // getRefreshingStatus,
} from '../redux/auth/authSelectors';

export const useAuth = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  // const user = useSelector(getUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const token = useSelector(selectToken);
  // const refreshingStatus = useSelector(getRefreshingStatus);

  return {
    loading,
    error,
    // user,
    isLoggedIn,
    token,
    // refreshingStatus,
  };
};