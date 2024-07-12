import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

import Button from '../../uikit/Button/Button';
import ToggleButton from './ToggleButton/ToggleButton';
import Backdrop from '../common/Backdrop/Backdrop';

import { selectIsLoggedIn } from '../../redux/auth/authSelectors';

import s from './BurgerMenu.module.css';

const variants = {
  open: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 40,
      damping: 20,
    },
  },
  closed: {
    x: '100%',
    transition: {
      delay: 0.4,
      type: 'spring',
      stiffness: 450,
      damping: 40,
      duration: 0.4,
    },
  },
};

const BurgerMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        !event.target.closest(`.${s.sidebar}`) &&
        !event.target.closest(`.${s.button}`)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <>
      <motion.div className={s.sidebar} animate={isOpen ? 'open' : 'closed'}>
        <motion.div
          className={s.bg}
          variants={variants}
          animate={{ opacity: isOpen ? 1 : 0 }}
        >
          <nav className={s.container}>
            <div className={s.linksBox}>
              <NavLink
                className={({ isActive }) =>
                  `${s.navLink} ${isActive ? s.active : ''}`
                }
                to="/recommended"
                onClick={() => {
                  setOpen(false);
                }}
              >
                Home
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  `${s.navLink} ${isActive ? s.active : ''}`
                }
                to="/library"
                onClick={() => {
                  setOpen(false);
                }}
              >
                My library
              </NavLink>
            </div>
          </nav>
          <Button
            type="submit"
            title="Log out"
            className="sidebar-logout-btn"
            id="logout"
          />
        </motion.div>

        <ToggleButton
          setOpen={setOpen}
          isOpen={isOpen}
          className="sidebar-toggle-btn"
        />
      </motion.div>

      {isOpen && <Backdrop isOpen={isOpen} onClose={() => setOpen(false)} />}
    </>
  );
};

export default BurgerMenu;
