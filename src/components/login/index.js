import classes from './styles.module.scss';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { Context } from '../../index';
import Logo from '../../assets/images/logo.svg';

export const FormParams = () => {
  const { user } = useContext(Context);
  const { login, token } = user.credentials;

  const [data, setData] = useState({
    login,
    token,
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e, type) => {
    if (!type) return;
    const { value } = e.target;
    setData((prevData) => ({ ...prevData, [type]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    const { login, token } = data;

    // Валидация
    if (login.trim() === '') newErrors.login = 'Заполните: login';
    if (token.trim() === '') newErrors.token = 'Заполните: token';
    if (Object.keys(newErrors).length > 0) return setErrors(newErrors);

    // Обновление учетных данных пользователя
    user.setCredentials({ login, token });
    user.setAuth(true); // если удачно авторизовался
    navigate('/');
  };

  return (
    <>
      <div className={classes.blur} />
      <div className={classes.wrapper}>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          width="350px"
          mb={3}
          className={classes.form}
        >
          <img src={Logo} alt="logo" width="187" height="187" />
          <p className={classes.title}>Вход в систему</p>
          <input
            type="text"
            placeholder="Логин"
            value={data.login}
            onChange={(e) => handleChange(e, 'login')}
            className={classes.input}
          />
          {errors.login && <p className={classes.error}>Введите логин</p>}
          <input
            type="text"
            placeholder="Токен"
            value={data.token}
            onChange={(e) => handleChange(e, 'token')}
            className={classes.input}
          />
          {errors.token && <p className={classes.error}>Введите токен</p>}

          <button className={classes.buttonEnter} onClick={handleSubmit}>
            Войти
          </button>
          <button
            className={classes.buttonToken}
            onClick={() => navigate('/get-token')}
          >
            Получить токен
          </button>
        </Box>
      </div>
    </>
  );
};
