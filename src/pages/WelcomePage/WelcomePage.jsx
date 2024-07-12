import { useNavigate } from 'react-router-dom';

import Button from '../../uikit/Button/Button';
import Meta from '../../components/common/Meta/Meta';
import AuthWrapper from '../../components/AuthWrapper/AuthWrapper';

import s from '../WelcomePage/WelcomePage.module.css';

//сторінка для незареєстрованих

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Meta title="Read Journey - Welcome Page" />
      <AuthWrapper>
        <p className={s.subtitle}>Track your reading progress effortlessly </p>
        <ul className={s.list}>
          <li className={s.box}>
            <div className={s.cirlce}>1</div>
            <p className={s.text}>
              <span className={s.accent}>Create a personal library: </span>
              add the books you intend to read to it.
            </p>
          </li>
          <li className={s.box}>
            <div className={s.cirlce}>2</div>
            <p className={s.text}>
              <span className={s.accent}>Create your first workout:</span>{' '}
              define a goal, choose a period, start training.
            </p>
          </li>
          <li className={s.box}>
            <div className={s.cirlce}>3</div>
            <p className={s.text}>
              <span className={s.accent}>Explore recommendations</span> to
              always have exciting new reads in sight.
            </p>
          </li>
        </ul>
        <div className={s.btnsWrapper}>
          <Button
            title="Registration"
            className="welcome-page-signup-btn"
            onClick={() => navigate('/register')}
          />
          <Button
            title="Log In"
            className="welcome-page-signin-btn"
            onClick={() => navigate('/login')}
          />
        </div>
        {/* </Container> */}
      </AuthWrapper>
    </>
  );
};

export default WelcomePage;

{
  /* <p> Get Started Today! </p> */
}
