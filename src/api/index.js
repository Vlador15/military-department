import axios from 'axios';
import Avatar from '../assets/images/avatar.png';

// получить всю информацию по взводу
export const getSquadsById = (id) => {
  // const url = ``;
  // axios.get(url).then((res) => {
  //   const data = res.data;
  //   console.log(data);
  // });
  // const data = [
  //   {
  //     id: 1,
  //     squadId: 456,
  //     name: 'Кондаков Тимофей Михайлович',
  //     avatar: Avatar,
  //     role: 'Командир взвода',
  //     level: 1,
  //     vus: '541100',
  //   },
  //   {
  //     id: 2,
  //     squadId: 456,
  //     name: 'Сорокин Тимофей Владимирович',
  //     avatar: Avatar,
  //     role: 'Командир отделения',
  //     division: '1',
  //     level: 2,
  //     vus: '',
  //   },
  //   {
  //     id: 3,
  //     squadId: 456,
  //     name: 'Сорокин Тимофей Игоревич',
  //     avatar: Avatar,
  //     role: 'Командир отделения',
  //     division: '2',
  //     level: 2,
  //     vus: '541100',
  //   },
  //   {
  //     id: 4,
  //     squadId: 456,
  //     name: 'Харитонов Алексей Михайлович',
  //     avatar: Avatar,
  //     role: 'Командир отделения',
  //     division: '3',
  //     level: 2,
  //     vus: '',
  //   },
  //   {
  //     id: 5,
  //     squadId: 456,
  //     name: 'Молодой Иван Сергеевич',
  //     avatar: Avatar,
  //     role: 'Командир отделения',
  //     division: '4',
  //     level: 2,
  //     vus: '541100',
  //   },
  //   {
  //     id: 6,
  //     squadId: 456,
  //     name: 'Авдеев Иван Николаевич',
  //     avatar: Avatar,
  //     role: 'Курсант',
  //     level: 3,
  //     attached: [4, 3],
  //     vus: '541100',
  //   },
  //   {
  //     id: 7,
  //     squadId: 456,
  //     name: 'Агапов Александр Сергеевич',
  //     avatar: Avatar,
  //     role: 'Курсант',
  //     level: 3,
  //     attached: [5, 3],
  //     vus: '541100',
  //   },
  //   {
  //     id: 8,
  //     squadId: 456,
  //     name: 'Иванов Сергей Алексеевич',
  //     avatar: Avatar,
  //     role: 'Курсант',
  //     level: 3,
  //     attached: [2, 3, 4, 5],
  //     vus: '541100',
  //   },
  // ];
  // return data.filter((x) => x.squadId === Number(id));
};

// получить информацию про все взводы
export const getSquads = () => {
  console.log(process.env);
  const url = `${process.env.REACT_APP_REMOTE_SERVER}/platoon`;

  return new Promise((resolve, reject) => {
    axios.get(url).then((res) => {
      const data = res.data;
      console.log(data);

      resolve(data);
    });
  });

  // const data = [
  //   {
  //     number: 456,
  //     kom_squad: 'Кондаков Т.М.',
  //     peoples: 45,
  //     vus: 5656,
  //     divisions: 4,
  //     grade: 4.8,
  //     attendance: '90%',
  //     preparation: 4,
  //   },
  //   {
  //     number: 123,
  //     kom_squad: 'Тестов Т.М.',
  //     peoples: 35,
  //     vus: 5656,
  //     divisions: 4,
  //     grade: 3.6,
  //     attendance: '67%',
  //     preparation: 3,
  //   },
  //   {
  //     number: 453,
  //     kom_squad: 'Кондаков Т.М.',
  //     peoples: 43,
  //     vus: 5656,
  //     divisions: 4,
  //     grade: 4.1,
  //     attendance: '88%',
  //     preparation: 5,
  //   },
  // ];
  // return data;
};
