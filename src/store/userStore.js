import { makeAutoObservable } from 'mobx';

export default class UserStore {
  login = '';
  token = '';
  email = '';
  isAuth = false;

  constructor() {
    makeAutoObservable(this);
  }

  // установить учетные данные
  setCredentials = ({ login, token }) => {
    this.login = login;
    this.token = token;
  };

  setAuth = (value) => {
    this.isAuth = value;
  };

  getAuth = () => {
    return this.isAuth;
  };

  setEmail = (email) => {
    this.email = email;
  };

  get credentials() {
    return {
      login: this.login,
      token: this.token,
    };
  }

  get getEmail() {
    return this.email;
  }
}
