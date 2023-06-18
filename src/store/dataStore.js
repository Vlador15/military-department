import { makeAutoObservable } from 'mobx';
import { getSquads, getSquadsById } from '../api';

export default class DataStore {
  squads = []; // список всех взводов
  squad = []; // выбранный взвод
  squadPeoples = []; // личный состав выбранного взвода
  activeSquad = 0;

  constructor() {
    makeAutoObservable(this);

    // при старте приложения грузим взводы
    this.setSquads();
  }

  setSquads() {
    this.squads = getSquads();
  }

  setSquad(data) {
    this.squad = data;
  }

  setActiveSquad = (number) => {
    this.activeSquad = number;

    this.setSquadPeoples(this.activeSquad);
  };

  get getActiveSquad() {
    return this.activeSquad;
  }

  // загрузка по API личного состава для выбранного взвода
  setSquadPeoples = (id) => {
    const data = getSquadsById(Number(id));
    this.squadPeoples = data;
    return data;
  };

  // получение личного состава для выбранного взвода
  getSquadPeoples = (squadId) => {
    if (!squadId) return this.squadPeoples;

    return this.setSquadPeoples(squadId);
  };

  // возвращаем список подчиненных для командира с переданным ID
  getPersonnelDivision = (id) => {
    return this.squad.filter((x) => x.attached?.includes(id));
  };

  // получить профиль подчиненного по id
  getProfileById = (squadId, id) => {
    const peoples = this.getSquadPeoples(squadId);
    return peoples.find((x) => x.id === Number(id));
  };

  // получить командира взвода
  get getCommander() {
    return this.squad.find((x) => x.level === 1);
  }

  // получение командиров отделения
  get getCommandersDivisions() {
    const res = this.squad.filter((x) => x.level === 2);
    return res;
  }

  // получить командиров отделений в взводе по номеру
  getCommanderSquadById = (id) => {
    const data = this.getSquadPeoples(id);

    return data.filter((x) => x.level === 2);
  };

  // получение выбранного взвода
  get getSquad() {
    return this.squad;
  }

  // получение выбранного взвода по номеру
  getSquadByNumber = (number) => {
    return this.squads.find((x) => x.number === Number(number));
  };

  // получение всех взводов
  get getSquads() {
    return this.squads;
  }
}
