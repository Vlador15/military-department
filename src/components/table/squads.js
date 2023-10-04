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
import { observer } from 'mobx-react-lite';

export const TableSquad = observer(({ search, close }) => {
  const { data } = useContext(Context);
  const navigate = useNavigate();

  const handlerEvent = (type, row) => {
    data.setActiveSquad(row.id);
    if (close) close();

    switch (type) {
      case 'statistics': {
        navigate(`/statistics/${row.id}`);
        break;
      }
      case 'structure': {
        navigate(`/structure-squad/${row.id}`);
        break;
      }
      default: {
        data.setActiveSquad(row.id);
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
            .map((row, index) => {
              const students = row.groups.reduce(
                (acc, value) => acc + value.students?.length,
                0
              );
              return (
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
                  <TableCell align="center">{row.commander.fullName}</TableCell>
                  <TableCell align="center">{students}</TableCell>
                  <TableCell align="center">{row.commander.vuc}</TableCell>
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
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
});

// export function TableSquad({ search, close }) {
//    const { data } = useContext(Context);
//   const navigate = useNavigate();

//   const handlerEvent = (type, row) => {
//     data.setActiveSquad(row.id);
//     if (close) close();

//     switch (type) {
//       case 'statistics': {
//         navigate(`/statistics/${row.id}`);
//         break;
//       }
//       case 'structure': {
//         navigate(`/structure-squad/${row.id}`);
//         break;
//       }
//       default: {
//         data.setActiveSquad(row.id);
//       }
//     }
//   };

//   return (
//     <TableContainer component={Paper}>
//       <Table
//         sx={{ minWidth: 650 }}
//         aria-label="simple table"
//         className={classes.tableCellHead}
//       >
//         <TableHead>
//           <TableRow>
//             <TableCell align="center">Номер взвода</TableCell>
//             <TableCell align="center">Командир взвода</TableCell>
//             <TableCell align="center">Численность</TableCell>
//             <TableCell align="center">ВУС</TableCell>
//             <TableCell align="center"></TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {data.getSquads
//             .filter((x) => x.number.toString().indexOf(search) !== -1)
//             .map((row, index) => (
//               <TableRow
//                 key={index}
//                 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//               >
//                 <TableCell
//                   align="center"
//                   sx={{ color: '#1976d2', cursor: 'pointer' }}
//                   onClick={() => handlerEvent('statistics', row)}
//                 >
//                   {row.number}
//                 </TableCell>
//                 <TableCell align="center">{row.commander.fullName}</TableCell>
//                 <TableCell align="center">{row.students.length}</TableCell>
//                 <TableCell align="center">{row.commander.vuc}</TableCell>
//                 <TableCell align="center">
//                   <Button
//                     variant="contained"
//                     size="small"
//                     onClick={() => handlerEvent('structure', row)}
//                     sx={{ padding: '5px 20px' }}
//                   >
//                     Подробнее
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
