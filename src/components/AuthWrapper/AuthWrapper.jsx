import Container from '../common/Container/Container';
import Logo from '../common/Logo/Logo';
import s from './AuthWrapper.module.css';

const AuthWrapper = ({ children }) => {
  return (
    <section className={s.authWrapper}>
      <Container className="auth-content-box">
        <div className={s.contentContainer}>
          <Logo />
          <h1 className={s.title}>
            Expand your mind, reading<span className={s.accent}> a book</span>
          </h1>
          {children}
        </div>
      </Container>
      <Container className="phone-box" />
    </section>
  );
};

export default AuthWrapper;
