import classes from './styles.module.scss';
import avatar from '../../assets/images/avatar.png';

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

const Cell = ({ row, item, handleBtn }) => {
  let component;

  switch (row.type) {
    case 'img': {
      component = (
        <TableCell align="center">
          <img src={item[row.field] || avatar} alt="avatar" />
        </TableCell>
      );
      break;
    }
    case 'button': {
      component = (
        <TableCell align="center">
          <Button
            variant="contained"
            size="small"
            onClick={() => handleBtn(item.id)}
            sx={{ padding: '5px 20px' }}
          >
            Подробнее
          </Button>
        </TableCell>
      );
      break;
    }
    default:
      component = <TableCell align="center">{item[row.field]}</TableCell>;
  }

  return component;
};

export function TablePersonnelFull({ structure, handleBtn, data }) {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ width: 615 }}
        aria-label="simple table"
        className={classes.tableCellHead}
      >
        <TableHead>
          <TableRow>
            {structure.map(({ label }, index) => (
              <TableCell align="center" key={index}>
                {label}
              </TableCell>
            ))}
            {handleBtn && <TableCell align="center"></TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => {
            return (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {structure.map((row, index) => (
                  <Cell
                    row={row}
                    item={item}
                    key={index}
                    handleBtn={handleBtn}
                  />
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
