export const getCardsCarousel = (squad) => {
  if (!squad) return [];

  const addRow = (label, title, desc, backgroundColor) => ({
    label,
    title,
    desc,
    backgroundColor,
  });

  return [
    addRow('Численность взвода', squad?.peoples, 'человек', '#3053E4'),
    addRow('Количество отделений', squad?.divisions, 'отделения', '#3053E4'),
    addRow(
      'Успеваемость отделений',
      squad?.grade,
      'балла',
      'linear-gradient(90deg, #3053E4 0%, #6DDB00 66.67%)'
    ),
    addRow(
      'Посещаемость взвода',
      squad?.attendance,
      'посещаемость',
      'linear-gradient(90deg, #3053E4 0%, #6DDB00 66.67%)'
    ),
    addRow(
      'Военная подготовка',
      squad?.preparation,
      'балла',
      'linear-gradient(90deg, #3053E4 0%, #6DDB00 66.67%)'
    ),
  ];
};

export const structurePeoples = [
  {
    label: '',
    field: 'avatar',
    type: 'img',
  },
  {
    label: 'ФИО',
    field: 'name',
    type: '',
  },
  {
    label: 'Должность',
    field: 'role',
    type: '',
  },
  {
    label: '',
    field: 'id',
    type: 'button',
  },
];

export const structurePeoplesCommander = [
  {
    label: 'Отделение',
    field: 'division',
    type: '',
  },
  {
    label: 'Командир',
    field: 'name',
    type: '',
  },
  {
    label: '',
    field: 'id',
    type: 'button',
  },
];
