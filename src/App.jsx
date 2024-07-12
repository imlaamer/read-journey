import { Route, Routes, useNavigate } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';

import SharedLayout from './components/common/SharedLayout/SharedLayout';

import './assets/styles/global.module.css';
import 'react-toastify/dist/ReactToastify.css';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { RestrictedRoute } from './components/RestrictedRoute/RestrictedRoute';
import { selectIsLoggedIn } from './redux/auth/authSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from './hooks/useAuth';
import Loader from './components/common/Loader/Loader';
import { refreshUser } from './redux/auth/authOperations';

const WelcomePage = lazy(() => import('pages/WelcomePage/WelcomePage'));
const SignupPage = lazy(() => import('pages/SignupPage/SignupPage'));
const SigninPage = lazy(() => import('pages/SigninPage/SigninPage'));
const RecommendedPage = lazy(() =>
  import('pages/RecommendedPage/RecommendedPage')
);
const LibraryPage = lazy(() => import('pages/LibraryPage/LibraryPage'));
const ReadingPage = lazy(() => import('pages/ReadingPage/ReadingPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

function App() {
  const dispatch = useDispatch();
  const { refreshingStatus } = useAuth();

  const navigate = useNavigate();
  const iLoggedIn = useSelector(selectIsLoggedIn); //-
  // iLoggedIn ? navigate('/recommended') : navigate('/register'); //-

  useEffect(() => {
    // dispatch(refreshUser());
  }, [dispatch]);

  if (refreshingStatus) {
    return <Loader />;
  }

  return (
    <>
      <Routes>
        {/* як зробити за замовчуванням сторінку register or login?  */}
        {/* main layout /?  */}

        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <RestrictedRoute>
                <WelcomePage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute>
                <SignupPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute>
                <SigninPage />
              </RestrictedRoute>
            }
          />

          <Route
            path="/recommended"
            element={
              // <PrivateRoute>
              <RecommendedPage />
              // </PrivateRoute>
            }
          />
          <Route
            path="/library"
            element={
              <PrivateRoute>
                <LibraryPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/reading"
            element={
              <PrivateRoute>
                <ReadingPage />
              </PrivateRoute>
            }
          />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>

      <ToastContainer position="top-right" autoClose={5000} theme="light" />
    </>
  );
}
export default App;
