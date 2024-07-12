import Icon from '../../components/common/Icon/Icon';
import s from './EyeBtn.module.css';

const EyeBtn = ({ setShowPassword, showPassword }) => {
  return (
    <button
      type="button"
      className={s.eyeBtn}
      onClick={() => setShowPassword((prevState) => !prevState)}
    >
      <Icon id={!showPassword ? 'eye-off' : 'eye-on'} className='eye-icon' />
    </button>
  );
};
export default EyeBtn;
