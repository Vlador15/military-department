import classes from './styles.module.scss';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { Context } from '../../index';
import Logo from '../../assets/images/logo.svg';

export const FormParams = () => {
  const { user } = useContext(Context);
  const [email, setEmail] = useState(user.getEmail || '');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e, type) => {
    if (!type) return;
    const { value } = e.target;
    setEmail(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    console.log('1', email);
    // Валидация
    if (email.trim() === '') newErrors.email = 'Заполните: email';
    if (Object.keys(newErrors).length > 0) return setErrors(newErrors);

    // Обновление учетных данных пользователя
    user.setEmail(email);

    // API ЗАПРОС ДЛЯ ПОЛУЧЕНИЯ ТОКЕНА И РЕДИРЕКТ
    navigate('/login');
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
          <input
            type="text"
            placeholder="Введите свою почту домена @mirea.ru"
            value={email}
            onChange={(e) => handleChange(e, 'email')}
            className={classes.input}
          />
          {errors.email && <p className={classes.error}>Введите email</p>}

          <button className={classes.buttonEnter} onClick={handleSubmit}>
            Получить
          </button>
        </Box>
      </div>
    </>
  );
};
