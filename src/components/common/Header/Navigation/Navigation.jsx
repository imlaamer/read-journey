import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../../../uikit/Button/Button';
import Modal from '../../Modal/Modal';
import User from '../User/User';
import Logo from '../../Logo/Logo';

import logo from '../../../../assets/static/icons/logo.svg';
// import LogoutCard from '../../../LogoutCard/LogoutCard';

import { selectIsLoggedIn } from '../../../../redux/auth/authSelectors';

import s from './Navigation.module.css';
import { signOut } from '../../../../redux/auth/authOperations';

const Navigation = ({
  isHomePage,
  handleOpenModal,
  handleCloseModal,
  isLogModalOpen,
  isSignupModalOpen,
  isLogoutModalOpen,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const isLoggedIn = useSelector(selectIsLoggedIn);

  // const isLoggedIn = true;

  const handleSignOut = async () => {
    const isSignedOut = await dispatch(signOut);
    if (isSignedOut.error) return;
    // toast.error('');
    navigate('/login');
  };
  return (
    <div className={s.logoNavWrapper}>
      <Logo />
      {/* {!isLoggedIn && (
        <NavLink to="/" className={s.logo}>
          <img src={logo} alt="logo" />
        </NavLink>
      )} */}

      {/* <NavLink className={` ${s.logoText} `} to="/recommended">
        Home
      </NavLink> */}

      {/* <div className={s.navWrapper}> */}
      <div className={s.linkBox}>
        <NavLink
          className={({ isActive }) =>
            `${s.navLink} ${isActive ? s.active : ''}`
          }
          to="/recommended"
        >
          Home
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `${s.navLink} ${isActive ? s.active : ''}`
          }
          to="/library"
        >
          My library
        </NavLink>
      </div>
      {/* </div> */}

      {/* user and btn in navigation ?? */}

      <div className={s.userBtnWrapper}>
        <User />
        {/* {isLoggedIn && <User />} */}
        {/* <div className={s.btnsBox}> */}
        <Button
          type="submit"
          title="Log out"
          onClick={handleSignOut}
          className="logout-btn"
          id="logout"
        />
        {/* По clickу на кнопку Log out має відправлятися запит на backend, який
        видаляє активну сесію користувача. Якщо backend повернув помилку -
        необхідно її опрацювати і відобразити користувачеві у вигляді
        вспливаючого віконечка-notification. Якщо запит на backend пройшов
        успішно - користувача має переадресувати на публічну сторінку Welcome
        page. Незалежно від відповіді backenda, користувача слід деавторизувати
        "на клієнті", очистивши при цьому redux store та localStorage. */}
        {/* {isLogoutModalOpen && (
              <Modal
                onClose={handleCloseModal}
                className="authModal"
                isOpen={isLogoutModalOpen} //
              >
                <LogoutCard handleCloseModal={handleCloseModal} />
              </Modal>
            )} */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Navigation;
