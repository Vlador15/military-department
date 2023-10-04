import classes from './styles.module.scss';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material';

const Row = ({ label, value }) => (
  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
    <TableCell align="left">{label}</TableCell>
    <TableCell align="right">{value}</TableCell>
  </TableRow>
);

export const ProfileTable = ({ profile }) => {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650 }}
        aria-label="simple table"
        className={classes.tableCellHead}
      >
        <TableBody>
          <Row label="ФИО" value={profile.fullName} />
          <Row
            label="Дата рождения"
            value={profile.birthdate?.slice(0, 3).reverse().join('.')}
          />
          <Row label="Взвод" value={profile.platoon} />
          <Row label="Должность" value={profile.role} />
          <Row label="Номер ВУС" value={profile.vuc} />
        </TableBody>
      </Table>
    </TableContainer>
  );
};
