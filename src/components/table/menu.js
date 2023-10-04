import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Typography } from '@mui/material';

export default function MenuPerson({ data }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  if (!data) return;
  const { fullName, id } = data;

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleEvent = (type) => {
    // выполнить запрос API для снятия/назначения

    handleClose();
    switch (type) {
      case 'remove': {
        console.log(`Снятие с должности ID: ${id}`);
        break;
      }
      case 'add': {
        console.log(`Назначить ВРИО ID: ${id}`);
        break;
      }
      default: {
        handleClose();
      }
    }
  };

  return (
    <>
      <Typography
        variant="inherit"
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {fullName || ''}
      </Typography>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => handleEvent('remove')}>
          Снять с должности
        </MenuItem>
        <MenuItem onClick={() => handleEvent('add')}>Назначить ВРИО</MenuItem>
      </Menu>
    </>
  );
}
