import AuthForm from '../../components/forms/AuthForm/AuthForm';
import Meta from '../../components/common/Meta/Meta';
import AuthWrapper from '../../components/AuthWrapper/AuthWrapper';

import s from './SigninPage.module.css';

const SigninPage = () => {
  return (
    <>
      <Meta title="Read Journey - Log In Page" />
      <AuthWrapper>
        <AuthForm type="signin" />
      </AuthWrapper>
    </>
  );
};

export default SigninPage;
