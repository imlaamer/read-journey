import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../../redux/auth/authSelectors';
import Container from '../Container/Container';

const SharedLayout = () => {
  // const iLoggedIn = useSelector(selectIsLoggedIn);

  const iLoggedIn = true;
  // const iLoggedIn = false;

  return (
    <>
      <Container className="common-page-container">
        {iLoggedIn && <Header />}
        <main>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
      </Container>
    </>
  );
};

export default SharedLayout;
