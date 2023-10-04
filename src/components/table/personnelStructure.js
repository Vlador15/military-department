import avatar from '../../assets/images/avatar.png';
import * as React from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import MenuPerson from './menu';

export function TablePersonnelStructure({ squad }) {
  return (
    <Box sx={{ width: '100%', ml: '60px' }}>
      <Box
        sx={{
          textAlign: 'center',
          pb: '10px',
          mb: '15px',
          borderBottom: '1px solid #979797',
        }}
      >
        <Typography variant="inherit" sx={{ fontWeight: 'bold' }}>
          Схема
        </Typography>
      </Box>

      <Box sx={{ width: '200px', mb: '35px', mx: 'auto' }}>
        {squad && squad.commander && (
          <Box sx={{ textAlign: 'center' }}>
            <img
              src={squad.commander.avatar || avatar}
              alt="avatar"
              width="50px"
            />
            <Box sx={{ mt: '20px' }}>
              {/* <MenuPerson data={commander} /> */}
              <Typography variant="inherit">
                {squad.commander.fullName || ''}
              </Typography>
            </Box>
            <Typography
              variant="inherit"
              sx={{ mt: '5px', fontWeight: 'bold', fontSize: '13px' }}
            >
              {squad.commander.role}
            </Typography>
          </Box>
        )}
      </Box>

      <Box display="flex" justifyContent="space-between">
        {squad.groups?.length &&
          squad.groups.map((group, index) => (
            <Box sx={{ textAlign: 'center', width: '200px' }} key={index}>
              <Box>
                <img
                  src={group.commander?.avatar || avatar}
                  alt="avatar"
                  width="50px"
                />
                <Box sx={{ mt: '20px' }}>
                  <MenuPerson data={group.commander} />
                </Box>

                <Typography
                  variant="inherit"
                  sx={{ mt: '5px', fontWeight: 'bold', fontSize: '13px' }}
                >
                  {group.commander?.role}
                </Typography>
              </Box>

              <Typography
                variant="inherit"
                sx={{
                  mt: '30px',
                  fontWeight: 'bold',
                  borderBottom: '1px solid #979797',
                  py: '10px',
                }}
              >
                Личный состав отделения
              </Typography>

              {group.students?.map((person, index) => (
                <Box
                  key={index}
                  sx={{
                    px: '20px',
                    fontSize: '14px',
                    borderBottom: '1px solid #979797',
                  }}
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent={'space-between'}
                    sx={{ py: '10px' }}
                  >
                    <Typography
                      variant="inherit"
                      sx={{ ml: '12px', textAlign: 'center' }}
                    >
                      {person.name}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          ))}
      </Box>
    </Box>
  );
}
