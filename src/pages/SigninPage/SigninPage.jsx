import Container from '../../components/common/Container/Container';
import AuthForm from '../../components/forms/AuthForm/AuthForm';
import Meta from '../../components/common/Meta/Meta';

import s from './SigninPage.module.css';
import AuthWrapper from '../../components/AuthWrapper/AuthWrapper';

const SigninPage = () => {
  return (
    <>
      <Meta title="Log In Page" />
      <AuthWrapper>
        <AuthForm type="signin" />
      </AuthWrapper>
    </>
  );
};

export default SigninPage;
