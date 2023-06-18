import { Layout } from '../components/layout/index.js';
import { Box, TableCell, TableRow, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Context } from '../index.js';
import { useNavigate, useParams } from 'react-router-dom';
import { ProfileTable } from '../components/table/profile';
import profileAvatar from '../assets/images/profileImg.png';
import ChartPie from '../components/charts/chartPie.js';
import { TableProfileStats } from './../components/table/profileStats';

export const Profile = () => {
  const { data } = useContext(Context);
  const { squadId, id } = useParams();
  const navigate = useNavigate();

  const profile = data.getProfileById(squadId, id);

  profile.statsVisit = 90;
  profile.statsGrade = 4.8;
  profile.statsMilitaryTraining = 4;

  profile.scheduleVisits = [
    {
      name: 'ИКА',
      data: [
        Array(6).fill({ date: '23.03.2023', value: '+' }),
        [
          {
            date: '23.03.2023',
            value: 'н/а',
            text: 'Причина: отсутствовал по индивидуальному поручению командования ВУЦа',
          },
          ...Array(5).fill({ date: '23.03.2023', value: '+' }),
        ],
      ],
    },
    {
      name: 'Строевая подготовка',
      data: [
        Array(6).fill({ date: '23.03.2023', value: '+' }),
        Array(6).fill({ date: '23.03.2023', value: '+' }),
      ],
    },
  ];

  // если отряд не выбран, переадрисовываем
  useEffect(() => {
    if (!profile) return navigate('/');
  }, [profile, navigate]);

  return (
    profile && (
      <Layout>
        <Box
          sx={{
            ml: '52px',
            mb: '40px',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '20px',
          }}
        >
          <Typography variant="inherit">Профиль</Typography>
        </Box>

        <Box
          display="flex"
          justifyContent="center"
          sx={{ ml: '52px', mr: '77px' }}
        >
          <Box display="flex" alignItems="center">
            <Box sx={{ mr: '30px' }}>
              {/* <img src={profile.avatar} alt="" width="151px" /> */}
              <img src={profileAvatar} alt="" width="151px" />
            </Box>
            <ProfileTable profile={profile} />
          </Box>
          <Box sx={{ width: '250px', ml: '30px' }}>
            <ChartPie
              minValue={1}
              maxValue={100}
              value={profile.statsVisit}
              text={profile.statsVisit + '%'}
              title="Статистика посещения"
            />
          </Box>
        </Box>

        <Box
          sx={{
            mt: '60px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <TableProfileStats scheduleVisits={profile.scheduleVisits} />
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            mt: '40px',
          }}
        >
          <Typography variant="inherit" sx={{ mb: '30px', fontWeight: 'bold' }}>
            Общая статистика
          </Typography>
          <Box display="flex">
            <ChartPie
              minValue={1}
              maxValue={100}
              value={profile.statsVisit}
              text={profile.statsVisit + '%'}
              title="Статистика посещения"
            />
            <ChartPie
              minValue={2}
              maxValue={5}
              value={profile.statsGrade}
              text={profile.statsGrade}
              title="Показатель успеваемости"
            />
            <ChartPie
              minValue={1}
              maxValue={5}
              value={profile.statsMilitaryTraining}
              text={profile.statsMilitaryTraining}
              title="Оценка военной подготовки"
            />
          </Box>
        </Box>
      </Layout>
    )
  );
};
