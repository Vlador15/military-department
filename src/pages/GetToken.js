import classes from '../components/getToken/styles.module.scss';
import { FormParams } from '../components/getToken';

export const GetToken = () => {
  return (
    <div className={classes.container}>
      <div className={classes.block}>
        <FormParams />
      </div>
    </div>
  );
};
