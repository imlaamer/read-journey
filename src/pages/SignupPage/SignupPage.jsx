import Container from '../../components/common/Container/Container';
import AuthForm from '../../components/forms/AuthForm/AuthForm';
import Meta from '../../components/common/Meta/Meta';
import AuthWrapper from '../../components/AuthWrapper/AuthWrapper';
import s from './SignupPage.module.css';

const SignupPage = () => {
  return (
    <>
      <Meta title="Register Page" />
      <AuthWrapper>
        <AuthForm type="signup" />
      </AuthWrapper>
    </>
  );
};

export default SignupPage;
