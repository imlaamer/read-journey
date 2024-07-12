import clsx from 'clsx';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Button from '../../../uikit/Button/Button';
import Input from '../../../uikit/Input/Input';
import EyeBtn from '../../../uikit/EyeBtn/EyeBtn';
import ValidationIconsAndMsg from './ValidationIconsAndMsg/ValidationIconsAndMsg';

import useValidationSchema from '../../../schemas/authFormValidationSchema';
import { signIn, signUp } from '../../../redux/auth/authOperations';

import s from './AuthForm.module.css';

const AuthForm = ({ type }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { signupFormSchema, signinFormSchema } = useValidationSchema();
  const currentSchema = type === 'signup' ? signupFormSchema : signinFormSchema;

  const [isSignupDisabled, setIsSignupDisabled] = useState(false);
  const [isSigninDisabled, setIsSigninDisabled] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  // const loginClassNames = clsx(s.lastInputIconsMessageBox, { `${s.loginLastInputIconsMessageBox }`: type === 'signin'})

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(currentSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  //   useEffect(() => {
  //     console.log(errors);
  //   }, [errors]);

  const onSubmitHandler = async (credentials) => {
    // setIsDisabled(true);
    if (type === 'signup') {
      setIsSignupDisabled(true);

      const isSignup = await dispatch(signUp(credentials));
      setIsSignupDisabled(false);
      if (isSignup.error) return;
      // navigate('/recommended');
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

      const isLogged = await dispatch(signIn(credentials));
      setIsSignupDisabled(false);
      if (isLogged.error) return;
      // navigate('/recommended');
      toast.success('Welcome!'); //-
    }
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmitHandler)}>
      <div>
        {type === 'signup' && (
          <div className={s.inputIconsMessageBox}>
            <Input
              id="text"
              label="Name:"
              type="text"
              {...register('name')}
              className="nameInput"
              error={errors.name?.message}
              valid={dirtyFields?.name && !errors.name?.message}
            />
            <ValidationIconsAndMsg
              errorMsg={errors.name?.message}
              dirtyField={dirtyFields?.name}
              fieldName="name"
            />
          </div>
        )}

        <div className={s.inputIconsMessageBox}>
          <Input
            id="mail"
            label="Mail:"
            type="email"
            {...register('email')}
            className="mailInput"
            error={errors.email?.message}
            valid={dirtyFields?.email && !errors.email?.message}
          />
          <ValidationIconsAndMsg
            errorMsg={errors.email?.message}
            dirtyField={dirtyFields?.email}
            fieldName="email"
          />
        </div>

        {/* <div className={s.lastInputIconsMessageBox}> */}
        {/* // const loginClassNames = clsx(s.lastInputIconsMessageBox, { `${s.loginLastInputIconsMessageBox }`: type === 'signin'}) */}
        <div
          className={
            type === 'signin'
              ? s.loginLastInputIconsMessageBox
              : s.lastInputIconsMessageBox
          }
        >
          <div className={s.label}>
            <Input
              id="password"
              label="Password:"
              type={showPassword ? 'text' : 'password'}
              {...register('password')}
              className="passwordInput"
              error={errors.password?.message}
              valid={dirtyFields?.password && !errors.password?.message}
              autoComplete="new-password"
            />
            {/* умова рендеру ?????? */}
            {!errors.password?.message && !dirtyFields?.password && (
              <EyeBtn
                setShowPassword={setShowPassword}
                showPassword={showPassword}
              />
            )}
          </div>
          <ValidationIconsAndMsg
            errorMsg={errors.password?.message}
            dirtyField={dirtyFields?.password}
            fieldName="password"
          />
        </div>
      </div>

      <div className={s.btnLinkWrapper}>
        <Button
          type="submit"
          title={type === 'signup' ? 'Registration' : 'Log In'}
          className={type === 'signin' && 'authBtn'}
          disabled={type === 'signup' ? isSignupDisabled : isSigninDisabled}
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
  );
};

export default AuthForm;
