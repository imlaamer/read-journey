import s from './FinishedBookCard.module.css';

// рефакторинг - зробити спільний компоненет
const FinishedBookCard = () => {
  return (
    <div className={s.container}>
      <p className={s.title}>The book is read</p>
      <p className={s.text}>
        It was an <span className={s.accent}>exciting journey </span>, where
        each page revealed new horizons, and the characters became inseparable
        friends.
      </p>
    </div>
  );
};

export default FinishedBookCard;
