import { Layout } from '../components/layout/index.js';
import { Box, Button, Typography } from '@mui/material';
import { useContext } from 'react';
import { Context } from '../index.js';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { ChartGrade } from '../components/charts/chartGrade.js';
import { ChartAttendance } from '../components/charts/chartAttendance.js';
import { TablePersonnelFull } from '../components/table/personnelFull.js';
import {
  getCardsCarousel,
  structurePeoples,
  structurePeoplesCommander,
} from '../helpers/data.js';
import { SliderCards } from '../components/card/sliderCards.js';
import { observer } from 'mobx-react-lite';

export const StatisticsSquad = observer(() => {
  const { data } = useContext(Context);
  const { squadId } = useParams();
  const navigate = useNavigate();

  const squad = data.getSquadById(squadId);
  const squadPeoples = data.getSquadPeoples(squadId);
  const squadPeoplesCommanders = data.getCommanderSquadById(squadId);

  const students = data.getSquadPeoples(squadId);

  // если отряд не выбран, переадрисовываем
  useEffect(() => {
    if (!squad) return navigate('/');
  }, [squad, navigate]);

  const cards = getCardsCarousel({ squad, students });

  return (
    squad && (
      <Layout>
        <Box sx={{ maxWidth: '1340px', margin: '0 auto', pr: '30px' }}>
          <Box
            sx={{
              mb: '40px',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: '20px',
            }}
          >
            <Typography variant="inherit">Статистика и анализ</Typography>
          </Box>

          <SliderCards cards={cards} />

          <Box display="flex" justifyContent="space-between">
            <ChartGrade />
            <ChartAttendance />
          </Box>

          <Box display="flex" justifyContent="space-between">
            <Box
              display="flex"
              flexDirection="column"
              sx={{ fontSize: '20px', fontWeight: 'bold', mt: '45px' }}
            >
              <Typography variant="inherit" mb={1}>
                Личный состав взвода
              </Typography>
              <TablePersonnelFull
                structure={structurePeoples}
                handleBtn={(id) => navigate(`profile/${id}`)}
                data={squadPeoples}
              />
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              sx={{ fontSize: '20px', fontWeight: 'bold', mt: '45px' }}
            >
              <Typography variant="inherit" mb={1}>
                Командование взвода
              </Typography>
              <TablePersonnelFull
                structure={structurePeoplesCommander}
                handleBtn={(id) => navigate(`profile/${id}`)}
                data={squadPeoplesCommanders}
              />

              <Box display="flex" justifyContent="flex-end">
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => navigate(`/structure-squad/${squadId}`)}
                  sx={{ width: '230px', padding: '5px 20px', mt: '40px' }}
                >
                  Структура взвода
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Layout>
    )
  );
});
