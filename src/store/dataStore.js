import { makeAutoObservable } from 'mobx';
import { getSquads } from '../api';

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

  async setSquads() {
    this.squads = await getSquads();
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

  getSquadsById(id) {
    return this.squads.filter((x) => x.id === id);
  }

  // загрузка по API личного состава для выбранного взвода
  setSquadPeoples = (id) => {
    const squad = this.getSquadsById(id);

    if (squad[0]) {
      const students = [squad[0].commander];
      squad[0].groups?.forEach((group) => {
        students.push(group.commander);

        group.students.forEach((student) => students.push(student));
      });

      this.squadPeoples = students;
      return students;
    }

    return squad;
  };

  // получить командиров отделений в взводе по номеру
  getCommanderSquadById = (id) => {
    const squad = this.getSquadsById(id);

    if (squad[0]) {
      const students = [squad[0].commander];
      squad[0].groups?.forEach((group) => {
        students.push(group.commander);
      });

      this.squadPeoples = students;
      return students;
    }

    return squad;
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
    return peoples.find((x) => x.id === id);
  };

  // получить командира взвода
  get getCommander() {
    return this.squad.commander;
  }

  // получение командиров отделения
  get getGroups() {
    return this.squad.groups;
  }

  // получение выбранного взвода
  get getSquad() {
    return this.squad;
  }

  // получение выбранного взвода по номеру
  getSquadById = (id) => {
    return this.squads.find((x) => x.id === id);
  };

  // получение всех взводов
  get getSquads() {
    return this.squads;
  }
}
