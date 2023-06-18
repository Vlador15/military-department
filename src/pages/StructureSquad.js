import { TablePersonnel } from '../components/table/personnel.js';
import { TablePersonnelStructure } from '../components/table/personnelStructure.js';
import { Layout } from '../components/layout/index.js';
import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import { getSquadsById } from '../api/index.js';
import { useContext } from 'react';
import { Context } from '../index.js';
import { useParams } from 'react-router-dom';

export const StructureSquad = () => {
  const [squad, setSquad] = useState([]);
  const { data } = useContext(Context);
  const { id } = useParams();

  useEffect(() => {
    const result = getSquadsById(id);
    data.setSquad(result);
    setSquad(result);
  }, [data, id]);

  return (
    squad && (
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
          <Typography variant="inherit">Структура взвода</Typography>
        </Box>
        <Box display="flex" sx={{ ml: '52px', mr: '77px' }}>
          <TablePersonnel data={squad} />
          <TablePersonnelStructure
            commandersDivisions={data.getCommandersDivisions}
            commander={data.getCommander}
            getPersonnelDivision={data.getPersonnelDivision}
          />
        </Box>
      </Layout>
    )
  );
};
