import { Route, Routes, useNavigate } from 'react-router-dom';
import { lazy } from 'react';
import { ToastContainer } from 'react-toastify';

import SharedLayout from './components/common/SharedLayout/SharedLayout';

import './assets/styles/global.module.css';
import 'react-toastify/dist/ReactToastify.css';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { RestrictedRoute } from './components/RestrictedRoute/RestrictedRoute';
import { selectIsLoggedIn } from './redux/auth/authSelectors';
import { useSelector } from 'react-redux';

const SignupPage = lazy(() => import('pages/SignupPage/SignupPage'));
const SigninPage = lazy(() => import('pages/SigninPage/SigninPage'));
const RecommendedPage = lazy(() =>
  import('pages/RecommendedPage/RecommendedPage')
);
const LibraryPage = lazy(() => import('pages/LibraryPage/LibraryPage'));
const ReadingPage = lazy(() => import('pages/ReadingPage/ReadingPage'));
const ErrorPage = lazy(() => import('pages/ErrorPage/ErrorPage'));

function App() {
    const navigate = useNavigate();
  const iLoggedIn = useSelector(selectIsLoggedIn); //-
  // iLoggedIn ? navigate('/recommended') : navigate('/register'); //-

  return (
    <>
      <Routes>
        {/* як зробити за замовчуванням сторінку register or login?  */}
        {/* main layout /?  */}
        <Route path="/" element={<SharedLayout />}>
          <Route
            // index
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
              <PrivateRoute>
                <RecommendedPage />
              </PrivateRoute>
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

          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>

      <ToastContainer position="top-right" autoClose={5000} theme="light" />
    </>
  );
}
export default App;
