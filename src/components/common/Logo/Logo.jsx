import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import Icon from '../Icon/Icon';
import s from './Logo.module.css';
import clsx from 'clsx';

const Logo = () => {
  const location = useLocation();
  const isAuthPage =
    location.pathname === '/register' || location.pathname === '/login';

  const isWelcomePage = location.pathname === '/';

  const { isLoggedIn } = useAuth();
  const path = isLoggedIn ? '/recommended' : '/';

  //Link or NAvLink ?

  return (
    <Link to={path} className={s.linkContainer}>
      <Icon id="logo" fill="#F9F9F9" width="42" height="17" />
      <p
        className={clsx(s.title, {
          [s.authLogo]: isAuthPage,
          [s.headerLogo]: !isAuthPage && !isWelcomePage,
          [s.welcomeLogo]: isWelcomePage,
        })}
      >
        Read Journey
      </p>
    </Link>
  );
};

export default Logo;
