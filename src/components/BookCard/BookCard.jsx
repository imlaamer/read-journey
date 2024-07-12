import Button from '../../uikit/Button/Button';
import s from './BookCard.module.css';

const BookCard = () => {
  // btns titles :  'Start reading'  "Add to library"

  return (
    <div className={s.container}>
      <div className={s.scrollContainer}>
        <img src="#" alt="Book" className={s.image} />
        <p className={s.title}>I See You Are Interested In The Dark</p>
        <p className={s.text}>Hilarion Pavlyuk</p>
        <p className={s.accent}>664 pages</p>
        <Button title="Add to library" className="card-btn" />
      </div>
    </div>
  );
};

export default BookCard;
