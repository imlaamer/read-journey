import { useLocation } from 'react-router-dom';
import clsx from 'clsx';
import Container from '../common/Container/Container';
import Logo from '../common/Logo/Logo';

import phone1x from '../../assets/static/images/iphone-1x-min.png';
import phone2x from '../../assets/static/images/iphone-2x-min.png';

import s from './AuthWrapper.module.css';

const AuthWrapper = ({ children }) => {
  const location = useLocation();
  const isAuthPage =
    location.pathname === '/register' || location.pathname === '/login';

  const isWelcomePage = location.pathname === '/';

  return (
    <section
      className={clsx(s.authWrapper, {
        [s.welcomePageWrapper]: isWelcomePage,
      })}
    >
      <Container
        className={clsx({
          'auth-content-box': !isWelcomePage,
          'welcome-page-container': isWelcomePage,
        })}
      >
        <div className={s.contentContainer}>
          <Logo />

          {isAuthPage && (
            <h1 className={s.title}>
              Expand your mind, reading<span className={s.accent}> a book</span>
            </h1>
          )}
          {isWelcomePage && (
            <h1 className={s.title}>
              <span className={s.accent}>Welcome to</span> Read Journey!
            </h1>
          )}

          {children}
        </div>
      </Container>
      <Container
        className={clsx({
          'phone-box': !isWelcomePage,
          'welcome-page-phone-box': isWelcomePage,
        })}
      />
      {/* <Container className="phone-box">
        <img src={phone2x} alt="iPhone" className={s.image} />
      </Container> */}
    </section>
  );
};

export default AuthWrapper;
