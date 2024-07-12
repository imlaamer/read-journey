import { useEffect } from 'react';

import s from './Backdrop.module.css';

const Backdrop = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
  }, [isOpen]);

  useEffect(() => {
    const onEscPress = (e) => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', onEscPress);

    return () => {
      window.removeEventListener('keydown', onEscPress);
      document.body.style.overflow = 'scroll';
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
      document.body.style.overflow = 'scroll';
    }
  };

  return (
    <div className={s.backdrop} onClick={handleBackdropClick}>
      {children}
    </div>
  );
};

export default Backdrop;
