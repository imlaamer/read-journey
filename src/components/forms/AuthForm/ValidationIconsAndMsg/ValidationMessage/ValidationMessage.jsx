import s from './ValidationMessage.module.css';

const ValidationMessage = ({ msg, isError, className  }) => {
  const currentClass = isError ? s.errorMessage : s.validMessage;

  return (
    msg && (
      <div className={`${s.message} ${s[className]} ${currentClass}`}>
        {msg}
      </div>
    )
  );
};
export default ValidationMessage;
