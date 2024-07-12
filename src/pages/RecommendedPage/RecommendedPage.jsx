import Dashboard from '../../components/common/Dashboard/Dashboard';
import DashboardForm from '../../components/forms/DashboardForm/DashboardForm';

import s from './RecommendedPage.module.css';

const RecommendedPage = () => {
  return (
    <>
      <div className={s.wrapper}>
        <Dashboard>
          <DashboardForm type="recommended" />
        </Dashboard>
      </div>
    </>
  );
};

export default RecommendedPage;
