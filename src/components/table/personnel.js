import avatar from '../../assets/images/avatar.png';
import * as React from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import MenuPerson from './menu';

export function TablePersonnel({ data }) {
  const students = [data.commander];
  data.groups?.forEach((group) => {
    students.push(group.commander);

    group.students.forEach((student) => students.push(student));
  });

  return (
    <Box sx={{ width: '360px' }}>
      <Box
        sx={{
          textAlign: 'center',
          pb: '10px',
          borderBottom: '1px solid #979797',
        }}
      >
        <Typography variant="inherit" sx={{ fontWeight: 'bold' }}>
          Личный состав
        </Typography>
      </Box>
      {students.map((row, index) => (
        <Box key={index} sx={{ px: '60px', borderBottom: '1px solid #979797' }}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent={'space-between'}
            sx={{ py: '17px' }}
          >
            <img src={row?.avatar || avatar} alt="avatar" />
            <Typography
              variant="inherit"
              sx={{ ml: '12px', textAlign: 'center' }}
            >
              <MenuPerson data={row} />
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
