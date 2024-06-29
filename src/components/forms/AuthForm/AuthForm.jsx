import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Button from '../../../uikit/Button/Button';
import Input from '../../../uikit/Input/Input';
import Container from '../../common/Container/Container';
import EyeBtn from '../../../uikit/EyeBtn/EyeBtn';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import useValidationSchema from '../../../schemas/authFormValidationSchema';
import { signUp, updateProfile } from '../../../redux/auth/authOperations';

import s from './AuthForm.module.css';
import { NavLink, useNavigate } from 'react-router-dom';

const AuthForm = ({ type }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { signupFormSchema, signinFormSchema } = useValidationSchema();
  const currentSchema = type === 'signup' ? signupFormSchema : signinFormSchema;

  const [isSignupDisabled, setIsSignupDisabled] = useState(false);
  const [isSigninDisabled, setIsSigninDisabled] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(currentSchema),
  });

  const onSubmitHandler = async (credentials) => {
    // setIsDisabled(true);
    if (type === 'signup') {
      setIsSignupDisabled(true);

      const isSignup = await dispatch(signUp(credentials));
      if (isSignup.error) return;
      navigate('/recommended');
      toast.success('You`ve been successfully registered!'); //-

      //   .unwrap()
      //   .then((user) => {
      //     dispatch();
      //   })
      //   .then(() => {
      //     toast.success('You`ve been successfully registered!');
      //     handleCloseModal();
      //     setIsDisabled(false);
      //   })
      //   .catch(() => {
      //     setIsDisabled(false);
      //   });
    }

    if (type === 'signin') {
      setIsSigninDisabled(true);

      const isLogged = await dispatch(loginUser({ email, password }));
      if (isLogged.error) return;
      navigate('/recommended');
      toast.success('Welcome!'); //-
    }
  };

  return (
    // <Container className="auth-container">
    <form className={s.form} onSubmit={handleSubmit(onSubmitHandler)}>
      <div>
        {type === 'signup' && (
          <div className={s.errorMessageBox}>
            <Input
              id="text"
              label="Name:"
              type="text"
              {...register('username')}
              className={
                errors.username?.message ? 'errorInput nameInput' : 'nameInput'
              }
            />
            <ErrorMessage errorMessage={errors.username?.message} />
          </div>
        )}

        <div className={s.errorMessageBox}>
          <Input
            id="mail"
            label="Mail:"
            type="email"
            {...register('email')}
            className={
              errors.email?.message ? 'errorInput mailInput' : 'mailInput'
            }
          />
          <ErrorMessage errorMessage={errors.email?.message} />
        </div>

        <div className={s.lastErrorMessageBox}>
          <div className={s.label}>
            <Input
              id="password"
              label="Password:"
              type={showPassword ? 'text' : 'password'}
              {...register('password')}
              className={
                errors.password?.message
                  ? 'errorInput passwordInput'
                  : 'passwordInput'
              }
              autoComplete="new-password"
            />
            <EyeBtn
              setShowPassword={setShowPassword}
              showPassword={showPassword}
            />
          </div>
          <ErrorMessage errorMessage={errors.password?.message} />
        </div>
      </div>

      <div className={s.btnLinkWrapper}>
        <Button
          type="submit"
          title={type === 'signup' ? 'Registration' : 'Log In'}
          className={type === 'signin' && 'authBtn'}
          // disabled={isDisabled}
        />

        <NavLink
          className={({ isActive }) =>
            `${s.navLink} ${isActive ? s.active : ''}`
          }
          to={type === 'signup' ? '/login' : '/register'}
          // onClick={() => {
          //   setOpen(false);
          // }}
        >
          {type === 'signup'
            ? 'Already have an account?'
            : 'Don’t have an account? '}
        </NavLink>
      </div>
    </form>
    // </Container>
  );
};

export default AuthForm;
