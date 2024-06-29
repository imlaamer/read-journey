import { Link } from 'react-router-dom';
import logo from '../../../assets/static/icons/logo.svg';
import s from './Logo.module.css';
import { useAuth } from '../../../hooks/useAuth';
import Icon from '../Icon/Icon';

const Logo = () => {
  const { isLoggedIn } = useAuth();
  const path = isLoggedIn ? '/recommended' : '#';

  return (
    <Link to={path} className={s.container}>
      <Icon id="logo" fill="#F9F9F9" width="42" height="17" />
      {/* <img className={s.icon} src={logo} alt="Logo of read journey" /> */}
      <p className={s.title}>Read Journey</p>
    </Link>
  );
};

export default Logo;
