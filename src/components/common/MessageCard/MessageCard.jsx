import clsx from 'clsx';
import s from './MessageCard.module.css';

// ------for modals and tips------
// good job
// to start training..
// the book is read
// progress

const MessageCard = ({ type }) => {
  let title = '';
  switch (type) {
    case 'progress-tip':
      title = 'Progress';
      break;
    case 'book-added':
      title = 'Good job';
      break;
    case 'book-finished':
      title = 'The book is read';
      break;
    //   default
  }

  return (
    <div
      className={clsx(s.container, {
        [s.progressContainer]: type === 'progress-tip',
        [s.startContainer]: type === 'start-tip',
        [s.finishContainer]: type === 'book-finished',
        [s.addedContainer]: type === 'book-added',
      })}
    >
      {title && (
        <p
          className={clsx(s.title, {
            [s.progressTitle]: type === 'progress-tip',
            [s.finishTitle]: type === 'book-finished',
            [s.addedTitle]: type === 'book-added',
          })}
        >
          {title}
        </p>
      )}

      {type === 'progress-tip' && (
        <p className={clsx(s.text, s.progressText)}>
          Here you will see when and how much you read. To record, click on the
          red button above.
        </p>
      )}

      {type === 'start-tip' && (
        <p className={clsx(s.text, s.startText)}>
          <span className={s.accent}>To start training, add </span>some of your
          books <span className={s.accent}>or from the recommended ones</span>
        </p>
      )}

      {type === 'book-added' && (
        <p className={clsx(s.text, s.addedText)}>
          Your book is now in <span className={s.accent}>the library!</span> The
          joy knows no bounds and now you can start your training
        </p>
      )}

      {type === 'book-finished' && (
        <p className={clsx(s.text, s.finishText)}>
          It was an <span className={s.accent}>exciting journey </span>, where
          each page revealed new horizons, and the characters became inseparable
          friends.
        </p>
      )}

      {(type === 'progress-tip' || type === 'start-tip') && (
        <div
          className={clsx(s.circle, {
            [s.startCircle]: type === 'start-tip',
            [s.progressCircle]: type === 'progress-tip',
          })}
        ></div>
      )}
    </div>
  );
};

export default MessageCard;
