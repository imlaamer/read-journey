import s from './Dashboard.module.css';

const Dashboard = ({ children }) => {
  return (
    <div className={s.container}>
      <div className={s.contentContainer}>{children}</div>
    </div>
  );
};

export default Dashboard;

//rci snippet
