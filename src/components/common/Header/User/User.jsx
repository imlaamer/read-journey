import { useSelector } from 'react-redux';
import Icon from '../../Icon/Icon';
import { selectUserName } from '../../../../redux/auth/authSelectors';
import s from './User.module.css';

const User = () => {
  // const username = useSelector(selectUserName);
  const username = 'Lolita Yenik'; //-

  const avatarFirstLetter = username.split('')[0].toUpperCase();

  return (
    <div className={s.userWrapper}>
      <div className={s.avatar}>
        <span className={s.letter}>{avatarFirstLetter}</span>
      </div>
      <p className={s.userName}>{username}</p>
    </div>
  );
};

export default User;
