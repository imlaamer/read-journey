import { motion } from 'framer-motion';
import clsx from 'clsx';

import Icon from '../../common/Icon/Icon';

import s from './ToggleButton.module.css';

const ToggleButton = ({ setOpen, isOpen, className }) => {
  const handleClick = () => {
    setOpen((prev) => !prev);
    // handleCloseModal();
  };

  return (
    <button
      onClick={handleClick}
      className={clsx(s.button, s[className], { [s.openedSidebarBtn]: isOpen })}
    >
      <svg width="28" height="28" viewBox="0 0 23 23">
        <motion.path
          strokeWidth="2"
          stroke="#F9F9F9"
          strokeLinecap="round"
          variants={{
            visible: { d: 'M 2 2.5 L 20 2.5' },
            hidden: { d: 'M 3 16.5 L 17 2.5' },
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <motion.path
          strokeWidth="2"
          stroke="#F9F9F9"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
        />
        <motion.path
          strokeWidth="2"
          stroke="#F9F9F9"
          strokeLinecap="round"
          d="M 8 16.346 L 20 16.346"
          variants={{
            visible: { d: 'M 8 16.346 L 20 16.346' },
            hidden: { d: 'M 3 2.5 L 17 16.346' },
            closed: { d: 'M 8 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </svg>
    </button>
  );
};

export default ToggleButton;
