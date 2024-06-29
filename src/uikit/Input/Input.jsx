import { forwardRef } from 'react';
import s from './Input.module.css';

const Input = forwardRef(function Input(
  { id, label, type, name, placeholder, className, ...rest },
  ref
) {
  const inputClasses = `${s.input} ${s[className]}`;

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
