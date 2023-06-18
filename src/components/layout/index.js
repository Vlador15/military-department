import classes from './styles.module.scss';
import { Sidebar } from '../sidebar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleEvents = (type) => {
    if (type === 'notification') {
      navigate(`/notification`);
    }
  };

  return (
    <header>
      <div className={classes.events}>
        <NotificationsIcon
          sx={{ color: '#3053e4', cursor: 'pointer' }}
          fontSize="large"
          onClick={() => handleEvents('notification')}
        />
      </div>
    </header>
  );
};

export const Layout = ({ children }) => {
  return (
    <div className={classes.container}>
      <Header />
      <Sidebar />
      <main className={classes.content}>{children}</main>
    </div>
  );
};
