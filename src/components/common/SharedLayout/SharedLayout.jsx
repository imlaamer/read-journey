import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../../redux/auth/authSelectors';

const SharedLayout = () => {
  const iLoggedIn = useSelector(selectIsLoggedIn);
  
  return (
    <>
      {iLoggedIn && <Header />}
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
