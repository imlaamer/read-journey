import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import Container from '../Container/Container';
import Navigation from './Navigation/Navigation';
import BurgerMenu from '../../BurgerMenu/BurgerMenu';
import './Header.css';
import ToggleButton from '../../BurgerMenu/ToggleButton/ToggleButton';

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  // const location = useLocation();
  // const isHomePage = location.pathname === '/';
  // const headerClass = isHomePage ? 'transperentHeader' : 'coloredHeader';

  // const [isLogModalOpen, setIsLogModalOpen] = useState(false);
  // const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  // const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const handleOpenModal = (e) => {
    // switch (e.target.id) {
    //   case 'log':
    //     setIsLogModalOpen(true);
    //     break;
    //   case 'signup':
    //     setIsSignupModalOpen(true);
    //     break;
    //   case 'logout':
    //     setIsLogoutModalOpen(true);
    //     break;
    //   default:
    //     break;
    // }
  };

  const handleCloseModal = () => {
    // if (isLogModalOpen) {
    //   return setIsLogModalOpen(false);
    // } else if (isSignupModalOpen) {
    //   return setIsSignupModalOpen(false);
    // } else if (isLogoutModalOpen) {
    //   return setIsLogoutModalOpen(false);
    // }
  };

  return (
    <header>
      <div className="header-container">
        <Navigation
          handleOpenModal={handleOpenModal}
          handleCloseModal={handleCloseModal}
          // isLogoutModalOpen={isLogoutModalOpen}
        />

        <BurgerMenu
        // handleOpenModal={handleOpenModal}
        // handleCloseModal={handleCloseModal}
        // isLogoutModalOpen={isLogoutModalOpen}
        />
      </div>
    </header>
  );
};

export default Header;
