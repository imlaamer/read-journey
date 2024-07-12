import { forwardRef } from 'react';
import s from './Input.module.css';
import clsx from 'clsx';

const Input = forwardRef(function Input(
  { id, label, type, name, placeholder, className, error, valid, ...rest },
  ref
) {
  const inputClasses = `${s.input} ${s[className]} ${error && s.errorInput} ${
    valid && s.validInput
  }`;

  // const inputClasses = clsx(s.input, s[className], {
  //   `${s.errorInput}`: error,
  // });

  return (
    <div className={s.wrapper}>
      <label htmlFor={id} className={s.label}>
        {label}
      </label>
      <input
        id={id}
        ref={ref}
        type={type}
        name={name}
        placeholder={placeholder}
        className={inputClasses}
        {...rest}
      />
    </div>
  );
});

export default Input;
