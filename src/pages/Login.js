import classes from '../components/login/styles.module.scss';
import { FormParams } from '../components/login';

export const Login = () => {
  return (
    <div className={classes.container}>
      <div className={classes.block}>
        <FormParams />
      </div>
    </div>
  );
};
