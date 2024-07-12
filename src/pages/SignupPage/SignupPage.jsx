import AuthForm from '../../components/forms/AuthForm/AuthForm';
import Meta from '../../components/common/Meta/Meta';
import AuthWrapper from '../../components/AuthWrapper/AuthWrapper';

import Icon from '../../components/common/Icon/Icon';
import Modal from '../../components/common/Modal/Modal';
import AddedBookCard from '../../components/AddedBookCard/AddedBookCard';
import FinishedBookCard from '../../components/FinishedBookCard/FinishedBookCard';
import BookCard from '../../components/BookCard/BookCard';
import MessageCard from '../../components/common/MessageCard/MessageCard';

import s from './SignupPage.module.css';

const SignupPage = () => {
  return (
    <>
      <Meta title="Read Journey - Sign Up Page" />
      <AuthWrapper>
        <AuthForm type="signup" />
      </AuthWrapper>

      {/* <Modal> */}
      {/* <MessageCard type="progress-tip" /> */}
      {/* <MessageCard type="start-tip" /> */}
      {/* ------------------------- */}
      {/* <MessageCard type="book-added" /> */}
      {/* <MessageCard type="book-finished" /> */}
      {/* </Modal> */}
      {/* --------------- */}
      {/* <Modal className="book-modal">
        <BookCard />
      </Modal> */}
      {/* --------------- */}
      {/* <Modal> */}
      {/* <AddedBookCard /> */}
      {/* <FinishedBookCard /> */}
      {/* </Modal> */}
      {/* --------------- */}
      {/* <Icon id="invalid" stroke="none" />
      <Icon id="valid" stroke="none" />
      <Icon id="pie-chart-disabled" />
      <Icon id="pie-chart-active" />
      <Icon id="hourglass" stroke="#686868" />
      <Icon id="hourglass" />
      <Icon id="arrow" />
      <Icon id="trash" />
      <Icon id="trash" stroke=" #E85050" />
      <Icon id="attachment" fill="#F9F9F9" stroke="none" />  */}
    </>
  );
};

export default SignupPage;
