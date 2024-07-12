import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import Icon from '../Icon/Icon';
import Backdrop from '../Backdrop/Backdrop';

import s from './Modal.module.css';

const modalRootRef = document.querySelector('#modal-root');

// протестувати модалку 

const Modal = ({ onClose, children, className, isOpen }) => {
  const containerClassNames = `${s.container} ${s[className]}`;

  // useEffect(() => {
  //   if (isOpen) {
  //     document.body.style.overflow = 'hidden';
  //   }
  // }, [isOpen]);

  // useEffect(() => {
  //   const onEscPress = (e) => {
  //     if (e.code === 'Escape') {
  //       onClose();
  //     }
  //   };

  //   window.addEventListener('keydown', onEscPress);

  //   return () => {
  //     window.removeEventListener('keydown', onEscPress);
  //     document.body.style.overflow = 'scroll';
  //   };
  // }, [onClose]);

  // const handleBackdropClick = (e) => {
  //   if (e.target === e.currentTarget) {
  //     onClose();
  //     document.body.style.overflow = 'scroll';
  //   }
  // };

  return createPortal(
    <Backdrop isOpen={isOpen} onClose={onClose}>
      {/* <div className={s.backdrop} onClick={handleBackdropClick}> */}
      <div className={containerClassNames}>
        <button
          type="button"
          className={s.closeBtn}
          onClick={onClose}
          aria-label="Close"
        >
          <Icon id="close" width="22" height="22" stroke="#F9F9F9" />
        </button>

        <div className={s.content}>{children}</div>
      </div>
      {/* </div>, */}
    </Backdrop>,
    modalRootRef
  );
};

export default Modal;
