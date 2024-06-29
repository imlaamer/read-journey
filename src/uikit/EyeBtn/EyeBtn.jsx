import { useState } from 'react';
import Icon from '../../components/common/Icon/Icon';

import s from './EyeBtn.module.css';

const EyeBtn = ({ setShowPassword, showPassword }) => {
  const handleToggleEye = (e) => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <button type="button" className={s.eyeBtn} onClick={handleToggleEye}>
      <Icon id={!showPassword ? 'eye-off' : 'eye-on'} />
    </button>
  );
};
export default EyeBtn;
