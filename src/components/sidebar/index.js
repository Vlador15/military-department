import { Box, TextField } from '@mui/material';
import classes from './styles.module.scss';
import { useState } from 'react';
import { TableSquad } from '../table/squads';
import CloseIcon from '@mui/icons-material/Close';

export function Sidebar() {
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);

  // УБРАТЬ MR ML и сделать контейнер для таблицы, чтобы она влезла
  return (
    <Box
      className={`${classes.sidebar} ${open ? classes.active : ''}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Box className={classes.close} onClick={() => setOpen(false)}>
        <CloseIcon fontSize="large" />
      </Box>
      <Box className={classes.sidebar__line}></Box>
      <Box className={classes.sidebar__container}>
        <Box sx={{ ml: '125px', mt: '43px', mb: '113px' }}>
          <TextField
            label="Поиск по взводам"
            id="outlined-size-normal"
            defaultValue={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ width: '300px', background: '#D9D9D9' }}
          />
        </Box>
        <Box sx={{ ml: '125px', mr: '72px' }}>
          <TableSquad search={search} close={() => setOpen(false)} />
        </Box>
      </Box>
    </Box>
  );
}
