import s from './AddedBookCard.module.css';

// рефакторинг - зробити спільний компоненет 
const AddedBookCard = () => {
  return (
    <div className={s.container}>
      <p className={s.title}>Good job</p>
      <p className={s.text}>
        Your book is now in <span className={s.accent}>the library! </span>The
        joy knows no bounds and now you can start your training
      </p>
    </div>
  );
};

export default AddedBookCard;
