import classes from './styles.module.scss';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';
import TooltipText from '../tooltip';

const Cell = ({ children, isBorder, text }) => {
  let component;

  if (text) {
    component = (
      <TableCell
        align="center"
        sx={{
          border: isBorder ? '' : 'none',
          width: '1%',
          color: text && 'red',
        }}
      >
        <TooltipText text={text}>
          <Box sx={{ fontSize: '20px' }}>{children}</Box>
        </TooltipText>
      </TableCell>
    );
  } else {
    component = (
      <TableCell
        align="center"
        sx={{
          border: isBorder ? '' : 'none',
          width: '1%',
        }}
      >
        {children}
      </TableCell>
    );
  }

  return component;
};

export function TableProfileStats({ scheduleVisits }) {
  console.log(scheduleVisits);
  return (
    <TableContainer
      component={Paper}
      sx={{ width: '100%', maxWidth: '1110px' }}
    >
      <Table aria-label="simple table" className={classes.tableCellHead}>
        <TableHead>
          <TableRow>
            <TableCell align="center">Предмет</TableCell>
            <TableCell align="center">Даты посещения</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {scheduleVisits.map(({ name, data }, index) => (
            <TableRow key={index}>
              <TableCell align="center" sx={{ width: '20%' }}>
                {name}
              </TableCell>

              <TableCell align="center" sx={{ width: '80%' }}>
                {data.map((row, indexRow) => (
                  <TableRow key={indexRow}>
                    {row.map((item, i) => (
                      <Cell text={item.text} isBorder={indexRow === 0} key={i}>
                        {console.log(indexRow)}
                        <Box>
                          <Typography variant="inherit">{item.date}</Typography>
                          <Typography variant="inherit">
                            {item.value}
                          </Typography>
                        </Box>
                      </Cell>
                    ))}{' '}
                  </TableRow>
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
