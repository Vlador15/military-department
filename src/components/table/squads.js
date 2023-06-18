import classes from './styles.module.scss';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../..';

export function TableSquad({ search, close }) {
  const { data } = useContext(Context);
  const navigate = useNavigate();

  const handlerEvent = (type, row) => {
    data.setActiveSquad(row.number);
    if (close) close();

    switch (type) {
      case 'statistics': {
        navigate(`/statistics/${row.number}`);
        break;
      }
      case 'structure': {
        navigate(`/structure-squad/${row.number}`);
        break;
      }
      default: {
        data.setActiveSquad(row.number);
      }
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650 }}
        aria-label="simple table"
        className={classes.tableCellHead}
      >
        <TableHead>
          <TableRow>
            <TableCell align="center">Номер взвода</TableCell>
            <TableCell align="center">Командир взвода</TableCell>
            <TableCell align="center">Численность</TableCell>
            <TableCell align="center">ВУС</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.getSquads
            .filter((x) => x.number.toString().indexOf(search) !== -1)
            .map((row, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell
                  align="center"
                  sx={{ color: '#1976d2', cursor: 'pointer' }}
                  onClick={() => handlerEvent('statistics', row)}
                >
                  {row.number}
                </TableCell>
                <TableCell align="center">{row.kom_squad}</TableCell>
                <TableCell align="center">{row.peoples}</TableCell>
                <TableCell align="center">{row.vus}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => handlerEvent('structure', row)}
                    sx={{ padding: '5px 20px' }}
                  >
                    Подробнее
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
